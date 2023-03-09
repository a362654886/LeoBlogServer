import { ApolloServer, gql } from "apollo-server";
import { resolvers } from "./resolvers";
import { postDefs } from "./schema/postSchema";
import { postTypeDefs } from "./schema/postTypeSchema";

const port = process.env.PORT || 80;

const typeDefs = gql`
  ${postTypeDefs}
  ${postDefs}
`;

const server = new ApolloServer({ resolvers, typeDefs });

server.listen({ port }, () =>
  console.log(`Server runs at: http://localhost:${port}`)
);
