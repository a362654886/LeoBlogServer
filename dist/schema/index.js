"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_1 = require("apollo-server");
const postSchema_1 = require("./postSchema");
const postTypeSchema_1 = require("./postTypeSchema");
exports.typeDefs = (0, apollo_server_1.gql) `
  ${postTypeSchema_1.postTypeDefs}
  ${postSchema_1.postDefs}
`;
