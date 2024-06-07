import { login, emptyCart } from '../../actions';

describe('On authentication', () => {
  it('Guest cart should merge', () => {
    cy.visit('', {
      onBeforeLoad(win) {
        cy.stub(win.console, 'group').as('consoleLog');
      }
    });
    cy.checkBaseUrl();
    cy.get('.cart-cart').contains('Shopping Cart').should('be.visible');

    // Open auth modal and login with credentials
    login(
      'test.cypress@fake.email',
      'https://cartmfe.dummycachetest.com/!!123'
    );

    cy.wait(5000);
    // Start out with an empty cart
    emptyCart();

    // Add a single product to the auth cart
    cy.get('#addToCart').click();
    cy.get('.cart-cart').contains('Gold Omni Bangle Set').should('be.visible');
    cy.get('.dropin-cart-item').should('have.lengthOf', 1);

    cy.get('#logout').click();

    cy.get('.cart-cart').contains('Your cart is empty').should('be.visible');

    // Add a different product to the guest cart
    cy.get('#addToCart4').click();
    cy.get('.cart-cart').contains('Chloe Silk Shell').should('be.visible');
    cy.get('.dropin-cart-item').should('have.lengthOf', 1);

    login(
      'test.cypress@fake.email',
      'https://cartmfe.dummycachetest.com/!!123'
    );

    // Auth cart should have both products
    cy.get('.cart-cart').contains('Gold Omni Bangle Set').should('be.visible');
    cy.get('.cart-cart').contains('Chloe Silk Shell').should('be.visible');
    cy.get('.dropin-cart-item').should('have.lengthOf', 3);

    // Verify that we emitted the cart/merged event
    cy.get('@consoleLog').should('have.been.calledWithMatch', 'cart/merged');

  });

  it('Guest cart should be empty when logged out (authentication is false)', () => {
    cy.visit('');
    cy.checkBaseUrl();
    cy.get('.cart-cart').contains('Shopping Cart').should('be.visible');

    // Open auth modal and login with credentials
    login(
      'test.cypress@fake.email',
      'https://cartmfe.dummycachetest.com/!!123'
    );

    // Start out with an empty cart
    emptyCart();

    // Add a single product to the auth cart
    cy.get('#addToCart').click();
    cy.get('.cart-cart').contains('Gold Omni Bangle Set').should('be.visible');

    cy.get('#logout').click();

    // Gues cart should be empty after logging out
    cy.get('.cart-cart').contains('Shopping Cart').should('be.visible');
    cy.get('.cart-cart').contains('Your cart is empty').should('be.visible');
  });
});
