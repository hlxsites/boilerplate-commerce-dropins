import*as e from"@dropins/tools/event-bus.js";import*as t from"@dropins/tools/preact-compat.js";import*as r from"@dropins/tools/preact-jsx-runtime.js";import*as n from"@dropins/tools/preact.js";export const id=70;export const ids=[70];export const modules={305:e=>{var t=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===r}(e)}(e)};var r="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function n(e,t){return!1!==t.clone&&t.isMergeableObject(e)?s((r=e,Array.isArray(r)?[]:{}),e,t):e;var r}function o(e,t,r){return e.concat(t).map((function(e){return n(e,r)}))}function a(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return Object.propertyIsEnumerable.call(e,t)})):[]}(e))}function i(e,t){try{return t in e}catch(e){return!1}}function l(e,t,r){var o={};return r.isMergeableObject(e)&&a(e).forEach((function(t){o[t]=n(e[t],r)})),a(t).forEach((function(a){(function(e,t){return i(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,a)||(i(e,a)&&r.isMergeableObject(t[a])?o[a]=function(e,t){if(!t.customMerge)return s;var r=t.customMerge(e);return"function"==typeof r?r:s}(a,r)(e[a],t[a],r):o[a]=n(t[a],r))})),o}function s(e,r,a){(a=a||{}).arrayMerge=a.arrayMerge||o,a.isMergeableObject=a.isMergeableObject||t,a.cloneUnlessOtherwiseSpecified=n;var i=Array.isArray(r);return i===Array.isArray(e)?i?a.arrayMerge(e,r,a):l(e,r,a):n(r,a)}s.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,r){return s(e,r,t)}),{})};var c=s;e.exports=c},850:(e,t,r)=>{r.d(t,{S:()=>n});var n=e=>e.reduce(((e,t)=>{if(!t)return e;if("string"==typeof t&&(e+=" ".concat(t)),Array.isArray(t)){var[r,n]=t;r&&n&&(e+=" ".concat(r))}return e}),"").trim()},500:(e,t,r)=>{r.d(t,{J:()=>o,b:()=>a});var n=new class{get map(){return this._map}set map(e){this._map=e}getMethods(){return{setMap:e=>{this.map=e},getMap:()=>this.map}}},{setMap:o,getMap:a}=n.getMethods()},650:(e,t,r)=>{r.d(t,{F:()=>p});var n=r(850),o=r(567),a=["node"];function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function p(e){var{node:t}=e,r=c(e,a);return t?Array.isArray(t)?(0,o.jsx)(o.Fragment,{children:t.map(((e,t)=>(0,o.jsx)(p,l({node:e,className:r.className},r),t)))}):(r.className=(0,n.S)([t.props.className,r.className]),(0,o.jsx)(t.type,l(l({ref:t.ref},t.props),r),t.key)):null}},18:(e,t,r)=>{r.d(t,{v:()=>v,j:()=>g});class n{constructor(e){this.config=e}getConfig(){return this.config}setConfig(e){this.config=e}}var o=r(500),a=["imageParamsKeyMap"];function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function c(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class p{static register(e,t){var r,n;p._mounted&&(null===(r=e.listeners)||void 0===r||r.call(e,t),null===(n=e.init)||void 0===n||n.call(e,t));p._initializers.push([e,t])}static mount(){var e,t;p._mounted=!0,null===(e=p._initializers)||void 0===e||e.forEach((e=>{var t,[r,n]=e;null===(t=r.listeners)||void 0===t||t.call(r,n)})),null===(t=p._initializers)||void 0===t||t.forEach((e=>{var t,[r,n]=e;null===(t=r.init)||void 0===t||t.call(r,l({imageParamsKeyMap:p._imageParamsKeyMap},n))}))}static setImageParamKeys(e){p._imageParamsKeyMap=e}}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t,r,n,o,a,i){try{var l=e[a](i),s=l.value}catch(e){return void r(e)}l.done?t(s):Promise.resolve(s).then(n,o)}c(p,"_initializers",[]),c(p,"_mounted",!1),c(p,"_imageParamsKeyMap",void 0);var y,m,g=new class{constructor(e){var{init:t,listeners:r}=e;c(this,"_listeners",[]),c(this,"config",new n({})),this.listeners=e=>(this._listeners.forEach((e=>e.off())),this._listeners=r(e)),this.init=e=>{var r=e,{imageParamsKeyMap:n}=r,i=s(r,a);return this.config.setConfig(l(l({},this.config.getConfig()),i)),(0,o.J)(n),t(e)}}}({init:(y=function*(e){g.config.setConfig(f(f({},{}),e))},m=function(){var e=this,t=arguments;return new Promise((function(r,n){var o=y.apply(e,t);function a(e){b(o,r,n,a,i,"next",e)}function i(e){b(o,r,n,a,i,"throw",e)}a(void 0)}))},function(e){return m.apply(this,arguments)}),listeners:()=>[]}),v=g.config},50:(e,t,r)=>{r.d(t,{s:()=>be});var n=r(770),o=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i,a=/^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/,i=/[\s\n\\/='"\0<>]/,l=/^xlink:?./,s=/["&<]/;function c(e){if(!1===s.test(e+=""))return e;for(var t=0,r=0,n="",o="";r<e.length;r++){switch(e.charCodeAt(r)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 60:o="&lt;";break;default:continue}r!==t&&(n+=e.slice(t,r)),n+=o,t=r+1}return r!==t&&(n+=e.slice(t,r)),n}var p=function(e,t){return String(e).replace(/(\n+)/g,"$1"+(t||"\t"))},u=function(e,t,r){return String(e).length>(t||40)||!r&&-1!==String(e).indexOf("\n")||-1!==String(e).indexOf("<")},f={},d=/([A-Z])/g;function b(e){var t="";for(var r in e){var n=e[r];null!=n&&""!==n&&(t&&(t+=" "),t+="-"==r[0]?r:f[r]||(f[r]=r.replace(d,"-$1").toLowerCase()),t="number"==typeof n&&!1===o.test(r)?t+": "+n+"px;":t+": "+n+";")}return t||void 0}function y(e,t){return Array.isArray(t)?t.reduce(y,e):null!=t&&!1!==t&&e.push(t),e}function m(){this.__d=!0}function g(e,t){return{__v:e,context:t,props:e.props,setState:m,forceUpdate:m,__d:!0,__h:[]}}function v(e,t){var r=e.contextType,n=r&&t[r.__c];return null!=r?n?n.props.value:r.__:t}var h=[];function x(e,t,r,o,s,f){if(null==e||"boolean"==typeof e)return"";if("object"!=typeof e)return"function"==typeof e?"":c(e);var d=r.pretty,m=d&&"string"==typeof d?d:"\t";if(Array.isArray(e)){for(var O="",_=0;_<e.length;_++)d&&_>0&&(O+="\n"),O+=x(e[_],t,r,o,s,f);return O}if(void 0!==e.constructor)return"";var j,w=e.type,S=e.props,P=!1;if("function"==typeof w){if(P=!0,!r.shallow||!o&&!1!==r.renderRootComponent){if(w===n.Fragment){var C=[];return y(C,e.props.children),x(C,t,r,!1!==r.shallowHighOrder,s,f)}var k,E=e.__c=g(e,t);n.options.__b&&n.options.__b(e);var D=n.options.__r;if(w.prototype&&"function"==typeof w.prototype.render){var A=v(w,t);(E=e.__c=new w(S,A)).__v=e,E._dirty=E.__d=!0,E.props=S,null==E.state&&(E.state={}),null==E._nextState&&null==E.__s&&(E._nextState=E.__s=E.state),E.context=A,w.getDerivedStateFromProps?E.state=Object.assign({},E.state,w.getDerivedStateFromProps(E.props,E.state)):E.componentWillMount&&(E.componentWillMount(),E.state=E._nextState!==E.state?E._nextState:E.__s!==E.state?E.__s:E.state),D&&D(e),k=E.render(E.props,E.state,E.context)}else for(var M=v(w,t),I=0;E.__d&&I++<25;)E.__d=!1,D&&D(e),k=w.call(e.__c,S,M);return E.getChildContext&&(t=Object.assign({},t,E.getChildContext())),n.options.diffed&&n.options.diffed(e),x(k,t,r,!1!==r.shallowHighOrder,s,f)}w=(j=w).displayName||j!==Function&&j.name||function(e){var t=(Function.prototype.toString.call(e).match(/^\s*function\s+([^( ]+)/)||"")[1];if(!t){for(var r=-1,n=h.length;n--;)if(h[n]===e){r=n;break}r<0&&(r=h.push(e)-1),t="UnnamedComponent"+r}return t}(j)}var T,F,N="<"+w;if(S){var L=Object.keys(S);r&&!0===r.sortAttributes&&L.sort();for(var R=0;R<L.length;R++){var B=L[R],H=S[B];if("children"!==B){if(!i.test(B)&&(r&&r.allAttributes||"key"!==B&&"ref"!==B&&"__self"!==B&&"__source"!==B)){if("defaultValue"===B)B="value";else if("defaultChecked"===B)B="checked";else if("defaultSelected"===B)B="selected";else if("className"===B){if(void 0!==S.class)continue;B="class"}else s&&l.test(B)&&(B=B.toLowerCase().replace(/^xlink:?/,"xlink:"));if("htmlFor"===B){if(S.for)continue;B="for"}"style"===B&&H&&"object"==typeof H&&(H=b(H)),"a"===B[0]&&"r"===B[1]&&"boolean"==typeof H&&(H=String(H));var Z=r.attributeHook&&r.attributeHook(B,H,t,r,P);if(Z||""===Z)N+=Z;else if("dangerouslySetInnerHTML"===B)F=H&&H.__html;else if("textarea"===w&&"value"===B)T=H;else if((H||0===H||""===H)&&"function"!=typeof H){if(!(!0!==H&&""!==H||(H=B,r&&r.xml))){N=N+" "+B;continue}if("value"===B){if("select"===w){f=H;continue}"option"===w&&f==H&&void 0===S.selected&&(N+=" selected")}N=N+" "+B+'="'+c(H)+'"'}}}else T=H}}if(d){var z=N.replace(/\n\s*/," ");z===N||~z.indexOf("\n")?d&&~N.indexOf("\n")&&(N+="\n"):N=z}if(N+=">",i.test(w))throw new Error(w+" is not a valid HTML tag name in "+N);var q,K=a.test(w)||r.voidElements&&r.voidElements.test(w),$=[];if(F)d&&u(F)&&(F="\n"+m+p(F,m)),N+=F;else if(null!=T&&y(q=[],T).length){for(var U=d&&~N.indexOf("\n"),Q=!1,V=0;V<q.length;V++){var J=q[V];if(null!=J&&!1!==J){var W=x(J,t,r,!0,"svg"===w||"foreignObject"!==w&&s,f);if(d&&!U&&u(W)&&(U=!0),W)if(d){var G=W.length>0&&"<"!=W[0];Q&&G?$[$.length-1]+=W:$.push(W),Q=G}else $.push(W)}}if(d&&U)for(var X=$.length;X--;)$[X]="\n"+m+p($[X],m)}if($.length||F)N+=$.join("");else if(r&&r.xml)return N.substring(0,N.length-1)+" />";return!K||q||F?(d&&~N.indexOf("\n")&&(N+="\n"),N=N+"</"+w+">"):N=N.replace(/>$/," />"),N}var O={shallow:!0};j.render=j;var _=[];function j(e,t,r){t=t||{};var o=n.options.__s;n.options.__s=!0;var a,i=(0,n.h)(n.Fragment,null);return i.__k=[e],a=r&&(r.pretty||r.voidElements||r.sortAttributes||r.shallow||r.allAttributes||r.xml||r.attributeHook)?x(e,t,r):E(e,t,!1,void 0,i),n.options.__c&&n.options.__c(e,_),n.options.__s=o,_.length=0,a}function w(e){return null==e||"boolean"==typeof e?null:"string"==typeof e||"number"==typeof e||"bigint"==typeof e?(0,n.h)(null,null,e):e}function S(e,t){return"className"===e?"class":"htmlFor"===e?"for":"defaultValue"===e?"value":"defaultChecked"===e?"checked":"defaultSelected"===e?"selected":t&&l.test(e)?e.toLowerCase().replace(/^xlink:?/,"xlink:"):e}function P(e,t){return"style"===e&&null!=t&&"object"==typeof t?b(t):"a"===e[0]&&"r"===e[1]&&"boolean"==typeof t?String(t):t}var C=Array.isArray,k=Object.assign;function E(e,t,r,o,l){if(null==e||!0===e||!1===e||""===e)return"";if("object"!=typeof e)return"function"==typeof e?"":c(e);if(C(e)){var s="";l.__k=e;for(var p=0;p<e.length;p++)s+=E(e[p],t,r,o,l),e[p]=w(e[p]);return s}if(void 0!==e.constructor)return"";e.__=l,n.options.__b&&n.options.__b(e);var u=e.type,f=e.props;if("function"==typeof u){var d;if(u===n.Fragment)d=f.children;else{d=u.prototype&&"function"==typeof u.prototype.render?function(e,t){var r=e.type,o=v(r,t),a=new r(e.props,o);e.__c=a,a.__v=e,a.__d=!0,a.props=e.props,null==a.state&&(a.state={}),null==a.__s&&(a.__s=a.state),a.context=o,r.getDerivedStateFromProps?a.state=k({},a.state,r.getDerivedStateFromProps(a.props,a.state)):a.componentWillMount&&(a.componentWillMount(),a.state=a.__s!==a.state?a.__s:a.state);var i=n.options.__r;return i&&i(e),a.render(a.props,a.state,a.context)}(e,t):function(e,t){var r,o=g(e,t),a=v(e.type,t);e.__c=o;for(var i=n.options.__r,l=0;o.__d&&l++<25;)o.__d=!1,i&&i(e),r=e.type.call(o,e.props,a);return r}(e,t);var b=e.__c;b.getChildContext&&(t=k({},t,b.getChildContext()))}var y=E(d=null!=d&&d.type===n.Fragment&&null==d.key?d.props.children:d,t,r,o,e);return n.options.diffed&&n.options.diffed(e),e.__=void 0,n.options.unmount&&n.options.unmount(e),y}var m,h,x="<";if(x+=u,f)for(var O in m=f.children,f){var _=f[O];if(!("key"===O||"ref"===O||"__self"===O||"__source"===O||"children"===O||"className"===O&&"class"in f||"htmlFor"===O&&"for"in f||i.test(O)))if(_=P(O=S(O,r),_),"dangerouslySetInnerHTML"===O)h=_&&_.__html;else if("textarea"===u&&"value"===O)m=_;else if((_||0===_||""===_)&&"function"!=typeof _){if(!0===_||""===_){_=O,x=x+" "+O;continue}if("value"===O){if("select"===u){o=_;continue}"option"!==u||o!=_||"selected"in f||(x+=" selected")}x=x+" "+O+'="'+c(_)+'"'}}var j=x;if(x+=">",i.test(u))throw new Error(u+" is not a valid HTML tag name in "+x);var D="",A=!1;if(h)D+=h,A=!0;else if("string"==typeof m)D+=c(m),A=!0;else if(C(m)){e.__k=m;for(var M=0;M<m.length;M++){var I=m[M];if(m[M]=w(I),null!=I&&!1!==I){var T=E(I,t,"svg"===u||"foreignObject"!==u&&r,o,e);T&&(D+=T,A=!0)}}}else if(null!=m&&!1!==m&&!0!==m){e.__k=[w(m)];var F=E(m,t,"svg"===u||"foreignObject"!==u&&r,o,e);F&&(D+=F,A=!0)}if(n.options.diffed&&n.options.diffed(e),e.__=void 0,n.options.unmount&&n.options.unmount(e),A)x+=D;else if(a.test(u))return j+" />";return x+"</"+u+">"}j.shallowRender=function(e,t){return j(e,t,O)};const D=j;var A=r(650),M=r(567);function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){F(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function F(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function N(e,t,r,n,o,a,i){try{var l=e[a](i),s=l.value}catch(e){return void r(e)}l.done?t(s):Promise.resolve(s).then(n,o)}function L(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){N(a,n,o,i,l,"next",e)}function l(e){N(a,n,o,i,l,"throw",e)}i(void 0)}))}}var R=r(419),B=r(305),H=r.n(B),Z=r(850);const z=JSON.parse('{"Dropin":{"ExampleComponentName":{"item":{"label":"string"}},"Incrementer":{"decreaseLabel":"Decrease Quantity","increaseLabel":"Increase Quantity","label":"Quantity"},"Modal":{"Close":{"label":"Close"}},"InlineAlert":{"dismissLabel":"Dismiss Alert"},"PriceSummary":{"subTotal":{"label":"Subtotal","withTaxes":"Including taxes"},"shipping":{"label":"Shipping","estimated":"Estimated Shipping","estimatedZip":"Estimated Shipping to ","zipLinkAriaLabel":"Change zip code","withTaxes":"Including taxes"},"taxes":{"total":"Tax Total","totalOnly":"Tax","breakdown":"Taxes","showBreakdown":"Show Tax Breakdown","hideBreakdown":"Hide Tax Breakdown"},"total":{"estimated":"Estimated Total","label":"Total","withoutTax":"Total excluding taxes"}},"ProgressSpinner":{"updating":{"label":"Item is updating"},"updatingChildren":{"label":"Items are updating"}},"PriceRange":{"from":{"label":"From"},"to":{"label":"to"},"asLowAs":{"label":"As low as"}},"Swatches":{"outOfStock":{"label":"out of stock swatch"},"selected":{"label":"swatch selected"},"swatch":{"label":"swatch"}},"Accordion":{"open":{"label":"Open"},"close":{"label":"Close"}},"CartItem":{"each":{"label":"each"},"quantity":{"label":"Quantity"},"remove":{"label":"Remove {product} from the cart"},"removeDefault":{"label":"Remove item from the cart"},"taxIncluded":{"label":"incl. VAT"},"updating":{"label":"{product} is updating"}}}}');var q=r(921),K={default:z,en_US:z},$=r(892),U=r.n($),Q=r(357),V=r.n(Q),J=r(615),W=r.n(J),G=r(60),X=r.n(G),Y=r(379),ee={attributes:{"data-dropin":"@dropins/storefront-pdp"}};ee.setAttributes=W(),ee.insert=function(e){const t=document.querySelector("head"),r=window._lastElementInsertedByStyleLoader;r?r.nextSibling?t.insertBefore(e,r.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),window._lastElementInsertedByStyleLoader=e},ee.domAPI=V(),ee.insertStyleElement=X();U()(Y.Z,ee);Y.Z&&Y.Z.locals&&Y.Z.locals;var te=r(703),re={attributes:{"data-dropin":"@dropins/storefront-pdp"}};re.setAttributes=W(),re.insert=function(e){const t=document.querySelector("head"),r=window._lastElementInsertedByStyleLoader;r?r.nextSibling?t.insertBefore(e,r.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),window._lastElementInsertedByStyleLoader=e},re.domAPI=V(),re.insertStyleElement=X();U()(te.Z,re);te.Z&&te.Z.locals&&te.Z.locals;var ne=["lang","langDefinitions","className","children"];function oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ae(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(r),!0).forEach((function(t){ie(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):oe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ie(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function le(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var se=(0,R.createContext)({locale:"en-US"}),ce=e=>{var{lang:t="en_US",langDefinitions:r={},className:n,children:o}=e,a=le(e,ne),i=(0,R.useMemo)((()=>{var e,n=H()(r.default,null!==(e=r[t])&&void 0!==e?e:{});return H()((e=>H()(K.default,K[e]||{}))(t),n)}),[t,r]);return(0,M.jsx)(se.Provider,{value:{locale:t.replace("_","-")},children:(0,M.jsx)(q.Pj,{definition:i,children:(0,M.jsx)("div",ae(ae({},a),{},{className:(0,Z.S)(["dropin-design",n]),children:o}))})})},pe=r(214),ue=r(18);pe.events.enableLogger(!0);var fe={default:r(526)},de=e=>{var t,{children:r}=e,[n,o]=(0,R.useState)(),a=null===(t=ue.v.getConfig())||void 0===t?void 0:t.langDefinitions;(0,R.useEffect)((()=>{var e=pe.events.on("locale",(e=>{e!==n&&o(e)}),{eager:!0});return()=>{null==e||e.off()}}),[n]);var i=H()(fe,null!=a?a:{});return(0,M.jsx)(ce,{lang:n,langDefinitions:i,children:r})},be=new class{constructor(e){this._provider=e}render(e,t){var r=this;return function(){var o=L((function*(o){var a,i;if(!e)throw new Error("Component is not defined");if(!o)throw new Error("Root element is not defined");var l=null!==(a=yield null===(i=e.getInitialData)||void 0===i?void 0:i.call(e,t))&&void 0!==a?a:{};(0,n.render)((0,M.jsx)(A.F,T(T({node:r._provider},r._provider.props),{},{children:(0,M.jsx)(e,T(T({},t),{},{initialData:l}))})),o)}));return function(e){return o.apply(this,arguments)}}()}toString(e,t,r){var n=this;return L((function*(){var o,a;if(!e)throw new Error("Component is not defined");var i=null!==(o=yield null===(a=e.getInitialData)||void 0===a?void 0:a.call(e,t))&&void 0!==o?o:{};return D((0,M.jsx)(A.F,T(T({node:n._provider},n._provider.props),{},{children:(0,M.jsx)(e,T(T({},t),{},{initialData:i}))})),{},T({},r))}))()}}((0,M.jsx)(de,{}))},379:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(933),o=r.n(n),a=r(476),i=r.n(a)()(o());i.push([e.id,".dropin-design{\n  --color-brand-500:#454545;\n  --color-brand-600:#383838;\n  --color-brand-700:#2b2b2b;\n  --color-neutral-50:#ffffff;\n  --color-neutral-100:#fafafa;\n  --color-neutral-200:#f5f5f5;\n  --color-neutral-300:#e8e8e8;\n  --color-neutral-400:#d6d6d6;\n  --color-neutral-500:#b8b8b8;\n  --color-neutral-600:#8f8f8f;\n  --color-neutral-700:#666666;\n  --color-neutral-800:#3d3d3d;\n  --color-neutral-900:#292929;\n  --color-positive-200:#eff5ef;\n  --color-positive-500:#7fb078;\n  --color-positive-800:#53824c;\n  --color-informational-200:#eeeffb;\n  --color-informational-500:#6978d9;\n  --color-informational-800:#5d6dd6;\n  --color-warning-200:#fdf3e9;\n  --color-warning-500:#e79f5c;\n  --color-warning-800:#cc7a2e;\n  --color-alert-200:#ffebeb;\n  --color-alert-500:#db7070;\n  --color-alert-800:#c35050;\n  --color-button-active:var(--color-brand-700);\n  --color-button-focus:var(--color-neutral-400);\n  --color-button-hover:var(--color-brand-600);\n  --color-action-button-active:var(--color-neutral-50);\n  --color-action-button-hover:var(--color-neutral-300);\n  --color-opacity-16:rgba(255, 255, 255, 0.16);\n  --color-opacity-24:rgba(255, 255, 255, 0.24);\n  --grid-1-columns:4;\n  --grid-1-margins:0;\n  --grid-1-gutters:16px;\n  --grid-2-columns:12;\n  --grid-2-margins:0;\n  --grid-2-gutters:16px;\n  --grid-3-columns:12;\n  --grid-3-margins:0;\n  --grid-3-gutters:24px;\n  --grid-4-columns:12;\n  --grid-4-margins:0;\n  --grid-4-gutters:24px;\n  --grid-5-columns:12;\n  --grid-5-margins:0;\n  --grid-5-gutters:24px;\n  --shape-border-radius-1:3px;\n  --shape-border-radius-2:8px;\n  --shape-border-radius-3:24px;\n  --shape-border-width-1:1px;\n  --shape-border-width-2:1.5px;\n  --shape-border-width-3:2px;\n  --shape-border-width-4:4px;\n  --shape-shadow-1:0 0 16px 0 rgba(0, 0, 0, 0.16);\n  --shape-shadow-2:0 2px 16px 0 rgba(0, 0, 0, 0.16);\n  --shape-shadow-3:0 2px 3px 0 rgba(0, 0, 0, 0.16);\n  --shape-icon-stroke-1:1px;\n  --shape-icon-stroke-2:1.5px;\n  --shape-icon-stroke-3:2px;\n  --shape-icon-stroke-4:4px;\n  --spacing-xxsmall:4px;\n  --spacing-xsmall:8px;\n  --spacing-small:16px;\n  --spacing-medium:24px;\n  --spacing-big:32px;\n  --spacing-xbig:40px;\n  --spacing-xxbig:48px;\n  --spacing-large:64px;\n  --spacing-xlarge:72px;\n  --spacing-xxlarge:96px;\n  --spacing-huge:120px;\n  --spacing-xhuge:144px;\n  --spacing-xxhuge:192px;\n  --type-base-font-family:system-ui, sans-serif;\n  --type-display-1-font:normal normal 300 60px/72px var(--type-base-font-family);\n  --type-display-1-letter-spacing:0.04em;\n  --type-display-2-font:normal normal 300 48px/56px var(--type-base-font-family);\n  --type-display-2-letter-spacing:0.04em;\n  --type-display-3-font:normal normal 300 34px/40px var(--type-base-font-family);\n  --type-display-3-letter-spacing:0.04em;\n  --type-headline-1-font:normal normal 400 24px/32px var(--type-base-font-family);\n  --type-headline-1-letter-spacing:0.04em;\n  --type-headline-2-default-font:normal normal 300 20px/24px var(--type-base-font-family);\n  --type-headline-2-default-letter-spacing:0.04em;\n  --type-headline-2-strong-font:normal normal 400 20px/24px var(--type-base-font-family);\n  --type-headline-2-strong-letter-spacing:0.04em;\n  --type-body-1-default-font:normal normal 300 16px/24px var(--type-base-font-family);\n  --type-body-1-default-letter-spacing:0.04em;\n  --type-body-1-strong-font:normal normal 400 16px/24px var(--type-base-font-family);\n  --type-body-1-strong-letter-spacing:0.04em;\n  --type-body-1-emphasized-font:normal normal 700 16px/24px var(--type-base-font-family);\n  --type-body-1-emphasized-letter-spacing:0.04em;\n  --type-body-2-default-font:normal normal 300 14px/20px var(--type-base-font-family);\n  --type-body-2-default-letter-spacing:0.04em;\n  --type-body-2-strong-font:normal normal 400 14px/20px var(--type-base-font-family);\n  --type-body-2-strong-letter-spacing:0.04em;\n  --type-body-2-emphasized-font:normal normal 700 14px/20px var(--type-base-font-family);\n  --type-body-2-emphasized-letter-spacing:0.04em;\n  --type-button-1-font:normal normal 400 20px/26px var(--type-base-font-family);\n  --type-button-1-letter-spacing:0.08em;\n  --type-button-2-font:normal normal 400 16px/24px var(--type-base-font-family);\n  --type-button-2-letter-spacing:0.08em;\n  --type-details-caption-1-font:normal normal 400 12px/16px var(--type-base-font-family);\n  --type-details-caption-1-letter-spacing:0.08em;\n  --type-details-caption-2-font:normal normal 300 12px/16px var(--type-base-font-family);\n  --type-details-caption-2-letter-spacing:0.08em;\n  --type-details-overline-font:normal normal 400 12px/20px var(--type-base-font-family);\n  --type-details-overline-letter-spacing:0.16em;\n}\n",""]);const l=i},703:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(933),o=r.n(n),a=r(476),i=r.n(a)()(o());i.push([e.id,".dropin-design a{\n  --textColor:var(--color-brand-500);\n  color:var(--textColor);\n  text-decoration:none;\n}\n\n.dropin-design a:hover{\n  --textColor:var(--color-brand-700);\n  text-decoration:solid underline var(--textColor);\n  text-underline-offset:6px;\n}\n\n.dropin-design a:focus-visible{\n  outline:solid var(--shape-border-width-4) var(--color-neutral-400);\n  border:var(--shape-border-width-1) solid var(--color-neutral-800);\n  border-radius:var(--shape-border-radius-1);\n}\n",""]);const l=i},214:(t,r,n)=>{t.exports=(e=>{var t={};return n.d(t,e),t})({events:()=>e.events})},419:(e,r,n)=>{e.exports=(e=>{var t={};return n.d(t,e),t})({createContext:()=>t.createContext,useCallback:()=>t.useCallback,useContext:()=>t.useContext,useDebugValue:()=>t.useDebugValue,useEffect:()=>t.useEffect,useId:()=>t.useId,useImperativeHandle:()=>t.useImperativeHandle,useLayoutEffect:()=>t.useLayoutEffect,useMemo:()=>t.useMemo,useReducer:()=>t.useReducer,useRef:()=>t.useRef,useState:()=>t.useState})},174:(e,t,n)=>{e.exports=(e=>{var t={};return n.d(t,e),t})({Fragment:()=>r.Fragment,jsx:()=>r.jsx,jsxs:()=>r.jsxs})},770:(e,t,r)=>{e.exports=(e=>{var t={};return r.d(t,e),t})({Component:()=>n.Component,Fragment:()=>n.Fragment,cloneElement:()=>n.cloneElement,createContext:()=>n.createContext,createElement:()=>n.createElement,createRef:()=>n.createRef,h:()=>n.h,hydrate:()=>n.hydrate,options:()=>n.options,render:()=>n.render,toChildArray:()=>n.toChildArray})},526:e=>{e.exports=JSON.parse('{"PDP":{"Product":{"Incrementer":{"label":"Item Quantity"},"OutOfStock":{"label":"Out of Stock"},"AddToCart":{"label":"Add to Cart"},"Details":{"label":"Details"},"RegularPrice":{"label":"Regular Price"},"SpecialPrice":{"label":"Special Price"},"PriceRange":{"From":{"label":"From"},"To":{"label":"to"}},"Image":{"label":"{product} Image {key} of {total}"}},"Swatches":{"Required":{"label":"Required"}},"Carousel":{"label":"Carousel","Next":{"label":"Next"},"Previous":{"label":"Previous"},"Slide":{"label":"Slide"},"Controls":{"label":"Carousel Controls","Button":{"label":"Show slide {key} of {total}"}}},"Overlay":{"Close":{"label":"Close"}}},"Custom":{"quantityLabel":"Passengers"}}')}};import o from"./runtime.js";import*as a from"./277.js";o.C(a);import*as i from"./render.js";o.C(i);var l,s=(l=50,o(o.s=l)).s;export{s as render};