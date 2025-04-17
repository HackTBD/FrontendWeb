import { gql } from "@apollo/client";

export const USERS_CORE_FIELDS = gql`
  fragment usersCoreFields on UsersNode {
    id
    firstName
    lastName
    phoneNumber
    email
    github
    linkedin
    devpost
    isAdmin
    createdAt
    updatedAt
    authProvider
    authProviderId
  }
`;