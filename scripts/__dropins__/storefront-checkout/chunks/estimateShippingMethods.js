import"./countries.js";import{r as _,f as g,M as y,d as h,t as l}from"./dispatchApiCall.js";import"@dropins/tools/event-bus.js";var m=(t=>(t.SHIPPING="shipping_addresses",t.BILLING="billing_address",t))(m||{}),I=(t=>(t.City="city",t.Company="company",t.Country="country_id",t.FirstName="firstname",t.LastName="lastname",t.PostCode="postcode",t.Region="region",t.RegionId="region_id",t.SaveInAddressBook="save_in_address_book",t.Street="street",t.Telephone="telephone",t.Vat="vat_id",t))(I||{});const M=t=>t?!!t.id&&!!t.code&&!!t.name:!1,S=t=>{if(t)return t.filter(M).map(e=>{const{id:a,code:n,name:i}=e;return{id:a,code:n,name:i}})},f=`
query getRegions($countryCode: String!) {
    country(id: $countryCode) {
        id
        available_regions {
            id
            code
            name
        }
    }
}`,b=async(t,e)=>(_.value.addressType=e,g({type:"query",query:f,options:{variables:{countryCode:t}},path:"country.available_regions",signalType:"regions",transformer:S})),p="-",L=`
`,N=2e3,R=(t,e)=>Object.keys(e).filter(a=>a.startsWith(t)).sort((a,n)=>parseInt(a.replace(`${t}${p}`,""),10)-parseInt(n.replace(`${t}${p}`,""),10)).map(a=>e[a]),v=`
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
`,E=async t=>{const{cartId:e,criteria:a}=t||{},{country_code:n,region_id:i,region_name:r,zip:s}=a||{};if(!e)throw new y;if(!n)throw new h;const o=typeof i=="string"?parseInt(i,10):i,c=i||r?{...o&&{region_id:o},...r&&{region_code:r}}:void 0,u={country_code:n,...s&&{postcode:s},...c&&{region:c}};return await g({type:"mutation",query:v,options:{variables:{cartId:e,address:u}},path:"estimateShippingMethods",signalType:"estimateShippingMethods",transformer:l})};export{m as A,N as D,p as M,I as a,R as b,L as c,E as e,b as g};
//# sourceMappingURL=estimateShippingMethods.js.map
