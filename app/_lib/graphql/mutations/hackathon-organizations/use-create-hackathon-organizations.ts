import { gql, useMutation } from '@apollo/client';
import { HACKATHON_ORGANIZATION_MODEL_FRAGMENT } from '../../fragments/hackthon-organizations-fields';

export const CREATE_HACKATHON_ORGANIZATION = gql`
  mutation CreateHackathonOrganization($input: HackathonOrganizationsInput!) {
    createHackathonOrganizations(input: $input) {
      ...hackathonOrganizationsFields
    }
  }

  ${HACKATHON_ORGANIZATION_MODEL_FRAGMENT}
`;

// TODO: Not fully implemented
export function useCreateHackathonOrganization() {
  useMutation(CREATE_HACKATHON_ORGANIZATION, {});
}
