Feature: User Login 

  Background:
    Given User navigates to application
    When User clicks on login link 
    Then User should be on login page

  Scenario: Successful login using email
    When User logs in with valid credentials
    Then User should be logged in successfully

  Scenario: Unsuccessful login using email
    When User logs in with invalid credentials
    Then User should receive error message
    