const createAndSetCartWithProduct = (productSku) => {
    const endPoint =  "https://graph.adobe.io/api/63e62e43-8eb8-45a2-b0f6-f7c3845093db/graphql?api_key=2c6d06bb3aef463db8485c88a90f563f";
    const queryCreateCart = `mutation {createEmptyCart}`;
    let cartNewId = "";
    cy.request({
        method: 'POST',
        url: endPoint,
        headers: {
            'content-type': 'application/json'
        },
        body: {query: JSON.parse(JSON.stringify(queryCreateCart))},
    }).then((response) => {
        expect(response).property('status').to.equal(200)  
        cy.wait(5000);
        cartNewId = response.body.data.createEmptyCart
        const queryAddProductToCart = `mutation {addProductsToCart(cartId: "${cartNewId}", cartItems: [{quantity: 1, sku: "${productSku}"}]){cart{items{product{name,sku}quantity}}}}`;
        cy.request({
            method: 'POST',
            url: endPoint,
            headers: {
                'content-type': 'application/json'
            },
            body: {query: JSON.parse(JSON.stringify(queryAddProductToCart))},
        }).then((res) => {
            expect(res).property('status').to.equal(200)
        });
    });

    cy.window().then((win) => {
        win.events.emit("cart/data", { id: cartNewId });
      });

}

Cypress.Commands.add('createAndSetCartWithProduct', createAndSetCartWithProduct);