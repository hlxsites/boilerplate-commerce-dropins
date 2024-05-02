import{s as d,f as u,h as a}from"./getStoreConfig.js";import"@dropins/tools/event-bus.js";const f=`
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
      error_message
    }
  }
`,E=`
query COUNTRIES_QUERY {
  countries {
    label: full_name_locale
    id
  }
  storeConfig {
    defaultCountry: default_country
  }
}
`,_=`
query REGIONS_QUERY($id: String) {
  country(id: $id) {
    available_regions {
      code
			name
    }
  }
}
`,p=async t=>{const e=d.cartId;if(!e)throw new Error("No cart ID found");if(!t)throw new Error("No address parameter found");const{countryCode:r,postcode:n,region:o}=t;return u(f,{variables:{cartId:e,address:{country_code:r||"US",postcode:n||"",region:{region_code:(o==null?void 0:o.code)||""}}}}).then(({errors:i,data:s})=>{if(i)return a(i);const c=s.estimateShippingMethods;return c.length===0?null:c.find(l=>!l.error_message)})},I=async()=>u(E,{}).then(({errors:t,data:e})=>{var o,i;if(t)return a(t);const r=((o=e==null?void 0:e.countries)==null?void 0:o.sort((s,c)=>s.label.localeCompare(c.label)))||[],n=((i=e==null?void 0:e.storeConfig)==null?void 0:i.defaultCountry)||"US";return r.forEach(s=>{s.isDefaultCountry=s.id===n}),r}),S=async t=>u(_,{variables:{id:t}}).then(({errors:e,data:r})=>{var n;return e?a(e):((n=r==null?void 0:r.country)==null?void 0:n.available_regions)||[]});export{I as a,S as b,p as g};
//# sourceMappingURL=getEstimateShipping.js.map
