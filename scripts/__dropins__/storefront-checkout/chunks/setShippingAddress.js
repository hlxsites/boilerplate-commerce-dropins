import{a as s,b as p,M as u,c as _}from"./getMultilineValues.js";import{o as I,M as g,p as C}from"./fixtures.js";import{C as h,t as A}from"./getCart.graphql.js";import"@dropins/tools/event-bus.js";const T=/^\d+$/,l=t=>{if(T.test(t))return parseInt(t,10)},m=`
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
`,y=["city","company","country_code","firstname","lastname","postcode","region","region_id","save_in_address_book","street","telephone","vat_id"],v=t=>{const a={city:t[s.City],company:t[s.Company],country_code:t[s.Country],firstname:t[s.FirstName],lastname:t[s.LastName],postcode:t[s.PostCode],save_in_address_book:!0,street:p(s.Street,t),telephone:t[s.Telephone],vat_id:t[s.Vat]},r=t[s.Region],d=l(r);d?a.region_id=d:a.region=r;const c=Object.keys(t).filter(e=>!e.startsWith("street")).filter(e=>!y.includes(e)).filter(e=>e!=="country_id").map(e=>{const[n,i]=e.split(u);if(!i)return{attribute_code:n,value:t[e]};const o=p(n,t).join(_);return{attribute_code:n,value:o}}).filter((e,n,i)=>n===i.findIndex(o=>o.attribute_code===e.attribute_code));return c.length>0&&(a.custom_attributes=c),a},N=async({signal:t,address:a})=>{const r=I.cartId;if(!r)throw new g;return await C({type:"mutation",query:m,options:{signal:t,variables:{cartId:r,address:a}},path:"setShippingAddressesOnCart.cart",signalType:"cart",transformer:A})};export{y as S,v as p,N as s};
