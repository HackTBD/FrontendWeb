import { gql, useMutation } from '@apollo/client';

export const DELETE_HACKATHON_ORGANIZATION = gql`
  mutation DeleteHackathonOrganization($id: ID!) {
    deleteHackathonOrganizations(id: $id) {
      message
      success
    }
  }
`;

// TODO: not fully implemented
export function useDeleteHackathonOrganizations() {
  useMutation(DELETE_HACKATHON_ORGANIZATION, {});
}
