import { ObjectId } from "bson";
import { prisma } from "./prismaConnection";

export const postTypeResolvers = {
  Query: {
    postTypes: async (parent: any, args: any) => {
      try {
        return {
          data: await prisma.postType.findMany({
            include: {
              posts: true,
            },
          }),
        };
      } catch (err) {
        return {
          error: "error",
        };
      }
    },
    postType: async (
      parent: any,
      args: {
        name: string;
      }
    ) => {
      try {
        return {
          data: await prisma.postType.findMany({
            where: {
              type: args.name,
            },
            include: {
              posts: true,
            },
          }),
        };
      } catch (err) {
        return {
          error: "error",
        };
      }
    },
  },
  Mutation: {
    addPostType: async (
      parent: any,
      args: {
        type: string;
      }
    ) => {
      try {
        const result = await prisma.postType.create({
          data: {
            type: args.type,
          },
        });
        return {
          data: result,
        };
      } catch (err) {
        return {
          result: "error",
        };
      }
    },
  },
};
