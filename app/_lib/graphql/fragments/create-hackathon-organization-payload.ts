import { gql } from '@apollo/client';

export const CREATE_HACKATHON_ORG_PAYLOAD_FRAGMENT = gql`
  fragment createHackathonOrgPayloadFields on HackathonOrganizationsNode {  
    id
    name
    contactEmail
    website
    description
    linkedin
    createdAt
  }
`;
