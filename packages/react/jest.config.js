module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.(t|j)s(x)',
    '!src/components/Icons/**/*',
    '!**/node_modules/**',
  ],
  setupFilesAfterEnv: ['./.jest/setup.ts'],
  testMatch: [
    '<rootDir>/src/**/*.test.(t|j)sx',
    '<rootDir>/src/**/*.test.(t|j)s',
  ],
}
