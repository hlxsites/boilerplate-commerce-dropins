import{o as i,M as r,p}from"./fixtures.js";import{C as n,t as o}from"./getCart.graphql.js";import{events as e}from"@dropins/tools/event-bus.js";const h=`
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
      }
    }
  }
  ${n}
`,m=async s=>{const t=i.cartId;if(!t)throw new r;const a=await p({type:"mutation",query:h,options:{variables:{cartId:t,shippingMethods:s}},path:"setShippingMethodsOnCart.cart",signalType:"cart",transformer:o});return e.emit("cart/update",t),a};export{m as s};
