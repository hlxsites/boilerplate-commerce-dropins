import{s as m}from"./state.js";import{C as _,a as T,t as E}from"./CartFragment.js";import"@dropins/tools/event-bus.js";import{f as I,h as u}from"./resetCart.js";const A=`
  mutation GET_ESTIMATED_TOTALS_MUTATION(
    $cartId: String!
    $address: EstimateAddressInput!,
    $shipping_method: ShippingMethodInput,
    ${_}

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
  `,N=async r=>{var e,a;const o=m.cartId;if(!o)throw new Error("No cart ID found");if(!r)throw new Error("No address parameter found");const{countryCode:s,postcode:n,region:t}=r,c=(e=r.shipping_method)==null?void 0:e.carrier_code,p=(a=r.shipping_method)==null?void 0:a.method_code;return I(A,{variables:{cartId:o,address:{country_code:s||"US",postcode:n,region:(t==null?void 0:t.id)!==void 0?{region_id:t.id}:{region:(t==null?void 0:t.region)??""}},shipping_method:{carrier_code:c||"",method_code:p||""}}}).then(({errors:d,data:h})=>{if(d)return u(d);const i=h.estimateTotals;return i?E(i.cart):null})};export{N as g};
