import { gql, useMutation } from '@apollo/client';
import { HACKATHON_ORGANIZATION_MODEL_FRAGMENT } from '../../fragments/hackthon-organizations-fields';

export const UPDATE_HACKATHON_ORGANIZATION = gql`
  mutation UpdateHackathonOrganization(
    $id: ID!
    $input: HackathonOrganizationsInput!
  ) {
    updateHackathonOrganizations(id: $id, input: $input) {
      hackathonOrganization {
        ...hackathonOrganizationsFields
      }
    }
  }

  ${HACKATHON_ORGANIZATION_MODEL_FRAGMENT}
`;

export function useUpdateHackathonOrganizations() {
  useMutation(UPDATE_HACKATHON_ORGANIZATION, {});
}
