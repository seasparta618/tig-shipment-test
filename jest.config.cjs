module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^~/(.*)$': '<rootDir>/src/$1',
    '^~/graphql/(.*)$': '<rootDir>/src/graphql/$1',
    '^~/type/(.*)$': '<rootDir>/src/types/$1',
    '^~/utils/(.*)$': '<rootDir>/src/utils/$1',
    '^~/mock/(.*)$': '<rootDir>/src/mock/$1',
  },
  transform: {},
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
    },
  },
};
