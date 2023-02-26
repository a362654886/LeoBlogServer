"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_1 = require("apollo-server");
exports.typeDefs = (0, apollo_server_1.gql) `
  type PostType {
    id: ID!
    postIds: [String]
    type: String!
  }

  type Post {
    id: ID
    typeIds: [String]
    title: String!
    context: String!
    createAt: String
    types: [PostType]
  }

  type AddPostResult {
    data: Post
    error: String
  }

  type AddPostTypeResult {
    data: PostType
    error: String
  }

  type AddPostTypeResult {
    data: PostType
    error: String
  }

  type QueryPostsResult {
    data: [Post]
    error: String
  }

  type QueryPostResult {
    data: Post
    error: String
  }

  type QueryPostTypesResult {
    data: [PostType]
    error: String
  }

  type Query {
    posts: QueryPostsResult
    post(id: String): QueryPostResult
    postTypes: QueryPostTypesResult
  }

  type Mutation {
    addPost(types: [String], title: String!, context: String!): AddPostResult
    addPostType(type: String): AddPostTypeResult
  }
`;
