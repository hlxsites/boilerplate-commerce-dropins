import { assertCartSummaryProduct } from '../../assertions';

function subscribeToEvents(win) {
  win.viewCartEventCounter = 0;
  win.addToCartEventCounter = 0;
  win.openCartEventCounter = 0;
  win.removeFromCartEventCounter = 0;

  win.adobeDataLayer.addEventListener('shopping-cart-view', (data) => {
    assert.isNotNull(data);
    win.viewCartEmitted = true;
    win.viewCartEventCounter += 1;
  });

  win.adobeDataLayer.addEventListener('add-to-cart', (data) => {
    assert.isNotNull(data);
    win.addToCartEmitted = true;
    win.addToCartEventCounter += 1;
  });

  win.adobeDataLayer.addEventListener('open-cart', (data) => {
    assert.isNotNull(data);
    win.openCartEmitted = true;
    win.openCartEventCounter += 1;
  });

  win.adobeDataLayer.addEventListener('remove-from-cart', (data) => {
    assert.isNotNull(data);
    win.removeFromCartEmitted = true;
    win.removeFromCartEventCounter += 1;
  });
}

describe('Verify ACDL Integration setup', () => {
  it('window.adobeDataLayer should be defined', () => {
    cy.visit('');
    cy.checkBaseUrl();
    cy.get('.cart-cart').contains('Shopping Cart').should('be.visible');
    cy.window().should('have.property', 'adobeDataLayer');
  });
});

describe('Verify view cart event', () => {
  it('View cart event should be sent when cart page is loaded or mini cart is opened', () => {
    cy.visit('');
    cy.checkBaseUrl();
    cy.get('.cart-cart').contains('Shopping Cart').should('be.visible');
    cy.get('.cart-cart').contains('Your cart is empty').should('be.visible');

    cy.window()
      .then((win) => {
        subscribeToEvents(win);
      })
      .then(() => {
        cy.get('#addToCart').click();
        assertCartSummaryProduct(
          'Gold Omni Bangle Set',
          'VA19-GO-NA',
          '1',
          '$98.00',
          '$98.00$78.00',
          '0'
        )('.cart-cart');
      })
      .then(() => {
        // Only emit the cart view event if the cart loads with items
        expect(cy.window().should('not.have.property', 'viewCartEmitted'));
        expect(cy.window().should('have.property', 'viewCartEventCounter', 0));
      });

    // Reload the page, which should load the cart with items and emit the event
    cy.visit('');
    cy.checkBaseUrl();
    cy.get('.cart-cart').contains('Shopping Cart').should('be.visible');

    cy.window()
      .then((win) => {
        subscribeToEvents(win);
      })
      .then(() => {
        expect(cy.window().should('have.property', 'viewCartEmitted', true));
        expect(cy.window().should('have.property', 'viewCartEventCounter', 1));
      })
      .then(() => {
        cy.get('#toggleMiniCart').click();
      })
      .then(() => {
        // Opening the mini cart should emit a view cart event
        expect(cy.window().should('have.property', 'viewCartEventCounter', 2));
      });
  });
});

describe('Verify open cart event', () => {
  it('Open cart event should be sent only after the first item is added', () => {
    cy.visit('');
    cy.checkBaseUrl();
    cy.get('.cart-cart').contains('Shopping Cart').should('be.visible');
    cy.window()
      .then((win) => {
        subscribeToEvents(win);
      })
      .then(() => {
        // Open cart should not have been emitted yet
        expect(cy.window().should('not.have.property', 'openCartEmitted'));
        expect(cy.window().should('have.property', 'openCartEventCounter', 0));
      })
      .then(() => {
        cy.get('#addToCart').click();
        assertCartSummaryProduct(
          'Gold Omni Bangle Set',
          'VA19-GO-NA',
          '1',
          '$98.00',
          '$98.00$78.00',
          '0'
        )('.cart-cart');
      })
      .then(() => {
        expect(cy.window().should('have.property', 'openCartEmitted', true));
        expect(cy.window().should('have.property', 'openCartEventCounter', 1));
      });
  });
});

describe('Verify add to cart event', () => {
  it('Add to cart events should be sent on add or increases to cart', () => {
    cy.visit('');
    cy.checkBaseUrl();
    cy.get('.cart-cart').contains('Shopping Cart').should('be.visible');
    cy.get('#addToCart').click();

    assertCartSummaryProduct(
      'Gold Omni Bangle Set',
      'VA19-GO-NA',
      '1',
      '$98.00',
      '$98.00$78.00',
      '0'
    )('.cart-cart');

    cy.get('.dropin-incrementer__increase-button').click();
    assertCartSummaryProduct(
      'Gold Omni Bangle Set',
      'VA19-GO-NA',
      '2',
      '$98.00',
      '$196.00$156.00',
      '0'
    )('.cart-cart');

    cy.window().should('have.property', 'adobeDataLayer');
    cy.window()
      .then((win) => {
        subscribeToEvents(win);
      })
      .then(() => {
        // Add to cart event should be emitted twice for both add to cart actions
        expect(cy.window().should('have.property', 'addToCartEmitted', true));
        expect(cy.window().should('have.property', 'addToCartEventCounter', 2));

        // Open cart event should be emitted once only when the cart has been created
        // and an item has been added to it the first time
        expect(cy.window().should('have.property', 'openCartEmitted', true));
        expect(cy.window().should('have.property', 'openCartEventCounter', 1));
      });
  });
});

describe('Verify remove from cart event', () => {
  it('Remove from cart event should be sent when item is removed from cart', () => {
    cy.visit('');
    cy.checkBaseUrl();
    cy.get('.cart-cart').contains('Shopping Cart').should('be.visible');

    cy.window().should('have.property', 'adobeDataLayer');
    cy.window()
      .then((win) => {
        subscribeToEvents(win);
      })
      .then(() => {
        cy.get('#addToCart').click();
        assertCartSummaryProduct(
          'Gold Omni Bangle Set',
          'VA19-GO-NA',
          '1',
          '$98.00',
          '$98.00$78.00',
          '0'
        )('.cart-cart');
        cy.get('.cart-cart .dropin-incrementer__increase-button').click();
        assertCartSummaryProduct(
          'Gold Omni Bangle Set',
          'VA19-GO-NA',
          '2',
          '$98.00',
          '$196.00$156.00',
          '0'
        )('.cart-cart');
        cy.get('.cart-cart .dropin-cart-item__remove').click();
        cy.get('.cart-cart')
          .contains('Your cart is empty')
          .should('be.visible');
      })
      .then(() => {
        expect(cy.window().should('have.property', 'addToCartEmitted', true));
        expect(cy.window().should('have.property', 'addToCartEventCounter', 2));

        expect(
          cy.window().should('have.property', 'removeFromCartEmitted', true)
        );
        expect(
          cy.window().should('have.property', 'removeFromCartEventCounter', 1)
        );
      });
  });

  it('Remove from cart events should be sent when amount is reduced', () => {
    cy.visit('');
    cy.checkBaseUrl();
    cy.get('.cart-cart').contains('Shopping Cart').should('be.visible');

    cy.window().should('have.property', 'adobeDataLayer');
    cy.window()
      .then((win) => {
        subscribeToEvents(win);
      })
      .then(() => {
        cy.get('#addToCart').click();
        assertCartSummaryProduct(
          'Gold Omni Bangle Set',
          'VA19-GO-NA',
          '1',
          '$98.00',
          '$98.00$78.00',
          '0'
        )('.cart-cart');
        cy.get('.cart-cart .dropin-incrementer__increase-button').click();
        assertCartSummaryProduct(
          'Gold Omni Bangle Set',
          'VA19-GO-NA',
          '2',
          '$98.00',
          '$196.00$156.00',
          '0'
        )('.cart-cart');
        cy.get('.cart-cart .dropin-incrementer__decrease-button').click();
      })
      .then(() => {
        expect(cy.window().should('have.property', 'addToCartEmitted', true));
        expect(cy.window().should('have.property', 'addToCartEventCounter', 2));

        expect(
          cy.window().should('have.property', 'removeFromCartEmitted', true)
        );
        expect(
          cy.window().should('have.property', 'removeFromCartEventCounter', 1)
        );
      });
  });
});
