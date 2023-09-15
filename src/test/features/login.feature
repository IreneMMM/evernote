Feature: User Login functionality

  Background:
    Given User Navigate to the application
    When User click on login link 
    Then User Navigate to the login page

  Scenario: Login with valid credentials
    When User logs in with valid credentials
    Then User should be logged in successfully

  Scenario: Login with invalid credentials   
    When User logs in with invalid credentials
    Then User should receive error message
    