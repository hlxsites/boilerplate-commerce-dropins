it('is sent on product page view/render', () => {
  // on PDP
  cy.visit('/products/frankie-sweatshirt/MH04');
  // wait for the collector to start loading, indicating "initial" ACDL contexts and events are
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
        // TODO: this context is not pushed because it is "owned" by the cart dropin. See DINT-1656.
        expect(shoppingCartContextIndex).to.be.greaterThan(-1);
      });
    });
});
