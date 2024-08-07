import{s as a}from"./state.js";import{events as p}from"@dropins/tools/event-bus.js";import{f as u,h as l}from"./resetCart.js";const m=e=>{var r,n,t;return{countryCode:e.country_code||"US",postCode:e.postcode||"",region:((r=e.region)==null?void 0:r.region)||"",regionCode:((n=e.region)==null?void 0:n.code)||"",regionId:((t=e.region)==null?void 0:t.id)||0}},h=e=>e?{carrierCode:e.carrier_code||"",methodCode:e.method_code||"",amount:e.amount,...e.price_excl_tax&&{amountExclTax:{value:e.price_excl_tax.value,currency:e.price_excl_tax.currency}},...e.price_incl_tax&&{amountInclTax:{value:e.price_incl_tax.value,currency:e.price_incl_tax.currency}}}:null,g=`
query COUNTRIES_QUERY {
  countries {
    label: full_name_locale
    id
  }
  storeConfig {
    defaultCountry: default_country
  }
}
`,f=`
query REGIONS_QUERY($id: String) {
  country(id: $id) {
    available_regions {
      code
			name
    }
  }
}
`,y=`
  mutation ESTIMATE_SHIPPING_METHODS_MUTATION(
    $cartId: String!
    $address: EstimateAddressInput!
  ) {
    estimateShippingMethods(
      input: {
        cart_id: $cartId
        address: $address
      }
    ) {
      amount {
        currency
        value
      }
      carrier_code
      method_code
      error_message
      price_excl_tax {
        currency
        value
      }
      price_incl_tax {
        currency
        value
      }
    }
  }
`,x=async e=>{const r=a.cartId;if(!r)throw new Error("No cart ID found");if(!e)throw new Error("No address parameter found");const{countryCode:n,postcode:t,region:o}=e,i={country_code:n||"US",postcode:t||"",region:{region:(o==null?void 0:o.region)||"",region_code:(o==null?void 0:o.code)||"",region_id:(o==null?void 0:o.id)||0}};return u(y,{variables:{cartId:r,address:i}}).then(({errors:c,data:s})=>{if(c)return l(c);const d=s.estimateShippingMethods.find(_=>!_.error_message)||null;return p.emit("shipping/estimate",{address:m(i),shippingMethod:h(d)}),d})},T=async()=>u(g,{}).then(({errors:e,data:r})=>{var o,i;if(e)return l(e);const n=((o=r==null?void 0:r.countries)==null?void 0:o.sort((c,s)=>c.label.localeCompare(s.label)))||[],t=((i=r==null?void 0:r.storeConfig)==null?void 0:i.defaultCountry)||"US";return n.forEach(c=>{c.isDefaultCountry=c.id===t}),n}),M=async e=>u(f,{variables:{id:e}}).then(({errors:r,data:n})=>{var t;return r?l(r):((t=n==null?void 0:n.country)==null?void 0:t.available_regions)||[]});export{M as a,x as b,T as g};
