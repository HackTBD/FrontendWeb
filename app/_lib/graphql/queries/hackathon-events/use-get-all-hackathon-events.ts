import { gql, useQuery } from '@apollo/client';
import { HACKATHON_EVENT_MODEL_FRAGMENT } from '../../fragments/hackathon-events-fields';
import { PAGE_INFO_MODEL_FRAGMENT } from '../../fragments/page-info-fields';
import { HackathonEventsNode } from '../../__generated__/graphql';

export const GET_ALL_HACKATHON_EVENTS = gql`
  query GetAllHackathonEvents {
    allHackathonEvents {
      edges {
        cursor
        node {
          ...hackathonEventsFields
        }
      }
      pageInfo {
        ...pageInfoFields
      }
    }
  }

  ${HACKATHON_EVENT_MODEL_FRAGMENT}
  ${PAGE_INFO_MODEL_FRAGMENT}
`;

// TODO: Might not what you want
export function useGetAllHackathonEvents() {
  const { data, loading, error, refetch } = useQuery(GET_ALL_HACKATHON_EVENTS, {
    fetchPolicy: 'cache-and-network',
  });

  const nodes: HackathonEventsNode[] =
    data?.allHackathonEvents?.edges
      ?.map((edge: { node: HackathonEventsNode }) => edge?.node)
      .filter(Boolean) ?? [];

  return {
    hackathonEvents: nodes,
    loading,
    error,
    refetch,
  };
}
