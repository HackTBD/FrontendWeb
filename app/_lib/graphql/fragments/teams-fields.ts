import { DocumentNode, gql } from '@apollo/client';
import { PAGE_INFO_MODEL_FRAGMENT } from './page-info-fields';
import { TEAM_MEMBER_MODEL_FRAGMENT } from './team-members-fields';
import { HACKATHON_EVENT_MODEL_FRAGMENT } from './hackathon-events-fields';

export const TEAM_MODEL_FRAGMENT: DocumentNode = gql`
  fragment teamsFields on TeamsNode {
    __typename
    createdAt
    eventId
    hackathonEvents {
      ...hackathonEventsFields
    }
    id
    status
    teamId
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
    teamName
  }

  ${PAGE_INFO_MODEL_FRAGMENT}
  ${TEAM_MEMBER_MODEL_FRAGMENT}
  ${HACKATHON_EVENT_MODEL_FRAGMENT}
`;
