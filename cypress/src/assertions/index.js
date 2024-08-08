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


export const assertCartSummaryProductsOnCheckout = (
  productName,
  productSku,
  productQty,
  productPrice,
  totalPrice,
  productPosition
) => {
  cy.get('.dropin-cart-item__title')
    .eq(productPosition)
    .should('contain', productName);
  cy.get('.dropin-cart-item__sku')
    .eq(productPosition)
    .should('contain', productSku);
  cy.get('.dropin-cart-item__price__quantity')
    .eq(productPosition)
    .should('contain', productQty);
  cy.get('.dropin-cart-item__price')
    .eq(productPosition)
    .should('contain', productPrice);
  cy.get('.dropin-cart-item__total')
    .eq(productPosition)
    .should('contain', totalPrice);
};

export const assertCartSummaryMisc = (itemCount) => {
  cy.get('.checkout-cart-summary__title')
    .should('contain', 'Your cart')
    .and('contain', itemCount);
  cy.contains('Edit').should('have.attr', 'href', '/shopping-cart');
};

export const assertOrderSummaryMisc = (subtotal, shipping, total) => {
  cy.get('.checkout-order-summary')
    .find('.checkout-order-summary__title')
    .contains('Order summary')
    .should('be.visible');
  cy.get('.checkout-order-summary')
    .find('div[data-testid="order-summary-subtotal"]')
    .should('contain', 'Subtotal')
    .and('contain', subtotal);
  cy.get('.checkout-order-summary')
    .find('div[data-testid="order-summary-shipping"]')
    .should('contain', 'Shipping')
    .and('contain', shipping);
  cy.get('.checkout-order-summary')
    .find('div[data-testid="order-summary-total-incl-tax"]')
    .should('contain', 'Total')
    .and('contain', total);
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

export const assertSelectedPaymentMethod = (
  selected_payment_method,
  index_number
) => {
  cy.get('.checkout-payment-methods__methods')
    .find('[type="radio"]')
    .eq(index_number)
    .should('be.checked')
    .and('have.value', selected_payment_method);
};

export const assertOrderConfirmationCommonDetails = (customerDetails) => {
  cy.get('.order-confirmation')
    .should(
      'contain',
      `${customerDetails.firstName}, thank you for your order!`
    )
    .and('contain', 'Order details')
    .and('contain', 'Contact details')
    .and('contain', customerDetails.email)
    .and('contain', 'Payment method')
    .and('contain', customerDetails.paymentMethod)
    .and('contain', 'Order summary');
  cy.contains('p', /ORDER #\d+/).should('be.visible');
  cy.get('.order-confirmation-order-summary').should('exist');
  cy.get('a[role="link"]').should('contain', 'Continue shopping');
};


export const assertOrderConfirmationShippingDetails = (customerAddress) => {
  cy.get('.order-confirmation-details__shipping_address')
    .should('contain', 'Shipping address')
    .and('contain', customerAddress.firstName)
    .and('contain', customerAddress.lastName)
    .and('contain', customerAddress.street)
    .and('contain', customerAddress.street1)
    .and('contain', customerAddress.city)
    .and('contain', customerAddress.postCode)
    .and('contain', customerAddress.regionFull)
    .and('contain', customerAddress.countryCode);
};

export const assertOrderConfirmationBillingDetails = (customerAddress) => {
  cy.get('.order-confirmation-details__billing_address')
    .should('contain', 'Billing address')
    .and('contain', customerAddress.firstName)
    .and('contain', customerAddress.lastName)
    .and('contain', customerAddress.street)
    .and('contain', customerAddress.street1)
    .and('contain', customerAddress.city)
    .and('contain', customerAddress.postCode)
    .and('contain', customerAddress.regionFull)
    .and('contain', customerAddress.countryCode);
};

export const assertOrderConfirmationShippingMethod = (
  customerDelievryMethod
) => {
  cy.get('.order-confirmation-details__shipping-method')
    .should('contain', 'Shipping method')
    .and('contain', customerDelievryMethod.shippingMethod);
}

export const assertAuthUser = (sign_up) => {
  cy.url().should('include', '/customer/account');
  cy.contains(sign_up.firstName).should("be.visible");
  cy.contains(sign_up.lastName).should("be.visible");
  cy.contains(sign_up.email).should("be.visible");
};