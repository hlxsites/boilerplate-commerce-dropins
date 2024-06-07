import { estimatedShippingDestinationLink } from "../fields";

export const assertCartSummaryProduct =
  (
    productName,
    productSku,
    productQty,
    productPrice,
    totalPrice,
    productPosition
  ) =>
  (elem = '.cart-cart') => {
    cy.get(`${elem} .dropin-cart-item__title`)
      .eq(productPosition)
      .should('contain', productName);
    cy.get(`${elem} .dropin-cart-item__sku`)
      .eq(productPosition)
      .should('contain', productSku);

    if (elem === '.cart-cart') {
      cy.get(`${elem} .dropin-incrementer__input`)
        .eq(productPosition)
        .should('have.value', productQty);
    }

    cy.get(`${elem} .dropin-cart-item__price`)
      .eq(productPosition)
      .should('contain', productPrice);
    cy.get(`${elem} .dropin-cart-item__total`)
      .eq(productPosition)
      .should('contain', totalPrice);
  };

export const assertTitleHasLink =
  (productName, productHref) =>
  (elem = '.cart-cart') => {
    cy.get(`${elem} .dropin-cart-item`)
      .contains(productName)
      .should('have.attr', 'href', productHref);
  };

export const assertProductImage =
  (productImageSrc) =>
  (elem = '.cart-cart') => {
    cy.get(`${elem} img[src*="${productImageSrc}"]`)
      .should('be.visible')
      .and(($img) => expect($img[0].naturalWidth).to.be.gt(0));
  };

export const assertSubtotal =
  (subtotal) =>
  (elem = '.cart-cart') => {
    cy.get(`${elem} [data-testid="subtotal"]`).should('contain', subtotal);
  };

export const assertDiscountTotal =
  (discountTotal) =>
  (elem = '.cart-cart') => {
    cy.contains(
      `${elem} [data-testid="summary-discount-total"]`,
      discountTotal
    ).should('be.visible');
  };

export const assertSelectedOptions =
  (selectedOptions) =>
  (elem = '.cart-cart') => {
    cy.get(`${elem} .dropin-cart-item__configurations__item`).should(
      'contain',
      selectedOptions
    );
  };

export const assertEstimatedShippingDestinationText = (targetText) => {
  cy.get(estimatedShippingDestinationLink).should('have.text', targetText);
}