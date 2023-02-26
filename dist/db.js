"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.posts = exports.types = void 0;
exports.types = [
    {
        _id: 1,
        type: "graphQl",
    },
];
exports.posts = [
    {
        _id: 1,
        title: "test title 1",
        context: "test context 1",
        createAt: new Date(),
        types: exports.types,
    },
    {
        _id: 1,
        title: "test title 2",
        context: "test context 2",
        createAt: new Date(),
        types: exports.types,
    },
];
