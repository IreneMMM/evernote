Feature: User Authentication tests

  Background: 
    Given User navigates to the application
    And User click on the login link
    And User navigates to the login page

  Scenario: Successful login using email
    And User enter the username as "tt4999241@gmail.com"
    And User enter the password as "test@1000"
    When User click on the login button
    Then Login should be success

  Scenario: Unsuccessful login using email
    Given User enter the username as "koushik"
    Given User enter the password as "Passkoushik"
    When User click on the login button
    But Login should fail
