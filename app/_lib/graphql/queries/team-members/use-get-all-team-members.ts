import { gql } from '@apollo/client';
import { TEAM_MEMBER_MODEL_FRAGMENT } from '../../fragments/team-members-fields';
import { PAGE_INFO_MODEL_FRAGMENT } from '../../fragments/page-info-fields';

export const GET_ALL_TEAM_MEMBERS = gql`
  query GetAllTeamMembers {
    allTeamMembers {
      __typename
      edges {
        cursor
        node {
          ...teamMembersFields
        }
      }
      pageInfo {
        ...pageInfoFields
      }
    }
  }

  ${TEAM_MEMBER_MODEL_FRAGMENT}
  ${PAGE_INFO_MODEL_FRAGMENT}
`;
