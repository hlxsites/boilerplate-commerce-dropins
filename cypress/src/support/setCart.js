const setCart = (cartId) => {
    cy.window().then((win) => {
      win.events.emit("cart/data", { id: cartId });
    });
  };

  Cypress.Commands.add('setCart', setCart);