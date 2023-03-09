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
exports.postTypeResolvers = void 0;
const prismaConnection_1 = require("./prismaConnection");
exports.postTypeResolvers = {
    Query: {
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
        postType: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                return {
                    data: yield prismaConnection_1.prisma.postType.findMany({
                        where: {
                            type: args.name,
                        },
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
