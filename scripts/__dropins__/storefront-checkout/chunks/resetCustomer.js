import{events as n}from"@dropins/tools/event-bus.js";import{p as o,o as a,j as l,n as u,m as c}from"./fixtures.js";import{Initializer as d}from"@dropins/tools/lib.js";import{a as f}from"./getCustomer.js";const m=t=>t?t.filter(Boolean).filter(e=>(e==null?void 0:e.label)&&(e==null?void 0:e.value)).map(e=>({text:e.label,value:e.value})):[],_=t=>t?t.filter(Boolean).filter(r=>(r==null?void 0:r.name)&&(r==null?void 0:r.value)):[],v=t=>t?t.filter(Boolean).map(e=>({code:e.code,defaultValue:e.default_value||void 0,frontendInput:e.frontend_input||void 0,isDisabled:!1,isRequired:e.is_required,label:e.label||void 0,multilineCount:e.multiline_count||void 0,options:m(e.options),sortOrder:e.sort_order||void 0,validateRules:_(e.validate_rules)})):[],g=t=>{if(t)return t.filter(r=>!!r).filter(r=>{const{two_letter_abbreviation:e,full_name_locale:s}=r;return!!e&&!!s}).map(r=>{const{two_letter_abbreviation:e,full_name_locale:s}=r;return{value:e,label:s}})},p=`
  query fetchAddressFormFields {
    attributesForm(formCode: "customer_register_address") {
      items {
        frontend_input
        code
        label
        default_value
        is_required
        options {
          label
          value
          is_default
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
        message
        type
      }
    }
  }
`,y=async()=>await o({type:"query",query:p,options:{method:"GET",cache:"no-cache"},path:"attributesForm.items",signalType:"addressFormFields",transformer:v,defaultValueOnFail:[]}),b=`
query getCountries {
    countries {
      two_letter_abbreviation
      full_name_locale
    }
}`,h=async()=>await o({type:"query",query:b,options:{method:"GET",cache:"no-cache"},path:"countries",signalType:"countryList",transformer:g,defaultValueOnFail:[]}),C=()=>[n.on("cart/data",t=>{const r=(t==null?void 0:t.id)||null;a.cartId=r,r?f():q()},{eager:!0}),n.on("authenticated",t=>{a.authenticated=t,t||w()},{eager:!0})],i=new d({init:async t=>{const r={guestViewCookieExpirationDays:30,...t};i.config.setConfig(r),F()},listeners:C}),V=i.config,F=async()=>Promise.all([l(),h(),y()]),q=()=>{a.cartId=null,u.value={pending:!1,data:null}},w=()=>{a.authenticated=!1,c.value={pending:!1,data:null}};export{F as a,w as b,V as c,y as f,h as g,i,q as r};
