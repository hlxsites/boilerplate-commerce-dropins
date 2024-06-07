describe('Verify mini cart when cart is empty', () => {
  it('Verify guest user can see empty mini cart info', () => {
    cy.visit('');
    cy.checkBaseUrl();

    cy.get('#toggleMiniCart').click();

    cy.get('.cart-mini-cart')
      .contains('Your cart is empty')
      .should('be.visible');
    cy.get('.cart-mini-cart').contains('Start shopping').should('be.visible');
    cy.get('.cart-mini-cart').contains('Start shopping').click();
    cy.url().should('include', '#empty-cart');
  });
});
