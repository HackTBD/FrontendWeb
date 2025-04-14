import { gql, useMutation } from '@apollo/client';

export const DELETE_USER = gql`
  mutation DeleteUser($input: DeleteUsersInput!) {
    deleteUsers(input: $input) {
      success
    }
  }
`;

// TODO: Not fully implemented
export function useDeleteUser() {
  useMutation(DELETE_USER, {});
}
