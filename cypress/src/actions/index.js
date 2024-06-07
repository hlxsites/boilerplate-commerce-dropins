import * as fields from '../fields/index';

export const setGuestEmail = (customerEmail) => {
  cy.get(fields.shippingFormGuestEmail).clear().type(customerEmail);
};

export const submitEstimatedShipping = () => {
  cy.get(fields.estimatedShippingSubmit).click();
};

export const login = (email, password) => {
  cy.get('#login').click();
  cy.get(fields.authSignInEmailField).type(email);
  cy.get(fields.authSignInPasswordField).type(password);
  cy.get(fields.authSignInSubmitButton).click();
  cy.get('#logout').should('be.visible');
};

export const emptyCart = () => {
  // Add at least 1 item so the assertion can pass
  cy.reload();
  cy.get('#addToCart').click();
  cy.get('.cart-cart').contains('Gold Omni Bangle Set').should('be.visible');
  cy.wait(5000);

  //loop through all the cart items and remove them
  cy.get('.dropin-cart-item').each((item, index) => {
    cy.get(item).within(() => {
      cy.get('.dropin-cart-item__remove').click();
    });
  });

  cy.get('.cart-cart').contains('Your cart is empty').should('be.visible');
};
