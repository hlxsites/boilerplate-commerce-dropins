import*as e from"@dropins/tools/event-bus.js";import*as t from"@dropins/tools/fetch-graphql.js";import*as r from"@dropins/tools/preact-compat.js";import*as n from"@dropins/tools/preact-hooks.js";import*as a from"@dropins/tools/preact-jsx-runtime.js";import*as i from"@dropins/tools/preact.js";export const id=6784;export const ids=[6784,3724];export const modules={3724:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var n,a,i=r(9064);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}const s=function(e){return i.createElement("svg",o({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n||(n=i.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M.75 12C.75 5.784 5.784.75 12 .75S23.25 5.784 23.25 12 18.216 23.25 12 23.25.75 18.216.75 12Z",stroke:"currentColor"})),a||(a=i.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M11.75 5.884V4.75h.5v1.134l-.201 7.187h-.098l-.201-7.187Zm.05 12.366v-1.263h.425v1.263H11.8Z",stroke:"currentColor"})))}},6600:(e,t,r)=>{r.d(t,{G:()=>S});var n=r(8884),a=r(6528),i=r(5536),o=r.n(i),s=r(7008),l=r.n(s),p=r(1496),u=r.n(p),c=r(9356),d=r.n(c),y=r(9904),h=r.n(y),f=r(8848),m={attributes:{"data-dropin":"storefront-checkout","data-sdk":"0.21.2"}};m.styleTagTransform=function(e,t){setTimeout((()=>{window.window._loadedStyles=window.window._loadedStyles??{};const{core:r,sdk:n}=function(e,t){const r=e?.match(/^\.dropin-(\w+)/)?.[1],n=t.getAttribute("data-sdk");return{core:r,sdk:n}}(e,t),a=r?`sdk/${r}`:t.getAttribute("data-dropin");!function(e,t){e.setAttribute("data-dropin",t),e.removeAttribute("data-sdk")}(t,a);const i=window._loadedStyles[a];i?function(e,t,r,n){const a=function(e,t){const r=e=>{const[t,r]=e.split("-"),[n,a,i]=t.split(".").map(Number),o=r?r.match(/(alpha|beta)(\d*)/):null;return{major:n,minor:a,patch:i,preType:o?o[1]:"",preNumber:o?parseInt(o[2],10):0}},n=r(e),a=r(t);if(n.major!==a.major)return n.major>a.major?e:t;if(n.minor!==a.minor)return n.minor>a.minor?e:t;if(n.patch!==a.patch)return n.patch>a.patch?e:t;if(n.preType&&a.preType)return n.preType===a.preType?n.preNumber>a.preNumber?e:t:"beta"===n.preType?t:e;return n.preType?t:e}(r,n.sdk);if(!n.core||n.core&&a===n.sdk){const t=n.style.textContent;n.style.textContent=`${t}\n/* --- MERGED --- */\n${e}`}else n.core&&a!==n.sdk&&(n.style.textContent=`/* --- UPGRADED --- */\n${e}`);t.remove()}(e,t,n,i):(function(e,t,r,n,a){t.textContent=e,window._loadedStyles[a]={sdk:n,core:r,style:t}}(e,t,r,n,a),function(e,t){const r=document.querySelector("head"),{lastDropinStyleInjected:n,lastSDKStyleInjected:a}=window._loadedStyles;t?(a?r.insertBefore(e,a.nextSibling):r.insertBefore(e,r.firstChild),window._loadedStyles.lastSDKStyleInjected=e):(n?r.insertBefore(e,n.nextSibling):a?r.insertBefore(e,a.nextSibling):r.insertBefore(e,r.firstChild),window._loadedStyles.lastDropinStyleInjected=e)}(t,r))}),0)},m.setAttributes=d(),m.insert=u().bind(null,"head"),m.domAPI=l(),m.insertStyleElement=h();o()(f.c,m);f.c&&f.c.locals&&f.c.locals;var g=r(5092),b=["source","size","stroke","viewBox","className"];function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){x(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function x(e,t,r){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function C(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var w={Add:(0,a.lazy)((()=>r.e(1704).then(r.bind(r,1704)))),Bulk:(0,a.lazy)((()=>r.e(2488).then(r.bind(r,2488)))),Burger:(0,a.lazy)((()=>r.e(5572).then(r.bind(r,5572)))),Cart:(0,a.lazy)((()=>r.e(2588).then(r.bind(r,2588)))),Check:(0,a.lazy)((()=>r.e(5944).then(r.bind(r,5944)))),ChevronDown:(0,a.lazy)((()=>r.e(9772).then(r.bind(r,9772)))),ChevronUp:(0,a.lazy)((()=>r.e(6380).then(r.bind(r,6380)))),ChevronRight:(0,a.lazy)((()=>r.e(5048).then(r.bind(r,5048)))),Close:(0,a.lazy)((()=>r.e(8612).then(r.bind(r,8612)))),Heart:(0,a.lazy)((()=>r.e(8992).then(r.bind(r,8992)))),Minus:(0,a.lazy)((()=>r.e(6236).then(r.bind(r,6236)))),Placeholder:(0,a.lazy)((()=>r.e(1464).then(r.bind(r,1464)))),PlaceholderFilled:(0,a.lazy)((()=>r.e(2375).then(r.bind(r,2375)))),Search:(0,a.lazy)((()=>r.e(5480).then(r.bind(r,5480)))),SearchFilled:(0,a.lazy)((()=>r.e(5288).then(r.bind(r,5288)))),Sort:(0,a.lazy)((()=>r.e(2680).then(r.bind(r,2680)))),Star:(0,a.lazy)((()=>r.e(5816).then(r.bind(r,5816)))),View:(0,a.lazy)((()=>r.e(8556).then(r.bind(r,8556)))),User:(0,a.lazy)((()=>r.e(6796).then(r.bind(r,6796)))),Warning:(0,a.lazy)((()=>r.e(3224).then(r.bind(r,3224)))),Locker:(0,a.lazy)((()=>r.e(624).then(r.bind(r,624)))),Wallet:(0,a.lazy)((()=>r.e(3844).then(r.bind(r,3844)))),Card:(0,a.lazy)((()=>r.e(3500).then(r.bind(r,3500)))),Order:(0,a.lazy)((()=>r.e(6200).then(r.bind(r,6200)))),Delivery:(0,a.lazy)((()=>r.e(7235).then(r.bind(r,7235)))),OrderError:(0,a.lazy)((()=>r.e(4896).then(r.bind(r,4896)))),OrderSuccess:(0,a.lazy)((()=>r.e(9588).then(r.bind(r,9588)))),PaymentError:(0,a.lazy)((()=>r.e(7918).then(r.bind(r,7918)))),CheckWithCircle:(0,a.lazy)((()=>r.e(1924).then(r.bind(r,1924)))),WarningWithCircle:(0,a.lazy)((()=>r.e(3724).then(r.bind(r,3724)))),WarningFilled:(0,a.lazy)((()=>r.e(160).then(r.bind(r,160)))),InfoFilled:(0,a.lazy)((()=>r.e(7088).then(r.bind(r,7088)))),HeartFilled:(0,a.lazy)((()=>r.e(832).then(r.bind(r,832)))),Trash:(0,a.lazy)((()=>r.e(3692).then(r.bind(r,3692))))};function S(e){var{source:t,size:r="24",stroke:i="2",viewBox:o="0 0 24 24",className:s}=e,l=C(e,b),p="string"==typeof t?w[t]:null,u={className:(0,n.i)(["dropin-icon","dropin-icon--shape-stroke-".concat(i),s]),width:r,height:r,viewBox:o};return(0,g.jsx)(a.Suspense,{fallback:null,children:p?(0,g.jsx)(p,_(_({},l),u)):(0,g.jsx)(t,_(_({},l),u))})}},7044:(e,t,r)=>{r.d(t,{C:()=>n});var n=(e,t)=>{var r;return function(){for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];clearTimeout(r),r=setTimeout((()=>e.apply(this,a)),t)}}},4496:(e,t,r)=>{r.d(t,{o:()=>u});var n=r(8884),a=r(5092),i=["node"];function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function u(e){var{node:t}=e,r=p(e,i);return t?Array.isArray(t)?(0,a.jsx)(a.Fragment,{children:t.map(((e,t)=>(0,a.jsx)(u,s({node:e,className:r.className},r),t)))}):(r.className=(0,n.i)([t.props.className,r.className]),(0,a.jsx)(t.type,s(s({ref:t.ref},t.props),r),t.key)):null}},1036:(e,t,r)=>{r.d(t,{a:()=>y});var n=r(3584),a=r(5912),i=r(2256),o=r(4723),s=r(2148);function l(e){return 1===e?o.m.ExcludingTax:2===e?o.m.IncludingTax:3===e?o.m.IncludingAndExcludingTax:o.m.ExcludingTax}function p(e){switch(e){case a.ow.DisplayExcludingTax:return o.m.ExcludingTax;case a.ow.DisplayIncludingTax:return o.m.IncludingTax;case a.ow.DisplayTypeBoth:return o.m.IncludingAndExcludingTax}}var u=r(764),c=r(1092);function d(e,t,r,n,a,i,o){try{var s=e[i](o),l=s.value}catch(e){return void r(e)}s.done?t(l):Promise.resolve(l).then(n,a)}var y=function(){var e,t=(e=function*(){return(0,n.CA)("\n  query getStoreConfig {\n    storeConfig {\n      cart_summary_display_quantity\n      countries_with_required_region\n      default_country\n      display_state_if_optional\n      is_guest_checkout_enabled\n      is_one_page_checkout_enabled\n      locale\n      max_items_in_order_summary\n      optional_zip_countries\n      shopping_cart_display_full_summary\n      shopping_cart_display_grand_total\n      shopping_cart_display_price\n      shopping_cart_display_shipping\n      shopping_cart_display_subtotal\n      shopping_cart_display_tax_gift_wrapping\n      shopping_cart_display_zero_tax\n      store_code\n    }\n  }\n",{method:"GET",cache:"no-cache"}).then((e=>{var{data:t,errors:r}=e;return(0,u.Y)(r),function(e){if(!e)return i.IJ;var t,{default_country:r,countries_with_required_region:n,display_state_if_optional:a,optional_zip_countries:u,is_guest_checkout_enabled:c,is_one_page_checkout_enabled:d,shopping_cart_display_price:y,shopping_cart_display_shipping:h,shopping_cart_display_subtotal:f,shopping_cart_display_tax_gift_wrapping:m,shopping_cart_display_grand_total:g,shopping_cart_display_full_summary:b,shopping_cart_display_zero_tax:v,max_items_in_order_summary:_,cart_summary_display_quantity:x}=e;return{defaultCountry:r||i.IJ.defaultCountry,countriesWithRequiredRegion:(null==n?void 0:n.split(","))||i.IJ.countriesWithRequiredRegion,displayStateIfOptional:a||i.IJ.displayStateIfOptional,countriesWithOptionalZipCode:(null==u?void 0:u.split(","))||i.IJ.countriesWithOptionalZipCode,isGuestCheckoutEnabled:c||i.IJ.isGuestCheckoutEnabled,isOnePageCheckoutEnabled:d||i.IJ.isOnePageCheckoutEnabled,taxCartDisplay:{shoppingCartDisplayPrice:y?l(y):i.IJ.taxCartDisplay.shoppingCartDisplayPrice,shoppingCartDisplayShipping:h?l(h):i.IJ.taxCartDisplay.shoppingCartDisplayShipping,shoppingCartDisplaySubtotal:f?l(f):i.IJ.taxCartDisplay.shoppingCartDisplaySubtotal,shoppingCartDisplayGiftWrapping:m?p(m):i.IJ.taxCartDisplay.shoppingCartDisplayGiftWrapping,shoppingCartDisplayGrandTotal:g||i.IJ.taxCartDisplay.shoppingCartDisplayGrandTotal,shoppingCartDisplayFullSummary:b||i.IJ.taxCartDisplay.shoppingCartDisplayFullSummary,shoppingCartDisplayZeroTax:v||i.IJ.taxCartDisplay.shoppingCartDisplayZeroTax},cartSummaryMaxItems:_||i.IJ.cartSummaryMaxItems,cartSummaryTotalDisplay:(0,s.q)(x)?i.IJ.cartSummaryTotalDisplay:(t=x,0===t?o.E.Rows:o.E.Quantity)}}(null==t?void 0:t.storeConfig)})).catch(c.i)},function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function o(e){d(i,n,a,o,s,"next",e)}function s(e){d(i,n,a,o,s,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}()},6768:(e,t,r)=>{r.d(t,{AB:()=>n.A,EP:()=>n.E,cp:()=>n.E});var n=r(1468)},2256:(e,t,r)=>{r.d(t,{EV:()=>u,IJ:()=>l,o3:()=>c});var n=r(1036),a=r(4723),i=r(7320),o=r(2720),s=r(5092),l={defaultCountry:"US",countriesWithRequiredRegion:[],displayStateIfOptional:!1,countriesWithOptionalZipCode:[],isGuestCheckoutEnabled:!1,isOnePageCheckoutEnabled:!1,taxCartDisplay:{shoppingCartDisplayPrice:a.m.ExcludingTax,shoppingCartDisplayShipping:a.m.ExcludingTax,shoppingCartDisplaySubtotal:a.m.ExcludingTax,shoppingCartDisplayGiftWrapping:a.m.ExcludingTax,shoppingCartDisplayGrandTotal:!1,shoppingCartDisplayFullSummary:!1,shoppingCartDisplayZeroTax:!1},cartSummaryMaxItems:10,cartSummaryTotalDisplay:a.E.Quantity},p=(0,i.createContext)(void 0),u=e=>{var{children:t}=e,[r,a]=(0,o.useState)();return(0,o.useEffect)((()=>{(0,n.a)().then((e=>{a(e)})).catch((()=>{console.error("Failed to fetch store config"),a(l)}))}),[]),(0,s.jsx)(p.Provider,{value:{config:r},children:t})};function c(){var e=(0,o.useContext)(p);if(void 0!==e)return e;throw new Error("useStore must be used within a StoreProvider")}},5172:(e,t,r)=>{r.d(t,{s:()=>n,w:()=>a});var n=function(e){return e.InStock="IN_STOCK",e.OutOfStock="OUT_OF_STOCK",e}({}),a=function(e){return e.Simple="SimpleProduct",e.Configurable="ConfigurableProduct",e.Downloadable="DownloadableProduct",e.GiftCard="GiftCardProduct",e.Virtual="VirtualProduct",e.Bundle="BundleProduct",e}({})},4723:(e,t,r)=>{r.d(t,{E:()=>a,m:()=>n});var n=function(e){return e[e.ExcludingTax=1]="ExcludingTax",e[e.IncludingTax=2]="IncludingTax",e[e.IncludingAndExcludingTax=3]="IncludingAndExcludingTax",e}({}),a=function(e){return e[e.Rows=0]="Rows",e[e.Quantity=1]="Quantity",e}({})},764:(e,t,r)=>{r.d(t,{Y:()=>n});var n=e=>{if(e)throw Error(e.map((e=>e.message)).join(" "))}},5668:(e,t,r)=>{r.d(t,{cartSignal:()=>n});var n=(0,r(1520).OC)({pending:!1,data:void 0})},8848:(e,t,r)=>{r.d(t,{c:()=>s});var n=r(6008),a=r.n(n),i=r(2076),o=r.n(i)()(a());o.push([e.id,".dropin-icon{\n}\n\n.dropin-icon--shape-stroke-1{\n  stroke-width:var(--shape-icon-stroke-1);\n}\n\n.dropin-icon--shape-stroke-2{\n  stroke-width:var(--shape-icon-stroke-2);\n}\n\n.dropin-icon--shape-stroke-3{\n  stroke-width:var(--shape-icon-stroke-3);\n}\n\n.dropin-icon--shape-stroke-4{\n  stroke-width:var(--shape-icon-stroke-4);\n}\n",""]);const s=o},8122:(t,r,n)=>{t.exports=(e=>{var t={};return n.d(t,e),t})({events:()=>e.events})},8616:(e,r,n)=>{e.exports=(e=>{var t={};return n.d(t,e),t})({FetchGraphQL:()=>t.FetchGraphQL})},6528:(e,t,n)=>{e.exports=(e=>{var t={};return n.d(t,e),t})({Suspense:()=>r.Suspense,createContext:()=>r.createContext,forwardRef:()=>r.forwardRef,lazy:()=>r.lazy,useCallback:()=>r.useCallback,useContext:()=>r.useContext,useEffect:()=>r.useEffect,useImperativeHandle:()=>r.useImperativeHandle,useMemo:()=>r.useMemo,useRef:()=>r.useRef,useState:()=>r.useState})},2720:(e,t,r)=>{e.exports=(e=>{var t={};return r.d(t,e),t})({useCallback:()=>n.useCallback,useContext:()=>n.useContext,useDebugValue:()=>n.useDebugValue,useEffect:()=>n.useEffect,useId:()=>n.useId,useImperativeHandle:()=>n.useImperativeHandle,useLayoutEffect:()=>n.useLayoutEffect,useMemo:()=>n.useMemo,useReducer:()=>n.useReducer,useRef:()=>n.useRef,useState:()=>n.useState})},6168:(e,t,r)=>{e.exports=(e=>{var t={};return r.d(t,e),t})({Fragment:()=>a.Fragment,jsx:()=>a.jsx,jsxs:()=>a.jsxs})},7320:(e,t,r)=>{e.exports=(e=>{var t={};return r.d(t,e),t})({Component:()=>i.Component,Fragment:()=>i.Fragment,cloneElement:()=>i.cloneElement,createContext:()=>i.createContext,createElement:()=>i.createElement,createRef:()=>i.createRef,h:()=>i.h,hydrate:()=>i.hydrate,isValidElement:()=>i.isValidElement,options:()=>i.options,render:()=>i.render,toChildArray:()=>i.toChildArray})}};import o from"../runtime.js";import*as s from"../6472.js";o.C(s);import*as l from"../6156.js";o.C(l);import*as p from"../8668.js";o.C(p);import*as u from"../4888.js";o.C(u);import*as c from"../8200.js";o.C(c);import*as d from"../1468.js";o.C(d);import*as y from"./CartSummary.js";o.C(y);var h,f=(h=6768,o(o.s=h)),m=f.EP,g=f.cp,b=f.AB;export{m as CartSummary,g as default,b as useCartSummary};