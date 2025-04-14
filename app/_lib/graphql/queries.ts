// lib/graphql/queries.js
import { gql } from '@apollo/client';

// Approved Emails Queries
export const GET_ALL_APPROVED_EMAILS = gql`
  query GetAllApprovedEmails {
    allApprovedEmails {
      edges {
        node {
          id
          keyEmailEventId
          email
          eventId
          addedAt
          hackathonEvents {
            id
            name
          }
        }
      }
    }
  }
`;

export const GET_APPROVED_EMAIL_BY_ID = gql`
  query GetApprovedEmailById($id: ID!) {
    approvedEmail(id: $id) {
      id
      keyEmailEventId
      email
      eventId
      addedAt
      hackathonEvents {
        id
        name
      }
    }
  }
`;

// Hackathon Events Queries
export const GET_ALL_HACKATHON_EVENTS = gql`
  query GetAllHackathonEvents {
    allHackathonEvents {
      edges {
        node {
          id
          eventId
          orgId
          name
          description
          startDate
          endDate
          minTeamSize
          maxTeamSize
          teamSize
          location
          isVirtual
          level
          status
          createdAt
          hackathonOrganizations {
            id
            name
          }
        }
      }
    }
  }
`;

export const GET_HACKATHON_EVENT_BY_ID = gql`
  query GetHackathonEventById($id: ID!) {
    hackathonEvent(id: $id) {
      id
      eventId
      orgId
      name
      description
      startDate
      endDate
      minTeamSize
      maxTeamSize
      teamSize
      location
      isVirtual
      level
      status
      createdAt
      hackathonOrganizations {
        id
        name
      }
    }
  }
`;

// Hackathon Organizations Queries
export const GET_ALL_HACKATHON_ORGANIZATIONS = gql`
  query GetAllHackathonOrganizations {
    allHackathonOrganizations {
      edges {
        node {
          id
          orgId
          name
          website
          linkedin
          contactEmail
          description
          createdAt
        }
      }
    }
  }
`;

export const GET_HACKATHON_ORGANIZATION_BY_ID = gql`
  query GetHackathonOrganizationById($id: ID!) {
    hackathonOrganization(id: $id) {
      id
      orgId
      name
      website
      linkedin
      contactEmail
      description
      createdAt
    }
  }
`;

// Hackathon User Profiles Queries
export const GET_ALL_HACKATHON_USER_PROFILES = gql`
  query GetAllHackathonUserProfiles {
    allHackathonUserProfiles {
      edges {
        node {
          id
          profileId
          userId
          eventId
          skills
          preferences
          bio
          teamId
          createdAt
          updatedAt
          hackathonEvents {
            id
            name
          }
          users {
            id
            email
            firstName
            lastName
          }
        }
      }
    }
  }
`;

export const GET_HACKATHON_USER_PROFILE_BY_ID = gql`
  query GetHackathonUserProfileById($id: ID!) {
    hackathonUserProfile(id: $id) {
      id
      profileId
      userId
      eventId
      skills
      preferences
      bio
      teamId
      createdAt
      updatedAt
      hackathonEvents {
        id
        name
      }
      users {
        id
        email
        firstName
        lastName
      }
    }
  }
`;

// Team Members Queries
export const GET_ALL_TEAM_MEMBERS = gql`
  query GetAllTeamMembers {
    allTeamMembers {
      edges {
        node {
          id
          teamIdUserId
          teamId
          userId
          teamss {
            edges {
              node {
                id
                teamName
              }
            }
          }
          userss {
            edges {
              node {
                id
                email
                firstName
                lastName
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_TEAM_MEMBER_BY_ID = gql`
  query GetTeamMemberById($id: ID!) {
    teamMember(id: $id) {
      id
      teamIdUserId
      teamId
      userId
      teamss {
        edges {
          node {
            id
            teamName
          }
        }
      }
      userss {
        edges {
          node {
            id
            email
            firstName
            lastName
          }
        }
      }
    }
  }
`;

// Teams Queries
export const GET_ALL_TEAMS = gql`
  query GetAllTeams {
    allTeams {
      edges {
        node {
          id
          teamId
          eventId
          teamName
          status
          createdAt
          hackathonEvents {
            id
            name
          }
          teamMemberss {
            edges {
              node {
                id
                userId
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_TEAM_BY_ID = gql`
  query GetTeamById($id: ID!) {
    team(id: $id) {
      id
      teamId
      eventId
      teamName
      status
      createdAt
      hackathonEvents {
        id
        name
      }
      teamMemberss {
        edges {
          node {
            id
            userId
          }
        }
      }
    }
  }
`;

// Users Queries
export const GET_ALL_USERS = gql`
  query GetAllUsers {
    allUsers {
      edges {
        node {
          id
          userId
          authProvider
          authProviderId
          email
          phoneNumber
          firstName
          lastName
          github
          linkedin
          devpost
          isAdmin
          createdAt
          updatedAt
        }
      }
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query GetUserById($id: ID!) {
    user(id: $id) {
      id
      userId
      authProvider
      authProviderId
      email
      phoneNumber
      firstName
      lastName
      github
      linkedin
      devpost
      isAdmin
      createdAt
      updatedAt
    }
  }
`;
//
// // Custom Queries
// export const GET_USERS_BY_EVENT = gql`
//   query GetUsersByEvent($eventId: UUID!) {
//     usersByEvent(eventId: $eventId) {
//       edges {
//         node {
//           id
//           userId
//           email
//           firstName
//           lastName
//           hackathonUserProfiless {
//             edges {
//               node {
//                 profileId
//                 skills
//                 bio
//                 teamId
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;
//
// export const GET_TEAMS_BY_EVENT = gql`
//   query GetTeamsByEvent($eventId: UUID!) {
//     teamsByEvent(eventId: $eventId) {
//       edges {
//         node {
//           id
//           teamId
//           teamName
//           status
//           teamMembers {
//             edges {
//               node {
//                 id
//                 userId
//                 userss {
//                   edges {
//                     node {
//                       id
//                       firstName
//                       lastName
//                       email
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;
