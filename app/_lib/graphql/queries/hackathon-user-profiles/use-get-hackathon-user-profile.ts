import { gql } from '@apollo/client';
import { HACKATHON_USER_PROFILE_MODEL_FRAGMENT } from '../../fragments/hackathon-user-profiles-fields';

export const GET_HACKATHON_USER_PROFILE_BY_ID = gql`
  query GetHackathonUserProfileById($id: ID!) {
    hackathonUserProfile(id: $id) {
      ...hackathonUserProfilesFields
    }
  }

  ${HACKATHON_USER_PROFILE_MODEL_FRAGMENT}
`;
