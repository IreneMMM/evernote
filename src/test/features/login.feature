Feature: User Login
  As a user
  I want to login to the site
  So that I can create notes 

  Scenario Outline: Login using email
    Given User navigates to the application
    Given User accepts cookies
    And User click on the login link
    And User navigates to the login page
    And User enter the username as <email>
    And User click on the login button
    And User enter the password as <password>
    When User press on the login button
    Then User receives title as <title>

    Examples: 
      | email                 | password    | title                    |
      # | "tt4999241@gmail.com" | "test@1000" | "Главная - Evernote"     |
       | "menshovaiv@gmail.com" | "Mm@30011981" | "Главная - Evernote"     |
      # | "test@test.test"      | "test"      | "Требуется сброс пароля" |
