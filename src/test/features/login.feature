Feature: User Login 

  Background:
    Given User navigates to application
    When User clicks on login link 
    Then User should be on login page

  Scenario: Login with valid credentials
    When User logs in with valid credentials
    Then User should be logged in successfully

  Scenario: Login with invalid credentials   
    When User logs in with invalid credentials
    Then User should receive error message
    