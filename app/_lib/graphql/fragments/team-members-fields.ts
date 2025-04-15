import { gql } from '@apollo/client';
import { PAGE_INFO_MODEL_FRAGMENT } from './page-info-fields';
import { TEAM_MODEL_FRAGMENT } from './teams-fields';
import { USER_MODEL_FRAGMENT } from './users-fields';

export const TEAM_MEMBER_MODEL_FRAGMENT = gql`
  fragment teamMembersFields on TeamMembersNode {
    __typename
    id
    teamId
    teamIdUserId
    teamss {
      __typename
      edges {
        cursor
        node {
          ...teamsFields
        }
      }
      pageInfo {
        ...pageInfoFields
      }
    }
    userId
    userss {
      __typename
      edges {
        cursor
        node {
          ...usersFields
        }
      }
      pageInfo {
        ...pageInfoFields
      }
    }
  }

  ${TEAM_MODEL_FRAGMENT}
  ${USER_MODEL_FRAGMENT}
  ${PAGE_INFO_MODEL_FRAGMENT}
`;
