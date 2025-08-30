import { gql } from '@apollo/client';

export const APPROVED_EMAIL_MODEL_FRAGMENT = gql`
  fragment approvedEmailsFields on ApprovedEmailsNode {
    __typename
    addedAt
    email
    eventId
    hackathonEvents {
      __typename
      id
      eventId
      name
    }
    id
    keyEmailEventId
  }
`;
