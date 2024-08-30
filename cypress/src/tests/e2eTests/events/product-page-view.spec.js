it('is sent on product page view/render', () => {
  // on PDP
  cy.visit('/products/frankie-sweatshirt/MH04');
  // NOTE: We first wait for MSE to exist, since it represents that delayed.js
  // has loaded, and thus the initial contexts are ready for processing.
  cy.wait(5000);
  cy.waitForResource('commerce-events-collector.js')
    .then(() => {
      cy.window().its('adobeDataLayer').then((adobeDataLayer) => {
        const targetEventIndex = adobeDataLayer.findIndex(event => event?.event === 'product-page-view');
        const pageContextIndex = adobeDataLayer.findIndex(event => !!event?.pageContext);
        const productContextIndex = adobeDataLayer.findIndex(event => !!event?.productContext);
        const shoppingCartContextIndex = adobeDataLayer.findIndex(event => !!event?.shoppingCartContext);
        const storefrontInstanceContextIndex = adobeDataLayer.findIndex(event => !!event?.storefrontInstanceContext);

        // expected contexts and event are in ACDL
        expect(targetEventIndex).to.be.greaterThan(-1);
        expect(pageContextIndex).to.be.greaterThan(-1);
        expect(productContextIndex).to.be.greaterThan(-1);
        expect(storefrontInstanceContextIndex).to.be.greaterThan(-1);
        // TODO: this context is not pushed because it is "owned" by the cart dropin. To resolve.
        expect(shoppingCartContextIndex).to.be.greaterThan(-1);

        // contexts and events are in expected order
        expect(pageContextIndex).to.be.lessThan(targetEventIndex);
        expect(productContextIndex).to.be.lessThan(targetEventIndex);
        // storefrontInstanceContext is pushed to ACDL by delayed.js, therefore it will likely be _after_ the event,
        // especially for events fired during page load, such as the search page event.
        // TODO: Add a test scenario that asserts that storefrontInstanceContext is at least pushed before the commerce-events-collector script arrives.
        // expect(storefrontInstanceContextIndex).to.be.lessThan(targetEventIndex);
        expect(shoppingCartContextIndex).to.be.lessThan(targetEventIndex);
      });
    });
});
