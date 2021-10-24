"use strict";
exports.__esModule = true;
var config = {
    preset: "ts-jest",
    testEnvironment: "node",
    testPathIgnorePatterns: ["/node_modules/"],
    verbose: true,
    roots: ["<rootDir>"],
    collectCoverage: true,
    coverageDirectory: "coverage"
};
exports["default"] = config;
