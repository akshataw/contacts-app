/* global then, when, given */
import { Given, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'http://localhost:3000'

Given('I open Home page', () => {
  cy.visit(url);
});

Then(`I see input box`, () => {
  // cy.contains('#inputBox');
  cy.get('input[type="text"]');
  cy.get('.add-contact')
  .contains('Add');
  // cy.title().should('include', title);
});
