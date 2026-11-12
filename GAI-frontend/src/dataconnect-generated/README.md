# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetUser*](#getuser)
  - [*ListUsers*](#listusers)
  - [*GetProject*](#getproject)
  - [*ListProjects*](#listprojects)
  - [*GetDeployment*](#getdeployment)
  - [*ListDeployments*](#listdeployments)
  - [*GetEnvironment*](#getenvironment)
  - [*ListEnvironments*](#listenvironments)
  - [*GetDomain*](#getdomain)
  - [*ListDomains*](#listdomains)
- [**Mutations**](#mutations)
  - [*CreateUser*](#createuser)
  - [*UpdateUser*](#updateuser)
  - [*DeleteUser*](#deleteuser)
  - [*CreateProject*](#createproject)
  - [*UpdateProject*](#updateproject)
  - [*DeleteProject*](#deleteproject)
  - [*CreateDeployment*](#createdeployment)
  - [*UpdateDeployment*](#updatedeployment)
  - [*DeleteDeployment*](#deletedeployment)
  - [*CreateEnvironment*](#createenvironment)
  - [*UpdateEnvironment*](#updateenvironment)
  - [*DeleteEnvironment*](#deleteenvironment)
  - [*CreateDomain*](#createdomain)
  - [*UpdateDomain*](#updatedomain)
  - [*DeleteDomain*](#deletedomain)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetUser
You can execute the `GetUser` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getUser(options?: ExecuteQueryOptions): QueryPromise<GetUserData, undefined>;

interface GetUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetUserData, undefined>;
}
export const getUserRef: GetUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getUser(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetUserData, undefined>;

interface GetUserRef {
  ...
  (dc: DataConnect): QueryRef<GetUserData, undefined>;
}
export const getUserRef: GetUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getUserRef:
```typescript
const name = getUserRef.operationName;
console.log(name);
```

### Variables
The `GetUser` query has no variables.
### Return Type
Recall that executing the `GetUser` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetUserData {
  user?: {
    email: string;
    displayName: string;
  };
}
```
### Using `GetUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getUser } from '@dataconnect/generated';


// Call the `getUser()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getUser(dataConnect);

console.log(data.user);

// Or, you can use the `Promise` API.
getUser().then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

### Using `GetUser`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getUserRef } from '@dataconnect/generated';


// Call the `getUserRef()` function to get a reference to the query.
const ref = getUserRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getUserRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.user);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

## ListUsers
You can execute the `ListUsers` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listUsers(options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;

interface ListUsersRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListUsersData, undefined>;
}
export const listUsersRef: ListUsersRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listUsers(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;

interface ListUsersRef {
  ...
  (dc: DataConnect): QueryRef<ListUsersData, undefined>;
}
export const listUsersRef: ListUsersRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listUsersRef:
```typescript
const name = listUsersRef.operationName;
console.log(name);
```

### Variables
The `ListUsers` query has no variables.
### Return Type
Recall that executing the `ListUsers` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListUsersData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListUsersData {
  users: ({
    email: string;
    displayName: string;
  })[];
}
```
### Using `ListUsers`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listUsers } from '@dataconnect/generated';


// Call the `listUsers()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listUsers();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listUsers(dataConnect);

console.log(data.users);

// Or, you can use the `Promise` API.
listUsers().then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

### Using `ListUsers`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listUsersRef } from '@dataconnect/generated';


// Call the `listUsersRef()` function to get a reference to the query.
const ref = listUsersRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listUsersRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.users);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

## GetProject
You can execute the `GetProject` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getProject(options?: ExecuteQueryOptions): QueryPromise<GetProjectData, undefined>;

interface GetProjectRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetProjectData, undefined>;
}
export const getProjectRef: GetProjectRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getProject(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetProjectData, undefined>;

interface GetProjectRef {
  ...
  (dc: DataConnect): QueryRef<GetProjectData, undefined>;
}
export const getProjectRef: GetProjectRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getProjectRef:
```typescript
const name = getProjectRef.operationName;
console.log(name);
```

### Variables
The `GetProject` query has no variables.
### Return Type
Recall that executing the `GetProject` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetProjectData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetProjectData {
  project?: {
    name: string;
    framework: string;
  };
}
```
### Using `GetProject`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getProject } from '@dataconnect/generated';


// Call the `getProject()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getProject();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getProject(dataConnect);

console.log(data.project);

// Or, you can use the `Promise` API.
getProject().then((response) => {
  const data = response.data;
  console.log(data.project);
});
```

### Using `GetProject`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getProjectRef } from '@dataconnect/generated';


// Call the `getProjectRef()` function to get a reference to the query.
const ref = getProjectRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getProjectRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.project);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.project);
});
```

## ListProjects
You can execute the `ListProjects` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listProjects(options?: ExecuteQueryOptions): QueryPromise<ListProjectsData, undefined>;

interface ListProjectsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListProjectsData, undefined>;
}
export const listProjectsRef: ListProjectsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listProjects(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListProjectsData, undefined>;

interface ListProjectsRef {
  ...
  (dc: DataConnect): QueryRef<ListProjectsData, undefined>;
}
export const listProjectsRef: ListProjectsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listProjectsRef:
```typescript
const name = listProjectsRef.operationName;
console.log(name);
```

### Variables
The `ListProjects` query has no variables.
### Return Type
Recall that executing the `ListProjects` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListProjectsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListProjectsData {
  projects: ({
    name: string;
    framework: string;
  })[];
}
```
### Using `ListProjects`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listProjects } from '@dataconnect/generated';


// Call the `listProjects()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listProjects();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listProjects(dataConnect);

console.log(data.projects);

// Or, you can use the `Promise` API.
listProjects().then((response) => {
  const data = response.data;
  console.log(data.projects);
});
```

### Using `ListProjects`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listProjectsRef } from '@dataconnect/generated';


// Call the `listProjectsRef()` function to get a reference to the query.
const ref = listProjectsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listProjectsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.projects);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.projects);
});
```

## GetDeployment
You can execute the `GetDeployment` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getDeployment(options?: ExecuteQueryOptions): QueryPromise<GetDeploymentData, undefined>;

interface GetDeploymentRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetDeploymentData, undefined>;
}
export const getDeploymentRef: GetDeploymentRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getDeployment(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetDeploymentData, undefined>;

interface GetDeploymentRef {
  ...
  (dc: DataConnect): QueryRef<GetDeploymentData, undefined>;
}
export const getDeploymentRef: GetDeploymentRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getDeploymentRef:
```typescript
const name = getDeploymentRef.operationName;
console.log(name);
```

### Variables
The `GetDeployment` query has no variables.
### Return Type
Recall that executing the `GetDeployment` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetDeploymentData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetDeploymentData {
  deployment?: {
    buildHash: string;
    status: string;
  };
}
```
### Using `GetDeployment`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getDeployment } from '@dataconnect/generated';


// Call the `getDeployment()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getDeployment();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getDeployment(dataConnect);

console.log(data.deployment);

// Or, you can use the `Promise` API.
getDeployment().then((response) => {
  const data = response.data;
  console.log(data.deployment);
});
```

### Using `GetDeployment`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getDeploymentRef } from '@dataconnect/generated';


// Call the `getDeploymentRef()` function to get a reference to the query.
const ref = getDeploymentRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getDeploymentRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.deployment);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.deployment);
});
```

## ListDeployments
You can execute the `ListDeployments` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listDeployments(options?: ExecuteQueryOptions): QueryPromise<ListDeploymentsData, undefined>;

interface ListDeploymentsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListDeploymentsData, undefined>;
}
export const listDeploymentsRef: ListDeploymentsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listDeployments(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListDeploymentsData, undefined>;

interface ListDeploymentsRef {
  ...
  (dc: DataConnect): QueryRef<ListDeploymentsData, undefined>;
}
export const listDeploymentsRef: ListDeploymentsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listDeploymentsRef:
```typescript
const name = listDeploymentsRef.operationName;
console.log(name);
```

### Variables
The `ListDeployments` query has no variables.
### Return Type
Recall that executing the `ListDeployments` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListDeploymentsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListDeploymentsData {
  deployments: ({
    buildHash: string;
    status: string;
  })[];
}
```
### Using `ListDeployments`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listDeployments } from '@dataconnect/generated';


// Call the `listDeployments()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listDeployments();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listDeployments(dataConnect);

console.log(data.deployments);

// Or, you can use the `Promise` API.
listDeployments().then((response) => {
  const data = response.data;
  console.log(data.deployments);
});
```

### Using `ListDeployments`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listDeploymentsRef } from '@dataconnect/generated';


// Call the `listDeploymentsRef()` function to get a reference to the query.
const ref = listDeploymentsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listDeploymentsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.deployments);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.deployments);
});
```

## GetEnvironment
You can execute the `GetEnvironment` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getEnvironment(options?: ExecuteQueryOptions): QueryPromise<GetEnvironmentData, undefined>;

interface GetEnvironmentRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetEnvironmentData, undefined>;
}
export const getEnvironmentRef: GetEnvironmentRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getEnvironment(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetEnvironmentData, undefined>;

interface GetEnvironmentRef {
  ...
  (dc: DataConnect): QueryRef<GetEnvironmentData, undefined>;
}
export const getEnvironmentRef: GetEnvironmentRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getEnvironmentRef:
```typescript
const name = getEnvironmentRef.operationName;
console.log(name);
```

### Variables
The `GetEnvironment` query has no variables.
### Return Type
Recall that executing the `GetEnvironment` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetEnvironmentData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetEnvironmentData {
  environment?: {
    name: string;
    url: string;
  };
}
```
### Using `GetEnvironment`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getEnvironment } from '@dataconnect/generated';


// Call the `getEnvironment()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getEnvironment();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getEnvironment(dataConnect);

console.log(data.environment);

// Or, you can use the `Promise` API.
getEnvironment().then((response) => {
  const data = response.data;
  console.log(data.environment);
});
```

### Using `GetEnvironment`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getEnvironmentRef } from '@dataconnect/generated';


// Call the `getEnvironmentRef()` function to get a reference to the query.
const ref = getEnvironmentRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getEnvironmentRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.environment);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.environment);
});
```

## ListEnvironments
You can execute the `ListEnvironments` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listEnvironments(options?: ExecuteQueryOptions): QueryPromise<ListEnvironmentsData, undefined>;

interface ListEnvironmentsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListEnvironmentsData, undefined>;
}
export const listEnvironmentsRef: ListEnvironmentsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listEnvironments(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListEnvironmentsData, undefined>;

interface ListEnvironmentsRef {
  ...
  (dc: DataConnect): QueryRef<ListEnvironmentsData, undefined>;
}
export const listEnvironmentsRef: ListEnvironmentsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listEnvironmentsRef:
```typescript
const name = listEnvironmentsRef.operationName;
console.log(name);
```

### Variables
The `ListEnvironments` query has no variables.
### Return Type
Recall that executing the `ListEnvironments` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListEnvironmentsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListEnvironmentsData {
  environments: ({
    name: string;
    url: string;
  })[];
}
```
### Using `ListEnvironments`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listEnvironments } from '@dataconnect/generated';


// Call the `listEnvironments()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listEnvironments();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listEnvironments(dataConnect);

console.log(data.environments);

// Or, you can use the `Promise` API.
listEnvironments().then((response) => {
  const data = response.data;
  console.log(data.environments);
});
```

### Using `ListEnvironments`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listEnvironmentsRef } from '@dataconnect/generated';


// Call the `listEnvironmentsRef()` function to get a reference to the query.
const ref = listEnvironmentsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listEnvironmentsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.environments);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.environments);
});
```

## GetDomain
You can execute the `GetDomain` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getDomain(options?: ExecuteQueryOptions): QueryPromise<GetDomainData, undefined>;

interface GetDomainRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetDomainData, undefined>;
}
export const getDomainRef: GetDomainRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getDomain(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetDomainData, undefined>;

interface GetDomainRef {
  ...
  (dc: DataConnect): QueryRef<GetDomainData, undefined>;
}
export const getDomainRef: GetDomainRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getDomainRef:
```typescript
const name = getDomainRef.operationName;
console.log(name);
```

### Variables
The `GetDomain` query has no variables.
### Return Type
Recall that executing the `GetDomain` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetDomainData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetDomainData {
  domain?: {
    domainName: string;
    sslStatus: string;
  };
}
```
### Using `GetDomain`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getDomain } from '@dataconnect/generated';


// Call the `getDomain()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getDomain();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getDomain(dataConnect);

console.log(data.domain);

// Or, you can use the `Promise` API.
getDomain().then((response) => {
  const data = response.data;
  console.log(data.domain);
});
```

### Using `GetDomain`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getDomainRef } from '@dataconnect/generated';


// Call the `getDomainRef()` function to get a reference to the query.
const ref = getDomainRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getDomainRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.domain);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.domain);
});
```

## ListDomains
You can execute the `ListDomains` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listDomains(options?: ExecuteQueryOptions): QueryPromise<ListDomainsData, undefined>;

interface ListDomainsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListDomainsData, undefined>;
}
export const listDomainsRef: ListDomainsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listDomains(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListDomainsData, undefined>;

interface ListDomainsRef {
  ...
  (dc: DataConnect): QueryRef<ListDomainsData, undefined>;
}
export const listDomainsRef: ListDomainsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listDomainsRef:
```typescript
const name = listDomainsRef.operationName;
console.log(name);
```

### Variables
The `ListDomains` query has no variables.
### Return Type
Recall that executing the `ListDomains` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListDomainsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListDomainsData {
  domains: ({
    domainName: string;
    sslStatus: string;
  })[];
}
```
### Using `ListDomains`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listDomains } from '@dataconnect/generated';


// Call the `listDomains()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listDomains();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listDomains(dataConnect);

console.log(data.domains);

// Or, you can use the `Promise` API.
listDomains().then((response) => {
  const data = response.data;
  console.log(data.domains);
});
```

### Using `ListDomains`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listDomainsRef } from '@dataconnect/generated';


// Call the `listDomainsRef()` function to get a reference to the query.
const ref = listDomainsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listDomainsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.domains);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.domains);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateUser
You can execute the `CreateUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createUser(): MutationPromise<CreateUserData, undefined>;

interface CreateUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateUserData, undefined>;
}
export const createUserRef: CreateUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createUser(dc: DataConnect): MutationPromise<CreateUserData, undefined>;

interface CreateUserRef {
  ...
  (dc: DataConnect): MutationRef<CreateUserData, undefined>;
}
export const createUserRef: CreateUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createUserRef:
```typescript
const name = createUserRef.operationName;
console.log(name);
```

### Variables
The `CreateUser` mutation has no variables.
### Return Type
Recall that executing the `CreateUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateUserData {
  user_insert: User_Key;
}
```
### Using `CreateUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createUser } from '@dataconnect/generated';


// Call the `createUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createUser(dataConnect);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
createUser().then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

### Using `CreateUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createUserRef } from '@dataconnect/generated';


// Call the `createUserRef()` function to get a reference to the mutation.
const ref = createUserRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createUserRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

## UpdateUser
You can execute the `UpdateUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateUser(): MutationPromise<UpdateUserData, undefined>;

interface UpdateUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<UpdateUserData, undefined>;
}
export const updateUserRef: UpdateUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateUser(dc: DataConnect): MutationPromise<UpdateUserData, undefined>;

interface UpdateUserRef {
  ...
  (dc: DataConnect): MutationRef<UpdateUserData, undefined>;
}
export const updateUserRef: UpdateUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateUserRef:
```typescript
const name = updateUserRef.operationName;
console.log(name);
```

### Variables
The `UpdateUser` mutation has no variables.
### Return Type
Recall that executing the `UpdateUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateUserData {
  user_update?: User_Key | null;
}
```
### Using `UpdateUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateUser } from '@dataconnect/generated';


// Call the `updateUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateUser(dataConnect);

console.log(data.user_update);

// Or, you can use the `Promise` API.
updateUser().then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

### Using `UpdateUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateUserRef } from '@dataconnect/generated';


// Call the `updateUserRef()` function to get a reference to the mutation.
const ref = updateUserRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateUserRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

## DeleteUser
You can execute the `DeleteUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteUser(): MutationPromise<DeleteUserData, undefined>;

interface DeleteUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteUserData, undefined>;
}
export const deleteUserRef: DeleteUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteUser(dc: DataConnect): MutationPromise<DeleteUserData, undefined>;

interface DeleteUserRef {
  ...
  (dc: DataConnect): MutationRef<DeleteUserData, undefined>;
}
export const deleteUserRef: DeleteUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteUserRef:
```typescript
const name = deleteUserRef.operationName;
console.log(name);
```

### Variables
The `DeleteUser` mutation has no variables.
### Return Type
Recall that executing the `DeleteUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteUserData {
  user_delete?: User_Key | null;
}
```
### Using `DeleteUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteUser } from '@dataconnect/generated';


// Call the `deleteUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteUser(dataConnect);

console.log(data.user_delete);

// Or, you can use the `Promise` API.
deleteUser().then((response) => {
  const data = response.data;
  console.log(data.user_delete);
});
```

### Using `DeleteUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteUserRef } from '@dataconnect/generated';


// Call the `deleteUserRef()` function to get a reference to the mutation.
const ref = deleteUserRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteUserRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_delete);
});
```

## CreateProject
You can execute the `CreateProject` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createProject(): MutationPromise<CreateProjectData, undefined>;

interface CreateProjectRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateProjectData, undefined>;
}
export const createProjectRef: CreateProjectRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createProject(dc: DataConnect): MutationPromise<CreateProjectData, undefined>;

interface CreateProjectRef {
  ...
  (dc: DataConnect): MutationRef<CreateProjectData, undefined>;
}
export const createProjectRef: CreateProjectRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createProjectRef:
```typescript
const name = createProjectRef.operationName;
console.log(name);
```

### Variables
The `CreateProject` mutation has no variables.
### Return Type
Recall that executing the `CreateProject` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateProjectData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateProjectData {
  project_insert: Project_Key;
}
```
### Using `CreateProject`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createProject } from '@dataconnect/generated';


// Call the `createProject()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createProject();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createProject(dataConnect);

console.log(data.project_insert);

// Or, you can use the `Promise` API.
createProject().then((response) => {
  const data = response.data;
  console.log(data.project_insert);
});
```

### Using `CreateProject`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createProjectRef } from '@dataconnect/generated';


// Call the `createProjectRef()` function to get a reference to the mutation.
const ref = createProjectRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createProjectRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.project_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.project_insert);
});
```

## UpdateProject
You can execute the `UpdateProject` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateProject(): MutationPromise<UpdateProjectData, undefined>;

interface UpdateProjectRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<UpdateProjectData, undefined>;
}
export const updateProjectRef: UpdateProjectRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateProject(dc: DataConnect): MutationPromise<UpdateProjectData, undefined>;

interface UpdateProjectRef {
  ...
  (dc: DataConnect): MutationRef<UpdateProjectData, undefined>;
}
export const updateProjectRef: UpdateProjectRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateProjectRef:
```typescript
const name = updateProjectRef.operationName;
console.log(name);
```

### Variables
The `UpdateProject` mutation has no variables.
### Return Type
Recall that executing the `UpdateProject` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateProjectData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateProjectData {
  project_update?: Project_Key | null;
}
```
### Using `UpdateProject`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateProject } from '@dataconnect/generated';


// Call the `updateProject()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateProject();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateProject(dataConnect);

console.log(data.project_update);

// Or, you can use the `Promise` API.
updateProject().then((response) => {
  const data = response.data;
  console.log(data.project_update);
});
```

### Using `UpdateProject`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateProjectRef } from '@dataconnect/generated';


// Call the `updateProjectRef()` function to get a reference to the mutation.
const ref = updateProjectRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateProjectRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.project_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.project_update);
});
```

## DeleteProject
You can execute the `DeleteProject` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteProject(): MutationPromise<DeleteProjectData, undefined>;

interface DeleteProjectRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteProjectData, undefined>;
}
export const deleteProjectRef: DeleteProjectRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteProject(dc: DataConnect): MutationPromise<DeleteProjectData, undefined>;

interface DeleteProjectRef {
  ...
  (dc: DataConnect): MutationRef<DeleteProjectData, undefined>;
}
export const deleteProjectRef: DeleteProjectRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteProjectRef:
```typescript
const name = deleteProjectRef.operationName;
console.log(name);
```

### Variables
The `DeleteProject` mutation has no variables.
### Return Type
Recall that executing the `DeleteProject` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteProjectData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteProjectData {
  project_delete?: Project_Key | null;
}
```
### Using `DeleteProject`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteProject } from '@dataconnect/generated';


// Call the `deleteProject()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteProject();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteProject(dataConnect);

console.log(data.project_delete);

// Or, you can use the `Promise` API.
deleteProject().then((response) => {
  const data = response.data;
  console.log(data.project_delete);
});
```

### Using `DeleteProject`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteProjectRef } from '@dataconnect/generated';


// Call the `deleteProjectRef()` function to get a reference to the mutation.
const ref = deleteProjectRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteProjectRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.project_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.project_delete);
});
```

## CreateDeployment
You can execute the `CreateDeployment` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createDeployment(): MutationPromise<CreateDeploymentData, undefined>;

interface CreateDeploymentRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateDeploymentData, undefined>;
}
export const createDeploymentRef: CreateDeploymentRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createDeployment(dc: DataConnect): MutationPromise<CreateDeploymentData, undefined>;

interface CreateDeploymentRef {
  ...
  (dc: DataConnect): MutationRef<CreateDeploymentData, undefined>;
}
export const createDeploymentRef: CreateDeploymentRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createDeploymentRef:
```typescript
const name = createDeploymentRef.operationName;
console.log(name);
```

### Variables
The `CreateDeployment` mutation has no variables.
### Return Type
Recall that executing the `CreateDeployment` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateDeploymentData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateDeploymentData {
  deployment_insert: Deployment_Key;
}
```
### Using `CreateDeployment`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createDeployment } from '@dataconnect/generated';


// Call the `createDeployment()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createDeployment();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createDeployment(dataConnect);

console.log(data.deployment_insert);

// Or, you can use the `Promise` API.
createDeployment().then((response) => {
  const data = response.data;
  console.log(data.deployment_insert);
});
```

### Using `CreateDeployment`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createDeploymentRef } from '@dataconnect/generated';


// Call the `createDeploymentRef()` function to get a reference to the mutation.
const ref = createDeploymentRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createDeploymentRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.deployment_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.deployment_insert);
});
```

## UpdateDeployment
You can execute the `UpdateDeployment` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateDeployment(): MutationPromise<UpdateDeploymentData, undefined>;

interface UpdateDeploymentRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<UpdateDeploymentData, undefined>;
}
export const updateDeploymentRef: UpdateDeploymentRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateDeployment(dc: DataConnect): MutationPromise<UpdateDeploymentData, undefined>;

interface UpdateDeploymentRef {
  ...
  (dc: DataConnect): MutationRef<UpdateDeploymentData, undefined>;
}
export const updateDeploymentRef: UpdateDeploymentRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateDeploymentRef:
```typescript
const name = updateDeploymentRef.operationName;
console.log(name);
```

### Variables
The `UpdateDeployment` mutation has no variables.
### Return Type
Recall that executing the `UpdateDeployment` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateDeploymentData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateDeploymentData {
  deployment_update?: Deployment_Key | null;
}
```
### Using `UpdateDeployment`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateDeployment } from '@dataconnect/generated';


// Call the `updateDeployment()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateDeployment();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateDeployment(dataConnect);

console.log(data.deployment_update);

// Or, you can use the `Promise` API.
updateDeployment().then((response) => {
  const data = response.data;
  console.log(data.deployment_update);
});
```

### Using `UpdateDeployment`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateDeploymentRef } from '@dataconnect/generated';


// Call the `updateDeploymentRef()` function to get a reference to the mutation.
const ref = updateDeploymentRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateDeploymentRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.deployment_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.deployment_update);
});
```

## DeleteDeployment
You can execute the `DeleteDeployment` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteDeployment(): MutationPromise<DeleteDeploymentData, undefined>;

interface DeleteDeploymentRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteDeploymentData, undefined>;
}
export const deleteDeploymentRef: DeleteDeploymentRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteDeployment(dc: DataConnect): MutationPromise<DeleteDeploymentData, undefined>;

interface DeleteDeploymentRef {
  ...
  (dc: DataConnect): MutationRef<DeleteDeploymentData, undefined>;
}
export const deleteDeploymentRef: DeleteDeploymentRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteDeploymentRef:
```typescript
const name = deleteDeploymentRef.operationName;
console.log(name);
```

### Variables
The `DeleteDeployment` mutation has no variables.
### Return Type
Recall that executing the `DeleteDeployment` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteDeploymentData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteDeploymentData {
  deployment_delete?: Deployment_Key | null;
}
```
### Using `DeleteDeployment`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteDeployment } from '@dataconnect/generated';


// Call the `deleteDeployment()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteDeployment();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteDeployment(dataConnect);

console.log(data.deployment_delete);

// Or, you can use the `Promise` API.
deleteDeployment().then((response) => {
  const data = response.data;
  console.log(data.deployment_delete);
});
```

### Using `DeleteDeployment`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteDeploymentRef } from '@dataconnect/generated';


// Call the `deleteDeploymentRef()` function to get a reference to the mutation.
const ref = deleteDeploymentRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteDeploymentRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.deployment_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.deployment_delete);
});
```

## CreateEnvironment
You can execute the `CreateEnvironment` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createEnvironment(): MutationPromise<CreateEnvironmentData, undefined>;

interface CreateEnvironmentRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateEnvironmentData, undefined>;
}
export const createEnvironmentRef: CreateEnvironmentRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createEnvironment(dc: DataConnect): MutationPromise<CreateEnvironmentData, undefined>;

interface CreateEnvironmentRef {
  ...
  (dc: DataConnect): MutationRef<CreateEnvironmentData, undefined>;
}
export const createEnvironmentRef: CreateEnvironmentRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createEnvironmentRef:
```typescript
const name = createEnvironmentRef.operationName;
console.log(name);
```

### Variables
The `CreateEnvironment` mutation has no variables.
### Return Type
Recall that executing the `CreateEnvironment` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateEnvironmentData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateEnvironmentData {
  environment_insert: Environment_Key;
}
```
### Using `CreateEnvironment`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createEnvironment } from '@dataconnect/generated';


// Call the `createEnvironment()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createEnvironment();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createEnvironment(dataConnect);

console.log(data.environment_insert);

// Or, you can use the `Promise` API.
createEnvironment().then((response) => {
  const data = response.data;
  console.log(data.environment_insert);
});
```

### Using `CreateEnvironment`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createEnvironmentRef } from '@dataconnect/generated';


// Call the `createEnvironmentRef()` function to get a reference to the mutation.
const ref = createEnvironmentRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createEnvironmentRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.environment_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.environment_insert);
});
```

## UpdateEnvironment
You can execute the `UpdateEnvironment` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateEnvironment(): MutationPromise<UpdateEnvironmentData, undefined>;

interface UpdateEnvironmentRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<UpdateEnvironmentData, undefined>;
}
export const updateEnvironmentRef: UpdateEnvironmentRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateEnvironment(dc: DataConnect): MutationPromise<UpdateEnvironmentData, undefined>;

interface UpdateEnvironmentRef {
  ...
  (dc: DataConnect): MutationRef<UpdateEnvironmentData, undefined>;
}
export const updateEnvironmentRef: UpdateEnvironmentRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateEnvironmentRef:
```typescript
const name = updateEnvironmentRef.operationName;
console.log(name);
```

### Variables
The `UpdateEnvironment` mutation has no variables.
### Return Type
Recall that executing the `UpdateEnvironment` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateEnvironmentData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateEnvironmentData {
  environment_update?: Environment_Key | null;
}
```
### Using `UpdateEnvironment`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateEnvironment } from '@dataconnect/generated';


// Call the `updateEnvironment()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateEnvironment();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateEnvironment(dataConnect);

console.log(data.environment_update);

// Or, you can use the `Promise` API.
updateEnvironment().then((response) => {
  const data = response.data;
  console.log(data.environment_update);
});
```

### Using `UpdateEnvironment`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateEnvironmentRef } from '@dataconnect/generated';


// Call the `updateEnvironmentRef()` function to get a reference to the mutation.
const ref = updateEnvironmentRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateEnvironmentRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.environment_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.environment_update);
});
```

## DeleteEnvironment
You can execute the `DeleteEnvironment` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteEnvironment(): MutationPromise<DeleteEnvironmentData, undefined>;

interface DeleteEnvironmentRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteEnvironmentData, undefined>;
}
export const deleteEnvironmentRef: DeleteEnvironmentRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteEnvironment(dc: DataConnect): MutationPromise<DeleteEnvironmentData, undefined>;

interface DeleteEnvironmentRef {
  ...
  (dc: DataConnect): MutationRef<DeleteEnvironmentData, undefined>;
}
export const deleteEnvironmentRef: DeleteEnvironmentRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteEnvironmentRef:
```typescript
const name = deleteEnvironmentRef.operationName;
console.log(name);
```

### Variables
The `DeleteEnvironment` mutation has no variables.
### Return Type
Recall that executing the `DeleteEnvironment` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteEnvironmentData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteEnvironmentData {
  environment_delete?: Environment_Key | null;
}
```
### Using `DeleteEnvironment`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteEnvironment } from '@dataconnect/generated';


// Call the `deleteEnvironment()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteEnvironment();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteEnvironment(dataConnect);

console.log(data.environment_delete);

// Or, you can use the `Promise` API.
deleteEnvironment().then((response) => {
  const data = response.data;
  console.log(data.environment_delete);
});
```

### Using `DeleteEnvironment`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteEnvironmentRef } from '@dataconnect/generated';


// Call the `deleteEnvironmentRef()` function to get a reference to the mutation.
const ref = deleteEnvironmentRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteEnvironmentRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.environment_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.environment_delete);
});
```

## CreateDomain
You can execute the `CreateDomain` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createDomain(): MutationPromise<CreateDomainData, undefined>;

interface CreateDomainRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateDomainData, undefined>;
}
export const createDomainRef: CreateDomainRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createDomain(dc: DataConnect): MutationPromise<CreateDomainData, undefined>;

interface CreateDomainRef {
  ...
  (dc: DataConnect): MutationRef<CreateDomainData, undefined>;
}
export const createDomainRef: CreateDomainRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createDomainRef:
```typescript
const name = createDomainRef.operationName;
console.log(name);
```

### Variables
The `CreateDomain` mutation has no variables.
### Return Type
Recall that executing the `CreateDomain` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateDomainData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateDomainData {
  domain_insert: Domain_Key;
}
```
### Using `CreateDomain`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createDomain } from '@dataconnect/generated';


// Call the `createDomain()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createDomain();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createDomain(dataConnect);

console.log(data.domain_insert);

// Or, you can use the `Promise` API.
createDomain().then((response) => {
  const data = response.data;
  console.log(data.domain_insert);
});
```

### Using `CreateDomain`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createDomainRef } from '@dataconnect/generated';


// Call the `createDomainRef()` function to get a reference to the mutation.
const ref = createDomainRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createDomainRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.domain_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.domain_insert);
});
```

## UpdateDomain
You can execute the `UpdateDomain` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateDomain(): MutationPromise<UpdateDomainData, undefined>;

interface UpdateDomainRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<UpdateDomainData, undefined>;
}
export const updateDomainRef: UpdateDomainRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateDomain(dc: DataConnect): MutationPromise<UpdateDomainData, undefined>;

interface UpdateDomainRef {
  ...
  (dc: DataConnect): MutationRef<UpdateDomainData, undefined>;
}
export const updateDomainRef: UpdateDomainRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateDomainRef:
```typescript
const name = updateDomainRef.operationName;
console.log(name);
```

### Variables
The `UpdateDomain` mutation has no variables.
### Return Type
Recall that executing the `UpdateDomain` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateDomainData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateDomainData {
  domain_update?: Domain_Key | null;
}
```
### Using `UpdateDomain`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateDomain } from '@dataconnect/generated';


// Call the `updateDomain()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateDomain();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateDomain(dataConnect);

console.log(data.domain_update);

// Or, you can use the `Promise` API.
updateDomain().then((response) => {
  const data = response.data;
  console.log(data.domain_update);
});
```

### Using `UpdateDomain`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateDomainRef } from '@dataconnect/generated';


// Call the `updateDomainRef()` function to get a reference to the mutation.
const ref = updateDomainRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateDomainRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.domain_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.domain_update);
});
```

## DeleteDomain
You can execute the `DeleteDomain` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteDomain(): MutationPromise<DeleteDomainData, undefined>;

interface DeleteDomainRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteDomainData, undefined>;
}
export const deleteDomainRef: DeleteDomainRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteDomain(dc: DataConnect): MutationPromise<DeleteDomainData, undefined>;

interface DeleteDomainRef {
  ...
  (dc: DataConnect): MutationRef<DeleteDomainData, undefined>;
}
export const deleteDomainRef: DeleteDomainRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteDomainRef:
```typescript
const name = deleteDomainRef.operationName;
console.log(name);
```

### Variables
The `DeleteDomain` mutation has no variables.
### Return Type
Recall that executing the `DeleteDomain` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteDomainData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteDomainData {
  domain_delete?: Domain_Key | null;
}
```
### Using `DeleteDomain`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteDomain } from '@dataconnect/generated';


// Call the `deleteDomain()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteDomain();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteDomain(dataConnect);

console.log(data.domain_delete);

// Or, you can use the `Promise` API.
deleteDomain().then((response) => {
  const data = response.data;
  console.log(data.domain_delete);
});
```

### Using `DeleteDomain`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteDomainRef } from '@dataconnect/generated';


// Call the `deleteDomainRef()` function to get a reference to the mutation.
const ref = deleteDomainRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteDomainRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.domain_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.domain_delete);
});
```

