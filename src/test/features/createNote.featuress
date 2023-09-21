Feature: Creating note 

  Background:
    Given User navigates to login page
    When User logins successfully
    Then User is on home page

  Scenario: Login, create note, and logout
    When User creates new note
    And User logouts
    Then User should see login page


  Scenario: Login and open existing note 
    When User chooses existing note
    Then Note title should match previously created note
  
