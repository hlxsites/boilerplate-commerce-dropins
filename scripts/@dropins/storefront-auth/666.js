/*! For license information please see 666.js.LICENSE.txt */
export const id=666;export const ids=[666];export const modules={8666:(t,n,r)=>{r.d(n,{b:()=>R});var e=r(6613),o=r(5292),i=r.n(o),a=r(9893),s=r.n(a),u=r(9383),l=r.n(u),c=r(6884),f=r.n(c),m=r(9088),d=r.n(m),h=r(7997),p=r.n(h),g=r(5911),y={};y.styleTagTransform=p(),y.setAttributes=f(),y.insert=l().bind(null,"head"),y.domAPI=s(),y.insertStyleElement=d();i()(g.A,y);g.A&&g.A.locals&&g.A.locals;var _=r(446),b=r(2885),v=r(9363),w=r(6953);function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function x(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}function j(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?x(Object(r),!0).forEach((function(n){F(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}function F(t,n,r){var e;return e=function(t,n){if("object"!=I(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var e=r.call(t,n||"default");if("object"!=I(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(n,"string"),(n="symbol"==I(e)?e:e+"")in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function E(){E=function(){return n};var t,n={},r=Object.prototype,e=r.hasOwnProperty,o=Object.defineProperty||function(t,n,r){t[n]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,n,r){return Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{l({},"")}catch(t){l=function(t,n,r){return t[n]=r}}function c(t,n,r,e){var i=n&&n.prototype instanceof y?n:y,a=Object.create(i.prototype),s=new C(e||[]);return o(a,"_invoke",{value:k(t,r,s)}),a}function f(t,n,r){try{return{type:"normal",arg:t.call(n,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=c;var m="suspendedStart",d="suspendedYield",h="executing",p="completed",g={};function y(){}function _(){}function b(){}var v={};l(v,a,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(N([])));x&&x!==r&&e.call(x,a)&&(v=x);var j=b.prototype=y.prototype=Object.create(v);function F(t){["next","throw","return"].forEach((function(n){l(t,n,(function(t){return this._invoke(n,t)}))}))}function S(t,n){function r(o,i,a,s){var u=f(t[o],t,i);if("throw"!==u.type){var l=u.arg,c=l.value;return c&&"object"==I(c)&&e.call(c,"__await")?n.resolve(c.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):n.resolve(c).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,s)}))}s(u.arg)}var i;o(this,"_invoke",{value:function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return i=i?i.then(o,o):o()}})}function k(n,r,e){var o=m;return function(i,a){if(o===h)throw Error("Generator is already running");if(o===p){if("throw"===i)throw a;return{value:t,done:!0}}for(e.method=i,e.arg=a;;){var s=e.delegate;if(s){var u=L(s,e);if(u){if(u===g)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(o===m)throw o=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o=h;var l=f(n,r,e);if("normal"===l.type){if(o=e.done?p:d,l.arg===g)continue;return{value:l.arg,done:e.done}}"throw"===l.type&&(o=p,e.method="throw",e.arg=l.arg)}}}function L(n,r){var e=r.method,o=n.iterator[e];if(o===t)return r.delegate=null,"throw"===e&&n.iterator.return&&(r.method="return",r.arg=t,L(n,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),g;var i=f(o,n.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[n.resultName]=a.value,r.next=n.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function O(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function P(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(n){if(n||""===n){var r=n[a];if(r)return r.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,i=function r(){for(;++o<n.length;)if(e.call(n,o))return r.value=n[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(I(n)+" is not iterable")}return _.prototype=b,o(j,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:_,configurable:!0}),_.displayName=l(b,u,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===_||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,u,"GeneratorFunction")),t.prototype=Object.create(j),t},n.awrap=function(t){return{__await:t}},F(S.prototype),l(S.prototype,s,(function(){return this})),n.AsyncIterator=S,n.async=function(t,r,e,o,i){void 0===i&&(i=Promise);var a=new S(c(t,r,e,o),i);return n.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},F(j),l(j,u,"Generator"),l(j,a,(function(){return this})),l(j,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),r=[];for(var e in n)r.push(e);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},n.values=N,C.prototype={constructor:C,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!n)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function o(e,o){return s.type="throw",s.arg=n,r.next=e,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=e.call(a,"catchLoc"),l=e.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),g},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),g}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===t){var e=r.completion;if("throw"===e.type){var o=e.arg;P(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(n,r,e){return this.delegate={iterator:N(n),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=t),g}},n}function S(t,n,r,e,o,i,a){try{var s=t[i](a),u=s.value}catch(t){return void r(t)}s.done?n(u):Promise.resolve(u).then(e,o)}function k(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var e,o,i,a,s=[],u=!0,l=!1;try{if(i=(r=r.call(t)).next,0===n){if(Object(r)!==r)return;u=!1}else for(;!(u=(e=i.call(r)).done)&&(s.push(e.value),s.length!==n);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return s}}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return L(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return L(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var O=function(t){var n=t.initialEmailValue,r=t.signUpPageRedirectUrl,e=t.forgotPasswordPageRedirectUrl,o=t.onSignInRedirectUrl,i=t.onErrorCallback,a=t.setActiveComponent,s=t.onSuccessCallback,u=t.onSignUpLinkClick,l=t.handleSetUpdateNotification,c=k((0,b.useState)(""),2),f=c[0],m=c[1],d=k((0,b.useState)(!1),2),h=d[0],p=d[1],g=k((0,b.useState)({userName:"",status:!1}),2),y=g[0],I=g[1],x=k((0,b.useState)(!1),2),F=x[0],L=x[1],O=(0,b.useCallback)(function(){var t,n=(t=E().mark((function t(n){var r,e,a,u;return E().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(L(!0),(r=(0,_.r)(n.target)).password||(p(!0),L(!1)),null==r||!r.email||null==r||!r.password||"function"!=typeof l){t.next=11;break}return e=r.email,a=r.password,t.next=7,(0,v.L)({email:e,password:a,handleSetUpdateNotification:l,onErrorCallback:i});case 7:null!=(u=t.sent)&&u.userName&&(null!=o&&o.length?window.location.href=o:(null==s||s({userName:null==u?void 0:u.userName,status:!0}),I({userName:null==u?void 0:u.userName,status:!0}))),n.target.reset(),p(!1);case 11:L(!1),m("");case 13:case"end":return t.stop()}}),t)})),function(){var n=this,r=arguments;return new Promise((function(e,o){var i=t.apply(n,r);function a(t){S(i,e,o,a,s,"next",t)}function s(t){S(i,e,o,a,s,"throw",t)}a(void 0)}))});return function(t){return n.apply(this,arguments)}}(),[l,o,i,s]),P=(0,b.useCallback)((function(){"function"!=typeof a?null!=e&&e.length&&(window.location.href=e):a("resetPasswordForm")}),[e,a]),C=(0,b.useCallback)((function(){"function"==typeof u&&u(),"function"!=typeof a?null!=r&&r.length&&(window.location.href=r):a("signUpForm")}),[u,r,a]);return{defaultEnhancedEmailFields:(0,b.useMemo)((function(){return null!=n&&n.length?w.F.map((function(t){return j(j({},t),{},{default_value:n})})):w.F}),[n]),passwordError:h,isSuccessful:y,isLoading:F,signInPasswordValue:f,setSignInPasswordValue:m,submitLogInUser:O,forgotPasswordCallback:P,onSignUpLinkClickCallback:C}},P=r(8115),C=r(9738),N=r(1588),U=r(4336),A=r(3510),T=r(7660),M=r(5127),R=function(t){var n=t.successNotificationForm,r=t.renderSignUpLink,o=void 0!==r&&r,i=t.formSize,a=void 0===i?"default":i,s=t.onSignInRedirectUrl,u=void 0===s?"":s,l=t.initialEmailValue,c=void 0===l?"":l,f=t.forgotPasswordPageRedirectUrl,m=void 0===f?"":f,d=t.signUpPageRedirectUrl,h=void 0===d?"":d,p=t.onSuccessCallback,g=t.setActiveComponent,y=t.onErrorCallback,_=t.onSignUpLinkClick,b=(0,T.S)(),v=b.updateNotification,w=b.handleSetUpdateNotification,I=O({initialEmailValue:c,signUpPageRedirectUrl:h,forgotPasswordPageRedirectUrl:m,onSignInRedirectUrl:u,setActiveComponent:g,onErrorCallback:y,onSuccessCallback:p,onSignUpLinkClick:_,handleSetUpdateNotification:w}),x=I.defaultEnhancedEmailFields,j=I.passwordError,F=I.isSuccessful,E=I.isLoading,S=I.signInPasswordValue,k=I.setSignInPasswordValue,L=I.submitLogInUser,R=I.forgotPasswordCallback,V=I.onSignUpLinkClickCallback;return n&&F.status?n(F.userName):(0,M.jsxs)("div",{className:(0,e.L)(["auth-signInForm",a]),"data-testid":"signInForm",children:[(0,M.jsx)(C.h,{text:"Sign in",bottomLine:!1,className:"auth-signInForm__title"}),(0,M.jsx)(P.G,{className:"auth-signInForm__notification",notificationStatus:v.status,notificationText:v.text}),(0,M.jsxs)(N.i,{name:"signIn_form",className:"auth-signInForm__form",submitCallback:L,isLoading:E,fieldsConfig:x,children:[(0,M.jsx)(U.s,{className:"auth-signInForm__form__password",isError:j,initialPassword:S,setPasswordValueCallback:k}),(0,M.jsxs)("div",{className:"auth-signInForm__form__buttons",children:[(0,M.jsxs)("div",{className:"auth-signInForm__form__buttons--combine",children:[(0,M.jsx)(A.S,{type:"button",variant:"tertiary",style:{padding:0},buttonText:"Forgot password?",className:"auth-signInForm__button auth-signInForm__button--forgot",enableLoader:!1,onClick:R,"data-testid":"switchToSignUp"}),o?(0,M.jsx)("span",{}):null,o?(0,M.jsx)(A.S,{type:"button",variant:"tertiary",style:{padding:0},buttonText:"Sign up",className:"auth-signInForm__button auth-signInForm__button--signup",enableLoader:!1,onClick:V}):null]}),(0,M.jsx)(A.S,{type:"submit",buttonText:"Sign in",variant:"primary",className:"auth-signInForm__button auth-signInForm__button--submit",enableLoader:E})]})]})]})}},4336:(t,n,r)=>{r.d(n,{s:()=>A});var e,o,i=r(2885),a=r(6613),s=r(9094);function u(){return u=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t},u.apply(this,arguments)}const l=function(t){return s.createElement("svg",u({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),e||(e=s.createElement("g",{clipPath:"url(#Locker_svg__a)",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"},s.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M7.33 11h9.33c.74 0 1.33.81 1.33 1.82v6.36c0 1-.6 1.82-1.33 1.82H7.33C6.59 21 6 20.19 6 19.18v-6.36c0-1 .6-1.82 1.33-1.82ZM8.5 10.86V6.5C8.5 4.57 10.07 3 12 3s3.5 1.57 3.5 3.5v4.36"}))),o||(o=s.createElement("defs",null,s.createElement("clipPath",{id:"Locker_svg__a"},s.createElement("path",{fill:"#fff",transform:"translate(5.25 2.25)",d:"M0 0h13.5v19.5H0z"})))))};var c;function f(){return f=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t},f.apply(this,arguments)}const m=function(t){return s.createElement("svg",f({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),c||(c=s.createElement("path",{d:"M17.11 18.12c2.02-.96 3.74-2.5 4.91-4.45-2.01-3.35-5.74-5.6-10.03-5.6m0 0c-.9 0-1.78.1-2.64.29m2.64-.29V4.75m8.51 6.28 2.72-2m-6.41-.14 1.64-2.81M3.47 11.03l-2.72-2m10.56 1.96c.22-.05.45-.08.69-.08 1.56 0 2.83 1.24 2.83 2.76 0 .38-.08.74-.22 1.07M12 16.43c-1.56 0-2.83-1.24-2.83-2.76 0-.3.05-.58.14-.84M6.14 9.6c-1.7.97-3.15 2.36-4.18 4.07 2.08 3.48 5.9 5.6 10.03 5.6.58 0 1.16-.04 1.72-.13m6.73 3.36-16-20",stroke:"#2B2B2B",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))};var d;function h(){return h=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t},h.apply(this,arguments)}const p=function(t){return s.createElement("svg",h({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),d||(d=s.createElement("path",{d:"M11.995 8.059c-4.136-.01-7.95 2.133-10.028 5.602 2.079 3.479 5.902 5.602 10.028 5.602 4.136.01 7.95-2.133 10.028-5.602-2.008-3.351-5.74-5.602-10.028-5.602Zm0 0V4.737m8.515 6.29 2.723-2.005m-6.416-.137 1.645-2.811M3.48 11.027.757 9.032m6.416-.138-1.644-2.81m9.311 7.577c0 1.523-1.271 2.762-2.835 2.762-1.563 0-2.835-1.239-2.835-2.762s1.272-2.762 2.835-2.762c1.564 0 2.835 1.239 2.835 2.762Z",stroke:"#2B2B2B",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))};var g=r(1734),y=r(6017),_=r(5292),b=r.n(_),v=r(9893),w=r.n(v),I=r(9383),x=r.n(I),j=r(6884),F=r.n(j),E=r(9088),S=r.n(E),k=r(7997),L=r.n(k),O=r(3556),P={};P.styleTagTransform=L(),P.setAttributes=F(),P.insert=x().bind(null,"head"),P.domAPI=w(),P.insertStyleElement=S();b()(O.A,P);O.A&&O.A.locals&&O.A.locals;var C=r(5127);function N(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var e,o,i,a,s=[],u=!0,l=!1;try{if(i=(r=r.call(t)).next,0===n){if(Object(r)!==r)return;u=!1}else for(;!(u=(e=i.call(r)).done)&&(s.push(e.value),s.length!==n);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return s}}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return U(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return U(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var A=function(t){var n=t.initialPassword,r=void 0===n?"":n,e=t.required,o=t.isError,s=t.children,u=t.name,c=t.className,f=t.setPasswordValueCallback,d=t.onBlur,h=N((0,i.useState)(!1),2),_=h[0],b=h[1],v=(0,i.useCallback)((function(){b((function(t){return!t}))}),[]),w=o?"This field is required.":"",I=o?"auth-password-field--error":"";return(0,C.jsxs)("div",{className:(0,a.L)(["auth-password-field",c,I]),children:[(0,C.jsx)(g.D,{error:w,children:(0,C.jsx)(y.p,{name:u||"password",type:_?"text":"password",placeholder:"Password",floatingLabel:"Password","aria-label":"Password","aria-required":!0,required:e||!1,value:r,onValue:f,icon:(0,C.jsx)(l,{}),onBlur:d,"data-testid":"passwordInput"})}),(0,C.jsx)("div",{className:"auth-password-field__eye-icon",onClick:v,children:_?(0,C.jsx)(p,{}):(0,C.jsx)(m,{})}),s]})}},6953:(t,n,r)=>{r.d(n,{F:()=>e,m:()=>o});var e=[{code:"email",default_value:"",entity_type:"CUSTOMER",frontend_class:"auth-signInForm__form__email",frontend_input:"TEXT",is_required:!0,is_unique:!1,label:"Email",options:[]}],o=[{code:"email",default_value:"",entity_type:"CUSTOMER",frontend_class:"",frontend_input:"TEXT",is_required:!0,is_unique:!1,label:"Email",options:[]},{code:"firstname",default_value:"",entity_type:"CUSTOMER",frontend_class:"",frontend_input:"TEXT",is_required:!0,is_unique:!1,label:"First name",options:[]},{code:"lastname",default_value:"",entity_type:"CUSTOMER",frontend_class:"",frontend_input:"TEXT",is_required:!1,is_unique:!1,label:"Last name",options:[]}]},5911:(t,n,r)=>{r.d(n,{A:()=>s});var e=r(8645),o=r.n(e),i=r(278),a=r.n(i)()(o());a.push([t.id,".auth-signInForm{\n  border-radius:var(--shape-border-radius-2);\n  background-color:var(--color-neutral-50, #fff);\n  padding:1rem 1rem 1.5rem 1rem;\n}\n\n@media (min-width: 768px){\n  .auth-signInForm{\n    padding:1.875rem 3rem 3rem 3rem;\n  }\n}\n\n.auth-signInForm__notification{\n  margin-bottom:1.5rem;\n}\n\n.auth-signInForm.small{\n  padding:1rem 1rem 1.5rem 1rem;\n}\n\n.auth-signInForm.small .auth-signInForm__form__email,\n.auth-signInForm.small .auth-signInForm__form__password,\n.auth-signInForm.small .auth-signInForm__title{\n  margin-bottom:1.5rem;\n}\n\n.auth-signInForm.small .auth-signInForm__form__buttons{\n  grid-template-columns:1fr;\n  gap:1.25rem 0;\n}\n\n.auth-signInForm__title{\n  margin-bottom:2rem;\n}\n\n@media (min-width: 768px){\n  .auth-signInForm__title{\n    margin-bottom:3rem;\n  }\n}\n\n.auth-signInForm__form{\n  display:grid;\n  grid-template-columns:1fr;\n}\n\n.auth-signInForm__form__email{\n  margin-bottom:1.5rem;\n}\n\n.auth-signInForm__form__password{\n  margin-bottom:2rem;\n}\n\n.auth-signInForm__form__buttons{\n  display:grid;\n  grid-template-columns:auto auto;\n  justify-content:space-between;\n}\n\n@media (max-width: 768px){\n  .auth-signInForm__form__buttons{\n    gap:1.25rem 0;\n    grid-template-columns:1fr;\n  }\n}\n\n.auth-signInForm.small\n  .auth-signInForm__form__buttons\n  .auth-signInForm__form__buttons--combine{\n  justify-content:center;\n  flex-wrap:wrap;\n}\n\n.auth-signInForm.small\n  .auth-signInForm__form__buttons\n  .auth-signInForm__form__buttons--combine\n  .auth-signInForm__button--signup{\n  flex-basis:100%;\n  margin-top:1.25rem;\n}\n\n.auth-signInForm.small\n  .auth-signInForm__form__buttons\n  .auth-signInForm__form__buttons--combine\n  > span{\n  display:none;\n}\n\n.auth-signInForm__form__buttons .auth-signInForm__form__buttons--combine{\n  display:flex;\n}\n\n.auth-signInForm__form__buttons\n  .auth-signInForm__form__buttons--combine\n  > span{\n  border:var(--shape-border-width-1) solid var(--color-brand-500);\n  margin:0.813rem 0.625rem;\n  font:var(--type-button-2-font);\n}\n\n@media (max-width: 768px){\n  .auth-signInForm__form__buttons .auth-signInForm__form__buttons--combine{\n    justify-content:center;\n    flex-wrap:wrap;\n  }\n\n  .auth-signInForm__form__buttons\n    .auth-signInForm__form__buttons--combine\n    .auth-signInForm__button--signup{\n    flex-basis:100%;\n    margin-top:1.25rem;\n  }\n\n  .auth-signInForm__form__buttons\n    .auth-signInForm__form__buttons--combine\n    > span{\n    display:none;\n  }\n}\n",""]);const s=a},3556:(t,n,r)=>{r.d(n,{A:()=>s});var e=r(8645),o=r.n(e),i=r(278),a=r.n(i)()(o());a.push([t.id,".auth-password-field{\n  position:relative;\n}\n\n.auth-password-field > div:first-child{\n  margin-bottom:1rem;\n}\n\n.auth-password-field--error .auth-password-field__eye-icon{\n  right:2.5rem;\n  transition:all 0.3s ease-in-out;\n}\n\n.auth-password-field__eye-icon{\n  position:absolute;\n  height:24px;\n  top:17px;\n  right:17px;\n  cursor:pointer;\n  z-index:2;\n}\n",""]);const s=a}};