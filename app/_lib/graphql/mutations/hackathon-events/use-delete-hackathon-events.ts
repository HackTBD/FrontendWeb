import { gql, useMutation } from '@apollo/client';

export const DELETE_HACKATHON_EVENT = gql`
  mutation DeleteHackathonEvent($id: ID!) {
    deleteHackathonEvents(id: $id) {
      success
    }
  }
`;

// TODO: Not fully implemented
export function useDeleteHackathonEvents() {
  return useMutation(DELETE_HACKATHON_EVENT, {});
}
