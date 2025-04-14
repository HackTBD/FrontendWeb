// lib/graphql/mutations.js
import { gql } from '@apollo/client';

// Approved Emails Mutations
export const CREATE_APPROVED_EMAIL = gql`
  mutation CreateApprovedEmail($input: ApprovedEmailsInput!) {
    createApprovedEmails(input: $input) {
      approvedEmail {
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
`;

export const UPDATE_APPROVED_EMAIL = gql`
  mutation UpdateApprovedEmail($input: UpdateApprovedEmailsInput!) {
    updateApprovedEmails(input: $input) {
      approvedEmail {
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
`;

export const DELETE_APPROVED_EMAIL = gql`
  mutation DeleteApprovedEmail($keyEmailEventId: UUID!) {
    deleteApprovedEmails(keyEmailEventId: $keyEmailEventId) {
      success
    }
  }
`;

// Hackathon Events Mutations
export const CREATE_HACKATHON_EVENT = gql`
  mutation CreateHackathonEvent($input: HackathonEventsInput!) {
    createHackathonEvents(input: $input) {
      hackathonEvent {
        id
        eventId
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
`;

export const UPDATE_HACKATHON_EVENT = gql`
  mutation UpdateHackathonEvent($id: ID!, $input: HackathonEventsInput!) {
    updateHackathonEvents(id: $id, input: $input) {
      hackathonEvent {
        id
        eventId
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
`;

export const DELETE_HACKATHON_EVENT = gql`
  mutation DeleteHackathonEvent($id: ID!) {
    deleteHackathonEvents(id: $id) {
      success
    }
  }
`;

// Hackathon Organizations Mutations
export const CREATE_HACKATHON_ORGANIZATION = gql`
  mutation CreateHackathonOrganization($input: HackathonOrganizationsInput!) {
    createHackathonOrganizations(input: $input) {
      hackathonOrganization {
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
`;

export const UPDATE_HACKATHON_ORGANIZATION = gql`
  mutation UpdateHackathonOrganization(
    $id: ID!
    $input: HackathonOrganizationsInput!
  ) {
    updateHackathonOrganizations(id: $id, input: $input) {
      hackathonOrganization {
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
`;

export const DELETE_HACKATHON_ORGANIZATION = gql`
  mutation DeleteHackathonOrganization($id: ID!) {
    deleteHackathonOrganizations(id: $id) {
      message
      success
    }
  }
`;

// Hackathon User Profiles Mutations
export const CREATE_HACKATHON_USER_PROFILE = gql`
  mutation CreateHackathonUserProfile($input: HackathonUserProfilesInput!) {
    createHackathonUserProfiles(input: $input) {
      hackathonUserProfile {
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
`;

export const UPDATE_HACKATHON_USER_PROFILE = gql`
  mutation UpdateHackathonUserProfile(
    $id: ID!
    $input: HackathonUserProfilesInput!
  ) {
    updateHackathonUserProfiles(id: $id, input: $input) {
      hackathonUserProfile {
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
`;

export const DELETE_HACKATHON_USER_PROFILE = gql`
  mutation DeleteHackathonUserProfile($id: ID!) {
    deleteHackathonUserProfiles(id: $id) {
      success
    }
  }
`;

// Team Members Mutations
export const CREATE_TEAM_MEMBER = gql`
  mutation CreateTeamMember($input: CreateTeamMembersInput!) {
    createTeamMembers(input: $input) {
      teamMember {
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
`;

export const UPDATE_TEAM_MEMBER = gql`
  mutation UpdateTeamMember($input: UpdateTeamMembersInput!) {
    updateTeamMembers(input: $input) {
      teamMember {
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
`;

export const DELETE_TEAM_MEMBER = gql`
  mutation DeleteTeamMember($teamIdUserId: UUID!) {
    deleteTeamMembers(teamIdUserId: $teamIdUserId) {
      success
      message
    }
  }
`;

// Teams Mutations
export const CREATE_TEAM = gql`
  mutation CreateTeam($input: CreateTeamsInput!) {
    createTeams(input: $input) {
      team {
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
`;

export const UPDATE_TEAM = gql`
  mutation UpdateTeam($input: UpdateTeamInput!) {
    updateTeams(input: $input) {
      team {
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
`;

export const DELETE_TEAM = gql`
  mutation DeleteTeam($teamId: UUID!) {
    deleteTeams(teamId: $teamId) {
      message
      success
    }
  }
`;

// Users Mutations
export const CREATE_USER = gql`
  mutation CreateUser($input: CreateUsersInput!) {
    createUsers(input: $input) {
      user {
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
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($input: UpdateUsersInput!) {
    updateUsers(input: $input) {
      user {
        id
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
`;

export const DELETE_USER = gql`
  mutation DeleteUser($input: DeleteUsersInput!) {
    deleteUsers(input: $input) {
      success
    }
  }
`;
