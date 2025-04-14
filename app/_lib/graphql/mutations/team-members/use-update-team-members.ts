import { gql, useMutation } from '@apollo/client';
import { TEAM_MEMBER_MODEL_FRAGMENT } from '../../fragments/team-members-fields';

export const UPDATE_TEAM_MEMBER = gql`
  mutation UpdateTeamMember($input: UpdateTeamMembersInput!) {
    updateTeamMembers(input: $input) {
      teamMember {
        ...teamMembersFields
      }
    }
  }

  ${TEAM_MEMBER_MODEL_FRAGMENT}
`;

// TODO: Not fully implemented
export function useUpdateTeamMembers() {
  return useMutation(UPDATE_TEAM_MEMBER, {});
}
