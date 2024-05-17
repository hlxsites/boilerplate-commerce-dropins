import"@dropins/tools/event-bus.js";import{e as a}from"./transform-shipping-methods.js";import{u as S}from"./countries.js";import{i as h}from"./IsBillToShippingSignal.js";import{s as A}from"./setBillingAddress.js";import{Checkbox as _,Skeleton as v,SkeletonRow as B}from"@dropins/tools/components/index.js";/* empty css                     */import{jsx as r}from"@dropins/tools/preact-jsx-runtime.js";import{useText as I}from"@dropins/tools/i18n.js";import{c as x}from"./classes.js";import{useState as C,useEffect as y}from"@dropins/tools/preact-compat.js";const T=({className:n,isInitialized:t=!0,checked:s=!0,...i})=>{const e=I({title:"Checkout.BillToShippingAddress.title"});return t?r("div",{className:x(["checkout-bill-to-shipping-address",n]),children:r(_,{"data-testid":"bill-to-shipping-checkbox",className:"checkout-bill-to-shipping-address__checkbox",checked:s,name:"checkout-bill-to-shipping-address__checkbox",label:e.title,...i})}):r(N,{})},N=()=>r(v,{className:"bill-to-shipping-address__skeleton",children:r(B,{variant:"row",size:"small"})}),f="is_bill_to_shipping_address";function z(n,t,s){const i=n[s],e=t[s];return i===void 0&&e===void 0||i===null&&e===null?!0:typeof i=="object"&&typeof e=="object"?JSON.stringify(i)===JSON.stringify(e):i===e}function j(n,t,s){return!t&&!s?!0:!t||!s?!1:n.every(i=>{const e=i.code;return z(t,s,e)})}const w=({isBillToShipping:n})=>{var u;const[t,s]=C(!1),{fields:i}=S(),e=a.value.data,l=!!e,p=e==null?void 0:e.billingAddress,d=(u=e==null?void 0:e.shippingAddresses)==null?void 0:u[0];return y(()=>{if(!i)return;const o=localStorage.getItem(f);if(!t&&o){s(!0),n.value={checked:o==="true",setByUser:!1};return}if(!t&&l){s(!0);const c=j(i,p,d);n.value={checked:e!=null&&e.billingAddress?c:n.value.checked,setByUser:!1}}},[p,e==null?void 0:e.billingAddress,i,l,n,t,d]),{isInitialized:t}},R=({children:n,...t})=>{const{data:s}=a.value,i=(s==null?void 0:s.id)||"",e=h.value.checked,{isInitialized:l}=w({isBillToShipping:h});return r(T,{...t,checked:e,isInitialized:l,onChange:d=>{var g;const o=d.target.checked,c=a.value.data,b=!!((g=c==null?void 0:c.shippingAddresses)!=null&&g[0]);if(h.value={checked:o,setByUser:!0},localStorage.setItem(f,o.toString()),l&&o&&b){const m=new AbortController;return A({signal:m.signal,cartId:i,input:{same_as_shipping:!0}}).catch(k=>{console.error(k)}),()=>{m.abort()}}},disabled:a.value.pending})};export{R as B,f as a,j as c};
//# sourceMappingURL=BillToShippingAddress2.js.map
