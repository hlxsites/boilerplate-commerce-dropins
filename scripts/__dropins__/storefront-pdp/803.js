export const id=803;export const ids=[803];export const modules={808:function(e){e.exports=function(e,n,t,r,o){for(n=n.split?n.split("."):n,r=0;r<n.length;r++)e=e?e[n[r]]:o;return e===o?t:e}},921:(e,n,t)=>{t.d(n,{fH:()=>v,Pj:()=>b,XK:()=>A});var r,o=t(882),_=t(964),i=t(808),u=t.n(i),l={};function c(e,n,t){if(3===e.nodeType){var r="textContent"in e?e.textContent:e.nodeValue||"";if(!1!==c.options.trim){var o=0===n||n===t.length-1;if((!(r=r.match(/^[\s\n]+$/g)&&"all"!==c.options.trim?" ":r.replace(/(^[\s\n]+|[\s\n]+$)/g,"all"===c.options.trim||o?"":" "))||" "===r)&&t.length>1&&o)return null}return r}if(1!==e.nodeType)return null;var _=String(e.nodeName).toLowerCase();if("script"===_&&!c.options.allowScripts)return null;var i,u,l=c.h(_,function(e){var n=e&&e.length;if(!n)return null;for(var t={},r=0;r<n;r++){var o=e[r],_=o.name,i=o.value;"on"===_.substring(0,2)&&c.options.allowEvents&&(i=new Function(i)),t[_]=i}return t}(e.attributes),(u=(i=e.childNodes)&&Array.prototype.map.call(i,c).filter(s))&&u.length?u:null);return c.visitor&&c.visitor(l),l}var a,s=function(e){return e},f={};function p(e){var n=(e.type||"").toLowerCase(),t=p.map;t&&t.hasOwnProperty(n)?(e.type=t[n],e.props=Object.keys(e.props||{}).reduce((function(n,t){var r;return n[(r=t,r.replace(/-(.)/g,(function(e,n){return n.toUpperCase()})))]=e.props[t],n}),{})):e.type=n.replace(/[^a-z0-9-]/i,"")}const d=function(e){function n(){e.apply(this,arguments)}return e&&(n.__proto__=e),(n.prototype=Object.create(e&&e.prototype)).constructor=n,n.setReviver=function(e){a=e},n.prototype.shouldComponentUpdate=function(e){var n=this.props;return e.wrap!==n.wrap||e.type!==n.type||e.markup!==n.markup},n.prototype.setComponents=function(e){if(this.map={},e)for(var n in e)if(e.hasOwnProperty(n)){var t=n.replace(/([A-Z]+)([A-Z][a-z0-9])|([a-z0-9]+)([A-Z])/g,"$1$3-$2$4").toLowerCase();this.map[t]=e[n]}},n.prototype.render=function(e){var n=e.wrap;void 0===n&&(n=!0);var t,_=e.type,i=e.markup,u=e.components,s=e.reviver,d=e.onError,v=e["allow-scripts"],h=e["allow-events"],m=e.trim,y=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["wrap","type","markup","components","reviver","onError","allow-scripts","allow-events","trim"]),g=s||this.reviver||this.constructor.prototype.reviver||a||o.h;this.setComponents(u);var b={allowScripts:v,allowEvents:h,trim:m};try{t=function(e,n,t,o,_){var i=function(e,n){var t,o,_,i,u="html"===n?"text/html":"application/xml";"html"===n?(i="body",_="<!DOCTYPE html>\n<html><body>"+e+"</body></html>"):(i="xml",_='<?xml version="1.0" encoding="UTF-8"?>\n<xml>'+e+"</xml>");try{t=(new DOMParser).parseFromString(_,u)}catch(e){o=e}if(t||"html"!==n||((t=r||(r=function(){if(document.implementation&&document.implementation.createHTMLDocument)return document.implementation.createHTMLDocument("");var e=document.createElement("iframe");return e.style.cssText="position:absolute; left:0; top:-999em; width:1px; height:1px; overflow:hidden;",e.setAttribute("sandbox","allow-forms"),document.body.appendChild(e),e.contentWindow.document}())).open(),t.write(_),t.close()),t){var l=t.getElementsByTagName(i)[0],c=l.firstChild;return e&&!c&&(l.error="Document parse failed."),c&&"parsererror"===String(c.nodeName).toLowerCase()&&(c.removeChild(c.firstChild),c.removeChild(c.lastChild),l.error=c.textContent||c.nodeValue||o||"Unknown error",l.removeChild(c)),l}}(e,n);if(i&&i.error)throw new Error(i.error);var u=i&&i.body||i;p.map=o||f;var a=u&&function(e,n,t,r){return c.visitor=n,c.h=t,c.options=r||l,c(e)}(u,p,t,_);return p.map=null,a&&a.props&&a.props.children||null}(i,_,g,this.map,b)}catch(e){d?d({error:e}):"undefined"!=typeof console&&console.error&&console.error("preact-markup: "+e)}if(!1===n)return t||null;var k=y.hasOwnProperty("className")?"className":"class",w=y[k];return w?w.splice?w.splice(0,0,"markup"):"string"==typeof w?y[k]+=" markup":"object"==typeof w&&(w.markup=!0):y[k]="markup",g("div",y,t||null)},n}(o.wA);var v=(0,o.kr)({intl:{}});function h(e){return null!=e}function m(e,n){for(var t in n)e[t]=n[t];return e}function y(e,n){var t=m({},e);for(var r in n)n.hasOwnProperty(r)&&(e[r]&&n[r]&&"object"==typeof e[r]&&"object"==typeof n[r]?t[r]=y(e[r],n[r]):t[r]=e[r]||n[r]);return t}var g=/[?&#]intl=show/;function b(e){var n=e.scope,t=e.mark,r=e.definition,i=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["scope","mark","definition"]),u=m({},(0,_.qp)(v).intl||{});return n&&(u.scope=n),r&&(u.dictionary=y(u.dictionary||{},r)),(t||"undefined"!=typeof location&&String(location).match(g))&&(u.mark=!0),(0,o.h)(v.Provider,{value:{intl:u}},i.children)}function k(e,n){if(arguments.length<2)return n=e,function(e){return k(e,n)};function t(t){return(0,o.h)(b,n||{},(0,o.h)(e,t))}return t.getWrappedComponent=e&&e.getWrappedComponent||function(){return e},t}var w={};function x(e,n,t,r){return e&&e.replace(/\{\{([\w.-]+)\}\}/g,C.bind(null,n||w,t,r))}function C(e,n,t,r,o){for(var _=o.split("."),i=e,u=0;u<_.length;u++){if(null==(i=i[_[u]]))return"";if(i&&i.type===H)return P(i.props.id,n,t,i.props.fields,i.props.plural,i.props.fallback)}return"string"==typeof i&&i.match(/\{\{/)&&(i=x(i,e)),i}function P(e,n,t,r,o,_){n&&(e=n+"."+e);var i=t&&u()(t,e);return(o||0===o)&&i&&"object"==typeof i&&(i=i.splice?i[o]||i[0]:0===o&&h(i.none||i.zero)?i.none||i.zero:1===o&&h(i.one||i.singular)?i.one||i.singular:i.some||i.many||i.plural||i.other||i),i&&x(i,r,n,t)||_||null}function S(e){var n=e.value,t=e.id,r=(0,_.qp)(v).intl;if(r&&r.mark){var i="dictionary"+(r&&r.scope?"."+r.scope:"")+"."+t;return(0,o.h)("mark",{style:{background:n?u()(r,i)?"rgba(119,231,117,.5)":"rgba(229,226,41,.5)":"rgba(228,147,51,.5)"},title:t},n)}return n}function H(e){var n=e.id,t=e.children,r=e.plural,i=e.fields,u=(0,_.qp)(v).intl,l=P(n,u&&u.scope,u&&u.dictionary,i,r,t);return(0,o.h)(S,{id:n,value:l})}function E(e,n,t){var r={};for(var o in n=n||{},e=function(e){if("string"==typeof(e=e||{})&&(e=e.split(",")),"join"in e){for(var n={},t=0;t<e.length;t++){var r=e[t].trim();r&&(n[r.split(".").pop()]=r)}return n}return e}(e),e)if(e.hasOwnProperty(o)&&e[o]){var _=e[o];t||"string"!=typeof _?_.type===H&&(_=m({fallback:_.props.children},_.props),r[o]=P(_.id,n.scope,n.dictionary,_.fields,_.plural,_.fallback)):r[o]=P(_,n.scope,n.dictionary)}return r}function M(e){var n=e.children,t=(0,_.qp)(v).intl;return n&&n.length?n.map((function(e){return(0,o.Tm)(e,E(e.props,t,!0))})):n&&(0,o.Tm)(n,E(n.props,t,!0))}function O(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}function T(e){var n=e.html,t=e.id,r=O(e,["html","id"]);return(0,o.h)(S,{id:t,value:n?"string"==typeof n?(0,o.h)(d,Object.assign({},{type:"html",trim:!1},r,{markup:n})):(0,o.h)("span",null,n):n})}function A(e){var n=(0,_.qp)(v).intl;return E("function"==typeof e?e({intl:n}):e,n)}k.intl=k,k.IntlContext=v,k.IntlProvider=b,k.Text=H,k.MarkupText=function(e){var n=e.id,t=e.fields,r=e.plural,_=e.children,i=O(e,["id","fields","plural","children"]);return(0,o.h)(M,null,(0,o.h)(T,Object.assign({},{html:(0,o.h)(H,{id:n,fields:t,plural:r,children:_}),id:n},i)))},k.Localizer=M,k.withText=function(e){return function(n){function t(t,r){var i=(0,_.qp)(v).intl,u=E("function"==typeof e?e(t,{intl:i}):e,i);return(0,o.h)(n,m(m({},t),u))}return t.getWrappedComponent=n&&n.getWrappedComponent||function(){return n},t}},k.useText=A,k.translate=P},934:(e,n,t)=>{t.d(n,{I4:()=>o.I4,Ye:()=>o.Ye,d4:()=>o.d4,eJ:()=>o.eJ,kr:()=>r.kr});var r=t(882),o=t(964);function _(e,n){for(var t in n)e[t]=n[t];return e}function i(e,n){for(var t in e)if("__source"!==t&&!(t in n))return!0;for(var r in n)if("__source"!==r&&e[r]!==n[r])return!0;return!1}function u(e,n){this.props=e,this.context=n}(u.prototype=new r.wA).isPureReactComponent=!0,u.prototype.shouldComponentUpdate=function(e,n){return i(this.props,e)||i(this.state,n)};var l=r.YM.__b;r.YM.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),l&&l(e)};"undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref");var c=function(e,n){return null==e?null:(0,r.bR)((0,r.bR)(e).map(n))},a=(r.bR,r.YM.__e);r.YM.__e=function(e,n,t,r){if(e.then)for(var o,_=n;_=_.__;)if((o=_.__c)&&o.__c)return null==n.__e&&(n.__e=t.__e,n.__k=t.__k),o.__c(e,n);a(e,n,t,r)};var s=r.YM.unmount;function f(e,n,t){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach((function(e){"function"==typeof e.__c&&e.__c()})),e.__c.__H=null),null!=(e=_({},e)).__c&&(e.__c.__P===t&&(e.__c.__P=n),e.__c=null),e.__k=e.__k&&e.__k.map((function(e){return f(e,n,t)}))),e}function p(e,n,t){return e&&t&&(e.__v=null,e.__k=e.__k&&e.__k.map((function(e){return p(e,n,t)})),e.__c&&e.__c.__P===n&&(e.__e&&t.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=t)),e}function d(){this.__u=0,this.t=null,this.__b=null}function v(e){var n=e.__.__c;return n&&n.__a&&n.__a(e)}function h(){this.u=null,this.o=null}r.YM.unmount=function(e){var n=e.__c;n&&n.__R&&n.__R(),n&&32&e.__u&&(e.type=null),s&&s(e)},(d.prototype=new r.wA).__c=function(e,n){var t=n.__c,r=this;null==r.t&&(r.t=[]),r.t.push(t);var o=v(r.__v),_=!1,i=function(){_||(_=!0,t.__R=null,o?o(u):u())};t.__R=i;var u=function(){if(! --r.__u){if(r.state.__a){var e=r.state.__a;r.__v.__k[0]=p(e,e.__c.__P,e.__c.__O)}var n;for(r.setState({__a:r.__b=null});n=r.t.pop();)n.forceUpdate()}};r.__u++||32&n.__u||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(i,i)},d.prototype.componentWillUnmount=function(){this.t=[]},d.prototype.render=function(e,n){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=f(this.__b,t,o.__O=o.__P)}this.__b=null}var _=n.__a&&(0,r.az)(r.HY,null,e.fallback);return _&&(_.__u&=-33),[(0,r.az)(r.HY,null,n.__a?null:e.children),_]};var m=function(e,n,t){if(++t[1]===t[0]&&e.o.delete(n),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.o.size))for(t=e.u;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;e.u=t=t[2]}};(h.prototype=new r.wA).__a=function(e){var n=this,t=v(n.__v),r=n.o.get(e);return r[0]++,function(o){var _=function(){n.props.revealOrder?(r.push(o),m(n,e,r)):o()};t?t(_):_()}},h.prototype.render=function(e){this.u=null,this.o=new Map;var n=(0,r.bR)(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&n.reverse();for(var t=n.length;t--;)this.o.set(n[t],this.u=[1,0,this.u]);return e.children},h.prototype.componentDidUpdate=h.prototype.componentDidMount=function(){var e=this;this.o.forEach((function(n,t){m(e,t,n)}))};var y="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,g=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,b=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,k=/[A-Z0-9]/g,w="undefined"!=typeof document,x=function(e){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(e)};r.wA.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(e){Object.defineProperty(r.wA.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(n){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:n})}})}));var C=r.YM.event;function P(){}function S(){return this.cancelBubble}function H(){return this.defaultPrevented}r.YM.event=function(e){return C&&(e=C(e)),e.persist=P,e.isPropagationStopped=S,e.isDefaultPrevented=H,e.nativeEvent=e};var E={enumerable:!1,configurable:!0,get:function(){return this.class}},M=r.YM.vnode;r.YM.vnode=function(e){"string"==typeof e.type&&function(e){var n=e.props,t=e.type,o={};for(var _ in n){var i=n[_];if(!("value"===_&&"defaultValue"in n&&null==i||w&&"children"===_&&"noscript"===t||"class"===_||"className"===_)){var u=_.toLowerCase();"defaultValue"===_&&"value"in n&&null==n.value?_="value":"download"===_&&!0===i?i="":"translate"===u&&"no"===i?i=!1:"ondoubleclick"===u?_="ondblclick":"onchange"!==u||"input"!==t&&"textarea"!==t||x(n.type)?"onfocus"===u?_="onfocusin":"onblur"===u?_="onfocusout":b.test(_)?_=u:-1===t.indexOf("-")&&g.test(_)?_=_.replace(k,"-$&").toLowerCase():null===i&&(i=void 0):u=_="oninput","oninput"===u&&o[_=u]&&(_="oninputCapture"),o[_]=i}}"select"==t&&o.multiple&&Array.isArray(o.value)&&(o.value=(0,r.bR)(n.children).forEach((function(e){e.props.selected=-1!=o.value.indexOf(e.props.value)}))),"select"==t&&null!=o.defaultValue&&(o.value=(0,r.bR)(n.children).forEach((function(e){e.props.selected=o.multiple?-1!=o.defaultValue.indexOf(e.props.value):o.defaultValue==e.props.value}))),n.class&&!n.className?(o.class=n.class,Object.defineProperty(o,"className",E)):(n.className&&!n.class||n.class&&n.className)&&(o.class=o.className=n.className),e.props=o}(e),e.$$typeof=y,M&&M(e)};var O=r.YM.__r;r.YM.__r=function(e){O&&O(e),e.__c};var T=r.YM.diffed;r.YM.diffed=function(e){T&&T(e);var n=e.props,t=e.__e;null!=t&&"textarea"===e.type&&"value"in n&&n.value!==t.value&&(t.value=null==n.value?"":n.value),null};r.HY;o.bt;o.eJ,o.Me,o._Y,o.d4,o.bt,o.sO,o.aP,o.Ye,o.I4,o.qp,o.Qb,r.az,r.kr,r.Vf,r.HY,r.wA},882:(e,n,t)=>{t.d(n,{HY:()=>b,Tm:()=>z,Vf:()=>g,YM:()=>o,ZB:()=>$,az:()=>m,bR:()=>O,h:()=>m,kr:()=>q,sY:()=>F,wA:()=>k});var r,o,_,i,u,l,c,a,s={},f=[],p=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,d=Array.isArray;function v(e,n){for(var t in n)e[t]=n[t];return e}function h(e){var n=e.parentNode;n&&n.removeChild(e)}function m(e,n,t){var o,_,i,u={};for(i in n)"key"==i?o=n[i]:"ref"==i?_=n[i]:u[i]=n[i];if(arguments.length>2&&(u.children=arguments.length>3?r.call(arguments,2):t),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===u[i]&&(u[i]=e.defaultProps[i]);return y(e,u,o,_,null)}function y(e,n,t,r,i){var u={type:e,props:n,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==i?++_:i,__i:-1,__u:0};return null==i&&null!=o.vnode&&o.vnode(u),u}function g(){return{current:null}}function b(e){return e.children}function k(e,n){this.props=e,this.context=n}function w(e,n){if(null==n)return e.__?w(e.__,e.__i+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?w(e):null}function x(e,n,t){var r,_=e.__v,i=_.__e,u=e.__P;if(u)return(r=v({},_)).__v=_.__v+1,o.vnode&&o.vnode(r),D(u,r,_,e.__n,void 0!==u.ownerSVGElement,32&_.__u?[i]:null,n,null==i?w(_):i,!!(32&_.__u),t),r.__v=_.__v,r.__.__k[r.__i]=r,r.__d=void 0,r.__e!=i&&C(r),r}function C(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return C(e)}}function P(e){(!e.__d&&(e.__d=!0)&&i.push(e)&&!S.__r++||u!==o.debounceRendering)&&((u=o.debounceRendering)||l)(S)}function S(){var e,n,t,r=[],_=[];for(i.sort(c);e=i.shift();)e.__d&&(t=i.length,n=x(e,r,_)||n,0===t||i.length>t?(W(r,n,_),_.length=r.length=0,n=void 0,i.sort(c)):n&&o.__c&&o.__c(n,f));n&&W(r,n,_),S.__r=0}function H(e,n,t,r,o,_,i,u,l,c,a){var p,d,v,h,m,y=r&&r.__k||f,g=n.length;for(t.__d=l,E(t,n,y),l=t.__d,p=0;p<g;p++)null!=(v=t.__k[p])&&"boolean"!=typeof v&&"function"!=typeof v&&(d=-1===v.__i?s:y[v.__i]||s,v.__i=p,D(e,v,d,o,_,i,u,l,c,a),h=v.__e,v.ref&&d.ref!=v.ref&&(d.ref&&R(d.ref,null,v),a.push(v.ref,v.__c||h,v)),null==m&&null!=h&&(m=h),65536&v.__u||d.__k===v.__k?l=M(v,l,e):"function"==typeof v.type&&void 0!==v.__d?l=v.__d:h&&(l=h.nextSibling),v.__d=void 0,v.__u&=-196609);t.__d=l,t.__e=m}function E(e,n,t){var r,o,_,i,u,l=n.length,c=t.length,a=c,s=0;for(e.__k=[],r=0;r<l;r++)i=r+s,null!=(o=e.__k[r]=null==(o=n[r])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?y(null,o,null,null,null):d(o)?y(b,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?y(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=e,o.__b=e.__b+1,u=T(o,t,i,a),o.__i=u,_=null,-1!==u&&(a--,(_=t[u])&&(_.__u|=131072)),null==_||null===_.__v?(-1==u&&s--,"function"!=typeof o.type&&(o.__u|=65536)):u!==i&&(u===i+1?s++:u>i?a>l-i?s+=u-i:s--:u<i?u==i-1&&(s=u-i):s=0,u!==r+s&&(o.__u|=65536))):(_=t[i])&&null==_.key&&_.__e&&!(131072&_.__u)&&(_.__e==e.__d&&(e.__d=w(_)),V(_,_,!1),t[i]=null,a--);if(a)for(r=0;r<c;r++)null!=(_=t[r])&&!(131072&_.__u)&&(_.__e==e.__d&&(e.__d=w(_)),V(_,_))}function M(e,n,t){var r,o;if("function"==typeof e.type){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,n=M(r[o],n,t));return n}e.__e!=n&&(t.insertBefore(e.__e,n||null),n=e.__e);do{n=n&&n.nextSibling}while(null!=n&&8===n.nodeType);return n}function O(e,n){return n=n||[],null==e||"boolean"==typeof e||(d(e)?e.some((function(e){O(e,n)})):n.push(e)),n}function T(e,n,t,r){var o=e.key,_=e.type,i=t-1,u=t+1,l=n[t];if(null===l||l&&o==l.key&&_===l.type&&!(131072&l.__u))return t;if(r>(null==l||131072&l.__u?0:1))for(;i>=0||u<n.length;){if(i>=0){if((l=n[i])&&!(131072&l.__u)&&o==l.key&&_===l.type)return i;i--}if(u<n.length){if((l=n[u])&&!(131072&l.__u)&&o==l.key&&_===l.type)return u;u++}}return-1}function A(e,n,t){"-"===n[0]?e.setProperty(n,null==t?"":t):e[n]=null==t?"":"number"!=typeof t||p.test(n)?t:t+"px"}function N(e,n,t,r,o){var _;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(n in r)t&&n in t||A(e.style,n,"");if(t)for(n in t)r&&t[n]===r[n]||A(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])_=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+_]=t,t?r?t.u=r.u:(t.u=Date.now(),e.addEventListener(n,_?U:Y,_)):e.removeEventListener(n,_?U:Y,_);else{if(o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==n&&"height"!==n&&"href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&"rowSpan"!==n&&"colSpan"!==n&&"role"!==n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null==t||!1===t&&"-"!==n[4]?e.removeAttribute(n):e.setAttribute(n,t))}}function Y(e){if(this.l){var n=this.l[e.type+!1];if(e.t){if(e.t<=n.u)return}else e.t=Date.now();return n(o.event?o.event(e):e)}}function U(e){if(this.l)return this.l[e.type+!0](o.event?o.event(e):e)}function D(e,n,t,r,_,i,u,l,c,a){var s,f,p,h,m,y,g,w,x,C,P,S,E,M,O,T=n.type;if(void 0!==n.constructor)return null;128&t.__u&&(c=!!(32&t.__u),i=[l=n.__e=t.__e]),(s=o.__b)&&s(n);e:if("function"==typeof T)try{if(w=n.props,x=(s=T.contextType)&&r[s.__c],C=s?x?x.props.value:s.__:r,t.__c?g=(f=n.__c=t.__c).__=f.__E:("prototype"in T&&T.prototype.render?n.__c=f=new T(w,C):(n.__c=f=new k(w,C),f.constructor=T,f.render=L),x&&x.sub(f),f.props=w,f.state||(f.state={}),f.context=C,f.__n=r,p=f.__d=!0,f.__h=[],f._sb=[]),null==f.__s&&(f.__s=f.state),null!=T.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=v({},f.__s)),v(f.__s,T.getDerivedStateFromProps(w,f.__s))),h=f.props,m=f.state,f.__v=n,p)null==T.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==T.getDerivedStateFromProps&&w!==h&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(w,C),!f.__e&&(null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(w,f.__s,C)||n.__v===t.__v)){for(n.__v!==t.__v&&(f.props=w,f.state=f.__s,f.__d=!1),n.__e=t.__e,n.__k=t.__k,n.__k.forEach((function(e){e&&(e.__=n)})),P=0;P<f._sb.length;P++)f.__h.push(f._sb[P]);f._sb=[],f.__h.length&&u.push(f);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(w,f.__s,C),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(h,m,y)}))}if(f.context=C,f.props=w,f.__P=e,f.__e=!1,S=o.__r,E=0,"prototype"in T&&T.prototype.render){for(f.state=f.__s,f.__d=!1,S&&S(n),s=f.render(f.props,f.state,f.context),M=0;M<f._sb.length;M++)f.__h.push(f._sb[M]);f._sb=[]}else do{f.__d=!1,S&&S(n),s=f.render(f.props,f.state,f.context),f.state=f.__s}while(f.__d&&++E<25);f.state=f.__s,null!=f.getChildContext&&(r=v(v({},r),f.getChildContext())),p||null==f.getSnapshotBeforeUpdate||(y=f.getSnapshotBeforeUpdate(h,m)),H(e,d(O=null!=s&&s.type===b&&null==s.key?s.props.children:s)?O:[O],n,t,r,_,i,u,l,c,a),f.base=n.__e,n.__u&=-161,f.__h.length&&u.push(f),g&&(f.__E=f.__=null)}catch(e){n.__v=null,c||null!=i?(n.__e=l,n.__u|=c?160:32,i[i.indexOf(l)]=null):(n.__e=t.__e,n.__k=t.__k),o.__e(e,n,t)}else null==i&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=j(t.__e,n,t,r,_,i,u,c,a);(s=o.diffed)&&s(n)}function W(e,n,t){for(var r=0;r<t.length;r++)R(t[r],t[++r],t[++r]);o.__c&&o.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){o.__e(e,n.__v)}}))}function j(e,n,t,o,_,i,u,l,c){var a,f,p,v,m,y,g,b=t.props,k=n.props,x=n.type;if("svg"===x&&(_=!0),null!=i)for(a=0;a<i.length;a++)if((m=i[a])&&"setAttribute"in m==!!x&&(x?m.localName===x:3===m.nodeType)){e=m,i[a]=null;break}if(null==e){if(null===x)return document.createTextNode(k);e=_?document.createElementNS("http://www.w3.org/2000/svg",x):document.createElement(x,k.is&&k),i=null,l=!1}if(null===x)b===k||l&&e.data===k||(e.data=k);else{if(i=i&&r.call(e.childNodes),b=t.props||s,!l&&null!=i)for(b={},a=0;a<e.attributes.length;a++)b[(m=e.attributes[a]).name]=m.value;for(a in b)m=b[a],"children"==a||("dangerouslySetInnerHTML"==a?p=m:"key"===a||a in k||N(e,a,null,m,_));for(a in k)m=k[a],"children"==a?v=m:"dangerouslySetInnerHTML"==a?f=m:"value"==a?y=m:"checked"==a?g=m:"key"===a||l&&"function"!=typeof m||b[a]===m||N(e,a,m,b[a],_);if(f)l||p&&(f.__html===p.__html||f.__html===e.innerHTML)||(e.innerHTML=f.__html),n.__k=[];else if(p&&(e.innerHTML=""),H(e,d(v)?v:[v],n,t,o,_&&"foreignObject"!==x,i,u,i?i[0]:t.__k&&w(t,0),l,c),null!=i)for(a=i.length;a--;)null!=i[a]&&h(i[a]);l||(a="value",void 0!==y&&(y!==e[a]||"progress"===x&&!y||"option"===x&&y!==b[a])&&N(e,a,y,b[a],!1),a="checked",void 0!==g&&g!==e[a]&&N(e,a,g,b[a],!1))}return e}function R(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){o.__e(e,t)}}function V(e,n,t){var r,_;if(o.unmount&&o.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||R(r,null,n)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){o.__e(e,n)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(_=0;_<r.length;_++)r[_]&&V(r[_],n,t||"function"!=typeof e.type);t||null==e.__e||h(e.__e),e.__=e.__e=e.__d=void 0}function L(e,n,t){return this.constructor(e,t)}function F(e,n,t){var _,i,u,l;o.__&&o.__(e,n),i=(_="function"==typeof t)?null:t&&t.__k||n.__k,u=[],l=[],D(n,e=(!_&&t||n).__k=m(b,null,[e]),i||s,s,void 0!==n.ownerSVGElement,!_&&t?[t]:i?null:n.firstChild?r.call(n.childNodes):null,u,!_&&t?t:i?i.__e:n.firstChild,_,l),e.__d=void 0,W(u,e,l)}function $(e,n){F(e,n,$)}function z(e,n,t){var o,_,i,u,l=v({},e.props);for(i in e.type&&e.type.defaultProps&&(u=e.type.defaultProps),n)"key"==i?o=n[i]:"ref"==i?_=n[i]:l[i]=void 0===n[i]&&void 0!==u?u[i]:n[i];return arguments.length>2&&(l.children=arguments.length>3?r.call(arguments,2):t),y(e.type,l,o||e.key,_||e.ref,null)}function q(e,n){var t={__c:n="__cC"+a++,__:e,Consumer:function(e,n){return e.children(n)},Provider:function(e){var t,r;return this.getChildContext||(t=[],(r={})[n]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&t.some((function(e){e.__e=!0,P(e)}))},this.sub=function(e){t.push(e);var n=e.componentWillUnmount;e.componentWillUnmount=function(){t.splice(t.indexOf(e),1),n&&n.call(e)}}),e.children}};return t.Provider.__=t.Consumer.contextType=t}r=f.slice,o={__e:function(e,n,t,r){for(var o,_,i;n=n.__;)if((o=n.__c)&&!o.__)try{if((_=o.constructor)&&null!=_.getDerivedStateFromError&&(o.setState(_.getDerivedStateFromError(e)),i=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),i=o.__d),i)return o.__E=o}catch(n){e=n}throw e}},_=0,k.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=v({},this.state),"function"==typeof e&&(e=e(v({},t),this.props)),e&&v(t,e),null!=e&&this.__v&&(n&&this._sb.push(n),P(this))},k.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),P(this))},k.prototype.render=b,i=[],l="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,c=function(e,n){return e.__v.__b-n.__v.__b},S.__r=0,a=0},964:(e,n,t)=>{t.d(n,{I4:()=>S,Me:()=>M,Qb:()=>E,Ye:()=>P,_Y:()=>b,aP:()=>C,bt:()=>w,d4:()=>k,eJ:()=>g,qp:()=>H,sO:()=>x});var r,o,_,i,u=t(882),l=0,c=[],a=[],s=u.YM,f=s.__b,p=s.__r,d=s.diffed,v=s.__c,h=s.unmount,m=s.__;function y(e,n){s.__h&&s.__h(o,e,l||n),l=0;var t=o.__H||(o.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({__V:a}),t.__[e]}function g(e){return l=1,b(D,e)}function b(e,n,t){var _=y(r++,2);if(_.t=e,!_.__c&&(_.__=[t?t(n):D(void 0,n),function(e){var n=_.__N?_.__N[0]:_.__[0],t=_.t(n,e);n!==t&&(_.__N=[t,_.__[1]],_.__c.setState({}))}],_.__c=o,!o.u)){var i=function(e,n,t){if(!_.__c.__H)return!0;var r=_.__c.__H.__.filter((function(e){return!!e.__c}));if(r.every((function(e){return!e.__N})))return!u||u.call(this,e,n,t);var o=!1;return r.forEach((function(e){if(e.__N){var n=e.__[0];e.__=e.__N,e.__N=void 0,n!==e.__[0]&&(o=!0)}})),!(!o&&_.__c.props===e)&&(!u||u.call(this,e,n,t))};o.u=!0;var u=o.shouldComponentUpdate,l=o.componentWillUpdate;o.componentWillUpdate=function(e,n,t){if(this.__e){var r=u;u=void 0,i(e,n,t),u=r}l&&l.call(this,e,n,t)},o.shouldComponentUpdate=i}return _.__N||_.__}function k(e,n){var t=y(r++,3);!s.__s&&U(t.__H,n)&&(t.__=e,t.i=n,o.__H.__h.push(t))}function w(e,n){var t=y(r++,4);!s.__s&&U(t.__H,n)&&(t.__=e,t.i=n,o.__h.push(t))}function x(e){return l=5,P((function(){return{current:e}}),[])}function C(e,n,t){l=6,w((function(){return"function"==typeof e?(e(n()),function(){return e(null)}):e?(e.current=n(),function(){return e.current=null}):void 0}),null==t?t:t.concat(e))}function P(e,n){var t=y(r++,7);return U(t.__H,n)?(t.__V=e(),t.i=n,t.__h=e,t.__V):t.__}function S(e,n){return l=8,P((function(){return e}),n)}function H(e){var n=o.context[e.__c],t=y(r++,9);return t.c=e,n?(null==t.__&&(t.__=!0,n.sub(o)),n.props.value):e.__}function E(e,n){s.useDebugValue&&s.useDebugValue(n?n(e):e)}function M(){var e=y(r++,11);if(!e.__){for(var n=o.__v;null!==n&&!n.__m&&null!==n.__;)n=n.__;var t=n.__m||(n.__m=[0,0]);e.__="P"+t[0]+"-"+t[1]++}return e.__}function O(){for(var e;e=c.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(N),e.__H.__h.forEach(Y),e.__H.__h=[]}catch(n){e.__H.__h=[],s.__e(n,e.__v)}}s.__b=function(e){o=null,f&&f(e)},s.__=function(e,n){e&&n.__k&&n.__k.__m&&(e.__m=n.__k.__m),m&&m(e,n)},s.__r=function(e){p&&p(e),r=0;var n=(o=e.__c).__H;n&&(_===o?(n.__h=[],o.__h=[],n.__.forEach((function(e){e.__N&&(e.__=e.__N),e.__V=a,e.__N=e.i=void 0}))):(n.__h.forEach(N),n.__h.forEach(Y),n.__h=[],r=0)),_=o},s.diffed=function(e){d&&d(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(1!==c.push(n)&&i===s.requestAnimationFrame||((i=s.requestAnimationFrame)||A)(O)),n.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.__V!==a&&(e.__=e.__V),e.i=void 0,e.__V=a}))),_=o=null},s.__c=function(e,n){n.some((function(e){try{e.__h.forEach(N),e.__h=e.__h.filter((function(e){return!e.__||Y(e)}))}catch(t){n.some((function(e){e.__h&&(e.__h=[])})),n=[],s.__e(t,e.__v)}})),v&&v(e,n)},s.unmount=function(e){h&&h(e);var n,t=e.__c;t&&t.__H&&(t.__H.__.forEach((function(e){try{N(e)}catch(e){n=e}})),t.__H=void 0,n&&s.__e(n,t.__v))};var T="function"==typeof requestAnimationFrame;function A(e){var n,t=function(){clearTimeout(r),T&&cancelAnimationFrame(n),setTimeout(e)},r=setTimeout(t,100);T&&(n=requestAnimationFrame(t))}function N(e){var n=o,t=e.__c;"function"==typeof t&&(e.__c=void 0,t()),o=n}function Y(e){var n=o;e.__c=e.__(),o=n}function U(e,n){return!e||e.length!==n.length||n.some((function(n,t){return n!==e[t]}))}function D(e,n){return"function"==typeof n?n(e):n}},476:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,_){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var u=0;u<this.length;u++){var l=this[u][0];null!=l&&(i[l]=!0)}for(var c=0;c<e.length;c++){var a=[].concat(e[c]);r&&i[a[0]]||(void 0!==_&&(void 0===a[5]||(a[1]="@layer".concat(a[5].length>0?" ".concat(a[5]):""," {").concat(a[1],"}")),a[5]=_),t&&(a[2]?(a[1]="@media ".concat(a[2]," {").concat(a[1],"}"),a[2]=t):a[2]=t),o&&(a[4]?(a[1]="@supports (".concat(a[4],") {").concat(a[1],"}"),a[4]=o):a[4]="".concat(o)),n.push(a))}},n}},933:e=>{e.exports=function(e){return e[1]}},892:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var _={},i=[],u=0;u<e.length;u++){var l=e[u],c=r.base?l[0]+r.base:l[0],a=_[c]||0,s="".concat(c," ").concat(a);_[c]=a+1;var f=t(s),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)n[f].references++,n[f].updater(p);else{var d=o(p,r);r.byIndex=u,n.splice(u,0,{identifier:s,updater:d,references:1})}i.push(s)}return i}function o(e,n){var t=n.domAPI(n);t.update(e);return function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var _=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<_.length;i++){var u=t(_[i]);n[u].references--}for(var l=r(e,o),c=0;c<_.length;c++){var a=t(_[c]);0===n[a].references&&(n[a].updater(),n.splice(a,1))}_=l}}},60:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},615:e=>{e.exports=function(e,n){Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])}))}},357:e=>{var n,t=(n=[],function(e,t){return n[e]=t,n.filter(Boolean).join("\n")});function r(e,n,r,o){var _;if(r)_="";else{_="",o.supports&&(_+="@supports (".concat(o.supports,") {")),o.media&&(_+="@media ".concat(o.media," {"));var i=void 0!==o.layer;i&&(_+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),_+=o.css,i&&(_+="}"),o.media&&(_+="}"),o.supports&&(_+="}")}if(e.styleSheet)e.styleSheet.cssText=t(n,_);else{var u=document.createTextNode(_),l=e.childNodes;l[n]&&e.removeChild(l[n]),l.length?e.insertBefore(u,l[n]):e.appendChild(u)}}var o={singleton:null,singletonCounter:0};e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=o.singletonCounter++,t=o.singleton||(o.singleton=e.insertStyleElement(e));return{update:function(e){r(t,n,!1,e)},remove:function(e){r(t,n,!0,e)}}}},11:(e,n,t)=>{t.d(n,{HY:()=>r.HY,tZ:()=>_,BX:()=>_});t(934);var r=t(882);var o=0;Array.isArray;function _(e,n,t,_,i,u){var l,c,a={};for(c in n)"ref"==c?l=n[c]:a[c]=n[c];var s={type:e,props:a,key:t,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--o,__i:-1,__u:0,__source:i,__self:u};if("function"==typeof e&&(l=e.defaultProps))for(c in l)void 0===a[c]&&(a[c]=l[c]);return r.YM.vnode&&r.YM.vnode(s),s}}};