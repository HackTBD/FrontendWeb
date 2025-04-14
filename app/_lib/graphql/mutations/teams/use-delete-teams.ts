import { gql, useMutation } from '@apollo/client';

export const DELETE_TEAM = gql`
  mutation DeleteTeam($teamId: UUID!) {
    deleteTeams(teamId: $teamId) {
      message
      success
    }
  }
`;

// TODO: Not fully implemented
export function useDeleteTeams() {
  return useMutation(DELETE_TEAM, {});
}
