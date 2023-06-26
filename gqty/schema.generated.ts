/**
 * GQty AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

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
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z, is compliant with the date-time format outlined in section 5.6 of the RFC 3339
   * profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
   *
   * This scalar is a description of an exact instant on the timeline such as the instant that a user account was created.
   *
   * # Input Coercion
   *
   * When expected as an input type, only RFC 3339 compliant date-time strings are accepted. All other input values raise a query error indicating an incorrect type.
   *
   * # Result Coercion
   *
   * Where an RFC 3339 compliant date-time string has a time-zone other than UTC, it is shifted to UTC.
   * For example, the date-time string 2016-01-01T14:10:20+01:00 is shifted to 2016-01-01T13:10:20Z.
   */
  DateTime: string;
}

/** Address input type. */
export interface AddressInput {
  street: Scalars["String"];
}

export interface BlogByInput {
  id?: InputMaybe<Scalars["ID"]>;
}

/** Input to create a Blog */
export interface BlogCreateInput {
  name: Scalars["String"];
  owner: BlogToUserCreateUserRelation;
}

export interface BlogOrderByInput {
  createdAt?: InputMaybe<OrderByDirection>;
}

/** Input to create a Blog for the BlogToUser relation of User */
export interface BlogToUserCreateBlog {
  name: Scalars["String"];
}

/** Input to link to or create a Blog for the BlogToUser relation of User */
export interface BlogToUserCreateBlogRelation {
  create?: InputMaybe<BlogToUserCreateBlog>;
  link?: InputMaybe<Scalars["ID"]>;
}

/** Input to create a User for the BlogToUser relation of Blog */
export interface BlogToUserCreateUser {
  address: AddressInput;
  blogs: Array<BlogToUserCreateBlogRelation>;
  name: Scalars["String"];
}

/** Input to link to or create a User for the BlogToUser relation of Blog */
export interface BlogToUserCreateUserRelation {
  create?: InputMaybe<BlogToUserCreateUser>;
  link?: InputMaybe<Scalars["ID"]>;
}

/** Input to link/unlink to or create a Blog for the BlogToUser relation of User */
export interface BlogToUserUpdateBlogRelation {
  create?: InputMaybe<BlogToUserCreateBlog>;
  link?: InputMaybe<Scalars["ID"]>;
  unlink?: InputMaybe<Scalars["ID"]>;
}

/** Input to link/unlink to or create a User for the BlogToUser relation of Blog */
export interface BlogToUserUpdateUserRelation {
  create?: InputMaybe<BlogToUserCreateUser>;
  link?: InputMaybe<Scalars["ID"]>;
  unlink?: InputMaybe<Scalars["ID"]>;
}

/** Input to update a Blog */
export interface BlogUpdateInput {
  name?: InputMaybe<Scalars["String"]>;
  owner?: InputMaybe<BlogToUserUpdateUserRelation>;
}

export enum OrderByDirection {
  ASC = "ASC",
  DESC = "DESC",
}

export interface UserByInput {
  id?: InputMaybe<Scalars["ID"]>;
}

/** Input to create a User */
export interface UserCreateInput {
  address: AddressInput;
  blogs: Array<BlogToUserCreateBlogRelation>;
  name: Scalars["String"];
}

export interface UserOrderByInput {
  createdAt?: InputMaybe<OrderByDirection>;
}

/** Input to update a User */
export interface UserUpdateInput {
  address?: InputMaybe<AddressInput>;
  blogs?: InputMaybe<Array<BlogToUserUpdateBlogRelation>>;
  name?: InputMaybe<Scalars["String"]>;
}

export const scalarsEnumsHash: import("gqty").ScalarsEnumsHash = {
  Boolean: true,
  DateTime: true,
  ID: true,
  Int: true,
  OrderByDirection: true,
  String: true,
};
export const generatedSchema = {
  Address: { __typename: { __type: "String!" }, street: { __type: "String!" } },
  AddressInput: { street: { __type: "String!" } },
  Blog: {
    __typename: { __type: "String!" },
    createdAt: { __type: "DateTime!" },
    id: { __type: "ID!" },
    name: { __type: "String!" },
    owner: { __type: "User!" },
    updatedAt: { __type: "DateTime!" },
  },
  BlogByInput: { id: { __type: "ID" } },
  BlogConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[BlogEdge]" },
    pageInfo: { __type: "PageInfo!" },
  },
  BlogCreateInput: {
    name: { __type: "String!" },
    owner: { __type: "BlogToUserCreateUserRelation!" },
  },
  BlogCreatePayload: {
    __typename: { __type: "String!" },
    blog: { __type: "Blog" },
  },
  BlogDeletePayload: {
    __typename: { __type: "String!" },
    deletedId: { __type: "ID!" },
  },
  BlogEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Blog!" },
  },
  BlogOrderByInput: { createdAt: { __type: "OrderByDirection" } },
  BlogToUserCreateBlog: { name: { __type: "String!" } },
  BlogToUserCreateBlogRelation: {
    create: { __type: "BlogToUserCreateBlog" },
    link: { __type: "ID" },
  },
  BlogToUserCreateUser: {
    address: { __type: "AddressInput!" },
    blogs: { __type: "[BlogToUserCreateBlogRelation!]!" },
    name: { __type: "String!" },
  },
  BlogToUserCreateUserRelation: {
    create: { __type: "BlogToUserCreateUser" },
    link: { __type: "ID" },
  },
  BlogToUserUpdateBlogRelation: {
    create: { __type: "BlogToUserCreateBlog" },
    link: { __type: "ID" },
    unlink: { __type: "ID" },
  },
  BlogToUserUpdateUserRelation: {
    create: { __type: "BlogToUserCreateUser" },
    link: { __type: "ID" },
    unlink: { __type: "ID" },
  },
  BlogUpdateInput: {
    name: { __type: "String" },
    owner: { __type: "BlogToUserUpdateUserRelation" },
  },
  BlogUpdatePayload: {
    __typename: { __type: "String!" },
    blog: { __type: "Blog" },
  },
  PageInfo: {
    __typename: { __type: "String!" },
    endCursor: { __type: "String" },
    hasNextPage: { __type: "Boolean!" },
    hasPreviousPage: { __type: "Boolean!" },
    startCursor: { __type: "String" },
  },
  User: {
    __typename: { __type: "String!" },
    address: { __type: "Address!" },
    blogs: {
      __type: "BlogConnection",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        orderBy: "UserOrderByInput",
      },
    },
    createdAt: { __type: "DateTime!" },
    id: { __type: "ID!" },
    name: { __type: "String!" },
    updatedAt: { __type: "DateTime!" },
  },
  UserByInput: { id: { __type: "ID" } },
  UserConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[UserEdge]" },
    pageInfo: { __type: "PageInfo!" },
  },
  UserCreateInput: {
    address: { __type: "AddressInput!" },
    blogs: { __type: "[BlogToUserCreateBlogRelation!]!" },
    name: { __type: "String!" },
  },
  UserCreatePayload: {
    __typename: { __type: "String!" },
    user: { __type: "User" },
  },
  UserDeletePayload: {
    __typename: { __type: "String!" },
    deletedId: { __type: "ID!" },
  },
  UserEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "User!" },
  },
  UserOrderByInput: { createdAt: { __type: "OrderByDirection" } },
  UserUpdateInput: {
    address: { __type: "AddressInput" },
    blogs: { __type: "[BlogToUserUpdateBlogRelation!]" },
    name: { __type: "String" },
  },
  UserUpdatePayload: {
    __typename: { __type: "String!" },
    user: { __type: "User" },
  },
  mutation: {
    __typename: { __type: "String!" },
    blogCreate: {
      __type: "BlogCreatePayload",
      __args: { input: "BlogCreateInput!" },
    },
    blogDelete: { __type: "BlogDeletePayload", __args: { by: "BlogByInput!" } },
    blogUpdate: {
      __type: "BlogUpdatePayload",
      __args: { by: "BlogByInput!", input: "BlogUpdateInput!" },
    },
    userCreate: {
      __type: "UserCreatePayload",
      __args: { input: "UserCreateInput!" },
    },
    userDelete: { __type: "UserDeletePayload", __args: { by: "UserByInput!" } },
    userUpdate: {
      __type: "UserUpdatePayload",
      __args: { by: "UserByInput!", input: "UserUpdateInput!" },
    },
  },
  query: {
    __typename: { __type: "String!" },
    blog: { __type: "Blog", __args: { by: "BlogByInput!" } },
    blogCollection: {
      __type: "BlogConnection",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        orderBy: "BlogOrderByInput",
      },
    },
    user: { __type: "User", __args: { by: "UserByInput!" } },
    userCollection: {
      __type: "UserConnection",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        orderBy: "UserOrderByInput",
      },
    },
  },
  subscription: {},
} as const;

export interface Address {
  __typename?: "Address";
  street: ScalarsEnums["String"];
}

export interface Blog {
  __typename?: "Blog";
  /**
   * when the model was created
   */
  createdAt: ScalarsEnums["DateTime"];
  /**
   * Unique identifier
   */
  id: ScalarsEnums["ID"];
  name: ScalarsEnums["String"];
  owner: User;
  /**
   * when the model was updated
   */
  updatedAt: ScalarsEnums["DateTime"];
}

export interface BlogConnection {
  __typename?: "BlogConnection";
  edges?: Maybe<Array<Maybe<BlogEdge>>>;
  /**
   * Information to aid in pagination
   */
  pageInfo: PageInfo;
}

export interface BlogCreatePayload {
  __typename?: "BlogCreatePayload";
  blog?: Maybe<Blog>;
}

export interface BlogDeletePayload {
  __typename?: "BlogDeletePayload";
  deletedId: ScalarsEnums["ID"];
}

export interface BlogEdge {
  __typename?: "BlogEdge";
  cursor: ScalarsEnums["String"];
  node: Blog;
}

export interface BlogUpdatePayload {
  __typename?: "BlogUpdatePayload";
  blog?: Maybe<Blog>;
}

export interface PageInfo {
  __typename?: "PageInfo";
  endCursor?: Maybe<ScalarsEnums["String"]>;
  hasNextPage: ScalarsEnums["Boolean"];
  hasPreviousPage: ScalarsEnums["Boolean"];
  startCursor?: Maybe<ScalarsEnums["String"]>;
}

export interface User {
  __typename?: "User";
  address: Address;
  blogs: (args?: {
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<UserOrderByInput>;
  }) => Maybe<BlogConnection>;
  /**
   * when the model was created
   */
  createdAt: ScalarsEnums["DateTime"];
  /**
   * Unique identifier
   */
  id: ScalarsEnums["ID"];
  name: ScalarsEnums["String"];
  /**
   * when the model was updated
   */
  updatedAt: ScalarsEnums["DateTime"];
}

export interface UserConnection {
  __typename?: "UserConnection";
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  /**
   * Information to aid in pagination
   */
  pageInfo: PageInfo;
}

export interface UserCreatePayload {
  __typename?: "UserCreatePayload";
  user?: Maybe<User>;
}

export interface UserDeletePayload {
  __typename?: "UserDeletePayload";
  deletedId: ScalarsEnums["ID"];
}

export interface UserEdge {
  __typename?: "UserEdge";
  cursor: ScalarsEnums["String"];
  node: User;
}

export interface UserUpdatePayload {
  __typename?: "UserUpdatePayload";
  user?: Maybe<User>;
}

export interface Mutation {
  __typename?: "Mutation";
  /**
   * Create a Blog
   */
  blogCreate: (args: { input: BlogCreateInput }) => Maybe<BlogCreatePayload>;
  /**
   * Delete a Blog by ID or unique field
   */
  blogDelete: (args: { by: BlogByInput }) => Maybe<BlogDeletePayload>;
  /**
   * Update a Blog
   */
  blogUpdate: (args: {
    by: BlogByInput;
    input: BlogUpdateInput;
  }) => Maybe<BlogUpdatePayload>;
  /**
   * Create a User
   */
  userCreate: (args: { input: UserCreateInput }) => Maybe<UserCreatePayload>;
  /**
   * Delete a User by ID or unique field
   */
  userDelete: (args: { by: UserByInput }) => Maybe<UserDeletePayload>;
  /**
   * Update a User
   */
  userUpdate: (args: {
    by: UserByInput;
    input: UserUpdateInput;
  }) => Maybe<UserUpdatePayload>;
}

export interface Query {
  __typename?: "Query";
  /**
   * Query a single Blog by an ID or a unique field
   */
  blog: (args: {
    /**
     * The field and value by which to query the Blog
     */
    by: BlogByInput;
  }) => Maybe<Blog>;
  /**
   * Paginated query to fetch the whole list of `Blog`.
   */
  blogCollection: (args?: {
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<BlogOrderByInput>;
  }) => Maybe<BlogConnection>;
  /**
   * Query a single User by an ID or a unique field
   */
  user: (args: {
    /**
     * The field and value by which to query the User
     */
    by: UserByInput;
  }) => Maybe<User>;
  /**
   * Paginated query to fetch the whole list of `User`.
   */
  userCollection: (args?: {
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<UserOrderByInput>;
  }) => Maybe<UserConnection>;
}

export interface Subscription {
  __typename?: "Subscription";
}

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {
  OrderByDirection: OrderByDirection | undefined;
}
