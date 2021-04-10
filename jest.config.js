// jest.config.js
const { defaults } = require('jest-config');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',

  globals: {
    'ts-jest': {
      tsconfig: 'jest.tsconfig.json',
    },
  },

  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
