Feature: Creating note 

  Background:
    Given User navigates to login page
    When User logins successfully
    Then User should be on home page

  Scenario: Login and write a note followed by a logout
    When User creates new note "This is a test note"
    And User logouts
    Then User should see login page

  Scenario: Login and open existing note 
    When User chooses existing note
    Then Note title should match previously created note
  
