import*as t from"@dropins/tools/event-bus.js";import*as e from"@dropins/tools/fetch-graphql.js";export const id=6060;export const ids=[6060];export const modules={2216:(t,e,r)=>{r.d(e,{_:()=>y});var o=r(5536),n=r.n(o),s=r(7008),a=r.n(s),i=r(1496),d=r.n(i),l=r(9356),c=r.n(l),p=r(9904),m=r.n(p),u=r(7696),f={attributes:{"data-dropin":"storefront-checkout","data-sdk":"0.22.0-alpha1"}};f.styleTagTransform=function(t,e){setTimeout((()=>{window.window._loadedStyles=window.window._loadedStyles??{};const{core:r,sdk:o}=function(t,e){const r=t?.match(/^\.dropin-(\w+)/)?.[1],o=e.getAttribute("data-sdk");return{core:r,sdk:o}}(t,e),n=r?`sdk/${r}`:e.getAttribute("data-dropin");!function(t,e){t.setAttribute("data-dropin",e),t.removeAttribute("data-sdk")}(e,n);const s=window._loadedStyles[n];s?function(t,e,r,o){const n=function(t,e){const r=t=>{const[e,r]=t.split("-"),[o,n,s]=e.split(".").map(Number),a=r?r.match(/(alpha|beta)(\d*)/):null;return{major:o,minor:n,patch:s,preType:a?a[1]:"",preNumber:a?parseInt(a[2],10):0}},o=r(t),n=r(e);if(o.major!==n.major)return o.major>n.major?t:e;if(o.minor!==n.minor)return o.minor>n.minor?t:e;if(o.patch!==n.patch)return o.patch>n.patch?t:e;if(o.preType&&n.preType)return o.preType===n.preType?o.preNumber>n.preNumber?t:e:"beta"===o.preType?e:t;return o.preType?e:t}(r,o.sdk);if(!o.core||o.core&&n===o.sdk){const e=o.style.textContent;o.style.textContent=`${e}\n/* --- MERGED --- */\n${t}`}else o.core&&n!==o.sdk&&(o.style.textContent=`/* --- UPGRADED --- */\n${t}`);e.remove()}(t,e,o,s):(function(t,e,r,o,n){e.textContent=t,window._loadedStyles[n]={sdk:o,core:r,style:e}}(t,e,r,o,n),function(t,e){const r=document.querySelector("head"),{lastDropinStyleInjected:o,lastSDKStyleInjected:n}=window._loadedStyles;e?(n?r.insertBefore(t,n.nextSibling):r.insertBefore(t,r.firstChild),window._loadedStyles.lastSDKStyleInjected=t):(o?r.insertBefore(t,o.nextSibling):n?r.insertBefore(t,n.nextSibling):r.insertBefore(t,r.firstChild),window._loadedStyles.lastDropinStyleInjected=t)}(e,r))}),0)},f.setAttributes=c(),f.insert=d().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=m();n()(u.c,f);u.c&&u.c.locals&&u.c.locals;var h=r(8412),y=t=>{var{className:e,children:r,level:o=2}=t,n=o>=1&&o<=6?"h".concat(o):"h2";return(0,h.im)(n,{className:e,children:r})}},3204:(t,e,r)=>{r.d(e,{U:()=>o.U,c:()=>o.U});var o=r(3100)},7696:(t,e,r)=>{r.d(e,{c:()=>i});var o=r(6008),n=r.n(o),s=r(2076),a=r.n(s)()(n());a.push([t.id,"\n",""]);const i=a},8122:(e,r,o)=>{e.exports=(t=>{var e={};return o.d(e,t),e})({events:()=>t.events})},8616:(t,r,o)=>{t.exports=(t=>{var e={};return o.d(e,t),e})({FetchGraphQL:()=>e.FetchGraphQL})}};import r from"../runtime.js";import*as o from"../8412.js";r.C(o);import*as n from"../2892.js";r.C(n);import*as s from"../4928.js";r.C(s);import*as a from"../8256.js";r.C(a);import*as i from"../1184.js";r.C(i);import*as d from"../8668.js";r.C(d);import*as l from"../5068.js";r.C(l);import*as c from"../3100.js";r.C(c);import*as p from"./PaymentMethods.js";r.C(p);var m,u=(m=3204,r(r.s=m)),f=u.U,h=u.c;export{f as PaymentMethods,h as default};