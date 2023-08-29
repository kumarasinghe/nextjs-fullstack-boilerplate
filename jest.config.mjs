import nextJest from "next/jest.js";

const createJestConfig = nextJest({
    // project root containing next.config.js and .env to load in the test environment
    dir: "./",
});

/** @type {import('jest').Config} */
const config = {
    /* add more setup options before each test is run */
    testEnvironment: "jest-environment-jsdom",
};

export default createJestConfig(config);
