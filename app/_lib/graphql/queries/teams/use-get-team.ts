import { gql, useQuery } from '@apollo/client';

// GraphQL query definition
export const GET_TEAMS_BY_EVENT_ID = gql`
  query GetTeamsByEventId($eventId: UUID!) {
    allTeams(eventId: $eventId) {
      edges {
        node {
          teamId
          teamName
          status
          createdAt
          skillsNeeded
          backgroundNeeded
          hackathonEvents {
            id
            name
          }
        }
      }
    }
  }
`;

// React hook function to use this query
export function useGetTeamsByEventId(eventId: string) {
  const { data, loading, error } = useQuery(GET_TEAMS_BY_EVENT_ID, {
    variables: { eventId },
    skip: !eventId, // Optional: skip query if eventId is undefined/null
  });

  return {
    teams: data?.allTeams?.edges?.map((edge: any) => edge.node) || [],
    loading,
    error,
  };
}
