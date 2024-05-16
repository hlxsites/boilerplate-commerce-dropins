const __vite__fileDeps=["debugger.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import"@dropins/tools/event-bus.js";import{e as q}from"./transform-shipping-methods__C9nMUveXm0.js";import"./countries__BWdjypaepl.js";import{s as J}from"./setPaymentMethod__CEn9gOtRHW.js";import{H as Z}from"./usePreselectedFields__op7w4BuLdn.js";import{useEffect as T,useRef as I,useState as B,useMemo as F,useContext as G,useCallback as _}from"@dropins/tools/preact-hooks.js";import{IllustratedMessage as K,Icon as Q,ProgressSpinner as X,Skeleton as Y,SkeletonRow as E,RadioButton as ee}from"@dropins/tools/components/index.js";/* empty css                                 */import{jsx as d,jsxs as v,Fragment as te}from"@dropins/tools/preact-jsx-runtime.js";import{c as M}from"./classes__DJBjVfEyCI.js";import"@adobe/elsie/components/CartItem/CartItemSkeleton";import*as N from"@dropins/tools/preact-compat.js";import{useRef as ne,useState as R,useCallback as $,useEffect as O}from"@dropins/tools/preact-compat.js";import{IntlContext as oe,useText as re}from"@dropins/tools/i18n.js";const se="modulepreload",ie=function(t){return"/"+t},W={},ce=function(r,o,c){let s=Promise.resolve();if(o&&o.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),a=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=Promise.all(o.map(i=>{if(i=ie(i),i in W)return;W[i]=!0;const f=i.endsWith(".css"),y=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${y}`))return;const m=document.createElement("link");if(m.rel=f?"stylesheet":se,f||(m.as="script",m.crossOrigin=""),m.href=i,a&&m.setAttribute("nonce",a),document.head.appendChild(m),f)return new Promise((C,p)=>{m.addEventListener("load",C),m.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${i}`)))})}))}return s.then(()=>r()).catch(l=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=l,window.dispatchEvent(a),!a.defaultPrevented)throw l})};function le(t={},r,o){const c=I(null),s=I(!1),l=I([]),[a,i]=B({children:[o==null?void 0:o({})]}),[f,y]=B({}),m=F(()=>({get:e=>f[e],set:(e,n)=>{y({...m,[e]:n})}}),[f]),{intl:C}=G(oe);t.dictionary=C.dictionary,t._setProps=i;const p=_(e=>{typeof e=="function"?l.current.push(e):console.warn("Skipped: Invalid _registerMethod",e)},[]);t._registerMethod=p;const P=_(e=>d("div",{"data-slot-html-element":e.tagName.toLowerCase(),ref:n=>{n==null||n.appendChild(e)}}),[]);return t._htmlElementToVNode=P,t.getSlotElement=_(e=>{const n=document.querySelector(`[data-slot-key="${e}"]`);if(n)return{appendChild:h=>{n.appendChild(h)},prependChild:h=>{n.insertBefore(h,n.firstChild)},appendSibling:h=>{const u=n.parentNode;u==null||u.insertBefore(h,n.nextSibling)},prependSibling:h=>{const u=n.parentNode;u==null||u.insertBefore(h,n)}}},[]),t.onChange=_(e=>{l.current.push(e)},[]),t.replaceWith=_(e=>{p(n=>{const h=P(e);n._setProps({children:[h]})})},[P,p]),t.appendChild=_(e=>{p(n=>{const h=P(e);n._setProps(u=>({...u,children:[...u.children,h]}))})},[P,p]),t.prependChild=_(e=>{p(n=>{const h=P(e);n._setProps(u=>({...u,children:[h,...u.children]}))})},[P,p]),t.appendSibling=_(e=>{p(()=>{var h,u;const n=(h=c.current)==null?void 0:h.parentNode;n==null||n.insertBefore(e,((u=c.current)==null?void 0:u.nextSibling)??null)})},[p]),t.prependSibling=_(e=>{p(()=>{var h;const n=(h=c.current)==null?void 0:h.parentNode;n==null||n.insertBefore(e,c.current)})},[p]),T(()=>{const e=c.current;if(!(!r||!e))try{r(t,e)}catch(n){console.error(`Error in "${r.name}" Slot callback`,n)}},[]),T(()=>{i({children:[o==null?void 0:o(a)]}),l.current.forEach(e=>{e(t,m)}),(o==null?void 0:o.name)==="render"&&s.current===!1&&(s.current=!0)},[JSON.stringify(t),JSON.stringify(f),s.current]),[c,a]}function V({name:t,slot:r,context:o,children:c,render:s,...l}){const[a,i]=le(o,r,s??(()=>c));return T(()=>{t||console.warn('Slot "name" is required')},[t]),d("div",{...l,ref:a,"data-slot":t,children:i.children})}window.DROPINS=window.DROPINS||{};window.DROPINS.showSlots=async t=>{if(window.sessionStorage.setItem("dropin-debugger--show-slots",t.toString()),document.body.classList.toggle("dropin-debugger--show-slots",t),t)try{await ce(()=>Promise.resolve({}),__vite__mapDeps([0]))}catch{}};window.DROPINS.showSlots(window.sessionStorage.getItem("dropin-debugger--show-slots")==="true");const ae=t=>N.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},N.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M17.93 14.8V18.75H5.97C4.75 18.75 3.75 17.97 3.75 17V6.5M3.75 6.5C3.75 5.53 4.74 4.75 5.97 4.75H15.94V8.25H5.97C4.75 8.25 3.75 7.47 3.75 6.5Z",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}),N.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M19.35 11.64H14.04V14.81H19.35V11.64Z",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}),N.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M17.9304 11.64V8.25H15.1504",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"})),de=({code:t,isLoading:r,isSelected:o,onChange:c,title:s})=>d(me,{className:"checkout-payment-methods__method",label:s,name:"payment-method",value:t,selected:o,onChange:c,radioButtonProps:{"aria-busy":r}}),he=({className:t,paymentMethodContent:r,isLoading:o,onChange:c=()=>{},options:s,selection:l})=>{const a=re({Title:"Checkout.PaymentMethods.title",EmptyState:"Checkout.PaymentMethods.emptyState"});return s===void 0?d(ue,{}):v("div",{className:M(["checkout-payment-methods",t]),children:[d(Z,{level:2,className:"checkout-payment-methods__title",children:a.Title}),!o&&s.length===0&&d(K,{icon:d(Q,{source:ae}),message:d("p",{children:a.EmptyState})}),v("div",{className:M(["checkout-payment-methods__wrapper"]),children:[o&&d(X,{className:"checkout-payment-methods__spinner"}),d("div",{className:M(["checkout-payment-methods__methods",["checkout-payment-methods--loading",o],["checkout-payment-methods--full-width",s.length%2!==0]]),children:s==null?void 0:s.map(i=>d(de,{code:i.code,onChange:c,isSelected:i.code===l,title:i.title},i.code))}),r&&d("div",{className:"checkout-payment-methods__content",children:r})]})]})},ue=()=>v(Y,{"data-testid":"payment-methods-skeleton",children:[d(E,{variant:"heading",size:"medium"}),d(E,{variant:"empty",size:"medium"}),d(E,{size:"xlarge",fullWidth:!0}),d(E,{size:"xlarge",fullWidth:!0})]}),me=({label:t,name:r,value:o,icon:c,selected:s,onChange:l,className:a,children:i,radioButtonProps:f,...y})=>d("div",{className:M(["checkout-toggle-button",a,["checkout-toggle-button__selected",s]]),...y,children:v("label",{className:"checkout-toggle-button__actionButton",children:[d(ee,{...f,label:"",name:r,value:o,checked:s,onChange:()=>l(o),"aria-label":t,className:M([a,"checkout-toggle-button__radioButton"])}),v("div",{className:"checkout-toggle-button__content",children:[c&&d(c.type,{...c==null?void 0:c.props,className:"checkout-toggle-button__icon"}),t]})]})}),A={free:{render:t=>{const r=document.createElement("div");r.innerText="",t.replaceHTML(r)}},checkmo:{render:t=>{const r=document.createElement("div");r.innerText="",t.replaceHTML(r)}}};function pe(t){var L;const{onPlaceOrder:r,handleServerError:o,paymentMethodsSlot:c,isShippingInfoRequired:s}=t,l=ne(),[a,i]=R(),[f,y]=R(),[m,C]=R(A),[p,P]=R(!0),{data:e}=q.value,n=(e==null?void 0:e.id)??"",h=!!e,u=!!((L=e==null?void 0:e.shippingAddresses)!=null&&L[0]),S=e==null?void 0:e.availablePaymentMethods,k=e==null?void 0:e.selectedPaymentMethod,b=$(async g=>{try{if(i(g),!u&&s)return;const w=g;if(w===l.current)return;l.current=w,await J({cartId:n,paymentMethod:g})}catch(w){console.error("setting payment method failed:",w)}},[n,u,s]);O(()=>{h&&(k!=null&&k.code?(S==null?void 0:S.some(w=>w.code===k.code))?i(k.code):S!=null&&S.length?b(S[0].code):i(void 0):S[0]&&b(f||S[0].code))},[S,h,k,b,f]);const U=async g=>{await b(g),k!=null&&k.code||y(g)},j=$((g,w)=>{if(!g){console.warn("Payment method handler is ignored because it has no code");return}if(!w){console.warn("Payment method handler is ignored because it is empty");return}C(D=>({...D,[g]:w}))},[]),z=c?d(V,{name:"PaymentMethods",slot:c,context:{addPaymentMethodHandler:j,replaceHTML(g){this.replaceWith(g),P(!1)}}}):null,H=a?m[a]:null,x=H?d(V,{name:"PaymentMethodContent",slot:H.render,context:{cartId:n,onPlaceOrder:r,handleServerError:o,replaceHTML(g){this.replaceWith(g)}}},H):void 0;return O(()=>{!p&&m!=A&&console.warn("Payment method handlers you have added are ignored because the default content has been replaced")},[p,m]),{availablePaymentMethods:S,selectedPaymentMethod:a,onPaymentMethodChange:U,paymentMethodContent:x,mainSlotContent:z,isDefaultContentUsed:p}}const Ne=t=>{const{onPlaceOrder:r,handleServerError:o,paymentMethodsSlot:c,isShippingInfoRequired:s=!0}=t,{availablePaymentMethods:l,selectedPaymentMethod:a,onPaymentMethodChange:i,paymentMethodContent:f,mainSlotContent:y,isDefaultContentUsed:m}=pe({onPlaceOrder:r,handleServerError:o,paymentMethodsSlot:c,isShippingInfoRequired:s});return v(te,{children:[y&&d(y.type,{ref:y.ref,...y.props}),m&&d(he,{options:l,selection:a,onChange:i,paymentMethodContent:f,isLoading:q.value.pending})]})};export{Ne as P,V as S};
//# sourceMappingURL=PaymentMethods__DRBAHUDafA.js.map
