import { gql, useMutation } from '@apollo/client';
import { HACKATHON_EVENT_MODEL_FRAGMENT } from '../../fragments/hackathon-events-fields';

export const UPDATE_HACKATHON_EVENT = gql`
  mutation UpdateHackathonEvent($id: ID!, $input: HackathonEventsInput!) {
    updateHackathonEvents(id: $id, input: $input) {
      hackathonEvent {
        ...hackathonEventsFields
      }
    }
  }

  ${HACKATHON_EVENT_MODEL_FRAGMENT}
`;

// TODO: Not fully implemented
export function useUpdateHackathonEvent() {
  return useMutation(UPDATE_HACKATHON_EVENT, {});
}
