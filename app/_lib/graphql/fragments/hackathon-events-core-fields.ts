import { gql } from '@apollo/client';

export const HACKATHON_EVENTS_CORE_FIELDS = gql`
  fragment hackathonEventsCoreFields on HackathonEventsNode {
    id
    name
    isVirtual
    level
    location
    maxTeamSize
    minTeamSize
    startDate
    endDate
    status
    description

  }
`;
