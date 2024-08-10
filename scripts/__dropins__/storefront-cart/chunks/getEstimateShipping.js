import{s as a}from"./state.js";import{events as p}from"@dropins/tools/event-bus.js";import{f as u,h as l}from"./resetCart.js";const m=e=>{var r,n;return{countryCode:e.country_code||"US",postCode:e.postcode||"",region:((r=e.region)==null?void 0:r.region)||"",regionId:(n=e.region)==null?void 0:n.id}},h=e=>e?{carrierCode:e.carrier_code||"",methodCode:e.method_code||"",amount:e.amount,...e.price_excl_tax&&{amountExclTax:{value:e.price_excl_tax.value,currency:e.price_excl_tax.currency}},...e.price_incl_tax&&{amountInclTax:{value:e.price_incl_tax.value,currency:e.price_incl_tax.currency}}}:null,g=`
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
`,C=async e=>{const r=a.cartId;if(!r)throw new Error("No cart ID found");if(!e)throw new Error("No address parameter found");const{countryCode:n,postcode:i,region:t}=e,c={country_code:n||"US",postcode:i||"",region:{region:(t==null?void 0:t.region)||"",region_id:t==null?void 0:t.id}};return u(y,{variables:{cartId:r,address:c}}).then(({errors:o,data:s})=>{if(o)return l(o);const d=s.estimateShippingMethods.find(_=>!_.error_message)||null;return p.emit("shipping/estimate",{address:m(c),shippingMethod:h(d)}),d})},T=async()=>u(g,{}).then(({errors:e,data:r})=>{var t,c;if(e)return l(e);const n=((t=r==null?void 0:r.countries)==null?void 0:t.sort((o,s)=>o.label.localeCompare(s.label)))||[],i=((c=r==null?void 0:r.storeConfig)==null?void 0:c.defaultCountry)||"US";return n.forEach(o=>{o.isDefaultCountry=o.id===i}),n}),M=async e=>u(f,{variables:{id:e}}).then(({errors:r,data:n})=>{var i;return r?l(r):((i=n==null?void 0:n.country)==null?void 0:i.available_regions)||[]});export{M as a,C as b,T as g};
