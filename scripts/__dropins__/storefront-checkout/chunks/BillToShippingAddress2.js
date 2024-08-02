import{jsx as o}from"@dropins/tools/preact-jsx-runtime.js";import"@dropins/tools/event-bus.js";import{k as p,n as f,l as k}from"./fixtures.js";import{s as b}from"./setBillingAddress.js";import{classes as S}from"@dropins/tools/lib.js";import{Checkbox as _,Skeleton as v,SkeletonRow as A}from"@dropins/tools/components.js";/* empty css                     */import{useText as B}from"@dropins/tools/i18n.js";import{useState as I,useEffect as g}from"@dropins/tools/preact-compat.js";const x=({className:r,isInitialized:s=!0,checked:i=!0,...t})=>{const e=B({title:"Checkout.BillToShippingAddress.title"});return s?o("div",{className:S(["checkout-bill-to-shipping-address",r]),children:o(_,{"data-testid":"bill-to-shipping-checkbox",className:"checkout-bill-to-shipping-address__checkbox",checked:i,name:"checkout-bill-to-shipping-address__checkbox",label:e.title,...t})}):o(C,{})},C=()=>o(v,{className:"bill-to-shipping-address__skeleton",children:o(A,{variant:"row",size:"small"})}),m="is_bill_to_shipping_address";function y(r,s,i){const t=r[i],e=s[i];return t===void 0&&e===void 0||t===null&&e===null?!0:typeof t=="object"&&typeof e=="object"?JSON.stringify(t)===JSON.stringify(e):t===e}function N(r,s,i){return!s&&!i?!0:!s||!i?!1:r.every(t=>{const e=t.code;return y(s,i,e)})}const T=({isBillToShipping:r})=>{var d;const[s,i]=I(!1),t=k.value.data,e=f.value.data,h=(e==null?void 0:e.id)||"",l=!!e,a=e==null?void 0:e.billingAddress,n=(d=e==null?void 0:e.shippingAddresses)==null?void 0:d[0],c=!!n;return g(()=>{if(s)return;const u=localStorage.getItem(m);u&&(i(!0),r.value={checked:u==="true",setByUser:!1})},[s,r]),g(()=>{if(s||!t||!l)return;i(!0);const u=N(t,a,n);r.value={checked:a?u:r.value.checked,setByUser:!1}},[a,t,l,r,s,n]),{cartId:h,isInitialized:s,hasShippingAddress:c}},L=({children:r,...s})=>{const i=p.value.checked,{hasShippingAddress:t,isInitialized:e}=T({isBillToShipping:p});return o(x,{...s,checked:i,isInitialized:e,onChange:l=>{const n=l.target.checked;if(p.value={checked:n,setByUser:!0},localStorage.setItem(m,n.toString()),!e||!n||!t)return;const c=new AbortController;return b({signal:c.signal,input:{same_as_shipping:!0}}).catch(d=>{console.error(d)}),()=>{c.abort()}},disabled:f.value.pending})};export{L as B,m as a,N as c};
