import {
    setGuestEmail,
    setGuestShippingAddress,
    placeOrder,
} from '../../actions';
import {
    assertCartSummaryProduct,
    assertCartSummaryProductsOnCheckout,
    assertTitleHasLink,
    assertProductImage,
    assertCartSummaryMisc,
    assertOrderSummaryMisc,
    assertOrderConfirmationCommonDetails,
    assertOrderConfirmationShippingDetails,
    assertOrderConfirmationBillingDetails,
    assertOrderConfirmationShippingMethod,
} from '../../assertions';
import {

    assertSelectedPaymentMethod,
} from '../../assertions';
import {
    customerBillingAddress,
    customerShippingAddress,
} from '../../fixtures/index';

describe('Verify guest user can place order', () => {
    it('Verify guest user can place order', () => {
        cy.visit('');
        cy.get('.nav-drop')
            .contains('Catalog')
            .click();
        cy.contains('Crown Summit Backpack').click();
        cy.get('.dropin-incrementer__increase-button').click();
        cy.wait(5000);
        cy.contains('Add to Cart').click();
        cy.get('.minicart-wrapper').click();
        assertCartSummaryProduct(
            'Crown Summit Backpack',
            '24-MB03',
            '2',
            '$38.00',
            '$76.00',
            '0'
        )('.cart-mini-cart');
        assertTitleHasLink(
            'Crown Summit Backpack',
            '/products/crown-summit-backpack/24-MB03'
        )('.cart-mini-cart');
        assertProductImage('/mb03-black-0.jpg')('.cart-mini-cart');
        cy.contains('View Cart').click();
        assertCartSummaryProduct(
            'Crown Summit Backpack',
            '24-MB03',
            '2',
            '$38.00',
            '$76.00',
            '0'
        )('.cart-cart');
        assertTitleHasLink(
            'Crown Summit Backpack',
            '/products/crown-summit-backpack/24-MB03'
        )('.cart-cart');
        assertProductImage('/mb03-black-0.jpg')('.cart-cart');
        cy.wait(2000)
        cy.get('.dropin-button--primary')
            .contains('Checkout')
            .click();
        assertCartSummaryMisc(2);
        assertCartSummaryProductsOnCheckout(
            'Crown Summit Backpack',
            '24-MB03',
            '2',
            '$38.00',
            '$76.00',
            '0'
        );
        setGuestEmail(customerShippingAddress.email);
        cy.wait(5000);
        setGuestShippingAddress(customerShippingAddress, true);
        assertOrderSummaryMisc('$76.00', '$10.00', '$86.00');
        assertSelectedPaymentMethod('checkmo', 0);
        cy.wait(5000);
        placeOrder();
        assertOrderConfirmationCommonDetails(customerShippingAddress);
        assertOrderConfirmationShippingDetails(customerShippingAddress);
        assertOrderConfirmationBillingDetails(customerShippingAddress);
        assertOrderConfirmationShippingMethod(customerShippingAddress);
    });
});
