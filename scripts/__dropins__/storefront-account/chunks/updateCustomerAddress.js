import{events as E}from"@dropins/tools/event-bus.js";import{FetchGraphQL as b}from"@dropins/tools/fetch-graphql.js";const{setEndpoint:U,setFetchGraphQlHeader:w,removeFetchGraphQlHeader:D,setFetchGraphQlHeaders:F,fetchGraphQl:l,getConfig:M}=new b().getMethods(),C=`
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
`,T=`
  query GET_ATTRIBUTES_FORM_SHORT {
      attributesForm(formCode: customer_register_address) {
      items {
        frontend_input
        label
        code
        ... on CustomerAttributeMetadata {
          multiline_count
          sort_order
        }
      }
    }
  }
`,m=t=>{throw t instanceof DOMException&&t.name==="AbortError"||E.emit("error",{source:"auth",type:"network",error:t}),t},_=t=>{const e=t.map(r=>r.message).join(" ");throw Error(e)},h=t=>t.replace(/_([a-z])/g,(e,r)=>r.toUpperCase()),A=t=>t.replace(/([A-Z])/g,e=>`_${e.toLowerCase()}`),d=(t,e,r)=>{const n=["string","boolean","number"],o=e==="camelCase"?h:A;return Array.isArray(t)?t.map(a=>n.includes(typeof a)||a===null?a:typeof a=="object"?d(a,e,r):a):t!==null&&typeof t=="object"?Object.entries(t).reduce((a,[s,u])=>{const i=r&&r[s]?r[s]:o(s);return a[i]=n.includes(typeof u)||u===null?u:d(u,e,r),a},{}):t},R=t=>{let e=[];for(const r of t)if(!(r.frontend_input!=="MULTILINE"||r.multiline_count<2))for(let n=2;n<=r.multiline_count;n++){const o={...r,name:`${r.code}_${n}`,code:`${r.code}_${n}`,id:`${r.code}_${n}`};e.push(o)}return e},g=t=>{var a,s,u;const e=((s=(a=t==null?void 0:t.data)==null?void 0:a.attributesForm)==null?void 0:s.items)||[];if(!e.length)return[];const r=(u=e.filter(i=>{var c;return!((c=i.frontend_input)!=null&&c.includes("HIDDEN"))}))==null?void 0:u.map(({code:i,...c})=>{const f=i!=="country_id"?i:"country_code";return{...c,name:f,id:f,code:f}}),n=R(r);return r.concat(n).map(i=>{const c=h(i.code);return d({...i,customUpperCode:c},"camelCase",{frontend_input:"fieldType",frontend_class:"className",is_required:"required",sort_order:"orderNumber"})}).sort((i,c)=>i.orderNumber-c.orderNumber)},S=t=>{var n,o;if(!((o=(n=t==null?void 0:t.data)==null?void 0:n.countries)!=null&&o.length))return[];const{countries:e}=t.data;return e.filter(({two_letter_abbreviation:a,full_name_locale:s})=>!!(a&&s)).map(a=>{const{two_letter_abbreviation:s,full_name_locale:u}=a;return{value:s,text:u}})},y=t=>{var r,n;return(n=(r=t==null?void 0:t.data)==null?void 0:r.country)!=null&&n.available_regions?t.data.country.available_regions.filter(o=>{if(!o)return!1;const{id:a,code:s,name:u}=o;return!!(a&&s&&u)}).map(o=>{const{id:a}=o;return{id:a,text:o.name,value:`${o.code},${o.id}`}}):[]},N=async t=>await l(t!=="shortRequest"?C:T,{method:"GET",cache:"force-cache",variables:{formCode:t}}).then(e=>{var r;return(r=e.errors)!=null&&r.length?_(e.errors):g(e)}).catch(m),v=`
  mutation CREATE_CUSTOMER_ADDRESS($input: CustomerAddressInput!) {
    createCustomerAddress(input:$input) {
      firstname
    }
  }
`,q=async t=>await l(v,{method:"POST",variables:{input:d(t,"snakeCase",{customAttributesV2:"custom_attributesV2"})}}).then(e=>{var r,n,o;return(r=e.errors)!=null&&r.length?_(e.errors):((o=(n=e==null?void 0:e.data)==null?void 0:n.createCustomerAddress)==null?void 0:o.firstname)||""}).catch(m),I=`
  query GET_COUNTRIES_QUERY {
    countries {
      two_letter_abbreviation
      full_name_locale
    }
  }
`,Q=async()=>await l(I,{method:"GET",cache:"no-cache"}).then(t=>{var e;return(e=t.errors)!=null&&e.length?_(t.errors):S(t)}).catch(m),$=`
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
`,B=async t=>await l($,{method:"GET",cache:"no-cache",variables:{countryCode:t}}).then(e=>{var r;return(r=e.errors)!=null&&r.length?_(e.errors):y(e)}).catch(m),G=`
  mutation UPDATE_CUSTOMER_ADDRESS($id: Int!,
  $input: CustomerAddressInput) {
    updateCustomerAddress(id:$id, input:$input) {
      firstname
   }
  }
`,H=async t=>{const{addressId:e,...r}=t;return e?await l(G,{method:"POST",variables:{id:e,input:d(r,"snakeCase",{customAttributesV2:"custom_attributesV2"})}}).then(n=>{var o,a,s;return(o=n.errors)!=null&&o.length?_(n.errors):((s=(a=n==null?void 0:n.data)==null?void 0:a.updateCustomerAddress)==null?void 0:s.firstname)||""}).catch(m):""};export{m as a,w as b,F as c,N as d,q as e,l as f,M as g,_ as h,Q as i,B as j,d as k,h as l,D as r,U as s,H as u};
