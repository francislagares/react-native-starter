import type { Config } from 'jest';

const config: Config = {
  preset: 'jest-expo',
  displayName: 'MOBILE-EXPO',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
  verbose: true,
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    '**/*.{ts,tsx}', // Include TypeScript and TSX files
    '!**/node_modules/**', // Exclude node_modules
    '!**/ios/**', // Exclude iOS files
    '!**/android/**', // Exclude Android files
    '!**/tests/**', // Exclude test files
    '!**/jest.config.ts', // Exclude Jest configuration file
    '!**/*.d.ts', // Exclude all declaration files (.d.ts)
  ],
  clearMocks: true,
  testPathIgnorePatterns: [
    '/node_modules/',
    '/android/',
    '/ios/',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Map `@/` to the `src` directory
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
};

export default config;
