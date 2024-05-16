var ve=Object.defineProperty;var be=(e,t,r)=>t in e?ve(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var re=(e,t,r)=>(be(e,typeof t!="symbol"?t+"":t,r),r);import{options as p,createElement as ue,Fragment as K}from"../preact.js";function he(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Oe=function(t){return je(t)&&!xe(t)};function je(e){return!!e&&typeof e=="object"}function xe(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||Ae(e)}var Me=typeof Symbol=="function"&&Symbol.for,we=Me?Symbol.for("react.element"):60103;function Ae(e){return e.$$typeof===we}function Ce(e){return Array.isArray(e)?[]:{}}function q(e,t){return t.clone!==!1&&t.isMergeableObject(e)?N(Ce(e),e,t):e}function Ee(e,t,r){return e.concat(t).map(function(a){return q(a,r)})}function Se(e,t){if(!t.customMerge)return N;var r=t.customMerge(e);return typeof r=="function"?r:N}function Fe(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function ne(e){return Object.keys(e).concat(Fe(e))}function pe(e,t){try{return t in e}catch{return!1}}function Pe(e,t){return pe(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function $e(e,t,r){var a={};return r.isMergeableObject(e)&&ne(e).forEach(function(i){a[i]=q(e[i],r)}),ne(t).forEach(function(i){Pe(e,i)||(pe(e,i)&&r.isMergeableObject(t[i])?a[i]=Se(i,r)(e[i],t[i],r):a[i]=q(t[i],r))}),a}function N(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||Ee,r.isMergeableObject=r.isMergeableObject||Oe,r.cloneUnlessOtherwiseSpecified=q;var a=Array.isArray(t),i=Array.isArray(e),m=a===i;return m?a?r.arrayMerge(e,t,r):$e(e,t,r):q(t,r)}N.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(a,i){return N(a,i,r)},{})};var Le=N,Ne=Le;const Xe=he(Ne);var Te=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i,_e=/^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/,W=/[\s\n\\/='"\0<>]/,de=/^xlink:?./,De=/["&<]/;function U(e){if(De.test(e+="")===!1)return e;for(var t=0,r=0,a="",i="";r<e.length;r++){switch(e.charCodeAt(r)){case 34:i="&quot;";break;case 38:i="&amp;";break;case 60:i="&lt;";break;default:continue}r!==t&&(a+=e.slice(t,r)),a+=i,t=r+1}return r!==t&&(a+=e.slice(t,r)),a}var oe=function(e,t){return String(e).replace(/(\n+)/g,"$1"+(t||"	"))},ae=function(e,t,r){return String(e).length>40||String(e).indexOf(`
`)!==-1||String(e).indexOf("<")!==-1},ie={},Ue=/([A-Z])/g;function ge(e){var t="";for(var r in e){var a=e[r];a!=null&&a!==""&&(t&&(t+=" "),t+=r[0]=="-"?r:ie[r]||(ie[r]=r.replace(Ue,"-$1").toLowerCase()),t=typeof a=="number"&&Te.test(r)===!1?t+": "+a+"px;":t+": "+a+";")}return t||void 0}function H(e,t){return Array.isArray(t)?t.reduce(H,e):t!=null&&t!==!1&&e.push(t),e}function le(){this.__d=!0}function ye(e,t){return{__v:e,context:t,props:e.props,setState:le,forceUpdate:le,__d:!0,__h:[]}}function Z(e,t){var r=e.contextType,a=r&&t[r.__c];return r!=null?a?a.props.value:r.__:t}var R=[];function T(e,t,r,a,i,m){if(e==null||typeof e=="boolean")return"";if(typeof e!="object")return typeof e=="function"?"":U(e);var g=r.pretty,_=g&&typeof g=="string"?g:"	";if(Array.isArray(e)){for(var h="",b=0;b<e.length;b++)g&&b>0&&(h+=`
`),h+=T(e[b],t,r,a,i,m);return h}if(e.constructor!==void 0)return"";var C,c=e.type,u=e.props,F=!1;if(typeof c=="function"){if(F=!0,!r.shallow||!a&&r.renderRootComponent!==!1){if(c===K){var v=[];return H(v,e.props.children),T(v,t,r,r.shallowHighOrder!==!1,i,m)}var d,n=e.__c=ye(e,t);p.__b&&p.__b(e);var P=p.__r;if(c.prototype&&typeof c.prototype.render=="function"){var w=Z(c,t);(n=e.__c=new c(u,w)).__v=e,n._dirty=n.__d=!0,n.props=u,n.state==null&&(n.state={}),n._nextState==null&&n.__s==null&&(n._nextState=n.__s=n.state),n.context=w,c.getDerivedStateFromProps?n.state=Object.assign({},n.state,c.getDerivedStateFromProps(n.props,n.state)):n.componentWillMount&&(n.componentWillMount(),n.state=n._nextState!==n.state?n._nextState:n.__s!==n.state?n.__s:n.state),P&&P(e),d=n.render(n.props,n.state,n.context)}else for(var E=Z(c,t),$=0;n.__d&&$++<25;)n.__d=!1,P&&P(e),d=c.call(e.__c,u,E);return n.getChildContext&&(t=Object.assign({},t,n.getChildContext())),p.diffed&&p.diffed(e),T(d,t,r,r.shallowHighOrder!==!1,i,m)}c=(C=c).displayName||C!==Function&&C.name||function(B){var J=(Function.prototype.toString.call(B).match(/^\s*function\s+([^( ]+)/)||"")[1];if(!J){for(var z=-1,Q=R.length;Q--;)if(R[Q]===B){z=Q;break}z<0&&(z=R.push(B)-1),J="UnnamedComponent"+z}return J}(C)}var j,O,f="<"+c;if(u){var y=Object.keys(u);r&&r.sortAttributes===!0&&y.sort();for(var A=0;A<y.length;A++){var o=y[A],s=u[o];if(o!=="children"){if(!W.test(o)&&(r&&r.allAttributes||o!=="key"&&o!=="ref"&&o!=="__self"&&o!=="__source")){if(o==="defaultValue")o="value";else if(o==="defaultChecked")o="checked";else if(o==="defaultSelected")o="selected";else if(o==="className"){if(u.class!==void 0)continue;o="class"}else i&&de.test(o)&&(o=o.toLowerCase().replace(/^xlink:?/,"xlink:"));if(o==="htmlFor"){if(u.for)continue;o="for"}o==="style"&&s&&typeof s=="object"&&(s=ge(s)),o[0]==="a"&&o[1]==="r"&&typeof s=="boolean"&&(s=String(s));var l=r.attributeHook&&r.attributeHook(o,s,t,r,F);if(l||l==="")f+=l;else if(o==="dangerouslySetInnerHTML")O=s&&s.__html;else if(c==="textarea"&&o==="value")j=s;else if((s||s===0||s==="")&&typeof s!="function"){if(!(s!==!0&&s!==""||(s=o,r&&r.xml))){f=f+" "+o;continue}if(o==="value"){if(c==="select"){m=s;continue}c==="option"&&m==s&&u.selected===void 0&&(f+=" selected")}f=f+" "+o+'="'+U(s)+'"'}}}else j=s}}if(g){var x=f.replace(/\n\s*/," ");x===f||~x.indexOf(`
`)?g&&~f.indexOf(`
`)&&(f+=`
`):f=x}if(f+=">",W.test(c))throw new Error(c+" is not a valid HTML tag name in "+f);var L,me=_e.test(c)||r.voidElements&&r.voidElements.test(c),M=[];if(O)g&&ae(O)&&(O=`
`+_+oe(O,_)),f+=O;else if(j!=null&&H(L=[],j).length){for(var k=g&&~f.indexOf(`
`),ee=!1,G=0;G<L.length;G++){var X=L[G];if(X!=null&&X!==!1){var S=T(X,t,r,!0,c==="svg"||c!=="foreignObject"&&i,m);if(g&&!k&&ae(S)&&(k=!0),S)if(g){var te=S.length>0&&S[0]!="<";ee&&te?M[M.length-1]+=S:M.push(S),ee=te}else M.push(S)}}if(g&&k)for(var Y=M.length;Y--;)M[Y]=`
`+_+oe(M[Y],_)}if(M.length||O)f+=M.join("");else if(r&&r.xml)return f.substring(0,f.length-1)+" />";return!me||L||O?(g&&~f.indexOf(`
`)&&(f+=`
`),f=f+"</"+c+">"):f=f.replace(/>$/," />"),f}var qe={shallow:!0};V.render=V;var ze=function(e,t){return V(e,t,qe)},se=[];function V(e,t,r){t=t||{};var a=p.__s;p.__s=!0;var i,m=ue(K,null);return m.__k=[e],i=r&&(r.pretty||r.voidElements||r.sortAttributes||r.shallow||r.allAttributes||r.xml||r.attributeHook)?T(e,t,r):D(e,t,!1,void 0,m),p.__c&&p.__c(e,se),p.__s=a,se.length=0,i}function I(e){return e==null||typeof e=="boolean"?null:typeof e=="string"||typeof e=="number"||typeof e=="bigint"?ue(null,null,e):e}function Ke(e,t){return e==="className"?"class":e==="htmlFor"?"for":e==="defaultValue"?"value":e==="defaultChecked"?"checked":e==="defaultSelected"?"selected":t&&de.test(e)?e.toLowerCase().replace(/^xlink:?/,"xlink:"):e}function We(e,t){return e==="style"&&t!=null&&typeof t=="object"?ge(t):e[0]==="a"&&e[1]==="r"&&typeof t=="boolean"?String(t):t}var fe=Array.isArray,ce=Object.assign;function D(e,t,r,a,i){if(e==null||e===!0||e===!1||e==="")return"";if(typeof e!="object")return typeof e=="function"?"":U(e);if(fe(e)){var m="";i.__k=e;for(var g=0;g<e.length;g++)m+=D(e[g],t,r,a,i),e[g]=I(e[g]);return m}if(e.constructor!==void 0)return"";e.__=i,p.__b&&p.__b(e);var _=e.type,h=e.props;if(typeof _=="function"){var b;if(_===K)b=h.children;else{b=_.prototype&&typeof _.prototype.render=="function"?function(y,A){var o=y.type,s=Z(o,A),l=new o(y.props,s);y.__c=l,l.__v=y,l.__d=!0,l.props=y.props,l.state==null&&(l.state={}),l.__s==null&&(l.__s=l.state),l.context=s,o.getDerivedStateFromProps?l.state=ce({},l.state,o.getDerivedStateFromProps(l.props,l.state)):l.componentWillMount&&(l.componentWillMount(),l.state=l.__s!==l.state?l.__s:l.state);var x=p.__r;return x&&x(y),l.render(l.props,l.state,l.context)}(e,t):function(y,A){var o,s=ye(y,A),l=Z(y.type,A);y.__c=s;for(var x=p.__r,L=0;s.__d&&L++<25;)s.__d=!1,x&&x(y),o=y.type.call(s,y.props,l);return o}(e,t);var C=e.__c;C.getChildContext&&(t=ce({},t,C.getChildContext()))}var c=D(b=b!=null&&b.type===K&&b.key==null?b.props.children:b,t,r,a,e);return p.diffed&&p.diffed(e),e.__=void 0,p.unmount&&p.unmount(e),c}var u,F,v="<";if(v+=_,h)for(var d in u=h.children,h){var n=h[d];if(!(d==="key"||d==="ref"||d==="__self"||d==="__source"||d==="children"||d==="className"&&"class"in h||d==="htmlFor"&&"for"in h||W.test(d))){if(n=We(d=Ke(d,r),n),d==="dangerouslySetInnerHTML")F=n&&n.__html;else if(_==="textarea"&&d==="value")u=n;else if((n||n===0||n==="")&&typeof n!="function"){if(n===!0||n===""){n=d,v=v+" "+d;continue}if(d==="value"){if(_==="select"){a=n;continue}_!=="option"||a!=n||"selected"in h||(v+=" selected")}v=v+" "+d+'="'+U(n)+'"'}}}var P=v;if(v+=">",W.test(_))throw new Error(_+" is not a valid HTML tag name in "+v);var w="",E=!1;if(F)w+=F,E=!0;else if(typeof u=="string")w+=U(u),E=!0;else if(fe(u)){e.__k=u;for(var $=0;$<u.length;$++){var j=u[$];if(u[$]=I(j),j!=null&&j!==!1){var O=D(j,t,_==="svg"||_!=="foreignObject"&&r,a,e);O&&(w+=O,E=!0)}}}else if(u!=null&&u!==!1&&u!==!0){e.__k=[I(u)];var f=D(u,t,_==="svg"||_!=="foreignObject"&&r,a,e);f&&(w+=f,E=!0)}if(p.diffed&&p.diffed(e),e.__=void 0,p.unmount&&p.unmount(e),E)v+=w;else if(_e.test(_))return P+" />";return v+"</"+_+">"}V.shallowRender=ze;class Ze{constructor(){re(this,"_map")}get map(){return this._map}set map(t){this._map=t}getMethods(){return{setMap:t=>{this.map=t},getMap:()=>this.map}}}const Ve=new Ze,{setMap:Ye,getMap:Be}=Ve.getMethods();export{Xe as d,Be as g,Ye as s};
//# sourceMappingURL=image-params-keymap__LH6wjfp1fd.js.map
