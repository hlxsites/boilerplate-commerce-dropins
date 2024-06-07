import { assertDiscountTotal, assertSubtotal } from '../../assertions';

describe('Verify price summary on cart', () => {
  beforeEach(() => {
    cy.visit('');
    cy.checkBaseUrl();
    cy.get('#toggleMiniCart').click();

    cy.get('.cart-cart').contains('Shopping Cart').should('be.visible');

    cy.get('#addToCart').click();

    cy.get('.cart-cart').contains('Order Summary').should('be.visible');
    cy.get('.cart-mini-cart').contains('Estimated Total').should('be.visible');
  });

  it('renders prices', () => {
    assertSubtotal('$78.00');
    assertDiscountTotal('-$15.60');
  });

  it('renders the checkout button', () => {
    cy.get('#toggleMiniCart').click();
    cy.get('.cart-cart a[data-testid="checkout-button"]').click();
    cy.url().should('include', '#checkout');

    cy.visit('');
    cy.checkBaseUrl();
    cy.get('#toggleMiniCart').click();
    cy.get('#addToCart').click();
    cy.get(
      '.cart-mini-cart .cart-mini-cart__footer__ctas a:first-of-type'
    ).click();
    cy.url().should('include', '#checkout');
  });

  it('renders the cart button', () => {
    cy.visit('');
    cy.checkBaseUrl();
    cy.get('#addToCart').click();
    cy.get('#toggleMiniCart').click();
    cy.get(
      '.cart-mini-cart .cart-mini-cart__footer__ctas a:last-of-type'
    ).click();
    cy.url().should('include', '#cart');
  });
});
