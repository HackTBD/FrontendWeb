import { gql, useMutation } from '@apollo/client';
import { HACKATHON_EVENT_MODEL_FRAGMENT } from '../../fragments/hackathon-events-fields';

export const CREATE_HACKATHON_EVENT = gql`
  mutation CreateHackathonEvent($input: HackathonEventsInput!) {
    createHackathonEvents(input: $input) {
      hackathonEvent {
        ...hackathonEventsFields
      }
    }
  }

  ${HACKATHON_EVENT_MODEL_FRAGMENT}
`;

export function useCreateHackathonEvent() {
  useMutation(CREATE_HACKATHON_EVENT, {});
}
