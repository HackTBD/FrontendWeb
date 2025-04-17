import { DocumentNode, gql } from '@apollo/client';
import { USERS_CORE_FIELDS } from './users-core-fields'; 
import { HACKATHON_EVENTS_CORE_FIELDS } from './hackathon-events-core-fields'; 

export const HACKATHON_USER_PROFILE_MODEL_FRAGMENT: DocumentNode = gql`
  fragment hackathonUserProfilesFields on HackathonUserProfilesNode {
    __typename
    bio
    createdAt
    eventId
    hackathonEvents {
      ...hackathonEventsCoreFields
    }
    id
    preferences
    profileId
    skills
    teamId
    updatedAt
    userId
    users {
      ...usersCoreFields
    }
  }

  ${USERS_CORE_FIELDS}
  ${HACKATHON_EVENTS_CORE_FIELDS}
`;
