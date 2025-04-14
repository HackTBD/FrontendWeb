import { gql, useQuery } from '@apollo/client';
import { USER_MODEL_FRAGMENT } from '../../fragments/users-fields';
import { UsersNode } from '../../__generated__/graphql';

export const GET_USER_BY_ID = gql`
  query GetUserById($id: ID!) {
    user(id: $id) {
      ...usersFields
    }
  }

  ${USER_MODEL_FRAGMENT}
`;

// TODO: gotta recheck
export function useGetUserById(id: string) {
  const { data, loading, error, refetch } = useQuery(GET_USER_BY_ID, {
    variables: { id },
    skip: !id, // only run query if id is truthy
    fetchPolicy: 'cache-and-network',
  });

  const user: UsersNode | null = data?.user ?? null;

  return {
    user,
    loading,
    error,
    refetch,
  };
}
