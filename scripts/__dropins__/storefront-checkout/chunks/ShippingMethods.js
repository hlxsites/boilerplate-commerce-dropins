import{j as I}from"./countries.js";import"@dropins/tools/event-bus.js";import{e as N,g as j,r as T}from"./dispatchApiCall.js";import{s as y}from"./SelectedShippingMethodSignal.js";import{s as O}from"./setShippingMethods.js";import{e as B}from"./estimateShippingMethods.js";import{classes as H}from"@dropins/tools/lib.js";import{H as P}from"./CartSummaryItem.js";import{IllustratedMessage as V,Icon as Z,ProgressSpinner as q,RadioButton as D,Price as F,Skeleton as $,SkeletonRow as C}from"@dropins/tools/components.js";import"@dropins/tools/preact-hooks.js";/* empty css                     */import{jsx as t,jsxs as E,Fragment as A}from"@dropins/tools/preact-jsx-runtime.js";import*as r from"@dropins/tools/preact-compat.js";import{useCallback as G,useMemo as J,useEffect as x}from"@dropins/tools/preact-compat.js";import{useText as K}from"@dropins/tools/i18n.js";const Q=e=>r.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M2.47266 4.90002H15.1851V10.9645H21.2495L23 12.715V17.6124H20.073",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M15.1758 5.87573H19.0019L21.0394 10.7636",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M9.76151 16.7898C9.76151 18.0525 8.72845 19.076 7.46582 19.076C6.20318 19.076 5.17969 18.0429 5.17969 16.7803C5.17969 15.5176 6.20318 14.4941 7.46582 14.4941C8.72845 14.4941 9.75195 15.5176 9.76151 16.7803C9.76151 16.7803 9.76151 16.7803 9.76151 16.7898Z",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M19.8726 16.7898C19.8726 18.062 18.8491 19.0855 17.5769 19.0855C16.3047 19.0855 15.2812 18.062 15.2812 16.7898C15.2812 15.5176 16.3047 14.4941 17.5769 14.4941C18.8491 14.4941 19.8726 15.5176 19.8726 16.7898Z",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M8.08792 7.63574H1.69824",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M7.11229 10.3619H1",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M5.16084 13.0402H1.92773",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M9.76172 16.7611H15.2809",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M2.38672 16.7611H5.17025",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"})),U=({className:e,isLoading:i=!1,onSelectionChange:s=()=>{},options:l,selection:o,...g})=>{const v=K({Title:"Checkout.ShippingMethods.title",EmptyState:"Checkout.ShippingMethods.emptyState"});return l===void 0?t(X,{}):E("div",{...g,className:H(["checkout-shipping-methods",e]),children:[t(P,{level:3,className:"checkout-shipping-methods__title",children:v.Title}),!i&&l.length===0&&t(V,{icon:t(Z,{source:Q}),message:t("p",{children:v.EmptyState})}),E("div",{className:H(["checkout-shipping-methods__content"]),children:[i&&t(q,{className:"checkout-shipping-methods__spinner"}),t("div",{className:H(["checkout-shipping-methods__options",["checkout-shipping-methods__options--loading",i]]),children:l.map(n=>t(D,{"data-testid":"shipping-method-radiobutton","aria-busy":i,id:n.value,name:"shipping-method",className:"checkout-shipping-methods__method",label:E(A,{children:[t(F,{amount:n.amount.value,currency:n.amount.currency})," ",t("span",{children:n.carrier.title})]}),description:n.title,value:n.value,checked:(o==null?void 0:o.value)===n.value,onChange:()=>s(n)},n.value))})]})]})},X=()=>E($,{"data-testid":"shipping-methods-skeleton",children:[t(C,{variant:"heading",size:"small"}),t(C,{variant:"empty",size:"small"}),t(C,{size:"medium",fullWidth:!0}),t(C,{size:"medium",fullWidth:!0})]}),W=(e,i)=>e.code===i.code&&e.carrier.code===i.carrier.code;function Y(e){const s=I().config,l=!s,o=N.value.data,g=N.value.pending,v=j.value.data,n=j.value.pending,m=y.value,u=o==null?void 0:o.id,L=o==null?void 0:o.shippingAddresses,p=L==null?void 0:L[0],b=!!p,M=p==null?void 0:p.availableShippingMethods,k=p==null?void 0:p.selectedShippingMethod,a=M||v,w=G(c=>{if(!u||!b)return;const h={method_code:c.code,carrier_code:c.carrier.code};O({cartId:u,shippingMethods:[h]}).catch(S=>{console.error("setting shipping methods on cart failed:",S)})},[u,b]),R=c=>{y.value=c},d=J(()=>{if(!(a!=null&&a.length))return;const c=a[0],h=m||k;return h?a.some(f=>W(f,h))?h:c:a.find(_=>_.carrier.code===(e==null?void 0:e.carrierCode)&&_.code===(e==null?void 0:e.methodCode))||c},[m,k,a,e]);return x(()=>{d&&((!m||!W(d,m))&&(y.value=d),(!k||!W(d,k))&&w(d))},[d,m,k,w]),x(()=>{if(!u||M)return;const{country:c,selectedRegion:h,selectedRegionId:S}=T.value,f=c||(s==null?void 0:s.defaultCountry);f&&B({cartId:u,criteria:{country_code:f,region_name:h,region_id:S}}).catch(z=>{j.value={pending:!1,data:[]},console.error("shipping methods estimation failed:",z)})},[u,M,s]),{isLoading:g||l||n,options:a,selection:d,onSelectionChange:R}}const ge=({preSelectedMethod:e,...i})=>{const{isLoading:s,options:l,selection:o,onSelectionChange:g}=Y(e);return t(U,{...i,className:"checkout-shipping-methods",isLoading:s,onSelectionChange:g,options:l,selection:o})};export{ge as S};
//# sourceMappingURL=ShippingMethods.js.map
