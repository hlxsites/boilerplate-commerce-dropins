import {
  assertCartSummaryProduct,
  assertTitleHasLink,
  assertProductImage,
} from '../../assertions';

describe('Verify simple product actions on cart page', () => {
  it('Verify guest user can interact with simple product in cart', () => {
    cy.visit('');
    cy.checkBaseUrl();

    cy.get('.cart-cart').contains('Shopping Cart').should('be.visible');

    cy.get('#toggleMiniCart').click();

    cy.get('#addToCart').click();

    assertCartSummaryProduct(
      'Gold Omni Bangle Set',
      'VA19-GO-NA',
      '1',
      '$98.00',
      '$98.00$78.00',
      '0'
    )('.cart-cart');

    assertCartSummaryProduct(
      'Gold Omni Bangle Set',
      'VA19-GO-NA',
      '1',
      '$98.00',
      '$98.00$78.00',
      '0'
    )('.cart-mini-cart');

    assertTitleHasLink(
      'Gold Omni Bangle Set',
      'venia-accessories/venia-jewelry/gold-omni-bangle-set'
    )('.cart-cart');

    assertTitleHasLink(
      'Gold Omni Bangle Set',
      'venia-accessories/venia-jewelry/gold-omni-bangle-set'
    )('.cart-mini-cart');

    assertProductImage('/va19-go_main.jpg')('.cart-cart');

    assertProductImage('/va19-go_main.jpg')('.cart-mini-cart');

    cy.get('.cart-cart .dropin-incrementer__increase-button').click();

    assertCartSummaryProduct(
      'Gold Omni Bangle Set',
      'VA19-GO-NA',
      '2',
      '$98.00',
      '$196.00$156.00',
      '0'
    )('.cart-cart');

    assertCartSummaryProduct(
      'Gold Omni Bangle Set',
      'VA19-GO-NA',
      '2',
      '$98.00',
      '$196.00$156.00',
      '0'
    )('.cart-mini-cart');

    cy.get('.cart-cart .dropin-incrementer__decrease-button').click();

    assertCartSummaryProduct(
      'Gold Omni Bangle Set',
      'VA19-GO-NA',
      '1',
      '$98.00',
      '$98.00$78.00',
      '0'
    )('.cart-cart');

    assertCartSummaryProduct(
      'Gold Omni Bangle Set',
      'VA19-GO-NA',
      '1',
      '$98.00',
      '$98.00$78.00',
      '0'
    )('.cart-mini-cart');

    cy.get('.cart-cart .dropin-cart-item__remove').click();

    cy.get('.cart-cart').contains('Shopping Cart').should('be.visible');

    cy.get('.cart-cart').contains('Your cart is empty').should('be.visible');
    cy.get('.cart-mini-cart')
      .contains('Your cart is empty')
      .should('be.visible');

    cy.get('.cart-cart').contains('Start shopping').should('be.visible');
    cy.get('.cart-mini-cart').contains('Start shopping').should('be.visible');
  });
});
