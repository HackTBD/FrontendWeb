import { gql } from '@apollo/client';
import { TEAM_MEMBER_MODEL_FRAGMENT } from '../../fragments/team-members-fields';

export const GET_TEAM_MEMBER_BY_ID = gql`
  query GetTeamMemberById($id: ID!) {
    teamMember(id: $id) {
      ...teamMembersFields
    }
  }

  ${TEAM_MEMBER_MODEL_FRAGMENT}
`;
