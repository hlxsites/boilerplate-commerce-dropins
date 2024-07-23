import{events as i}from"@dropins/tools/event-bus.js";import{p as s,o as a,k as l,n as c,m as u}from"./fixtures.js";import{Initializer as f}from"@dropins/tools/lib.js";import{a as g}from"./getCustomer.js";const m=e=>{if(e)return e.filter(t=>!!t).filter(t=>{const{two_letter_abbreviation:n,full_name_locale:o}=t;return!!n&&!!o}).map(t=>{const{two_letter_abbreviation:n,full_name_locale:o}=t;return{value:n,label:o}})},p=`
query getCountries {
    countries {
      two_letter_abbreviation
      full_name_locale
    }
}`,d=async()=>await s({type:"query",query:p,options:{method:"GET",cache:"no-cache"},path:"countries",signalType:"countryList",transformer:m,defaultValueOnFail:[]}),C=()=>[i.on("cart/data",e=>{const t=(e==null?void 0:e.id)||null;a.cartId=t,t?g():h()},{eager:!0}),i.on("authenticated",e=>{a.authenticated=e,e||y()},{eager:!0})],r=new f({init:async e=>{const t={guestViewCookieExpirationDays:30,...e};r.config.setConfig(t),_()},listeners:C}),I=r.config,_=async()=>Promise.all([l(),d()]),h=()=>{a.cartId=null,c.value={pending:!1,data:null}},y=()=>{a.authenticated=!1,u.value={pending:!1,data:null}};export{_ as a,y as b,I as c,d as g,r as i,h as r};
