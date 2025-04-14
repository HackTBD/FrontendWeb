import { gql } from '@apollo/client';
import { HACKATHON_ORGANIZATION_MODEL_FRAGMENT } from '../../fragments/hackthon-organizations-fields';
import { PAGE_INFO_MODEL_FRAGMENT } from '../../fragments/page-info-fields';

export const GET_ALL_HACKATHON_ORGANIZATIONS = gql`
  query GetAllHackathonOrganizations {
    allHackathonOrganizations {
      __typename
      edges {
        cursor
        node {
          ...hackathonOrganizationsFields
        }
      }
      pageInfo {
        ...pageInfoFields
      }
    }
  }

  ${HACKATHON_ORGANIZATION_MODEL_FRAGMENT}
  ${PAGE_INFO_MODEL_FRAGMENT}
`;
