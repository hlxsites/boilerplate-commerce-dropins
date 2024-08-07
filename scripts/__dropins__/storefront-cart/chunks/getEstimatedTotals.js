import{s as h}from"./state.js";import{C as m,a as T,t as E}from"./CartFragment.js";import"@dropins/tools/event-bus.js";import{f as I,h as g}from"./resetCart.js";const u=`
  mutation GET_ESTIMATED_TOTALS_MUTATION(
    $cartId: String!
    $address: EstimateAddressInput!,
    $shipping_method: ShippingMethodInput,
    ${m}

  ) {
    estimateTotals(
      input: {
        cart_id: $cartId
        address: $address
        shipping_method: $shipping_method
      }
    )  {
      cart {
       ...CartFragment
      }
    }
    }
  ${T}
  `,N=async o=>{var e,a;const r=h.cartId;if(!r)throw new Error("No cart ID found");if(!o)throw new Error("No address parameter found");const{countryCode:i,postcode:n,region:t}=o,c=(e=o.shipping_method)==null?void 0:e.carrier_code,p=(a=o.shipping_method)==null?void 0:a.method_code;return I(u,{variables:{cartId:r,address:{country_code:i||"US",postcode:n||"00000",region:{region:(t==null?void 0:t.region)||"region",region_code:(t==null?void 0:t.code)||"regionCode",region_id:(t==null?void 0:t.id)||0}},shipping_method:{carrier_code:c||"",method_code:p||""}}}).then(({errors:d,data:_})=>{if(d)return g(d);const s=_.estimateTotals;return s?E(s.cart):null})};export{N as g};
