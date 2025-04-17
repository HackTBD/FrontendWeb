import { gql, useMutation } from '@apollo/client';
import { HACKATHON_ORGANIZATION_MODEL_FRAGMENT } from '../../fragments/hackthon-organizations-fields';

export const CREATE_HACKATHON_ORGANIZATION = gql`
  mutation CreateHackathonOrganization($input: HackathonOrganizationsInput!) {
    createHackathonOrganizations(input: $input) {
      hackathonOrganization {
        ...hackathonOrganizationsFields
      }
    }
  }

  ${HACKATHON_ORGANIZATION_MODEL_FRAGMENT}
`;

export function useCreateHackathonOrganization() {
  return useMutation(CREATE_HACKATHON_ORGANIZATION, {});
}
