import {
    setGuestEmail,
    setGuestShippingAddress,
    placeOrder,
} from '../../actions';
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
        cy.contains('Add to Cart').click();
        cy.get('.minicart-wrapper').click();
        cy.contains('View Cart').click();
        cy.wait(2000)
        cy.get('.dropin-button--primary')
            .contains('Checkout')
            .click();
        setGuestEmail(customerBillingAddress.email);
        setGuestShippingAddress(customerShippingAddress, true);
        cy.wait(2000);
        // Select payment method
        assertSelectedPaymentMethod('checkmo', 0);
        placeOrder();

    });
});
