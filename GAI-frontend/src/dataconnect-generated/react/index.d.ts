import { CreateUserData, UpdateUserData, DeleteUserData, GetUserData, ListUsersData, CreateProjectData, UpdateProjectData, DeleteProjectData, GetProjectData, ListProjectsData, CreateDeploymentData, UpdateDeploymentData, DeleteDeploymentData, GetDeploymentData, ListDeploymentsData, CreateEnvironmentData, UpdateEnvironmentData, DeleteEnvironmentData, GetEnvironmentData, ListEnvironmentsData, CreateDomainData, UpdateDomainData, DeleteDomainData, GetDomainData, ListDomainsData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateUser(options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, void>): UseDataConnectMutationResult<CreateUserData, undefined>;
export function useCreateUser(dc: DataConnect, options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, void>): UseDataConnectMutationResult<CreateUserData, undefined>;

export function useUpdateUser(options?: useDataConnectMutationOptions<UpdateUserData, FirebaseError, void>): UseDataConnectMutationResult<UpdateUserData, undefined>;
export function useUpdateUser(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateUserData, FirebaseError, void>): UseDataConnectMutationResult<UpdateUserData, undefined>;

export function useDeleteUser(options?: useDataConnectMutationOptions<DeleteUserData, FirebaseError, void>): UseDataConnectMutationResult<DeleteUserData, undefined>;
export function useDeleteUser(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteUserData, FirebaseError, void>): UseDataConnectMutationResult<DeleteUserData, undefined>;

export function useGetUser(options?: useDataConnectQueryOptions<GetUserData>): UseDataConnectQueryResult<GetUserData, undefined>;
export function useGetUser(dc: DataConnect, options?: useDataConnectQueryOptions<GetUserData>): UseDataConnectQueryResult<GetUserData, undefined>;

export function useListUsers(options?: useDataConnectQueryOptions<ListUsersData>): UseDataConnectQueryResult<ListUsersData, undefined>;
export function useListUsers(dc: DataConnect, options?: useDataConnectQueryOptions<ListUsersData>): UseDataConnectQueryResult<ListUsersData, undefined>;

export function useCreateProject(options?: useDataConnectMutationOptions<CreateProjectData, FirebaseError, void>): UseDataConnectMutationResult<CreateProjectData, undefined>;
export function useCreateProject(dc: DataConnect, options?: useDataConnectMutationOptions<CreateProjectData, FirebaseError, void>): UseDataConnectMutationResult<CreateProjectData, undefined>;

export function useUpdateProject(options?: useDataConnectMutationOptions<UpdateProjectData, FirebaseError, void>): UseDataConnectMutationResult<UpdateProjectData, undefined>;
export function useUpdateProject(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateProjectData, FirebaseError, void>): UseDataConnectMutationResult<UpdateProjectData, undefined>;

export function useDeleteProject(options?: useDataConnectMutationOptions<DeleteProjectData, FirebaseError, void>): UseDataConnectMutationResult<DeleteProjectData, undefined>;
export function useDeleteProject(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteProjectData, FirebaseError, void>): UseDataConnectMutationResult<DeleteProjectData, undefined>;

export function useGetProject(options?: useDataConnectQueryOptions<GetProjectData>): UseDataConnectQueryResult<GetProjectData, undefined>;
export function useGetProject(dc: DataConnect, options?: useDataConnectQueryOptions<GetProjectData>): UseDataConnectQueryResult<GetProjectData, undefined>;

export function useListProjects(options?: useDataConnectQueryOptions<ListProjectsData>): UseDataConnectQueryResult<ListProjectsData, undefined>;
export function useListProjects(dc: DataConnect, options?: useDataConnectQueryOptions<ListProjectsData>): UseDataConnectQueryResult<ListProjectsData, undefined>;

export function useCreateDeployment(options?: useDataConnectMutationOptions<CreateDeploymentData, FirebaseError, void>): UseDataConnectMutationResult<CreateDeploymentData, undefined>;
export function useCreateDeployment(dc: DataConnect, options?: useDataConnectMutationOptions<CreateDeploymentData, FirebaseError, void>): UseDataConnectMutationResult<CreateDeploymentData, undefined>;

export function useUpdateDeployment(options?: useDataConnectMutationOptions<UpdateDeploymentData, FirebaseError, void>): UseDataConnectMutationResult<UpdateDeploymentData, undefined>;
export function useUpdateDeployment(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateDeploymentData, FirebaseError, void>): UseDataConnectMutationResult<UpdateDeploymentData, undefined>;

export function useDeleteDeployment(options?: useDataConnectMutationOptions<DeleteDeploymentData, FirebaseError, void>): UseDataConnectMutationResult<DeleteDeploymentData, undefined>;
export function useDeleteDeployment(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteDeploymentData, FirebaseError, void>): UseDataConnectMutationResult<DeleteDeploymentData, undefined>;

export function useGetDeployment(options?: useDataConnectQueryOptions<GetDeploymentData>): UseDataConnectQueryResult<GetDeploymentData, undefined>;
export function useGetDeployment(dc: DataConnect, options?: useDataConnectQueryOptions<GetDeploymentData>): UseDataConnectQueryResult<GetDeploymentData, undefined>;

export function useListDeployments(options?: useDataConnectQueryOptions<ListDeploymentsData>): UseDataConnectQueryResult<ListDeploymentsData, undefined>;
export function useListDeployments(dc: DataConnect, options?: useDataConnectQueryOptions<ListDeploymentsData>): UseDataConnectQueryResult<ListDeploymentsData, undefined>;

export function useCreateEnvironment(options?: useDataConnectMutationOptions<CreateEnvironmentData, FirebaseError, void>): UseDataConnectMutationResult<CreateEnvironmentData, undefined>;
export function useCreateEnvironment(dc: DataConnect, options?: useDataConnectMutationOptions<CreateEnvironmentData, FirebaseError, void>): UseDataConnectMutationResult<CreateEnvironmentData, undefined>;

export function useUpdateEnvironment(options?: useDataConnectMutationOptions<UpdateEnvironmentData, FirebaseError, void>): UseDataConnectMutationResult<UpdateEnvironmentData, undefined>;
export function useUpdateEnvironment(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateEnvironmentData, FirebaseError, void>): UseDataConnectMutationResult<UpdateEnvironmentData, undefined>;

export function useDeleteEnvironment(options?: useDataConnectMutationOptions<DeleteEnvironmentData, FirebaseError, void>): UseDataConnectMutationResult<DeleteEnvironmentData, undefined>;
export function useDeleteEnvironment(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteEnvironmentData, FirebaseError, void>): UseDataConnectMutationResult<DeleteEnvironmentData, undefined>;

export function useGetEnvironment(options?: useDataConnectQueryOptions<GetEnvironmentData>): UseDataConnectQueryResult<GetEnvironmentData, undefined>;
export function useGetEnvironment(dc: DataConnect, options?: useDataConnectQueryOptions<GetEnvironmentData>): UseDataConnectQueryResult<GetEnvironmentData, undefined>;

export function useListEnvironments(options?: useDataConnectQueryOptions<ListEnvironmentsData>): UseDataConnectQueryResult<ListEnvironmentsData, undefined>;
export function useListEnvironments(dc: DataConnect, options?: useDataConnectQueryOptions<ListEnvironmentsData>): UseDataConnectQueryResult<ListEnvironmentsData, undefined>;

export function useCreateDomain(options?: useDataConnectMutationOptions<CreateDomainData, FirebaseError, void>): UseDataConnectMutationResult<CreateDomainData, undefined>;
export function useCreateDomain(dc: DataConnect, options?: useDataConnectMutationOptions<CreateDomainData, FirebaseError, void>): UseDataConnectMutationResult<CreateDomainData, undefined>;

export function useUpdateDomain(options?: useDataConnectMutationOptions<UpdateDomainData, FirebaseError, void>): UseDataConnectMutationResult<UpdateDomainData, undefined>;
export function useUpdateDomain(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateDomainData, FirebaseError, void>): UseDataConnectMutationResult<UpdateDomainData, undefined>;

export function useDeleteDomain(options?: useDataConnectMutationOptions<DeleteDomainData, FirebaseError, void>): UseDataConnectMutationResult<DeleteDomainData, undefined>;
export function useDeleteDomain(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteDomainData, FirebaseError, void>): UseDataConnectMutationResult<DeleteDomainData, undefined>;

export function useGetDomain(options?: useDataConnectQueryOptions<GetDomainData>): UseDataConnectQueryResult<GetDomainData, undefined>;
export function useGetDomain(dc: DataConnect, options?: useDataConnectQueryOptions<GetDomainData>): UseDataConnectQueryResult<GetDomainData, undefined>;

export function useListDomains(options?: useDataConnectQueryOptions<ListDomainsData>): UseDataConnectQueryResult<ListDomainsData, undefined>;
export function useListDomains(dc: DataConnect, options?: useDataConnectQueryOptions<ListDomainsData>): UseDataConnectQueryResult<ListDomainsData, undefined>;
