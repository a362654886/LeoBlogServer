"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const resolvers_1 = require("./resolvers");
const postSchema_1 = require("./schema/postSchema");
const postTypeSchema_1 = require("./schema/postTypeSchema");
const port = process.env.PORT || 80;
const typeDefs = (0, apollo_server_1.gql) `
  ${postTypeSchema_1.postTypeDefs}
  ${postSchema_1.postDefs}
`;
const server = new apollo_server_1.ApolloServer({ resolvers: resolvers_1.resolvers, typeDefs });
server.listen({ port }, () => console.log(`Server runs at: http://localhost:${port}`));
