import*as t from"@dropins/tools/event-bus.js";import*as n from"@dropins/tools/fetch-graphql.js";export const id=3004;export const ids=[3004];export const modules={1520:(t,n,i)=>{i.d(n,{OC:()=>m});var r=i(304),e=i(8596);function o(){throw new Error("Cycle detected")}var s=Symbol.for("preact-signals");function a(){if(p>1)p--;else{for(var t,n=!1;void 0!==f;){var i=f;for(f=void 0,u++;void 0!==i;){var r=i.o;if(i.o=void 0,i.f&=-3,!(8&i.f)&&y(i))try{i.c()}catch(i){n||(t=i,n=!0)}i=r}}if(u=0,p--,n)throw t}}var l=void 0;var d,f=void 0,p=0,u=0,c=0;function h(t){if(void 0!==l){var n=t.n;if(void 0===n||n.t!==l)return n={i:0,S:t,p:l.s,n:void 0,t:l,e:void 0,x:void 0,r:n},void 0!==l.s&&(l.s.n=n),l.s=n,t.n=n,32&l.f&&t.S(n),n;if(-1===n.i)return n.i=0,void 0!==n.n&&(n.n.p=n.p,void 0!==n.p&&(n.p.n=n.n),n.p=l.s,n.n=void 0,l.s.n=n,l.s=n),n}}function v(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}function m(t){return new v(t)}function y(t){for(var n=t.s;void 0!==n;n=n.n)if(n.S.i!==n.i||!n.S.h()||n.S.i!==n.i)return!0;return!1}function _(t){for(var n=t.s;void 0!==n;n=n.n){var i=n.S.n;if(void 0!==i&&(n.r=i),n.S.n=n,n.i=-1,void 0===n.n){t.s=n;break}}}function g(t){for(var n=t.s,i=void 0;void 0!==n;){var r=n.p;-1===n.i?(n.S.U(n),void 0!==r&&(r.n=n.n),void 0!==n.n&&(n.n.p=r)):i=n,n.S.n=n.r,void 0!==n.r&&(n.r=void 0),n=r}t.s=i}function w(t){v.call(this,void 0),this.x=t,this.s=void 0,this.g=c-1,this.f=4}function b(t){var n=t.u;if(t.u=void 0,"function"==typeof n){p++;var i=l;l=void 0;try{n()}catch(n){throw t.f&=-2,t.f|=8,S(t),n}finally{l=i,a()}}}function S(t){for(var n=t.s;void 0!==n;n=n.n)n.S.U(n);t.x=void 0,t.s=void 0,b(t)}function k(t){if(l!==this)throw new Error("Out-of-order effect");g(this),l=t,this.f&=-2,8&this.f&&S(this),a()}function x(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}function j(t){var n=new x(t);try{n.c()}catch(t){throw n.d(),t}return n.d.bind(n)}function O(t,n){r.s1[t]=n.bind(null,r.s1[t]||function(){})}function I(t){d&&d(),d=t&&t.S()}function P(t){var n=this,i=t.data,o=function(t){return(0,e.bB)((function(){return m(t)}),[])}(i);o.value=i;var s=(0,e.bB)((function(){for(var t=n.__v;t=t.__;)if(t.__c){t.__c.__$f|=4;break}return n.__$u.c=function(){var t;(0,r.ur)(s.peek())||3!==(null==(t=n.base)?void 0:t.nodeType)?(n.__$f|=1,n.setState({})):n.base.data=s.peek()},function(t){return new w(t)}((function(){var t=o.value.value;return 0===t?0:!0===t?"":t||""}))}),[]);return s.value}function C(t,n,i,r){var e=n in t&&void 0===t.ownerSVGElement,o=m(i);return{o:function(t,n){o.value=t,r=n},d:j((function(){var i=o.value.value;r[n]!==i&&(r[n]=i,e?t[n]=i:i?t.setAttribute(n,i):t.removeAttribute(n))}))}}v.prototype.brand=s,v.prototype.h=function(){return!0},v.prototype.S=function(t){this.t!==t&&void 0===t.e&&(t.x=this.t,void 0!==this.t&&(this.t.e=t),this.t=t)},v.prototype.U=function(t){if(void 0!==this.t){var n=t.e,i=t.x;void 0!==n&&(n.x=i,t.e=void 0),void 0!==i&&(i.e=n,t.x=void 0),t===this.t&&(this.t=i)}},v.prototype.subscribe=function(t){var n=this;return j((function(){var i=n.value,r=32&this.f;this.f&=-33;try{t(i)}finally{this.f|=r}}))},v.prototype.valueOf=function(){return this.value},v.prototype.toString=function(){return this.value+""},v.prototype.toJSON=function(){return this.value},v.prototype.peek=function(){return this.v},Object.defineProperty(v.prototype,"value",{get:function(){var t=h(this);return void 0!==t&&(t.i=this.i),this.v},set:function(t){if(l instanceof w&&function(){throw new Error("Computed cannot have side-effects")}(),t!==this.v){u>100&&o(),this.v=t,this.i++,c++,p++;try{for(var n=this.t;void 0!==n;n=n.x)n.t.N()}finally{a()}}}}),(w.prototype=new v).h=function(){if(this.f&=-3,1&this.f)return!1;if(32==(36&this.f))return!0;if(this.f&=-5,this.g===c)return!0;if(this.g=c,this.f|=1,this.i>0&&!y(this))return this.f&=-2,!0;var t=l;try{_(this),l=this;var n=this.x();(16&this.f||this.v!==n||0===this.i)&&(this.v=n,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return l=t,g(this),this.f&=-2,!0},w.prototype.S=function(t){if(void 0===this.t){this.f|=36;for(var n=this.s;void 0!==n;n=n.n)n.S.S(n)}v.prototype.S.call(this,t)},w.prototype.U=function(t){if(void 0!==this.t&&(v.prototype.U.call(this,t),void 0===this.t)){this.f&=-33;for(var n=this.s;void 0!==n;n=n.n)n.S.U(n)}},w.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;void 0!==t;t=t.x)t.t.N()}},w.prototype.peek=function(){if(this.h()||o(),16&this.f)throw this.v;return this.v},Object.defineProperty(w.prototype,"value",{get:function(){1&this.f&&o();var t=h(this);if(this.h(),void 0!==t&&(t.i=this.i),16&this.f)throw this.v;return this.v}}),x.prototype.c=function(){var t=this.S();try{if(8&this.f)return;if(void 0===this.x)return;var n=this.x();"function"==typeof n&&(this.u=n)}finally{t()}},x.prototype.S=function(){1&this.f&&o(),this.f|=1,this.f&=-9,b(this),_(this),p++;var t=l;return l=this,k.bind(this,t)},x.prototype.N=function(){2&this.f||(this.f|=2,this.o=f,f=this)},x.prototype.d=function(){this.f|=8,1&this.f||S(this)},P.displayName="_st",Object.defineProperties(v.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:P},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}}),O("__b",(function(t,n){if("string"==typeof n.type){var i,r=n.props;for(var e in r)if("children"!==e){var o=r[e];o instanceof v&&(i||(n.__np=i={}),i[e]=o,r[e]=o.peek())}}t(n)})),O("__r",(function(t,n){I();var i,r=n.__c;r&&(r.__$f&=-2,void 0===(i=r.__$u)&&(r.__$u=i=function(t){var n;return j((function(){n=this})),n.c=function(){r.__$f|=1,r.setState({})},n}())),r,I(i),t(n)})),O("__e",(function(t,n,i,r){I(),void 0,t(n,i,r)})),O("diffed",(function(t,n){var i;if(I(),void 0,"string"==typeof n.type&&(i=n.__e)){var r=n.__np,e=n.props;if(r){var o=i.U;if(o)for(var s in o){var a=o[s];void 0===a||s in r||(a.d(),o[s]=void 0)}else i.U=o={};for(var l in r){var d=o[l],f=r[l];void 0===d?(d=C(i,l,f,e),o[l]=d):d.o(f,e)}}}t(n)})),O("unmount",(function(t,n){if("string"==typeof n.type){var i=n.__e;if(i){var r=i.U;if(r)for(var e in i.U=void 0,r){var o=r[e];o&&o.d()}}}else{var s=n.__c;if(s){var a=s.__$u;a&&(s.__$u=void 0,a.d())}}t(n)})),O("__h",(function(t,n,i,r){(r<3||9===r)&&(n.__$f|=2),t(n,i,r)})),r.Yl.prototype.shouldComponentUpdate=function(t,n){var i=this.__$u;if(!(i&&void 0!==i.s||4&this.__$f))return!0;if(3&this.__$f)return!0;for(var r in n)return!0;for(var e in t)if("__source"!==e&&t[e]!==this.props[e])return!0;for(var o in this.props)if(!(o in t))return!0;return!1}},3388:(t,n,i)=>{i.d(n,{W:()=>j,K:()=>x});var r=i(4944),e=i(5536),o=i.n(e),s=i(7008),a=i.n(s),l=i(1496),d=i.n(l),f=i(9356),p=i.n(f),u=i(9904),c=i.n(u),h=i(6072),v={attributes:{"data-dropin":"storefront-checkout","data-sdk":"0.21.0"},styleTagTransform:function(t,n){window._loadedStyles=window._loadedStyles??{};const i=t?.match(/^\.dropin-(\w+)/)?.[1],r=n.getAttribute("data-sdk"),e=i?`sdk/${i}`:n.getAttribute("data-dropin");n.setAttribute("data-dropin",e),n.removeAttribute("data-sdk");const o=window._loadedStyles[e];if(o){const e=function(t,n){const[i,r]=t.split("-"),[e,o]=n.split("-"),s=[...i.split("."),r],a=[...e.split("."),o],l=parseInt(s[0],10),d=parseInt(a[0],10);if(l!==d)return l>d?t:n;const f=parseInt(s[1],10),p=parseInt(a[1],10);if(f!==p)return f>p?t:n;const u=parseInt(s[2],10),c=parseInt(a[2],10);if(u!==c)return u>c?t:n;if(s[3]&&a[3]){const i=/(alpha|beta)(.*)/,r=s[3].match(i),e=a[3].match(i),o=r[1],l=e[1],d=parseInt(r[2],10),f=parseInt(e[2],10);if(o===l)return d>f?t:n;if("alpha"===o&&"beta"===l)return n;if("beta"===o&&"alpha"===l)return t}return s[3]?n:t}(r,o.sdk);if(!i||i&&e===o.sdk){const n=o.style.textContent;o.style.textContent=`${n}\n/* --- MERGED --- */\n${t}`}else i&&e!==o.sdk&&(o.style.textContent=`/* --- UPGRADED --- */\n${t}`);return void n.remove()}n.textContent=t,window._loadedStyles[e]={sdk:r,core:i,style:n};const s=document.querySelector("head"),{lastDropinStyleInjected:a,lastSDKStyleInjected:l}=window._loadedStyles;i?(l?s.insertBefore(n,l.nextSibling):s.insertBefore(n,s.firstChild),window._loadedStyles.lastSDKStyleInjected=n):(a?s.insertBefore(n,a.nextSibling):l?s.insertBefore(n,l.nextSibling):s.insertBefore(n,s.firstChild),window._loadedStyles.lastDropinStyleInjected=n)}};v.setAttributes=p(),v.insert=d().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=c();o()(h.c,v);h.c&&h.c.locals&&h.c.locals;var m=i(8412),y=["className","fullWidth","lines","size","variant","children","multilineGap"],_=["className","children","rowGap"];function g(t,n){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),i.push.apply(i,r)}return i}function w(t){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?g(Object(i),!0).forEach((function(n){b(t,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):g(Object(i)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(i,n))}))}return t}function b(t,n,i){return(n=function(t){var n=function(t,n){if("object"!=typeof t||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var r=i.call(t,n||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==typeof n?n:String(n)}(n))in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i,t}function S(t,n){if(null==t)return{};var i,r,e=function(t,n){if(null==t)return{};var i,r,e={},o=Object.keys(t);for(r=0;r<o.length;r++)i=o[r],n.indexOf(i)>=0||(e[i]=t[i]);return e}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)i=o[r],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(e[i]=t[i])}return e}var k=1,x=t=>{var{className:n,fullWidth:i=!1,lines:e=k,size:o="small",variant:s="row",children:a=null,multilineGap:l="medium"}=t,d=S(t,y),f=[["dropin-skeleton-row__".concat(s),s],["dropin-skeleton-row__".concat(s,"-").concat(o),s&&o]];if(!a&&"empty"===s)return(0,m.im)("div",{className:(0,r.i)(["dropin-skeleton-row dropin-skeleton-row__empty",n])});if(a){var p=a.trim();return(0,m.im)("div",w(w({},d),{},{class:(0,r.i)(["dropin-skeleton-row",["dropin-skeleton-row--full",i],n]),dangerouslySetInnerHTML:{__html:p}}))}return!1===e>k?(0,m.im)("div",w(w({},d),{},{class:(0,r.i)(["dropin-skeleton-row",["dropin-skeleton-row--full",i],"dropin-skeleton--row__content",...f,n])})):(0,m.im)("div",w(w({},d),{},{style:{"--multiline-gap-spacing":"var(--spacing-".concat(l,")")},class:(0,r.i)(["dropin-skeleton-row--multiline",["dropin-skeleton-row--full",i],n]),children:Array.from({length:e}).map(((t,n)=>(0,m.im)("div",{class:(0,r.i)(["dropin-skeleton-row",["dropin-skeleton-row--full",i],"dropin-skeleton--row__content",...f])},n)))}))},j=t=>{var{className:n,children:i,rowGap:e="medium"}=t,o=S(t,_);return(0,m.im)("div",w(w({style:{"--row-gap-spacing":"var(--spacing-".concat(e,")")}},o),{},{className:(0,r.i)(["dropin-skeleton",n]),role:"status","aria-label":"Loading...",children:i}))}},4468:(t,n,i)=>{i.d(n,{S:()=>p});var r=i(5124),e=i(2532),o=i(5520),s=i(8996),a=i(2796),l=i(5668),d=i(9488),f=i(8412),p=t=>{var{preselectedFields:n}=t,{data:i}=l.cartSignal.value,p=(null==i?void 0:i.id)||"",u=d.isBillToShippingSignal.value.checked,c=(0,a.kZ)((t=>(0,r.Eh)({signal:t.signal,cartId:p,address:(0,r.ek)(t.address)}).then((()=>{if(u)return(0,e.W)({cartId:p,input:{same_as_shipping:!0}})}))),[p,u]);return(0,f.im)(o.i,{"data-testid":"shipping-form",name:s.I,preselectedFields:n,addressType:"shipping_addresses",headingId:"Checkout.ShippingAddress.title",saveAddressHandler:c,className:"checkout-shipping-address-form"})}},8996:(t,n,i)=>{i.d(n,{I:()=>r});var r="shipping_address"},2464:(t,n,i)=>{i.d(n,{Ib:()=>e.I,SW:()=>r.S,cp:()=>r.S});var r=i(4468),e=i(8996)},6072:(t,n,i)=>{i.d(n,{c:()=>a});var r=i(6008),e=i.n(r),o=i(2076),s=i.n(o)()(e());s.push([t.id,".dropin-skeleton{\n  --row-gap-spacing:var(--spacing-medium);\n  display:grid;\n  grid-template-columns:1fr 1fr;\n  gap:var(--row-gap-spacing);\n}\n\n.dropin-skeleton .dropin-skeleton--row__content{\n  background:var(--color-neutral-300) linear-gradient(\n      to right,\n      var(--color-neutral-300) 0%,\n      var(--color-neutral-100) 20%,\n      var(--color-neutral-300) 40%,\n      var(--color-neutral-300) 100%\n    ) no-repeat;\n  animation:skeletonShimmer infinite 1.2s linear;\n  border-radius:var(--shape-border-radius-2);\n}\n.dropin-skeleton__empty{\n  background:none;\n}\n\n.dropin-skeleton-row--multiline{\n  --multiline-gap-spacing:var(--spacing-medium);\n  display:grid;\n  grid-auto-rows:max-content;\n  gap:var(--multiline-gap-spacing);\n}\n\n.dropin-skeleton-row--full{\n  grid-column:1 / -1;\n}\n.dropin-skeleton-row svg{\n  fill:var(--color-neutral-400);\n  fill-opacity:0.5;\n  animation-duration:1s;\n  animation-fill-mode:forwards;\n  animation-iteration-count:infinite;\n  animation-name:placeholderShimmer;\n  animation-timing-function:linear;\n}\n\n.dropin-skeleton-row__row-xsmall{\n  height:32px;\n}\n\n.dropin-skeleton-row__row-small{\n  height:40px;\n}\n\n.dropin-skeleton-row__row-medium{\n  height:48px;\n}\n\n.dropin-skeleton-row__row-large{\n  height:56px;\n}\n\n.dropin-skeleton-row__row-xlarge{\n  height:72px;\n}\n\n.dropin-skeleton-row__heading-xsmall{\n  height:20px;\n}\n\n.dropin-skeleton-row__heading-small{\n  height:24px;\n}\n\n.dropin-skeleton-row__heading-medium{\n  height:32px;\n}\n\n.dropin-skeleton-row__heading-large{\n  height:40px;\n}\n\n.dropin-skeleton-row__heading-xlarge{\n  height:48px;\n}\n\n@keyframes skeletonShimmer{\n  0%{\n    background-position:-600px 0;\n  }\n\n  100%{\n    background-position:600px 0;\n  }\n}\n\n@keyframes placeholderShimmer{\n  0%{\n    fill-opacity:0.5;\n  }\n\n  50%{\n    fill-opacity:1;\n  }\n\n  100%{\n    fill-opacity:0.5;\n  }\n}\n@media only screen and (max-width: 600px){\n  .dropin-skeleton{\n    grid-template-columns:1fr;\n  }\n}\n",""]);const a=s},8122:(n,i,r)=>{n.exports=(t=>{var n={};return r.d(n,t),n})({events:()=>t.events})},8616:(t,i,r)=>{t.exports=(t=>{var n={};return r.d(n,t),n})({FetchGraphQL:()=>n.FetchGraphQL})}};import i from"../runtime.js";import*as r from"../76.js";i.C(r);import*as e from"../184.js";i.C(e);import*as o from"../196.js";i.C(o);import*as s from"../9792.js";i.C(s);import*as a from"../5068.js";i.C(a);import*as l from"../3860.js";i.C(l);import*as d from"../9064.js";i.C(d);import*as f from"./ShippingForm.js";i.C(f);var p,u=(p=2464,i(i.s=p)),c=u.Ib,h=u.SW,v=u.cp;export{c as SHIPPING_FORM_NAME,h as ShippingForm,v as default};