import { gql, useMutation } from '@apollo/client';
import { APPROVED_EMAIL_MODEL_FRAGMENT } from '../../fragments/approved-emails-fields';

export const UPDATE_APPROVED_EMAIL = gql`
  mutation UpdateApprovedEmail($input: UpdateApprovedEmailsInput!) {
    updateApprovedEmails(input: $input) {
      approvedEmail {
        ...approvedEmailsFields
      }
    }
  }

  ${APPROVED_EMAIL_MODEL_FRAGMENT}
`;

// TODO: not fully implemented
export function useUpdateApprovedEmail() {
  return useMutation(UPDATE_APPROVED_EMAIL, {});
}
