"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const postResolvers_1 = require("./postResolvers");
const postTypeResolver_1 = require("./postTypeResolver");
exports.resolvers = [postResolvers_1.postResolvers, postTypeResolver_1.postTypeResolvers];
