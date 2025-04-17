import { gql } from "@apollo/client";

export const TEAMS_CORE_FIELDS = gql`
  fragment teamsCoreFields on TeamsNode {
    id
    teamName
    status
    createdAt
  }
`;