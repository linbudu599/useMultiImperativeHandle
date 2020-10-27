export default {
  automock: false,
  bail: 5,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['./src/useMultiImperativeHandle.tsx'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageProvider: 'v8',
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  notify: true,
  preset: 'ts-jest',
  runner: 'jest-runner',
  setupFilesAfterEnv: ['jest-enzyme'],
  testEnvironment: 'jest-environment-jsdom',
  testEnvironmentOptions: {
    enzymeAdapter: 'react16',
  },
  maxWorkers: '80%',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/'],
  testRunner: 'jasmine2',
  timers: 'real',
  transform: { '\\.tsx?$': 'ts-jest' },
};
