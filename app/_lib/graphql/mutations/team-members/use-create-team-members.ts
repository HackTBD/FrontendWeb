import { gql, useMutation } from '@apollo/client';
import { TEAM_MEMBER_MODEL_FRAGMENT } from '../../fragments/team-members-fields';

export const CREATE_TEAM_MEMBER = gql`
  mutation CreateTeamMember($input: CreateTeamMembersInput!) {
    createTeamMembers(input: $input) {
      teamMember {
        ...teamMembersFields
      }
    }
  }

  ${TEAM_MEMBER_MODEL_FRAGMENT}
`;

// TODO: Not fully implemented
export function useCreateTeamMember() {
  useMutation(CREATE_TEAM_MEMBER, {});
}
