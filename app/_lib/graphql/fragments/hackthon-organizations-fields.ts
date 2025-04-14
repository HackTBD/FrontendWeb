import { DocumentNode, gql } from '@apollo/client';
import { HACKATHON_EVENT_MODEL_FRAGMENT } from './hackathon-events-fields';
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
          ...hackathonEventsFields
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

  ${HACKATHON_EVENT_MODEL_FRAGMENT}
  ${PAGE_INFO_MODEL_FRAGMENT}
`;
