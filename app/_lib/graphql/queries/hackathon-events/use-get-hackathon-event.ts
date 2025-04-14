import { gql, useQuery } from '@apollo/client';
import { HACKATHON_EVENT_MODEL_FRAGMENT } from '../../fragments/hackathon-events-fields';
import { HackathonEventsNode } from '../../__generated__/graphql';

export const GET_HACKATHON_EVENT_BY_ID = gql`
  query GetHackathonEventById($id: ID!) {
    hackathonEvent(id: $id) {
      ...hackathonEventsFields
    }
  }

  ${HACKATHON_EVENT_MODEL_FRAGMENT}
`;

// TODO: Recheck
export function useGetHackathonEventById(id: string) {
  const { data, loading, error, refetch } = useQuery(
    GET_HACKATHON_EVENT_BY_ID,
    {
      variables: { id },
      skip: !id, // prevent query if id is falsy
      fetchPolicy: 'cache-and-network',
    }
  );

  const hackathonEvent: HackathonEventsNode | null =
    data?.hackathonEvent ?? null;

  return {
    hackathonEvent,
    loading,
    error,
    refetch,
  };
}
