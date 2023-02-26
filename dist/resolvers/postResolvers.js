"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postResolvers = void 0;
const bson_1 = require("bson");
const prismaConnection_1 = require("./prismaConnection");
exports.postResolvers = {
    Query: {
        posts: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                console.log("s");
                return {
                    data: yield prismaConnection_1.prisma.post.findMany({
                        include: {
                            types: true,
                        },
                    }),
                };
            }
            catch (err) {
                return {
                    error: "error",
                };
            }
        }),
        post: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                return {
                    data: yield prismaConnection_1.prisma.post.findUnique({
                        where: {
                            id: new bson_1.ObjectId(args.id).toString(),
                        },
                    }),
                };
            }
            catch (err) {
                return {
                    error: "error",
                };
            }
        }),
        postTypes: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                return {
                    data: yield prismaConnection_1.prisma.postType.findMany({
                        include: {
                            posts: true,
                        },
                    }),
                };
            }
            catch (err) {
                return {
                    error: "error",
                };
            }
        }),
    },
    Mutation: {
        addPost: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const ids = args.types.map((type) => new bson_1.ObjectId(type).toString());
                const result = yield prismaConnection_1.prisma.post.create({
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
            }
            catch (err) {
                return {
                    error: "error",
                };
            }
        }),
        addPostType: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const result = yield prismaConnection_1.prisma.postType.create({
                    data: {
                        type: args.type,
                    },
                });
                return {
                    data: result,
                };
            }
            catch (err) {
                return {
                    result: "error",
                };
            }
        }),
    },
};
