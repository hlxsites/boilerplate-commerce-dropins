import*as e from"@dropins/elsie/event-bus.js";import*as n from"@dropins/elsie/preact-compat.js";import*as t from"@dropins/elsie/preact-hooks.js";import*as r from"@dropins/elsie/preact-jsx-runtime.js";import*as o from"@dropins/elsie/preact.js";export const id=196;export const ids=[196];export const modules={7498:(e,n,t)=>{t.d(n,{Z:()=>a});var r,o=t(3354);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}const a=function(e){return o.createElement("svg",i({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r||(r=o.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M18.36 5.64 5.63 18.37M18.36 18.37 5.63 5.64",stroke:"currentColor"})))}},3601:(e,n,t)=>{t.d(n,{Z:()=>a});var r,o=t(3354);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}const a=function(e){return o.createElement("svg",i({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r||(r=o.createElement("path",{vectorEffect:"non-scaling-stroke",fillRule:"evenodd",clipRule:"evenodd",d:"M1 20.895 12.192 1.5l11.203 19.395H1Zm12.028-6.931.222-3.926V9h-2v1.038l.222 3.926h1.556ZM11.299 16v1.75h1.926V16H11.3Z",fill:"currentColor"})))}},6987:(e,n,t)=>{t.d(n,{z:()=>P});var r=t(5587),o=t(1177),i=t(1892),a=t.n(i),l=t(5760),s=t.n(l),c=t(8311),u=t.n(c),p=t(8192),f=t.n(p),b=t(8060),d=t.n(b),v=t(4865),y=t.n(v),m=t(6497),h={};h.styleTagTransform=y(),h.setAttributes=f(),h.insert=u().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=d();a()(m.Z,h);m.Z&&m.Z.locals&&m.Z.locals;var g=t(7188);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}var O=["value","variant","size","icon","className","children","disabled","active","activeChildren","activeIcon","href"];function j(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?j(Object(t),!0).forEach((function(n){x(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function x(e,n,t){var r;return r=function(e,n){if("object"!=_(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!=_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(n,"string"),(n="symbol"==_(r)?r:String(r))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function S(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var P=function(e){var n=e.value,t=e.variant,i=void 0===t?"primary":t,a=e.size,l=void 0===a?"medium":a,s=e.icon,c=e.className,u=e.children,p=e.disabled,f=void 0!==p&&p,b=e.active,d=void 0!==b&&b,v=e.activeChildren,y=e.activeIcon,m=e.href,h=S(e,O),_="elsie-button";(s&&!u||s&&d&&!v||!s&&d&&y)&&(_="elsie-iconButton"),d&&v&&(_="elsie-button"),c=(0,r.S)([_,"".concat(_,"--").concat(l),"".concat(_,"--").concat(i),["".concat(_,"--").concat(i,"--disabled"),f],u&&s&&"".concat(_,"--with-icon"),!u&&v&&s&&"".concat(_,"--with-icon"),d&&y&&"".concat(_,"--with-icon"),c]);var j=(0,r.S)(["elsie-button-icon","elsie-button-icon--".concat(i),["elsie-button-icon--".concat(i,"--disabled"),f],null==s?void 0:s.props.className]),x=m?w(w({node:(0,g.jsx)("a",{}),role:"link",href:m},h),{},{disabled:f,active:d}):w(w({node:(0,g.jsx)("button",{}),role:"button"},h),{},{value:n,disabled:f,active:d});return(0,g.jsxs)(o.F,w(w({},x),{},{className:c,children:[s&&!d&&(0,g.jsx)(o.F,{node:s,className:j}),y&&d&&(0,g.jsx)(o.F,{node:y,className:j}),u&&!d&&("string"==typeof u?(0,g.jsx)("span",{children:u}):u),d&&v&&("string"==typeof v?(0,g.jsx)("span",{children:v}):v)]}))}},3622:(e,n,t)=>{t.d(n,{J:()=>S});var r=t(1892),o=t.n(r),i=t(5760),a=t.n(i),l=t(8311),s=t.n(l),c=t(8192),u=t.n(c),p=t(8060),f=t.n(p),b=t(4865),d=t.n(b),v=t(8116),y={};y.styleTagTransform=d(),y.setAttributes=u(),y.insert=s().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=f();o()(v.Z,y);v.Z&&v.Z.locals&&v.Z.locals;var m=t(5587),h=t(7188);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}var _=["source","size","stroke","viewBox","className"];function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){w(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function w(e,n,t){var r;return r=function(e,n){if("object"!=g(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!=g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(n,"string"),(n="symbol"==g(r)?r:String(r))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function x(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function S(e){var n=e.source,t=e.size,r=void 0===t?"24":t,o=e.stroke,i=void 0===o?"2":o,a=e.viewBox,l=void 0===a?"0 0 24 24":a,s=e.className,c=x(e,_),u=n;return(0,h.jsx)(u,j(j({},c),{},{className:(0,m.S)(["elsie-icon","elsie-icon--shape-stroke-".concat(i),s]),width:r,height:r,viewBox:l}))}},1177:(e,n,t)=>{t.d(n,{F:()=>p});var r=t(3474),o=t(7188);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}var a=["node","className"];function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n,t){var r;return r=function(e,n){if("object"!=i(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!=i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(n,"string"),(n="symbol"==i(r)?r:String(r))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function p(e){var n,t,i=e.node,l=e.className,c=void 0===l?"":l,f=u(e,a);if(!i)return(0,o.jsx)(o.Fragment,{});if(Array.isArray(i))return(0,o.jsx)(o.Fragment,{children:i.map((function(e,n){return(0,o.jsx)(p,s({node:e,className:c},f),n)}))});var b="".concat(c).concat(null!==(n=i.props)&&void 0!==n&&n.className?"".concat(c&&" ").concat(null===(t=i.props)||void 0===t?void 0:t.className):"");return"string"==typeof i.type?(0,r.h)(i.type,s(s(s({},f),i.props),{},{className:b}),null==f?void 0:f.children,!(null!=f&&f.children)&&i.props.children):(0,o.jsxs)(i.type,s(s({},s(s(s({},i.props),f),{},{className:b})),{},{children:[(null==f?void 0:f.children)&&(0,o.jsx)(p,{node:null==f?void 0:f.children}),!(null!=f&&f.children)&&i.props.children&&(0,o.jsx)(p,{node:i.props.children})]}))}},3129:(e,n,t)=>{t.d(n,{H:()=>F});var r=t(4853),o=t(9724),i=t(6765),a=t(3622),l=t(6987),s=t(3601),c=t(7498),u=t(5587),p=t(1892),f=t.n(p),b=t(5760),d=t.n(b),v=t(8311),y=t.n(v),m=t(8192),h=t.n(m),g=t(8060),_=t.n(g),O=t(4865),j=t.n(O),w=t(5203),x={};x.styleTagTransform=j(),x.setAttributes=h(),x.insert=y().bind(null,"head"),x.domAPI=d(),x.insertStyleElement=_();f()(w.Z,x);w.Z&&w.Z.locals&&w.Z.locals;var S=t(7188);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}var k=["className","onDismiss","errorMessage","errorLabel"];function E(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function C(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?E(Object(t),!0).forEach((function(n){B(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function B(e,n,t){var r;return r=function(e,n){if("object"!=P(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!=P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(n,"string"),(n="symbol"==P(r)?r:String(r))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function N(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var D=function(e){var n=e.className,t=e.onDismiss,r=e.errorMessage,o=e.errorLabel,i=N(e,k);return(0,S.jsxs)("div",C(C({className:(0,u.S)(["checkout-error-banner",n])},i),{},{children:[(0,S.jsx)(a.J,{source:s.Z,className:"checkout-error-banner__icon"}),(0,S.jsx)("span",{children:r}),(0,S.jsx)(l.z,{icon:(0,S.jsx)(a.J,{source:c.Z,size:"24",stroke:"2"}),className:"checkout-error-banner__dismiss-button",variant:"tertiary",onClick:t,"aria-label":o})]}))};function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function Z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function R(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Z(Object(t),!0).forEach((function(n){I(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function I(e,n,t){var r;return r=function(e,n){if("object"!=A(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!=A(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(n,"string"),(n="symbol"==A(r)?r:String(r))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function M(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i,a,l=[],s=!0,c=!1;try{if(i=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;s=!1}else for(;!(s=(r=i.call(t)).done)&&(l.push(r.value),l.length!==n);s=!0);}catch(e){c=!0,o=e}finally{try{if(!s&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(c)throw o}}return l}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return H(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return H(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var F=function(e){var n=M((0,r.useState)(!1),2),t=n[0],a=n[1];(0,r.useEffect)((function(){var e=i.events.on("error",(function(e){"checkout"===(null==e?void 0:e.source)&&"network"===(null==e?void 0:e.type)&&a(!0)}));return function(){null==e||e.off()}}),[]);var l=(0,o.XK)({message:"Checkout.ErrorBanner.genericMessage",label:"Checkout.ErrorBanner.dismissLabel"});return(0,S.jsx)("div",R(R({},e),{},{children:t&&(0,S.jsx)(D,{onDismiss:function(){a(!1)},errorMessage:l.message,errorLabel:l.label})}))}},7179:(e,n,t)=>{t.d(n,{H:()=>r.H,Z:()=>r.H});var r=t(3129)},6497:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(4933),o=t.n(r),i=t(3476),a=t.n(i)()(o());a.push([e.id,".elsie-button,\n.elsie-iconButton{\n  border:0 none;\n  cursor:pointer;\n  white-space:normal;\n}\n\n.elsie-button{\n  border-radius:var(--shape-border-radius-3);\n  font-size:var(--type-button-1-font);\n  font-weight:var(--type-button-1-font);\n  padding:var(--spacing-xsmall) var(--spacing-medium);\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  text-align:left;\n  word-wrap:break-word;\n}\n\n.elsie-iconButton{\n  height:var(--spacing-xbig);\n  width:var(--spacing-xbig);\n  padding:var(--spacing-xsmall);\n}\n\n.elsie-button:disabled,\n.elsie-iconButton:disabled{\n  pointer-events:none;\n  user-select:none;\n}\n\n.elsie-button:not(:disabled),\n.elsie-iconButton:not(:disabled){\n  cursor:pointer;\n}\n\n.elsie-button:focus,\n.elsie-iconButton:focus{\n  outline:none;\n}\n\n.elsie-button:focus-visible,\n.elsie-iconButton:focus-visible{\n  outline:var(--spacing-xxsmall) solid var(--color-button-focus);\n}\n.elsie-button--primary,\na.elsie-button--primary,\n.elsie-iconButton--primary{\n  border:none;\n  background:var(--color-brand-500) 0 0% no-repeat padding-box;\n  color:var(--color-neutral-50);\n  text-align:left;\n  margin-right:0;\n}\n\n.elsie-iconButton--primary{\n  border-radius:var(--spacing-xbig);\n  min-height:var(--spacing-xbig);\n  min-width:var(--spacing-xbig);\n  padding:var(--spacing-xsmall);\n}\n\n.elsie-button--primary--disabled,\na.elsie-button--primary--disabled,\n.elsie-iconButton--primary--disabled{\n  background:var(--color-neutral-300) 0 0% no-repeat padding-box;\n  color:var(--color-neutral-500);\n  fill:var(--color-neutral-300);\n  pointer-events:none;\n  user-select:none;\n}\n\n.elsie-button--primary:hover,\na.elsie-button--primary:hover,\n.elsie-iconButton--primary:hover,\n.elsie-button--primary:focus:hover,\n.elsie-iconButton--primary:focus:hover{\n  background-color:var(--color-button-hover);\n  text-decoration:none;\n}\n\n.elsie-button--primary:focus,\n.elsie-iconButton--primary:focus{\n  background-color:var(--color-brand-500);\n}\n\n.elsie-button--primary:hover:active,\n.elsie-iconButton--primary:hover:active{\n  background-color:var(--color-button-active);\n}\n.elsie-button--secondary,\na.elsie-button--secondary,\n.elsie-iconButton--secondary{\n  border:var(--shape-border-width-2) solid var(--color-brand-500);\n  background:none 0 0% no-repeat padding-box;\n  color:var(--color-brand-500);\n  padding-top:calc(var(--spacing-xsmall) - var(--shape-border-width-2));\n  padding-left:calc(var(--spacing-medium) - var(--shape-border-width-2));\n}\n\n.elsie-iconButton--secondary{\n  border-radius:var(--spacing-xbig);\n  min-height:var(--spacing-xbig);\n  min-width:var(--spacing-xbig);\n  padding:var(--spacing-xsmall);\n  padding-top:calc(var(--spacing-xsmall) - var(--shape-border-width-2));\n  padding-left:calc(var(--spacing-xsmall) - var(--shape-border-width-2));\n}\n\n.elsie-button--secondary--disabled,\na.elsie-button--secondary--disabled,\n.elsie-iconButton--secondary--disabled{\n  border:var(--shape-border-width-2) solid var(--color-neutral-300);\n  background:none 0 0% no-repeat padding-box;\n  color:var(--color-neutral-500);\n  fill:var(--color-neutral-300);\n  pointer-events:none;\n  user-select:none;\n}\n\n.elsie-button--secondary:hover,\na.elsie-button--secondary:hover,\n.elsie-iconButton--secondary:hover{\n  border:var(--shape-border-width-2) solid var(--color-button-hover);\n  color:var(--color-button-hover);\n  text-decoration:none;\n}\n\n.elsie-button--secondary:active,\n.elsie-iconButton--secondary:active{\n  border:var(--shape-border-width-2) solid var(--color-button-active);\n  color:var(--color-button-active);\n}\n.elsie-button--tertiary,\na.elsie-button--tertiary,\n.elsie-iconButton--tertiary{\n  border:none;\n  background:none 0 0% no-repeat padding-box;\n  color:var(--color-brand-500);\n}\n\n.elsie-iconButton--tertiary{\n  border:none;\n  border-radius:var(--spacing-xbig);\n  min-height:var(--spacing-xbig);\n  min-width:var(--spacing-xbig);\n  padding:var(--spacing-xsmall);\n}\n\n.elsie-button--tertiary--disabled,\na.elsie-button--tertiary--disabled,\n.elsie-iconButton--tertiary--disabled{\n  border:none;\n  color:var(--color-neutral-500);\n  pointer-events:none;\n  user-select:none;\n}\n\n.elsie-button--tertiary:hover,\na.elsie-button--tertiary:hover,\n.elsie-iconButton--tertiary:hover{\n  color:var(--color-button-hover);\n  text-decoration:none;\n}\n\n.elsie-button--tertiary:active,\n.elsie-iconButton--tertiary:active{\n  color:var(--color-button-active);\n}\n\n.elsie-button--tertiary:focus-visible,\n.elsie-iconButton--tertiary:focus-visible{\n  -webkit-box-shadow:inset 0 0 0 2px var(--color-neutral-800);\n  -moz-box-shadow:inset 0 0 0 2px var(--color-neutral-800);\n  box-shadow:inset 0 0 0 2px var(--color-neutral-800); \n}\n.elsie-button--large{\n  font:var(--type-button-1-font);\n  letter-spacing:var(--type-button-1-letter-spacing);\n}\n\n.elsie-button--medium{\n  font:var(--type-button-2-font);\n  letter-spacing:var(--type-button-2-letter-spacing);\n}\n\n.elsie-button-icon{\n  height:24px;\n}\n.elsie-button--with-icon{\n  column-gap:var(--spacing-xsmall);\n  row-gap:var(--spacing-xsmall);\n}\n",""]);const l=a},8116:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(4933),o=t.n(r),i=t(3476),a=t.n(i)()(o());a.push([e.id,".elsie-icon{ \n}\n\n.elsie-icon--shape-stroke-1{ \n    stroke-width:var(--shape-icon-stroke-1);\n}\n\n.elsie-icon--shape-stroke-2{ \n    stroke-width:var(--shape-icon-stroke-2);\n}\n\n.elsie-icon--shape-stroke-3{ \n    stroke-width:var(--shape-icon-stroke-3);\n}\n\n.elsie-icon--shape-stroke-4{\n    stroke-width:var(--shape-icon-stroke-4);\n}\n",""]);const l=a},5203:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(4933),o=t.n(r),i=t(3476),a=t.n(i)()(o());a.push([e.id,".checkout-error-banner{\n  background-color:var(--color-alert-800);\n  color:var(--color-neutral-50);\n  font:var(--type-body-2-default-font);\n  letter-spacing:var(--type-body-2-default-letter-spacing);\n  padding:var(--spacing-small);\n  min-width:200px;\n  display:flex;\n  align-items:center;\n  gap:var(--spacing-small);\n  max-width:50%;\n  margin:0 auto var(--spacing-medium) auto;\n}\n\n.checkout-error-banner__icon{\n  flex-shrink:0;\n}\n\n.checkout-error-banner__dismiss-button{\n  margin-left:auto;\n  color:var(--color-neutral-50);\n}\n",""]);const l=a},3354:(e,n,t)=>{t.d(n,{createElement:()=>r.createElement});var r=t(3474),o=t(5437);function i(e,n){for(var t in n)e[t]=n[t];return e}function a(e,n){for(var t in e)if("__source"!==t&&!(t in n))return!0;for(var r in n)if("__source"!==r&&e[r]!==n[r])return!0;return!1}function l(e){this.props=e}(l.prototype=new r.Component).isPureReactComponent=!0,l.prototype.shouldComponentUpdate=function(e,n){return a(this.props,e)||a(this.state,n)};var s=r.options.__b;r.options.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),s&&s(e)};"undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref");var c=function(e,n){return null==e?null:(0,r.toChildArray)((0,r.toChildArray)(e).map(n))},u=(r.toChildArray,r.options.__e);r.options.__e=function(e,n,t,r){if(e.then)for(var o,i=n;i=i.__;)if((o=i.__c)&&o.__c)return null==n.__e&&(n.__e=t.__e,n.__k=t.__k),o.__c(e,n);u(e,n,t,r)};var p=r.options.unmount;function f(e,n,t){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach((function(e){"function"==typeof e.__c&&e.__c()})),e.__c.__H=null),null!=(e=i({},e)).__c&&(e.__c.__P===t&&(e.__c.__P=n),e.__c=null),e.__k=e.__k&&e.__k.map((function(e){return f(e,n,t)}))),e}function b(e,n,t){return e&&t&&(e.__v=null,e.__k=e.__k&&e.__k.map((function(e){return b(e,n,t)})),e.__c&&e.__c.__P===n&&(e.__e&&t.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=t)),e}function d(){this.__u=0,this.t=null,this.__b=null}function v(e){var n=e.__.__c;return n&&n.__a&&n.__a(e)}function y(){this.u=null,this.o=null}r.options.unmount=function(e){var n=e.__c;n&&n.__R&&n.__R(),n&&32&e.__u&&(e.type=null),p&&p(e)},(d.prototype=new r.Component).__c=function(e,n){var t=n.__c,r=this;null==r.t&&(r.t=[]),r.t.push(t);var o=v(r.__v),i=!1,a=function(){i||(i=!0,t.__R=null,o?o(l):l())};t.__R=a;var l=function(){if(! --r.__u){if(r.state.__a){var e=r.state.__a;r.__v.__k[0]=b(e,e.__c.__P,e.__c.__O)}var n;for(r.setState({__a:r.__b=null});n=r.t.pop();)n.forceUpdate()}};r.__u++||32&n.__u||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(a,a)},d.prototype.componentWillUnmount=function(){this.t=[]},d.prototype.render=function(e,n){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=f(this.__b,t,o.__O=o.__P)}this.__b=null}var i=n.__a&&(0,r.createElement)(r.Fragment,null,e.fallback);return i&&(i.__u&=-33),[(0,r.createElement)(r.Fragment,null,n.__a?null:e.children),i]};var m=function(e,n,t){if(++t[1]===t[0]&&e.o.delete(n),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.o.size))for(t=e.u;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;e.u=t=t[2]}};(y.prototype=new r.Component).__a=function(e){var n=this,t=v(n.__v),r=n.o.get(e);return r[0]++,function(o){var i=function(){n.props.revealOrder?(r.push(o),m(n,e,r)):o()};t?t(i):i()}},y.prototype.render=function(e){this.u=null,this.o=new Map;var n=(0,r.toChildArray)(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&n.reverse();for(var t=n.length;t--;)this.o.set(n[t],this.u=[1,0,this.u]);return e.children},y.prototype.componentDidUpdate=y.prototype.componentDidMount=function(){var e=this;this.o.forEach((function(n,t){m(e,t,n)}))};var h="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,g=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,_=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,O=/[A-Z0-9]/g,j="undefined"!=typeof document,w=function(e){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(e)};r.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(e){Object.defineProperty(r.Component.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(n){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:n})}})}));var x=r.options.event;function S(){}function P(){return this.cancelBubble}function k(){return this.defaultPrevented}r.options.event=function(e){return x&&(e=x(e)),e.persist=S,e.isPropagationStopped=P,e.isDefaultPrevented=k,e.nativeEvent=e};var E={enumerable:!1,configurable:!0,get:function(){return this.class}},C=r.options.vnode;r.options.vnode=function(e){"string"==typeof e.type&&function(e){var n=e.props,t=e.type,o={};for(var i in n){var a=n[i];if(!("value"===i&&"defaultValue"in n&&null==a||j&&"children"===i&&"noscript"===t||"class"===i||"className"===i)){var l=i.toLowerCase();"defaultValue"===i&&"value"in n&&null==n.value?i="value":"download"===i&&!0===a?a="":"ondoubleclick"===l?i="ondblclick":"onchange"!==l||"input"!==t&&"textarea"!==t||w(n.type)?"onfocus"===l?i="onfocusin":"onblur"===l?i="onfocusout":_.test(i)?i=l:-1===t.indexOf("-")&&g.test(i)?i=i.replace(O,"-$&").toLowerCase():null===a&&(a=void 0):l=i="oninput","oninput"===l&&o[i=l]&&(i="oninputCapture"),o[i]=a}}"select"==t&&o.multiple&&Array.isArray(o.value)&&(o.value=(0,r.toChildArray)(n.children).forEach((function(e){e.props.selected=-1!=o.value.indexOf(e.props.value)}))),"select"==t&&null!=o.defaultValue&&(o.value=(0,r.toChildArray)(n.children).forEach((function(e){e.props.selected=o.multiple?-1!=o.defaultValue.indexOf(e.props.value):o.defaultValue==e.props.value}))),n.class&&!n.className?(o.class=n.class,Object.defineProperty(o,"className",E)):(n.className&&!n.class||n.class&&n.className)&&(o.class=o.className=n.className),e.props=o}(e),e.$$typeof=h,C&&C(e)};var B=r.options.__r;r.options.__r=function(e){B&&B(e),e.__c};var N=r.options.diffed;r.options.diffed=function(e){N&&N(e);var n=e.props,t=e.__e;null!=t&&"textarea"===e.type&&"value"in n&&n.value!==t.value&&(t.value=null==n.value?"":n.value),null};r.Fragment;o.useLayoutEffect;o.useState,o.useId,o.useReducer,o.useEffect,o.useLayoutEffect,o.useRef,o.useImperativeHandle,o.useMemo,o.useCallback,o.useContext,o.useDebugValue,r.createElement,r.createContext,r.createRef,r.Fragment,r.Component},6765:(n,t,r)=>{n.exports=(e=>{var n={};return r.d(n,e),n})({events:()=>e.events})},4853:(e,t,r)=>{e.exports=(e=>{var n={};return r.d(n,e),n})({createContext:()=>n.createContext,forwardRef:()=>n.forwardRef,useCallback:()=>n.useCallback,useContext:()=>n.useContext,useEffect:()=>n.useEffect,useImperativeHandle:()=>n.useImperativeHandle,useMemo:()=>n.useMemo,useRef:()=>n.useRef,useState:()=>n.useState})},5437:(e,n,r)=>{e.exports=(e=>{var n={};return r.d(n,e),n})({useCallback:()=>t.useCallback,useContext:()=>t.useContext,useDebugValue:()=>t.useDebugValue,useEffect:()=>t.useEffect,useId:()=>t.useId,useImperativeHandle:()=>t.useImperativeHandle,useLayoutEffect:()=>t.useLayoutEffect,useMemo:()=>t.useMemo,useReducer:()=>t.useReducer,useRef:()=>t.useRef,useState:()=>t.useState})},4142:(e,n,t)=>{e.exports=(e=>{var n={};return t.d(n,e),n})({Fragment:()=>r.Fragment,jsx:()=>r.jsx,jsxs:()=>r.jsxs})},3474:(e,n,t)=>{e.exports=(e=>{var n={};return t.d(n,e),n})({Component:()=>o.Component,Fragment:()=>o.Fragment,cloneElement:()=>o.cloneElement,createContext:()=>o.createContext,createElement:()=>o.createElement,createRef:()=>o.createRef,h:()=>o.h,hydrate:()=>o.hydrate,isValidElement:()=>o.isValidElement,options:()=>o.options,render:()=>o.render,toChildArray:()=>o.toChildArray})}};import i from"../runtime.js";import*as a from"../757.js";i.C(a);import*as l from"./ErrorBanner.js";i.C(l);var s,c=(s=7179,i(i.s=s)),u=c.H,p=c.Z;export{u as ErrorBanner,p as default};