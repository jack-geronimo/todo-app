import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {

    baseUrl: 'http://localhost:3000', // Ersetze mit der URL deiner Anwendung
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Testdateien-Suchmuster
    supportFile: 'cypress/support/e2e.ts',

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
