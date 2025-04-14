import { gql, useMutation } from '@apollo/client';
import { TEAM_MODEL_FRAGMENT } from '../../fragments/teams-fields';
import { UPDATE_TEAM } from '../../mutation';

export const CREATE_TEAM = gql`
  mutation CreateTeam($input: CreateTeamsInput!) {
    createTeams(input: $input) {
      team {
        ...teamsFields
      }
    }
  }

  ${TEAM_MODEL_FRAGMENT}
`;

// TODO: Not fully implemented
export function useCreateTeam() {
  useMutation(CREATE_TEAM, {});
}
