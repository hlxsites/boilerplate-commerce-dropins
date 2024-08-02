import{a as s,b as p,M as u,c as _}from"./getMultilineValues.js";import{o as I,M as g,p as C}from"./fixtures.js";import{C as h,t as m}from"./getCart.graphql.js";import{events as A}from"@dropins/tools/event-bus.js";const l=/^\d+$/,T=t=>{if(l.test(t))return parseInt(t,10)},y=`
  mutation setShippingAddress($cartId: String!, $address: CartAddressInput!) {
    setShippingAddressesOnCart(
      input: { cart_id: $cartId, shipping_addresses: [{ address: $address }] }
    ) {
      cart {
        id
        ...CheckoutData
      }
    }
  }
  ${h}
`,S=["city","company","country_code","firstname","lastname","postcode","region","region_id","save_in_address_book","street","telephone","vat_id"],N=t=>{const a={city:t[s.City],company:t[s.Company],country_code:t[s.Country],firstname:t[s.FirstName],lastname:t[s.LastName],postcode:t[s.PostCode],save_in_address_book:!0,street:p(s.Street,t),telephone:t[s.Telephone],vat_id:t[s.Vat]},r=t[s.Region],i=T(r);i?a.region_id=i:a.region=r;const d=Object.keys(t).filter(e=>!e.startsWith("street")).filter(e=>!S.includes(e)).filter(e=>e!=="country_id").map(e=>{const[n,o]=e.split(u);if(!o)return{attribute_code:n,value:t[e]};const c=p(n,t).join(_);return{attribute_code:n,value:c}}).filter((e,n,o)=>n===o.findIndex(c=>c.attribute_code===e.attribute_code));return d.length>0&&(a.custom_attributes=d),a},U=async({signal:t,address:a})=>{const r=I.cartId;if(!r)throw new g;const i=await C({type:"mutation",query:y,options:{signal:t,variables:{cartId:r,address:a}},path:"setShippingAddressesOnCart.cart",signalType:"cart",transformer:m});return A.emit("cart/update",r),i};export{S,N as p,U as s};
