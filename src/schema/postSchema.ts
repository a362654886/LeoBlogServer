export const postDefs = `
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


  type MutationPostResult {
    data: Post
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


  type Query {
    posts: QueryPostsResult
    post(id: String): QueryPostResult
  }


  type Mutation {
    addPost(
      types: [String]
      title: String!
      context: String!
    ): MutationPostResult
    updatePost(
      id: String!
      types: [String]
      title: String!
      context: String!
    ): MutationPostResult
    deletePost(id: String!): MutationPostResult
  }
`;
