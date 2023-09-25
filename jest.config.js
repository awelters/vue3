module.exports = {
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  testEnvironmentOptions: {
    customExportConditions: ['node']
  },
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': '@vue/vue3-jest'
  },
  moduleNameMapper: {
    '^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  setupFilesAfterEnv: ['<rootDir>/tests/unit/setupFilesAfterEnv.ts'],
  setupFiles: ['<rootDir>/tests/unit/setupFile.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/tests/e2e'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 66,
      lines: 80,
      statements: 80
    }
  }
}
