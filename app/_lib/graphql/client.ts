import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from,
  ApolloLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { RetryLink } from '@apollo/client/link/retry';

// Constants
const API_URL =
  process.env.NEXT_PUBLIC_GRAPHQL_URL || 'http://localhost:8000/graphql/';
const MAX_RETRIES = 3;

// Create HTTP link with proper URI
const httpLink = createHttpLink({
  uri: API_URL,
  credentials: 'include', // Better for cross-domain cookies than 'same-origin'
});

// Auth link to add token to requests
const authLink = setContext((_, { headers }) => {
  // Get token from localStorage or session storage
  const token =
    typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
      'Content-Type': 'application/json',
    },
  };
});

// Custom logging link for debugging
const loggingLink = new ApolloLink((operation, forward) => {
  // Log operations in development mode only
  if (process.env.NODE_ENV === 'development') {
    console.log(`GraphQL Request: ${operation.operationName}`);
  }

  return forward(operation).map((response) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`GraphQL Response for ${operation.operationName}:`, response);
    }
    return response;
  });
});

// Comprehensive error handling
const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    // Handle GraphQL errors
    if (graphQLErrors) {
      for (const error of graphQLErrors) {
        const { message, path, extensions } = error;

        // Log error details
        console.error(
          `[GraphQL error] for operation ${operation.operationName}:`,
          message,
          path ? `at path: ${path.join(' > ')}` : '',
          extensions?.code ? `code: ${extensions.code}` : ''
        );

        // Handle specific error types
        switch (extensions?.code) {
          case 'UNAUTHENTICATED':
            // Handle authentication errors
            if (typeof window !== 'undefined') {
              localStorage.removeItem('authToken');
              // Redirect to login
              window.location.href = '/login?session=expired';
            }
            break;
          case 'FORBIDDEN':
            // Handle permission errors
            console.error('Permission denied');
            break;
          case 'VALIDATION_ERROR':
            // Handle validation errors
            console.error('Validation failed:', error.extensions?.errors);
            break;
        }
      }
    }

    // Handle network errors
    if (networkError) {
      console.error(
        `[Network error] for ${operation.operationName}:`,
        networkError
      );

      // Handle based on status code
      if ('statusCode' in networkError) {
        const { statusCode } = networkError;

        switch (statusCode) {
          case 401:
            if (typeof window !== 'undefined') {
              localStorage.removeItem('authToken');
              window.location.href = '/login?session=expired';
            }
            break;
          case 403:
            console.error('Access forbidden');
            break;
          case 429:
            console.error('Rate limit exceeded. Please try again later.');
            break;
          case 500:
            console.error('Server error. Our team has been notified.');
            break;
        }
      }
    }
  }
);

// Retry link for transient network issues
const retryLink = new RetryLink({
  delay: {
    initial: 300, // ms
    max: 3000, // max delay between retries
    jitter: true, // randomize delays
  },
  attempts: {
    max: MAX_RETRIES,
    retryIf: (error, _operation) => {
      // Only retry on network errors, not user errors
      return !!error && !error.result?.errors;
    },
  },
});

// Cache configuration with type policies
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        // Example of custom merge function for paginated data
        allHackathonEvents: {
          keyArgs: false,
          merge(existing = { edges: [] }, incoming) {
            return {
              ...incoming,
              edges: [...existing.edges, ...incoming.edges],
            };
          },
        },
      },
    },
  },
});

// Create and export Apollo Client instance
export const apolloClient = new ApolloClient({
  link: from([retryLink, authLink, errorLink, loggingLink, httpLink]),
  cache,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network', // Better UX than cache-first
      nextFetchPolicy: 'cache-first', // Use cache after initial load
      errorPolicy: 'all',
    },
    query: {
      fetchPolicy: 'cache-first', // Changed from network-only for better performance
      errorPolicy: 'all',
    },
    mutate: {
      errorPolicy: 'all',
    },
  },
  connectToDevTools: process.env.NODE_ENV === 'development',
});

// Helper for clearing cache on logout
export const clearApolloCache = () => {
  return apolloClient.resetStore();
};
