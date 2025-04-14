/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: { input: any; output: any; }
  /**
   * Leverages the internal Python implementation of UUID (uuid.UUID) to provide native UUID objects
   * in fields, resolvers and input.
   */
  UUID: { input: any; output: any; }
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
  /** ADVANCED */
  Advanced = 'ADVANCED',
  /** BEGINNER */
  Beginner = 'BEGINNER',
  /** INTERMEDIATE */
  Intermediate = 'INTERMEDIATE'
}

/** An enumeration. */
export enum HackTbdHackathonEventsStatusChoices {
  /** COMPLETED */
  Completed = 'COMPLETED',
  /** UPCOMING */
  Upcoming = 'UPCOMING'
}

/** An enumeration. */
export enum HackTbdTeamsStatusChoices {
  /** COMPLETE */
  Complete = 'COMPLETE',
  /** FORMING */
  Forming = 'FORMING'
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
  orgId?: InputMaybe<Scalars['UUID']['input']>;
  startDate: Scalars['DateTime']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  teamSize: Scalars['Int']['input'];
};

export type HackathonEventsNode = Node & {
  __typename?: 'HackathonEventsNode';
  approvedEmailss: ApprovedEmailsNodeConnection;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endDate: Scalars['DateTime']['output'];
  eventId: Scalars['UUID']['output'];
  hackathonOrganizations: HackathonOrganizationsNode;
  hackathonUserProfiless: HackathonUserProfilesNodeConnection;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  isVirtual?: Maybe<Scalars['Boolean']['output']>;
  level?: Maybe<HackTbdHackathonEventsLevelChoices>;
  location?: Maybe<Scalars['String']['output']>;
  maxTeamSize: Scalars['Int']['output'];
  minTeamSize: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  orgId?: Maybe<Scalars['UUID']['output']>;
  startDate: Scalars['DateTime']['output'];
  status?: Maybe<HackTbdHackathonEventsStatusChoices>;
  teamSize: Scalars['Int']['output'];
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
  orgId?: InputMaybe<Scalars['UUID']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<HackTbdHackathonEventsStatusChoices>;
  teamSize?: InputMaybe<Scalars['Int']['input']>;
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
  orgId?: InputMaybe<Scalars['UUID']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<HackTbdHackathonEventsStatusChoices>;
  teamSize?: InputMaybe<Scalars['Int']['input']>;
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
