import { DocumentNode, gql } from '@apollo/client';
import { PAGE_INFO_MODEL_FRAGMENT } from './page-info-fields';

export const HACKATHON_ORGANIZATION_MODEL_FRAGMENT: DocumentNode = gql`
  fragment hackathonOrganizationsFields on HackathonOrganizationsNode {
    __typename
    contactEmail
    createdAt
    description
    hackathonEventss {
      __typename
      edges {
        cursor
        node {
          __typename
          id
          eventId
          name
          startDate
          endDate
        }
      }
      pageInfo {
        ...pageInfoFields
      }
    }
    id
    linkedin
    name
    orgId
    website
  }

  ${PAGE_INFO_MODEL_FRAGMENT}
`;
