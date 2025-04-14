import { gql } from '@apollo/client';
import { PAGE_INFO_MODEL_FRAGMENT } from './page-info-fields';
import { HACKATHON_USER_PROFILE_MODEL_FRAGMENT } from './hackathon-user-profiles-fields';
import { TEAM_MODEL_FRAGMENT } from './teams-fields';
import { HACKATHON_ORGANIZATION_MODEL_FRAGMENT } from './hackthon-organizations-fields';

export const HACKATHON_EVENT_MODEL_FRAGMENT = gql`
  fragment hackathonEventsFields on HackathonEventsNode {
    __typename
    approvedEmailss {
      __typename
      edges {
        cursor
        node {
          ...approvedEmailsFields
        }
      }
    }
    createdAt
    description
    endDate
    eventId
    hackathonOrganizations {
      ...hackathonOrganizationsFields
    }
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
    isVirtual
    level
    location
    maxTeamSize
    minTeamSize
    name
    orgId
    startDate
    status
    teamSize
    teamss {
      __typename
      edges {
        cursor
        node {
          ...teamsFields
        }
      }
      pageInfo {
        ...pageInfoFields
      }
    }
  }

  ${PAGE_INFO_MODEL_FRAGMENT}
  ${HACKATHON_USER_PROFILE_MODEL_FRAGMENT}
  ${TEAM_MODEL_FRAGMENT}
  ${HACKATHON_ORGANIZATION_MODEL_FRAGMENT}
`;
