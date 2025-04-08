import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://www.jdsports.co.uk",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "**/*.spec.ts",
    experimentalOriginDependencies: true,
    video: false,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    requestTimeout: 10000,
    responseTimeout: 30000,
    watchForFileChanges: false,
    retries: {
      runMode: 1,
      openMode: 0,
    },
    viewportWidth: 1280,
    viewportHeight: 720,
    videoCompression: 32,
    trashAssetsBeforeRuns: true,
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    fixturesFolder: "cypress/fixtures",
    downloadsFolder: "cypress/downloads",
    supportFile: "cypress/support/e2e.ts",
    screenshotOnRunFailure: true,
    experimentalModifyObstructiveThirdPartyCode: true,
    injectDocumentDomain: true,
  },
});
