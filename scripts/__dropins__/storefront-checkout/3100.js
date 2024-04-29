export const id=3100;export const ids=[3100];export const modules={2567:(e,t,n)=>{n.d(t,{a:()=>d});var o=n(3760),r=n(3112),a="\n  mutation setPaymentMethod($cartId: String!, $paymentMethod: String!) {\n    setPaymentMethodOnCart(\n      input: { cart_id: $cartId, payment_method: { code: $paymentMethod } }\n    ) {\n      cart {\n        id\n        ...CheckoutData\n        ...CartSummaryItems\n      }\n    }\n  }\n  ".concat(r.e2,"\n  ").concat(r.Qz,"\n"),i=n(9120),c=n(6824);function l(e,t,n,o,r,a,i){try{var c=e[a](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(o,r)}var d=function(){var e,t=(e=function*(e){var{cartId:t,paymentMethod:n}=e;if(!t)throw new o.Ij;if(!n)throw new o.GU;return yield(0,i.m)({type:"mutation",query:a,options:{variables:{cartId:t,paymentMethod:n}},path:"setPaymentMethodOnCart.cart",signalType:"cart",transformer:c.o})},function(){var t=this,n=arguments;return new Promise((function(o,r){var a=e.apply(t,n);function i(e){l(a,o,r,i,c,"next",e)}function c(e){l(a,o,r,i,c,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}()},3100:(e,t,n)=>{n.d(t,{U:()=>U});var o=n(2567),r=n(4944),a=n(5536),i=n.n(a),c=n(7008),l=n.n(c),d=n(1496),s=n.n(d),u=n(9356),p=n.n(u),m=n(9904),h=n.n(m),y=n(9396),f={attributes:{"data-dropin":"storefront-checkout","data-sdk":"0.22.0-alpha1"}};f.styleTagTransform=function(e,t){setTimeout((()=>{window.window._loadedStyles=window.window._loadedStyles??{};const{core:n,sdk:o}=function(e,t){const n=e?.match(/^\.dropin-(\w+)/)?.[1],o=t.getAttribute("data-sdk");return{core:n,sdk:o}}(e,t),r=n?`sdk/${n}`:t.getAttribute("data-dropin");!function(e,t){e.setAttribute("data-dropin",t),e.removeAttribute("data-sdk")}(t,r);const a=window._loadedStyles[r];a?function(e,t,n,o){const r=function(e,t){const n=e=>{const[t,n]=e.split("-"),[o,r,a]=t.split(".").map(Number),i=n?n.match(/(alpha|beta)(\d*)/):null;return{major:o,minor:r,patch:a,preType:i?i[1]:"",preNumber:i?parseInt(i[2],10):0}},o=n(e),r=n(t);if(o.major!==r.major)return o.major>r.major?e:t;if(o.minor!==r.minor)return o.minor>r.minor?e:t;if(o.patch!==r.patch)return o.patch>r.patch?e:t;if(o.preType&&r.preType)return o.preType===r.preType?o.preNumber>r.preNumber?e:t:"beta"===o.preType?t:e;return o.preType?t:e}(n,o.sdk);if(!o.core||o.core&&r===o.sdk){const t=o.style.textContent;o.style.textContent=`${t}\n/* --- MERGED --- */\n${e}`}else o.core&&r!==o.sdk&&(o.style.textContent=`/* --- UPGRADED --- */\n${e}`);t.remove()}(e,t,o,a):(function(e,t,n,o,r){t.textContent=e,window._loadedStyles[r]={sdk:o,core:n,style:t}}(e,t,n,o,r),function(e,t){const n=document.querySelector("head"),{lastDropinStyleInjected:o,lastSDKStyleInjected:r}=window._loadedStyles;t?(r?n.insertBefore(e,r.nextSibling):n.insertBefore(e,n.firstChild),window._loadedStyles.lastSDKStyleInjected=e):(o?n.insertBefore(e,o.nextSibling):r?n.insertBefore(e,r.nextSibling):n.insertBefore(e,n.firstChild),window._loadedStyles.lastDropinStyleInjected=e)}(t,n))}),0)},f.setAttributes=p(),f.insert=s().bind(null,"head"),f.domAPI=l(),f.insertStyleElement=h();i()(y.c,f);y.c&&y.c.locals&&y.c.locals;var b=n(5652),g=n(8412),v=["label","name","value","icon","selected","onChange","className","children","radioButtonProps"];function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(e,t,n){var o;return(t="symbol"==typeof(o=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?o:String(o))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var P=e=>{var{label:t,name:n,value:o,icon:a,selected:i,onChange:c,className:l,children:d,radioButtonProps:s}=e,u=S(e,v);return(0,g.im)("div",k(k({className:(0,r.i)(["checkout-toggle-button",l,["checkout-toggle-button__selected",i]])},u),{},{children:(0,g.YH)("label",{className:"checkout-toggle-button__actionButton",children:[(0,g.im)(b.O,k(k({},s),{},{label:"",name:n,value:o,checked:i,onChange:()=>c(o),"aria-label":t,className:(0,r.i)([l,"checkout-toggle-button__radioButton"])})),(0,g.YH)("div",{className:"checkout-toggle-button__content",children:[a&&(0,g.im)(a.type,k(k({},null==a?void 0:a.props),{},{className:"checkout-toggle-button__icon"})),t]})]})}))},j=n(2216),O=n(3388),x=()=>(0,g.YH)(O.W,{"data-testid":"payment-methods-skeleton",children:[(0,g.im)(O.K,{variant:"heading",size:"medium"}),(0,g.im)(O.K,{variant:"empty",size:"medium"}),(0,g.im)(O.K,{size:"xlarge",fullWidth:!0}),(0,g.im)(O.K,{size:"xlarge",fullWidth:!0})]}),C=n(7720),T={attributes:{"data-dropin":"storefront-checkout","data-sdk":"0.22.0-alpha1"}};T.styleTagTransform=function(e,t){setTimeout((()=>{window.window._loadedStyles=window.window._loadedStyles??{};const{core:n,sdk:o}=function(e,t){const n=e?.match(/^\.dropin-(\w+)/)?.[1],o=t.getAttribute("data-sdk");return{core:n,sdk:o}}(e,t),r=n?`sdk/${n}`:t.getAttribute("data-dropin");!function(e,t){e.setAttribute("data-dropin",t),e.removeAttribute("data-sdk")}(t,r);const a=window._loadedStyles[r];a?function(e,t,n,o){const r=function(e,t){const n=e=>{const[t,n]=e.split("-"),[o,r,a]=t.split(".").map(Number),i=n?n.match(/(alpha|beta)(\d*)/):null;return{major:o,minor:r,patch:a,preType:i?i[1]:"",preNumber:i?parseInt(i[2],10):0}},o=n(e),r=n(t);if(o.major!==r.major)return o.major>r.major?e:t;if(o.minor!==r.minor)return o.minor>r.minor?e:t;if(o.patch!==r.patch)return o.patch>r.patch?e:t;if(o.preType&&r.preType)return o.preType===r.preType?o.preNumber>r.preNumber?e:t:"beta"===o.preType?t:e;return o.preType?t:e}(n,o.sdk);if(!o.core||o.core&&r===o.sdk){const t=o.style.textContent;o.style.textContent=`${t}\n/* --- MERGED --- */\n${e}`}else o.core&&r!==o.sdk&&(o.style.textContent=`/* --- UPGRADED --- */\n${e}`);t.remove()}(e,t,o,a):(function(e,t,n,o,r){t.textContent=e,window._loadedStyles[r]={sdk:o,core:n,style:t}}(e,t,n,o,r),function(e,t){const n=document.querySelector("head"),{lastDropinStyleInjected:o,lastSDKStyleInjected:r}=window._loadedStyles;t?(r?n.insertBefore(e,r.nextSibling):n.insertBefore(e,n.firstChild),window._loadedStyles.lastSDKStyleInjected=e):(o?n.insertBefore(e,o.nextSibling):r?n.insertBefore(e,r.nextSibling):n.insertBefore(e,n.firstChild),window._loadedStyles.lastDropinStyleInjected=e)}(t,n))}),0)},T.setAttributes=p(),T.insert=s().bind(null,"head"),T.domAPI=l(),T.insertStyleElement=h();i()(C.c,T);C.c&&C.c.locals&&C.c.locals;var M=n(6336),D=n(3720),N=n(8424),I=n(2460),E=n(8220),B=e=>{var{code:t,isLoading:n,isSelected:o,onChange:r,title:a}=e;return(0,g.im)(P,{className:"checkout-payment-methods__method",label:a,name:"payment-method",value:t,selected:o,onChange:r,radioButtonProps:{"aria-busy":n}})},A=e=>{var{className:t,paymentMethodContent:n,isLoading:o,onChange:a=(()=>{}),options:i,selection:c}=e,l=(0,I.cF)({Title:"Checkout.PaymentMethods.title",EmptyState:"Checkout.PaymentMethods.emptyState"});return void 0===i?(0,g.im)(x,{}):(0,g.YH)("div",{className:(0,r.i)(["checkout-payment-methods",t]),children:[(0,g.im)(j._,{level:2,className:"checkout-payment-methods__title",children:l.Title}),!o&&0===i.length&&(0,g.im)(M.q,{icon:(0,g.im)(D.G,{source:E.default}),message:(0,g.im)("p",{children:l.EmptyState})}),(0,g.YH)("div",{className:(0,r.i)(["checkout-payment-methods__wrapper"]),children:[o&&(0,g.im)(N.y,{className:"checkout-payment-methods__spinner"}),(0,g.im)("div",{className:(0,r.i)(["checkout-payment-methods__methods",["checkout-payment-methods--loading",o],["checkout-payment-methods--full-width",i.length%2!=0]]),children:null==i?void 0:i.map((e=>(0,g.im)(B,{code:e.code,onChange:a,isSelected:e.code===c,title:e.title},e.code)))}),n&&(0,g.im)("div",{className:"checkout-payment-methods__content",children:n})]})]})},$={free:{render:e=>{var t=document.createElement("div");t.innerText="",e.replaceHTML(t)}},checkmo:{render:e=>{var t=document.createElement("div");t.innerText="",e.replaceHTML(t)}}},H=n(5668),K=n(6044),z=n(2796);function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach((function(t){L(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function L(e,t,n){var o;return(t="symbol"==typeof(o=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?o:String(o))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e,t,n,o,r,a,i){try{var c=e[a](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(o,r)}function G(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var a=e.apply(t,n);function i(e){R(a,o,r,i,c,"next",e)}function c(e){R(a,o,r,i,c,"throw",e)}i(void 0)}))}}var U=e=>{var{onPlaceOrder:t,handleServerError:n,paymentMethodsSlot:r,isShippingInfoRequired:a=!0}=e,{availablePaymentMethods:i,selectedPaymentMethod:c,onPaymentMethodChange:l,paymentMethodContent:d,mainSlotContent:s,isDefaultContentUsed:u}=function(e){var t,n,{onPlaceOrder:r,handleServerError:a,paymentMethodsSlot:i,isShippingInfoRequired:c}=e,l=(0,z.yK)(),[d,s]=(0,z.oT)(),[u,p]=(0,z.oT)(),[m,h]=(0,z.oT)($),[y,f]=(0,z.oT)(!0),{data:b}=H.cartSignal.value,v=null!==(t=null==b?void 0:b.id)&&void 0!==t?t:"",w=!!b,k=!(null==b||null===(n=b.shippingAddresses)||void 0===n||!n[0]),_=null==b?void 0:b.availablePaymentMethods,S=null==b?void 0:b.selectedPaymentMethod,P=(0,z.kZ)(function(){var e=G((function*(e){try{if(s(e),!k&&c)return;var t=e;if(t===l.current)return;l.current=t,yield(0,o.a)({cartId:v,paymentMethod:e})}catch(e){console.error("setting payment method failed:",e)}}));return function(t){return e.apply(this,arguments)}}(),[v,k,c]);(0,z.YB)((()=>{w&&(null!=S&&S.code?(null==_?void 0:_.some((e=>e.code===S.code)))?s(S.code):null!=_&&_.length?P(_[0].code):s(void 0):_[0]&&P(u||_[0].code))}),[_,w,S,P,u]);var j=function(){var e=G((function*(e){yield P(e),null!=S&&S.code||p(e)}));return function(t){return e.apply(this,arguments)}}(),O=(0,z.kZ)(((e,t)=>{e?t?h((n=>q(q({},n),{},{[e]:t}))):console.warn("Payment method handler is ignored because it is empty"):console.warn("Payment method handler is ignored because it has no code")}),[]),x=i?(0,g.im)(K.k,{name:"PaymentMethods",slot:i,context:{addPaymentMethodHandler:O,replaceHTML(e){this.replaceWith(e),f(!1)}}}):null,C=d?m[d]:null,T=C?(0,g.im)(K.k,{name:"PaymentMethodContent",slot:C.render,context:{cartId:v,onPlaceOrder:r,handleServerError:a,replaceHTML(e){this.replaceWith(e)}}},C):void 0;return(0,z.YB)((()=>{y||m==$||console.warn("Payment method handlers you have added are ignored because the default content has been replaced")}),[y,m]),{availablePaymentMethods:_,selectedPaymentMethod:d,onPaymentMethodChange:j,paymentMethodContent:T,mainSlotContent:x,isDefaultContentUsed:y}}({onPlaceOrder:t,handleServerError:n,paymentMethodsSlot:r,isShippingInfoRequired:a});return(0,g.YH)(g.ae,{children:[s&&(0,g.im)(s.type,q({ref:s.ref},s.props)),u&&(0,g.im)(A,{options:i,selection:c,onChange:l,paymentMethodContent:d,isLoading:H.cartSignal.value.pending})]})}},7720:(e,t,n)=>{n.d(t,{c:()=>c});var o=n(6008),r=n.n(o),a=n(2076),i=n.n(a)()(r());i.push([e.id,".checkout-payment-methods{\n  position:relative;\n  display:block;\n}\n\n.checkout-payment-methods__title{\n  font:var(--type-headline-2-default-font);\n  letter-spacing:var(--type-headline-2-default-letter-spacing);\n  margin:0 0 var(--spacing-medium) 0;\n}\n\n.checkout-payment-methods__wrapper{\n  position:relative;\n  display:grid;\n}\n\n.checkout-payment-methods__methods{\n  display:grid;\n  grid-template-columns:1fr 1fr;\n  gap:var(--spacing-medium);\n}\n\n.checkout-payment-methods__content{\n  margin-top:var(--spacing-medium);\n}\n\n.checkout-payment-methods--full-width{\n  grid-template-columns:1fr;\n}\n.checkout-payment-methods--loading{\n  opacity:0.4;\n  pointer-events:none;\n}\n\n.checkout-payment-methods__spinner{\n  margin:0 auto;\n  position:absolute;\n  z-index:999;\n  left:0;\n  right:0;\n  top:calc(50% - (var(--size) / 2));\n  bottom:0;\n}\n@media only screen and (min-width: 320px) and (max-width: 768px){\n  .checkout-payment-methods__methods{\n    grid-template-columns:1fr;\n  }\n}\n",""]);const c=i},9396:(e,t,n)=>{n.d(t,{c:()=>c});var o=n(6008),r=n.n(o),a=n(2076),i=n.n(a)()(r());i.push([e.id,".checkout-toggle-button{\n    display:block;\n    position:relative;\n    width:100%;\n}\n.checkout-toggle-button__actionButton{\n    cursor:pointer;\n    background-color:var(--color-neutral-200);\n    border:var(--shape-border-width-1) solid var(--color-neutral-400);\n    border-radius:var(--shape-border-radius-1);\n    font:var(--type-body-2-strong-font);\n    letter-spacing:var(--type-body-2-strong-letter-spacing);\n    padding:var(--spacing-medium);\n    align-items:center;\n    display:grid;\n}\n\n.checkout-toggle-button__selected .checkout-toggle-button__actionButton{\n    background-color:var(--color-neutral-50);\n    border:var(--shape-border-width-1) solid var(--color-neutral-800);\n}\n\n.checkout-toggle-button:has(input:focus-visible){\n    outline:0 none;\n    box-shadow:0 0 0 var(--shape-icon-stroke-4) var(--color-neutral-400);\n    -webkit-box-shadow:0 0 0 var(--shape-icon-stroke-4) var(--color-neutral-400);\n    -moz-box-shadow:0 0 0 var(--shape-icon-stroke-4) var(--color-neutral-400);\n    border-radius:var(--shape-border-radius-1);\n}\n.checkout-toggle-button__radioButton.dropin-radio-button{\n    cursor:pointer;\n    position:absolute;\n}\n\n.checkout-toggle-button__radioButton .dropin-radio-button__label:before{\n    cursor:pointer;\n    margin-right:0;\n}\n.checkout-toggle-button__radioButton .dropin-radio-button__input:focus-visible + .dropin-radio-button__label:before{\n    box-shadow:0 0 0 var(--shape-border-width-1) var(--color-neutral-600);\n}\n.checkout-toggle-button__content{\n    display:flex;\n    align-items:center;\n    justify-content:center;\n    margin-left:var(--spacing-big);\n}\n.checkout-toggle-button__icon{\n    height:24px;\n    margin-right:var(--spacing-xsmall);\n}\n",""]);const c=i}};