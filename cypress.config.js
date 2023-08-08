const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 1500,
  viewportWidth: 1920,
  viewportHeight: 1080,
  pageloadTimeout: 85000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
