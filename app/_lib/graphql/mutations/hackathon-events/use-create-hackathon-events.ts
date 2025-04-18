import { gql, useMutation } from '@apollo/client';
import { HACKATHON_EVENT_MODEL_FRAGMENT } from '../../fragments/hackathon-events-fields';

export const CREATE_HACKATHON_EVENT = gql`
  mutation CreateHackathonEvent($input: HackathonEventsInput!) {
    createHackathonEvents(input: $input) {
      hackathonEvent {
        id
        name
        description
        startDate
        endDate
        minTeamSize
        maxTeamSize
        location
        isVirtual
        level
        status
        hackathonOrganizations {
          orgId
          name
        }
      }
    }
  }
`;

export function useCreateHackathonEvent() {
  return useMutation(CREATE_HACKATHON_EVENT, {
    onError: (error) => {
      console.error('GraphQL Mutation Error:', error);
    },
  });
}
