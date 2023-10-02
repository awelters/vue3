import { defineConfig } from 'cypress'

module.exports = defineConfig({
  chromeWebSecurity: false,
  experimentalStudio: true,
  retries: {
    runMode: 2,
    openMode: 0,
  },
  video: false,
  viewportWidth: 1440,
  viewportHeight: 900,
  watchForFileChanges: false,
  numTestsKeptInMemory: 0,
  e2e: {
    experimentalRunAllSpecs: true,
    testIsolation: false,
    baseUrl: 'http://localhost:4173',
    specPattern: 'cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.ts',
    videosFolder: '/cypress/videos/'
  }
})
