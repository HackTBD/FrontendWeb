import { DocumentNode, gql } from '@apollo/client';

export const HACKATHON_USER_PROFILE_MODEL_FRAGMENT: DocumentNode = gql`
  fragment hackathonUserProfilesFields on HackathonUserProfilesNode {
    __typename
    bio
    createdAt
    eventId
    hackathonEvents {
      __typename
      id
      eventId
      name
    }
    id
    preferences
    profileId
    skills
    teamId
    updatedAt
    userId
    users {
      __typename
      id
      userId
      firstName
      lastName
      email
    }
  }
`;
