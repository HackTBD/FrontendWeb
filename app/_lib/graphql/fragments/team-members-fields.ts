import { gql } from '@apollo/client';
import { PAGE_INFO_MODEL_FRAGMENT } from './page-info-fields';

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
          __typename
          id
          teamId
          teamName
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
          __typename
          id
          userId
          firstName
          lastName
        }
      }
      pageInfo {
        ...pageInfoFields
      }
    }
  }

  ${PAGE_INFO_MODEL_FRAGMENT}
`;
