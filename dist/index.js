"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const resolvers_1 = require("./resolvers");
const schema_1 = require("./schema");
const port = process.env.PORT || 80;
const server = new apollo_server_1.ApolloServer({ resolvers: resolvers_1.resolvers, typeDefs: schema_1.typeDefs });
server.listen({ port }, () => console.log(`Server runs at: http://localhost:${port}`));
