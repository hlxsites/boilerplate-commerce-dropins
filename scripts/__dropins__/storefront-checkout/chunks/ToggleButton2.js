import"@dropins/tools/event-bus.js";import{i as I}from"./getStoreConfig.js";import{s as z}from"./setPaymentMethod.js";import{H as O}from"./ToggleButton.js";import"@dropins/tools/preact-hooks.js";import{classes as f,Slot as x}from"@dropins/tools/lib.js";import{Skeleton as U,SkeletonRow as v,IllustratedMessage as $,Icon as q,ProgressSpinner as Z,Divider as F,RadioButton as G}from"@dropins/tools/components.js";/* empty css                     */import{jsxs as y,jsx as e,Fragment as J}from"@dropins/tools/preact-jsx-runtime.js";import*as M from"@dropins/tools/preact-compat.js";import{useState as P,useCallback as N,useEffect as T}from"@dropins/tools/preact-compat.js";import{useText as K}from"@dropins/tools/i18n.js";const Q=t=>M.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},M.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M17.93 14.8V18.75H5.97C4.75 18.75 3.75 17.97 3.75 17V6.5M3.75 6.5C3.75 5.53 4.74 4.75 5.97 4.75H15.94V8.25H5.97C4.75 8.25 3.75 7.47 3.75 6.5Z",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}),M.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M19.35 11.64H14.04V14.81H19.35V11.64Z",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}),M.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M17.9304 11.64V8.25H15.1504",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"})),X=()=>y(U,{"data-testid":"payment-methods-skeleton",children:[e(v,{variant:"heading",size:"medium"}),e(v,{variant:"empty",size:"medium"}),e(v,{size:"xlarge",fullWidth:!0}),e(v,{size:"xlarge",fullWidth:!0})]}),Y=({code:t,isLoading:n,isSelected:d,onChange:s,title:o})=>e(te,{className:"checkout-payment-methods__method",label:o,name:"payment-method",value:t,selected:d,onChange:s,radioButtonProps:{"aria-busy":n}}),D=({className:t,paymentMethodContent:n,isLoading:d,onChange:s=()=>{},options:o,selection:u})=>{const l=K({Title:"Checkout.PaymentMethods.title",EmptyState:"Checkout.PaymentMethods.emptyState"});return o===void 0?e(X,{}):y("div",{className:f(["checkout-payment-methods",t]),children:[e(O,{level:2,className:"checkout-payment-methods__title",children:l.Title}),!d&&o.length===0&&e($,{icon:e(q,{source:Q}),message:e("p",{children:l.EmptyState})}),y("div",{className:f(["checkout-payment-methods__wrapper"]),children:[d&&e(Z,{className:"checkout-payment-methods__spinner"}),e("div",{className:f(["checkout-payment-methods__methods",["checkout-payment-methods--loading",d],["checkout-payment-methods--full-width",o.length%2!==0]]),children:o==null?void 0:o.map(m=>e(Y,{code:m.code,onChange:s,isSelected:m.code===u,title:m.title},m.code))}),n&&e("div",{className:"checkout-payment-methods__content",children:n})]}),e(F,{variant:"primary"})]})},L={free:{render:t=>{const n=document.createElement("div");n.innerText="",t.replaceHTML(n)}},checkmo:{render:t=>{const n=document.createElement("div");n.innerText="",t.replaceHTML(n)}}};function ee(t){var E;const{onPlaceOrder:n,handleServerError:d,paymentMethodsSlot:s,isShippingInfoRequired:o}=t,[u,l]=P(),[m,g]=P(),[h,_]=P(L),[C,W]=P(!0),{data:a}=I.value,S=(a==null?void 0:a.id)??"",b=!!a,w=!!((E=a==null?void 0:a.shippingAddresses)!=null&&E[0]),i=a==null?void 0:a.availablePaymentMethods,c=a==null?void 0:a.selectedPaymentMethod,k=N(async r=>{try{if(l(r),!w&&o||r===(c==null?void 0:c.code))return;await z({cartId:S,paymentMethod:r})}catch(p){console.error("setting payment method failed:",p)}},[S,w,o,c]);T(()=>{b&&(c!=null&&c.code?(i==null?void 0:i.some(p=>p.code===c.code))?l(c.code):i!=null&&i.length?k(i[0].code):l(void 0):i[0]&&k(m||i[0].code))},[i,b,c,k,m]);const B=async r=>{await k(r),c!=null&&c.code||g(r)},V=N((r,p)=>{if(!r){console.warn("Payment method handler is ignored because it has no code");return}if(!p){console.warn("Payment method handler is ignored because it is empty");return}_(R=>({...R,[r]:p}))},[]),j=s?e(x,{name:"PaymentMethods",slot:s,context:{addPaymentMethodHandler:V,replaceHTML(r){this.replaceWith(r),W(!1)}}}):null,H=u?h[u]:null,A=H?e(x,{name:"PaymentMethodContent",slot:H.render,context:{cartId:S,onPlaceOrder:n,handleServerError:d,replaceHTML(r){this.replaceWith(r)}}},H):void 0;return T(()=>{!C&&h!=L&&console.warn("Payment method handlers you have added are ignored because the default content has been replaced")},[C,h]),{availablePaymentMethods:i,selectedPaymentMethod:u,onPaymentMethodChange:B,paymentMethodContent:A,mainSlotContent:j,isDefaultContentUsed:C}}const ue=t=>{const{onPlaceOrder:n,handleServerError:d,paymentMethodsSlot:s,isShippingInfoRequired:o=!0}=t,{availablePaymentMethods:u,selectedPaymentMethod:l,onPaymentMethodChange:m,paymentMethodContent:g,mainSlotContent:h,isDefaultContentUsed:_}=ee({onPlaceOrder:n,handleServerError:d,paymentMethodsSlot:s,isShippingInfoRequired:o});return y(J,{children:[h&&e(h.type,{ref:h.ref,...h.props}),_&&e(D,{options:u,selection:l,onChange:m,paymentMethodContent:g,isLoading:I.value.pending})]})},te=({label:t,name:n,value:d,icon:s,selected:o,onChange:u,className:l,children:m,radioButtonProps:g,...h})=>e("div",{className:f(["checkout-toggle-button",l,["checkout-toggle-button__selected",o]]),...h,children:y("label",{className:"checkout-toggle-button__actionButton",children:[e(G,{...g,label:"",name:n,value:d,checked:o,onChange:()=>u(d),"aria-label":t,className:f([l,"checkout-toggle-button__radioButton"])}),y("div",{className:"checkout-toggle-button__content",children:[s&&e(s.type,{...s==null?void 0:s.props,className:"checkout-toggle-button__icon"}),t]})]})});export{ue as P};
//# sourceMappingURL=ToggleButton2.js.map