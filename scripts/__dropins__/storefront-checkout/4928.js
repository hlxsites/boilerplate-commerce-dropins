export const id=4928;export const ids=[4928];export const modules={1520:(n,t,e)=>{e.d(t,{OC:()=>m});var r=e(304),i=e(8596);function o(){throw new Error("Cycle detected")}var s=Symbol.for("preact-signals");function a(){if(p>1)p--;else{for(var n,t=!1;void 0!==c;){var e=c;for(c=void 0,u++;void 0!==e;){var r=e.o;if(e.o=void 0,e.f&=-3,!(8&e.f)&&y(e))try{e.c()}catch(e){t||(n=e,t=!0)}e=r}}if(u=0,p--,t)throw n}}var l=void 0;var d,c=void 0,p=0,u=0,f=0;function v(n){if(void 0!==l){var t=n.n;if(void 0===t||t.t!==l)return t={i:0,S:n,p:l.s,n:void 0,t:l,e:void 0,x:void 0,r:t},void 0!==l.s&&(l.s.n=t),l.s=t,n.n=t,32&l.f&&n.S(t),t;if(-1===t.i)return t.i=0,void 0!==t.n&&(t.n.p=t.p,void 0!==t.p&&(t.p.n=t.n),t.p=l.s,t.n=void 0,l.s.n=t,l.s=t),t}}function h(n){this.v=n,this.i=0,this.n=void 0,this.t=void 0}function m(n){return new h(n)}function y(n){for(var t=n.s;void 0!==t;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function b(n){for(var t=n.s;void 0!==t;t=t.n){var e=t.S.n;if(void 0!==e&&(t.r=e),t.S.n=t,t.i=-1,void 0===t.n){n.s=t;break}}}function g(n){for(var t=n.s,e=void 0;void 0!==t;){var r=t.p;-1===t.i?(t.S.U(t),void 0!==r&&(r.n=t.n),void 0!==t.n&&(t.n.p=r)):e=t,t.S.n=t.r,void 0!==t.r&&(t.r=void 0),t=r}n.s=e}function w(n){h.call(this,void 0),this.x=n,this.s=void 0,this.g=f-1,this.f=4}function _(n){var t=n.u;if(n.u=void 0,"function"==typeof t){p++;var e=l;l=void 0;try{t()}catch(t){throw n.f&=-2,n.f|=8,k(n),t}finally{l=e,a()}}}function k(n){for(var t=n.s;void 0!==t;t=t.n)t.S.U(t);n.x=void 0,n.s=void 0,_(n)}function S(n){if(l!==this)throw new Error("Out-of-order effect");g(this),l=n,this.f&=-2,8&this.f&&k(this),a()}function O(n){this.x=n,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}function j(n){var t=new O(n);try{t.c()}catch(n){throw t.d(),n}return t.d.bind(t)}function x(n,t){r.s1[n]=t.bind(null,r.s1[n]||function(){})}function P(n){d&&d(),d=n&&n.S()}function N(n){var t=this,e=n.data,o=function(n){return(0,i.bB)((function(){return m(n)}),[])}(e);o.value=e;var s=(0,i.bB)((function(){for(var n=t.__v;n=n.__;)if(n.__c){n.__c.__$f|=4;break}return t.__$u.c=function(){var n;(0,r.ur)(s.peek())||3!==(null==(n=t.base)?void 0:n.nodeType)?(t.__$f|=1,t.setState({})):t.base.data=s.peek()},function(n){return new w(n)}((function(){var n=o.value.value;return 0===n?0:!0===n?"":n||""}))}),[]);return s.value}function D(n,t,e,r){var i=t in n&&void 0===n.ownerSVGElement,o=m(e);return{o:function(n,t){o.value=n,r=t},d:j((function(){var e=o.value.value;r[t]!==e&&(r[t]=e,i?n[t]=e:e?n.setAttribute(t,e):n.removeAttribute(t))}))}}h.prototype.brand=s,h.prototype.h=function(){return!0},h.prototype.S=function(n){this.t!==n&&void 0===n.e&&(n.x=this.t,void 0!==this.t&&(this.t.e=n),this.t=n)},h.prototype.U=function(n){if(void 0!==this.t){var t=n.e,e=n.x;void 0!==t&&(t.x=e,n.e=void 0),void 0!==e&&(e.e=t,n.x=void 0),n===this.t&&(this.t=e)}},h.prototype.subscribe=function(n){var t=this;return j((function(){var e=t.value,r=32&this.f;this.f&=-33;try{n(e)}finally{this.f|=r}}))},h.prototype.valueOf=function(){return this.value},h.prototype.toString=function(){return this.value+""},h.prototype.toJSON=function(){return this.value},h.prototype.peek=function(){return this.v},Object.defineProperty(h.prototype,"value",{get:function(){var n=v(this);return void 0!==n&&(n.i=this.i),this.v},set:function(n){if(l instanceof w&&function(){throw new Error("Computed cannot have side-effects")}(),n!==this.v){u>100&&o(),this.v=n,this.i++,f++,p++;try{for(var t=this.t;void 0!==t;t=t.x)t.t.N()}finally{a()}}}}),(w.prototype=new h).h=function(){if(this.f&=-3,1&this.f)return!1;if(32==(36&this.f))return!0;if(this.f&=-5,this.g===f)return!0;if(this.g=f,this.f|=1,this.i>0&&!y(this))return this.f&=-2,!0;var n=l;try{b(this),l=this;var t=this.x();(16&this.f||this.v!==t||0===this.i)&&(this.v=t,this.f&=-17,this.i++)}catch(n){this.v=n,this.f|=16,this.i++}return l=n,g(this),this.f&=-2,!0},w.prototype.S=function(n){if(void 0===this.t){this.f|=36;for(var t=this.s;void 0!==t;t=t.n)t.S.S(t)}h.prototype.S.call(this,n)},w.prototype.U=function(n){if(void 0!==this.t&&(h.prototype.U.call(this,n),void 0===this.t)){this.f&=-33;for(var t=this.s;void 0!==t;t=t.n)t.S.U(t)}},w.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var n=this.t;void 0!==n;n=n.x)n.t.N()}},w.prototype.peek=function(){if(this.h()||o(),16&this.f)throw this.v;return this.v},Object.defineProperty(w.prototype,"value",{get:function(){1&this.f&&o();var n=v(this);if(this.h(),void 0!==n&&(n.i=this.i),16&this.f)throw this.v;return this.v}}),O.prototype.c=function(){var n=this.S();try{if(8&this.f)return;if(void 0===this.x)return;var t=this.x();"function"==typeof t&&(this.u=t)}finally{n()}},O.prototype.S=function(){1&this.f&&o(),this.f|=1,this.f&=-9,_(this),b(this),p++;var n=l;return l=this,S.bind(this,n)},O.prototype.N=function(){2&this.f||(this.f|=2,this.o=c,c=this)},O.prototype.d=function(){this.f|=8,1&this.f||k(this)},N.displayName="_st",Object.defineProperties(h.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:N},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}}),x("__b",(function(n,t){if("string"==typeof t.type){var e,r=t.props;for(var i in r)if("children"!==i){var o=r[i];o instanceof h&&(e||(t.__np=e={}),e[i]=o,r[i]=o.peek())}}n(t)})),x("__r",(function(n,t){P();var e,r=t.__c;r&&(r.__$f&=-2,void 0===(e=r.__$u)&&(r.__$u=e=function(n){var t;return j((function(){t=this})),t.c=function(){r.__$f|=1,r.setState({})},t}())),r,P(e),n(t)})),x("__e",(function(n,t,e,r){P(),void 0,n(t,e,r)})),x("diffed",(function(n,t){var e;if(P(),void 0,"string"==typeof t.type&&(e=t.__e)){var r=t.__np,i=t.props;if(r){var o=e.U;if(o)for(var s in o){var a=o[s];void 0===a||s in r||(a.d(),o[s]=void 0)}else e.U=o={};for(var l in r){var d=o[l],c=r[l];void 0===d?(d=D(e,l,c,i),o[l]=d):d.o(c,i)}}}n(t)})),x("unmount",(function(n,t){if("string"==typeof t.type){var e=t.__e;if(e){var r=e.U;if(r)for(var i in e.U=void 0,r){var o=r[i];o&&o.d()}}}else{var s=t.__c;if(s){var a=s.__$u;a&&(s.__$u=void 0,a.d())}}n(t)})),x("__h",(function(n,t,e,r){(r<3||9===r)&&(t.__$f|=2),n(t,e,r)})),r.Yl.prototype.shouldComponentUpdate=function(n,t){var e=this.__$u;if(!(e&&void 0!==e.s||4&this.__$f))return!0;if(3&this.__$f)return!0;for(var r in t)return!0;for(var i in n)if("__source"!==i&&n[i]!==this.props[i])return!0;for(var o in this.props)if(!(o in n))return!0;return!1}},6660:(n,t,e)=>{e.d(t,{M:()=>k});var r=e(4944),i=e(5536),o=e.n(i),s=e(7008),a=e.n(s),l=e(1496),d=e.n(l),c=e(9356),p=e.n(c),u=e(9904),f=e.n(u),v=e(1480),h={attributes:{"data-dropin":"storefront-checkout","data-sdk":"0.22.0-alpha1"}};h.styleTagTransform=function(n,t){setTimeout((()=>{window.window._loadedStyles=window.window._loadedStyles??{};const{core:e,sdk:r}=function(n,t){const e=n?.match(/^\.dropin-(\w+)/)?.[1],r=t.getAttribute("data-sdk");return{core:e,sdk:r}}(n,t),i=e?`sdk/${e}`:t.getAttribute("data-dropin");!function(n,t){n.setAttribute("data-dropin",t),n.removeAttribute("data-sdk")}(t,i);const o=window._loadedStyles[i];o?function(n,t,e,r){const i=function(n,t){const e=n=>{const[t,e]=n.split("-"),[r,i,o]=t.split(".").map(Number),s=e?e.match(/(alpha|beta)(\d*)/):null;return{major:r,minor:i,patch:o,preType:s?s[1]:"",preNumber:s?parseInt(s[2],10):0}},r=e(n),i=e(t);if(r.major!==i.major)return r.major>i.major?n:t;if(r.minor!==i.minor)return r.minor>i.minor?n:t;if(r.patch!==i.patch)return r.patch>i.patch?n:t;if(r.preType&&i.preType)return r.preType===i.preType?r.preNumber>i.preNumber?n:t:"beta"===r.preType?t:n;return r.preType?t:n}(e,r.sdk);if(!r.core||r.core&&i===r.sdk){const t=r.style.textContent;r.style.textContent=`${t}\n/* --- MERGED --- */\n${n}`}else r.core&&i!==r.sdk&&(r.style.textContent=`/* --- UPGRADED --- */\n${n}`);t.remove()}(n,t,r,o):(function(n,t,e,r,i){t.textContent=n,window._loadedStyles[i]={sdk:r,core:e,style:t}}(n,t,e,r,i),function(n,t){const e=document.querySelector("head"),{lastDropinStyleInjected:r,lastSDKStyleInjected:i}=window._loadedStyles;t?(i?e.insertBefore(n,i.nextSibling):e.insertBefore(n,e.firstChild),window._loadedStyles.lastSDKStyleInjected=n):(r?e.insertBefore(n,r.nextSibling):i?e.insertBefore(n,i.nextSibling):e.insertBefore(n,e.firstChild),window._loadedStyles.lastDropinStyleInjected=n)}(t,e))}),0)},h.setAttributes=p(),h.insert=d().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=f();o()(v.c,h);v.c&&v.c.locals&&v.c.locals;var m=e(8412),y=["variant","className","children"];function b(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function g(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?b(Object(e),!0).forEach((function(t){w(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):b(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function w(n,t,e){return(t=function(n){var t=function(n,t){if("object"!=typeof n||!n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var r=e.call(n,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(n)}(n,"string");return"symbol"==typeof t?t:String(t)}(t))in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function _(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}var k=n=>{var{variant:t="primary",className:e,children:i}=n,o=_(n,y);return(0,m.im)("div",g(g({},o),{},{className:(0,r.i)(["dropin-card","dropin-card--".concat(t),e]),children:(0,m.im)("div",{class:"dropin-card__content",children:i})}))}},8424:(n,t,e)=>{e.d(t,{y:()=>S});var r=e(2460),i=e(4944),o=e(5536),s=e.n(o),a=e(7008),l=e.n(a),d=e(1496),c=e.n(d),p=e(9356),u=e.n(p),f=e(9904),v=e.n(f),h=e(7248),m={attributes:{"data-dropin":"storefront-checkout","data-sdk":"0.22.0-alpha1"}};m.styleTagTransform=function(n,t){setTimeout((()=>{window.window._loadedStyles=window.window._loadedStyles??{};const{core:e,sdk:r}=function(n,t){const e=n?.match(/^\.dropin-(\w+)/)?.[1],r=t.getAttribute("data-sdk");return{core:e,sdk:r}}(n,t),i=e?`sdk/${e}`:t.getAttribute("data-dropin");!function(n,t){n.setAttribute("data-dropin",t),n.removeAttribute("data-sdk")}(t,i);const o=window._loadedStyles[i];o?function(n,t,e,r){const i=function(n,t){const e=n=>{const[t,e]=n.split("-"),[r,i,o]=t.split(".").map(Number),s=e?e.match(/(alpha|beta)(\d*)/):null;return{major:r,minor:i,patch:o,preType:s?s[1]:"",preNumber:s?parseInt(s[2],10):0}},r=e(n),i=e(t);if(r.major!==i.major)return r.major>i.major?n:t;if(r.minor!==i.minor)return r.minor>i.minor?n:t;if(r.patch!==i.patch)return r.patch>i.patch?n:t;if(r.preType&&i.preType)return r.preType===i.preType?r.preNumber>i.preNumber?n:t:"beta"===r.preType?t:n;return r.preType?t:n}(e,r.sdk);if(!r.core||r.core&&i===r.sdk){const t=r.style.textContent;r.style.textContent=`${t}\n/* --- MERGED --- */\n${n}`}else r.core&&i!==r.sdk&&(r.style.textContent=`/* --- UPGRADED --- */\n${n}`);t.remove()}(n,t,r,o):(function(n,t,e,r,i){t.textContent=n,window._loadedStyles[i]={sdk:r,core:e,style:t}}(n,t,e,r,i),function(n,t){const e=document.querySelector("head"),{lastDropinStyleInjected:r,lastSDKStyleInjected:i}=window._loadedStyles;t?(i?e.insertBefore(n,i.nextSibling):e.insertBefore(n,e.firstChild),window._loadedStyles.lastSDKStyleInjected=n):(r?e.insertBefore(n,r.nextSibling):i?e.insertBefore(n,i.nextSibling):e.insertBefore(n,e.firstChild),window._loadedStyles.lastDropinStyleInjected=n)}(t,e))}),0)},m.setAttributes=u(),m.insert=c().bind(null,"head"),m.domAPI=l(),m.insertStyleElement=v();s()(h.c,m);h.c&&h.c.locals&&h.c.locals;var y=e(8412),b=["ariaLabel","size","stroke","children","className","style"];function g(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function w(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?g(Object(e),!0).forEach((function(t){_(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):g(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function _(n,t,e){return(t=function(n){var t=function(n,t){if("object"!=typeof n||!n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var r=e.call(n,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(n)}(n,"string");return"symbol"==typeof t?t:String(t)}(t))in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function k(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}var S=n=>{var{ariaLabel:t,size:e="small",stroke:o="4",children:s,className:a,style:l}=n,d=k(n,b),c=["dropin-progress-spinner","dropin-progress-spinner--shape-size-".concat(e),"dropin-progress-spinner--shape-stroke-".concat(o)],p=(0,r.cF)({updating:"Dropin.ProgressSpinner.updating.label",updatingChildren:"Dropin.ProgressSpinner.updatingChildren.label"}),u=()=>t||(s?p.updatingChildren:p.updating);return s?(0,y.YH)("div",w(w({},d),{},{className:(0,i.i)(["dropin-progress-spinner-provider"]),"aria-live":"polite",role:"status",children:[(0,y.im)("div",{"aria-hidden":!0,children:s}),(0,y.im)("div",{"aria-label":u(),role:"status",className:(0,i.i)(["dropin-progress-spinner-background",a]),style:l}),(0,y.im)("div",{className:(0,i.i)(["dropin-progress-spinner-with-provider",...c]),"aria-hidden":!0})]})):(0,y.im)("div",w(w({},d),{},{className:(0,i.i)([a,...c]),"aria-live":"polite",role:"status","aria-label":u()}))}},3388:(n,t,e)=>{e.d(t,{W:()=>j,K:()=>O});var r=e(4944),i=e(5536),o=e.n(i),s=e(7008),a=e.n(s),l=e(1496),d=e.n(l),c=e(9356),p=e.n(c),u=e(9904),f=e.n(u),v=e(6072),h={attributes:{"data-dropin":"storefront-checkout","data-sdk":"0.22.0-alpha1"}};h.styleTagTransform=function(n,t){setTimeout((()=>{window.window._loadedStyles=window.window._loadedStyles??{};const{core:e,sdk:r}=function(n,t){const e=n?.match(/^\.dropin-(\w+)/)?.[1],r=t.getAttribute("data-sdk");return{core:e,sdk:r}}(n,t),i=e?`sdk/${e}`:t.getAttribute("data-dropin");!function(n,t){n.setAttribute("data-dropin",t),n.removeAttribute("data-sdk")}(t,i);const o=window._loadedStyles[i];o?function(n,t,e,r){const i=function(n,t){const e=n=>{const[t,e]=n.split("-"),[r,i,o]=t.split(".").map(Number),s=e?e.match(/(alpha|beta)(\d*)/):null;return{major:r,minor:i,patch:o,preType:s?s[1]:"",preNumber:s?parseInt(s[2],10):0}},r=e(n),i=e(t);if(r.major!==i.major)return r.major>i.major?n:t;if(r.minor!==i.minor)return r.minor>i.minor?n:t;if(r.patch!==i.patch)return r.patch>i.patch?n:t;if(r.preType&&i.preType)return r.preType===i.preType?r.preNumber>i.preNumber?n:t:"beta"===r.preType?t:n;return r.preType?t:n}(e,r.sdk);if(!r.core||r.core&&i===r.sdk){const t=r.style.textContent;r.style.textContent=`${t}\n/* --- MERGED --- */\n${n}`}else r.core&&i!==r.sdk&&(r.style.textContent=`/* --- UPGRADED --- */\n${n}`);t.remove()}(n,t,r,o):(function(n,t,e,r,i){t.textContent=n,window._loadedStyles[i]={sdk:r,core:e,style:t}}(n,t,e,r,i),function(n,t){const e=document.querySelector("head"),{lastDropinStyleInjected:r,lastSDKStyleInjected:i}=window._loadedStyles;t?(i?e.insertBefore(n,i.nextSibling):e.insertBefore(n,e.firstChild),window._loadedStyles.lastSDKStyleInjected=n):(r?e.insertBefore(n,r.nextSibling):i?e.insertBefore(n,i.nextSibling):e.insertBefore(n,e.firstChild),window._loadedStyles.lastDropinStyleInjected=n)}(t,e))}),0)},h.setAttributes=p(),h.insert=d().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=f();o()(v.c,h);v.c&&v.c.locals&&v.c.locals;var m=e(8412),y=["className","fullWidth","lines","size","variant","children","multilineGap"],b=["className","children","rowGap"];function g(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function w(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?g(Object(e),!0).forEach((function(t){_(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):g(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function _(n,t,e){return(t=function(n){var t=function(n,t){if("object"!=typeof n||!n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var r=e.call(n,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(n)}(n,"string");return"symbol"==typeof t?t:String(t)}(t))in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function k(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}var S=1,O=n=>{var{className:t,fullWidth:e=!1,lines:i=S,size:o="small",variant:s="row",children:a=null,multilineGap:l="medium"}=n,d=k(n,y),c=[["dropin-skeleton-row__".concat(s),s],["dropin-skeleton-row__".concat(s,"-").concat(o),s&&o]];if(!a&&"empty"===s)return(0,m.im)("div",{className:(0,r.i)(["dropin-skeleton-row dropin-skeleton-row__empty",t])});if(a){var p=a.trim();return(0,m.im)("div",w(w({},d),{},{class:(0,r.i)(["dropin-skeleton-row",["dropin-skeleton-row--full",e],t]),dangerouslySetInnerHTML:{__html:p}}))}return!1===i>S?(0,m.im)("div",w(w({},d),{},{class:(0,r.i)(["dropin-skeleton-row",["dropin-skeleton-row--full",e],"dropin-skeleton--row__content",...c,t])})):(0,m.im)("div",w(w({},d),{},{style:{"--multiline-gap-spacing":"var(--spacing-".concat(l,")")},class:(0,r.i)(["dropin-skeleton-row--multiline",["dropin-skeleton-row--full",e],t]),children:Array.from({length:i}).map(((n,t)=>(0,m.im)("div",{class:(0,r.i)(["dropin-skeleton-row",["dropin-skeleton-row--full",e],"dropin-skeleton--row__content",...c])},t)))}))},j=n=>{var{className:t,children:e,rowGap:i="medium"}=n,o=k(n,b);return(0,m.im)("div",w(w({style:{"--row-gap-spacing":"var(--spacing-".concat(i,")")}},o),{},{className:(0,r.i)(["dropin-skeleton",t]),role:"status","aria-label":"Loading...",children:e}))}},1480:(n,t,e)=>{e.d(t,{c:()=>a});var r=e(6008),i=e.n(r),o=e(2076),s=e.n(o)()(i());s.push([n.id,".dropin-card{\n  --bgColor:var(--color-neutral-200);\n  background-color:var(--bgColor);\n  border-width:0;\n  border-radius:var(--shape-border-radius-2);\n}\n\n.dropin-card--secondary{\n  --bgColor:var(--color-neutral-50);\n  border-width:var(--shape-border-width-2);\n  border-style:solid;\n  border-color:var(--color-neutral-400);\n}\n\n.dropin-card__content{\n  display:flex;\n  flex-direction:column;\n  gap:var(--spacing-medium);\n  padding-top:var(--spacing-medium);\n  padding-right:var(--spacing-medium);\n  padding-bottom:var(--spacing-medium);\n  padding-left:var(--spacing-medium);\n}\n",""]);const a=s},7248:(n,t,e)=>{e.d(t,{c:()=>a});var r=e(6008),i=e.n(r),o=e(2076),s=e.n(o)()(i());s.push([n.id,".dropin-progress-spinner-provider{\n  position:relative;\n  display:flex;\n  flex-direction:column;\n  border-radius:inherit;\n  opacity:1;\n  padding:var(--spacing-small);\n}\n\n.dropin-progress-spinner{\n  --size:var(--spacing-medium);\n  --stroke-width:var(--shape-icon-stroke-4);\n  width:var(--size);\n  height:var(--size);\n  border-style:solid;\n  border-width:var(--stroke-width);\n  border-color:var(--color-neutral-400);\n  border-top-color:var(--color-brand-500);\n  border-radius:50%;\n  animation:indeterminate 1s infinite ease-in-out;\n}\n\n.dropin-progress-spinner-with-provider{\n  position:absolute;\n  top:calc(50% - var(--size) / 2 - var(--stroke-width));\n  left:calc(50% - var(--size) / 2 - var(--stroke-width));\n}\n\n.dropin-progress-spinner-background{\n  --bgColor:var(--color-neutral-50);\n  background-color:var(--bgColor);\n  border-radius:inherit;\n  opacity:0.5;\n  position:absolute;\n  width:100%;\n  height:100%;\n  margin-top:calc(-1 * var(--spacing-small));\n  margin-left:calc(-1 * var(--spacing-small));\n}\n\n.dropin-progress-spinner--shape-size-small{\n  --size:var(--spacing-medium);\n}\n\n.dropin-progress-spinner--shape-size-medium{\n  --size:var(--spacing-big);\n}\n\n.dropin-progress-spinner--shape-size-big{\n  --size:var(--spacing-xxbig);\n}\n\n.dropin-progress-spinner--shape-size-large{\n  --size:var(--spacing-large);\n}\n\n.dropin-progress-spinner--shape-stroke-1{\n  --stroke-width:var(--shape-icon-stroke-1);\n}\n\n.dropin-progress-spinner--shape-stroke-2{\n  --stroke-width:var(--shape-icon-stroke-2);\n}\n\n.dropin-progress-spinner--shape-stroke-3{\n  --stroke-width:var(--shape-icon-stroke-3);\n}\n\n.dropin-progress-spinner--shape-stroke-4{\n  --stroke-width:var(--shape-icon-stroke-4);\n}\n\n@keyframes indeterminate{\n  0%{\n    transform:rotate(0deg);\n  }\n  100%{\n    transform:rotate(360deg);\n  }\n}\n",""]);const a=s},6072:(n,t,e)=>{e.d(t,{c:()=>a});var r=e(6008),i=e.n(r),o=e(2076),s=e.n(o)()(i());s.push([n.id,".dropin-skeleton{\n  --row-gap-spacing:var(--spacing-medium);\n  display:grid;\n  grid-template-columns:1fr 1fr;\n  gap:var(--row-gap-spacing);\n}\n\n.dropin-skeleton .dropin-skeleton--row__content{\n  background:var(--color-neutral-300) linear-gradient(\n      to right,\n      var(--color-neutral-300) 0%,\n      var(--color-neutral-100) 20%,\n      var(--color-neutral-300) 40%,\n      var(--color-neutral-300) 100%\n    ) no-repeat;\n  animation:skeletonShimmer infinite 1.2s linear;\n  border-radius:var(--shape-border-radius-2);\n}\n.dropin-skeleton__empty{\n  background:none;\n}\n\n.dropin-skeleton-row--multiline{\n  --multiline-gap-spacing:var(--spacing-medium);\n  display:grid;\n  grid-auto-rows:max-content;\n  gap:var(--multiline-gap-spacing);\n}\n\n.dropin-skeleton-row--full{\n  grid-column:1 / -1;\n}\n.dropin-skeleton-row svg{\n  fill:var(--color-neutral-400);\n  fill-opacity:0.5;\n  animation-duration:1s;\n  animation-fill-mode:forwards;\n  animation-iteration-count:infinite;\n  animation-name:placeholderShimmer;\n  animation-timing-function:linear;\n}\n\n.dropin-skeleton-row__row-xsmall{\n  height:32px;\n}\n\n.dropin-skeleton-row__row-small{\n  height:40px;\n}\n\n.dropin-skeleton-row__row-medium{\n  height:48px;\n}\n\n.dropin-skeleton-row__row-large{\n  height:56px;\n}\n\n.dropin-skeleton-row__row-xlarge{\n  height:72px;\n}\n\n.dropin-skeleton-row__heading-xsmall{\n  height:20px;\n}\n\n.dropin-skeleton-row__heading-small{\n  height:24px;\n}\n\n.dropin-skeleton-row__heading-medium{\n  height:32px;\n}\n\n.dropin-skeleton-row__heading-large{\n  height:40px;\n}\n\n.dropin-skeleton-row__heading-xlarge{\n  height:48px;\n}\n\n@keyframes skeletonShimmer{\n  0%{\n    background-position:-600px 0;\n  }\n\n  100%{\n    background-position:600px 0;\n  }\n}\n\n@keyframes placeholderShimmer{\n  0%{\n    fill-opacity:0.5;\n  }\n\n  50%{\n    fill-opacity:1;\n  }\n\n  100%{\n    fill-opacity:0.5;\n  }\n}\n@media only screen and (max-width: 600px){\n  .dropin-skeleton{\n    grid-template-columns:1fr;\n  }\n}\n",""]);const a=s}};