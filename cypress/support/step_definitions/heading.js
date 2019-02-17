/* global then, when, given */
import { Given, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'http://localhost:3000'
Given('I open Home page', () => {
  cy.visit(url);
});

Then(`I see {string} in the heading`, (heading) => {
  // cy.title().should('include', title);
  cy.contains('Contacts');
});
