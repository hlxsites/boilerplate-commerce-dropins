import{M as e,b as r,f as n}from"./transform-shipping-methods__C9nMUveXm0.js";import{C as o,a as s,t as i}from"./transform-cart__D3eDEXeW4E.js";import"./countries__BWdjypaepl.js";const m=`
  mutation setPaymentMethod($cartId: String!, $paymentMethod: String!) {
    setPaymentMethodOnCart(
      input: { cart_id: $cartId, payment_method: { code: $paymentMethod } }
    ) {
      cart {
        id
        ...CheckoutData
        ...CartSummaryItems
      }
    }
  }
  ${o}
  ${s}
`,p=async({cartId:t,paymentMethod:a})=>{if(!t)throw new e;if(!a)throw new r;return await n({type:"mutation",query:m,options:{variables:{cartId:t,paymentMethod:a}},path:"setPaymentMethodOnCart.cart",signalType:"cart",transformer:i})};export{p as s};
//# sourceMappingURL=setPaymentMethod__CEn9gOtRHW.js.map
