const { defineConfig } = require('cypress')


module.exports = defineConfig({
  defaultCommandTimeout: 60000,
  screenshotsFolder: 'screenshots',
  downloadsFolder: 'downloads',
  fixturesFolder: 'src/fixtures',
  video: false,
  pageLoadTimeout: 60000,
  requestTimeout: 60000,
  viewportHeight: 900,
  viewportWidth: 1440,
  scrollBehavior: 'nearest',
  trashAssetsBeforeRuns: false,
  chromeWebSecurity: false,
  retries: {
    runMode: 0,
  },
  e2e: {
    baseUrl: 'http://localhost:3000/',
    supportFile: 'src/support/index.js',
    specPattern: 'src/tests/**/*.spec.js',
  },
  env: {
    graphqlEndPoint: 'https://integration-5ojmyuq-7yvbzwvtkgerq.us-4.magentosite.cloud/graphql',
  },
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
});
