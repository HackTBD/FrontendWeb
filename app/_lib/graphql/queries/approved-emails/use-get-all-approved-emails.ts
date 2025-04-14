import { gql, useQuery } from '@apollo/client';
import { ApprovedEmailsNodeEdge } from '../../__generated__/graphql';

export const GET_ALL_APPROVED_EMAILS = gql`
    query GetAllApprovedEmails {
        allApprovedEmails {
            edges {
                cursor
                node {
                    ...approvedEmailsFields
                }
            }
            pageInfo {
                ...pageInfoFields
            }
        }
    }
`;

// TODO: Might not be what we want
export function useGetAllApprovedEmails() {
  const { data, loading, error, refetch } = useQuery(
    GET_ALL_APPROVED_EMAILS,
    {
      fetchPolicy: 'cache-and-network',
    }
  );

  return {
    approvedEmails:
      data?.allApprovedEmails?.edges?.map(
        (edge: { node: ApprovedEmailsNodeEdge }) => edge?.node
      ) ?? [],
    pageInfo: data?.allApprovedEmails?.pageInfo,
    loading,
    error,
    refetch
  };
}