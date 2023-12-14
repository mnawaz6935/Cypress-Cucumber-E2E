import { When, Then,Given } from '@badeball/cypress-cucumber-preprocessor'

Given('I visit the app url', () => {
  cy.visit(Cypress.env('appUrl'))
})

When("I see the 'ReactMeals' in header", () => {
  cy.contains('ReactMeals').should('be.visible')
})

Then("I add 'Sushi' to the cart", () => {
  cy.get('section.AvailableMeals_meals__VDMeE:nth-child(2) >* li:nth-child(1)>* button').should('be.visible').click()
})

Then("I see 'Sushi' in the cart", () => {
  cy.get('ul.Cart_cart-items__GzJDe').contains('Sushi').should('be.visible');
})

Then("I click on 'Your Cart' button", () => {
  cy.contains('Your Cart').should('exist').click()
})

Then("I click on '+' button", () => {
  cy.get('.CartItem_amount__rm6jm') // Locate the <span> element using its class
  .invoke('text') // Get the text content of the element
  .then(text => {
    const value = parseInt(text.trim().split(' ')[1]); // Extract the integer value from the text
    cy.wrap(value).as('cartCount'); // Store the value in the 'temp' variable for later use
    cy.get('div.CartItem_actions__PRQYW > button:nth-child(2)').should('exist').click()
  });
})

Then('I see quantity get increased', () => {
  cy.get('@cartCount').then(count => {
    cy.get('.CartItem_amount__rm6jm').should('be.visible').should('have.text',count)
  })
  
})

Then('I enter {string} in computer name field', (item) => {
  const computerName = item as string
  if (item) {
    cy.get('#name').should('be.visible').type(computerName)
  }
})

Then('I enter {string} in introduced field', (item) => {
  const introducedDate = item as string
  if (item) {
    cy.get('#introduced').should('be.visible').type(introducedDate)
  }
})

Then('I enter {string} in discontinued field', (item) => {
  const discontinuedDate = item as string
  if (item) {
    cy.get('#discontinued').should('be.visible').type(discontinuedDate)
  }
})

Then('I click on company dropdown and select option {string}', (item) => {
  const option = item as string
  cy.get('#company').should('be.visible').select(option)
})

Then("I mistakenly click on 'Cancel' button", () => {
  cy.contains('Cancel').should('be.visible').click()
})

Then('I see successfully created computer alert message', () => {
  cy.get('.alert-message')
    .should('be.visible')
    .invoke('text')
    .then((text) => {
      expect(text).equal('Done !  Computer Test Computer has been created')
    })
})
