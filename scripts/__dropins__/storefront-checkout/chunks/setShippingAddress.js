import{a as s,b as p,M as u,c as _}from"./estimateShippingMethods.js";import"./countries.js";import{C as A,a as m,t as C}from"./getCheckoutData.graphql.js";import"@dropins/tools/event-bus.js";import{f as I}from"./dispatchApiCall.js";const g=/^\d+$/,T=t=>{if(g.test(t))return parseInt(t,10)},h=`
  mutation setShippingAddress($cartId: String!, $address: CartAddressInput!) {
    setShippingAddressesOnCart(
      input: { cart_id: $cartId, shipping_addresses: [{ address: $address }] }
    ) {
      cart {
        id
        ...CheckoutData
        ...CartSummaryItems
      }
    }
  }
  ${A}
  ${m}
`,y=["city","company","country_code","firstname","lastname","postcode","region","region_id","save_in_address_book","street","telephone","vat_id"],N=t=>{const a={city:t[s.City],company:t[s.Company],country_code:t[s.Country],firstname:t[s.FirstName],lastname:t[s.LastName],postcode:t[s.PostCode],save_in_address_book:!0,street:p(s.Street,t),telephone:t[s.Telephone],vat_id:t[s.Vat]},n=t[s.Region],d=T(n);d?a.region_id=d:a.region=n;const c=Object.keys(t).filter(e=>!e.startsWith("street")).filter(e=>!y.includes(e)).filter(e=>e!=="country_id").map(e=>{const[r,i]=e.split(u);if(!i)return{attribute_code:r,value:t[e]};const o=p(r,t).join(_);return{attribute_code:r,value:o}}).filter((e,r,i)=>r===i.findIndex(o=>o.attribute_code===e.attribute_code));return c.length>0&&(a.custom_attributes=c),a},U=async({signal:t,cartId:a,address:n})=>await I({type:"mutation",query:h,options:{signal:t,variables:{cartId:a,address:n}},path:"setShippingAddressesOnCart.cart",signalType:"cart",transformer:C});export{y as S,N as p,U as s};
//# sourceMappingURL=setShippingAddress.js.map
