import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';

export const GET_HACKATHON_USER_PROFILES_BY_EVENT_ID = gql`
  query GetHackathonUserProfilesByEventId($eventId: UUID!) {
    hackathonUserProfilesByEventId(eventId: $eventId) {
      edges {
        cursor
        node {
          id
          userId
          eventId
          teamId
          skills
          bio
          preferences
          createdAt
          updatedAt
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

export function useGetHackathonUserProfilesByEventId(eventId: string) {
  const { data, loading, error, refetch } = useQuery(
    GET_HACKATHON_USER_PROFILES_BY_EVENT_ID,
    {
      variables: { eventId },
      skip: !eventId,
    }
  );

  return {
    hackathonUserProfiles: data?.hackathonUserProfilesByEventId?.edges?.map((edge: any) => edge.node) || [],
    pageInfo: data?.hackathonUserProfilesByEventId?.pageInfo,
    loading,
    error,
    refetch,
  };
}