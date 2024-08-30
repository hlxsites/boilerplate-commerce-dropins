it('is sent on search bar product click', (done) => {
  cy.visit('/');
  cy.wait(5000);
  cy.waitForResource('commerce-events-collector.js')
    .then(() => {
      cy.window().its('adobeDataLayer').then((adobeDataLayer) => {
        cy.on('window:unload', (e) => {
          const targetEventIndex = adobeDataLayer.findIndex(event => event?.event === 'search-product-click');
          // TODO: this fails because the unload is triggering before the event is pushed.
          // In reality, this event is actually pushed and visible in kibana.
          expect(targetEventIndex).to.be.greaterThan(-1);
          done();
        });
        // Wait for search input field to be rendered and clickable
        cy.get('.nav-search-button').should('be.visible').click();
        cy.wait(2000);
        // Type in the search query
        cy.get('#search').type('shirt');
        cy.get('.livesearch.product-link', { timeout: 10000 })
          .then(results => {
            results[0].click();
          });
      });
    });
});
