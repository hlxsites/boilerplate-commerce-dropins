import{c as P}from"../chunks/classes.js";import{lazy as r,Suspense as L}from"../preact-compat.js";import{jsx as s}from"../preact-jsx-runtime.js";import"../preact.js";import"../preact-hooks.js";const I=function(){const i=typeof document<"u"&&document.createElement("link").relList;return i&&i.supports&&i.supports("modulepreload")?"modulepreload":"preload"}(),O=function(E){return"/"+E},c={},t=function(i,d,m){let l=Promise.resolve();if(d&&d.length>0){document.getElementsByTagName("link");const e=document.querySelector("meta[property=csp-nonce]"),o=(e==null?void 0:e.nonce)||(e==null?void 0:e.getAttribute("nonce"));l=Promise.all(d.map(_=>{if(_=O(_),_ in c)return;c[_]=!0;const u=_.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${_}"]${p}`))return;const n=document.createElement("link");if(n.rel=u?"stylesheet":I,u||(n.as="script",n.crossOrigin=""),n.href=_,o&&n.setAttribute("nonce",o),document.head.appendChild(n),u)return new Promise((a,v)=>{n.addEventListener("load",a),n.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${_}`)))})}))}return l.then(()=>i()).catch(e=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=e,window.dispatchEvent(o),!o.defaultPrevented)throw e})},R={Add:r(()=>t(()=>import("../chunks/Add.js"),[])),Bulk:r(()=>t(()=>import("../chunks/Bulk.js"),[])),Burger:r(()=>t(()=>import("../chunks/Burger.js"),[])),Cart:r(()=>t(()=>import("../chunks/Cart.js"),[])),Check:r(()=>t(()=>import("../chunks/Check.js"),[])),ChevronDown:r(()=>t(()=>import("../chunks/ChevronDown.js"),[])),ChevronUp:r(()=>t(()=>import("../chunks/ChevronUp.js"),[])),ChevronRight:r(()=>t(()=>import("../chunks/ChevronRight.js"),[])),Close:r(()=>t(()=>import("../chunks/Close.js"),[])),Heart:r(()=>t(()=>import("../chunks/Heart.js"),[])),Minus:r(()=>t(()=>import("../chunks/Minus.js"),[])),Placeholder:r(()=>t(()=>import("../chunks/Placeholder.js"),[])),PlaceholderFilled:r(()=>t(()=>import("../chunks/PlaceholderFilled.js"),[])),Search:r(()=>t(()=>import("../chunks/Search.js"),[])),SearchFilled:r(()=>t(()=>import("../chunks/SearchFilled.js"),[])),Sort:r(()=>t(()=>import("../chunks/Sort.js"),[])),Star:r(()=>t(()=>import("../chunks/Star.js"),[])),View:r(()=>t(()=>import("../chunks/View.js"),[])),User:r(()=>t(()=>import("../chunks/User.js"),[])),Warning:r(()=>t(()=>import("../chunks/Warning.js"),[])),Locker:r(()=>t(()=>import("../chunks/Locker.js"),[])),Wallet:r(()=>t(()=>import("../chunks/Wallet.js"),[])),Card:r(()=>t(()=>import("../chunks/Card.js"),[])),Order:r(()=>t(()=>import("../chunks/Order.js"),[])),Delivery:r(()=>t(()=>import("../chunks/Delivery.js"),[])),OrderError:r(()=>t(()=>import("../chunks/OrderError.js"),[])),OrderSuccess:r(()=>t(()=>import("../chunks/OrderSuccess.js"),[])),PaymentError:r(()=>t(()=>import("../chunks/PaymentError.js"),[])),CheckWithCircle:r(()=>t(()=>import("../chunks/CheckWithCircle.js"),[])),WarningWithCircle:r(()=>t(()=>import("../chunks/WarningWithCircle.js"),[])),WarningFilled:r(()=>t(()=>import("../chunks/WarningFilled.js"),[])),InfoFilled:r(()=>t(()=>import("../chunks/InfoFilled.js"),[])),HeartFilled:r(()=>t(()=>import("../chunks/HeartFilled.js"),[])),Trash:r(()=>t(()=>import("../chunks/Trash.js"),[]))};function f({source:E,size:i="24",stroke:d="2",viewBox:m="0 0 24 24",className:l,...e}){const o=typeof E=="string"?R[E]:null,_={className:P(["dropin-icon",`dropin-icon--shape-stroke-${d}`,l]),width:i,height:i,viewBox:m};return s(L,{fallback:null,children:o?s(o,{...e,..._}):s(E,{...e,..._})})}export{f as Icon};
//# sourceMappingURL=Icon.js.map
