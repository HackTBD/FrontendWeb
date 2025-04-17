import { gql } from '@apollo/client';
import { PAGE_INFO_MODEL_FRAGMENT } from './page-info-fields';
import { USERS_CORE_FIELDS } from './users-core-fields';
import { TEAMS_CORE_FIELDS } from './teams-core-fields';

export const TEAM_MEMBER_MODEL_FRAGMENT = gql`
  fragment teamMembersFields on TeamMembersNode {
    __typename
    id
    teamId
    userId
    teamIdUserId

    teamss {
      edges {
        node {
          ...teamsCoreFields
        }
      }
      pageInfo {
        ...pageInfoFields
      }
    }

    userss {
      edges {
        node {
          ...usersCoreFields
        }
      }
      pageInfo {
        ...pageInfoFields
      }
    }
  }

  ${PAGE_INFO_MODEL_FRAGMENT}
  ${USERS_CORE_FIELDS}
  ${TEAMS_CORE_FIELDS}
`;
