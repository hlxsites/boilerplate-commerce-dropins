import {
    setGuestShippingAddress,
    setGuestBillingAddress,
    placeOrder,
    signUpUser,
    uncheckBillToShippingAddress
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
    assertAuthUser,
} from '../../assertions';
import {

    assertSelectedPaymentMethod,
} from '../../assertions';
import {
    customerShippingAddress,
    customerBillingAddress,
} from '../../fixtures/index';

describe('Verify auth user can place order', () => {
    it('Verify auth user can place order', () => {
        // Need to revisit this once https://jira.corp.adobe.com/browse/USF-1389 is fixed
        // cy.visit('/products/hollister-backyard-sweatshirt/MH05');
        // cy.get('[id="Y29uZmlndXJhYmxlLzU1Ni81MjM="]').click({
        //     force: true,
        //   });
        //   cy.get('[id="Y29uZmlndXJhYmxlLzI3Ny8xODQ="]').click({
        //     force: true,
        //   });
        // cy.wait(5000);
        // cy.contains('Add to Cart').click();
        // cy.get('.minicart-wrapper').click();
        // assertCartSummaryProduct(
        //     'Hollister Backyard Sweatshirt',
        //     'MH05',
        //     '1',
        //     '$52.00',
        //     '$52.00',
        //     '0'
        // )('.cart-mini-cart');
        // assertTitleHasLink(
        //     'Hollister Backyard Sweatshirt',
        //     '/products/hollister-backyard-sweatshirt/MH05'
        // )('.cart-mini-cart');
        // assertProductImage('/mh05-white_main_1.jpg')('.cart-mini-cart');
        // cy.contains('View Cart').click();
        // assertCartSummaryProduct(
        //     'Hollister Backyard Sweatshirt',
        //     'MH05',
        //     '1',
        //     '$52.00',
        //     '$52.00',
        //     '0'
        // )('.cart-cart');
        // assertTitleHasLink(
        //     'Hollister Backyard Sweatshirt',
        //     '/products/hollister-backyard-sweatshirt/MH05'
        // )('.cart-cart');
        cy.visit("/customer/create");
        cy.get('.minicart-wrapper').should('be.visible')
        cy.fixture('userInfo').then(({ sign_up }) => {
            signUpUser(sign_up);
            assertAuthUser(sign_up);
        });
        // Remove this block once https://jira.corp.adobe.com/browse/USF-1389 is fixed.
        // Block Start
        cy.visit('/products/hollister-backyard-sweatshirt/MH05');
        // select size S for configurablle product
        cy.get('[id="Y29uZmlndXJhYmxlLzE4Ni8xNzY="]').click({
            force: true,
        });
        // select color Green for configurablle product
        cy.get('[id="Y29uZmlndXJhYmxlLzkzLzYy"]').click({
            force: true,
        });
        cy.wait(2000);
        cy.contains('Add to Cart').click();
        cy.get('.minicart-wrapper').click();
        assertCartSummaryProduct(
            'Hollister Backyard Sweatshirt',
            'MH05',
            '1',
            '$52.00',
            '$52.00',
            '0'
        )('.cart-mini-cart');
        assertTitleHasLink(
            'Hollister Backyard Sweatshirt',
            '/products/hollister-backyard-sweatshirt/MH05'
        )('.cart-mini-cart');
        assertProductImage('/mh05-white_main_1.jpg')('.cart-mini-cart');
        cy.contains('View Cart').click();
        assertCartSummaryProduct(
            'Hollister Backyard Sweatshirt',
            'MH05',
            '1',
            '$52.00',
            '$52.00',
            '0'
        )('.cart-cart');
        assertTitleHasLink(
            'Hollister Backyard Sweatshirt',
            '/products/hollister-backyard-sweatshirt/MH05'
        )('.cart-cart');
        assertProductImage('/mh05-white_main_1.jpg')('.cart-cart');
        // Block Ends

        // Need to revisit this once https://jira.corp.adobe.com/browse/USF-1389 is fixed
        // cy.get('.minicart-wrapper').click();
        // assertCartSummaryProduct(
        //     'Hollister Backyard Sweatshirt',
        //     'MH05',
        //     '1',
        //     '$52.00',
        //     '$52.00',
        //     '0'
        // )('.cart-mini-cart');
        // assertTitleHasLink(
        //     'Hollister Backyard Sweatshirt',
        //     '/products/hollister-backyard-sweatshirt/MH05'
        // )('.cart-mini-cart');
        // assertProductImage('/mh05-white_main_1.jpg')('.cart-mini-cart');
        cy.visit("/products/crown-summit-backpack/24-MB03");
        cy.contains('Add to Cart').click();
        cy.get('.minicart-wrapper').click();
        assertCartSummaryProduct(
            'Crown Summit Backpack',
            '24-MB03',
            '1',
            '$38.00',
            '$38.00',
            '0'
        )('.cart-mini-cart');
        assertTitleHasLink(
            'Crown Summit Backpack',
            '/products/crown-summit-backpack/24-MB03'
        )('.cart-mini-cart');
        assertProductImage('/mb03-black-0.jpg')('.cart-mini-cart');

        assertCartSummaryProduct(
            'Hollister Backyard Sweatshirt',
            'MH05',
            '1',
            '$52.00',
            '$52.00',
            '1'
        )('.cart-mini-cart');
        assertTitleHasLink(
            'Hollister Backyard Sweatshirt',
            '/products/hollister-backyard-sweatshirt/MH05'
        )('.cart-mini-cart');
        assertProductImage('/mh05-white_main_1.jpg')('.cart-mini-cart');
        cy.contains('View Cart').click();
        assertCartSummaryProduct(
            'Crown Summit Backpack',
            '24-MB03',
            '1',
            '$38.00',
            '$38.00',
            '0'
        )('.cart-cart');
        assertTitleHasLink(
            'Crown Summit Backpack',
            '/products/crown-summit-backpack/24-MB03'
        )('.cart-cart');
        assertProductImage('/mb03-black-0.jpg')('.cart-cart');

        assertCartSummaryProduct(
            'Hollister Backyard Sweatshirt',
            'MH05',
            '1',
            '$52.00',
            '$52.00',
            '1'
        )('.cart-cart');
        assertTitleHasLink(
            'Hollister Backyard Sweatshirt',
            '/products/hollister-backyard-sweatshirt/MH05'
        )('.cart-cart');
        assertProductImage('/mh05-white_main_1.jpg')('.cart-cart');
        cy.contains('Estimated Shipping').should('be.visible');
        cy.get('.dropin-button--primary')
            .contains('Checkout')
            .click();
        assertCartSummaryMisc(2);
        assertCartSummaryProductsOnCheckout(
            'Crown Summit Backpack',
            '24-MB03',
            '1',
            '$38.00',
            '$38.00',
            '0'
        );
        assertCartSummaryProductsOnCheckout(
            'Hollister Backyard Sweatshirt',
            'MH05',
            '1',
            '$52.00',
            '$52.00',
            '1'
        );
        setGuestShippingAddress(customerShippingAddress, true);
        uncheckBillToShippingAddress();
        cy.wait(2000);
        setGuestBillingAddress(customerBillingAddress, true);
        assertOrderSummaryMisc('$90.00', '$10.00', '$86.50');
        assertSelectedPaymentMethod('checkmo', 0);
        cy.wait(5000);
        placeOrder();
        assertOrderConfirmationCommonDetails(customerBillingAddress);
        assertOrderConfirmationShippingDetails(customerShippingAddress);
        assertOrderConfirmationBillingDetails(customerBillingAddress);
        assertOrderConfirmationShippingMethod(customerShippingAddress);
        cy.deleteCustomer();
    });
});
