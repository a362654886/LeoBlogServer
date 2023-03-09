import { ObjectId } from "bson";
import { prisma } from "./prismaConnection";

export const postResolvers = {
  Query: {
    posts: async (parent: any, args: any) => {
      try {
        return {
          data: await prisma.post.findMany({
            include: {
              types: true,
            },
          }),
        };
      } catch (err) {
        console.log(err);
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
    updatePost: async (
      parent: any,
      args: {
        id: string;
        types: string[];
        title: string;
        context: string;
      }
    ) => {
      try {
        const ids = args.types.map((type) => new ObjectId(type).toString());

        const result = await prisma.post.update({
          where: {
            id: new ObjectId(args.id).toString(),
          },
          data: {
            typeIds: ids,
            title: args.title,
            context: args.context,
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
    deletePost: async (
      parent: any,
      args: {
        id: string;
      }
    ) => {
      try {
        const result = await prisma.post.delete({
          where: {
            id: new ObjectId(args.id).toString(),
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
  },
};
