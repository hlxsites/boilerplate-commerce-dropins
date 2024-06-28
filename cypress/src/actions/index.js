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

export const placeOrder = () => {
  cy.get(fields.placeOrderButton).click();
};

export const createAccount = () => {
  cy.contains("Create account").click();
};

export const signUpUser = (sign_up, isValid = true) => {
  if (sign_up.email) {
    cy.get(fields.authFormUserEmail).clear().type(sign_up.email);
  }

  cy.get(fields.authFormUserFirstName).clear().type(sign_up.firstName);
  cy.get(fields.authFormUserLastName).clear().type(sign_up.lastName);
  cy.get(fields.authFormUserPassword).eq(1).clear().type(sign_up.password);

  if (isValid) {
    cy.get(fields.authFormUserPassword).eq(1).clear().type(sign_up.password);
  } else {
    cy.get(fields.authFormUserPassword).eq(1).clear().type(sign_up.shortPassword);
  }

  createAccount();
};