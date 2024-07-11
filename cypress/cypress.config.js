const { defineConfig } = require('cypress')


module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  screenshotsFolder: 'screenshots',
  downloadsFolder: 'downloads',
  fixturesFolder: 'src/fixtures',
  video: false,
  pageLoadTimeout: 30000,
  requestTimeout: 30000,
  viewportHeight: 900,
  viewportWidth: 1440,
  scrollBehavior: 'nearest',
  trashAssetsBeforeRuns: false,
  chromeWebSecurity: false,
  retries: {
    runMode: 2,
  },
  e2e: {
    baseUrl: 'https://main--boilerplate-commerce-dropins--hlxsites.hlx.page/',
    supportFile: 'src/support/index.js',
    specPattern: 'src/tests/**/*.spec.js',
  },
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
});
