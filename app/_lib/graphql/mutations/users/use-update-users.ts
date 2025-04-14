import { gql, useMutation } from '@apollo/client';
import { USER_MODEL_FRAGMENT } from '../../fragments/users-fields';

export const UPDATE_USER = gql`
  mutation UpdateUser($input: UpdateUsersInput!) {
    updateUsers(input: $input) {
      user {
        ...usersFields
      }
    }
  }

  ${USER_MODEL_FRAGMENT}
`;

// TODO: Not fully implemented
export function useUpdateUser() {
  return useMutation(UPDATE_USER, {});
}
