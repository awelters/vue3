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
    baseUrl: 'http://localhost:5173',
    specPattern: 'tests/e2e/specs/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'tests/e2e/support/e2e.ts',
    videosFolder: 'tests/e2e/videos'
  }
})
