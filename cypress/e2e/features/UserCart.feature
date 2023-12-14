Feature: Add to Cart
 
  Scenario: As a user, I'm able to add a product into cart
    Given I visit the app url
    When I see the 'ReactMeals' in header
    And I add 'Sushi' to the cart
    And I click on 'Your Cart' button
    Then I see 'Sushi' in the cart


  Scenario: As a user, I'm able to increase the quantity of a product into cart
    Given I visit the app url
    When I see the 'ReactMeals' in header
    And I add 'Sushi' to the cart
    And I click on 'Your Cart' button
    Then I see 'Sushi' in the cart
    And I click on '+' button
    Then I see quantity get increased