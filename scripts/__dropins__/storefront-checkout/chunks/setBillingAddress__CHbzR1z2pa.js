import{M as n,c as e,f as d}from"./transform-shipping-methods__BzcjtfOSAc.js";import{C as l,a as o,t as p}from"./transform-cart___y_-VOdpTC.js";import"./countries__CgP5Ku3Uic.js";const A=`
  mutation setBillingAddress(
    $cartId: String!
    $input: BillingAddressInput!
  ) {
    setBillingAddressOnCart(
      input: { cart_id: $cartId, billing_address: $input }
    ) {
      cart {
        id
        ...CheckoutData
        ...CartSummaryItems
      }
    }
  }
  ${l}
  ${o}
`,C=async({signal:i,cartId:s,input:t})=>{const{address:a,same_as_shipping:r}=t;if(!s)throw new n;if(!r&&!a)throw new e;return await d({type:"mutation",query:A,options:{signal:i,variables:{cartId:s,input:t}},path:"setBillingAddressOnCart.cart",signalType:"cart",transformer:p})};export{C as s};
//# sourceMappingURL=setBillingAddress__CHbzR1z2pa.js.map