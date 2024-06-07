import { submitEstimatedShipping } from '../../actions';
import {
  assertCartSummaryProduct,
  assertEstimatedShippingDestinationText,
} from '../../assertions';
import {
  estimatedShippingAlternativeFieldLink,
  estimatedShippingCountrySelector,
  estimatedShippingStateInput,
  estimatedShippingStateSelector,
  estimatedShippingZipField,
} from '../../fields';

describe('Verify estimated shipping', () => {
  it('works with country only', () => {
    cy.visit('');
    cy.checkBaseUrl();
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

    submitEstimatedShipping();

    assertEstimatedShippingDestinationText('US');
  });

  it('works with country and zip', () => {
    cy.visit('');
    cy.checkBaseUrl();
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

    cy.get(estimatedShippingZipField).type('10001');

    submitEstimatedShipping();

    assertEstimatedShippingDestinationText('10001');
  });

  it('works with country and state (select)', () => {
    cy.visit('');
    cy.checkBaseUrl();
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

    cy.get(estimatedShippingAlternativeFieldLink).click();

    cy.get(estimatedShippingStateSelector).select('NY');

    submitEstimatedShipping();

    assertEstimatedShippingDestinationText('NY');
  });

  it('works with country and state (input)', () => {
    cy.visit('');
    cy.checkBaseUrl();
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

    cy.get(estimatedShippingAlternativeFieldLink).click();

    cy.get(estimatedShippingCountrySelector).select('GB');
    cy.get(estimatedShippingCountrySelector).should('have.value', 'GB');

    cy.get(estimatedShippingStateInput).type('London');

    submitEstimatedShipping();

    assertEstimatedShippingDestinationText('London');
  });
});
