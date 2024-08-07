import{Initializer as c}from"@dropins/tools/lib.js";import{f as n,h as d,a as f}from"./chunks/addressField.config.js";import{g as H,r as T,s as y,b as Q,c as b}from"./chunks/addressField.config.js";import{c as z,g as O,a as R,b as k,u as v}from"./chunks/updateCustomerAddress.js";import{g as S,r as U}from"./chunks/removeCustomerAddress.js";import{g as q}from"./chunks/getOrderHistoryList.js";import"@dropins/tools/fetch-graphql.js";import"@dropins/tools/event-bus.js";const s=new c({init:async t=>{const r={authHeaderConfig:{header:"Authorization",tokenPrefix:"Bearer"}};s.config.setConfig({...r,...t})},listeners:()=>[]}),G=s.config,u=t=>{var r,a,e,o,i,m;return{email:((a=(r=t==null?void 0:t.data)==null?void 0:r.customer)==null?void 0:a.email)||"",firstname:((o=(e=t==null?void 0:t.data)==null?void 0:e.customer)==null?void 0:o.firstname)||"",lastname:((m=(i=t==null?void 0:t.data)==null?void 0:i.customer)==null?void 0:m.lastname)||""}},h=`
  query GET_CUSTOMER {
    customer {
     firstname
     lastname
     email
    }
  }
`,x=async()=>await n(h,{method:"GET",cache:"force-cache"}).then(t=>{var r;return(r=t.errors)!=null&&r.length?d(t.errors):u(t)}).catch(f);export{G as config,z as createCustomerAddress,n as fetchGraphQl,O as getAttributesForm,H as getConfig,R as getCountries,x as getCustomer,S as getCustomerAddress,q as getOrderHistoryList,k as getRegions,s as initialize,U as removeCustomerAddress,T as removeFetchGraphQlHeader,y as setEndpoint,Q as setFetchGraphQlHeader,b as setFetchGraphQlHeaders,v as updateCustomerAddress};
