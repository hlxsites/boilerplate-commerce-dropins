import"@dropins/tools/event-bus.js";import{e as n}from"./transform-shipping-methods__C9nMUveXm0.js";import{u as c}from"./countries__BWdjypaepl.js";import{i as A}from"./IsBillToShippingSignal__CUQ6LHv0Ft.js";import{A as g}from"./estimateShippingMethods__PHyGEC9qIU.js";import{s as F}from"./setBillingAddress__CNHO_A-jkM.js";import{p as B}from"./setShippingAddress__DDiHao_Iad.js";import{A as h}from"./usePreselectedFields__op7w4BuLdn.js";import"@dropins/tools/preact-hooks.js";import{c as b}from"./BillToShippingAddress__DIBXmpjvDD.js";import{useRef as v,useCallback as m,useEffect as I}from"@dropins/tools/preact-compat.js";import{jsx as y}from"@dropins/tools/preact-jsx-runtime.js";import{B as k}from"./constants__CI9SypcNWw.js";const w=a=>{const{fields:o}=c(),i=v(null),{data:e}=n.value,d=(e==null?void 0:e.id)||"",{checked:r,setByUser:t}=A.value,p=!r,u=m(s=>F({signal:s.signal,cartId:d,input:{address:r?void 0:B(s.address),same_as_shipping:r}}),[d,r]),f=m(()=>{var l;const s=n.value.data;return!b(o,s==null?void 0:s.billingAddress,(l=s==null?void 0:s.shippingAddresses)==null?void 0:l[0])},[o]);return I(()=>{if(!t)return;const s=new AbortController;return r||i.current.triggerSaveAddress(s.signal),()=>{s.abort()}},[r,t]),y(h,{...a,addressType:g.BILLING,"data-testid":"billing-form",headingId:"Checkout.BillingAddress.title",name:k,ref:i,saveAddressHandler:u,shouldAutoFillForm:f,style:{display:p?"block":"none"}})};export{w as B};
//# sourceMappingURL=BillingForm__DG2ofjN-Hp.js.map
