import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise, DataConnectSettings } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;
export const dataConnectSettings: DataConnectSettings;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CreateDeploymentData {
  deployment_insert: Deployment_Key;
}

export interface CreateDomainData {
  domain_insert: Domain_Key;
}

export interface CreateEnvironmentData {
  environment_insert: Environment_Key;
}

export interface CreateProjectData {
  project_insert: Project_Key;
}

export interface CreateUserData {
  user_insert: User_Key;
}

export interface DeleteDeploymentData {
  deployment_delete?: Deployment_Key | null;
}

export interface DeleteDomainData {
  domain_delete?: Domain_Key | null;
}

export interface DeleteEnvironmentData {
  environment_delete?: Environment_Key | null;
}

export interface DeleteProjectData {
  project_delete?: Project_Key | null;
}

export interface DeleteUserData {
  user_delete?: User_Key | null;
}

export interface Deployment_Key {
  id: UUIDString;
  __typename?: 'Deployment_Key';
}

export interface Domain_Key {
  id: UUIDString;
  __typename?: 'Domain_Key';
}

export interface Environment_Key {
  id: UUIDString;
  __typename?: 'Environment_Key';
}

export interface GetDeploymentData {
  deployment?: {
    buildHash: string;
    status: string;
  };
}

export interface GetDomainData {
  domain?: {
    domainName: string;
    sslStatus: string;
  };
}

export interface GetEnvironmentData {
  environment?: {
    name: string;
    url: string;
  };
}

export interface GetProjectData {
  project?: {
    name: string;
    framework: string;
  };
}

export interface GetUserData {
  user?: {
    email: string;
    displayName: string;
  };
}

export interface ListDeploymentsData {
  deployments: ({
    buildHash: string;
    status: string;
  })[];
}

export interface ListDomainsData {
  domains: ({
    domainName: string;
    sslStatus: string;
  })[];
}

export interface ListEnvironmentsData {
  environments: ({
    name: string;
    url: string;
  })[];
}

export interface ListProjectsData {
  projects: ({
    name: string;
    framework: string;
  })[];
}

export interface ListUsersData {
  users: ({
    email: string;
    displayName: string;
  })[];
}

export interface Project_Key {
  id: UUIDString;
  __typename?: 'Project_Key';
}

export interface UpdateDeploymentData {
  deployment_update?: Deployment_Key | null;
}

export interface UpdateDomainData {
  domain_update?: Domain_Key | null;
}

export interface UpdateEnvironmentData {
  environment_update?: Environment_Key | null;
}

export interface UpdateProjectData {
  project_update?: Project_Key | null;
}

export interface UpdateUserData {
  user_update?: User_Key | null;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateUserData, undefined>;
  operationName: string;
}
export const createUserRef: CreateUserRef;

export function createUser(): MutationPromise<CreateUserData, undefined>;
export function createUser(dc: DataConnect): MutationPromise<CreateUserData, undefined>;

interface UpdateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<UpdateUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<UpdateUserData, undefined>;
  operationName: string;
}
export const updateUserRef: UpdateUserRef;

export function updateUser(): MutationPromise<UpdateUserData, undefined>;
export function updateUser(dc: DataConnect): MutationPromise<UpdateUserData, undefined>;

interface DeleteUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<DeleteUserData, undefined>;
  operationName: string;
}
export const deleteUserRef: DeleteUserRef;

export function deleteUser(): MutationPromise<DeleteUserData, undefined>;
export function deleteUser(dc: DataConnect): MutationPromise<DeleteUserData, undefined>;

interface GetUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetUserData, undefined>;
  operationName: string;
}
export const getUserRef: GetUserRef;

export function getUser(options?: ExecuteQueryOptions): QueryPromise<GetUserData, undefined>;
export function getUser(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetUserData, undefined>;

interface ListUsersRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListUsersData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListUsersData, undefined>;
  operationName: string;
}
export const listUsersRef: ListUsersRef;

export function listUsers(options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;
export function listUsers(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;

interface CreateProjectRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateProjectData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateProjectData, undefined>;
  operationName: string;
}
export const createProjectRef: CreateProjectRef;

export function createProject(): MutationPromise<CreateProjectData, undefined>;
export function createProject(dc: DataConnect): MutationPromise<CreateProjectData, undefined>;

interface UpdateProjectRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<UpdateProjectData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<UpdateProjectData, undefined>;
  operationName: string;
}
export const updateProjectRef: UpdateProjectRef;

export function updateProject(): MutationPromise<UpdateProjectData, undefined>;
export function updateProject(dc: DataConnect): MutationPromise<UpdateProjectData, undefined>;

interface DeleteProjectRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteProjectData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<DeleteProjectData, undefined>;
  operationName: string;
}
export const deleteProjectRef: DeleteProjectRef;

export function deleteProject(): MutationPromise<DeleteProjectData, undefined>;
export function deleteProject(dc: DataConnect): MutationPromise<DeleteProjectData, undefined>;

interface GetProjectRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetProjectData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetProjectData, undefined>;
  operationName: string;
}
export const getProjectRef: GetProjectRef;

export function getProject(options?: ExecuteQueryOptions): QueryPromise<GetProjectData, undefined>;
export function getProject(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetProjectData, undefined>;

interface ListProjectsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListProjectsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListProjectsData, undefined>;
  operationName: string;
}
export const listProjectsRef: ListProjectsRef;

export function listProjects(options?: ExecuteQueryOptions): QueryPromise<ListProjectsData, undefined>;
export function listProjects(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListProjectsData, undefined>;

interface CreateDeploymentRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateDeploymentData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateDeploymentData, undefined>;
  operationName: string;
}
export const createDeploymentRef: CreateDeploymentRef;

export function createDeployment(): MutationPromise<CreateDeploymentData, undefined>;
export function createDeployment(dc: DataConnect): MutationPromise<CreateDeploymentData, undefined>;

interface UpdateDeploymentRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<UpdateDeploymentData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<UpdateDeploymentData, undefined>;
  operationName: string;
}
export const updateDeploymentRef: UpdateDeploymentRef;

export function updateDeployment(): MutationPromise<UpdateDeploymentData, undefined>;
export function updateDeployment(dc: DataConnect): MutationPromise<UpdateDeploymentData, undefined>;

interface DeleteDeploymentRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteDeploymentData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<DeleteDeploymentData, undefined>;
  operationName: string;
}
export const deleteDeploymentRef: DeleteDeploymentRef;

export function deleteDeployment(): MutationPromise<DeleteDeploymentData, undefined>;
export function deleteDeployment(dc: DataConnect): MutationPromise<DeleteDeploymentData, undefined>;

interface GetDeploymentRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetDeploymentData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetDeploymentData, undefined>;
  operationName: string;
}
export const getDeploymentRef: GetDeploymentRef;

export function getDeployment(options?: ExecuteQueryOptions): QueryPromise<GetDeploymentData, undefined>;
export function getDeployment(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetDeploymentData, undefined>;

interface ListDeploymentsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListDeploymentsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListDeploymentsData, undefined>;
  operationName: string;
}
export const listDeploymentsRef: ListDeploymentsRef;

export function listDeployments(options?: ExecuteQueryOptions): QueryPromise<ListDeploymentsData, undefined>;
export function listDeployments(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListDeploymentsData, undefined>;

interface CreateEnvironmentRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateEnvironmentData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateEnvironmentData, undefined>;
  operationName: string;
}
export const createEnvironmentRef: CreateEnvironmentRef;

export function createEnvironment(): MutationPromise<CreateEnvironmentData, undefined>;
export function createEnvironment(dc: DataConnect): MutationPromise<CreateEnvironmentData, undefined>;

interface UpdateEnvironmentRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<UpdateEnvironmentData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<UpdateEnvironmentData, undefined>;
  operationName: string;
}
export const updateEnvironmentRef: UpdateEnvironmentRef;

export function updateEnvironment(): MutationPromise<UpdateEnvironmentData, undefined>;
export function updateEnvironment(dc: DataConnect): MutationPromise<UpdateEnvironmentData, undefined>;

interface DeleteEnvironmentRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteEnvironmentData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<DeleteEnvironmentData, undefined>;
  operationName: string;
}
export const deleteEnvironmentRef: DeleteEnvironmentRef;

export function deleteEnvironment(): MutationPromise<DeleteEnvironmentData, undefined>;
export function deleteEnvironment(dc: DataConnect): MutationPromise<DeleteEnvironmentData, undefined>;

interface GetEnvironmentRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetEnvironmentData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetEnvironmentData, undefined>;
  operationName: string;
}
export const getEnvironmentRef: GetEnvironmentRef;

export function getEnvironment(options?: ExecuteQueryOptions): QueryPromise<GetEnvironmentData, undefined>;
export function getEnvironment(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetEnvironmentData, undefined>;

interface ListEnvironmentsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListEnvironmentsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListEnvironmentsData, undefined>;
  operationName: string;
}
export const listEnvironmentsRef: ListEnvironmentsRef;

export function listEnvironments(options?: ExecuteQueryOptions): QueryPromise<ListEnvironmentsData, undefined>;
export function listEnvironments(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListEnvironmentsData, undefined>;

interface CreateDomainRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateDomainData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateDomainData, undefined>;
  operationName: string;
}
export const createDomainRef: CreateDomainRef;

export function createDomain(): MutationPromise<CreateDomainData, undefined>;
export function createDomain(dc: DataConnect): MutationPromise<CreateDomainData, undefined>;

interface UpdateDomainRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<UpdateDomainData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<UpdateDomainData, undefined>;
  operationName: string;
}
export const updateDomainRef: UpdateDomainRef;

export function updateDomain(): MutationPromise<UpdateDomainData, undefined>;
export function updateDomain(dc: DataConnect): MutationPromise<UpdateDomainData, undefined>;

interface DeleteDomainRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteDomainData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<DeleteDomainData, undefined>;
  operationName: string;
}
export const deleteDomainRef: DeleteDomainRef;

export function deleteDomain(): MutationPromise<DeleteDomainData, undefined>;
export function deleteDomain(dc: DataConnect): MutationPromise<DeleteDomainData, undefined>;

interface GetDomainRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetDomainData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetDomainData, undefined>;
  operationName: string;
}
export const getDomainRef: GetDomainRef;

export function getDomain(options?: ExecuteQueryOptions): QueryPromise<GetDomainData, undefined>;
export function getDomain(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetDomainData, undefined>;

interface ListDomainsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListDomainsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListDomainsData, undefined>;
  operationName: string;
}
export const listDomainsRef: ListDomainsRef;

export function listDomains(options?: ExecuteQueryOptions): QueryPromise<ListDomainsData, undefined>;
export function listDomains(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListDomainsData, undefined>;

