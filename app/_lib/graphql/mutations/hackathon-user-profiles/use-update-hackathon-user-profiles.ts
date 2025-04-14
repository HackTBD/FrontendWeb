import { gql, useMutation } from '@apollo/client';
import { HACKATHON_USER_PROFILE_MODEL_FRAGMENT } from '../../fragments/hackathon-user-profiles-fields';

export const UPDATE_HACKATHON_USER_PROFILE = gql`
  mutation UpdateHackathonUserProfile(
    $id: ID!
    $input: HackathonUserProfilesInput!
  ) {
    updateHackathonUserProfiles(id: $id, input: $input) {
      hackathonUserProfile {
        ...hackathonUserProfilesFields
      }
    }
  }

  ${HACKATHON_USER_PROFILE_MODEL_FRAGMENT}
`;

// TODO: Not fully implemented
export function useUpdateHackathonUserProfiles() {
  useMutation(UPDATE_HACKATHON_USER_PROFILE, {});
}
