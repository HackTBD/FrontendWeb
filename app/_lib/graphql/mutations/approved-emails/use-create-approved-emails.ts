import { gql, useMutation } from '@apollo/client';
import { APPROVED_EMAIL_MODEL_FRAGMENT } from '../../fragments/approved-emails-fields';

export const CREATE_APPROVED_EMAIL = gql`
  mutation CreateApprovedEmail($input: ApprovedEmailsInput!) {
    createApprovedEmails(input: $input) {
      approvedEmail {
        ...approvedEmailsFields
      }
    }
  }

  ${APPROVED_EMAIL_MODEL_FRAGMENT}
`;

// TODO: Not fully implemented
export function useCreateApprovedEmail() {
  return useMutation(CREATE_APPROVED_EMAIL, {});
}
