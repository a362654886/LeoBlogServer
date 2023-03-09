import { postResolvers } from "./postResolvers";
import { postTypeResolvers } from "./postTypeResolver";

export const resolvers = [postResolvers, postTypeResolvers];
