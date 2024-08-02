import{jsx as i,jsxs as x,Fragment as z}from"@dropins/tools/preact-jsx-runtime.js";import{e as B}from"./getMultilineValues.js";import{events as N}from"@dropins/tools/event-bus.js";import{w as O,x as L,n as b,q as P,y as q}from"./fixtures.js";import{s as D}from"./setShippingMethods.js";import{classes as H}from"@dropins/tools/lib.js";import{H as V}from"./ToggleButton.js";import{IllustratedMessage as Z,Icon as $,ProgressSpinner as F,RadioButton as G,Price as J,Divider as K,Skeleton as Q,SkeletonRow as _}from"@dropins/tools/components.js";import{useState as T,useEffect as y}from"@dropins/tools/preact-hooks.js";/* empty css                     */import*as c from"@dropins/tools/preact-compat.js";import{useCallback as U,useMemo as X,useEffect as I}from"@dropins/tools/preact-compat.js";import{useText as Y}from"@dropins/tools/i18n.js";const k=O(void 0),ee=e=>({countryCode:e.country_id,postCode:e.postcode||"",...e.region_id?{regionId:Number(e.region_id)}:{...e.region?{region:e.region}:{}}}),te=e=>({carrierCode:e.carrier.code||"",methodCode:e.code||"",amount:e.amount,amountExclTax:e.amountExclTax,amountInclTax:e.amountInclTax}),ne=e=>c.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},c.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M2.47266 4.90002H15.1851V10.9645H21.2495L23 12.715V17.6124H20.073",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}),c.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M15.1758 5.87573H19.0019L21.0394 10.7636",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}),c.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M9.76151 16.7898C9.76151 18.0525 8.72845 19.076 7.46582 19.076C6.20318 19.076 5.17969 18.0429 5.17969 16.7803C5.17969 15.5176 6.20318 14.4941 7.46582 14.4941C8.72845 14.4941 9.75195 15.5176 9.76151 16.7803C9.76151 16.7803 9.76151 16.7803 9.76151 16.7898Z",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}),c.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M19.8726 16.7898C19.8726 18.062 18.8491 19.0855 17.5769 19.0855C16.3047 19.0855 15.2812 18.062 15.2812 16.7898C15.2812 15.5176 16.3047 14.4941 17.5769 14.4941C18.8491 14.4941 19.8726 15.5176 19.8726 16.7898Z",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}),c.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M8.08792 7.63574H1.69824",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}),c.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M7.11229 10.3619H1",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}),c.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M5.16084 13.0402H1.92773",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}),c.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M9.76172 16.7611H15.2809",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}),c.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M2.38672 16.7611H5.17025",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"})),oe=({className:e,isLoading:n=!1,onSelectionChange:a=()=>{},options:o,selection:r,...d})=>{const u=Y({Title:"Checkout.ShippingMethods.title",EmptyState:"Checkout.ShippingMethods.emptyState"});return o===void 0?i(ie,{}):x("div",{...d,className:H(["checkout-shipping-methods",e]),children:[i(V,{level:3,className:"checkout-shipping-methods__title",children:u.Title}),!n&&o.length===0&&i(Z,{icon:i($,{source:ne}),message:i("p",{children:u.EmptyState})}),x("div",{className:H(["checkout-shipping-methods__content"]),children:[n&&i(F,{className:"checkout-shipping-methods__spinner"}),i("div",{className:H(["checkout-shipping-methods__options",["checkout-shipping-methods__options--loading",n]]),children:o.map(t=>i(G,{"data-testid":"shipping-method-radiobutton","aria-busy":n,id:t.value,name:"shipping-method",className:"checkout-shipping-methods__method",label:x(z,{children:[i(J,{amount:t.amount.value,currency:t.amount.currency})," ",i("span",{children:t.carrier.title})]}),description:t.title,value:t.value,checked:(r==null?void 0:r.value)===t.value,onChange:()=>a(t)},t.value))})]}),i(K,{variant:"primary"})]})},ie=()=>x(Q,{"data-testid":"shipping-methods-skeleton",children:[i(_,{variant:"heading",size:"small"}),i(_,{variant:"empty",size:"small"}),i(_,{size:"medium",fullWidth:!0}),i(_,{size:"medium",fullWidth:!0})]});function re(){var S;const[e,n]=T(),[a,o]=T();y(()=>{N.on("checkout/address",({address:C,type:g})=>{g==="shipping"&&n(C)})},[]),y(()=>{o(k.value)},[k.value]),y(()=>{L.value.pending?o(void 0):o(k.value)},[L.value.pending]);const{country_id:r,region_id:d,region:u,postcode:t}=e||{},v=!!e,h=b.value.data,s=!!((S=h==null?void 0:h.shippingAddresses)!=null&&S[0]);y(()=>{s||!a||!v||N.emit("shipping/estimate",{address:ee({country_id:r,region_id:d,region:u,postcode:t}),shippingMethod:te(a)})},[a,r,d,u,t,v,s])}const W=(e,n)=>e.code===n.code&&e.carrier.code===n.carrier.code;function se(e){const n=P.value.data,a=!n,o=b.value.data,r=b.value.pending,d=L.value.data,u=L.value.pending,t=k.value,v=o==null?void 0:o.id,h=o==null?void 0:o.shippingAddresses,s=h==null?void 0:h[0],S=!!s,C=s==null?void 0:s.availableShippingMethods,g=s==null?void 0:s.selectedShippingMethod,l=C||d,w=U(p=>{if(!S)return;const f={method_code:p.code,carrier_code:p.carrier.code};D([f]).catch(M=>{console.error("setting shipping methods on cart failed:",M)})},[S]),A=p=>{k.value=p},m=X(()=>{if(!(l!=null&&l.length))return;const p=l[0],f=t||g;return f?l.some(E=>W(E,f))?f:p:l.find(j=>j.carrier.code===(e==null?void 0:e.carrierCode)&&j.code===(e==null?void 0:e.methodCode))||p},[t,g,l,e]);return I(()=>{m&&((!t||!W(m,t))&&(k.value=m),(!g||!W(m,g))&&w(m))},[m,t,g,w]),I(()=>{if(!v||C)return;const{country:p,selectedRegion:f,selectedRegionId:M}=q.value,E=p||(n==null?void 0:n.defaultCountry);E&&B({criteria:{country_code:E,region_name:f,region_id:M}}).catch(R=>{L.value={pending:!1,data:[]},console.error("shipping methods estimation failed:",R)})},[v,C,n]),{isLoading:r||a||u,options:l,selection:m,onSelectionChange:A}}const Se=({preSelectedMethod:e,...n})=>{const{isLoading:a,options:o,selection:r,onSelectionChange:d}=se(e);return re(),i(oe,{...n,className:"checkout-shipping-methods",isLoading:a,onSelectionChange:d,options:o,selection:r})};export{Se as S};
