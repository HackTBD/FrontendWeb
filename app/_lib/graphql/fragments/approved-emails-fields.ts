import { gql } from '@apollo/client';
import { HACKATHON_EVENT_MODEL_FRAGMENT } from './hackathon-events-fields';

export const APPROVED_EMAIL_MODEL_FRAGMENT = gql`
  fragment approvedEmailsFields on ApprovedEmailsNode {
    __typename
    addedAt
    email
    eventId
    hackathonEvents {
      ...hackathonEventsFields
    }
    id
    keyEmailEventId
  }

  ${HACKATHON_EVENT_MODEL_FRAGMENT}
`;
