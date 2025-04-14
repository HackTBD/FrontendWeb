import { gql } from '@apollo/client';

export const GET_ALL_HACKATHON_USER_PROFILES = gql`
  query GetAllHackathonUserProfiles {
    allHackathonUserProfiles {
      __typename
      edges {
        cursor
        node {
          ...hackathonUserProfilesFields
        }
      }
      pageInfo {
        ...pageInfoFields
      }
    }
  }
`;
