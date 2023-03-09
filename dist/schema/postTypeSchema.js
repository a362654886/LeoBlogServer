"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postTypeDefs = void 0;
exports.postTypeDefs = `
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


  type MutationPostTypeResult {
    data: PostType
    error: String
  }


  type QueryPostTypesResult {
    data: [PostType]
    error: String
  }


  type Query {
    postTypes: QueryPostTypesResult
    postType(name: String): QueryPostTypesResult
  }


  type Mutation {
    addPostType(
      types: String
    ): MutationPostTypeResult
  }
`;
