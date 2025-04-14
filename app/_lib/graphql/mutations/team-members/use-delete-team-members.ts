import { gql, useMutation } from '@apollo/client';

export const DELETE_TEAM_MEMBER = gql`
  mutation DeleteTeamMember($teamIdUserId: UUID!) {
    deleteTeamMembers(teamIdUserId: $teamIdUserId) {
      success
      message
    }
  }
`;

// TODO: Not fully implemented
export function useDeleteTeamMembers() {
  useMutation(DELETE_TEAM_MEMBER, {});
}
