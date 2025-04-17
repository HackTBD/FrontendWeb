/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: { input: any; output: any };
  /**
   * Leverages the internal Python implementation of UUID (uuid.UUID) to provide native UUID objects
   * in fields, resolvers and input.
   */
  UUID: { input: any; output: any };
};

export type ApprovedEmailsInput = {
  email: Scalars['String']['input'];
  eventId: Scalars['UUID']['input'];
};

export type ApprovedEmailsNode = Node & {
  __typename?: 'ApprovedEmailsNode';
  addedAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  eventId?: Maybe<Scalars['UUID']['output']>;
  hackathonEvents: HackathonEventsNode;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  keyEmailEventId: Scalars['UUID']['output'];
};

export type ApprovedEmailsNodeConnection = {
  __typename?: 'ApprovedEmailsNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ApprovedEmailsNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ApprovedEmailsNode` and its cursor. */
export type ApprovedEmailsNodeEdge = {
  __typename?: 'ApprovedEmailsNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ApprovedEmailsNode>;
};

export type CreateApprovedEmails = {
  __typename?: 'CreateApprovedEmails';
  approvedEmail?: Maybe<ApprovedEmailsNode>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CreateHackathonEvents = {
  __typename?: 'CreateHackathonEvents';
  hackathonEvent?: Maybe<HackathonEventsNode>;
};

export type CreateHackathonOrganizations = {
  __typename?: 'CreateHackathonOrganizations';
  hackathonOrganization?: Maybe<HackathonOrganizationsNode>;
};

export type CreateHackathonUserProfiles = {
  __typename?: 'CreateHackathonUserProfiles';
  hackathonUserProfile?: Maybe<HackathonUserProfilesNode>;
};

export type CreateTeamMembers = {
  __typename?: 'CreateTeamMembers';
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
  teamMember?: Maybe<TeamMembersNode>;
};

export type CreateTeamMembersInput = {
  teamId: Scalars['UUID']['input'];
  userId: Scalars['UUID']['input'];
};

export type CreateTeams = {
  __typename?: 'CreateTeams';
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
  team?: Maybe<TeamsNode>;
};

export type CreateTeamsInput = {
  eventId: Scalars['UUID']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  teamName: Scalars['String']['input'];
};

export type CreateUsersInput = {
  authProvider: Scalars['String']['input'];
  authProviderId: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  devpost?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  github?: InputMaybe<Scalars['String']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  linkedin?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type CreateUsersPayload = {
  __typename?: 'CreateUsersPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UsersNode>;
};

export type DeleteApprovedEmails = {
  __typename?: 'DeleteApprovedEmails';
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteHackathonEvents = {
  __typename?: 'DeleteHackathonEvents';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteHackathonOrganizations = {
  __typename?: 'DeleteHackathonOrganizations';
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteHackathonUserProfiles = {
  __typename?: 'DeleteHackathonUserProfiles';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteTeamMembers = {
  __typename?: 'DeleteTeamMembers';
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteTeams = {
  __typename?: 'DeleteTeams';
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteUsersInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['UUID']['input'];
};

export type DeleteUsersPayload = {
  __typename?: 'DeleteUsersPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** An enumeration. */
export enum HackTbdHackathonEventsLevelChoices {
  /** Advanced */
  Advanced = 'ADVANCED',
  /** All Level */
  AllLevel = 'ALL_LEVEL',
  /** Beginner */
  Beginner = 'BEGINNER',
  /** Intermediate */
  Intermediate = 'INTERMEDIATE',
}

/** An enumeration. */
export enum HackTbdHackathonEventsStatusChoices {
  /** Closed */
  Closed = 'CLOSED',
  /** Completed */
  Completed = 'COMPLETED',
  /** Happening */
  Happening = 'HAPPENING',
  /** Open */
  Open = 'OPEN',
}

/** An enumeration. */
export enum HackTbdTeamsStatusChoices {
  /** COMPLETE */
  Complete = 'COMPLETE',
  /** FORMING */
  Forming = 'FORMING',
}

export type HackathonEventsInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  endDate: Scalars['DateTime']['input'];
  hackathonOrganizationsId: Scalars['UUID']['input'];
  isVirtual?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  maxTeamSize: Scalars['Int']['input'];
  minTeamSize: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  startDate: Scalars['DateTime']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
};

export type HackathonEventsNode = Node & {
  __typename?: 'HackathonEventsNode';
  approvedEmailss: ApprovedEmailsNodeConnection;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  endDate: Scalars['DateTime']['output'];
  eventId: Scalars['UUID']['output'];
  hackathonOrganizations: HackathonOrganizationsNode;
  hackathonUserProfiless: HackathonUserProfilesNodeConnection;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  isVirtual: Scalars['Boolean']['output'];
  level: HackTbdHackathonEventsLevelChoices;
  location?: Maybe<Scalars['String']['output']>;
  maxTeamSize: Scalars['Int']['output'];
  minTeamSize: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  startDate: Scalars['DateTime']['output'];
  status: HackTbdHackathonEventsStatusChoices;
  teamss: TeamsNodeConnection;
};

export type HackathonEventsNodeApprovedEmailssArgs = {
  addedAt?: InputMaybe<Scalars['DateTime']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  eventId?: InputMaybe<Scalars['UUID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hackathonEvents?: InputMaybe<Scalars['ID']['input']>;
  keyEmailEventId?: InputMaybe<Scalars['UUID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type HackathonEventsNodeHackathonUserProfilessArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  eventId?: InputMaybe<Scalars['UUID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hackathonEvents?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  preferences?: InputMaybe<Scalars['String']['input']>;
  profileId?: InputMaybe<Scalars['UUID']['input']>;
  skills?: InputMaybe<Scalars['String']['input']>;
  teamId?: InputMaybe<Scalars['UUID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  users?: InputMaybe<Scalars['ID']['input']>;
};

export type HackathonEventsNodeTeamssArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  eventId?: InputMaybe<Scalars['UUID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hackathonEvents?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<HackTbdTeamsStatusChoices>;
  teamId?: InputMaybe<Scalars['UUID']['input']>;
  teamMemberss?: InputMaybe<Scalars['ID']['input']>;
  teamName?: InputMaybe<Scalars['String']['input']>;
};

export type HackathonEventsNodeConnection = {
  __typename?: 'HackathonEventsNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<HackathonEventsNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `HackathonEventsNode` and its cursor. */
export type HackathonEventsNodeEdge = {
  __typename?: 'HackathonEventsNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<HackathonEventsNode>;
};

export type HackathonOrganizationsInput = {
  contactEmail?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  linkedin?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  website?: InputMaybe<Scalars['String']['input']>;
};

export type HackathonOrganizationsNode = Node & {
  __typename?: 'HackathonOrganizationsNode';
  contactEmail?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  hackathonEventss: HackathonEventsNodeConnection;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  linkedin?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  orgId: Scalars['UUID']['output'];
  website?: Maybe<Scalars['String']['output']>;
};

export type HackathonOrganizationsNodeHackathonEventssArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  approvedEmailss?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  eventId?: InputMaybe<Scalars['UUID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hackathonOrganizations?: InputMaybe<Scalars['ID']['input']>;
  hackathonUserProfiless?: InputMaybe<Scalars['ID']['input']>;
  isVirtual?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  level?: InputMaybe<HackTbdHackathonEventsLevelChoices>;
  location?: InputMaybe<Scalars['String']['input']>;
  maxTeamSize?: InputMaybe<Scalars['Int']['input']>;
  minTeamSize?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<HackTbdHackathonEventsStatusChoices>;
  teamss?: InputMaybe<Scalars['ID']['input']>;
};

export type HackathonOrganizationsNodeConnection = {
  __typename?: 'HackathonOrganizationsNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<HackathonOrganizationsNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `HackathonOrganizationsNode` and its cursor. */
export type HackathonOrganizationsNodeEdge = {
  __typename?: 'HackathonOrganizationsNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<HackathonOrganizationsNode>;
};

export type HackathonUserProfilesInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  eventId?: InputMaybe<Scalars['UUID']['input']>;
  hackathonEventsId: Scalars['UUID']['input'];
  preferences?: InputMaybe<Scalars['String']['input']>;
  skills: Scalars['String']['input'];
  teamId?: InputMaybe<Scalars['UUID']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  usersId: Scalars['UUID']['input'];
};

export type HackathonUserProfilesNode = Node & {
  __typename?: 'HackathonUserProfilesNode';
  bio?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  eventId?: Maybe<Scalars['UUID']['output']>;
  hackathonEvents: HackathonEventsNode;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  preferences?: Maybe<Scalars['String']['output']>;
  profileId: Scalars['UUID']['output'];
  skills: Scalars['String']['output'];
  teamId?: Maybe<Scalars['UUID']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['UUID']['output']>;
  users: UsersNode;
};

export type HackathonUserProfilesNodeConnection = {
  __typename?: 'HackathonUserProfilesNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<HackathonUserProfilesNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `HackathonUserProfilesNode` and its cursor. */
export type HackathonUserProfilesNodeEdge = {
  __typename?: 'HackathonUserProfilesNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<HackathonUserProfilesNode>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createApprovedEmails?: Maybe<CreateApprovedEmails>;
  createHackathonEvents?: Maybe<CreateHackathonEvents>;
  createHackathonOrganizations?: Maybe<CreateHackathonOrganizations>;
  createHackathonUserProfiles?: Maybe<CreateHackathonUserProfiles>;
  createTeamMembers?: Maybe<CreateTeamMembers>;
  createTeams?: Maybe<CreateTeams>;
  createUsers?: Maybe<CreateUsersPayload>;
  deleteApprovedEmails?: Maybe<DeleteApprovedEmails>;
  deleteHackathonEvents?: Maybe<DeleteHackathonEvents>;
  deleteHackathonOrganizations?: Maybe<DeleteHackathonOrganizations>;
  deleteHackathonUserProfiles?: Maybe<DeleteHackathonUserProfiles>;
  deleteTeamMembers?: Maybe<DeleteTeamMembers>;
  deleteTeams?: Maybe<DeleteTeams>;
  deleteUsers?: Maybe<DeleteUsersPayload>;
  updateApprovedEmails?: Maybe<UpdateApprovedEmails>;
  updateHackathonEvents?: Maybe<UpdateHackathonEvents>;
  updateHackathonOrganizations?: Maybe<UpdateHackathonOrganizations>;
  updateHackathonUserProfiles?: Maybe<UpdateHackathonUserProfiles>;
  updateTeamMembers?: Maybe<UpdateTeamMembers>;
  updateTeams?: Maybe<UpdateTeams>;
  updateUsers?: Maybe<UpdateUsersPayload>;
};

export type MutationCreateApprovedEmailsArgs = {
  input: ApprovedEmailsInput;
};

export type MutationCreateHackathonEventsArgs = {
  input: HackathonEventsInput;
};

export type MutationCreateHackathonOrganizationsArgs = {
  input: HackathonOrganizationsInput;
};

export type MutationCreateHackathonUserProfilesArgs = {
  input: HackathonUserProfilesInput;
};

export type MutationCreateTeamMembersArgs = {
  input: CreateTeamMembersInput;
};

export type MutationCreateTeamsArgs = {
  input: CreateTeamsInput;
};

export type MutationCreateUsersArgs = {
  input: CreateUsersInput;
};

export type MutationDeleteApprovedEmailsArgs = {
  keyEmailEventId: Scalars['UUID']['input'];
};

export type MutationDeleteHackathonEventsArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteHackathonOrganizationsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type MutationDeleteHackathonUserProfilesArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteTeamMembersArgs = {
  teamIdUserId: Scalars['UUID']['input'];
};

export type MutationDeleteTeamsArgs = {
  teamId: Scalars['UUID']['input'];
};

export type MutationDeleteUsersArgs = {
  input: DeleteUsersInput;
};

export type MutationUpdateApprovedEmailsArgs = {
  input: UpdateApprovedEmailsInput;
};

export type MutationUpdateHackathonEventsArgs = {
  id: Scalars['ID']['input'];
  input: HackathonEventsInput;
};

export type MutationUpdateHackathonOrganizationsArgs = {
  id: Scalars['ID']['input'];
  input: HackathonOrganizationsInput;
};

export type MutationUpdateHackathonUserProfilesArgs = {
  id: Scalars['ID']['input'];
  input: HackathonUserProfilesInput;
};

export type MutationUpdateTeamMembersArgs = {
  input: UpdateTeamMembersInput;
};

export type MutationUpdateTeamsArgs = {
  input: UpdateTeamInput;
};

export type MutationUpdateUsersArgs = {
  input: UpdateUsersInput;
};

/** An object with an ID */
export type Node = {
  /** The ID of the object */
  id: Scalars['ID']['output'];
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  allApprovedEmails?: Maybe<ApprovedEmailsNodeConnection>;
  allHackathonEvents?: Maybe<HackathonEventsNodeConnection>;
  allHackathonOrganizations?: Maybe<HackathonOrganizationsNodeConnection>;
  allHackathonUserProfiles?: Maybe<HackathonUserProfilesNodeConnection>;
  allTeamMembers?: Maybe<TeamMembersNodeConnection>;
  allTeams?: Maybe<TeamsNodeConnection>;
  allUsers?: Maybe<UsersNodeConnection>;
  approvedEmail?: Maybe<ApprovedEmailsNode>;
  approvedEmailByEmail?: Maybe<ApprovedEmailsNode>;
  hackathonEvent?: Maybe<HackathonEventsNode>;
  hackathonEventByEventId?: Maybe<HackathonEventsNode>;
  hackathonOrganization?: Maybe<HackathonOrganizationsNode>;
  hackathonOrganizationByOrgId?: Maybe<HackathonOrganizationsNode>;
  hackathonUserProfile?: Maybe<HackathonUserProfilesNode>;
  hackathonUserProfileByProfileId?: Maybe<HackathonUserProfilesNode>;
  team?: Maybe<TeamsNode>;
  teamByTeamId?: Maybe<TeamsNode>;
  teamMember?: Maybe<TeamMembersNode>;
  teamMemberByMemberId?: Maybe<TeamMembersNode>;
  user?: Maybe<UsersNode>;
  userByUuid?: Maybe<UsersNode>;
};

export type QueryAllApprovedEmailsArgs = {
  addedAt?: InputMaybe<Scalars['DateTime']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  eventId?: InputMaybe<Scalars['UUID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hackathonEvents?: InputMaybe<Scalars['ID']['input']>;
  keyEmailEventId?: InputMaybe<Scalars['UUID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryAllHackathonEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  approvedEmailss?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  eventId?: InputMaybe<Scalars['UUID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hackathonOrganizations?: InputMaybe<Scalars['ID']['input']>;
  hackathonUserProfiless?: InputMaybe<Scalars['ID']['input']>;
  isVirtual?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  level?: InputMaybe<HackTbdHackathonEventsLevelChoices>;
  location?: InputMaybe<Scalars['String']['input']>;
  maxTeamSize?: InputMaybe<Scalars['Int']['input']>;
  minTeamSize?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<HackTbdHackathonEventsStatusChoices>;
  teamss?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryAllHackathonOrganizationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  contactEmail?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hackathonEventss?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  linkedin?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orgId?: InputMaybe<Scalars['UUID']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type QueryAllHackathonUserProfilesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  eventId?: InputMaybe<Scalars['UUID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hackathonEvents?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  preferences?: InputMaybe<Scalars['String']['input']>;
  profileId?: InputMaybe<Scalars['UUID']['input']>;
  skills?: InputMaybe<Scalars['String']['input']>;
  teamId?: InputMaybe<Scalars['UUID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  users?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryAllTeamMembersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  teamId?: InputMaybe<Scalars['UUID']['input']>;
  teamIdUserId?: InputMaybe<Scalars['UUID']['input']>;
  teamss?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userss?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryAllTeamsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  eventId?: InputMaybe<Scalars['UUID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hackathonEvents?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<HackTbdTeamsStatusChoices>;
  teamId?: InputMaybe<Scalars['UUID']['input']>;
  teamMemberss?: InputMaybe<Scalars['ID']['input']>;
  teamName?: InputMaybe<Scalars['String']['input']>;
};

export type QueryAllUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  authProvider?: InputMaybe<Scalars['String']['input']>;
  authProviderId?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  devpost?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  github?: InputMaybe<Scalars['String']['input']>;
  hackathonUserProfiless?: InputMaybe<Scalars['ID']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  linkedin?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  teamMemberss?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type QueryApprovedEmailArgs = {
  id: Scalars['ID']['input'];
};

export type QueryApprovedEmailByEmailArgs = {
  email: Scalars['String']['input'];
};

export type QueryHackathonEventArgs = {
  id: Scalars['ID']['input'];
};

export type QueryHackathonEventByEventIdArgs = {
  eventId: Scalars['UUID']['input'];
};

export type QueryHackathonOrganizationArgs = {
  id: Scalars['ID']['input'];
};

export type QueryHackathonOrganizationByOrgIdArgs = {
  orgId: Scalars['UUID']['input'];
};

export type QueryHackathonUserProfileArgs = {
  id: Scalars['ID']['input'];
};

export type QueryHackathonUserProfileByProfileIdArgs = {
  profileId: Scalars['UUID']['input'];
};

export type QueryTeamArgs = {
  id: Scalars['ID']['input'];
};

export type QueryTeamByTeamIdArgs = {
  teamId: Scalars['UUID']['input'];
};

export type QueryTeamMemberArgs = {
  id: Scalars['ID']['input'];
};

export type QueryTeamMemberByMemberIdArgs = {
  teamIdUserId: Scalars['UUID']['input'];
};

export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};

export type QueryUserByUuidArgs = {
  userId: Scalars['UUID']['input'];
};

export type TeamMembersNode = Node & {
  __typename?: 'TeamMembersNode';
  /** The ID of the object */
  id: Scalars['ID']['output'];
  teamId?: Maybe<Scalars['UUID']['output']>;
  teamIdUserId: Scalars['UUID']['output'];
  teamss: TeamsNodeConnection;
  userId?: Maybe<Scalars['UUID']['output']>;
  userss: UsersNodeConnection;
};

export type TeamMembersNodeTeamssArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  eventId?: InputMaybe<Scalars['UUID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hackathonEvents?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<HackTbdTeamsStatusChoices>;
  teamId?: InputMaybe<Scalars['UUID']['input']>;
  teamMemberss?: InputMaybe<Scalars['ID']['input']>;
  teamName?: InputMaybe<Scalars['String']['input']>;
};

export type TeamMembersNodeUserssArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  authProvider?: InputMaybe<Scalars['String']['input']>;
  authProviderId?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  devpost?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  github?: InputMaybe<Scalars['String']['input']>;
  hackathonUserProfiless?: InputMaybe<Scalars['ID']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  linkedin?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  teamMemberss?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type TeamMembersNodeConnection = {
  __typename?: 'TeamMembersNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TeamMembersNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `TeamMembersNode` and its cursor. */
export type TeamMembersNodeEdge = {
  __typename?: 'TeamMembersNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<TeamMembersNode>;
};

export type TeamsNode = Node & {
  __typename?: 'TeamsNode';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  eventId?: Maybe<Scalars['UUID']['output']>;
  hackathonEvents: HackathonEventsNode;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  status?: Maybe<HackTbdTeamsStatusChoices>;
  teamId: Scalars['UUID']['output'];
  teamMemberss: TeamMembersNodeConnection;
  teamName: Scalars['String']['output'];
};

export type TeamsNodeTeamMemberssArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  teamId?: InputMaybe<Scalars['UUID']['input']>;
  teamIdUserId?: InputMaybe<Scalars['UUID']['input']>;
  teamss?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userss?: InputMaybe<Scalars['ID']['input']>;
};

export type TeamsNodeConnection = {
  __typename?: 'TeamsNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TeamsNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `TeamsNode` and its cursor. */
export type TeamsNodeEdge = {
  __typename?: 'TeamsNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<TeamsNode>;
};

export type UpdateApprovedEmails = {
  __typename?: 'UpdateApprovedEmails';
  approvedEmail?: Maybe<ApprovedEmailsNode>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type UpdateApprovedEmailsInput = {
  email: Scalars['String']['input'];
  keyEmailEventId: Scalars['UUID']['input'];
};

export type UpdateHackathonEvents = {
  __typename?: 'UpdateHackathonEvents';
  hackathonEvent?: Maybe<HackathonEventsNode>;
};

export type UpdateHackathonOrganizations = {
  __typename?: 'UpdateHackathonOrganizations';
  hackathonOrganization?: Maybe<HackathonOrganizationsNode>;
};

export type UpdateHackathonUserProfiles = {
  __typename?: 'UpdateHackathonUserProfiles';
  hackathonUserProfile?: Maybe<HackathonUserProfilesNode>;
};

export type UpdateTeamInput = {
  status?: InputMaybe<Scalars['String']['input']>;
  teamId: Scalars['UUID']['input'];
  teamName?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTeamMembers = {
  __typename?: 'UpdateTeamMembers';
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
  teamMember?: Maybe<TeamMembersNode>;
};

export type UpdateTeamMembersInput = {
  teamId?: InputMaybe<Scalars['UUID']['input']>;
  teamIdUserId: Scalars['UUID']['input'];
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type UpdateTeams = {
  __typename?: 'UpdateTeams';
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
  team?: Maybe<TeamsNode>;
};

export type UpdateUsersInput = {
  authProvider?: InputMaybe<Scalars['String']['input']>;
  authProviderId?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  devpost?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  github?: InputMaybe<Scalars['String']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  linkedin?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['UUID']['input'];
};

export type UpdateUsersPayload = {
  __typename?: 'UpdateUsersPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UsersNode>;
};

export type UsersNode = Node & {
  __typename?: 'UsersNode';
  authProvider?: Maybe<Scalars['String']['output']>;
  authProviderId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  devpost?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  github?: Maybe<Scalars['String']['output']>;
  hackathonUserProfiless: HackathonUserProfilesNodeConnection;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  isAdmin?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  linkedin?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  teamMemberss: TeamMembersNodeConnection;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId: Scalars['UUID']['output'];
};

export type UsersNodeHackathonUserProfilessArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  eventId?: InputMaybe<Scalars['UUID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hackathonEvents?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  preferences?: InputMaybe<Scalars['String']['input']>;
  profileId?: InputMaybe<Scalars['UUID']['input']>;
  skills?: InputMaybe<Scalars['String']['input']>;
  teamId?: InputMaybe<Scalars['UUID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  users?: InputMaybe<Scalars['ID']['input']>;
};

export type UsersNodeTeamMemberssArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  teamId?: InputMaybe<Scalars['UUID']['input']>;
  teamIdUserId?: InputMaybe<Scalars['UUID']['input']>;
  teamss?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userss?: InputMaybe<Scalars['ID']['input']>;
};

export type UsersNodeConnection = {
  __typename?: 'UsersNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UsersNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `UsersNode` and its cursor. */
export type UsersNodeEdge = {
  __typename?: 'UsersNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<UsersNode>;
};

export type ApprovedEmailsFieldsFragment = {
  __typename: 'ApprovedEmailsNode';
  addedAt?: any | null;
  email: string;
  eventId?: any | null;
  id: string;
  keyEmailEventId: any;
  hackathonEvents: { __typename?: 'HackathonEventsNode' } & {
    ' $fragmentRefs'?: {
      HackathonEventsCoreFieldsFragment: HackathonEventsCoreFieldsFragment;
    };
  };
} & { ' $fragmentName'?: 'ApprovedEmailsFieldsFragment' };

export type CreateHackathonOrgPayloadFieldsFragment = {
  __typename?: 'HackathonOrganizationsNode';
  id: string;
  name: string;
  contactEmail?: string | null;
  website?: string | null;
  description?: string | null;
  linkedin?: string | null;
  createdAt?: any | null;
} & { ' $fragmentName'?: 'CreateHackathonOrgPayloadFieldsFragment' };

export type HackathonEventsCoreFieldsFragment = {
  __typename?: 'HackathonEventsNode';
  id: string;
  name: string;
  isVirtual: boolean;
  level: HackTbdHackathonEventsLevelChoices;
  location?: string | null;
  maxTeamSize: number;
  minTeamSize: number;
  startDate: any;
  endDate: any;
  status: HackTbdHackathonEventsStatusChoices;
  description?: string | null;
} & { ' $fragmentName'?: 'HackathonEventsCoreFieldsFragment' };

export type HackathonEventsFieldsFragment = {
  __typename: 'HackathonEventsNode';
  createdAt: any;
  description?: string | null;
  endDate: any;
  eventId: any;
  id: string;
  isVirtual: boolean;
  level: HackTbdHackathonEventsLevelChoices;
  location?: string | null;
  maxTeamSize: number;
  minTeamSize: number;
  name: string;
  startDate: any;
  status: HackTbdHackathonEventsStatusChoices;
  approvedEmailss: {
    __typename: 'ApprovedEmailsNodeConnection';
    edges: Array<{
      __typename?: 'ApprovedEmailsNodeEdge';
      cursor: string;
      node?:
        | ({ __typename?: 'ApprovedEmailsNode' } & {
            ' $fragmentRefs'?: {
              ApprovedEmailsFieldsFragment: ApprovedEmailsFieldsFragment;
            };
          })
        | null;
    } | null>;
  };
  hackathonOrganizations: { __typename?: 'HackathonOrganizationsNode' } & {
    ' $fragmentRefs'?: {
      HackathonOrganizationsFieldsFragment: HackathonOrganizationsFieldsFragment;
    };
  };
  hackathonUserProfiless: {
    __typename: 'HackathonUserProfilesNodeConnection';
    edges: Array<{
      __typename?: 'HackathonUserProfilesNodeEdge';
      cursor: string;
      node?:
        | ({ __typename?: 'HackathonUserProfilesNode' } & {
            ' $fragmentRefs'?: {
              HackathonUserProfilesFieldsFragment: HackathonUserProfilesFieldsFragment;
            };
          })
        | null;
    } | null>;
    pageInfo: { __typename?: 'PageInfo' } & {
      ' $fragmentRefs'?: { PageInfoFieldsFragment: PageInfoFieldsFragment };
    };
  };
  teamss: {
    __typename: 'TeamsNodeConnection';
    edges: Array<{
      __typename?: 'TeamsNodeEdge';
      cursor: string;
      node?:
        | ({ __typename?: 'TeamsNode' } & {
            ' $fragmentRefs'?: {
              TeamsCoreFieldsFragment: TeamsCoreFieldsFragment;
            };
          })
        | null;
    } | null>;
    pageInfo: { __typename?: 'PageInfo' } & {
      ' $fragmentRefs'?: { PageInfoFieldsFragment: PageInfoFieldsFragment };
    };
  };
} & { ' $fragmentName'?: 'HackathonEventsFieldsFragment' };

export type HackathonUserProfilesFieldsFragment = {
  __typename: 'HackathonUserProfilesNode';
  bio?: string | null;
  createdAt?: any | null;
  eventId?: any | null;
  id: string;
  preferences?: string | null;
  profileId: any;
  skills: string;
  teamId?: any | null;
  updatedAt?: any | null;
  userId?: any | null;
  hackathonEvents: { __typename?: 'HackathonEventsNode' } & {
    ' $fragmentRefs'?: {
      HackathonEventsCoreFieldsFragment: HackathonEventsCoreFieldsFragment;
    };
  };
  users: { __typename?: 'UsersNode' } & {
    ' $fragmentRefs'?: { UsersCoreFieldsFragment: UsersCoreFieldsFragment };
  };
} & { ' $fragmentName'?: 'HackathonUserProfilesFieldsFragment' };

export type HackathonOrganizationsFieldsFragment = {
  __typename: 'HackathonOrganizationsNode';
  contactEmail?: string | null;
  createdAt?: any | null;
  description?: string | null;
  id: string;
  linkedin?: string | null;
  name: string;
  orgId: any;
  website?: string | null;
  hackathonEventss: {
    __typename: 'HackathonEventsNodeConnection';
    edges: Array<{
      __typename?: 'HackathonEventsNodeEdge';
      cursor: string;
      node?:
        | ({ __typename?: 'HackathonEventsNode' } & {
            ' $fragmentRefs'?: {
              HackathonEventsCoreFieldsFragment: HackathonEventsCoreFieldsFragment;
            };
          })
        | null;
    } | null>;
    pageInfo: { __typename?: 'PageInfo' } & {
      ' $fragmentRefs'?: { PageInfoFieldsFragment: PageInfoFieldsFragment };
    };
  };
} & { ' $fragmentName'?: 'HackathonOrganizationsFieldsFragment' };

export type PageInfoFieldsFragment = {
  __typename: 'PageInfo';
  endCursor?: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
} & { ' $fragmentName'?: 'PageInfoFieldsFragment' };

export type TeamMembersFieldsFragment = {
  __typename: 'TeamMembersNode';
  id: string;
  teamId?: any | null;
  userId?: any | null;
  teamIdUserId: any;
  teamss: {
    __typename?: 'TeamsNodeConnection';
    edges: Array<{
      __typename?: 'TeamsNodeEdge';
      node?:
        | ({ __typename?: 'TeamsNode' } & {
            ' $fragmentRefs'?: {
              TeamsCoreFieldsFragment: TeamsCoreFieldsFragment;
            };
          })
        | null;
    } | null>;
    pageInfo: { __typename?: 'PageInfo' } & {
      ' $fragmentRefs'?: { PageInfoFieldsFragment: PageInfoFieldsFragment };
    };
  };
  userss: {
    __typename?: 'UsersNodeConnection';
    edges: Array<{
      __typename?: 'UsersNodeEdge';
      node?:
        | ({ __typename?: 'UsersNode' } & {
            ' $fragmentRefs'?: {
              UsersCoreFieldsFragment: UsersCoreFieldsFragment;
            };
          })
        | null;
    } | null>;
    pageInfo: { __typename?: 'PageInfo' } & {
      ' $fragmentRefs'?: { PageInfoFieldsFragment: PageInfoFieldsFragment };
    };
  };
} & { ' $fragmentName'?: 'TeamMembersFieldsFragment' };

export type TeamsCoreFieldsFragment = {
  __typename?: 'TeamsNode';
  id: string;
  teamName: string;
  status?: HackTbdTeamsStatusChoices | null;
  createdAt?: any | null;
} & { ' $fragmentName'?: 'TeamsCoreFieldsFragment' };

export type TeamsFieldsFragment = {
  __typename: 'TeamsNode';
  createdAt?: any | null;
  eventId?: any | null;
  id: string;
  status?: HackTbdTeamsStatusChoices | null;
  teamId: any;
  teamName: string;
  hackathonEvents: { __typename?: 'HackathonEventsNode' } & {
    ' $fragmentRefs'?: {
      HackathonEventsFieldsFragment: HackathonEventsFieldsFragment;
    };
  };
  teamMemberss: {
    __typename: 'TeamMembersNodeConnection';
    edges: Array<{
      __typename?: 'TeamMembersNodeEdge';
      cursor: string;
      node?:
        | ({ __typename?: 'TeamMembersNode' } & {
            ' $fragmentRefs'?: {
              TeamMembersFieldsFragment: TeamMembersFieldsFragment;
            };
          })
        | null;
    } | null>;
    pageInfo: { __typename?: 'PageInfo' } & {
      ' $fragmentRefs'?: { PageInfoFieldsFragment: PageInfoFieldsFragment };
    };
  };
} & { ' $fragmentName'?: 'TeamsFieldsFragment' };

export type UsersCoreFieldsFragment = {
  __typename?: 'UsersNode';
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  email: string;
  github?: string | null;
  linkedin?: string | null;
  devpost?: string | null;
  isAdmin?: boolean | null;
  createdAt?: any | null;
  updatedAt?: any | null;
  authProvider?: string | null;
  authProviderId?: string | null;
} & { ' $fragmentName'?: 'UsersCoreFieldsFragment' };

export type UsersFieldsFragment = {
  __typename: 'UsersNode';
  authProvider?: string | null;
  authProviderId?: string | null;
  createdAt?: any | null;
  devpost?: string | null;
  email: string;
  firstName?: string | null;
  github?: string | null;
  id: string;
  isAdmin?: boolean | null;
  lastName?: string | null;
  linkedin?: string | null;
  phoneNumber?: string | null;
  updatedAt?: any | null;
  userId: any;
  hackathonUserProfiless: {
    __typename: 'HackathonUserProfilesNodeConnection';
    edges: Array<{
      __typename?: 'HackathonUserProfilesNodeEdge';
      cursor: string;
      node?:
        | ({ __typename?: 'HackathonUserProfilesNode' } & {
            ' $fragmentRefs'?: {
              HackathonUserProfilesFieldsFragment: HackathonUserProfilesFieldsFragment;
            };
          })
        | null;
    } | null>;
    pageInfo: { __typename?: 'PageInfo' } & {
      ' $fragmentRefs'?: { PageInfoFieldsFragment: PageInfoFieldsFragment };
    };
  };
  teamMemberss: {
    __typename: 'TeamMembersNodeConnection';
    edges: Array<{
      __typename?: 'TeamMembersNodeEdge';
      cursor: string;
      node?:
        | ({ __typename?: 'TeamMembersNode' } & {
            ' $fragmentRefs'?: {
              TeamMembersFieldsFragment: TeamMembersFieldsFragment;
            };
          })
        | null;
    } | null>;
    pageInfo: { __typename?: 'PageInfo' } & {
      ' $fragmentRefs'?: { PageInfoFieldsFragment: PageInfoFieldsFragment };
    };
  };
} & { ' $fragmentName'?: 'UsersFieldsFragment' };

export type CreateApprovedEmailMutationVariables = Exact<{
  input: ApprovedEmailsInput;
}>;

export type CreateApprovedEmailMutation = {
  __typename?: 'Mutation';
  createApprovedEmails?: {
    __typename?: 'CreateApprovedEmails';
    approvedEmail?:
      | ({ __typename?: 'ApprovedEmailsNode' } & {
          ' $fragmentRefs'?: {
            ApprovedEmailsFieldsFragment: ApprovedEmailsFieldsFragment;
          };
        })
      | null;
  } | null;
};

export type DeleteApprovedEmailMutationVariables = Exact<{
  keyEmailEventId: Scalars['UUID']['input'];
}>;

export type DeleteApprovedEmailMutation = {
  __typename?: 'Mutation';
  deleteApprovedEmails?: {
    __typename?: 'DeleteApprovedEmails';
    success?: boolean | null;
    message?: string | null;
  } | null;
};

export type UpdateApprovedEmailMutationVariables = Exact<{
  input: UpdateApprovedEmailsInput;
}>;

export type UpdateApprovedEmailMutation = {
  __typename?: 'Mutation';
  updateApprovedEmails?: {
    __typename?: 'UpdateApprovedEmails';
    approvedEmail?:
      | ({ __typename?: 'ApprovedEmailsNode' } & {
          ' $fragmentRefs'?: {
            ApprovedEmailsFieldsFragment: ApprovedEmailsFieldsFragment;
          };
        })
      | null;
  } | null;
};

export type CreateHackathonEventMutationVariables = Exact<{
  input: HackathonEventsInput;
}>;

export type CreateHackathonEventMutation = {
  __typename?: 'Mutation';
  createHackathonEvents?: {
    __typename?: 'CreateHackathonEvents';
    hackathonEvent?:
      | ({ __typename?: 'HackathonEventsNode' } & {
          ' $fragmentRefs'?: {
            HackathonEventsFieldsFragment: HackathonEventsFieldsFragment;
          };
        })
      | null;
  } | null;
};

export type DeleteHackathonEventMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type DeleteHackathonEventMutation = {
  __typename?: 'Mutation';
  deleteHackathonEvents?: {
    __typename?: 'DeleteHackathonEvents';
    success?: boolean | null;
  } | null;
};

export type UpdateHackathonEventMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: HackathonEventsInput;
}>;

export type UpdateHackathonEventMutation = {
  __typename?: 'Mutation';
  updateHackathonEvents?: {
    __typename?: 'UpdateHackathonEvents';
    hackathonEvent?:
      | ({ __typename?: 'HackathonEventsNode' } & {
          ' $fragmentRefs'?: {
            HackathonEventsFieldsFragment: HackathonEventsFieldsFragment;
          };
        })
      | null;
  } | null;
};

export type CreateHackathonOrganizationMutationVariables = Exact<{
  input: HackathonOrganizationsInput;
}>;

export type CreateHackathonOrganizationMutation = {
  __typename?: 'Mutation';
  createHackathonOrganizations?: {
    __typename?: 'CreateHackathonOrganizations';
    hackathonOrganization?:
      | ({ __typename?: 'HackathonOrganizationsNode' } & {
          ' $fragmentRefs'?: {
            HackathonOrganizationsFieldsFragment: HackathonOrganizationsFieldsFragment;
          };
        })
      | null;
  } | null;
};

export type DeleteHackathonOrganizationMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type DeleteHackathonOrganizationMutation = {
  __typename?: 'Mutation';
  deleteHackathonOrganizations?: {
    __typename?: 'DeleteHackathonOrganizations';
    message?: string | null;
    success?: boolean | null;
  } | null;
};

export type UpdateHackathonOrganizationMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: HackathonOrganizationsInput;
}>;

export type UpdateHackathonOrganizationMutation = {
  __typename?: 'Mutation';
  updateHackathonOrganizations?: {
    __typename?: 'UpdateHackathonOrganizations';
    hackathonOrganization?:
      | ({ __typename?: 'HackathonOrganizationsNode' } & {
          ' $fragmentRefs'?: {
            HackathonOrganizationsFieldsFragment: HackathonOrganizationsFieldsFragment;
          };
        })
      | null;
  } | null;
};

export type CreateHackathonUserProfileMutationVariables = Exact<{
  input: HackathonUserProfilesInput;
}>;

export type CreateHackathonUserProfileMutation = {
  __typename?: 'Mutation';
  createHackathonUserProfiles?: {
    __typename?: 'CreateHackathonUserProfiles';
    hackathonUserProfile?:
      | ({ __typename?: 'HackathonUserProfilesNode' } & {
          ' $fragmentRefs'?: {
            HackathonUserProfilesFieldsFragment: HackathonUserProfilesFieldsFragment;
          };
        })
      | null;
  } | null;
};

export type DeleteHackathonUserProfileMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type DeleteHackathonUserProfileMutation = {
  __typename?: 'Mutation';
  deleteHackathonUserProfiles?: {
    __typename?: 'DeleteHackathonUserProfiles';
    success?: boolean | null;
  } | null;
};

export type UpdateHackathonUserProfileMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: HackathonUserProfilesInput;
}>;

export type UpdateHackathonUserProfileMutation = {
  __typename?: 'Mutation';
  updateHackathonUserProfiles?: {
    __typename?: 'UpdateHackathonUserProfiles';
    hackathonUserProfile?:
      | ({ __typename?: 'HackathonUserProfilesNode' } & {
          ' $fragmentRefs'?: {
            HackathonUserProfilesFieldsFragment: HackathonUserProfilesFieldsFragment;
          };
        })
      | null;
  } | null;
};

export type CreateTeamMemberMutationVariables = Exact<{
  input: CreateTeamMembersInput;
}>;

export type CreateTeamMemberMutation = {
  __typename?: 'Mutation';
  createTeamMembers?: {
    __typename?: 'CreateTeamMembers';
    teamMember?:
      | ({ __typename?: 'TeamMembersNode' } & {
          ' $fragmentRefs'?: {
            TeamMembersFieldsFragment: TeamMembersFieldsFragment;
          };
        })
      | null;
  } | null;
};

export type DeleteTeamMemberMutationVariables = Exact<{
  teamIdUserId: Scalars['UUID']['input'];
}>;

export type DeleteTeamMemberMutation = {
  __typename?: 'Mutation';
  deleteTeamMembers?: {
    __typename?: 'DeleteTeamMembers';
    success?: boolean | null;
    message?: string | null;
  } | null;
};

export type UpdateTeamMemberMutationVariables = Exact<{
  input: UpdateTeamMembersInput;
}>;

export type UpdateTeamMemberMutation = {
  __typename?: 'Mutation';
  updateTeamMembers?: {
    __typename?: 'UpdateTeamMembers';
    teamMember?:
      | ({ __typename?: 'TeamMembersNode' } & {
          ' $fragmentRefs'?: {
            TeamMembersFieldsFragment: TeamMembersFieldsFragment;
          };
        })
      | null;
  } | null;
};

export type CreateTeamMutationVariables = Exact<{
  input: CreateTeamsInput;
}>;

export type CreateTeamMutation = {
  __typename?: 'Mutation';
  createTeams?: {
    __typename?: 'CreateTeams';
    team?:
      | ({ __typename?: 'TeamsNode' } & {
          ' $fragmentRefs'?: { TeamsFieldsFragment: TeamsFieldsFragment };
        })
      | null;
  } | null;
};

export type DeleteTeamMutationVariables = Exact<{
  teamId: Scalars['UUID']['input'];
}>;

export type DeleteTeamMutation = {
  __typename?: 'Mutation';
  deleteTeams?: {
    __typename?: 'DeleteTeams';
    message?: string | null;
    success?: boolean | null;
  } | null;
};

export type UpdateTeamMutationVariables = Exact<{
  input: UpdateTeamInput;
}>;

export type UpdateTeamMutation = {
  __typename?: 'Mutation';
  updateTeams?: {
    __typename?: 'UpdateTeams';
    team?:
      | ({ __typename?: 'TeamsNode' } & {
          ' $fragmentRefs'?: { TeamsFieldsFragment: TeamsFieldsFragment };
        })
      | null;
  } | null;
};

export type CreateUserMutationVariables = Exact<{
  input: CreateUsersInput;
}>;

export type CreateUserMutation = {
  __typename?: 'Mutation';
  createUsers?: {
    __typename?: 'CreateUsersPayload';
    user?:
      | ({ __typename?: 'UsersNode' } & {
          ' $fragmentRefs'?: { UsersFieldsFragment: UsersFieldsFragment };
        })
      | null;
  } | null;
};

export type DeleteUserMutationVariables = Exact<{
  input: DeleteUsersInput;
}>;

export type DeleteUserMutation = {
  __typename?: 'Mutation';
  deleteUsers?: {
    __typename?: 'DeleteUsersPayload';
    success?: boolean | null;
  } | null;
};

export type UpdateUserMutationVariables = Exact<{
  input: UpdateUsersInput;
}>;

export type UpdateUserMutation = {
  __typename?: 'Mutation';
  updateUsers?: {
    __typename?: 'UpdateUsersPayload';
    user?:
      | ({ __typename?: 'UsersNode' } & {
          ' $fragmentRefs'?: { UsersFieldsFragment: UsersFieldsFragment };
        })
      | null;
  } | null;
};

export type GetAllApprovedEmailsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetAllApprovedEmailsQuery = {
  __typename?: 'Query';
  allApprovedEmails?: {
    __typename: 'ApprovedEmailsNodeConnection';
    edges: Array<{
      __typename?: 'ApprovedEmailsNodeEdge';
      cursor: string;
      node?:
        | ({ __typename?: 'ApprovedEmailsNode' } & {
            ' $fragmentRefs'?: {
              ApprovedEmailsFieldsFragment: ApprovedEmailsFieldsFragment;
            };
          })
        | null;
    } | null>;
    pageInfo: { __typename?: 'PageInfo' } & {
      ' $fragmentRefs'?: { PageInfoFieldsFragment: PageInfoFieldsFragment };
    };
  } | null;
};

export type GetApprovedEmailByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type GetApprovedEmailByIdQuery = {
  __typename?: 'Query';
  approvedEmail?:
    | ({ __typename?: 'ApprovedEmailsNode' } & {
        ' $fragmentRefs'?: {
          ApprovedEmailsFieldsFragment: ApprovedEmailsFieldsFragment;
        };
      })
    | null;
};

export type GetAllHackathonEventsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetAllHackathonEventsQuery = {
  __typename?: 'Query';
  allHackathonEvents?: {
    __typename: 'HackathonEventsNodeConnection';
    edges: Array<{
      __typename?: 'HackathonEventsNodeEdge';
      cursor: string;
      node?:
        | ({ __typename?: 'HackathonEventsNode' } & {
            ' $fragmentRefs'?: {
              HackathonEventsFieldsFragment: HackathonEventsFieldsFragment;
            };
          })
        | null;
    } | null>;
    pageInfo: { __typename?: 'PageInfo' } & {
      ' $fragmentRefs'?: { PageInfoFieldsFragment: PageInfoFieldsFragment };
    };
  } | null;
};

export type GetHackathonEventByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type GetHackathonEventByIdQuery = {
  __typename?: 'Query';
  hackathonEvent?:
    | ({ __typename?: 'HackathonEventsNode' } & {
        ' $fragmentRefs'?: {
          HackathonEventsFieldsFragment: HackathonEventsFieldsFragment;
        };
      })
    | null;
};

export type GetAllHackathonOrganizationsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetAllHackathonOrganizationsQuery = {
  __typename?: 'Query';
  allHackathonOrganizations?: {
    __typename: 'HackathonOrganizationsNodeConnection';
    edges: Array<{
      __typename?: 'HackathonOrganizationsNodeEdge';
      cursor: string;
      node?:
        | ({ __typename?: 'HackathonOrganizationsNode' } & {
            ' $fragmentRefs'?: {
              HackathonOrganizationsFieldsFragment: HackathonOrganizationsFieldsFragment;
            };
          })
        | null;
    } | null>;
    pageInfo: { __typename?: 'PageInfo' } & {
      ' $fragmentRefs'?: { PageInfoFieldsFragment: PageInfoFieldsFragment };
    };
  } | null;
};

export type GetHackathonOrganizationByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type GetHackathonOrganizationByIdQuery = {
  __typename?: 'Query';
  hackathonOrganization?:
    | ({ __typename?: 'HackathonOrganizationsNode' } & {
        ' $fragmentRefs'?: {
          HackathonOrganizationsFieldsFragment: HackathonOrganizationsFieldsFragment;
        };
      })
    | null;
};

export type GetAllHackathonUserProfilesQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetAllHackathonUserProfilesQuery = {
  __typename?: 'Query';
  allHackathonUserProfiles?: {
    __typename: 'HackathonUserProfilesNodeConnection';
    edges: Array<{
      __typename?: 'HackathonUserProfilesNodeEdge';
      cursor: string;
      node?:
        | ({ __typename?: 'HackathonUserProfilesNode' } & {
            ' $fragmentRefs'?: {
              HackathonUserProfilesFieldsFragment: HackathonUserProfilesFieldsFragment;
            };
          })
        | null;
    } | null>;
    pageInfo: { __typename?: 'PageInfo' } & {
      ' $fragmentRefs'?: { PageInfoFieldsFragment: PageInfoFieldsFragment };
    };
  } | null;
};

export type GetHackathonUserProfileByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type GetHackathonUserProfileByIdQuery = {
  __typename?: 'Query';
  hackathonUserProfile?:
    | ({ __typename?: 'HackathonUserProfilesNode' } & {
        ' $fragmentRefs'?: {
          HackathonUserProfilesFieldsFragment: HackathonUserProfilesFieldsFragment;
        };
      })
    | null;
};

export type GetAllTeamMembersQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllTeamMembersQuery = {
  __typename?: 'Query';
  allTeamMembers?: {
    __typename: 'TeamMembersNodeConnection';
    edges: Array<{
      __typename?: 'TeamMembersNodeEdge';
      cursor: string;
      node?:
        | ({ __typename?: 'TeamMembersNode' } & {
            ' $fragmentRefs'?: {
              TeamMembersFieldsFragment: TeamMembersFieldsFragment;
            };
          })
        | null;
    } | null>;
    pageInfo: { __typename?: 'PageInfo' } & {
      ' $fragmentRefs'?: { PageInfoFieldsFragment: PageInfoFieldsFragment };
    };
  } | null;
};

export type GetTeamMemberByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type GetTeamMemberByIdQuery = {
  __typename?: 'Query';
  teamMember?:
    | ({ __typename?: 'TeamMembersNode' } & {
        ' $fragmentRefs'?: {
          TeamMembersFieldsFragment: TeamMembersFieldsFragment;
        };
      })
    | null;
};

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllUsersQuery = {
  __typename?: 'Query';
  allUsers?: {
    __typename: 'UsersNodeConnection';
    edges: Array<{
      __typename?: 'UsersNodeEdge';
      cursor: string;
      node?:
        | ({ __typename?: 'UsersNode' } & {
            ' $fragmentRefs'?: { UsersFieldsFragment: UsersFieldsFragment };
          })
        | null;
    } | null>;
    pageInfo: { __typename?: 'PageInfo' } & {
      ' $fragmentRefs'?: { PageInfoFieldsFragment: PageInfoFieldsFragment };
    };
  } | null;
};

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type GetUserByIdQuery = {
  __typename?: 'Query';
  user?:
    | ({ __typename?: 'UsersNode' } & {
        ' $fragmentRefs'?: { UsersFieldsFragment: UsersFieldsFragment };
      })
    | null;
};

export const CreateHackathonOrgPayloadFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'createHackathonOrgPayloadFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonOrganizationsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'contactEmail' } },
          { kind: 'Field', name: { kind: 'Name', value: 'website' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'linkedin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateHackathonOrgPayloadFieldsFragment, unknown>;
export const HackathonEventsCoreFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonEventsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isVirtual' } },
          { kind: 'Field', name: { kind: 'Name', value: 'level' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'minTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HackathonEventsCoreFieldsFragment, unknown>;
export const ApprovedEmailsFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'approvedEmailsFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ApprovedEmailsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'addedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEvents' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'keyEmailEventId' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonEventsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isVirtual' } },
          { kind: 'Field', name: { kind: 'Name', value: 'level' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'minTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ApprovedEmailsFieldsFragment, unknown>;
export const PageInfoFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageInfoFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageInfo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageInfoFieldsFragment, unknown>;
export const HackathonOrganizationsFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonOrganizationsFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonOrganizationsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'contactEmail' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEventss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'hackathonEventsCoreFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'linkedin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'orgId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'website' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonEventsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isVirtual' } },
          { kind: 'Field', name: { kind: 'Name', value: 'level' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'minTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageInfoFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageInfo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HackathonOrganizationsFieldsFragment, unknown>;
export const UsersCoreFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'usersCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UsersNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'github' } },
          { kind: 'Field', name: { kind: 'Name', value: 'linkedin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'devpost' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isAdmin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProvider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProviderId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UsersCoreFieldsFragment, unknown>;
export const HackathonUserProfilesFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonUserProfilesFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonUserProfilesNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEvents' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'preferences' } },
          { kind: 'Field', name: { kind: 'Name', value: 'profileId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'skills' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'users' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'usersCoreFields' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonEventsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isVirtual' } },
          { kind: 'Field', name: { kind: 'Name', value: 'level' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'minTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'usersCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UsersNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'github' } },
          { kind: 'Field', name: { kind: 'Name', value: 'linkedin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'devpost' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isAdmin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProvider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProviderId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HackathonUserProfilesFieldsFragment, unknown>;
export const TeamsCoreFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'teamsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TeamsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TeamsCoreFieldsFragment, unknown>;
export const HackathonEventsFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonEventsFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonEventsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'approvedEmailss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'approvedEmailsFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonOrganizations' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'hackathonOrganizationsFields' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonUserProfiless' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'hackathonUserProfilesFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isVirtual' } },
          { kind: 'Field', name: { kind: 'Name', value: 'level' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'minTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'teamss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'teamsCoreFields' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonEventsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isVirtual' } },
          { kind: 'Field', name: { kind: 'Name', value: 'level' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'minTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageInfoFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageInfo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'usersCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UsersNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'github' } },
          { kind: 'Field', name: { kind: 'Name', value: 'linkedin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'devpost' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isAdmin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProvider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProviderId' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'approvedEmailsFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ApprovedEmailsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'addedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEvents' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'keyEmailEventId' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonOrganizationsFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonOrganizationsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'contactEmail' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEventss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'hackathonEventsCoreFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'linkedin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'orgId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'website' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonUserProfilesFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonUserProfilesNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEvents' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'preferences' } },
          { kind: 'Field', name: { kind: 'Name', value: 'profileId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'skills' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'users' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'usersCoreFields' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'teamsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TeamsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HackathonEventsFieldsFragment, unknown>;
export const TeamMembersFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'teamMembersFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TeamMembersNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamIdUserId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'teamss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'teamsCoreFields' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'userss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'usersCoreFields' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'teamsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TeamsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageInfoFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageInfo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'usersCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UsersNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'github' } },
          { kind: 'Field', name: { kind: 'Name', value: 'linkedin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'devpost' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isAdmin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProvider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProviderId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TeamMembersFieldsFragment, unknown>;
export const TeamsFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'teamsFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TeamsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEvents' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'hackathonEventsFields' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'teamMemberss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'teamMembersFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'teamName' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonEventsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isVirtual' } },
          { kind: 'Field', name: { kind: 'Name', value: 'level' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'minTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'approvedEmailsFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ApprovedEmailsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'addedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEvents' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'keyEmailEventId' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageInfoFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageInfo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonOrganizationsFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonOrganizationsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'contactEmail' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEventss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'hackathonEventsCoreFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'linkedin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'orgId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'website' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'usersCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UsersNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'github' } },
          { kind: 'Field', name: { kind: 'Name', value: 'linkedin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'devpost' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isAdmin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProvider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProviderId' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonUserProfilesFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonUserProfilesNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEvents' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'preferences' } },
          { kind: 'Field', name: { kind: 'Name', value: 'profileId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'skills' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'users' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'usersCoreFields' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'teamsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TeamsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonEventsFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonEventsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'approvedEmailss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'approvedEmailsFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonOrganizations' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'hackathonOrganizationsFields' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonUserProfiless' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'hackathonUserProfilesFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isVirtual' } },
          { kind: 'Field', name: { kind: 'Name', value: 'level' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'minTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'teamss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'teamsCoreFields' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'teamMembersFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TeamMembersNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamIdUserId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'teamss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'teamsCoreFields' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'userss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'usersCoreFields' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TeamsFieldsFragment, unknown>;
export const UsersFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'usersFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UsersNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProvider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProviderId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'devpost' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'github' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonUserProfiless' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'hackathonUserProfilesFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isAdmin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'linkedin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'teamMemberss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'teamMembersFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonEventsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isVirtual' } },
          { kind: 'Field', name: { kind: 'Name', value: 'level' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'minTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'usersCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UsersNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'github' } },
          { kind: 'Field', name: { kind: 'Name', value: 'linkedin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'devpost' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isAdmin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProvider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProviderId' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'teamsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TeamsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageInfoFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageInfo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonUserProfilesFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonUserProfilesNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEvents' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'preferences' } },
          { kind: 'Field', name: { kind: 'Name', value: 'profileId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'skills' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'users' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'usersCoreFields' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'teamMembersFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TeamMembersNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamIdUserId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'teamss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'teamsCoreFields' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'userss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'usersCoreFields' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UsersFieldsFragment, unknown>;
export const CreateApprovedEmailDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateApprovedEmail' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ApprovedEmailsInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createApprovedEmails' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'approvedEmail' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'approvedEmailsFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonEventsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isVirtual' } },
          { kind: 'Field', name: { kind: 'Name', value: 'level' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'minTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'approvedEmailsFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ApprovedEmailsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'addedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEvents' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'keyEmailEventId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateApprovedEmailMutation,
  CreateApprovedEmailMutationVariables
>;
export const DeleteApprovedEmailDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteApprovedEmail' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'keyEmailEventId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteApprovedEmails' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'keyEmailEventId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'keyEmailEventId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteApprovedEmailMutation,
  DeleteApprovedEmailMutationVariables
>;
export const UpdateApprovedEmailDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateApprovedEmail' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UpdateApprovedEmailsInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateApprovedEmails' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'approvedEmail' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'approvedEmailsFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonEventsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isVirtual' } },
          { kind: 'Field', name: { kind: 'Name', value: 'level' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'minTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'approvedEmailsFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ApprovedEmailsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'addedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEvents' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'keyEmailEventId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateApprovedEmailMutation,
  UpdateApprovedEmailMutationVariables
>;
export const CreateHackathonEventDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateHackathonEvent' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'HackathonEventsInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createHackathonEvents' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'hackathonEvent' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'hackathonEventsFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonEventsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isVirtual' } },
          { kind: 'Field', name: { kind: 'Name', value: 'level' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'minTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'approvedEmailsFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ApprovedEmailsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'addedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEvents' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'keyEmailEventId' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageInfoFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageInfo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonOrganizationsFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonOrganizationsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'contactEmail' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEventss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'hackathonEventsCoreFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'linkedin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'orgId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'website' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'usersCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UsersNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'github' } },
          { kind: 'Field', name: { kind: 'Name', value: 'linkedin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'devpost' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isAdmin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProvider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProviderId' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonUserProfilesFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonUserProfilesNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEvents' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'preferences' } },
          { kind: 'Field', name: { kind: 'Name', value: 'profileId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'skills' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'users' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'usersCoreFields' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'teamsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TeamsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonEventsFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonEventsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'approvedEmailss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'approvedEmailsFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonOrganizations' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'hackathonOrganizationsFields' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonUserProfiless' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'hackathonUserProfilesFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isVirtual' } },
          { kind: 'Field', name: { kind: 'Name', value: 'level' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'minTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'teamss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'teamsCoreFields' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateHackathonEventMutation,
  CreateHackathonEventMutationVariables
>;
export const DeleteHackathonEventDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteHackathonEvent' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteHackathonEvents' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteHackathonEventMutation,
  DeleteHackathonEventMutationVariables
>;
export const UpdateHackathonEventDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateHackathonEvent' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'HackathonEventsInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateHackathonEvents' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'hackathonEvent' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'hackathonEventsFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonEventsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isVirtual' } },
          { kind: 'Field', name: { kind: 'Name', value: 'level' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'minTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'approvedEmailsFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ApprovedEmailsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'addedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEvents' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'keyEmailEventId' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageInfoFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageInfo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonOrganizationsFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonOrganizationsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'contactEmail' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEventss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'hackathonEventsCoreFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'linkedin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'orgId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'website' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'usersCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UsersNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'github' } },
          { kind: 'Field', name: { kind: 'Name', value: 'linkedin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'devpost' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isAdmin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProvider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProviderId' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonUserProfilesFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonUserProfilesNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEvents' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'preferences' } },
          { kind: 'Field', name: { kind: 'Name', value: 'profileId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'skills' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'users' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'usersCoreFields' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'teamsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TeamsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonEventsFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonEventsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'approvedEmailss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'approvedEmailsFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonOrganizations' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'hackathonOrganizationsFields' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonUserProfiless' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'hackathonUserProfilesFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isVirtual' } },
          { kind: 'Field', name: { kind: 'Name', value: 'level' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'minTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'teamss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'teamsCoreFields' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateHackathonEventMutation,
  UpdateHackathonEventMutationVariables
>;
export const CreateHackathonOrganizationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateHackathonOrganization' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'HackathonOrganizationsInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createHackathonOrganizations' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'hackathonOrganization' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'hackathonOrganizationsFields',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonEventsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isVirtual' } },
          { kind: 'Field', name: { kind: 'Name', value: 'level' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'minTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageInfoFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageInfo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonOrganizationsFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonOrganizationsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'contactEmail' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEventss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'hackathonEventsCoreFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'linkedin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'orgId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'website' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateHackathonOrganizationMutation,
  CreateHackathonOrganizationMutationVariables
>;
export const DeleteHackathonOrganizationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteHackathonOrganization' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteHackathonOrganizations' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteHackathonOrganizationMutation,
  DeleteHackathonOrganizationMutationVariables
>;
export const UpdateHackathonOrganizationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateHackathonOrganization' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'HackathonOrganizationsInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateHackathonOrganizations' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'hackathonOrganization' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'hackathonOrganizationsFields',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonEventsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isVirtual' } },
          { kind: 'Field', name: { kind: 'Name', value: 'level' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'minTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageInfoFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageInfo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonOrganizationsFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonOrganizationsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'contactEmail' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEventss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'hackathonEventsCoreFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'linkedin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'orgId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'website' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateHackathonOrganizationMutation,
  UpdateHackathonOrganizationMutationVariables
>;
export const CreateHackathonUserProfileDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateHackathonUserProfile' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'HackathonUserProfilesInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createHackathonUserProfiles' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'hackathonUserProfile' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'hackathonUserProfilesFields',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonEventsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isVirtual' } },
          { kind: 'Field', name: { kind: 'Name', value: 'level' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'minTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'usersCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UsersNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'github' } },
          { kind: 'Field', name: { kind: 'Name', value: 'linkedin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'devpost' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isAdmin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProvider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProviderId' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonUserProfilesFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonUserProfilesNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEvents' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'preferences' } },
          { kind: 'Field', name: { kind: 'Name', value: 'profileId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'skills' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'users' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'usersCoreFields' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateHackathonUserProfileMutation,
  CreateHackathonUserProfileMutationVariables
>;
export const DeleteHackathonUserProfileDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteHackathonUserProfile' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteHackathonUserProfiles' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteHackathonUserProfileMutation,
  DeleteHackathonUserProfileMutationVariables
>;
export const UpdateHackathonUserProfileDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateHackathonUserProfile' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'HackathonUserProfilesInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateHackathonUserProfiles' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'hackathonUserProfile' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'hackathonUserProfilesFields',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonEventsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isVirtual' } },
          { kind: 'Field', name: { kind: 'Name', value: 'level' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'minTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'usersCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UsersNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'github' } },
          { kind: 'Field', name: { kind: 'Name', value: 'linkedin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'devpost' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isAdmin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProvider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProviderId' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonUserProfilesFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonUserProfilesNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEvents' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'preferences' } },
          { kind: 'Field', name: { kind: 'Name', value: 'profileId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'skills' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'users' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'usersCoreFields' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateHackathonUserProfileMutation,
  UpdateHackathonUserProfileMutationVariables
>;
export const CreateTeamMemberDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateTeamMember' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateTeamMembersInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createTeamMembers' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'teamMember' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'teamMembersFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'teamsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TeamsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageInfoFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageInfo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'usersCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UsersNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'github' } },
          { kind: 'Field', name: { kind: 'Name', value: 'linkedin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'devpost' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isAdmin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProvider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProviderId' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'teamMembersFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TeamMembersNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamIdUserId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'teamss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'teamsCoreFields' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'userss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'usersCoreFields' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateTeamMemberMutation,
  CreateTeamMemberMutationVariables
>;
export const DeleteTeamMemberDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteTeamMember' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'teamIdUserId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteTeamMembers' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'teamIdUserId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'teamIdUserId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteTeamMemberMutation,
  DeleteTeamMemberMutationVariables
>;
export const UpdateTeamMemberDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateTeamMember' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UpdateTeamMembersInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateTeamMembers' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'teamMember' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'teamMembersFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'teamsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TeamsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageInfoFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageInfo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'usersCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UsersNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'github' } },
          { kind: 'Field', name: { kind: 'Name', value: 'linkedin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'devpost' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isAdmin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProvider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProviderId' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'teamMembersFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TeamMembersNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamIdUserId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'teamss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'teamsCoreFields' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'userss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'usersCoreFields' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateTeamMemberMutation,
  UpdateTeamMemberMutationVariables
>;
export const CreateTeamDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateTeam' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateTeamsInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createTeams' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'team' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'teamsFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonEventsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isVirtual' } },
          { kind: 'Field', name: { kind: 'Name', value: 'level' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'minTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'approvedEmailsFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ApprovedEmailsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'addedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEvents' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'keyEmailEventId' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageInfoFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageInfo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonOrganizationsFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonOrganizationsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'contactEmail' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEventss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'hackathonEventsCoreFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'linkedin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'orgId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'website' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'usersCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UsersNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'github' } },
          { kind: 'Field', name: { kind: 'Name', value: 'linkedin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'devpost' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isAdmin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProvider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProviderId' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonUserProfilesFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonUserProfilesNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEvents' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'preferences' } },
          { kind: 'Field', name: { kind: 'Name', value: 'profileId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'skills' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'users' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'usersCoreFields' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'teamsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TeamsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonEventsFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonEventsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'approvedEmailss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'approvedEmailsFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonOrganizations' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'hackathonOrganizationsFields' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonUserProfiless' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'hackathonUserProfilesFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isVirtual' } },
          { kind: 'Field', name: { kind: 'Name', value: 'level' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'minTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'teamss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'teamsCoreFields' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'teamMembersFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TeamMembersNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamIdUserId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'teamss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'teamsCoreFields' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'userss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'usersCoreFields' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'teamsFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TeamsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEvents' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'hackathonEventsFields' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'teamMemberss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'teamMembersFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'teamName' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateTeamMutation, CreateTeamMutationVariables>;
export const DeleteTeamDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteTeam' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'teamId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteTeams' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'teamId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'teamId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DeleteTeamMutation, DeleteTeamMutationVariables>;
export const UpdateTeamDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateTeam' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UpdateTeamInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateTeams' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'team' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'teamsFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonEventsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isVirtual' } },
          { kind: 'Field', name: { kind: 'Name', value: 'level' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'minTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'approvedEmailsFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ApprovedEmailsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'addedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEvents' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'keyEmailEventId' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageInfoFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageInfo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonOrganizationsFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonOrganizationsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'contactEmail' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEventss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'hackathonEventsCoreFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'linkedin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'orgId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'website' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'usersCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UsersNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'github' } },
          { kind: 'Field', name: { kind: 'Name', value: 'linkedin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'devpost' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isAdmin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProvider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProviderId' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonUserProfilesFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonUserProfilesNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEvents' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'preferences' } },
          { kind: 'Field', name: { kind: 'Name', value: 'profileId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'skills' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'users' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'usersCoreFields' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'teamsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TeamsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonEventsFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonEventsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'approvedEmailss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'approvedEmailsFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonOrganizations' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'hackathonOrganizationsFields' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonUserProfiless' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'hackathonUserProfilesFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isVirtual' } },
          { kind: 'Field', name: { kind: 'Name', value: 'level' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'minTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'teamss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'teamsCoreFields' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'teamMembersFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TeamMembersNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamIdUserId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'teamss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'teamsCoreFields' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'userss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'usersCoreFields' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'teamsFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TeamsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEvents' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'hackathonEventsFields' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'teamMemberss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'teamMembersFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'teamName' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateTeamMutation, UpdateTeamMutationVariables>;
export const CreateUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateUsersInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createUsers' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'usersFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonEventsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isVirtual' } },
          { kind: 'Field', name: { kind: 'Name', value: 'level' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'minTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'usersCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UsersNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'github' } },
          { kind: 'Field', name: { kind: 'Name', value: 'linkedin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'devpost' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isAdmin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProvider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProviderId' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonUserProfilesFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonUserProfilesNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEvents' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'preferences' } },
          { kind: 'Field', name: { kind: 'Name', value: 'profileId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'skills' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'users' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'usersCoreFields' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageInfoFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageInfo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'teamsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TeamsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'teamMembersFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TeamMembersNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamIdUserId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'teamss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'teamsCoreFields' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'userss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'usersCoreFields' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'usersFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UsersNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProvider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProviderId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'devpost' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'github' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonUserProfiless' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'hackathonUserProfilesFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isAdmin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'linkedin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'teamMemberss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'teamMembersFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const DeleteUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DeleteUsersInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteUsers' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DeleteUserMutation, DeleteUserMutationVariables>;
export const UpdateUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UpdateUsersInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateUsers' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'usersFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonEventsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isVirtual' } },
          { kind: 'Field', name: { kind: 'Name', value: 'level' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'minTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'usersCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UsersNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'github' } },
          { kind: 'Field', name: { kind: 'Name', value: 'linkedin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'devpost' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isAdmin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProvider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProviderId' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonUserProfilesFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonUserProfilesNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEvents' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'preferences' } },
          { kind: 'Field', name: { kind: 'Name', value: 'profileId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'skills' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'users' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'usersCoreFields' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageInfoFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageInfo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'teamsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TeamsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'teamMembersFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TeamMembersNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamIdUserId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'teamss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'teamsCoreFields' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'userss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'usersCoreFields' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'usersFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UsersNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProvider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProviderId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'devpost' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'github' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonUserProfiless' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'hackathonUserProfilesFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isAdmin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'linkedin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'teamMemberss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'teamMembersFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const GetAllApprovedEmailsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetAllApprovedEmails' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allApprovedEmails' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'approvedEmailsFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonEventsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isVirtual' } },
          { kind: 'Field', name: { kind: 'Name', value: 'level' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'minTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'approvedEmailsFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ApprovedEmailsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'addedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEvents' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'keyEmailEventId' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageInfoFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageInfo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetAllApprovedEmailsQuery,
  GetAllApprovedEmailsQueryVariables
>;
export const GetApprovedEmailByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetApprovedEmailById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'approvedEmail' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'approvedEmailsFields' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonEventsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isVirtual' } },
          { kind: 'Field', name: { kind: 'Name', value: 'level' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'minTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'approvedEmailsFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ApprovedEmailsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'addedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEvents' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'keyEmailEventId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetApprovedEmailByIdQuery,
  GetApprovedEmailByIdQueryVariables
>;
export const GetAllHackathonEventsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetAllHackathonEvents' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allHackathonEvents' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'hackathonEventsFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonEventsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isVirtual' } },
          { kind: 'Field', name: { kind: 'Name', value: 'level' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'minTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'approvedEmailsFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ApprovedEmailsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'addedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEvents' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'keyEmailEventId' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageInfoFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageInfo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonOrganizationsFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonOrganizationsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'contactEmail' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEventss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'hackathonEventsCoreFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'linkedin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'orgId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'website' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'usersCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UsersNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'github' } },
          { kind: 'Field', name: { kind: 'Name', value: 'linkedin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'devpost' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isAdmin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProvider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProviderId' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonUserProfilesFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonUserProfilesNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEvents' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'preferences' } },
          { kind: 'Field', name: { kind: 'Name', value: 'profileId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'skills' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'users' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'usersCoreFields' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'teamsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TeamsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonEventsFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonEventsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'approvedEmailss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'approvedEmailsFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonOrganizations' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'hackathonOrganizationsFields' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonUserProfiless' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'hackathonUserProfilesFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isVirtual' } },
          { kind: 'Field', name: { kind: 'Name', value: 'level' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'minTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'teamss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'teamsCoreFields' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetAllHackathonEventsQuery,
  GetAllHackathonEventsQueryVariables
>;
export const GetHackathonEventByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetHackathonEventById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEvent' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'hackathonEventsFields' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonEventsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isVirtual' } },
          { kind: 'Field', name: { kind: 'Name', value: 'level' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'minTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'approvedEmailsFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ApprovedEmailsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'addedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEvents' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'keyEmailEventId' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageInfoFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageInfo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonOrganizationsFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonOrganizationsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'contactEmail' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEventss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'hackathonEventsCoreFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'linkedin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'orgId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'website' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'usersCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UsersNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'github' } },
          { kind: 'Field', name: { kind: 'Name', value: 'linkedin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'devpost' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isAdmin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProvider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProviderId' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonUserProfilesFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonUserProfilesNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEvents' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'preferences' } },
          { kind: 'Field', name: { kind: 'Name', value: 'profileId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'skills' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'users' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'usersCoreFields' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'teamsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TeamsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonEventsFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonEventsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'approvedEmailss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'approvedEmailsFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonOrganizations' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'hackathonOrganizationsFields' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonUserProfiless' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'hackathonUserProfilesFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isVirtual' } },
          { kind: 'Field', name: { kind: 'Name', value: 'level' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'minTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'teamss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'teamsCoreFields' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetHackathonEventByIdQuery,
  GetHackathonEventByIdQueryVariables
>;
export const GetAllHackathonOrganizationsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetAllHackathonOrganizations' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allHackathonOrganizations' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'hackathonOrganizationsFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonEventsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isVirtual' } },
          { kind: 'Field', name: { kind: 'Name', value: 'level' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'minTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageInfoFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageInfo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonOrganizationsFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonOrganizationsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'contactEmail' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEventss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'hackathonEventsCoreFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'linkedin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'orgId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'website' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetAllHackathonOrganizationsQuery,
  GetAllHackathonOrganizationsQueryVariables
>;
export const GetHackathonOrganizationByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetHackathonOrganizationById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonOrganization' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'hackathonOrganizationsFields' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonEventsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isVirtual' } },
          { kind: 'Field', name: { kind: 'Name', value: 'level' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'minTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageInfoFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageInfo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonOrganizationsFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonOrganizationsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'contactEmail' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEventss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'hackathonEventsCoreFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'linkedin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'orgId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'website' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetHackathonOrganizationByIdQuery,
  GetHackathonOrganizationByIdQueryVariables
>;
export const GetAllHackathonUserProfilesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetAllHackathonUserProfiles' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allHackathonUserProfiles' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'hackathonUserProfilesFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonEventsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isVirtual' } },
          { kind: 'Field', name: { kind: 'Name', value: 'level' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'minTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'usersCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UsersNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'github' } },
          { kind: 'Field', name: { kind: 'Name', value: 'linkedin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'devpost' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isAdmin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProvider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProviderId' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonUserProfilesFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonUserProfilesNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEvents' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'preferences' } },
          { kind: 'Field', name: { kind: 'Name', value: 'profileId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'skills' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'users' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'usersCoreFields' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageInfoFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageInfo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetAllHackathonUserProfilesQuery,
  GetAllHackathonUserProfilesQueryVariables
>;
export const GetHackathonUserProfileByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetHackathonUserProfileById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonUserProfile' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'hackathonUserProfilesFields' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonEventsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isVirtual' } },
          { kind: 'Field', name: { kind: 'Name', value: 'level' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'minTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'usersCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UsersNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'github' } },
          { kind: 'Field', name: { kind: 'Name', value: 'linkedin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'devpost' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isAdmin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProvider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProviderId' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonUserProfilesFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonUserProfilesNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEvents' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'preferences' } },
          { kind: 'Field', name: { kind: 'Name', value: 'profileId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'skills' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'users' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'usersCoreFields' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetHackathonUserProfileByIdQuery,
  GetHackathonUserProfileByIdQueryVariables
>;
export const GetAllTeamMembersDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetAllTeamMembers' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allTeamMembers' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'teamMembersFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'teamsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TeamsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageInfoFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageInfo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'usersCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UsersNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'github' } },
          { kind: 'Field', name: { kind: 'Name', value: 'linkedin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'devpost' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isAdmin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProvider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProviderId' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'teamMembersFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TeamMembersNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamIdUserId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'teamss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'teamsCoreFields' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'userss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'usersCoreFields' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetAllTeamMembersQuery,
  GetAllTeamMembersQueryVariables
>;
export const GetTeamMemberByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetTeamMemberById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'teamMember' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'teamMembersFields' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'teamsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TeamsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageInfoFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageInfo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'usersCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UsersNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'github' } },
          { kind: 'Field', name: { kind: 'Name', value: 'linkedin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'devpost' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isAdmin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProvider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProviderId' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'teamMembersFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TeamMembersNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamIdUserId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'teamss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'teamsCoreFields' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'userss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'usersCoreFields' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetTeamMemberByIdQuery,
  GetTeamMemberByIdQueryVariables
>;
export const GetAllUsersDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetAllUsers' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allUsers' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'usersFields' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonEventsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isVirtual' } },
          { kind: 'Field', name: { kind: 'Name', value: 'level' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'minTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'usersCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UsersNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'github' } },
          { kind: 'Field', name: { kind: 'Name', value: 'linkedin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'devpost' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isAdmin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProvider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProviderId' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonUserProfilesFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonUserProfilesNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEvents' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'preferences' } },
          { kind: 'Field', name: { kind: 'Name', value: 'profileId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'skills' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'users' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'usersCoreFields' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageInfoFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageInfo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'teamsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TeamsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'teamMembersFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TeamMembersNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamIdUserId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'teamss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'teamsCoreFields' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'userss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'usersCoreFields' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'usersFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UsersNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProvider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProviderId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'devpost' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'github' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonUserProfiless' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'hackathonUserProfilesFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isAdmin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'linkedin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'teamMemberss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'teamMembersFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAllUsersQuery, GetAllUsersQueryVariables>;
export const GetUserByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetUserById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'usersFields' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonEventsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isVirtual' } },
          { kind: 'Field', name: { kind: 'Name', value: 'level' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'minTeamSize' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'usersCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UsersNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'github' } },
          { kind: 'Field', name: { kind: 'Name', value: 'linkedin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'devpost' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isAdmin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProvider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProviderId' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'hackathonUserProfilesFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HackathonUserProfilesNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonEvents' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'hackathonEventsCoreFields' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'preferences' } },
          { kind: 'Field', name: { kind: 'Name', value: 'profileId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'skills' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'users' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'usersCoreFields' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageInfoFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageInfo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'teamsCoreFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TeamsNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'teamMembersFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TeamMembersNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamIdUserId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'teamss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'teamsCoreFields' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'userss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'usersCoreFields' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'usersFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UsersNode' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProvider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'authProviderId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'devpost' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'github' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hackathonUserProfiless' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'hackathonUserProfilesFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isAdmin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'linkedin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'teamMemberss' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'teamMembersFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageInfoFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetUserByIdQuery, GetUserByIdQueryVariables>;
