import{a as e,b as p,M as u,c as _}from"./estimateShippingMethods.js";import"./countries.js";import"@dropins/tools/event-bus.js";import{f as A}from"./transform-shipping-methods.js";import{C as I,a as g,t as m}from"./transform-cart.js";const C=/^\d+$/,T=t=>{if(C.test(t))return parseInt(t,10)},S=`
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
  ${I}
  ${g}
`,h=["city","company","country_code","firstname","lastname","postcode","region","region_id","save_in_address_book","street","telephone","vat_id"],v=t=>{const a={city:t[e.City],company:t[e.Company],country_code:t[e.Country],firstname:t[e.FirstName],lastname:t[e.LastName],postcode:t[e.PostCode],save_in_address_book:!t[e.SaveInAddressBook],street:p(e.Street,t),telephone:t[e.Telephone],vat_id:t[e.Vat]},n=t[e.Region],d=T(n);d?a.region_id=d:a.region=n;const c=Object.keys(t).filter(s=>!s.startsWith("street")).filter(s=>!h.includes(s)).filter(s=>s!=="country_id").map(s=>{const[r,i]=s.split(u);if(!i)return{attribute_code:r,value:t[s]};const o=p(r,t).join(_);return{attribute_code:r,value:o}}).filter((s,r,i)=>r===i.findIndex(o=>o.attribute_code===s.attribute_code));return c.length>0&&(a.custom_attributes=c),a},N=async({signal:t,cartId:a,address:n})=>await A({type:"mutation",query:S,options:{signal:t,variables:{cartId:a,address:n}},path:"setShippingAddressesOnCart.cart",signalType:"cart",transformer:m});export{h as S,v as p,N as s};
//# sourceMappingURL=setShippingAddress.js.map
