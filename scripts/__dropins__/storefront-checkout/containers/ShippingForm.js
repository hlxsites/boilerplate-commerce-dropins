import*as t from"@dropins/tools/event-bus.js";import*as e from"@dropins/tools/fetch-graphql.js";import*as r from"@dropins/tools/preact-compat.js";import*as n from"@dropins/tools/preact-hooks.js";import*as o from"@dropins/tools/preact-jsx-runtime.js";import*as i from"@dropins/tools/preact.js";export const id=3004;export const ids=[3004];export const modules={9064:(t,e,r)=>{r.d(e,{createElement:()=>n.createElement});var n=r(7320),o=r(2720);function i(t,e){for(var r in e)t[r]=e[r];return t}function s(t,e){for(var r in t)if("__source"!==r&&!(r in e))return!0;for(var n in e)if("__source"!==n&&t[n]!==e[n])return!0;return!1}function u(t,e){this.props=t,this.context=e}(u.prototype=new n.Component).isPureReactComponent=!0,u.prototype.shouldComponentUpdate=function(t,e){return s(this.props,t)||s(this.state,e)};var a=n.options.__b;n.options.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),a&&a(t)};"undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref");var f=function(t,e){return null==t?null:(0,n.toChildArray)((0,n.toChildArray)(t).map(e))},c=(n.toChildArray,n.options.__e);n.options.__e=function(t,e,r,n){if(t.then)for(var o,i=e;i=i.__;)if((o=i.__c)&&o.__c)return null==e.__e&&(e.__e=r.__e,e.__k=r.__k),o.__c(t,e);c(t,e,r,n)};var l=n.options.unmount;function p(t,e,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach((function(t){"function"==typeof t.__c&&t.__c()})),t.__c.__H=null),null!=(t=i({},t)).__c&&(t.__c.__P===r&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map((function(t){return p(t,e,r)}))),t}function v(t,e,r){return t&&r&&(t.__v=null,t.__k=t.__k&&t.__k.map((function(t){return v(t,e,r)})),t.__c&&t.__c.__P===e&&(t.__e&&r.appendChild(t.__e),t.__c.__e=!0,t.__c.__P=r)),t}function _(){this.__u=0,this.t=null,this.__b=null}function d(t){var e=t.__.__c;return e&&e.__a&&e.__a(t)}function h(){this.u=null,this.o=null}n.options.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&32&t.__u&&(t.type=null),l&&l(t)},(_.prototype=new n.Component).__c=function(t,e){var r=e.__c,n=this;null==n.t&&(n.t=[]),n.t.push(r);var o=d(n.__v),i=!1,s=function(){i||(i=!0,r.__R=null,o?o(u):u())};r.__R=s;var u=function(){if(! --n.__u){if(n.state.__a){var t=n.state.__a;n.__v.__k[0]=v(t,t.__c.__P,t.__c.__O)}var e;for(n.setState({__a:n.__b=null});e=n.t.pop();)e.forceUpdate()}};n.__u++||32&e.__u||n.setState({__a:n.__b=n.__v.__k[0]}),t.then(s,s)},_.prototype.componentWillUnmount=function(){this.t=[]},_.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=p(this.__b,r,o.__O=o.__P)}this.__b=null}var i=e.__a&&(0,n.createElement)(n.Fragment,null,t.fallback);return i&&(i.__u&=-33),[(0,n.createElement)(n.Fragment,null,e.__a?null:t.children),i]};var m=function(t,e,r){if(++r[1]===r[0]&&t.o.delete(e),t.props.revealOrder&&("t"!==t.props.revealOrder[0]||!t.o.size))for(r=t.u;r;){for(;r.length>3;)r.pop()();if(r[1]<r[0])break;t.u=r=r[2]}};(h.prototype=new n.Component).__a=function(t){var e=this,r=d(e.__v),n=e.o.get(t);return n[0]++,function(o){var i=function(){e.props.revealOrder?(n.push(o),m(e,t,n)):o()};r?r(i):i()}},h.prototype.render=function(t){this.u=null,this.o=new Map;var e=(0,n.toChildArray)(t.children);t.revealOrder&&"b"===t.revealOrder[0]&&e.reverse();for(var r=e.length;r--;)this.o.set(e[r],this.u=[1,0,this.u]);return t.children},h.prototype.componentDidUpdate=h.prototype.componentDidMount=function(){var t=this;this.o.forEach((function(e,r){m(t,r,e)}))};var y="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,b=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,g=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,S=/[A-Z0-9]/g,C="undefined"!=typeof document,x=function(t){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(t)};n.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(t){Object.defineProperty(n.Component.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})}));var O=n.options.event;function j(){}function w(){return this.cancelBubble}function k(){return this.defaultPrevented}n.options.event=function(t){return O&&(t=O(t)),t.persist=j,t.isPropagationStopped=w,t.isDefaultPrevented=k,t.nativeEvent=t};var E={enumerable:!1,configurable:!0,get:function(){return this.class}},P=n.options.vnode;n.options.vnode=function(t){"string"==typeof t.type&&function(t){var e=t.props,r=t.type,o={};for(var i in e){var s=e[i];if(!("value"===i&&"defaultValue"in e&&null==s||C&&"children"===i&&"noscript"===r||"class"===i||"className"===i)){var u=i.toLowerCase();"defaultValue"===i&&"value"in e&&null==e.value?i="value":"download"===i&&!0===s?s="":"translate"===u&&"no"===s?s=!1:"ondoubleclick"===u?i="ondblclick":"onchange"!==u||"input"!==r&&"textarea"!==r||x(e.type)?"onfocus"===u?i="onfocusin":"onblur"===u?i="onfocusout":g.test(i)?i=u:-1===r.indexOf("-")&&b.test(i)?i=i.replace(S,"-$&").toLowerCase():null===s&&(s=void 0):u=i="oninput","oninput"===u&&o[i=u]&&(i="oninputCapture"),o[i]=s}}"select"==r&&o.multiple&&Array.isArray(o.value)&&(o.value=(0,n.toChildArray)(e.children).forEach((function(t){t.props.selected=-1!=o.value.indexOf(t.props.value)}))),"select"==r&&null!=o.defaultValue&&(o.value=(0,n.toChildArray)(e.children).forEach((function(t){t.props.selected=o.multiple?-1!=o.defaultValue.indexOf(t.props.value):o.defaultValue==t.props.value}))),e.class&&!e.className?(o.class=e.class,Object.defineProperty(o,"className",E)):(e.className&&!e.class||e.class&&e.className)&&(o.class=o.className=e.className),t.props=o}(t),t.$$typeof=y,P&&P(t)};var R=n.options.__r;n.options.__r=function(t){R&&R(t),t.__c};var I=n.options.diffed;n.options.diffed=function(t){I&&I(t);var e=t.props,r=t.__e;null!=r&&"textarea"===t.type&&"value"in e&&e.value!==r.value&&(r.value=null==e.value?"":e.value),null};n.Fragment;o.useLayoutEffect;o.useState,o.useId,o.useReducer,o.useEffect,o.useLayoutEffect,o.useRef,o.useImperativeHandle,o.useMemo,o.useCallback,o.useContext,o.useDebugValue,n.createElement,n.createContext,n.createRef,n.Fragment,n.Component},1520:(t,e,r)=>{r.d(e,{OC:()=>h});var n=r(7320),o=r(2720);function i(){throw new Error("Cycle detected")}var s=Symbol.for("preact-signals");function u(){if(l>1)l--;else{for(var t,e=!1;void 0!==c;){var r=c;for(c=void 0,p++;void 0!==r;){var n=r.o;if(r.o=void 0,r.f&=-3,!(8&r.f)&&m(r))try{r.c()}catch(r){e||(t=r,e=!0)}r=n}}if(p=0,l--,e)throw t}}var a=void 0;var f,c=void 0,l=0,p=0,v=0;function _(t){if(void 0!==a){var e=t.n;if(void 0===e||e.t!==a)return e={i:0,S:t,p:a.s,n:void 0,t:a,e:void 0,x:void 0,r:e},void 0!==a.s&&(a.s.n=e),a.s=e,t.n=e,32&a.f&&t.S(e),e;if(-1===e.i)return e.i=0,void 0!==e.n&&(e.n.p=e.p,void 0!==e.p&&(e.p.n=e.n),e.p=a.s,e.n=void 0,a.s.n=e,a.s=e),e}}function d(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}function h(t){return new d(t)}function m(t){for(var e=t.s;void 0!==e;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function y(t){for(var e=t.s;void 0!==e;e=e.n){var r=e.S.n;if(void 0!==r&&(e.r=r),e.S.n=e,e.i=-1,void 0===e.n){t.s=e;break}}}function b(t){for(var e=t.s,r=void 0;void 0!==e;){var n=e.p;-1===e.i?(e.S.U(e),void 0!==n&&(n.n=e.n),void 0!==e.n&&(e.n.p=n)):r=e,e.S.n=e.r,void 0!==e.r&&(e.r=void 0),e=n}t.s=r}function g(t){d.call(this,void 0),this.x=t,this.s=void 0,this.g=v-1,this.f=4}function S(t){var e=t.u;if(t.u=void 0,"function"==typeof e){l++;var r=a;a=void 0;try{e()}catch(e){throw t.f&=-2,t.f|=8,C(t),e}finally{a=r,u()}}}function C(t){for(var e=t.s;void 0!==e;e=e.n)e.S.U(e);t.x=void 0,t.s=void 0,S(t)}function x(t){if(a!==this)throw new Error("Out-of-order effect");b(this),a=t,this.f&=-2,8&this.f&&C(this),u()}function O(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}function j(t){var e=new O(t);try{e.c()}catch(t){throw e.d(),t}return e.d.bind(e)}function w(t,e){n.options[t]=e.bind(null,n.options[t]||function(){})}function k(t){f&&f(),f=t&&t.S()}function E(t){var e=this,r=t.data,i=function(t){return(0,o.useMemo)((function(){return h(t)}),[])}(r);i.value=r;var s=(0,o.useMemo)((function(){for(var t=e.__v;t=t.__;)if(t.__c){t.__c.__$f|=4;break}return e.__$u.c=function(){var t;(0,n.isValidElement)(s.peek())||3!==(null==(t=e.base)?void 0:t.nodeType)?(e.__$f|=1,e.setState({})):e.base.data=s.peek()},function(t){return new g(t)}((function(){var t=i.value.value;return 0===t?0:!0===t?"":t||""}))}),[]);return s.value}function P(t,e,r,n){var o=e in t&&void 0===t.ownerSVGElement,i=h(r);return{o:function(t,e){i.value=t,n=e},d:j((function(){var r=i.value.value;n[e]!==r&&(n[e]=r,o?t[e]=r:r?t.setAttribute(e,r):t.removeAttribute(e))}))}}d.prototype.brand=s,d.prototype.h=function(){return!0},d.prototype.S=function(t){this.t!==t&&void 0===t.e&&(t.x=this.t,void 0!==this.t&&(this.t.e=t),this.t=t)},d.prototype.U=function(t){if(void 0!==this.t){var e=t.e,r=t.x;void 0!==e&&(e.x=r,t.e=void 0),void 0!==r&&(r.e=e,t.x=void 0),t===this.t&&(this.t=r)}},d.prototype.subscribe=function(t){var e=this;return j((function(){var r=e.value,n=32&this.f;this.f&=-33;try{t(r)}finally{this.f|=n}}))},d.prototype.valueOf=function(){return this.value},d.prototype.toString=function(){return this.value+""},d.prototype.toJSON=function(){return this.value},d.prototype.peek=function(){return this.v},Object.defineProperty(d.prototype,"value",{get:function(){var t=_(this);return void 0!==t&&(t.i=this.i),this.v},set:function(t){if(a instanceof g&&function(){throw new Error("Computed cannot have side-effects")}(),t!==this.v){p>100&&i(),this.v=t,this.i++,v++,l++;try{for(var e=this.t;void 0!==e;e=e.x)e.t.N()}finally{u()}}}}),(g.prototype=new d).h=function(){if(this.f&=-3,1&this.f)return!1;if(32==(36&this.f))return!0;if(this.f&=-5,this.g===v)return!0;if(this.g=v,this.f|=1,this.i>0&&!m(this))return this.f&=-2,!0;var t=a;try{y(this),a=this;var e=this.x();(16&this.f||this.v!==e||0===this.i)&&(this.v=e,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return a=t,b(this),this.f&=-2,!0},g.prototype.S=function(t){if(void 0===this.t){this.f|=36;for(var e=this.s;void 0!==e;e=e.n)e.S.S(e)}d.prototype.S.call(this,t)},g.prototype.U=function(t){if(void 0!==this.t&&(d.prototype.U.call(this,t),void 0===this.t)){this.f&=-33;for(var e=this.s;void 0!==e;e=e.n)e.S.U(e)}},g.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;void 0!==t;t=t.x)t.t.N()}},g.prototype.peek=function(){if(this.h()||i(),16&this.f)throw this.v;return this.v},Object.defineProperty(g.prototype,"value",{get:function(){1&this.f&&i();var t=_(this);if(this.h(),void 0!==t&&(t.i=this.i),16&this.f)throw this.v;return this.v}}),O.prototype.c=function(){var t=this.S();try{if(8&this.f)return;if(void 0===this.x)return;var e=this.x();"function"==typeof e&&(this.u=e)}finally{t()}},O.prototype.S=function(){1&this.f&&i(),this.f|=1,this.f&=-9,S(this),y(this),l++;var t=a;return a=this,x.bind(this,t)},O.prototype.N=function(){2&this.f||(this.f|=2,this.o=c,c=this)},O.prototype.d=function(){this.f|=8,1&this.f||C(this)},E.displayName="_st",Object.defineProperties(d.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:E},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}}),w("__b",(function(t,e){if("string"==typeof e.type){var r,n=e.props;for(var o in n)if("children"!==o){var i=n[o];i instanceof d&&(r||(e.__np=r={}),r[o]=i,n[o]=i.peek())}}t(e)})),w("__r",(function(t,e){k();var r,n=e.__c;n&&(n.__$f&=-2,void 0===(r=n.__$u)&&(n.__$u=r=function(t){var e;return j((function(){e=this})),e.c=function(){n.__$f|=1,n.setState({})},e}())),n,k(r),t(e)})),w("__e",(function(t,e,r,n){k(),void 0,t(e,r,n)})),w("diffed",(function(t,e){var r;if(k(),void 0,"string"==typeof e.type&&(r=e.__e)){var n=e.__np,o=e.props;if(n){var i=r.U;if(i)for(var s in i){var u=i[s];void 0===u||s in n||(u.d(),i[s]=void 0)}else r.U=i={};for(var a in n){var f=i[a],c=n[a];void 0===f?(f=P(r,a,c,o),i[a]=f):f.o(c,o)}}}t(e)})),w("unmount",(function(t,e){if("string"==typeof e.type){var r=e.__e;if(r){var n=r.U;if(n)for(var o in r.U=void 0,n){var i=n[o];i&&i.d()}}}else{var s=e.__c;if(s){var u=s.__$u;u&&(s.__$u=void 0,u.d())}}t(e)})),w("__h",(function(t,e,r,n){(n<3||9===n)&&(e.__$f|=2),t(e,r,n)})),n.Component.prototype.shouldComponentUpdate=function(t,e){var r=this.__$u;if(!(r&&void 0!==r.s||4&this.__$f))return!0;if(3&this.__$f)return!0;for(var n in e)return!0;for(var o in t)if("__source"!==o&&t[o]!==this.props[o])return!0;for(var i in this.props)if(!(i in t))return!0;return!1}},4468:(t,e,r)=>{r.d(e,{S:()=>h});var n=r(5124),o=r(2532),i=r(3896),s=r(8996),u=r(6528),a=r(5668),f=r(9488),c=r(5092),l=["preselectedFields"];function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){_(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function _(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function d(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var h=t=>{var{preselectedFields:e}=t,r=d(t,l),{data:p}=a.cartSignal.value,_=(null==p?void 0:p.id)||"",h=f.isBillToShippingSignal.value.checked,m=(0,u.useCallback)((t=>(0,n.Eh)({signal:t.signal,cartId:_,address:(0,n.ek)(t.address)}).then((()=>{if(h)return(0,o.W)({cartId:_,input:{same_as_shipping:!0}})}))),[_,h]);return(0,c.jsx)(i.i,v(v({},r),{},{addressType:"shipping_addresses",headingId:"Checkout.ShippingAddress.title",name:s.I,preselectedFields:e,saveAddressHandler:m}))}},8996:(t,e,r)=>{r.d(e,{I:()=>n});var n="shipping_address"},2464:(t,e,r)=>{r.d(e,{Ib:()=>o.I,SW:()=>n.S,cp:()=>n.S});var n=r(4468),o=r(8996)},8122:(e,r,n)=>{e.exports=(t=>{var e={};return n.d(e,t),e})({events:()=>t.events})},8616:(t,r,n)=>{t.exports=(t=>{var e={};return n.d(e,t),e})({FetchGraphQL:()=>e.FetchGraphQL})},6528:(t,e,n)=>{t.exports=(t=>{var e={};return n.d(e,t),e})({Suspense:()=>r.Suspense,createContext:()=>r.createContext,forwardRef:()=>r.forwardRef,lazy:()=>r.lazy,useCallback:()=>r.useCallback,useContext:()=>r.useContext,useEffect:()=>r.useEffect,useImperativeHandle:()=>r.useImperativeHandle,useMemo:()=>r.useMemo,useRef:()=>r.useRef,useState:()=>r.useState})},2720:(t,e,r)=>{t.exports=(t=>{var e={};return r.d(e,t),e})({useCallback:()=>n.useCallback,useContext:()=>n.useContext,useDebugValue:()=>n.useDebugValue,useEffect:()=>n.useEffect,useId:()=>n.useId,useImperativeHandle:()=>n.useImperativeHandle,useLayoutEffect:()=>n.useLayoutEffect,useMemo:()=>n.useMemo,useReducer:()=>n.useReducer,useRef:()=>n.useRef,useState:()=>n.useState})},6168:(t,e,r)=>{t.exports=(t=>{var e={};return r.d(e,t),e})({Fragment:()=>o.Fragment,jsx:()=>o.jsx,jsxs:()=>o.jsxs})},7320:(t,e,r)=>{t.exports=(t=>{var e={};return r.d(e,t),e})({Component:()=>i.Component,Fragment:()=>i.Fragment,cloneElement:()=>i.cloneElement,createContext:()=>i.createContext,createElement:()=>i.createElement,createRef:()=>i.createRef,h:()=>i.h,hydrate:()=>i.hydrate,isValidElement:()=>i.isValidElement,options:()=>i.options,render:()=>i.render,toChildArray:()=>i.toChildArray})}};import s from"../runtime.js";import*as u from"../4392.js";s.C(u);import*as a from"../8668.js";s.C(a);import*as f from"../5068.js";s.C(f);import*as c from"../9700.js";s.C(c);import*as l from"../7624.js";s.C(l);import*as p from"../3296.js";s.C(p);import*as v from"./ShippingForm.js";s.C(v);var _,d=(_=2464,s(s.s=_)),h=d.Ib,m=d.SW,y=d.cp;export{h as SHIPPING_FORM_NAME,m as ShippingForm,y as default};