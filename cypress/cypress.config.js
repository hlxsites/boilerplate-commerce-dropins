import { defineConfig } from 'cypress';
import dotenvPlugin from 'cypress-dotenv';
import { excPlugin } from '@exc/cypress-automation-tools';

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
    runMode: 2,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      config = dotenvPlugin(config);
      return excPlugin({ config, on });
    },
    baseUrl: 'https://main--boilerplate-commerce-dropins--hlxsites.hlx.page/',
    supportFile: 'src/support/index.js',
    specPattern: 'src/tests/**/*.spec.js',
  },
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
});
