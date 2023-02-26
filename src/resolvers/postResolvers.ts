import { ObjectId } from "bson";
import { prisma } from "./prismaConnection";

export const postResolvers = {
  Query: {
    posts: async (parent: any, args: any) => {
      try {
        console.log("s")
        return {
          data: await prisma.post.findMany({
            include: {
              types: true,
            },
          }),
        };
      } catch (err) {
        return {
          error: "error",
        };
      }
    },
    post: async (parent: any, args: { id: string }) => {
      try {
        return {
          data: await prisma.post.findUnique({
            where: {
              id: new ObjectId(args.id).toString(),
            },
          }),
        };
      } catch (err) {
        return {
          error: "error",
        };
      }
    },
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
  },
  Mutation: {
    addPost: async (
      parent: any,
      args: {
        types: string[];
        title: string;
        context: string;
      }
    ) => {
      try {
        const ids = args.types.map((type) => new ObjectId(type).toString());

        const result = await prisma.post.create({
          data: {
            typeIds: ids,
            title: args.title,
            context: args.context,
            createAt: new Date().valueOf().toString(),
          },
        });
        return {
          data: result,
        };
      } catch (err) {
        return {
          error: "error",
        };
      }
    },
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
