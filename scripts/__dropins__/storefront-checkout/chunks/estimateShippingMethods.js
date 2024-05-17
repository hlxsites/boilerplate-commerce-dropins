import"./countries.js";import{r as _,f as g,M as y,d as h,t as l}from"./transform-shipping-methods.js";import"@dropins/tools/event-bus.js";var d=(t=>(t.SHIPPING="shipping_addresses",t.BILLING="billing_address",t))(d||{}),m=(t=>(t.City="city",t.Company="company",t.Country="country_id",t.FirstName="firstname",t.LastName="lastname",t.PostCode="postcode",t.Region="region",t.RegionId="region_id",t.SaveInAddressBook="save_in_address_book",t.Street="street",t.Telephone="telephone",t.Vat="vat_id",t))(m||{});const I=t=>t?!!t.id&&!!t.code&&!!t.name:!1,M=t=>{if(t)return t.filter(I).map(e=>{const{id:a,code:n,name:i}=e;return{id:a,code:n,name:i}})},S=`
query getRegions($countryCode: String!) {
    country(id: $countryCode) {
        id
        available_regions {
            id
            code
            name
        }
    }
}`,$=async(t,e)=>(_.value.addressType=e,g({type:"query",query:S,options:{variables:{countryCode:t}},path:"country.available_regions",signalType:"regions",transformer:M})),p="-",b=`
`,L=2e3,N=(t,e)=>Object.keys(e).filter(a=>a.startsWith(t)).sort((a,n)=>parseInt(a.replace(`${t}${p}`,""),10)-parseInt(n.replace(`${t}${p}`,""),10)).map(a=>e[a]),f=`
mutation estimateShippingMethods(
	$cartId: String!
  $address: EstimateAddressInput!
) {
	estimateShippingMethods(
		input: {
			cart_id: $cartId
			address: $address
		}
	) {
		carrier_title
		carrier_code
		method_title
		method_code
		available
		amount {
			currency
			value
		}
		price_excl_tax {
			currency
			value
		}
		price_incl_tax {
			currency
			value
		}
		error_message
	}
}
`,R=async t=>{const{cartId:e,criteria:a}=t||{},{country_code:n,region_id:i,region_name:r,zip:o}=a||{};if(!e)throw new y;if(!n)throw new h;const s=typeof i=="string"?parseInt(i,10):i,c=i||r?{...s&&{region_id:s},...r&&{region_code:r}}:void 0,u={country_code:n,...o&&{postcode:o},...c&&{region:c}};return await g({type:"mutation",query:f,options:{variables:{cartId:e,address:u}},path:"estimateShippingMethods",signalType:"estimateShippingMethods",transformer:l})};export{d as A,L as D,p as M,m as a,N as b,b as c,R as e,$ as g};
//# sourceMappingURL=estimateShippingMethods.js.map
