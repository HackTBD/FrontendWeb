import { gql } from '@apollo/client';
import { USER_MODEL_FRAGMENT } from '../../fragments/users-fields';
import { PAGE_INFO_MODEL_FRAGMENT } from '../../fragments/page-info-fields';

export const GET_ALL_USERS = gql`
  query GetAllUsers {
    allUsers {
      __typename
      edges {
        cursor
        node {
          ...usersFields
        }
      }
      pageInfo {
        ...pageInfoFields
      }
    }
  }

  ${USER_MODEL_FRAGMENT}
  ${PAGE_INFO_MODEL_FRAGMENT}
`;
