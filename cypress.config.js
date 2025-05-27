const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

     // baseUrl: "https://formstone.it/components/dropdown/demo/",
     baseUrl: "https://demoqa.com/",
     specPattern: "**/e2e/**",
     viewportHeight: 1480,
     viewportWidth: 1920,
  },
});
