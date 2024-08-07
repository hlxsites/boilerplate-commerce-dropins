import{i as C,f as c,h as l,a as s}from"./addressField.config.js";const b=`
  query GET_ATTRIBUTES_FORM($formCode: String!) {
    attributesForm(formCode: $formCode) {
      items {
        code
        default_value
        entity_type
        frontend_class
        frontend_input
        is_required
        is_unique
        label
        options {
          is_default
          label
          value
        }
        ... on CustomerAttributeMetadata {
          multiline_count
          sort_order
          validate_rules {
            name
            value
          }
        }
      }
      errors {
        type
        message
      }
    }
  }
`,T=t=>{var a,e,u;const r=((e=(a=t==null?void 0:t.data)==null?void 0:a.attributesForm)==null?void 0:e.items)||[];return r.length?(u=[...r,C].filter(i=>{var o;return!((o=i.frontend_input)!=null&&o.includes("HIDDEN"))}))==null?void 0:u.map(({default_value:i,frontend_input:o,frontend_class:_,is_required:f,code:d,...h})=>{const E={email:1,firstname:2,lastname:3,street:4,street_2:5}[d]||10,m=d==="country_id";return{...h,defaultValue:i||"",fieldType:o||"",className:_||"",required:f||!1,orderNumber:E,name:m?"country_code":d,id:m?"country_code":d,code:m?"country_code":d}}).sort((i,o)=>i.orderNumber-o.orderNumber):[]},R=t=>{var a;if(!(t!=null&&t.data)||!((a=t.data)!=null&&a.countries.length))return[];const{countries:r}=t.data;return r.filter(e=>{if(!e)return!1;const{two_letter_abbreviation:u,full_name_locale:i}=e;return!!u&&!!i}).map(e=>{const{two_letter_abbreviation:u,full_name_locale:i}=e;return{value:u,text:i}})},S=t=>{var n,a;return(a=(n=t==null?void 0:t.data)==null?void 0:n.country)!=null&&a.available_regions?t.data.country.available_regions.filter(e=>e?!!e.id&&!!e.code&&!!e.name:!1).map(e=>{const{id:u}=e;return{id:u,text:e.name,value:`${e.code},${e.id}`}}):[]},O=async t=>await c(b.replace(/\s+/g," ").trim(),{method:"GET",cache:"force-cache",variables:{formCode:t}}).then(r=>{var n;return(n=r.errors)!=null&&n.length?l(r.errors):T(r)}).catch(s),y=`
  mutation CREATE_CUSTOMER_ADDRESS($input: CustomerAddressInput!) {
    createCustomerAddress(input:$input) {
      firstname
    }
  }
`,U=async t=>await c(y,{method:"POST",variables:{input:t}}).then(r=>{var n,a,e;return(n=r.errors)!=null&&n.length?l(r.errors):((e=(a=r==null?void 0:r.data)==null?void 0:a.createCustomerAddress)==null?void 0:e.firstname)||""}).catch(s),A=`
  query GET_COUNTRIES_QUERY {
    countries {
      two_letter_abbreviation
      full_name_locale
    }
  }
`,$=async()=>await c(A,{method:"GET",cache:"no-cache"}).then(t=>{var r;return(r=t.errors)!=null&&r.length?l(t.errors):R(t)}).catch(s),v=`
  query GET_REGIONS($countryCode: String!) {
    country(id: $countryCode) {
      id
      available_regions {
        id
        code
        name
      }
    }
  }
`,I=async t=>await c(v,{method:"GET",cache:"no-cache",variables:{countryCode:t}}).then(r=>{var n;return(n=r.errors)!=null&&n.length?l(r.errors):S(r)}).catch(s),g=`
  mutation UPDATE_CUSTOMER_ADDRESS($id: Int!,
  $input: CustomerAddressInput) {
    updateCustomerAddress(id:$id, input:$input) {
      firstname
   }
  }
`,N=async t=>{const{addressId:r,...n}=t;return r?await c(g,{method:"POST",variables:{id:+r,input:n}}).then(a=>{var e,u,i;return(e=a.errors)!=null&&e.length?l(a.errors):((i=(u=a==null?void 0:a.data)==null?void 0:u.updateCustomerAddress)==null?void 0:i.firstname)||""}).catch(s):""};export{$ as a,I as b,U as c,O as g,N as u};
