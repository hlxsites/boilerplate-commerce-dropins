it('is sent on search bar view/render', () => {
  // on home page
  cy.visit('/');

  // Wait for search input field to be rendered and clickable
  cy.get('.nav-search-button').should('be.visible').click();
  cy.wait(2000);
  // Type in the search query
  cy.get('#search').type('test');
  cy.waitForResource('commerce-events-collector.js')
    .then(() => {
      cy.window().its('adobeDataLayer').then((adobeDataLayer) => {
        const targetEventIndex = adobeDataLayer.findIndex(event => event?.event === 'search-results-view');
        const pageContextIndex = adobeDataLayer.findIndex(event => !!event?.pageContext);
        const searchResultsContextIndex = adobeDataLayer.findIndex(event => !!event?.searchResultsContext);
        const storefrontInstanceContextIndex = adobeDataLayer.findIndex(event => !!event?.storefrontInstanceContext);

        // expected contexts and event are in ACDL
        expect(targetEventIndex).to.be.greaterThan(-1);
        expect(pageContextIndex).to.be.greaterThan(-1);
        expect(searchResultsContextIndex).to.be.greaterThan(-1);
        expect(storefrontInstanceContextIndex).to.be.greaterThan(-1);
      });
    });
});

it('is sent on search results page on view/render', () => {
  // on search page
  cy.visit('/search?q=test');
  cy.waitForResource('commerce-events-collector.js').then(() => {
    cy.window().its('adobeDataLayer').then((adobeDataLayer) => {
      const targetEventIndex = adobeDataLayer.findIndex(event => event?.event === 'search-results-view');
      const pageContextIndex = adobeDataLayer.findIndex(event => !!event?.pageContext);
      const searchResultsContextIndex = adobeDataLayer.findIndex(event => !!event?.searchResultsContext);
      const storefrontInstanceContextIndex = adobeDataLayer.findIndex(event => !!event?.storefrontInstanceContext);

      // expected contexts and event are in ACDL
      expect(targetEventIndex).to.be.greaterThan(-1);
      expect(pageContextIndex).to.be.greaterThan(-1);
      expect(searchResultsContextIndex).to.be.greaterThan(-1);
      expect(storefrontInstanceContextIndex).to.be.greaterThan(-1);
    });
  });
});
