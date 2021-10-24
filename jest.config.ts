import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["/node_modules/"],
  verbose: true,
  roots: ["<rootDir>"],
  collectCoverage: true,
  coverageDirectory: "coverage",
};

export default config;
