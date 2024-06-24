import * as fields from '../fields/index';

export const setGuestEmail = (customerEmail) => {
  cy.get(fields.shippingFormGuestEmail).clear().type(customerEmail);
};

export const setGuestShippingAddress = (customerAddress, isSelectableState) => {
  cy.get(fields.shippingFormFirstName).clear().type(customerAddress.firstName);
  cy.get(fields.shippingFormLastName).clear().type(customerAddress.lastName);
  cy.get(fields.shippingFormStreet).clear().type(customerAddress.street);
  cy.get(fields.shippingFormStreet1).clear().type(customerAddress.street1);
  if (isSelectableState) {
    cy.get(fields.shippingFormState).select(customerAddress.region);
  } else {
    cy.get(fields.shippingFormInputState).type(customerAddress.region);
  }
  cy.get(fields.shippingFormCity).clear().type(customerAddress.city);
  cy.get(fields.shippingFormPostCode).clear().type(customerAddress.postCode);
  cy.get(fields.shippingFormTelephone).clear().type(customerAddress.telephone);
};

export const setGuestBillingAddress = (customerAddress, isSelectableState) => {
  cy.get(fields.billingFormFirstName).clear().type(customerAddress.firstName);
  cy.get(fields.billingFormLastName).clear().type(customerAddress.lastName);
  cy.get(fields.billingFormStreet).clear().type(customerAddress.street);
  cy.get(fields.billingFormStreet1).clear().type(customerAddress.street1);
  if (isSelectableState) {
    cy.get(fields.billingFormState).select(customerAddress.region);
  } else {
    cy.get(fields.billingFormInputState).type(customerAddress.region);
  }
  cy.get(fields.billingFormCity).clear().type(customerAddress.city);
  cy.get(fields.billingFormPostCode).clear().type(customerAddress.postCode);
  cy.get(fields.billingFormTelephone).clear().type(customerAddress.telephone);
};

export const fillGuestShippingAddressFirstName = (name) => {
  cy.get(fields.shippingFormFirstName).type(name);
};

export const uncheckBillToShippingAddress = () => {
  cy.get(fields.billToShippingAddress).uncheck({ force: true });
};

export const setGuestShippingAddressCountry = (country_name) => {
  cy.get(fields.shippingFormCountry).select(country_name);
};

export const setGuestBillingAddressState = (state_name) => {
  cy.get(fields.billingFormState).select(state_name);
};

export const selectShippingMethod = (shipping_method) => {
  cy.get('.checkout-shipping-methods')
    .find('[type="radio"]')
    .should('not.contain.attr', 'aria-busy', 'true');
  cy.get('.checkout-shipping-methods')
    .find('[type="radio"]')
    .check(shipping_method, { force: true });
};

export const placeOrder = () => {
  cy.get(fields.placeOrderButton).click();
};

export const selectedPaymentMethod = (index_number) => {
  cy.get('.checkout-payment-methods__methods')
    .find('[type="radio"]')
    .eq(index_number)
    .click({ force: true });
};

export const setGuestShippingAddressInputState = (state_name) => {
  cy.get(fields.shippingFormInputState).type(state_name);
};

export const userSignIn = (userSignInInfo) => {
  cy.get(fields.signInLink).click();
  setSignInInfo(userSignInInfo);
  cy.get(fields.signInFormSignInButton).click();
};

export const setSignInInfo = (userSignInInfo) => {
  cy.get(fields.signInFormEmail).clear().type(userSignInInfo.email);
  cy.get(fields.signInFormPassword).clear().type(userSignInInfo.password);
};

export const userSignOut = () => {
  cy.get(fields.signOutLink).click();
};

export const continueShopping = () => {
  cy.get(fields.startShoppingButton).click();
};
