import { gql, useMutation } from '@apollo/client';
import { USER_MODEL_FRAGMENT } from '../../fragments/users-fields';

export const CREATE_USER = gql`
  mutation CreateUser($input: CreateUsersInput!) {
    createUsers(input: $input) {
      user {
        ...usersFields
      }
    }
  }

  ${USER_MODEL_FRAGMENT}
`;

// TODO: Not fully implemented
export function useCreateUser() {
  return useMutation(CREATE_USER, {});
}
