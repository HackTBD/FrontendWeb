import { gql, useMutation } from '@apollo/client';

export const DELETE_HACKATHON_USER_PROFILE = gql`
  mutation DeleteHackathonUserProfile($id: ID!) {
    deleteHackathonUserProfiles(id: $id) {
      success
    }
  }
`;

// TODO: Not fully implemented
export function useDeleteHackathonUserProfile() {
  return useMutation(DELETE_HACKATHON_USER_PROFILE, {});
}
