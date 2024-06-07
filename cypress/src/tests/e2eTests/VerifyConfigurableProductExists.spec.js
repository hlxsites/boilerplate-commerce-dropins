import {
  assertCartSummaryProduct,
  assertTitleHasLink,
  assertProductImage,
  assertSelectedOptions,
} from '../../assertions';

describe('Verify cart page with configurable product', () => {
  it('Verify guest user can see configurable product details', () => {
    cy.visit('');

    cy.checkBaseUrl();

    cy.get('.cart-cart').contains('Shopping Cart').should('be.visible');

    cy.get('#addToCart4').click();

    assertCartSummaryProduct(
      'Chloe Silk Shell',
      'VT02',
      '1',
      '$68.00',
      '$68.00',
      '0'
    )('.cart-cart');

    assertSelectedOptions('Fashion Color: Rain')('.cart-cart');
    assertSelectedOptions('Fashion Size: M')('.cart-cart');

    assertTitleHasLink(
      'Chloe Silk Shell',
      'venia-tops/venia-blouses/chloe-silk-shell'
    )('.cart-cart');

    assertProductImage('/vt02-rn_main.jpg')('.cart-cart');

    assertCartSummaryProduct(
      'Chloe Silk Shell',
      'VT02',
      '1',
      '$68.00',
      '$68.00',
      '1'
    )('.cart-cart');

    cy.get('.cart-cart .dropin-incrementer__increase-button').eq(0).click();

    assertCartSummaryProduct(
      'Chloe Silk Shell',
      'VT02',
      '2',
      '$68.00',
      '$136.00',
      '0'
    )('.cart-cart');

    cy.get('#toggleMiniCart').click();

    cy.get('.cart-mini-cart').contains('Shopping Cart').should('be.visible');

    assertCartSummaryProduct(
      'Chloe Silk Shell',
      'VT02',
      '2',
      '$68.00',
      '$136.00',
      '0'
    )('.cart-mini-cart');

    assertSelectedOptions('Fashion Color: Rain')('.cart-cart');
    assertSelectedOptions('Fashion Size: M')('.cart-cart');

    assertTitleHasLink(
      'Chloe Silk Shell',
      'venia-tops/venia-blouses/chloe-silk-shell'
    )('.cart-mini-cart');

    assertProductImage('/vt02-rn_main.jpg')('.cart-mini-cart');
  });

  it('Verify guest user can see downloadable product with one file details', () => {
    cy.visit('');

    cy.checkBaseUrl();

    cy.get('.cart-cart').contains('Shopping Cart').should('be.visible');

    cy.get('#addToCart6').scrollIntoView();
    cy.get('#addToCart6').click();

    assertCartSummaryProduct(
      'Salt Water Magazine',
      'VDL01',
      '1',
      '$25.00',
      '$25.00',
      '0'
    )('.cart-cart');

    assertTitleHasLink(
      'Salt Water Magazine',
      'new-products3/salt-water-magazine'
    )('.cart-cart');

    assertSelectedOptions('1 file: Latest Issue')('.cart-cart');
    assertProductImage('/vdl01_main.jpg')('.cart-cart');

    cy.get('#toggleMiniCart').click();

    assertCartSummaryProduct(
      'Salt Water Magazine',
      'VDL01',
      '1',
      '$25.00',
      '$25.00',
      '0'
    )('.cart-mini-cart');

    assertTitleHasLink(
      'Salt Water Magazine',
      'new-products3/salt-water-magazine'
    )('.cart-mini-cart');

    assertSelectedOptions('1 file: Latest Issue')('.cart-mini-cart');
    assertProductImage('/vdl01_main.jpg')('.cart-mini-cart');

    cy.get('.cart-cart .dropin-incrementer__increase-button').click();

    assertCartSummaryProduct(
      'Salt Water Magazine',
      'VDL01',
      '2',
      '$25.00',
      '$50.00',
      '0'
    )('.cart-cart');

    assertCartSummaryProduct(
      'Salt Water Magazine',
      'VDL01',
      '2',
      '$25.00',
      '$50.00',
      '0'
    )('.cart-mini-cart');
  });

  it('Verify guest user can see downloadable product with multiple files details', () => {
    cy.visit('');

    cy.checkBaseUrl();

    cy.get('.cart-cart').contains('Shopping Cart').should('be.visible');

    cy.get('#addToCart11').scrollIntoView();
    cy.get('#addToCart11').click();

    assertCartSummaryProduct(
      'Yoga For Life',
      'VDL03',
      '1',
      '$56.00',
      '$26.00',
      '0'
    )('.cart-cart');

    assertTitleHasLink(
      'Yoga For Life',
      'new-products3/yoga-for-life'
    )('.cart-cart');

    assertProductImage('/screen_shot_2024-04-03_at_11.07.02_am.png')(
      '.cart-cart'
    );

    assertSelectedOptions('3 files: File One, File Two, File Three')(
      '.cart-cart'
    );

    cy.get('#toggleMiniCart').click();

    assertCartSummaryProduct(
      'Yoga For Life',
      'VDL03',
      '1',
      '$56.00',
      '$26.00',
      '0'
    )('.cart-mini-cart');

    assertTitleHasLink(
      'Yoga For Life',
      'new-products3/yoga-for-life'
    )('.cart-mini-cart');

    assertProductImage('/screen_shot_2024-04-03_at_11.07.02_am.png')(
      '.cart-mini-cart'
    );

    assertSelectedOptions('3 files: File One, File Two, File Three')(
      '.cart-mini-cart'
    );

    cy.get('.cart-cart .dropin-incrementer__increase-button').click();

    assertCartSummaryProduct(
      'Yoga For Life',
      'VDL03',
      '2',
      '$56.00',
      '$112.00$52.00',
      '0'
    )('.cart-cart');

    assertCartSummaryProduct(
      'Yoga For Life',
      'VDL03',
      '2',
      '$56.00',
      '$112.00$52.00',
      '0'
    )('.cart-mini-cart');
  });
});
