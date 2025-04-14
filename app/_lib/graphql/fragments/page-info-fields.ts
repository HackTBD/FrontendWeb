import { gql } from '@apollo/client';

export const PAGE_INFO_MODEL_FRAGMENT = gql`
  fragment pageInfoFields on PageInfo {
    __typename
    endCursor
    hasNextPage
    hasPreviousPage
  }
`;
