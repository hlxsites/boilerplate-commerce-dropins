describe('search-results-view event', () => {
  it('is sent on search bar view/render', () => {
    // on home page
    cy.visit('/');
    // Wait for search input field to be rendered and clickable
    cy.get('.nav-search-button').should('be.visible').click();
    cy.wait(3000); // 2000ms throws due to storefrontInstanceContext not being pushed before the event.
    // Type in the search query
    cy.get('#search').type('test');
    // wait for search result, all events, context, etc pushed.
    cy.wait(1000);
    // Assert that page, storefront, and searchResults contexts are pushed to data layer
    cy.window().its('adobeDataLayer').then((adobeDataLayer) => {
      // the contexts should be set before the event.
      const targetEventIndex = adobeDataLayer.findIndex(event => event?.event === 'search-results-view')
      const pageContextIndex = adobeDataLayer.findIndex(event => !!event?.pageContext);
      const searchResultsContextIndex = adobeDataLayer.findIndex(event => !!event?.searchResultsContext);
      const storefrontInstanceContextIndex = adobeDataLayer.findIndex(event => !!event?.storefrontInstanceContext);

      expect(targetEventIndex).to.be.greaterThan(-1);
      expect(pageContextIndex).to.be.greaterThan(-1)
      expect(searchResultsContextIndex).to.be.greaterThan(-1)
      expect(storefrontInstanceContextIndex).to.be.greaterThan(-1)
      expect(pageContextIndex).to.be.lessThan(targetEventIndex);
      expect(searchResultsContextIndex).to.be.lessThan(targetEventIndex);
      expect(storefrontInstanceContextIndex).to.be.lessThan(targetEventIndex);
    });
  });

  it('is sent on search results page on view/render', () => {
    // on search page
    cy.visit('/search?q=test');
    // wait for search result, all events, context, etc pushed.
    cy.wait(5000);
    // Assert that page, storefront, and searchResults contexts are pushed to data layer
    cy.window().its('adobeDataLayer').then((adobeDataLayer) => {
      // the contexts should be set before the event.
      const targetEventIndex = adobeDataLayer.findIndex(event => event?.event === 'search-results-view')
      const pageContextIndex = adobeDataLayer.findIndex(event => !!event?.pageContext);
      const searchResultsContextIndex = adobeDataLayer.findIndex(event => !!event?.searchResultsContext);
      const storefrontInstanceContextIndex = adobeDataLayer.findIndex(event => !!event?.storefrontInstanceContext);

      expect(targetEventIndex).to.be.greaterThan(-1);
      expect(pageContextIndex).to.be.greaterThan(-1)
      expect(searchResultsContextIndex).to.be.greaterThan(-1)
      expect(storefrontInstanceContextIndex).to.be.greaterThan(-1)
      expect(pageContextIndex).to.be.lessThan(targetEventIndex);
      expect(searchResultsContextIndex).to.be.lessThan(targetEventIndex);
      expect(storefrontInstanceContextIndex).to.be.lessThan(targetEventIndex);
    });
  });
});
