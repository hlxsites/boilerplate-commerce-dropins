import{FetchGraphQL as f}from"@dropins/tools/fetch-graphql.js";import{events as u}from"@dropins/tools/event-bus.js";const{setEndpoint:m,setFetchGraphQlHeader:C,removeFetchGraphQlHeader:E,setFetchGraphQlHeaders:w,fetchGraphQl:A,getConfig:F}=new f().getMethods(),G=r=>{throw r instanceof DOMException&&r.name==="AbortError"||u.emit("error",{source:"auth",type:"network",error:r}),r},Q=r=>{const e=r.map(s=>s.message).join(" ");throw Error(e)},i=r=>r.replace(/_([a-z])/g,(e,s)=>s.toUpperCase()),l=r=>r.replace(/([A-Z])/g,e=>`_${e.toLowerCase()}`),a=(r,e,s)=>{const c=["string","boolean","number"],p=e==="camelCase"?i:l;return Array.isArray(r)?r.map(t=>c.includes(typeof t)||t===null?t:typeof t=="object"?a(t,e,s):t):r!==null&&typeof r=="object"?Object.entries(r).reduce((t,[n,o])=>{const h=s&&s[n]?s[n]:p(n);return t[h]=c.includes(typeof o)||o===null?o:a(o,e,s),t},{}):r};export{G as a,C as b,a as c,w as d,i as e,A as f,F as g,Q as h,E as r,m as s};
