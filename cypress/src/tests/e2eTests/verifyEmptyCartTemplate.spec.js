describe('Verify cart page when cart is empty', () => {
  it('Verify guest user can see empty cart info', () => {
    cy.visit('');
    cy.checkBaseUrl();
    cy.get('.cart-cart').contains('Shopping Cart').should('be.visible');
    cy.get('.cart-cart').contains('Your cart is empty').should('be.visible');
    cy.get('.cart-cart').contains('Start shopping').should('be.visible');
    cy.get('.cart-cart').contains('Start shopping').click();
    cy.url().should('include', '#empty-cart');
  });
});
