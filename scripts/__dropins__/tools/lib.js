var be=Object.defineProperty;var xe=(e,t,n)=>t in e?be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var oe=(e,t,n)=>xe(e,typeof t!="symbol"?t+"":t,n);import{V as ie}from"./chunks/vcomponent.js";import{c as Je,b as Ke,d as Ue,e as Ge,a as Xe,g as Ye}from"./chunks/vcomponent.js";import{jsx as L}from"./preact-jsx-runtime.js";import{l as y,_ as he,k as B,B as se,A as R,h as le,T as Se,x as Oe,q as $,y as ee}from"./chunks/icons/Add.js";import{C as Re,I as Ie,i as He}from"./chunks/initializer.js";import{IntlContext as Ce}from"./i18n.js";import{g as tt,s as nt}from"./chunks/image-params-keymap.js";var Ne=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i,ge=/^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/,W=/[\s\n\\/='"\0<>]/,ve=/^xlink:?./,je=/["&<]/;function q(e){if(je.test(e+="")===!1)return e;for(var t=0,n=0,s="",d="";n<e.length;n++){switch(e.charCodeAt(n)){case 34:d="&quot;";break;case 38:d="&amp;";break;case 60:d="&lt;";break;default:continue}n!==t&&(s+=e.slice(t,n)),s+=d,t=n+1}return n!==t&&(s+=e.slice(t,n)),s}var ae=function(e,t){return String(e).replace(/(\n+)/g,"$1"+(t||"	"))},fe=function(e,t,n){return String(e).length>40||String(e).indexOf(`
`)!==-1||String(e).indexOf("<")!==-1},ue={},$e=/([A-Z])/g;function ye(e){var t="";for(var n in e){var s=e[n];s!=null&&s!==""&&(t&&(t+=" "),t+=n[0]=="-"?n:ue[n]||(ue[n]=n.replace($e,"-$1").toLowerCase()),t=typeof s=="number"&&Ne.test(n)===!1?t+": "+s+"px;":t+": "+s+";")}return t||void 0}function te(e,t){return Array.isArray(t)?t.reduce(te,e):t!=null&&t!==!1&&e.push(t),e}function ce(){this.__d=!0}function me(e,t){return{__v:e,context:t,props:e.props,setState:ce,forceUpdate:ce,__d:!0,__h:[]}}function Z(e,t){var n=e.contextType,s=n&&t[n.__c];return n!=null?s?s.props.value:n.__:t}var I=[];function E(e,t,n,s,d,h){if(e==null||typeof e=="boolean")return"";if(typeof e!="object")return typeof e=="function"?"":q(e);var g=n.pretty,_=g&&typeof g=="string"?g:"	";if(Array.isArray(e)){for(var w="",b=0;b<e.length;b++)g&&b>0&&(w+=`
`),w+=E(e[b],t,n,s,d,h);return w}if(e.constructor!==void 0)return"";var O,p=e.type,a=e.props,x=!1;if(typeof p=="function"){if(x=!0,!n.shallow||!s&&n.renderRootComponent!==!1){if(p===B){var i=[];return te(i,e.props.children),E(i,t,n,n.shallowHighOrder!==!1,d,h)}var o,r=e.__c=me(e,t);y.__b&&y.__b(e);var v=y.__r;if(p.prototype&&typeof p.prototype.render=="function"){var A=Z(p,t);(r=e.__c=new p(a,A)).__v=e,r._dirty=r.__d=!0,r.props=a,r.state==null&&(r.state={}),r._nextState==null&&r.__s==null&&(r._nextState=r.__s=r.state),r.context=A,p.getDerivedStateFromProps?r.state=Object.assign({},r.state,p.getDerivedStateFromProps(r.props,r.state)):r.componentWillMount&&(r.componentWillMount(),r.state=r._nextState!==r.state?r._nextState:r.__s!==r.state?r.__s:r.state),v&&v(e),o=r.render(r.props,r.state,r.context)}else for(var D=Z(p,t),k=0;r.__d&&k++<25;)r.__d=!1,v&&v(e),o=p.call(e.__c,a,D);return r.getChildContext&&(t=Object.assign({},t,r.getChildContext())),y.diffed&&y.diffed(e),E(o,t,n,n.shallowHighOrder!==!1,d,h)}p=(O=p).displayName||O!==Function&&O.name||function(X){var Y=(Function.prototype.toString.call(X).match(/^\s*function\s+([^( ]+)/)||"")[1];if(!Y){for(var z=-1,Q=I.length;Q--;)if(I[Q]===X){z=Q;break}z<0&&(z=I.push(X)-1),Y="UnnamedComponent"+z}return Y}(O)}var C,S,c="<"+p;if(a){var m=Object.keys(a);n&&n.sortAttributes===!0&&m.sort();for(var P=0;P<m.length;P++){var l=m[P],u=a[l];if(l!=="children"){if(!W.test(l)&&(n&&n.allAttributes||l!=="key"&&l!=="ref"&&l!=="__self"&&l!=="__source")){if(l==="defaultValue")l="value";else if(l==="defaultChecked")l="checked";else if(l==="defaultSelected")l="selected";else if(l==="className"){if(a.class!==void 0)continue;l="class"}else d&&ve.test(l)&&(l=l.toLowerCase().replace(/^xlink:?/,"xlink:"));if(l==="htmlFor"){if(a.for)continue;l="for"}l==="style"&&u&&typeof u=="object"&&(u=ye(u)),l[0]==="a"&&l[1]==="r"&&typeof u=="boolean"&&(u=String(u));var f=n.attributeHook&&n.attributeHook(l,u,t,n,x);if(f||f==="")c+=f;else if(l==="dangerouslySetInnerHTML")S=u&&u.__html;else if(p==="textarea"&&l==="value")C=u;else if((u||u===0||u==="")&&typeof u!="function"){if(!(u!==!0&&u!==""||(u=l,n&&n.xml))){c=c+" "+l;continue}if(l==="value"){if(p==="select"){h=u;continue}p==="option"&&h==u&&a.selected===void 0&&(c+=" selected")}c=c+" "+l+'="'+q(u)+'"'}}}else C=u}}if(g){var N=c.replace(/\n\s*/," ");N===c||~N.indexOf(`
`)?g&&~c.indexOf(`
`)&&(c+=`
`):c=N}if(c+=">",W.test(p))throw new Error(p+" is not a valid HTML tag name in "+c);var F,we=ge.test(p)||n.voidElements&&n.voidElements.test(p),j=[];if(S)g&&fe(S)&&(S=`
`+_+ae(S,_)),c+=S;else if(C!=null&&te(F=[],C).length){for(var J=g&&~c.indexOf(`
`),ne=!1,K=0;K<F.length;K++){var U=F[K];if(U!=null&&U!==!1){var M=E(U,t,n,!0,p==="svg"||p!=="foreignObject"&&d,h);if(g&&!J&&fe(M)&&(J=!0),M)if(g){var re=M.length>0&&M[0]!="<";ne&&re?j[j.length-1]+=M:j.push(M),ne=re}else j.push(M)}}if(g&&J)for(var G=j.length;G--;)j[G]=`
`+_+ae(j[G],_)}if(j.length||S)c+=j.join("");else if(n&&n.xml)return c.substring(0,c.length-1)+" />";return!we||F||S?(g&&~c.indexOf(`
`)&&(c+=`
`),c=c+"</"+p+">"):c=c.replace(/>$/," />"),c}var Ae={shallow:!0};V.render=V;var Pe=function(e,t){return V(e,t,Ae)},de=[];function V(e,t,n){t=t||{};var s=y.__s;y.__s=!0;var d,h=he(B,null);return h.__k=[e],d=n&&(n.pretty||n.voidElements||n.sortAttributes||n.shallow||n.allAttributes||n.xml||n.attributeHook)?E(e,t,n):T(e,t,!1,void 0,h),y.__c&&y.__c(e,de),y.__s=s,de.length=0,d}function H(e){return e==null||typeof e=="boolean"?null:typeof e=="string"||typeof e=="number"||typeof e=="bigint"?he(null,null,e):e}function De(e,t){return e==="className"?"class":e==="htmlFor"?"for":e==="defaultValue"?"value":e==="defaultChecked"?"checked":e==="defaultSelected"?"selected":t&&ve.test(e)?e.toLowerCase().replace(/^xlink:?/,"xlink:"):e}function Me(e,t){return e==="style"&&t!=null&&typeof t=="object"?ye(t):e[0]==="a"&&e[1]==="r"&&typeof t=="boolean"?String(t):t}var pe=Array.isArray,_e=Object.assign;function T(e,t,n,s,d){if(e==null||e===!0||e===!1||e==="")return"";if(typeof e!="object")return typeof e=="function"?"":q(e);if(pe(e)){var h="";d.__k=e;for(var g=0;g<e.length;g++)h+=T(e[g],t,n,s,d),e[g]=H(e[g]);return h}if(e.constructor!==void 0)return"";e.__=d,y.__b&&y.__b(e);var _=e.type,w=e.props;if(typeof _=="function"){var b;if(_===B)b=w.children;else{b=_.prototype&&typeof _.prototype.render=="function"?function(m,P){var l=m.type,u=Z(l,P),f=new l(m.props,u);m.__c=f,f.__v=m,f.__d=!0,f.props=m.props,f.state==null&&(f.state={}),f.__s==null&&(f.__s=f.state),f.context=u,l.getDerivedStateFromProps?f.state=_e({},f.state,l.getDerivedStateFromProps(f.props,f.state)):f.componentWillMount&&(f.componentWillMount(),f.state=f.__s!==f.state?f.__s:f.state);var N=y.__r;return N&&N(m),f.render(f.props,f.state,f.context)}(e,t):function(m,P){var l,u=me(m,P),f=Z(m.type,P);m.__c=u;for(var N=y.__r,F=0;u.__d&&F++<25;)u.__d=!1,N&&N(m),l=m.type.call(u,m.props,f);return l}(e,t);var O=e.__c;O.getChildContext&&(t=_e({},t,O.getChildContext()))}var p=T(b=b!=null&&b.type===B&&b.key==null?b.props.children:b,t,n,s,e);return y.diffed&&y.diffed(e),e.__=void 0,y.unmount&&y.unmount(e),p}var a,x,i="<";if(i+=_,w)for(var o in a=w.children,w){var r=w[o];if(!(o==="key"||o==="ref"||o==="__self"||o==="__source"||o==="children"||o==="className"&&"class"in w||o==="htmlFor"&&"for"in w||W.test(o))){if(r=Me(o=De(o,n),r),o==="dangerouslySetInnerHTML")x=r&&r.__html;else if(_==="textarea"&&o==="value")a=r;else if((r||r===0||r==="")&&typeof r!="function"){if(r===!0||r===""){r=o,i=i+" "+o;continue}if(o==="value"){if(_==="select"){s=r;continue}_!=="option"||s!=r||"selected"in w||(i+=" selected")}i=i+" "+o+'="'+q(r)+'"'}}}var v=i;if(i+=">",W.test(_))throw new Error(_+" is not a valid HTML tag name in "+i);var A="",D=!1;if(x)A+=x,D=!0;else if(typeof a=="string")A+=q(a),D=!0;else if(pe(a)){e.__k=a;for(var k=0;k<a.length;k++){var C=a[k];if(a[k]=H(C),C!=null&&C!==!1){var S=T(C,t,_==="svg"||_!=="foreignObject"&&n,s,e);S&&(A+=S,D=!0)}}}else if(a!=null&&a!==!1&&a!==!0){e.__k=[H(a)];var c=T(a,t,_==="svg"||_!=="foreignObject"&&n,s,e);c&&(A+=c,D=!0)}if(y.diffed&&y.diffed(e),e.__=void 0,y.unmount&&y.unmount(e),D)i+=A;else if(ge.test(_))return v+" />";return i+"</"+_+">"}V.shallowRender=Pe;class Ve{constructor(t){oe(this,"_provider");this._provider=t}render(t,n){return async s=>{var h;if(!t)throw new Error("Component is not defined");if(!s)throw new Error("Root element is not defined");const d=await((h=t.getInitialData)==null?void 0:h.call(t,n))??{};se(L(ie,{node:this._provider,...this._provider.props,children:L(t,{...n,initialData:d})}),s)}}unmount(t){if(!t)throw new Error("Root element is not defined");se(null,t)}async toString(t,n,s){var h;if(!t)throw new Error("Component is not defined");const d=await((h=t.getInitialData)==null?void 0:h.call(t,n))??{};return V(L(ie,{node:this._provider,...this._provider.props,children:L(t,{...n,initialData:d})}),{},{...s})}}const ze=e=>e.replace("_","-");function ke(e={},t,n){const s=R(null),d=R(!1),h=R([]),[g,_]=le({children:[n==null?void 0:n({})]}),[w,b]=le({}),O=Se(()=>({get:i=>w[i],set:(i,o)=>{b({...O,[i]:o})}}),[w]),{intl:p}=Oe(Ce);e.dictionary=p.dictionary,e._setProps=_;const a=$(i=>{typeof i=="function"?h.current.push(i):console.warn("Skipped: Invalid _registerMethod",i)},[]);e._registerMethod=a;const x=$(i=>L("div",{"data-slot-html-element":i.tagName.toLowerCase(),ref:o=>{o==null||o.appendChild(i)}}),[]);return e._htmlElementToVNode=x,e.getSlotElement=$(i=>{const o=document.querySelector(`[data-slot-key="${i}"]`);if(o)return{appendChild:r=>{o.appendChild(r)},prependChild:r=>{o.insertBefore(r,o.firstChild)},appendSibling:r=>{const v=o.parentNode;v==null||v.insertBefore(r,o.nextSibling)},prependSibling:r=>{const v=o.parentNode;v==null||v.insertBefore(r,o)}}},[]),e.onChange=$(i=>{h.current.push(i)},[]),e.replaceWith=$(i=>{a(o=>{const r=x(i);o._setProps({children:[r]})})},[x,a]),e.appendChild=$(i=>{a(o=>{const r=x(i);o._setProps(v=>({...v,children:[...v.children,r]}))})},[x,a]),e.prependChild=$(i=>{a(o=>{const r=x(i);o._setProps(v=>({...v,children:[r,...v.children]}))})},[x,a]),e.appendSibling=$(i=>{a(()=>{var r,v;const o=(r=s.current)==null?void 0:r.parentNode;o==null||o.insertBefore(i,((v=s.current)==null?void 0:v.nextSibling)??null)})},[a]),e.prependSibling=$(i=>{a(()=>{var r;const o=(r=s.current)==null?void 0:r.parentNode;o==null||o.insertBefore(i,s.current)})},[a]),ee(()=>{const i=s.current;if(!(!t||!i))try{t(e,i)}catch(o){console.error(`Error in "${t.name}" Slot callback`,o)}},[]),ee(()=>{_({children:[n==null?void 0:n(g)]}),h.current.forEach(i=>{i(e,O)}),(n==null?void 0:n.name)==="render"&&d.current===!1&&(d.current=!0)},[JSON.stringify(e),JSON.stringify(w),d.current]),[s,g]}function Be({name:e,slot:t,context:n,children:s,render:d,...h}){const[g,_]=ke(n,t,d??(()=>s));return ee(()=>{e||console.warn('Slot "name" is required')},[e]),L("div",{...h,ref:g,"data-slot":e,children:_.children})}window.DROPINS=window.DROPINS||{};window.DROPINS.showSlots=async e=>{window.sessionStorage.setItem("dropin-debugger--show-slots",e.toString()),document.body.classList.toggle("dropin-debugger--show-slots",e)};window.DROPINS.showSlots(window.sessionStorage.getItem("dropin-debugger--show-slots")==="true");export{Re as Config,Ie as Initializer,Ve as Render,Be as Slot,ie as VComponent,Je as classes,Ke as debounce,Ue as deepmerge,Ge as generateSrcset,Xe as getFormErrors,Ye as getFormValues,tt as getImageParamsKeyMap,He as initializers,nt as setImageParamsKeyMap,ze as toLanguageTag,ke as useSlot};
