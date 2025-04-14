import { gql, useMutation } from '@apollo/client';
import { TEAM_MODEL_FRAGMENT } from '../../fragments/teams-fields';

export const UPDATE_TEAM = gql`
  mutation UpdateTeam($input: UpdateTeamInput!) {
    updateTeams(input: $input) {
      team {
        ...teamsFields
      }
    }
  }

  ${TEAM_MODEL_FRAGMENT}
`;

// TODO: Not fully implemented
export function useUpdateTeams() {
  return useMutation(UPDATE_TEAM, {});
}
