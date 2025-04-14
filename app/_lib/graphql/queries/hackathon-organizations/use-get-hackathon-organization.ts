import { gql } from '@apollo/client';
import { HACKATHON_ORGANIZATION_MODEL_FRAGMENT } from '../../fragments/hackthon-organizations-fields';

export const GET_HACKATHON_ORGANIZATION_BY_ID = gql`
  query GetHackathonOrganizationById($id: ID!) {
    hackathonOrganization(id: $id) {
      ...hackathonOrganizationsFields
    }
  }

  ${HACKATHON_ORGANIZATION_MODEL_FRAGMENT}
`;
