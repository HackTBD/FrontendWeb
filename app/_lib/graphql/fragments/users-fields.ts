import { DocumentNode, gql } from '@apollo/client';
import { PAGE_INFO_MODEL_FRAGMENT } from './page-info-fields';
import { HACKATHON_USER_PROFILE_MODEL_FRAGMENT } from './hackathon-user-profiles-fields';
import { TEAM_MEMBER_MODEL_FRAGMENT } from './team-members-fields';

export const USER_MODEL_FRAGMENT: DocumentNode = gql`
  fragment usersFields on UsersNode {
    __typename
    authProvider
    authProviderId
    createdAt
    devpost
    email
    firstName
    github
    hackathonUserProfiless {
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
    id
    isAdmin
    lastName
    linkedin
    phoneNumber
    teamMemberss {
      __typename
      edges {
        cursor
        node {
          ...teamMembersFields
        }
      }
      pageInfo {
        ...pageInfoFields
      }
    }
    updatedAt
    userId
  }

  ${PAGE_INFO_MODEL_FRAGMENT}
  ${HACKATHON_USER_PROFILE_MODEL_FRAGMENT}
  ${TEAM_MEMBER_MODEL_FRAGMENT}
`;
