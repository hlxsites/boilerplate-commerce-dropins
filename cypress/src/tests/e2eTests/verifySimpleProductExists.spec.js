import {
  assertCartSummaryProduct,
  assertTitleHasLink,
  assertProductImage,
  assertSelectedOptions,
} from '../../assertions';

describe('Verify cart page with simple product', () => {
  it('Verify guest user can see simple product details', () => {
    cy.visit('');

    cy.checkBaseUrl();

    cy.get('#toggleMiniCart').click();

    cy.get('.cart-cart').contains('Shopping Cart').should('be.visible');

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
  });

  it('Verify guest user can see gift card physical product details', () => {
    cy.visit('');

    cy.checkBaseUrl();

    cy.get('#toggleMiniCart').click();

    cy.get('.cart-cart').contains('Shopping Cart').should('be.visible');

    cy.get('#addToCart9').scrollIntoView();
    cy.get('#addToCart8').click();

    assertCartSummaryProduct(
      'Gift Card physical',
      'Gift Card physical',
      '1',
      '$25.00',
      '$25.00',
      '0'
    )('.cart-cart');

    assertCartSummaryProduct(
      'Gift Card physical',
      'Gift Card physical',
      '1',
      '$25.00',
      '$25.00',
      '0'
    )('.cart-mini-cart');

    assertTitleHasLink(
      'Gift Card physical',
      'new-products3/gift-card-physical'
    )('.cart-cart');

    assertTitleHasLink(
      'Gift Card physical',
      'new-products3/gift-card-physical'
    )('.cart-mini-cart');

    assertProductImage('/thumbnail.jpg')('.cart-cart');
    assertProductImage('/thumbnail.jpg')('.cart-mini-cart');

    cy.get('.cart-cart .dropin-incrementer__increase-button').click();

    assertCartSummaryProduct(
      'Gift Card physical',
      'Gift Card physical',
      '2',
      '$25.00',
      '$50.00',
      '0'
    )('.cart-cart');

    assertSelectedOptions('To: Recipient')('.cart-cart');
    assertSelectedOptions('From: Sender')('.cart-cart');
    assertSelectedOptions('Note: My custom message')('.cart-cart');

    assertCartSummaryProduct(
      'Gift Card physical',
      'Gift Card physical',
      '2',
      '$25.00',
      '$50.00',
      '0'
    )('.cart-mini-cart');

    assertSelectedOptions('To: Recipient')('.cart-mini-cart');
    assertSelectedOptions('From: Sender')('.cart-mini-cart');
    assertSelectedOptions('Note: My custom message')('.cart-mini-cart');
  });

  it('Verify guest user can see gift card virtual product details', () => {
    cy.visit('');

    cy.checkBaseUrl();

    cy.get('#toggleMiniCart').click();

    cy.get('.cart-cart').contains('Shopping Cart').should('be.visible');

    cy.get('#addToCart9').scrollIntoView();
    cy.get('#addToCart9').click();

    assertCartSummaryProduct(
      'Gift Card virtual',
      'Gift Card virtual',
      '1',
      '$50.00',
      '$50.00',
      '0'
    )('.cart-cart');

    assertCartSummaryProduct(
      'Gift Card virtual',
      'Gift Card virtual',
      '1',
      '$50.00',
      '$50.00',
      '0'
    )('.cart-mini-cart');

    assertTitleHasLink(
      'Gift Card virtual',
      'new-products3/gift-card-virtual'
    )('.cart-cart');

    assertTitleHasLink(
      'Gift Card virtual',
      'new-products3/gift-card-virtual'
    )('.cart-mini-cart');

    assertProductImage('/thumbnail.jpg')('.cart-cart');
    assertProductImage('/thumbnail.jpg')('.cart-mini-cart');

    cy.get('.cart-cart .dropin-incrementer__increase-button').click();

    assertCartSummaryProduct(
      'Gift Card virtual',
      'Gift Card virtual',
      '2',
      '$50.00',
      '$100.00',
      '0'
    )('.cart-cart');

    assertSelectedOptions('To: John')('.cart-cart');
    assertSelectedOptions('From: Jane')('.cart-cart');
    assertSelectedOptions(
      'Note: My very long custom message for virtual product. My very long custom message for virtual product. My very long custom message for virtual product. My very long custom message for virtual product.'
    )('.cart-cart');

    assertCartSummaryProduct(
      'Gift Card virtual',
      'Gift Card virtual',
      '2',
      '$50.00',
      '$100.00',
      '0'
    )('.cart-mini-cart');

    assertSelectedOptions('To: John (recipient@email.com)')('.cart-mini-cart');
    assertSelectedOptions('From: Jane (sender@email.com)')('.cart-mini-cart');
    assertSelectedOptions(
      'Note: My very long custom message for virtual product. My very long'
    )('.cart-mini-cart');
  });

  it('Verify guest user can see customizable product details', () => {
    cy.visit('');

    cy.checkBaseUrl();

    cy.get('#toggleMiniCart').click();

    cy.get('.cart-cart').contains('Shopping Cart').should('be.visible');

    cy.get('#addToCart10').scrollIntoView();
    cy.get('#addToCart10').click();

    assertCartSummaryProduct(
      'simple with custom options',
      'simple with custom options',
      '1',
      '$122.00',
      '$122.00',
      '0'
    )('.cart-cart');

    assertSelectedOptions('Text Field 1: Text Field 1')('.cart-cart');
    assertSelectedOptions('Text Field 2: Text Field 2')('.cart-cart');
  });
});
