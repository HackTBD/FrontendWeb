// lib/graphql/mutations.js
import { gql } from '@apollo/client';

// Approved Emails Mutations
export const CREATE_APPROVED_EMAIL = gql`
  mutation CreateApprovedEmail($input: CreateApprovedEmailsInput!) {
    createApprovedEmails(input: $input) {
      approvedEmail {
        id
        keyEmailEventId
        email
        eventId
        addedAt
        hackathonEvent {
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
        hackathonEvent {
          id
          name
        }
      }
    }
  }
`;

export const DELETE_APPROVED_EMAIL = gql`
  mutation DeleteApprovedEmail($input: DeleteApprovedEmailsInput!) {
    deleteApprovedEmails(input: $input) {
      success
    }
  }
`;

// Hackathon Events Mutations
export const CREATE_HACKATHON_EVENT = gql`
  mutation CreateHackathonEvent($input: CreateHackathonEventsInput!) {
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
        hackathonOrganization {
          id
          name
        }
      }
    }
  }
`;

export const UPDATE_HACKATHON_EVENT = gql`
  mutation UpdateHackathonEvent($input: UpdateHackathonEventsInput!) {
    updateHackathonEvents(input: $input) {
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
        hackathonOrganization {
          id
          name
        }
      }
    }
  }
`;

export const DELETE_HACKATHON_EVENT = gql`
  mutation DeleteHackathonEvent($input: DeleteHackathonEventsInput!) {
    deleteHackathonEvents(input: $input) {
      success
    }
  }
`;

// Hackathon Organizations Mutations
export const CREATE_HACKATHON_ORGANIZATION = gql`
  mutation CreateHackathonOrganization(
    $input: CreateHackathonOrganizationsInput!
  ) {
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
    $input: UpdateHackathonOrganizationsInput!
  ) {
    updateHackathonOrganizations(input: $input) {
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
  mutation DeleteHackathonOrganization(
    $input: DeleteHackathonOrganizationsInput!
  ) {
    deleteHackathonOrganizations(input: $input) {
      success
    }
  }
`;

// Hackathon User Profiles Mutations
export const CREATE_HACKATHON_USER_PROFILE = gql`
  mutation CreateHackathonUserProfile(
    $input: CreateHackathonUserProfilesInput!
  ) {
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
        hackathonEvent {
          id
          name
        }
        user {
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
    $input: UpdateHackathonUserProfilesInput!
  ) {
    updateHackathonUserProfiles(input: $input) {
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
        hackathonEvent {
          id
          name
        }
        user {
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
  mutation DeleteHackathonUserProfile(
    $input: DeleteHackathonUserProfilesInput!
  ) {
    deleteHackathonUserProfiles(input: $input) {
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
  mutation DeleteTeamMember($input: DeleteTeamMembersInput!) {
    deleteTeamMembers(input: $input) {
      success
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
        hackathonEvent {
          id
          name
        }
        teamMembers {
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
  mutation UpdateTeam($input: UpdateTeamsInput!) {
    updateTeams(input: $input) {
      team {
        id
        teamId
        eventId
        teamName
        status
        createdAt
        hackathonEvent {
          id
          name
        }
        teamMembers {
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
  mutation DeleteTeam($input: DeleteTeamsInput!) {
    deleteTeams(input: $input) {
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
