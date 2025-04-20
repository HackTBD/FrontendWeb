import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import { HACKATHON_EVENT_MODEL_FRAGMENT } from '../../fragments/hackathon-events-fields';

export const GET_HACKATHON_EVENT_BY_EVENT_ID = gql`
  query GetHackathonEventByEventId($eventId: UUID!) {
    hackathonEventByEventId(eventId: $eventId) {
      ...hackathonEventsFields
    }
  }
  ${HACKATHON_EVENT_MODEL_FRAGMENT}
`;

export function useGetHackathonEventById(eventId: string) {
  const { data, loading, error, refetch } = useQuery(
    GET_HACKATHON_EVENT_BY_EVENT_ID,
    {
      variables: { eventId },
      skip: !eventId,
    }
  );

  return {
    hackathonEvent: data?.hackathonEventByEventId,
    loading,
    error,
    refetch,
  };
}
