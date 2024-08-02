import{jsx as t,jsxs as E}from"@dropins/tools/preact-jsx-runtime.js";import"../chunks/ToggleButton.js";import{events as S}from"@dropins/tools/event-bus.js";import{useState as L,useEffect as k}from"@dropins/tools/preact-hooks.js";import{q as M,T as I}from"../chunks/fixtures.js";import{VComponent as w,classes as C}from"@dropins/tools/lib.js";import{Skeleton as A,SkeletonRow as B,Price as h}from"@dropins/tools/components.js";/* empty css                             */import{useText as G,Text as c}from"@dropins/tools/i18n.js";import"../chunks/getMultilineValues.js";import"@dropins/tools/preact-compat.js";import"../chunks/ErrorBanner.js";import"../chunks/MergedCartBanner.js";import"@dropins/tools/preact.js";import"@dropins/tools/fetch-graphql.js";const P=()=>t(A,{"data-testid":"estimate-shipping-skeleton",children:t(B,{size:"xsmall"})}),Y=()=>{const[e,p]=L(),r=e!==void 0,a=(e==null?void 0:e.amount.value)===0,{data:n,pending:_}=M.value,y=_||n===void 0,l=n==null?void 0:n.shoppingCartDisplaySetting.shipping,D=l===I.INCLUDING_EXCLUDING_TAX,g=l===I.INCLUDING_TAX,x=G({freeShipping:"Checkout.EstimateShipping.freeShipping",taxToBeDetermined:"Checkout.EstimateShipping.taxToBeDetermined"});if(k(()=>{const i=S.on("shipping/estimate",s=>{const o=s.shippingMethod,{amount:m,amountExclTax:d,amountInclTax:u}=o;p({estimated:!0,amount:m,amountExclTax:d,amountInclTax:u})});return()=>{i==null||i.off()}},[]),k(()=>{const i=S.on("checkout/data",s=>{var f,T;const o=(T=(f=s==null?void 0:s.shippingAddresses)==null?void 0:f[0])==null?void 0:T.selectedShippingMethod;if(!o)return;const{amount:m,amountExclTax:d,amountInclTax:u}=o;p({estimated:!1,amount:m,amountExclTax:d,amountInclTax:u})});return()=>{i==null||i.off()}},[]),!r||y)return t(P,{});const N=()=>a?t("span",{"data-testId":"free-shipping",children:x.freeShipping}):g&&e.amountInclTax?t(h,{"data-testid":"shipping",amount:e.amountInclTax.value,currency:e.amountInclTax.currency}):t(h,{"data-testid":"shipping",amount:e.amount.value,currency:e.amount.currency}),v=()=>e.amountExclTax?t(h,{"data-testid":"shipping-excluding-tax",amount:e.amountExclTax.value,currency:e.amountExclTax.currency}):t("span",{children:x.taxToBeDetermined});return t(U,{estimated:e.estimated,price:N(),taxExcluded:D&&!a,taxIncluded:g&&!a,priceExclTax:v()})},U=({estimated:e=!1,price:p,priceExclTax:r,taxExcluded:a=!1,taxIncluded:n=!1})=>E("div",{"data-testid":"estimate-shipping",className:"checkout-estimate-shipping",children:[t("span",{className:"checkout-estimate-shipping__label",children:e?t(c,{id:"Checkout.EstimateShipping.estimated"}):t(c,{id:"Checkout.EstimateShipping.label"})}),t(w,{node:p,className:"checkout-estimate-shipping__price"}),n&&t("span",{"data-testid":"shipping-tax-included",className:C(["checkout-estimate-shipping__caption"]),children:t(c,{id:"Checkout.EstimateShipping.withTaxes"})}),a&&E("span",{"data-testid":"shipping-tax-included-excluded",className:C(["checkout-estimate-shipping__caption"]),children:[r," ",t(c,{id:"Checkout.EstimateShipping.withoutTaxes"})]})]});export{Y as EstimateShipping,Y as default};
