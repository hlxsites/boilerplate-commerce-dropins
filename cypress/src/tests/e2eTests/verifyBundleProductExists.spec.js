import {
  assertCartSummaryProduct,
  assertTitleHasLink,
  assertProductImage,
  assertSelectedOptions,
} from '../../assertions';

describe('Verify cart page with bundle product', () => {
  it('Verify guest user can see dynamic bundle product details', () => {
    cy.visit('');

    cy.checkBaseUrl();

    cy.get('#toggleMiniCart').click();

    cy.get('.cart-cart').contains('Shopping Cart').should('be.visible');

    cy.get('#addToCart12').scrollIntoView();
    cy.get('#addToCart12').click();

    assertCartSummaryProduct(
      'Night Out Collection',
      'VA24',
      '1',
      '$248.40',
      '$248.40',
      '0'
    )('.cart-cart');

    assertCartSummaryProduct(
      'Night Out Collection',
      'VA24',
      '1',
      '$248.40',
      '$248.40',
      '0'
    )('.cart-mini-cart');

    assertTitleHasLink(
      'Night Out Collection',
      'venia-accessories/venia-jewelry/night-out-collection'
    )('.cart-cart');

    assertTitleHasLink(
      'Night Out Collection',
      'venia-accessories/venia-jewelry/night-out-collection'
    )('.cart-mini-cart');

    assertProductImage('/va24_main.jpg')('.cart-cart');
    assertProductImage('/va24_main.jpg')('.cart-mini-cart');
    
    cy.wait(2000)
    cy.get('.cart-cart .dropin-incrementer__increase-button').click();

    assertCartSummaryProduct(
      'Night Out Collection',
      'VA24',
      '2',
      '$248.40',
      '$496.80',
      '0'
    )('.cart-cart');

    assertSelectedOptions('Necklace: Carmina Necklace')('.cart-cart');
    assertSelectedOptions('Cirque Earrings: Gold Cirque Earrings')(
      '.cart-cart'
    );
    assertSelectedOptions('Sol Earrings: Gold Sol Earrings')('.cart-cart');
    assertSelectedOptions('Bangles: Gold Omni Bangle Set')('.cart-cart');

    assertCartSummaryProduct(
      'Night Out Collection',
      'VA24',
      '2',
      '$248.40',
      '$496.80',
      '0'
    )('.cart-mini-cart');

    assertSelectedOptions('Necklace: Carmina Necklace')('.cart-mini-cart');
    assertSelectedOptions('Cirque Earrings: Gold Cirque Earrings')(
      '.cart-mini-cart'
    );
    assertSelectedOptions('Sol Earrings: Gold Sol Earrings')('.cart-mini-cart');
    assertSelectedOptions('Bangles: Gold Omni Bangle Set')('.cart-mini-cart');
  });
});
