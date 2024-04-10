/*! For license information please see 810.js.LICENSE.txt */
export const id=810;export const ids=[810];export const modules={4261:(t,e,r)=>{r.d(e,{G:()=>c});var n=r(294),o=r(5883);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function i(){i=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",u=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var a=e&&e.prototype instanceof b?e:b,i=Object.create(a.prototype),s=new M(n||[]);return o(i,"_invoke",{value:P(t,r,s)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var d="suspendedStart",y="suspendedYield",m="executing",v="completed",g={};function b(){}function w(){}function j(){}var O={};f(O,c,(function(){return this}));var _=Object.getPrototypeOf,E=_&&_(_(V([])));E&&E!==r&&n.call(E,c)&&(O=E);var S=j.prototype=b.prototype=Object.create(O);function x(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,i,s,c){var u=p(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==a(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,s,c)}),(function(t){r("throw",t,s,c)})):e.resolve(f).then((function(t){l.value=t,s(l)}),(function(t){return r("throw",t,s,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function P(e,r,n){var o=d;return function(a,i){if(o===m)throw Error("Generator is already running");if(o===v){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var s=n.delegate;if(s){var c=k(s,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var u=p(e,r,n);if("normal"===u.type){if(o=n.done?v:y,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=v,n.method="throw",n.arg=u.arg)}}}function k(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,k(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=p(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function V(e){if(e||""===e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(a(e)+" is not iterable")}return w.prototype=j,o(S,"constructor",{value:j,configurable:!0}),o(j,"constructor",{value:w,configurable:!0}),w.displayName=f(j,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,j):(t.__proto__=j,f(t,l,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},x(L.prototype),f(L.prototype,u,(function(){return this})),e.AsyncIterator=L,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new L(h(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(S),f(S,l,"Generator"),f(S,c,(function(){return this})),f(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=V,M.prototype={constructor:M,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:V(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function s(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}var c=function(){var t,e=(t=i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,n.AZ)("\n  query GET_STORE_CONFIG {\n    storeConfig {\n      autocomplete_on_storefront\n      minimum_password_length\n      required_character_classes_number\n      store_code\n      store_name\n      store_group_code\n      locale\n      create_account_confirmation\n    }\n  }\n",{method:"GET",cache:"force-cache"}).catch(o.n);case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){s(a,n,o,i,c,"next",t)}function c(t){s(a,n,o,i,c,"throw",t)}i(void 0)}))});return function(){return e.apply(this,arguments)}}()},6490:(t,e,r)=>{r.d(e,{k:()=>T});var n=r(6613),o=r(5292),a=r.n(o),i=r(9893),s=r.n(i),c=r(9383),u=r.n(c),l=r(6884),f=r.n(l),h=r(9088),p=r.n(h),d=r(7997),y=r.n(d),m=r(3725),v={};v.styleTagTransform=y(),v.setAttributes=f(),v.insert=u().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=p();a()(m.A,v);m.A&&m.A.locals&&m.A.locals;var g,b=r(9094);function w(){return w=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},w.apply(this,arguments)}const j=function(t){return b.createElement("svg",w({width:16,height:16,fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),g||(g=b.createElement("path",{d:"M11.555 7.833h-7.11",stroke:"#666",strokeLinecap:"square",strokeLinejoin:"round"})))};var O;function _(){return _=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},_.apply(this,arguments)}const E=function(t){return b.createElement("svg",_({"data-name":"Icon \\u2013 Check \\u2013 Base",xmlns:"http://www.w3.org/2000/svg",width:24,height:24},t),O||(O=b.createElement("g",{"data-name":"Check icon"},b.createElement("path",{vectorEffect:"non-scaling-stroke","data-name":"Path 884137",d:"m5.609 12.017 4.248 4.244 8.538-8.522",fill:"none",stroke:"currentColor"}))))};var S;function x(){return x=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},x.apply(this,arguments)}const L=function(t){return b.createElement("svg",x({width:16,height:16,fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),S||(S=b.createElement("path",{d:"m12.24 3.76-8.487 8.487m8.487 0L3.753 3.76",stroke:"#C35050",strokeLinecap:"square",strokeLinejoin:"round"})))};var P=r(5127);function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}var A=["minLength","requiredCharacterClasses","isValidUniqueSymbols","validateLengthConfig"];function C(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function M(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?C(Object(r),!0).forEach((function(e){V(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function V(t,e,r){var n;return n=function(t,e){if("object"!=k(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=k(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(e,"string"),(e="symbol"==k(n)?n:n+"")in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function N(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var I={pending:(0,P.jsx)(j,{}),success:(0,P.jsx)(E,{}),error:(0,P.jsx)(L,{})},T=function(t){var e=t.minLength,r=void 0===e?0:e,o=t.requiredCharacterClasses,a=void 0===o?0:o,i=t.isValidUniqueSymbols,s=void 0===i?"pending":i,c=t.validateLengthConfig,u=void 0===c?{status:"",icon:"",message:""}:c,l=N(t,A),f=u.status,h=u.icon,p=void 0===h?"":h,d=u.message;return(0,P.jsxs)("div",M(M({},l),{},{className:(0,n.L)(["elsie-password-validation-message"]),children:[r>0?(0,P.jsxs)("div",{className:"auth-passwordValidationMessage_item auth-passwordValidationMessage_item--status-".concat(f),"data-testid":"auth-passwordValidationMessage_item--".concat(p),children:[I[p],(0,P.jsx)("span",{className:"".concat(f),children:d})]}):null,a&&a>=2?(0,P.jsxs)("div",{className:"auth-passwordValidationMessage_item auth-passwordValidationMessage_item--status-".concat(s),"data-testid":"auth-passwordValidationMessage_item--".concat(s),children:[I[s],(0,P.jsx)("span",{className:"pending",children:function(t){switch(t){case 2:return"Use characters and numbers or symbols";case 3:return"Use characters, numbers and symbols";case 4:return"Use uppercase characters, lowercase characters, numbers and symbols";default:return""}}(a)})]}):null]}))}},4336:(t,e,r)=>{r.d(e,{s:()=>I});var n,o,a=r(2885),i=r(6613),s=r(9094);function c(){return c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},c.apply(this,arguments)}const u=function(t){return s.createElement("svg",c({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),n||(n=s.createElement("g",{clipPath:"url(#Locker_svg__a)",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"},s.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M7.33 11h9.33c.74 0 1.33.81 1.33 1.82v6.36c0 1-.6 1.82-1.33 1.82H7.33C6.59 21 6 20.19 6 19.18v-6.36c0-1 .6-1.82 1.33-1.82ZM8.5 10.86V6.5C8.5 4.57 10.07 3 12 3s3.5 1.57 3.5 3.5v4.36"}))),o||(o=s.createElement("defs",null,s.createElement("clipPath",{id:"Locker_svg__a"},s.createElement("path",{fill:"#fff",transform:"translate(5.25 2.25)",d:"M0 0h13.5v19.5H0z"})))))};var l;function f(){return f=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},f.apply(this,arguments)}const h=function(t){return s.createElement("svg",f({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),l||(l=s.createElement("path",{d:"M17.11 18.12c2.02-.96 3.74-2.5 4.91-4.45-2.01-3.35-5.74-5.6-10.03-5.6m0 0c-.9 0-1.78.1-2.64.29m2.64-.29V4.75m8.51 6.28 2.72-2m-6.41-.14 1.64-2.81M3.47 11.03l-2.72-2m10.56 1.96c.22-.05.45-.08.69-.08 1.56 0 2.83 1.24 2.83 2.76 0 .38-.08.74-.22 1.07M12 16.43c-1.56 0-2.83-1.24-2.83-2.76 0-.3.05-.58.14-.84M6.14 9.6c-1.7.97-3.15 2.36-4.18 4.07 2.08 3.48 5.9 5.6 10.03 5.6.58 0 1.16-.04 1.72-.13m6.73 3.36-16-20",stroke:"#2B2B2B",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))};var p;function d(){return d=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},d.apply(this,arguments)}const y=function(t){return s.createElement("svg",d({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),p||(p=s.createElement("path",{d:"M11.995 8.059c-4.136-.01-7.95 2.133-10.028 5.602 2.079 3.479 5.902 5.602 10.028 5.602 4.136.01 7.95-2.133 10.028-5.602-2.008-3.351-5.74-5.602-10.028-5.602Zm0 0V4.737m8.515 6.29 2.723-2.005m-6.416-.137 1.645-2.811M3.48 11.027.757 9.032m6.416-.138-1.644-2.81m9.311 7.577c0 1.523-1.271 2.762-2.835 2.762-1.563 0-2.835-1.239-2.835-2.762s1.272-2.762 2.835-2.762c1.564 0 2.835 1.239 2.835 2.762Z",stroke:"#2B2B2B",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))};var m=r(1734),v=r(6017),g=r(5292),b=r.n(g),w=r(9893),j=r.n(w),O=r(9383),_=r.n(O),E=r(6884),S=r.n(E),x=r(9088),L=r.n(x),P=r(7997),k=r.n(P),A=r(3556),C={};C.styleTagTransform=k(),C.setAttributes=S(),C.insert=_().bind(null,"head"),C.domAPI=j(),C.insertStyleElement=L();b()(A.A,C);A.A&&A.A.locals&&A.A.locals;var M=r(5127);function V(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,s=[],c=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(s.push(n.value),s.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return s}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return N(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return N(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var I=function(t){var e=t.initialPassword,r=void 0===e?"":e,n=t.required,o=t.isError,s=t.children,c=t.name,l=t.className,f=t.setPasswordValueCallback,p=t.onBlur,d=V((0,a.useState)(!1),2),g=d[0],b=d[1],w=(0,a.useCallback)((function(){b((function(t){return!t}))}),[]),j=o?"This field is required.":"",O=o?"auth-password-field--error":"";return(0,M.jsxs)("div",{className:(0,i.L)(["auth-password-field",l,O]),children:[(0,M.jsx)(m.D,{error:j,children:(0,M.jsx)(v.p,{name:c||"password",type:g?"text":"password",placeholder:"Password",floatingLabel:"Password","aria-label":"Password","aria-required":!0,required:n||!1,value:r,onValue:f,icon:(0,M.jsx)(u,{}),onBlur:p,"data-testid":"passwordInput"})}),(0,M.jsx)("div",{className:"auth-password-field__eye-icon",onClick:w,children:g?(0,M.jsx)(y,{}):(0,M.jsx)(h,{})}),s]})}},6263:(t,e,r)=>{r.d(e,{i:()=>s});var n=r(4261),o=r(2885);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,s=[],c=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(s.push(n.value),s.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return s}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var s=function(){var t=a((0,o.useState)(!1),2),e=t[0],r=t[1],i=a((0,o.useState)(null),2),s=i[0],c=i[1];return(0,o.useEffect)((function(){(0,n.G)().then((function(t){if(t){var e=t.data,n=t.errors;if(n&&console.error("fetchStoreConfigs errors =>",n),e&&null!=e&&e.storeConfig){var o,a,i;sessionStorage.setItem("storeConfig",JSON.stringify(null==e?void 0:e.storeConfig));var s,u=null==e||null===(o=e.storeConfig)||void 0===o?void 0:o.minimum_password_length,l=null==e||null===(a=e.storeConfig)||void 0===a?void 0:a.required_character_classes_number;if(u&&l&&c({minLength:+u,requiredCharacterClasses:+l}),null!=e&&null!==(i=e.storeConfig)&&void 0!==i&&i.create_account_confirmation)r(null==e||null===(s=e.storeConfig)||void 0===s?void 0:s.create_account_confirmation)}}}))}),[]),{passwordConfigs:s,isEmailConfirmationRequired:e}}},1880:(t,e,r)=>{r.d(e,{d:()=>f});var n=r(7622),o=r(2885);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){var n;return n=function(t,e){if("object"!=a(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(e,"string"),(e="symbol"==a(n)?n:n+"")in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,s=[],c=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(s.push(n.value),s.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return s}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var f=function(t){var e=t.passwordConfigs,r=t.isClickSubmit,a=t.password,i=u((0,o.useState)("pending"),2),c=i[0],l=i[1];return(0,o.useEffect)((function(){if(e){var t=(0,n.L)(a,e.requiredCharacterClasses);r&&a.length>0?l(t?"success":"error"):r&&0===a.length?l("pending"):l(t?"success":"pending")}}),[r,e,a]),{isValidUniqueSymbols:c,defaultLengthMessage:(0,o.useMemo)((function(){if(e){var t={status:"pending",icon:"pending",message:"At least ".concat(e.minLength," characters long")};return a.length&&a.length>=e.minLength?s(s({},t),{},{icon:"success",status:"success"}):a.length&&a.length<e.minLength?s(s({},t),{},r?{icon:"error",status:"error"}:{icon:"pending",status:"pending"}):t}}),[e,a,r])}}},7622:(t,e,r)=>{r.d(e,{L:()=>n});var n=function(t,e){return e<=1||(/[0-9]/.test(t)?1:0)+(/[a-z]/.test(t)?1:0)+(/[A-Z]/.test(t)?1:0)+(/[^a-zA-Z0-9\s]/.test(t)?1:0)>=e}},3725:(t,e,r)=>{r.d(e,{A:()=>s});var n=r(8645),o=r.n(n),a=r(278),i=r.n(a)()(o());i.push([t.id,".auth-passwordValidationMessage{\n}\n\n.auth-passwordValidationMessage_item{\n  display:grid;\n  grid-template-columns:1.25rem auto;\n  align-items:center;\n  gap:0 0.375rem;\n\n  font:var(--type-details-caption-2-font);\n  letter-spacing:var(--type-details-caption-2-letter-spacing);\n}\n\n.auth-passwordValidationMessage_item.auth-passwordValidationMessage_item--status-pending{\n  color:var(--color-neutral-700, #666);\n}\n\n.auth-passwordValidationMessage_item.auth-passwordValidationMessage_item--status-success{\n  color:var(--color-positive-800, #53824c);\n}\n\n.auth-passwordValidationMessage_item.auth-passwordValidationMessage_item--status-error{\n  color:var(--color-alert-800, #bf4545);\n}\n",""]);const s=i},3556:(t,e,r)=>{r.d(e,{A:()=>s});var n=r(8645),o=r.n(n),a=r(278),i=r.n(a)()(o());i.push([t.id,".auth-password-field{\n  position:relative;\n}\n\n.auth-password-field > div:first-child{\n  margin-bottom:1rem;\n}\n\n.auth-password-field--error .auth-password-field__eye-icon{\n  right:2.5rem;\n  transition:all 0.3s ease-in-out;\n}\n\n.auth-password-field__eye-icon{\n  position:absolute;\n  height:24px;\n  top:calc(50% - 0.5rem);\n  transform:translateY(-50%);\n  right:1rem;\n  cursor:pointer;\n  z-index:2;\n}\n",""]);const s=i}};