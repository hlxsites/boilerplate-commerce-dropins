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
