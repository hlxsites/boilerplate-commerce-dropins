import{Initializer as s}from"@dropins/tools/lib.js";import{f as n,h as d,a as u}from"./chunks/updateCustomerAddress.js";import{e as x,d as H,g as Q,i as w,j as y,r as z,s as R,b,c as k,u as v}from"./chunks/updateCustomerAddress.js";import{g as O,r as S}from"./chunks/removeCustomerAddress.js";import"@dropins/tools/event-bus.js";import"@dropins/tools/fetch-graphql.js";const c=new s({init:async t=>{const a={authHeaderConfig:{header:"Authorization",tokenPrefix:"Bearer"}};c.config.setConfig({...a,...t})},listeners:()=>[]}),G=c.config,f=t=>{var a,r,e,i,o,m;return{email:((r=(a=t==null?void 0:t.data)==null?void 0:a.customer)==null?void 0:r.email)||"",firstname:((i=(e=t==null?void 0:t.data)==null?void 0:e.customer)==null?void 0:i.firstname)||"",lastname:((m=(o=t==null?void 0:t.data)==null?void 0:o.customer)==null?void 0:m.lastname)||""}},h=`
  query GET_CUSTOMER {
    customer {
     firstname
     lastname
     email
    }
  }
`,A=async()=>await n(h,{method:"GET",cache:"force-cache"}).then(t=>{var a;return(a=t.errors)!=null&&a.length?d(t.errors):f(t)}).catch(u);export{G as config,x as createCustomerAddress,n as fetchGraphQl,H as getAttributesForm,Q as getConfig,w as getCountries,A as getCustomer,O as getCustomerAddress,y as getRegions,c as initialize,S as removeCustomerAddress,z as removeFetchGraphQlHeader,R as setEndpoint,b as setFetchGraphQlHeader,k as setFetchGraphQlHeaders,v as updateCustomerAddress};
