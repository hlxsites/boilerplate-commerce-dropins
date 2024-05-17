import{M as s,f as a}from"./transform-shipping-methods.js";import"@dropins/tools/event-bus.js";import{C as p,a as r,t as n}from"./transform-cart.js";import"./countries.js";const o=`
  mutation setShippingMethods(
    $cartId: String!
    $shippingMethods: [ShippingMethodInput]!
  ) {
    setShippingMethodsOnCart(
      input: { cart_id: $cartId, shipping_methods: $shippingMethods }
    ) {
      cart {
        id
        ...CheckoutData
        ...CartSummaryItems
      }
    }
  }
  ${p}
  ${r}
`,d=async({cartId:t,shippingMethods:i})=>{if(!t)throw new s;return a({type:"mutation",query:o,options:{variables:{cartId:t,shippingMethods:i}},path:"setShippingMethodsOnCart.cart",signalType:"cart",transformer:n})};export{d as s};
//# sourceMappingURL=setShippingMethods.js.map
