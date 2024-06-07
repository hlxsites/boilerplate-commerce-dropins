import {
  assertCartSummaryProduct,
  assertTitleHasLink,
  assertProductImage,
} from '../../assertions';

describe('Verify cart page with simple product', () => {
  it('Verify guest user can see simple product details', () => {
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

    cy.get('#addToCart').click();

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

    cy.get('#addToCart2').click();

    assertCartSummaryProduct(
      'Gold Sol Earrings',
      'VA16-GO-NA',
      '1',
      '$48.00',
      '$48.00$38.00',
      '0'
    )('.cart-cart');

    assertCartSummaryProduct(
      'Gold Sol Earrings',
      'VA16-GO-NA',
      '1',
      '$48.00',
      '$48.00$38.00',
      '0'
    )('.cart-mini-cart');

    // Check if the product position is not changed after updating the quantity
    cy.get('.cart-cart .dropin-incrementer__decrease-button').last().click();

    assertCartSummaryProduct(
      'Gold Omni Bangle Set',
      'VA19-GO-NA',
      '1',
      '$98.00',
      '$98.00$78.00',
      '1'
    )('.cart-cart');

    assertCartSummaryProduct(
      'Gold Omni Bangle Set',
      'VA19-GO-NA',
      '1',
      '$98.00',
      '$98.00$78.00',
      '1'
    )('.cart-mini-cart');

    cy.get('.cart-cart .dropin-cart-item__remove').last().click();

    assertCartSummaryProduct(
      'Gold Sol Earrings',
      'VA16-GO-NA',
      '1',
      '$48.00',
      '$48.00$38.00',
      '0'
    )('.cart-cart');

    assertCartSummaryProduct(
      'Gold Sol Earrings',
      'VA16-GO-NA',
      '1',
      '$48.00',
      '$48.00$38.00',
      '0'
    )('.cart-mini-cart');

    cy.get('#addToCart3').click();

    assertCartSummaryProduct(
      'Gold Cirque Earrings',
      'VA18-GO-NA',
      '1',
      '$68.00',
      '$68.00$54.40',
      '0'
    )('.cart-cart');

    assertCartSummaryProduct(
      'Gold Cirque Earrings',
      'VA18-GO-NA',
      '1',
      '$68.00',
      '$68.00$54.40',
      '0'
    )('.cart-mini-cart');

    cy.get('.dropin-cart-item__remove').first().click();

    assertCartSummaryProduct(
      'Gold Sol Earrings',
      'VA16-GO-NA',
      '1',
      '$48.00',
      '$48.00$38.00',
      '0'
    )('.cart-cart');

    assertCartSummaryProduct(
      'Gold Sol Earrings',
      'VA16-GO-NA',
      '1',
      '$48.00',
      '$48.00$38.00',
      '0'
    )('.cart-mini-cart');

    cy.get('.dropin-cart-item__remove').first().click();

    cy.get('.cart-cart').contains('Shopping Cart').should('be.visible');

    cy.get('.cart-cart').contains('Shopping Cart').should('be.visible');

    cy.get('.cart-cart').contains('Your cart is empty').should('be.visible');
    cy.get('.cart-mini-cart')
      .contains('Your cart is empty')
      .should('be.visible');

    cy.get('.cart-cart').contains('Start shopping').should('be.visible');
    cy.get('.cart-mini-cart').contains('Start shopping').should('be.visible');
  });
});
