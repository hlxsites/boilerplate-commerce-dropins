it("is sent on search bar product click", () => {
  cy.visit("/");
  cy.waitForResource("commerce-events-collector.js").then(() => {
    cy.window().then((win) => {
      cy.spy(win.adobeDataLayer, "push").as("adl");
      cy.get(".nav-search-button").should("be.visible").click();
      cy.wait(2000);
      cy.get("#search").type("shirt");
      cy.get(".livesearch.product-link", { timeout: 10000 })
        .first()
        .click()
        .then(() => {
          cy.get("@adl").should((adobeDataLayerPush) => {
            const targetEventIndex = adobeDataLayerPush.args.findIndex(
              (event) => event[0]?.event === "search-product-click"
            );
            expect(targetEventIndex).to.be.greaterThan(-1);
          });
        });
    });
  });
});
