// hackathon-organizations-fields.ts
import { DocumentNode, gql } from '@apollo/client';
import { HACKATHON_EVENTS_CORE_FIELDS } from './hackathon-events-core-fields';
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
          ...hackathonEventsCoreFields
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

  ${HACKATHON_EVENTS_CORE_FIELDS}
  ${PAGE_INFO_MODEL_FRAGMENT}
`;
