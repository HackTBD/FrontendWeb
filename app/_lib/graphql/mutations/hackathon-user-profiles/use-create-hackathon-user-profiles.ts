import { gql, useMutation } from '@apollo/client';
import { HACKATHON_USER_PROFILE_MODEL_FRAGMENT } from '../../fragments/hackathon-user-profiles-fields';

export const CREATE_HACKATHON_USER_PROFILE = gql`
  mutation CreateHackathonUserProfile($input: HackathonUserProfilesInput!) {
    createHackathonUserProfiles(input: $input) {
      hackathonUserProfile {
        ...hackathonUserProfilesFields
      }
    }
  }

  ${HACKATHON_USER_PROFILE_MODEL_FRAGMENT}
`;

// TODO: Not fully implemented
export function useCreateHackathonUserProfile() {
  useMutation(CREATE_HACKATHON_USER_PROFILE, {});
}
