import { gql } from '@apollo/client';
import { HACKATHON_EVENTS_CORE_FIELDS } from './hackathon-events-core-fields';

export const APPROVED_EMAIL_MODEL_FRAGMENT = gql`
  fragment approvedEmailsFields on ApprovedEmailsNode {
    __typename
    addedAt
    email
    eventId
    hackathonEvents {
      ...hackathonEventsCoreFields
    }
    id
    keyEmailEventId
  }

  ${HACKATHON_EVENTS_CORE_FIELDS}
`;
