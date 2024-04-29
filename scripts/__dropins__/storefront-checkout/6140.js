export const id=6140;export const ids=[6140];export const modules={6140:(r,e,t)=>{t.d(e,{W:()=>G,w:()=>$});var n=t(3388),a=t(8412),o=()=>(0,a.YH)(n.W,{"data-testid":"order-summary-skeleton",className:"order-summary__skeleton",children:[(0,a.im)(n.K,{variant:"heading",size:"medium"}),(0,a.im)(n.K,{variant:"empty",size:"medium"}),(0,a.im)(n.K,{size:"large",fullWidth:!0,lines:3})]}),i=t(4944),c=t(5536),u=t.n(c),m=t(7008),s=t.n(m),d=t(1496),l=t.n(d),p=t(9356),y=t.n(p),h=t(9904),g=t.n(h),v=t(7024),b={attributes:{"data-dropin":"storefront-checkout","data-sdk":"0.22.0-alpha1"}};b.styleTagTransform=function(r,e){setTimeout((()=>{window.window._loadedStyles=window.window._loadedStyles??{};const{core:t,sdk:n}=function(r,e){const t=r?.match(/^\.dropin-(\w+)/)?.[1],n=e.getAttribute("data-sdk");return{core:t,sdk:n}}(r,e),a=t?`sdk/${t}`:e.getAttribute("data-dropin");!function(r,e){r.setAttribute("data-dropin",e),r.removeAttribute("data-sdk")}(e,a);const o=window._loadedStyles[a];o?function(r,e,t,n){const a=function(r,e){const t=r=>{const[e,t]=r.split("-"),[n,a,o]=e.split(".").map(Number),i=t?t.match(/(alpha|beta)(\d*)/):null;return{major:n,minor:a,patch:o,preType:i?i[1]:"",preNumber:i?parseInt(i[2],10):0}},n=t(r),a=t(e);if(n.major!==a.major)return n.major>a.major?r:e;if(n.minor!==a.minor)return n.minor>a.minor?r:e;if(n.patch!==a.patch)return n.patch>a.patch?r:e;if(n.preType&&a.preType)return n.preType===a.preType?n.preNumber>a.preNumber?r:e:"beta"===n.preType?e:r;return n.preType?e:r}(t,n.sdk);if(!n.core||n.core&&a===n.sdk){const e=n.style.textContent;n.style.textContent=`${e}\n/* --- MERGED --- */\n${r}`}else n.core&&a!==n.sdk&&(n.style.textContent=`/* --- UPGRADED --- */\n${r}`);e.remove()}(r,e,n,o):(function(r,e,t,n,a){e.textContent=r,window._loadedStyles[a]={sdk:n,core:t,style:e}}(r,e,t,n,a),function(r,e){const t=document.querySelector("head"),{lastDropinStyleInjected:n,lastSDKStyleInjected:a}=window._loadedStyles;e?(a?t.insertBefore(r,a.nextSibling):t.insertBefore(r,t.firstChild),window._loadedStyles.lastSDKStyleInjected=r):(n?t.insertBefore(r,n.nextSibling):a?t.insertBefore(r,a.nextSibling):t.insertBefore(r,t.firstChild),window._loadedStyles.lastDropinStyleInjected=r)}(e,t))}),0)},b.setAttributes=y(),b.insert=l().bind(null,"head"),b.domAPI=s(),b.insertStyleElement=g();u()(v.c,b);v.c&&v.c.locals&&v.c.locals;var f=t(2216),_=t(2460),k=t(6660),w=t(5092),x=t(8424),O=t(8920),S=["className","summary","isLoading"];function j(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function T(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?j(Object(t),!0).forEach((function(e){N(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function N(r,e,t){var n;return(e="symbol"==typeof(n=function(r,e){if("object"!=typeof r||!r)return r;var t=r[Symbol.toPrimitive];if(void 0!==t){var n=t.call(r,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(r)}(e,"string"))?n:String(n))in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function P(r,e){if(null==r)return{};var t,n,a=function(r,e){if(null==r)return{};var t,n,a={},o=Object.keys(r);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||(a[t]=r[t]);return a}(r,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(a[t]=r[t])}return a}var C=r=>{var{className:e,summary:t,isLoading:n=!1}=r,o=P(r,S),{total:c,subtotal:u,shipping:m,tax:s}=t;return(0,a.YH)(k.M,T(T({},o),{},{className:(0,i.i)(["checkout-order-summary",["checkout-order-summary--loading",n],e]),children:[(0,a.im)(f._,{level:2,className:"checkout-order-summary__title",children:(0,a.im)(_.a,{id:"Checkout.OrderSummary.title"})}),(0,a.im)(w.c,{variant:"primary"}),n&&(0,a.im)(x.y,{className:"checkout-order-summary__spinner"}),(0,a.YH)("div",{"data-testid":"order-summary-subtotal",className:"checkout-order-summary__row",children:[(0,a.im)("p",{children:(0,a.im)(_.a,{id:"Checkout.OrderSummary.subtotal"})}),(0,a.im)(O.Y,{amount:u.amount,currency:u.currency,className:(0,i.i)(["checkout-order-summary__price",e])})]}),u.isTaxIncl&&(0,a.im)("div",{"data-testid":"order-summary-subtotal-incl-tax",className:"checkout-order-summary__row checkout-order-summary__row--muted",children:(0,a.im)("p",{children:(0,a.im)(_.a,{id:"Checkout.OrderSummary.includingTaxes"})})}),null!=m&&(0,a.YH)("div",{"data-testid":"order-summary-shipping",className:"checkout-order-summary__row",children:[(0,a.im)("p",{"data-testid":"order-summary-shipping-label",children:m.isEstimated?(0,a.im)(_.a,{id:"Checkout.OrderSummary.estimatedShipping"}):(0,a.im)(_.a,{id:"Checkout.OrderSummary.shipping"})}),0===m.amount?(0,a.im)("p",{"data-testid":"estimated-shipping",className:"checkout-order-summary__price",children:(0,a.im)(_.a,{id:"Checkout.OrderSummary.freeShipping"})}):(0,a.im)(O.Y,{"data-testid":"estimated-shipping",amount:m.amount,currency:m.currency,className:(0,i.i)(["checkout-order-summary__price",e])})]}),null!=s&&!s.breakdown&&(0,a.YH)("div",{"data-testid":"order-summary-tax",className:"checkout-order-summary__row",children:[(0,a.im)("p",{children:(0,a.im)(_.a,{id:"Checkout.OrderSummary.tax"})}),(0,a.im)(O.Y,{amount:s.amount,currency:s.currency,className:(0,i.i)(["checkout-order-summary__price",e])})]}),null!=s&&s.breakdown&&(0,a.YH)(a.ae,{children:[(0,a.im)(w.c,{variant:"secondary"}),(0,a.im)("div",{className:"checkout-order-summary__row checkout-order-summary__row--margin-bottom",children:(0,a.im)("p",{children:(0,a.im)(_.a,{id:"Checkout.OrderSummary.taxBreakdown"})})}),s.breakdown.map((r=>(0,a.YH)("div",{"data-testid":"order-summary-tax-breakdown",className:"checkout-order-summary__row checkout-order-summary__row--muted",children:[(0,a.im)("p",{children:r.label}),(0,a.im)(O.Y,{amount:r.amount.value,currency:r.amount.currency,className:(0,i.i)(["checkout-order-summary__price",e])})]},r.label))),(0,a.YH)("div",{"data-testid":"order-summary-tax-breakdown-total",className:"checkout-order-summary__row checkout-order-summary__row--strong checkout-order-summary__row--margin-top",children:[(0,a.im)("p",{children:(0,a.im)(_.a,{id:"Checkout.OrderSummary.taxTotal"})}),(0,a.im)(O.Y,{amount:s.amount,currency:s.currency,className:(0,i.i)(["checkout-order-summary__price",e])})]}),(0,a.im)(w.c,{variant:"secondary"})]}),(0,a.YH)("div",{"data-testid":"order-summary-total-incl-tax",className:"checkout-order-summary__row checkout-order-summary__row--emphasized",children:[(0,a.im)("p",{children:(0,a.im)(_.a,{id:"Checkout.OrderSummary.total"})}),(0,a.im)(O.Y,{amount:c.inclTax.amount,currency:c.inclTax.currency,className:(0,i.i)(["checkout-order-summary__price",e])})]}),null!=c.exclTax&&(0,a.YH)("div",{"data-testid":"order-summary-total-excl-tax",className:"checkout-order-summary__row checkout-order-summary__row--muted",children:[(0,a.im)("p",{children:(0,a.im)(_.a,{id:"Checkout.OrderSummary.totalExclTax"})}),(0,a.im)(O.Y,{amount:c.exclTax.amount,currency:c.exclTax.currency,className:(0,i.i)(["checkout-order-summary__price",e])})]})]}))},D=t(2256),Y=t(5668),E=t(7304),z=0;function H(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function L(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?H(Object(t),!0).forEach((function(e){I(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):H(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function I(r,e,t){var n;return(e="symbol"==typeof(n=function(r,e){if("object"!=typeof r||!r)return r;var t=r[Symbol.toPrimitive];if(void 0!==t){var n=t.call(r,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(r)}(e,"string"))?n:String(n))in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function A(){return A=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},A.apply(this,arguments)}var B=2,K={isLoading:!0};function $(){var{config:r}=(0,D.o3)(),e=void 0===r,t=Y.cartSignal.value.data;if(e||void 0===t)return K;var n=r.taxCartDisplay,a=n.shoppingCartDisplaySubtotal===B,o=null==t?void 0:t.shippingAddresses,i=!(null==o||!o.length),c=null==t?void 0:t.prices,u=null==c?void 0:c.grand_total,m=!!u,s=a?null==c?void 0:c.subtotal_including_tax:null==c?void 0:c.subtotal_excluding_tax,d=(null==c?void 0:c.applied_taxes)||[],l=!!d.length;if(!m)return{isLoading:!1};var p={total:{inclTax:{amount:u.value,currency:u.currency}},subtotal:{amount:s.value,currency:s.currency,isTaxIncl:a}};if(l){var y=d.reduce(((r,e)=>r+e.amount.value),z),h=d[0];p.tax={amount:y,currency:h.amount.currency},n.shoppingCartDisplayFullSummary&&(p.tax.breakdown=d)}if(!l&&n.shoppingCartDisplayZeroTax&&(p.tax={amount:z,currency:p.total.inclTax.currency}),n.shoppingCartDisplayGrandTotal){var g=p.tax?p.total.inclTax.amount-p.tax.amount:p.total.inclTax.amount;p.total.exclTax={amount:g,currency:p.total.inclTax.currency}}if(i){var v=o[0],b=null==v?void 0:v.selectedShippingMethod;return b?(p.shipping={amount:null==b?void 0:b.amount.value,currency:null==b?void 0:b.amount.currency,isEstimated:!1},{isLoading:!1,summary:p}):{isLoading:!1,summary:p}}return E.g.value?(p.shipping={amount:E.g.value.amount.value,currency:E.g.value.amount.currency,isEstimated:!0},p.total.inclTax.amount+=p.shipping.amount,p.total.exclTax&&(p.total.exclTax.amount+=p.shipping.amount),{isLoading:!1,summary:p}):{isLoading:!1,summary:p}}var G=r=>{var e=A({},(function(r){if(null==r)throw new TypeError("Cannot destructure "+r)}(r),r)),{isLoading:t,summary:n}=$();return(0,a.YH)("div",L(L({},e),{},{children:[!n&&(0,a.im)(o,{}),n&&(0,a.im)(C,{isLoading:t,summary:n})]}))}},7304:(r,e,t)=>{t.d(e,{g:()=>n});var n=(0,t(1520).OC)(void 0)},7024:(r,e,t)=>{t.d(e,{c:()=>c});var n=t(6008),a=t.n(n),o=t(2076),i=t.n(o)()(a());i.push([r.id,".checkout-order-summary .dropin-card__content{\n  gap:var(--spacing-xsmall);\n}\n\n.checkout-order-summary__title{\n  color:var(--color-neutral-800);\n  font:var(--type-headline-2-default-font);\n  letter-spacing:var(--type-headline-2-default-letter-spacing);\n  margin:0;\n}\n\n.checkout-order-summary .dropin-divider--primary{\n  margin:0 0 var(--spacing-medium) 0 !important;\n}\n\n.checkout-order-summary .dropin-divider--secondary{\n  margin:var(--spacing-xsmall) 0 var(--spacing-xsmall) 0 !important;\n}\n\n.checkout-order-summary__breakdown{\n  margin:var(--spacing-big) 0 var(--spacing-medium) 0;\n}\n\n.checkout-order-summary__breakdown .dropin-divider:last-child{\n  margin-bottom:0;\n}\n\n.checkout-order-summary__row{\n  display:flex;\n  justify-content:space-between;\n  color:var(--color-neutral-800);\n  font:var(--type-body-1-default-font);\n  letter-spacing:var(--type-body-1-default-letter-spacing);\n}\n\n.checkout-order-summary__row--margin-top{\n  margin-top:var(--spacing-xsmall);\n}\n\n.checkout-order-summary__row--margin-bottom{\n  margin-bottom:var(--spacing-xsmall);\n}\n\n.checkout-order-summary__row .checkout-order-summary__price{\n  color:var(--color-neutral-800);\n  font:var(--type-body-1-default-font);\n  letter-spacing:var(--type-body-1-default-letter-spacing);\n}\n\n.checkout-order-summary__row p{\n  margin:0;\n}\n\n.checkout-order-summary__row--strong{\n  font:var(--type-body-1-strong-font);\n  letter-spacing:var(--type-body-1-strong-letter-spacing);\n}\n\n.checkout-order-summary__row--strong .checkout-order-summary__price{\n  color:var(--color-neutral-800);\n  font:var(--type-body-1-strong-font);\n  letter-spacing:var(--type-body-1-strong-letter-spacing);\n}\n\n.checkout-order-summary__row--emphasized{\n  font:var(--type-body-1-emphasized-font);\n  letter-spacing:var(--type-body-1-emphasized-letter-spacing);\n  margin-top:var(--spacing-small);\n}\n\n.checkout-order-summary__row--emphasized .checkout-order-summary__price{\n  color:var(--color-neutral-800);\n  font:var(--type-body-1-emphasized-font);\n  letter-spacing:var(--type-body-1-emphasized-letter-spacing);\n}\n\n.checkout-order-summary__row--muted{\n  color:var(--color-neutral-700);\n  font:var(--type-body-2-default-font);\n  letter-spacing:var(--type-body-2-default-letter-spacing);\n  margin-top:calc(-1 * var(--spacing-xxsmall));\n}\n\n.checkout-order-summary__row--muted .checkout-order-summary__price{\n  color:var(--color-neutral-700);\n  font:var(--type-body-2-default-font);\n  letter-spacing:var(--type-body-2-default-letter-spacing);\n}\n\n.checkout-order-summary--loading .checkout-order-summary__row{\n  opacity:0.4;\n  pointer-events:none;\n}\n\n.checkout-order-summary__spinner{\n  margin:0 auto;\n  position:absolute;\n  z-index:999;\n  left:0;\n  right:0;\n  top:50%;\n  bottom:0;\n}\n\n.order-summary__skeleton{\n  margin-top:var(--spacing-medium);\n}\n\n@media only screen and (min-width: 320px) and (max-width: 768px){\n  .checkout-order-summary{\n    border-top:var(--shape-border-width-2) solid var(--color-neutral-400);\n    border-bottom:var(--shape-border-width-2) solid var(--color-neutral-400);\n    border-radius:0;\n  }\n\n  .checkout-order-summary__title{\n    display:none;\n  }\n\n  .checkout-order-summary .dropin-divider{\n    display:none;\n  }\n\n  .checkout-order-summary__breakdown{\n    margin-top:0;\n  }\n}\n",""]);const c=i}};