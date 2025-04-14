import { gql, useQuery } from '@apollo/client';
import { APPROVED_EMAIL_MODEL_FRAGMENT } from '../../fragments/approved-emails-fields';

export const GET_APPROVED_EMAIL = gql`
    query GetApprovedEmailById($id: ID!) {
        approvedEmail(id: $id) {
            ...approvedEmailsFields
        }
    }
    
    ${APPROVED_EMAIL_MODEL_FRAGMENT}
`;

// TODO: Might not be what we want
export function useGetApprovedEmail(id: string) {
  const { data, loading, error, refetch } = useQuery(
    GET_APPROVED_EMAIL,
    {
      variables: { id },
      skip: !id,
      fetchPolicy: 'cache-and-network',
    }
  );

  return {
    approvedEmail: data?.approvedEmail,
    loading,
    error,
    refetch,
  };
}