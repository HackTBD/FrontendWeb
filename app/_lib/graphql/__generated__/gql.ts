/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  fragment approvedEmailsFields on ApprovedEmailsNode {\n    __typename\n    addedAt\n    email\n    eventId\n    hackathonEvents {\n      ...hackathonEventsCoreFields\n    }\n    id\n    keyEmailEventId\n  }\n\n  \n": typeof types.ApprovedEmailsFieldsFragmentDoc,
    "\n  fragment createHackathonOrgPayloadFields on HackathonOrganizationsNode {  \n    id\n    name\n    contactEmail\n    website\n    description\n    linkedin\n    createdAt\n  }\n": typeof types.CreateHackathonOrgPayloadFieldsFragmentDoc,
    "\n  fragment hackathonEventsCoreFields on HackathonEventsNode {\n    id\n    name\n    isVirtual\n    level\n    location\n    maxTeamSize\n    minTeamSize\n    startDate\n    endDate\n    status\n    description\n\n  }\n": typeof types.HackathonEventsCoreFieldsFragmentDoc,
    "\n  fragment hackathonEventsFields on HackathonEventsNode {\n    __typename\n    approvedEmailss {\n      __typename\n      edges {\n        cursor\n        node {\n          ...approvedEmailsFields\n        }\n      }\n    }\n    createdAt\n    description\n    endDate\n    eventId\n    hackathonOrganizations {\n      ...hackathonOrganizationsFields\n    }\n    hackathonUserProfiless {\n      __typename\n      edges {\n        cursor\n        node {\n          ...hackathonUserProfilesFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n    id\n    isVirtual\n    level\n    location\n    maxTeamSize\n    minTeamSize\n    name\n    startDate\n    status\n    teamss {\n      __typename\n      edges {\n        cursor\n        node {\n          ...teamsCoreFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n  }\n\n  \n  \n  \n  \n": typeof types.HackathonEventsFieldsFragmentDoc,
    "\n  fragment hackathonUserProfilesFields on HackathonUserProfilesNode {\n    __typename\n    bio\n    createdAt\n    eventId\n    hackathonEvents {\n      ...hackathonEventsCoreFields\n    }\n    id\n    preferences\n    profileId\n    skills\n    teamId\n    updatedAt\n    userId\n    users {\n      ...usersCoreFields\n    }\n  }\n\n  \n  \n": typeof types.HackathonUserProfilesFieldsFragmentDoc,
    "\n  fragment hackathonOrganizationsFields on HackathonOrganizationsNode {\n    __typename\n    contactEmail\n    createdAt\n    description\n    hackathonEventss {\n      __typename\n      edges {\n        cursor\n        node {\n          ...hackathonEventsCoreFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n    id\n    linkedin\n    name\n    orgId\n    website\n  }\n\n  \n  \n": typeof types.HackathonOrganizationsFieldsFragmentDoc,
    "\n  fragment pageInfoFields on PageInfo {\n    __typename\n    endCursor\n    hasNextPage\n    hasPreviousPage\n  }\n": typeof types.PageInfoFieldsFragmentDoc,
    "\n  fragment teamMembersFields on TeamMembersNode {\n    __typename\n    id\n    teamId\n    userId\n    teamIdUserId\n\n    teamss {\n      edges {\n        node {\n          ...teamsCoreFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n\n    userss {\n      edges {\n        node {\n          ...usersCoreFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n  }\n\n  \n  \n  \n": typeof types.TeamMembersFieldsFragmentDoc,
    "\n  fragment teamsCoreFields on TeamsNode {\n    id\n    teamName\n    status\n    createdAt\n  }\n": typeof types.TeamsCoreFieldsFragmentDoc,
    "\n  fragment teamsFields on TeamsNode {\n    __typename\n    createdAt\n    eventId\n    hackathonEvents {\n      ...hackathonEventsFields\n    }\n    id\n    status\n    teamId\n    teamMemberss {\n      __typename\n      edges {\n        cursor\n        node {\n          ...teamMembersFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n    teamName\n  }\n\n  \n  \n  \n": typeof types.TeamsFieldsFragmentDoc,
    "\n  fragment usersCoreFields on UsersNode {\n    id\n    firstName\n    lastName\n    phoneNumber\n    email\n    github\n    linkedin\n    devpost\n    isAdmin\n    createdAt\n    updatedAt\n    authProvider\n    authProviderId\n  }\n": typeof types.UsersCoreFieldsFragmentDoc,
    "\n  fragment usersFields on UsersNode {\n    __typename\n    authProvider\n    authProviderId\n    createdAt\n    devpost\n    email\n    firstName\n    github\n    hackathonUserProfiless {\n      __typename\n      edges {\n        cursor\n        node {\n          ...hackathonUserProfilesFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n    id\n    isAdmin\n    lastName\n    linkedin\n    phoneNumber\n    teamMemberss {\n      __typename\n      edges {\n        cursor\n        node {\n          ...teamMembersFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n    updatedAt\n    userId\n  }\n\n  \n  \n  \n": typeof types.UsersFieldsFragmentDoc,
    "\n  mutation CreateApprovedEmail($input: ApprovedEmailsInput!) {\n    createApprovedEmails(input: $input) {\n      approvedEmail {\n        ...approvedEmailsFields\n      }\n    }\n  }\n\n  \n": typeof types.CreateApprovedEmailDocument,
    "\n  mutation DeleteApprovedEmail($keyEmailEventId: UUID!) {\n    deleteApprovedEmails(keyEmailEventId: $keyEmailEventId) {\n      success\n      message\n    }\n  }\n": typeof types.DeleteApprovedEmailDocument,
    "\n  mutation UpdateApprovedEmail($input: UpdateApprovedEmailsInput!) {\n    updateApprovedEmails(input: $input) {\n      approvedEmail {\n        ...approvedEmailsFields\n      }\n    }\n  }\n\n  \n": typeof types.UpdateApprovedEmailDocument,
    "\n  mutation CreateHackathonEvent($input: HackathonEventsInput!) {\n    createHackathonEvents(input: $input) {\n      hackathonEvent {\n        ...hackathonEventsFields\n      }\n    }\n  }\n\n  \n": typeof types.CreateHackathonEventDocument,
    "\n  mutation DeleteHackathonEvent($id: ID!) {\n    deleteHackathonEvents(id: $id) {\n      success\n    }\n  }\n": typeof types.DeleteHackathonEventDocument,
    "\n  mutation UpdateHackathonEvent($id: ID!, $input: HackathonEventsInput!) {\n    updateHackathonEvents(id: $id, input: $input) {\n      hackathonEvent {\n        ...hackathonEventsFields\n      }\n    }\n  }\n\n  \n": typeof types.UpdateHackathonEventDocument,
    "\n  mutation CreateHackathonOrganization($input: HackathonOrganizationsInput!) {\n    createHackathonOrganizations(input: $input) {\n      hackathonOrganization {\n        ...hackathonOrganizationsFields\n      }\n    }\n  }\n\n  \n": typeof types.CreateHackathonOrganizationDocument,
    "\n  mutation DeleteHackathonOrganization($id: ID!) {\n    deleteHackathonOrganizations(id: $id) {\n      message\n      success\n    }\n  }\n": typeof types.DeleteHackathonOrganizationDocument,
    "\n  mutation UpdateHackathonOrganization(\n    $id: ID!\n    $input: HackathonOrganizationsInput!\n  ) {\n    updateHackathonOrganizations(id: $id, input: $input) {\n      hackathonOrganization {\n        ...hackathonOrganizationsFields\n      }\n    }\n  }\n\n  \n": typeof types.UpdateHackathonOrganizationDocument,
    "\n  mutation CreateHackathonUserProfile($input: HackathonUserProfilesInput!) {\n    createHackathonUserProfiles(input: $input) {\n      hackathonUserProfile {\n        ...hackathonUserProfilesFields\n      }\n    }\n  }\n\n  \n": typeof types.CreateHackathonUserProfileDocument,
    "\n  mutation DeleteHackathonUserProfile($id: ID!) {\n    deleteHackathonUserProfiles(id: $id) {\n      success\n    }\n  }\n": typeof types.DeleteHackathonUserProfileDocument,
    "\n  mutation UpdateHackathonUserProfile(\n    $id: ID!\n    $input: HackathonUserProfilesInput!\n  ) {\n    updateHackathonUserProfiles(id: $id, input: $input) {\n      hackathonUserProfile {\n        ...hackathonUserProfilesFields\n      }\n    }\n  }\n\n  \n": typeof types.UpdateHackathonUserProfileDocument,
    "\n  mutation CreateTeamMember($input: CreateTeamMembersInput!) {\n    createTeamMembers(input: $input) {\n      teamMember {\n        ...teamMembersFields\n      }\n    }\n  }\n\n  \n": typeof types.CreateTeamMemberDocument,
    "\n  mutation DeleteTeamMember($teamIdUserId: UUID!) {\n    deleteTeamMembers(teamIdUserId: $teamIdUserId) {\n      success\n      message\n    }\n  }\n": typeof types.DeleteTeamMemberDocument,
    "\n  mutation UpdateTeamMember($input: UpdateTeamMembersInput!) {\n    updateTeamMembers(input: $input) {\n      teamMember {\n        ...teamMembersFields\n      }\n    }\n  }\n\n  \n": typeof types.UpdateTeamMemberDocument,
    "\n  mutation CreateTeam($input: CreateTeamsInput!) {\n    createTeams(input: $input) {\n      team {\n        ...teamsFields\n      }\n    }\n  }\n\n  \n": typeof types.CreateTeamDocument,
    "\n  mutation DeleteTeam($teamId: UUID!) {\n    deleteTeams(teamId: $teamId) {\n      message\n      success\n    }\n  }\n": typeof types.DeleteTeamDocument,
    "\n  mutation UpdateTeam($input: UpdateTeamInput!) {\n    updateTeams(input: $input) {\n      team {\n        ...teamsFields\n      }\n    }\n  }\n\n  \n": typeof types.UpdateTeamDocument,
    "\n  mutation CreateUser($input: CreateUsersInput!) {\n    createUsers(input: $input) {\n      user {\n        ...usersFields\n      }\n    }\n  }\n\n  \n": typeof types.CreateUserDocument,
    "\n  mutation DeleteUser($input: DeleteUsersInput!) {\n    deleteUsers(input: $input) {\n      success\n    }\n  }\n": typeof types.DeleteUserDocument,
    "\n  mutation UpdateUser($input: UpdateUsersInput!) {\n    updateUsers(input: $input) {\n      user {\n        ...usersFields\n      }\n    }\n  }\n\n  \n": typeof types.UpdateUserDocument,
    "\n  query GetAllApprovedEmails {\n    allApprovedEmails {\n      __typename\n      edges {\n        cursor\n        node {\n          ...approvedEmailsFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n  }\n": typeof types.GetAllApprovedEmailsDocument,
    "\n  query GetApprovedEmailById($id: ID!) {\n    approvedEmail(id: $id) {\n      ...approvedEmailsFields\n    }\n  }\n\n  \n": typeof types.GetApprovedEmailByIdDocument,
    "\n  query GetAllHackathonEvents {\n    allHackathonEvents {\n      __typename\n      edges {\n        cursor\n        node {\n          ...hackathonEventsFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n  }\n\n  \n  \n": typeof types.GetAllHackathonEventsDocument,
    "\n  query GetHackathonEventById($id: ID!) {\n    hackathonEvent(id: $id) {\n      ...hackathonEventsFields\n    }\n  }\n\n  \n": typeof types.GetHackathonEventByIdDocument,
    "\n  query GetAllHackathonOrganizations {\n    allHackathonOrganizations {\n      __typename\n      edges {\n        cursor\n        node {\n          ...hackathonOrganizationsFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n  }\n\n  \n  \n": typeof types.GetAllHackathonOrganizationsDocument,
    "\n  query GetHackathonOrganizationById($id: ID!) {\n    hackathonOrganization(id: $id) {\n      ...hackathonOrganizationsFields\n    }\n  }\n\n  \n": typeof types.GetHackathonOrganizationByIdDocument,
    "\n  query GetAllHackathonUserProfiles {\n    allHackathonUserProfiles {\n      __typename\n      edges {\n        cursor\n        node {\n          ...hackathonUserProfilesFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n  }\n": typeof types.GetAllHackathonUserProfilesDocument,
    "\n  query GetHackathonUserProfileById($id: ID!) {\n    hackathonUserProfile(id: $id) {\n      ...hackathonUserProfilesFields\n    }\n  }\n\n  \n": typeof types.GetHackathonUserProfileByIdDocument,
    "\n  query GetAllTeamMembers {\n    allTeamMembers {\n      __typename\n      edges {\n        cursor\n        node {\n          ...teamMembersFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n  }\n\n  \n  \n": typeof types.GetAllTeamMembersDocument,
    "\n  query GetTeamMemberById($id: ID!) {\n    teamMember(id: $id) {\n      ...teamMembersFields\n    }\n  }\n\n  \n": typeof types.GetTeamMemberByIdDocument,
    "\n  query GetAllUsers {\n    allUsers {\n      __typename\n      edges {\n        cursor\n        node {\n          ...usersFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n  }\n\n  \n  \n": typeof types.GetAllUsersDocument,
    "\n  query GetUserById($id: ID!) {\n    user(id: $id) {\n      ...usersFields\n    }\n  }\n\n  \n": typeof types.GetUserByIdDocument,
};
const documents: Documents = {
    "\n  fragment approvedEmailsFields on ApprovedEmailsNode {\n    __typename\n    addedAt\n    email\n    eventId\n    hackathonEvents {\n      ...hackathonEventsCoreFields\n    }\n    id\n    keyEmailEventId\n  }\n\n  \n": types.ApprovedEmailsFieldsFragmentDoc,
    "\n  fragment createHackathonOrgPayloadFields on HackathonOrganizationsNode {  \n    id\n    name\n    contactEmail\n    website\n    description\n    linkedin\n    createdAt\n  }\n": types.CreateHackathonOrgPayloadFieldsFragmentDoc,
    "\n  fragment hackathonEventsCoreFields on HackathonEventsNode {\n    id\n    name\n    isVirtual\n    level\n    location\n    maxTeamSize\n    minTeamSize\n    startDate\n    endDate\n    status\n    description\n\n  }\n": types.HackathonEventsCoreFieldsFragmentDoc,
    "\n  fragment hackathonEventsFields on HackathonEventsNode {\n    __typename\n    approvedEmailss {\n      __typename\n      edges {\n        cursor\n        node {\n          ...approvedEmailsFields\n        }\n      }\n    }\n    createdAt\n    description\n    endDate\n    eventId\n    hackathonOrganizations {\n      ...hackathonOrganizationsFields\n    }\n    hackathonUserProfiless {\n      __typename\n      edges {\n        cursor\n        node {\n          ...hackathonUserProfilesFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n    id\n    isVirtual\n    level\n    location\n    maxTeamSize\n    minTeamSize\n    name\n    startDate\n    status\n    teamss {\n      __typename\n      edges {\n        cursor\n        node {\n          ...teamsCoreFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n  }\n\n  \n  \n  \n  \n": types.HackathonEventsFieldsFragmentDoc,
    "\n  fragment hackathonUserProfilesFields on HackathonUserProfilesNode {\n    __typename\n    bio\n    createdAt\n    eventId\n    hackathonEvents {\n      ...hackathonEventsCoreFields\n    }\n    id\n    preferences\n    profileId\n    skills\n    teamId\n    updatedAt\n    userId\n    users {\n      ...usersCoreFields\n    }\n  }\n\n  \n  \n": types.HackathonUserProfilesFieldsFragmentDoc,
    "\n  fragment hackathonOrganizationsFields on HackathonOrganizationsNode {\n    __typename\n    contactEmail\n    createdAt\n    description\n    hackathonEventss {\n      __typename\n      edges {\n        cursor\n        node {\n          ...hackathonEventsCoreFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n    id\n    linkedin\n    name\n    orgId\n    website\n  }\n\n  \n  \n": types.HackathonOrganizationsFieldsFragmentDoc,
    "\n  fragment pageInfoFields on PageInfo {\n    __typename\n    endCursor\n    hasNextPage\n    hasPreviousPage\n  }\n": types.PageInfoFieldsFragmentDoc,
    "\n  fragment teamMembersFields on TeamMembersNode {\n    __typename\n    id\n    teamId\n    userId\n    teamIdUserId\n\n    teamss {\n      edges {\n        node {\n          ...teamsCoreFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n\n    userss {\n      edges {\n        node {\n          ...usersCoreFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n  }\n\n  \n  \n  \n": types.TeamMembersFieldsFragmentDoc,
    "\n  fragment teamsCoreFields on TeamsNode {\n    id\n    teamName\n    status\n    createdAt\n  }\n": types.TeamsCoreFieldsFragmentDoc,
    "\n  fragment teamsFields on TeamsNode {\n    __typename\n    createdAt\n    eventId\n    hackathonEvents {\n      ...hackathonEventsFields\n    }\n    id\n    status\n    teamId\n    teamMemberss {\n      __typename\n      edges {\n        cursor\n        node {\n          ...teamMembersFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n    teamName\n  }\n\n  \n  \n  \n": types.TeamsFieldsFragmentDoc,
    "\n  fragment usersCoreFields on UsersNode {\n    id\n    firstName\n    lastName\n    phoneNumber\n    email\n    github\n    linkedin\n    devpost\n    isAdmin\n    createdAt\n    updatedAt\n    authProvider\n    authProviderId\n  }\n": types.UsersCoreFieldsFragmentDoc,
    "\n  fragment usersFields on UsersNode {\n    __typename\n    authProvider\n    authProviderId\n    createdAt\n    devpost\n    email\n    firstName\n    github\n    hackathonUserProfiless {\n      __typename\n      edges {\n        cursor\n        node {\n          ...hackathonUserProfilesFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n    id\n    isAdmin\n    lastName\n    linkedin\n    phoneNumber\n    teamMemberss {\n      __typename\n      edges {\n        cursor\n        node {\n          ...teamMembersFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n    updatedAt\n    userId\n  }\n\n  \n  \n  \n": types.UsersFieldsFragmentDoc,
    "\n  mutation CreateApprovedEmail($input: ApprovedEmailsInput!) {\n    createApprovedEmails(input: $input) {\n      approvedEmail {\n        ...approvedEmailsFields\n      }\n    }\n  }\n\n  \n": types.CreateApprovedEmailDocument,
    "\n  mutation DeleteApprovedEmail($keyEmailEventId: UUID!) {\n    deleteApprovedEmails(keyEmailEventId: $keyEmailEventId) {\n      success\n      message\n    }\n  }\n": types.DeleteApprovedEmailDocument,
    "\n  mutation UpdateApprovedEmail($input: UpdateApprovedEmailsInput!) {\n    updateApprovedEmails(input: $input) {\n      approvedEmail {\n        ...approvedEmailsFields\n      }\n    }\n  }\n\n  \n": types.UpdateApprovedEmailDocument,
    "\n  mutation CreateHackathonEvent($input: HackathonEventsInput!) {\n    createHackathonEvents(input: $input) {\n      hackathonEvent {\n        ...hackathonEventsFields\n      }\n    }\n  }\n\n  \n": types.CreateHackathonEventDocument,
    "\n  mutation DeleteHackathonEvent($id: ID!) {\n    deleteHackathonEvents(id: $id) {\n      success\n    }\n  }\n": types.DeleteHackathonEventDocument,
    "\n  mutation UpdateHackathonEvent($id: ID!, $input: HackathonEventsInput!) {\n    updateHackathonEvents(id: $id, input: $input) {\n      hackathonEvent {\n        ...hackathonEventsFields\n      }\n    }\n  }\n\n  \n": types.UpdateHackathonEventDocument,
    "\n  mutation CreateHackathonOrganization($input: HackathonOrganizationsInput!) {\n    createHackathonOrganizations(input: $input) {\n      hackathonOrganization {\n        ...hackathonOrganizationsFields\n      }\n    }\n  }\n\n  \n": types.CreateHackathonOrganizationDocument,
    "\n  mutation DeleteHackathonOrganization($id: ID!) {\n    deleteHackathonOrganizations(id: $id) {\n      message\n      success\n    }\n  }\n": types.DeleteHackathonOrganizationDocument,
    "\n  mutation UpdateHackathonOrganization(\n    $id: ID!\n    $input: HackathonOrganizationsInput!\n  ) {\n    updateHackathonOrganizations(id: $id, input: $input) {\n      hackathonOrganization {\n        ...hackathonOrganizationsFields\n      }\n    }\n  }\n\n  \n": types.UpdateHackathonOrganizationDocument,
    "\n  mutation CreateHackathonUserProfile($input: HackathonUserProfilesInput!) {\n    createHackathonUserProfiles(input: $input) {\n      hackathonUserProfile {\n        ...hackathonUserProfilesFields\n      }\n    }\n  }\n\n  \n": types.CreateHackathonUserProfileDocument,
    "\n  mutation DeleteHackathonUserProfile($id: ID!) {\n    deleteHackathonUserProfiles(id: $id) {\n      success\n    }\n  }\n": types.DeleteHackathonUserProfileDocument,
    "\n  mutation UpdateHackathonUserProfile(\n    $id: ID!\n    $input: HackathonUserProfilesInput!\n  ) {\n    updateHackathonUserProfiles(id: $id, input: $input) {\n      hackathonUserProfile {\n        ...hackathonUserProfilesFields\n      }\n    }\n  }\n\n  \n": types.UpdateHackathonUserProfileDocument,
    "\n  mutation CreateTeamMember($input: CreateTeamMembersInput!) {\n    createTeamMembers(input: $input) {\n      teamMember {\n        ...teamMembersFields\n      }\n    }\n  }\n\n  \n": types.CreateTeamMemberDocument,
    "\n  mutation DeleteTeamMember($teamIdUserId: UUID!) {\n    deleteTeamMembers(teamIdUserId: $teamIdUserId) {\n      success\n      message\n    }\n  }\n": types.DeleteTeamMemberDocument,
    "\n  mutation UpdateTeamMember($input: UpdateTeamMembersInput!) {\n    updateTeamMembers(input: $input) {\n      teamMember {\n        ...teamMembersFields\n      }\n    }\n  }\n\n  \n": types.UpdateTeamMemberDocument,
    "\n  mutation CreateTeam($input: CreateTeamsInput!) {\n    createTeams(input: $input) {\n      team {\n        ...teamsFields\n      }\n    }\n  }\n\n  \n": types.CreateTeamDocument,
    "\n  mutation DeleteTeam($teamId: UUID!) {\n    deleteTeams(teamId: $teamId) {\n      message\n      success\n    }\n  }\n": types.DeleteTeamDocument,
    "\n  mutation UpdateTeam($input: UpdateTeamInput!) {\n    updateTeams(input: $input) {\n      team {\n        ...teamsFields\n      }\n    }\n  }\n\n  \n": types.UpdateTeamDocument,
    "\n  mutation CreateUser($input: CreateUsersInput!) {\n    createUsers(input: $input) {\n      user {\n        ...usersFields\n      }\n    }\n  }\n\n  \n": types.CreateUserDocument,
    "\n  mutation DeleteUser($input: DeleteUsersInput!) {\n    deleteUsers(input: $input) {\n      success\n    }\n  }\n": types.DeleteUserDocument,
    "\n  mutation UpdateUser($input: UpdateUsersInput!) {\n    updateUsers(input: $input) {\n      user {\n        ...usersFields\n      }\n    }\n  }\n\n  \n": types.UpdateUserDocument,
    "\n  query GetAllApprovedEmails {\n    allApprovedEmails {\n      __typename\n      edges {\n        cursor\n        node {\n          ...approvedEmailsFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n  }\n": types.GetAllApprovedEmailsDocument,
    "\n  query GetApprovedEmailById($id: ID!) {\n    approvedEmail(id: $id) {\n      ...approvedEmailsFields\n    }\n  }\n\n  \n": types.GetApprovedEmailByIdDocument,
    "\n  query GetAllHackathonEvents {\n    allHackathonEvents {\n      __typename\n      edges {\n        cursor\n        node {\n          ...hackathonEventsFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n  }\n\n  \n  \n": types.GetAllHackathonEventsDocument,
    "\n  query GetHackathonEventById($id: ID!) {\n    hackathonEvent(id: $id) {\n      ...hackathonEventsFields\n    }\n  }\n\n  \n": types.GetHackathonEventByIdDocument,
    "\n  query GetAllHackathonOrganizations {\n    allHackathonOrganizations {\n      __typename\n      edges {\n        cursor\n        node {\n          ...hackathonOrganizationsFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n  }\n\n  \n  \n": types.GetAllHackathonOrganizationsDocument,
    "\n  query GetHackathonOrganizationById($id: ID!) {\n    hackathonOrganization(id: $id) {\n      ...hackathonOrganizationsFields\n    }\n  }\n\n  \n": types.GetHackathonOrganizationByIdDocument,
    "\n  query GetAllHackathonUserProfiles {\n    allHackathonUserProfiles {\n      __typename\n      edges {\n        cursor\n        node {\n          ...hackathonUserProfilesFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n  }\n": types.GetAllHackathonUserProfilesDocument,
    "\n  query GetHackathonUserProfileById($id: ID!) {\n    hackathonUserProfile(id: $id) {\n      ...hackathonUserProfilesFields\n    }\n  }\n\n  \n": types.GetHackathonUserProfileByIdDocument,
    "\n  query GetAllTeamMembers {\n    allTeamMembers {\n      __typename\n      edges {\n        cursor\n        node {\n          ...teamMembersFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n  }\n\n  \n  \n": types.GetAllTeamMembersDocument,
    "\n  query GetTeamMemberById($id: ID!) {\n    teamMember(id: $id) {\n      ...teamMembersFields\n    }\n  }\n\n  \n": types.GetTeamMemberByIdDocument,
    "\n  query GetAllUsers {\n    allUsers {\n      __typename\n      edges {\n        cursor\n        node {\n          ...usersFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n  }\n\n  \n  \n": types.GetAllUsersDocument,
    "\n  query GetUserById($id: ID!) {\n    user(id: $id) {\n      ...usersFields\n    }\n  }\n\n  \n": types.GetUserByIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment approvedEmailsFields on ApprovedEmailsNode {\n    __typename\n    addedAt\n    email\n    eventId\n    hackathonEvents {\n      ...hackathonEventsCoreFields\n    }\n    id\n    keyEmailEventId\n  }\n\n  \n"): (typeof documents)["\n  fragment approvedEmailsFields on ApprovedEmailsNode {\n    __typename\n    addedAt\n    email\n    eventId\n    hackathonEvents {\n      ...hackathonEventsCoreFields\n    }\n    id\n    keyEmailEventId\n  }\n\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment createHackathonOrgPayloadFields on HackathonOrganizationsNode {  \n    id\n    name\n    contactEmail\n    website\n    description\n    linkedin\n    createdAt\n  }\n"): (typeof documents)["\n  fragment createHackathonOrgPayloadFields on HackathonOrganizationsNode {  \n    id\n    name\n    contactEmail\n    website\n    description\n    linkedin\n    createdAt\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment hackathonEventsCoreFields on HackathonEventsNode {\n    id\n    name\n    isVirtual\n    level\n    location\n    maxTeamSize\n    minTeamSize\n    startDate\n    endDate\n    status\n    description\n\n  }\n"): (typeof documents)["\n  fragment hackathonEventsCoreFields on HackathonEventsNode {\n    id\n    name\n    isVirtual\n    level\n    location\n    maxTeamSize\n    minTeamSize\n    startDate\n    endDate\n    status\n    description\n\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment hackathonEventsFields on HackathonEventsNode {\n    __typename\n    approvedEmailss {\n      __typename\n      edges {\n        cursor\n        node {\n          ...approvedEmailsFields\n        }\n      }\n    }\n    createdAt\n    description\n    endDate\n    eventId\n    hackathonOrganizations {\n      ...hackathonOrganizationsFields\n    }\n    hackathonUserProfiless {\n      __typename\n      edges {\n        cursor\n        node {\n          ...hackathonUserProfilesFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n    id\n    isVirtual\n    level\n    location\n    maxTeamSize\n    minTeamSize\n    name\n    startDate\n    status\n    teamss {\n      __typename\n      edges {\n        cursor\n        node {\n          ...teamsCoreFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n  }\n\n  \n  \n  \n  \n"): (typeof documents)["\n  fragment hackathonEventsFields on HackathonEventsNode {\n    __typename\n    approvedEmailss {\n      __typename\n      edges {\n        cursor\n        node {\n          ...approvedEmailsFields\n        }\n      }\n    }\n    createdAt\n    description\n    endDate\n    eventId\n    hackathonOrganizations {\n      ...hackathonOrganizationsFields\n    }\n    hackathonUserProfiless {\n      __typename\n      edges {\n        cursor\n        node {\n          ...hackathonUserProfilesFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n    id\n    isVirtual\n    level\n    location\n    maxTeamSize\n    minTeamSize\n    name\n    startDate\n    status\n    teamss {\n      __typename\n      edges {\n        cursor\n        node {\n          ...teamsCoreFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n  }\n\n  \n  \n  \n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment hackathonUserProfilesFields on HackathonUserProfilesNode {\n    __typename\n    bio\n    createdAt\n    eventId\n    hackathonEvents {\n      ...hackathonEventsCoreFields\n    }\n    id\n    preferences\n    profileId\n    skills\n    teamId\n    updatedAt\n    userId\n    users {\n      ...usersCoreFields\n    }\n  }\n\n  \n  \n"): (typeof documents)["\n  fragment hackathonUserProfilesFields on HackathonUserProfilesNode {\n    __typename\n    bio\n    createdAt\n    eventId\n    hackathonEvents {\n      ...hackathonEventsCoreFields\n    }\n    id\n    preferences\n    profileId\n    skills\n    teamId\n    updatedAt\n    userId\n    users {\n      ...usersCoreFields\n    }\n  }\n\n  \n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment hackathonOrganizationsFields on HackathonOrganizationsNode {\n    __typename\n    contactEmail\n    createdAt\n    description\n    hackathonEventss {\n      __typename\n      edges {\n        cursor\n        node {\n          ...hackathonEventsCoreFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n    id\n    linkedin\n    name\n    orgId\n    website\n  }\n\n  \n  \n"): (typeof documents)["\n  fragment hackathonOrganizationsFields on HackathonOrganizationsNode {\n    __typename\n    contactEmail\n    createdAt\n    description\n    hackathonEventss {\n      __typename\n      edges {\n        cursor\n        node {\n          ...hackathonEventsCoreFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n    id\n    linkedin\n    name\n    orgId\n    website\n  }\n\n  \n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment pageInfoFields on PageInfo {\n    __typename\n    endCursor\n    hasNextPage\n    hasPreviousPage\n  }\n"): (typeof documents)["\n  fragment pageInfoFields on PageInfo {\n    __typename\n    endCursor\n    hasNextPage\n    hasPreviousPage\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment teamMembersFields on TeamMembersNode {\n    __typename\n    id\n    teamId\n    userId\n    teamIdUserId\n\n    teamss {\n      edges {\n        node {\n          ...teamsCoreFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n\n    userss {\n      edges {\n        node {\n          ...usersCoreFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n  }\n\n  \n  \n  \n"): (typeof documents)["\n  fragment teamMembersFields on TeamMembersNode {\n    __typename\n    id\n    teamId\n    userId\n    teamIdUserId\n\n    teamss {\n      edges {\n        node {\n          ...teamsCoreFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n\n    userss {\n      edges {\n        node {\n          ...usersCoreFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n  }\n\n  \n  \n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment teamsCoreFields on TeamsNode {\n    id\n    teamName\n    status\n    createdAt\n  }\n"): (typeof documents)["\n  fragment teamsCoreFields on TeamsNode {\n    id\n    teamName\n    status\n    createdAt\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment teamsFields on TeamsNode {\n    __typename\n    createdAt\n    eventId\n    hackathonEvents {\n      ...hackathonEventsFields\n    }\n    id\n    status\n    teamId\n    teamMemberss {\n      __typename\n      edges {\n        cursor\n        node {\n          ...teamMembersFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n    teamName\n  }\n\n  \n  \n  \n"): (typeof documents)["\n  fragment teamsFields on TeamsNode {\n    __typename\n    createdAt\n    eventId\n    hackathonEvents {\n      ...hackathonEventsFields\n    }\n    id\n    status\n    teamId\n    teamMemberss {\n      __typename\n      edges {\n        cursor\n        node {\n          ...teamMembersFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n    teamName\n  }\n\n  \n  \n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment usersCoreFields on UsersNode {\n    id\n    firstName\n    lastName\n    phoneNumber\n    email\n    github\n    linkedin\n    devpost\n    isAdmin\n    createdAt\n    updatedAt\n    authProvider\n    authProviderId\n  }\n"): (typeof documents)["\n  fragment usersCoreFields on UsersNode {\n    id\n    firstName\n    lastName\n    phoneNumber\n    email\n    github\n    linkedin\n    devpost\n    isAdmin\n    createdAt\n    updatedAt\n    authProvider\n    authProviderId\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment usersFields on UsersNode {\n    __typename\n    authProvider\n    authProviderId\n    createdAt\n    devpost\n    email\n    firstName\n    github\n    hackathonUserProfiless {\n      __typename\n      edges {\n        cursor\n        node {\n          ...hackathonUserProfilesFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n    id\n    isAdmin\n    lastName\n    linkedin\n    phoneNumber\n    teamMemberss {\n      __typename\n      edges {\n        cursor\n        node {\n          ...teamMembersFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n    updatedAt\n    userId\n  }\n\n  \n  \n  \n"): (typeof documents)["\n  fragment usersFields on UsersNode {\n    __typename\n    authProvider\n    authProviderId\n    createdAt\n    devpost\n    email\n    firstName\n    github\n    hackathonUserProfiless {\n      __typename\n      edges {\n        cursor\n        node {\n          ...hackathonUserProfilesFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n    id\n    isAdmin\n    lastName\n    linkedin\n    phoneNumber\n    teamMemberss {\n      __typename\n      edges {\n        cursor\n        node {\n          ...teamMembersFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n    updatedAt\n    userId\n  }\n\n  \n  \n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateApprovedEmail($input: ApprovedEmailsInput!) {\n    createApprovedEmails(input: $input) {\n      approvedEmail {\n        ...approvedEmailsFields\n      }\n    }\n  }\n\n  \n"): (typeof documents)["\n  mutation CreateApprovedEmail($input: ApprovedEmailsInput!) {\n    createApprovedEmails(input: $input) {\n      approvedEmail {\n        ...approvedEmailsFields\n      }\n    }\n  }\n\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteApprovedEmail($keyEmailEventId: UUID!) {\n    deleteApprovedEmails(keyEmailEventId: $keyEmailEventId) {\n      success\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteApprovedEmail($keyEmailEventId: UUID!) {\n    deleteApprovedEmails(keyEmailEventId: $keyEmailEventId) {\n      success\n      message\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateApprovedEmail($input: UpdateApprovedEmailsInput!) {\n    updateApprovedEmails(input: $input) {\n      approvedEmail {\n        ...approvedEmailsFields\n      }\n    }\n  }\n\n  \n"): (typeof documents)["\n  mutation UpdateApprovedEmail($input: UpdateApprovedEmailsInput!) {\n    updateApprovedEmails(input: $input) {\n      approvedEmail {\n        ...approvedEmailsFields\n      }\n    }\n  }\n\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateHackathonEvent($input: HackathonEventsInput!) {\n    createHackathonEvents(input: $input) {\n      hackathonEvent {\n        ...hackathonEventsFields\n      }\n    }\n  }\n\n  \n"): (typeof documents)["\n  mutation CreateHackathonEvent($input: HackathonEventsInput!) {\n    createHackathonEvents(input: $input) {\n      hackathonEvent {\n        ...hackathonEventsFields\n      }\n    }\n  }\n\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteHackathonEvent($id: ID!) {\n    deleteHackathonEvents(id: $id) {\n      success\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteHackathonEvent($id: ID!) {\n    deleteHackathonEvents(id: $id) {\n      success\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateHackathonEvent($id: ID!, $input: HackathonEventsInput!) {\n    updateHackathonEvents(id: $id, input: $input) {\n      hackathonEvent {\n        ...hackathonEventsFields\n      }\n    }\n  }\n\n  \n"): (typeof documents)["\n  mutation UpdateHackathonEvent($id: ID!, $input: HackathonEventsInput!) {\n    updateHackathonEvents(id: $id, input: $input) {\n      hackathonEvent {\n        ...hackathonEventsFields\n      }\n    }\n  }\n\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateHackathonOrganization($input: HackathonOrganizationsInput!) {\n    createHackathonOrganizations(input: $input) {\n      hackathonOrganization {\n        ...hackathonOrganizationsFields\n      }\n    }\n  }\n\n  \n"): (typeof documents)["\n  mutation CreateHackathonOrganization($input: HackathonOrganizationsInput!) {\n    createHackathonOrganizations(input: $input) {\n      hackathonOrganization {\n        ...hackathonOrganizationsFields\n      }\n    }\n  }\n\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteHackathonOrganization($id: ID!) {\n    deleteHackathonOrganizations(id: $id) {\n      message\n      success\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteHackathonOrganization($id: ID!) {\n    deleteHackathonOrganizations(id: $id) {\n      message\n      success\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateHackathonOrganization(\n    $id: ID!\n    $input: HackathonOrganizationsInput!\n  ) {\n    updateHackathonOrganizations(id: $id, input: $input) {\n      hackathonOrganization {\n        ...hackathonOrganizationsFields\n      }\n    }\n  }\n\n  \n"): (typeof documents)["\n  mutation UpdateHackathonOrganization(\n    $id: ID!\n    $input: HackathonOrganizationsInput!\n  ) {\n    updateHackathonOrganizations(id: $id, input: $input) {\n      hackathonOrganization {\n        ...hackathonOrganizationsFields\n      }\n    }\n  }\n\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateHackathonUserProfile($input: HackathonUserProfilesInput!) {\n    createHackathonUserProfiles(input: $input) {\n      hackathonUserProfile {\n        ...hackathonUserProfilesFields\n      }\n    }\n  }\n\n  \n"): (typeof documents)["\n  mutation CreateHackathonUserProfile($input: HackathonUserProfilesInput!) {\n    createHackathonUserProfiles(input: $input) {\n      hackathonUserProfile {\n        ...hackathonUserProfilesFields\n      }\n    }\n  }\n\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteHackathonUserProfile($id: ID!) {\n    deleteHackathonUserProfiles(id: $id) {\n      success\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteHackathonUserProfile($id: ID!) {\n    deleteHackathonUserProfiles(id: $id) {\n      success\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateHackathonUserProfile(\n    $id: ID!\n    $input: HackathonUserProfilesInput!\n  ) {\n    updateHackathonUserProfiles(id: $id, input: $input) {\n      hackathonUserProfile {\n        ...hackathonUserProfilesFields\n      }\n    }\n  }\n\n  \n"): (typeof documents)["\n  mutation UpdateHackathonUserProfile(\n    $id: ID!\n    $input: HackathonUserProfilesInput!\n  ) {\n    updateHackathonUserProfiles(id: $id, input: $input) {\n      hackathonUserProfile {\n        ...hackathonUserProfilesFields\n      }\n    }\n  }\n\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateTeamMember($input: CreateTeamMembersInput!) {\n    createTeamMembers(input: $input) {\n      teamMember {\n        ...teamMembersFields\n      }\n    }\n  }\n\n  \n"): (typeof documents)["\n  mutation CreateTeamMember($input: CreateTeamMembersInput!) {\n    createTeamMembers(input: $input) {\n      teamMember {\n        ...teamMembersFields\n      }\n    }\n  }\n\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteTeamMember($teamIdUserId: UUID!) {\n    deleteTeamMembers(teamIdUserId: $teamIdUserId) {\n      success\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteTeamMember($teamIdUserId: UUID!) {\n    deleteTeamMembers(teamIdUserId: $teamIdUserId) {\n      success\n      message\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateTeamMember($input: UpdateTeamMembersInput!) {\n    updateTeamMembers(input: $input) {\n      teamMember {\n        ...teamMembersFields\n      }\n    }\n  }\n\n  \n"): (typeof documents)["\n  mutation UpdateTeamMember($input: UpdateTeamMembersInput!) {\n    updateTeamMembers(input: $input) {\n      teamMember {\n        ...teamMembersFields\n      }\n    }\n  }\n\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateTeam($input: CreateTeamsInput!) {\n    createTeams(input: $input) {\n      team {\n        ...teamsFields\n      }\n    }\n  }\n\n  \n"): (typeof documents)["\n  mutation CreateTeam($input: CreateTeamsInput!) {\n    createTeams(input: $input) {\n      team {\n        ...teamsFields\n      }\n    }\n  }\n\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteTeam($teamId: UUID!) {\n    deleteTeams(teamId: $teamId) {\n      message\n      success\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteTeam($teamId: UUID!) {\n    deleteTeams(teamId: $teamId) {\n      message\n      success\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateTeam($input: UpdateTeamInput!) {\n    updateTeams(input: $input) {\n      team {\n        ...teamsFields\n      }\n    }\n  }\n\n  \n"): (typeof documents)["\n  mutation UpdateTeam($input: UpdateTeamInput!) {\n    updateTeams(input: $input) {\n      team {\n        ...teamsFields\n      }\n    }\n  }\n\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateUser($input: CreateUsersInput!) {\n    createUsers(input: $input) {\n      user {\n        ...usersFields\n      }\n    }\n  }\n\n  \n"): (typeof documents)["\n  mutation CreateUser($input: CreateUsersInput!) {\n    createUsers(input: $input) {\n      user {\n        ...usersFields\n      }\n    }\n  }\n\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteUser($input: DeleteUsersInput!) {\n    deleteUsers(input: $input) {\n      success\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteUser($input: DeleteUsersInput!) {\n    deleteUsers(input: $input) {\n      success\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateUser($input: UpdateUsersInput!) {\n    updateUsers(input: $input) {\n      user {\n        ...usersFields\n      }\n    }\n  }\n\n  \n"): (typeof documents)["\n  mutation UpdateUser($input: UpdateUsersInput!) {\n    updateUsers(input: $input) {\n      user {\n        ...usersFields\n      }\n    }\n  }\n\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllApprovedEmails {\n    allApprovedEmails {\n      __typename\n      edges {\n        cursor\n        node {\n          ...approvedEmailsFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetAllApprovedEmails {\n    allApprovedEmails {\n      __typename\n      edges {\n        cursor\n        node {\n          ...approvedEmailsFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetApprovedEmailById($id: ID!) {\n    approvedEmail(id: $id) {\n      ...approvedEmailsFields\n    }\n  }\n\n  \n"): (typeof documents)["\n  query GetApprovedEmailById($id: ID!) {\n    approvedEmail(id: $id) {\n      ...approvedEmailsFields\n    }\n  }\n\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllHackathonEvents {\n    allHackathonEvents {\n      __typename\n      edges {\n        cursor\n        node {\n          ...hackathonEventsFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n  }\n\n  \n  \n"): (typeof documents)["\n  query GetAllHackathonEvents {\n    allHackathonEvents {\n      __typename\n      edges {\n        cursor\n        node {\n          ...hackathonEventsFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n  }\n\n  \n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetHackathonEventById($id: ID!) {\n    hackathonEvent(id: $id) {\n      ...hackathonEventsFields\n    }\n  }\n\n  \n"): (typeof documents)["\n  query GetHackathonEventById($id: ID!) {\n    hackathonEvent(id: $id) {\n      ...hackathonEventsFields\n    }\n  }\n\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllHackathonOrganizations {\n    allHackathonOrganizations {\n      __typename\n      edges {\n        cursor\n        node {\n          ...hackathonOrganizationsFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n  }\n\n  \n  \n"): (typeof documents)["\n  query GetAllHackathonOrganizations {\n    allHackathonOrganizations {\n      __typename\n      edges {\n        cursor\n        node {\n          ...hackathonOrganizationsFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n  }\n\n  \n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetHackathonOrganizationById($id: ID!) {\n    hackathonOrganization(id: $id) {\n      ...hackathonOrganizationsFields\n    }\n  }\n\n  \n"): (typeof documents)["\n  query GetHackathonOrganizationById($id: ID!) {\n    hackathonOrganization(id: $id) {\n      ...hackathonOrganizationsFields\n    }\n  }\n\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllHackathonUserProfiles {\n    allHackathonUserProfiles {\n      __typename\n      edges {\n        cursor\n        node {\n          ...hackathonUserProfilesFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetAllHackathonUserProfiles {\n    allHackathonUserProfiles {\n      __typename\n      edges {\n        cursor\n        node {\n          ...hackathonUserProfilesFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetHackathonUserProfileById($id: ID!) {\n    hackathonUserProfile(id: $id) {\n      ...hackathonUserProfilesFields\n    }\n  }\n\n  \n"): (typeof documents)["\n  query GetHackathonUserProfileById($id: ID!) {\n    hackathonUserProfile(id: $id) {\n      ...hackathonUserProfilesFields\n    }\n  }\n\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllTeamMembers {\n    allTeamMembers {\n      __typename\n      edges {\n        cursor\n        node {\n          ...teamMembersFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n  }\n\n  \n  \n"): (typeof documents)["\n  query GetAllTeamMembers {\n    allTeamMembers {\n      __typename\n      edges {\n        cursor\n        node {\n          ...teamMembersFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n  }\n\n  \n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetTeamMemberById($id: ID!) {\n    teamMember(id: $id) {\n      ...teamMembersFields\n    }\n  }\n\n  \n"): (typeof documents)["\n  query GetTeamMemberById($id: ID!) {\n    teamMember(id: $id) {\n      ...teamMembersFields\n    }\n  }\n\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllUsers {\n    allUsers {\n      __typename\n      edges {\n        cursor\n        node {\n          ...usersFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n  }\n\n  \n  \n"): (typeof documents)["\n  query GetAllUsers {\n    allUsers {\n      __typename\n      edges {\n        cursor\n        node {\n          ...usersFields\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n  }\n\n  \n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetUserById($id: ID!) {\n    user(id: $id) {\n      ...usersFields\n    }\n  }\n\n  \n"): (typeof documents)["\n  query GetUserById($id: ID!) {\n    user(id: $id) {\n      ...usersFields\n    }\n  }\n\n  \n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;