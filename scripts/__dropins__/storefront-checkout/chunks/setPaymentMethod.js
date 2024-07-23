import{o as e,M as r,b as n,p as o}from"./fixtures.js";import{C as s,t as i}from"./getCart.graphql.js";const m=`
  mutation setPaymentMethod($cartId: String!, $paymentMethod: String!) {
    setPaymentMethodOnCart(
      input: { cart_id: $cartId, payment_method: { code: $paymentMethod } }
    ) {
      cart {
        id
        ...CheckoutData
      }
    }
  }
  ${s}
`,h=async t=>{const a=e.cartId;if(!a)throw new r;if(!t)throw new n;return await o({type:"mutation",query:m,options:{variables:{cartId:a,paymentMethod:t}},path:"setPaymentMethodOnCart.cart",signalType:"cart",transformer:i})};export{h as s};
