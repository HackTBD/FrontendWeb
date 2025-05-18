import { gql, useQuery } from '@apollo/client';
import { TEAM_MODEL_FRAGMENT } from '../../fragments/teams-fields';
import { PAGE_INFO_MODEL_FRAGMENT } from '../../fragments/page-info-fields';
import { TeamsNode } from '../../__generated__/graphql';

export const GET_ALL_TEAMS = gql`
  query GetAllTeams {
    allTeams {
      __typename
      edges {
        cursor
        node {
          ...teamFields
        }
      }
      pageInfo {
        ...pageInfoFields
      }
    }
  }
  ${TEAM_MODEL_FRAGMENT}
  ${PAGE_INFO_MODEL_FRAGMENT}
`;

export function useGetAllTeams() {
  const { data, loading, error, refetch } = useQuery(GET_ALL_TEAMS, {
    fetchPolicy: 'cache-and-network',
  });

  const nodes: TeamsNode[] =
    data?.allTeams?.edges
      ?.map((edge: { node: TeamsNode }) => edge?.node)
      .filter(Boolean) ?? [];

  return {
    teams: nodes,
    loading,
    error,
    refetch,
  };
}
