import { gql, useMutation } from '@apollo/client';

export const DELETE_APPROVED_EMAIL = gql`
  mutation DeleteApprovedEmail($keyEmailEventId: UUID!) {
    deleteApprovedEmails(keyEmailEventId: $keyEmailEventId) {
      success
      message
    }
  }
`;

// TODO: Not fully implemented
export function useDeleteApprovedEmail() {
  return useMutation(DELETE_APPROVED_EMAIL, {});
}
