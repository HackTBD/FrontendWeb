import { gql, useQuery } from '@apollo/client';
import { HACKATHON_USER_PROFILE_MODEL_FRAGMENT } from '../../fragments/hackathon-user-profiles-fields';
import HackathonUserProfile from '../../../../hackathons/[id]/profile/page';

export const GET_HACKATHON_USER_PROFILE_BY_ID = gql`
  query GetHackathonUserProfileById($id: ID!) {
    hackathonUserProfile(id: $id) {
      ...hackathonUserProfilesFields
    }
  }

  ${HACKATHON_USER_PROFILE_MODEL_FRAGMENT}
`;

// React hook to use this Hackathon User Profile query
export function useGetHackathonUserProfileById(eventId: string){
  const {data, loading, error, refetch} = useQuery(GET_HACKATHON_USER_PROFILE_BY_ID, {
    variables: { id: eventId },
    skip: !eventId,
  });
  return {
    hackathonUserProfiles: data?.hackathonUserProfilesById,
    loading,
    error,
    refetch,
  };
}
