Feature: Create note functionality

  Background:
    Given User Navigates to login page
    Then User login successfully
    Given User is on the Home page

  Scenario: Login, create note, and logout
    When User create new Note
    When User logout
    Then User should be on login page


  Scenario: Login and open existing note 
    When User choose an existing note
    Then Note title should match previously created note
