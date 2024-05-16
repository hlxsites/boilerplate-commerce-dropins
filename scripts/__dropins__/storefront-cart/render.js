(function(i,t){try{if(typeof document<"u"){const a=document.createElement("style"),e=t.styleId;for(const r in t.attributes)a.setAttribute(r,t.attributes[r]);a.setAttribute("data-dropin",e),a.appendChild(document.createTextNode(i)),document.head.appendChild(a)}}catch(a){console.error("dropin-styles (injectCodeFunction)",a)}})(".cart-empty-cart{container-type:inline-size;container-name:cart}.cart-empty-cart__wrapper{display:grid;grid-auto-rows:min-content;justify-content:center;text-align:center}.cart-empty-cart__icon{margin-bottom:var(--spacing-small);color:var(--color-neutral-500)}.cart-empty-cart__icon svg{color:var(--color-)}.cart-empty-cart__heading{font:var(--type-headline-1-font);letter-spacing:var(--type-headline-1-letter-spacing)}.cart-empty-cart__actions{display:grid;grid-auto-rows:min-content;gap:var(--spacing-small);margin-top:var(--spacing-medium);justify-content:center}@container cart (width < 737px){.cart-empty-cart__wrapper{border:unset}}.cart-cart{container-type:inline-size;container-name:cart}.cart-cart__wrapper{display:grid;grid-template-rows:auto 1fr;grid-gap:var(--spacing-medium)}.cart-cart__heading{display:grid;row-gap:var(--spacing-xsmall);padding:var(--spacing-medium);padding-bottom:0;font:var(--type-headline-1-font);letter-spacing:var(--type-headline-1-letter-spacing)}.cart-cart__heading-divider{width:100%;margin:var(--spacing-xxsmall) 0 0 0}.cart-cart__content{display:grid;grid-template-columns:1fr;padding:0 var(--spacing-medium)}.cart-cart__empty-cart{justify-self:center;align-self:center;width:100%;max-width:800px}.cart-cart__price-summary{padding:var(--spacing-small) var(--spacing-medium);background-color:var(--color-neutral-200)}.dropin-price-summary__shipping--zip,.dropin-price-summary__shipping--state{background-color:var(--color-neutral-50)}@container cart (width >= 1024px){.cart-cart__wrapper{grid-template-columns:repeat(var(--grid-3-columns),1fr);grid-column-gap:var(--grid-3-gutters);margin:0 var(--grid-3-margins)}.cart-cart__heading{padding:var(--spacing-medium) 0 0 0}.cart-cart__content{padding:0}.cart-cart__heading,.cart-cart__content{grid-column:1 / span 8}.cart-cart__price-summary{grid-row:1 / span 3;grid-column:9 / span 4;padding:var(--spacing-medium);height:min-content}.cart-cart__heading--full-width,.cart-cart__content--empty,.cart-cart__content--full-width{grid-column:1 / span 12}}.cart-mini-cart{display:flex;flex-direction:column;height:100%;padding:var(--spacing-small) var(--spacing-small) var(--spacing-medium);box-sizing:border-box}.cart-mini-cart__empty-cart{width:100%;max-width:800px;height:100%;display:flex;flex-direction:column;justify-content:center;align-self:center}.cart-mini-cart__heading{display:grid;row-gap:var(--spacing-xsmall);font:var(--type-headline-2-default-font);letter-spacing:var(--type-headline-2-default-letter-spacing)}.cart-mini-cart__heading-divider{width:100%;margin:var(--spacing-xxsmall) 0 0 0}.cart-mini-cart__products{flex:1;overflow-y:auto;max-height:100%;padding-top:var(--spacing-medium);padding-bottom:var(--spacing-medium)}.cart-mini-cart__products .dropin-cart-item__configurations li{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.cart-mini-cart__footer{display:grid;grid-auto-flow:row;gap:var(--spacing-small);padding-top:var(--spacing-small)}.cart-mini-cart__footer__estimated-total{font:var(--type-body-1-emphasized-font);letter-spacing:var(--type-body-1-emphasized-letter-spacing);display:grid;grid-template:max-content / 1fr auto;gap:var(--spacing-xsmall)}.cart-mini-cart__footer__ctas{display:grid;grid-auto-flow:row;gap:var(--spacing-xsmall)}",{styleId:"Cart"});
var we=Object.defineProperty;var Oe=(e,t,r)=>t in e?we(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var ne=(e,t,r)=>(Oe(e,typeof t!="symbol"?t+"":t,r),r);import{useState as je,useEffect as xe}from"@dropins/tools/preact-hooks.js";import{UIProvider as Ae}from"@dropins/tools/components/index.js";import{events as Ce}from"@dropins/tools/event-bus.js";import{c as Me}from"./chunks/getStoreConfig__D8pXAQ9VHy.js";import{jsx as L}from"@dropins/tools/preact-jsx-runtime.js";import{options as g,h as _e,Fragment as q,render as ie}from"@dropins/tools/preact.js";import{V as oe}from"./chunks/vcomponent__7E94D35BBn.js";import"@dropins/tools/fetch-graphql.js";function Se(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ee=function(t){return De(t)&&!Pe(t)};function De(e){return!!e&&typeof e=="object"}function Pe(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||Le(e)}var Fe=typeof Symbol=="function"&&Symbol.for,Te=Fe?Symbol.for("react.element"):60103;function Le(e){return e.$$typeof===Te}function $e(e){return Array.isArray(e)?[]:{}}function V(e,t){return t.clone!==!1&&t.isMergeableObject(e)?$($e(e),e,t):e}function Ne(e,t,r){return e.concat(t).map(function(i){return V(i,r)})}function Ue(e,t){if(!t.customMerge)return $;var r=t.customMerge(e);return typeof r=="function"?r:$}function ke(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function ae(e){return Object.keys(e).concat(ke(e))}function ge(e,t){try{return t in e}catch{return!1}}function Ve(e,t){return ge(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function ze(e,t,r){var i={};return r.isMergeableObject(e)&&ae(e).forEach(function(o){i[o]=V(e[o],r)}),ae(t).forEach(function(o){Ve(e,o)||(ge(e,o)&&r.isMergeableObject(t[o])?i[o]=Ue(o,r)(e[o],t[o],r):i[o]=V(t[o],r))}),i}function $(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||Ne,r.isMergeableObject=r.isMergeableObject||Ee,r.cloneUnlessOtherwiseSpecified=V;var i=Array.isArray(t),o=Array.isArray(e),d=i===o;return d?i?r.arrayMerge(e,t,r):ze(e,t,r):V(t,r)}$.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(i,o){return $(i,o,r)},{})};var Ze=$,qe=Ze;const We=Se(qe);var Be=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i,he=/^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/,W=/[\s\n\\/='"\0<>]/,ve=/^xlink:?./,Ye=/["&<]/;function k(e){if(Ye.test(e+="")===!1)return e;for(var t=0,r=0,i="",o="";r<e.length;r++){switch(e.charCodeAt(r)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 60:o="&lt;";break;default:continue}r!==t&&(i+=e.slice(t,r)),i+=o,t=r+1}return r!==t&&(i+=e.slice(t,r)),i}var le=function(e,t){return String(e).replace(/(\n+)/g,"$1"+(t||"	"))},se=function(e,t,r){return String(e).length>40||String(e).indexOf(`
`)!==-1||String(e).indexOf("<")!==-1},fe={},Ge=/([A-Z])/g;function ye(e){var t="";for(var r in e){var i=e[r];i!=null&&i!==""&&(t&&(t+=" "),t+=r[0]=="-"?r:fe[r]||(fe[r]=r.replace(Ge,"-$1").toLowerCase()),t=typeof i=="number"&&Be.test(r)===!1?t+": "+i+"px;":t+": "+i+";")}return t||void 0}function ee(e,t){return Array.isArray(t)?t.reduce(ee,e):t!=null&&t!==!1&&e.push(t),e}function ce(){this.__d=!0}function me(e,t){return{__v:e,context:t,props:e.props,setState:ce,forceUpdate:ce,__d:!0,__h:[]}}function B(e,t){var r=e.contextType,i=r&&t[r.__c];return r!=null?i?i.props.value:r.__:t}var I=[];function N(e,t,r,i,o,d){if(e==null||typeof e=="boolean")return"";if(typeof e!="object")return typeof e=="function"?"":k(e);var _=r.pretty,u=_&&typeof _=="string"?_:"	";if(Array.isArray(e)){for(var b="",m=0;m<e.length;m++)_&&m>0&&(b+=`
`),b+=N(e[m],t,r,i,o,d);return b}if(e.constructor!==void 0)return"";var M,c=e.type,p=e.props,D=!1;if(typeof c=="function"){if(D=!0,!r.shallow||!i&&r.renderRootComponent!==!1){if(c===q){var y=[];return ee(y,e.props.children),N(y,t,r,r.shallowHighOrder!==!1,o,d)}var h,n=e.__c=me(e,t);g.__b&&g.__b(e);var P=g.__r;if(c.prototype&&typeof c.prototype.render=="function"){var A=B(c,t);(n=e.__c=new c(p,A)).__v=e,n._dirty=n.__d=!0,n.props=p,n.state==null&&(n.state={}),n._nextState==null&&n.__s==null&&(n._nextState=n.__s=n.state),n.context=A,c.getDerivedStateFromProps?n.state=Object.assign({},n.state,c.getDerivedStateFromProps(n.props,n.state)):n.componentWillMount&&(n.componentWillMount(),n.state=n._nextState!==n.state?n._nextState:n.__s!==n.state?n.__s:n.state),P&&P(e),h=n.render(n.props,n.state,n.context)}else for(var S=B(c,t),F=0;n.__d&&F++<25;)n.__d=!1,P&&P(e),h=c.call(e.__c,p,S);return n.getChildContext&&(t=Object.assign({},t,n.getChildContext())),g.diffed&&g.diffed(e),N(h,t,r,r.shallowHighOrder!==!1,o,d)}c=(M=c).displayName||M!==Function&&M.name||function(J){var Q=(Function.prototype.toString.call(J).match(/^\s*function\s+([^( ]+)/)||"")[1];if(!Q){for(var Z=-1,R=I.length;R--;)if(I[R]===J){Z=R;break}Z<0&&(Z=I.push(J)-1),Q="UnnamedComponent"+Z}return Q}(M)}var O,w,f="<"+c;if(p){var v=Object.keys(p);r&&r.sortAttributes===!0&&v.sort();for(var C=0;C<v.length;C++){var a=v[C],s=p[a];if(a!=="children"){if(!W.test(a)&&(r&&r.allAttributes||a!=="key"&&a!=="ref"&&a!=="__self"&&a!=="__source")){if(a==="defaultValue")a="value";else if(a==="defaultChecked")a="checked";else if(a==="defaultSelected")a="selected";else if(a==="className"){if(p.class!==void 0)continue;a="class"}else o&&ve.test(a)&&(a=a.toLowerCase().replace(/^xlink:?/,"xlink:"));if(a==="htmlFor"){if(p.for)continue;a="for"}a==="style"&&s&&typeof s=="object"&&(s=ye(s)),a[0]==="a"&&a[1]==="r"&&typeof s=="boolean"&&(s=String(s));var l=r.attributeHook&&r.attributeHook(a,s,t,r,D);if(l||l==="")f+=l;else if(a==="dangerouslySetInnerHTML")w=s&&s.__html;else if(c==="textarea"&&a==="value")O=s;else if((s||s===0||s==="")&&typeof s!="function"){if(!(s!==!0&&s!==""||(s=a,r&&r.xml))){f=f+" "+a;continue}if(a==="value"){if(c==="select"){d=s;continue}c==="option"&&d==s&&p.selected===void 0&&(f+=" selected")}f=f+" "+a+'="'+k(s)+'"'}}}else O=s}}if(_){var j=f.replace(/\n\s*/," ");j===f||~j.indexOf(`
`)?_&&~f.indexOf(`
`)&&(f+=`
`):f=j}if(f+=">",W.test(c))throw new Error(c+" is not a valid HTML tag name in "+f);var T,be=he.test(c)||r.voidElements&&r.voidElements.test(c),x=[];if(w)_&&se(w)&&(w=`
`+u+le(w,u)),f+=w;else if(O!=null&&ee(T=[],O).length){for(var Y=_&&~f.indexOf(`
`),te=!1,G=0;G<T.length;G++){var K=T[G];if(K!=null&&K!==!1){var E=N(K,t,r,!0,c==="svg"||c!=="foreignObject"&&o,d);if(_&&!Y&&se(E)&&(Y=!0),E)if(_){var re=E.length>0&&E[0]!="<";te&&re?x[x.length-1]+=E:x.push(E),te=re}else x.push(E)}}if(_&&Y)for(var X=x.length;X--;)x[X]=`
`+u+le(x[X],u)}if(x.length||w)f+=x.join("");else if(r&&r.xml)return f.substring(0,f.length-1)+" />";return!be||T||w?(_&&~f.indexOf(`
`)&&(f+=`
`),f=f+"</"+c+">"):f=f.replace(/>$/," />"),f}var Ke={shallow:!0};z.render=z;var Xe=function(e,t){return z(e,t,Ke)},ue=[];function z(e,t,r){t=t||{};var i=g.__s;g.__s=!0;var o,d=_e(q,null);return d.__k=[e],o=r&&(r.pretty||r.voidElements||r.sortAttributes||r.shallow||r.allAttributes||r.xml||r.attributeHook)?N(e,t,r):U(e,t,!1,void 0,d),g.__c&&g.__c(e,ue),g.__s=i,ue.length=0,o}function H(e){return e==null||typeof e=="boolean"?null:typeof e=="string"||typeof e=="number"||typeof e=="bigint"?_e(null,null,e):e}function Je(e,t){return e==="className"?"class":e==="htmlFor"?"for":e==="defaultValue"?"value":e==="defaultChecked"?"checked":e==="defaultSelected"?"selected":t&&ve.test(e)?e.toLowerCase().replace(/^xlink:?/,"xlink:"):e}function Qe(e,t){return e==="style"&&t!=null&&typeof t=="object"?ye(t):e[0]==="a"&&e[1]==="r"&&typeof t=="boolean"?String(t):t}var pe=Array.isArray,de=Object.assign;function U(e,t,r,i,o){if(e==null||e===!0||e===!1||e==="")return"";if(typeof e!="object")return typeof e=="function"?"":k(e);if(pe(e)){var d="";o.__k=e;for(var _=0;_<e.length;_++)d+=U(e[_],t,r,i,o),e[_]=H(e[_]);return d}if(e.constructor!==void 0)return"";e.__=o,g.__b&&g.__b(e);var u=e.type,b=e.props;if(typeof u=="function"){var m;if(u===q)m=b.children;else{m=u.prototype&&typeof u.prototype.render=="function"?function(v,C){var a=v.type,s=B(a,C),l=new a(v.props,s);v.__c=l,l.__v=v,l.__d=!0,l.props=v.props,l.state==null&&(l.state={}),l.__s==null&&(l.__s=l.state),l.context=s,a.getDerivedStateFromProps?l.state=de({},l.state,a.getDerivedStateFromProps(l.props,l.state)):l.componentWillMount&&(l.componentWillMount(),l.state=l.__s!==l.state?l.__s:l.state);var j=g.__r;return j&&j(v),l.render(l.props,l.state,l.context)}(e,t):function(v,C){var a,s=me(v,C),l=B(v.type,C);v.__c=s;for(var j=g.__r,T=0;s.__d&&T++<25;)s.__d=!1,j&&j(v),a=v.type.call(s,v.props,l);return a}(e,t);var M=e.__c;M.getChildContext&&(t=de({},t,M.getChildContext()))}var c=U(m=m!=null&&m.type===q&&m.key==null?m.props.children:m,t,r,i,e);return g.diffed&&g.diffed(e),e.__=void 0,g.unmount&&g.unmount(e),c}var p,D,y="<";if(y+=u,b)for(var h in p=b.children,b){var n=b[h];if(!(h==="key"||h==="ref"||h==="__self"||h==="__source"||h==="children"||h==="className"&&"class"in b||h==="htmlFor"&&"for"in b||W.test(h))){if(n=Qe(h=Je(h,r),n),h==="dangerouslySetInnerHTML")D=n&&n.__html;else if(u==="textarea"&&h==="value")p=n;else if((n||n===0||n==="")&&typeof n!="function"){if(n===!0||n===""){n=h,y=y+" "+h;continue}if(h==="value"){if(u==="select"){i=n;continue}u!=="option"||i!=n||"selected"in b||(y+=" selected")}y=y+" "+h+'="'+k(n)+'"'}}}var P=y;if(y+=">",W.test(u))throw new Error(u+" is not a valid HTML tag name in "+y);var A="",S=!1;if(D)A+=D,S=!0;else if(typeof p=="string")A+=k(p),S=!0;else if(pe(p)){e.__k=p;for(var F=0;F<p.length;F++){var O=p[F];if(p[F]=H(O),O!=null&&O!==!1){var w=U(O,t,u==="svg"||u!=="foreignObject"&&r,i,e);w&&(A+=w,S=!0)}}}else if(p!=null&&p!==!1&&p!==!0){e.__k=[H(p)];var f=U(p,t,u==="svg"||u!=="foreignObject"&&r,i,e);f&&(A+=f,S=!0)}if(g.diffed&&g.diffed(e),e.__=void 0,g.unmount&&g.unmount(e),S)y+=A;else if(he.test(u))return P+" />";return y+"</"+u+">"}z.shallowRender=Xe;class Re{constructor(t){ne(this,"_provider");this._provider=t}render(t,r){return async i=>{var d;if(!t)throw new Error("Component is not defined");if(!i)throw new Error("Root element is not defined");const o=await((d=t.getInitialData)==null?void 0:d.call(t,r))??{};ie(L(oe,{node:this._provider,...this._provider.props,children:L(t,{...r,initialData:o})}),i)}}unmount(t){if(!t)throw new Error("Root element is not defined");ie(null,t)}async toString(t,r,i){var d;if(!t)throw new Error("Component is not defined");const o=await((d=t.getInitialData)==null?void 0:d.call(t,r))??{};return z(L(oe,{node:this._provider,...this._provider.props,children:L(t,{...r,initialData:o})}),{},{...i})}}const Ie={Cart:{heading:"Shopping Cart"},MiniCart:{heading:"Shopping Cart ({count})",estimatedTotal:"Estimated Total",cartLink:"View Cart",checkoutLink:"Checkout"},EmptyCart:{heading:"Your cart is empty",cta:"Continue Shopping"},PriceSummary:{taxToBeDetermined:"TBD",checkout:"Checkout",estimatedShippingForm:{country:{placeholder:"Country"},state:{placeholder:"State"},zip:{placeholder:"Zip Code"},apply:{label:"Apply"}},freeShipping:"Free"},CartItem:{discountedPrice:"Discounted Price",download:"file",message:"Note",recipient:"To",regularPrice:"Regular Price",sender:"From",file:"{count} file",files:"{count} files"}},He={Cart:Ie},et={default:He},tt=({children:e})=>{var d;const[t,r]=je(),i=(d=Me.getConfig())==null?void 0:d.langDefinitions;xe(()=>{const _=Ce.on("locale",u=>{u!==t&&r(u)},{eager:!0});return()=>{_==null||_.off()}},[t]);const o=We(et,i??{});return L(Ae,{lang:t,langDefinitions:o,children:e})},ut=new Re(L(tt,{}));export{ut as render};
//# sourceMappingURL=render.js.map
