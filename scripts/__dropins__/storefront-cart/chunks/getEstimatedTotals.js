import{s as h,f as m,h as T}from"./resetCart.js";import{C as E,a as I,t as g}from"./CartFragment.js";import"@dropins/tools/event-bus.js";const u=`
  mutation GET_ESTIMATED_TOTALS_MUTATION(
    $cartId: String!
    $address: EstimateAddressInput!,
    $shipping_method: ShippingMethodInput,
    ${E}

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
  ${I}
  `,M=async o=>{var e,a;const r=h.cartId;if(!r)throw new Error("No cart ID found");if(!o)throw new Error("No address parameter found");const{countryCode:i,postcode:n,region:t}=o,c=(e=o.shipping_method)==null?void 0:e.carrier_code,p=(a=o.shipping_method)==null?void 0:a.method_code;return m(u,{variables:{cartId:r,address:{country_code:i||"US",postcode:n||"00000",region:{region:(t==null?void 0:t.region)||"region",region_code:(t==null?void 0:t.code)||"regionCode",region_id:(t==null?void 0:t.id)||0}},shipping_method:{carrier_code:c||"",method_code:p||""}}}).then(({errors:d,data:_})=>{if(d)return T(d);const s=_.estimateTotals;return s?g(s.cart):null})};export{M as g};
