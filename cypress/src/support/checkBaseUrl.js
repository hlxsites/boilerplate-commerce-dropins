const checkBaseUrl = () => {
  cy.window().then((win) => {
    if (!win.location.href.includes('127.0.0.1')) {
      cy.get('[data-cy="data-cart-url"]').click();
    }
  });
  cy.wait(3000);
};

Cypress.Commands.add('checkBaseUrl', checkBaseUrl);
