import { DocumentNode, gql } from '@apollo/client';
import { USER_MODEL_FRAGMENT } from './users-fields';
import { HACKATHON_EVENT_MODEL_FRAGMENT } from './hackathon-events-fields';

export const HACKATHON_USER_PROFILE_MODEL_FRAGMENT: DocumentNode = gql`
  fragment hackathonUserProfilesFields on HackathonUserProfilesNode {
    __typename
    bio
    createdAt
    eventId
    hackathonEvents {
      ...hackathonEventsFields
    }
    id
    preferences
    profileId
    skills
    teamId
    updatedAt
    userId
    users {
      ...usersFields
    }
  }

  ${USER_MODEL_FRAGMENT}
  ${HACKATHON_EVENT_MODEL_FRAGMENT}
`;
