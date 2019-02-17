Feature: The Contact App

  I want to open a contact app Home page

  @focus
  Scenario: Opening a contact app Home page
    Given I open Home page
    Then I see "React App" in the title

  @focus
  Scenario: Opening a contact app Home page
    Given I open Home page
    Then I see "Contacts" in the heading

  @focus
  Scenario: Rendering all elements
    Given I open Home page
    Then I see input box 
