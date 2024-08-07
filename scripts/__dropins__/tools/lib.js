import{S as v}from"./chunks/vcomponent.js";import{R as G,V as H,c as U,a as X,d as Y,g as Z}from"./chunks/vcomponent.js";import{C as ee,I as te,i as re}from"./chunks/initializer.js";import{jsx as M}from"./preact-jsx-runtime.js";import{x as P,A as R,h as b,T as E,E as O,q as a,y as D}from"./chunks/icons/Add.js";import{IntlContext as V}from"./i18n.js";import{g as ne,s as se}from"./chunks/image-params-keymap.js";const Q=r=>{const o=new FormData(r);return Object.fromEntries(o)},J=r=>{const o=new FormData(r),c=Object.fromEntries(o);return Object.entries(c).reduce((u,[g])=>{const n=r.elements[g];return n!=null&&n.validationMessage?{...u,[g]:n.validationMessage}:{...u}},{})},K=r=>r.replace("_","-");function j(r,o={},c,h,u){const g=P(v),n=R(null),S=R("pending"),w=R([]),[y,_]=b({children:[h]}),[I,$]=b({}),N=E(()=>({get:t=>I[t],set:(t,e)=>{$({...N,[t]:e})}}),[I]),{intl:B}=P(V);o.dictionary=B.dictionary,o._setProps=t=>{_(e=>{const s=typeof t=="function"?t(e):t;if(u){const i=O(u(e),{key:"render"}),p=e.children.findIndex(d=>(d==null?void 0:d.key)==="render");e.children[p]=i}return s})};const l=a(t=>{typeof t=="function"?w.current.push(t):console.warn("Skipped: Invalid _registerMethod",t)},[]);o._registerMethod=l;const f=a(t=>M("div",{"data-slot-html-element":t.tagName.toLowerCase(),ref:e=>{e==null||e.appendChild(t)}}),[]);o._htmlElementToVNode=f,o.getSlotElement=a(t=>{var s,i;const e=(s=n.current)==null?void 0:s.querySelector(`[data-slot-key="${t}"]`);if(m(`🟦 "${r}" Slot getSlotElement: ${t}`,(i=n.current)==null?void 0:i.cloneNode(!0),e==null?void 0:e.cloneNode(!0)),!!e)return{appendChild:p=>{e.appendChild(p)},prependChild:p=>{e.insertBefore(p,e.firstChild)},appendSibling:p=>{const d=e.parentNode;d==null||d.insertBefore(p,e.nextSibling)},prependSibling:p=>{const d=e.parentNode;d==null||d.insertBefore(p,e)}}},[r]),o.onRender=a(t=>{w.current.push(t)},[]),o.onChange=o.onRender,o.replaceWith=a(t=>{l(e=>{const s=f(t);e._setProps({children:[s]})})},[f,l]),o.appendChild=a(t=>{l(e=>{const s=f(t);e._setProps(i=>({...i,children:[...i.children,s]}))})},[f,l]),o.prependChild=a(t=>{l(e=>{const s=f(t);e._setProps(i=>({...i,children:[s,...i.children]}))})},[f,l]),o.appendSibling=a(t=>{l(()=>{var s,i;const e=(s=n.current)==null?void 0:s.parentNode;e==null||e.insertBefore(t,((i=n.current)==null?void 0:i.nextSibling)??null)})},[l]),o.prependSibling=a(t=>{l(()=>{var s;const e=(s=n.current)==null?void 0:s.parentNode;e==null||e.insertBefore(t,n.current)})},[l]);const C=a(async()=>{if(S.current==="loading")return;S.current="loading",m(`🟨 "${r}" Slot Rendered`);const t=u?O(u(y),{key:"render"}):null;_({children:[t??h]}),w.current.forEach(e=>{e(o,N)}),S.current="ready"},[h,o,r,y,u,N]),L=a(async()=>{if(c)try{S.current="loading",m(`🟩 "${r}" Slot Initialized`),await c(o,n.current)}catch(t){console.error(`Error in "${c.name}" Slot callback`,t)}finally{S.current="ready",await C()}},[c,o,C,r]);return D(()=>{L().finally(()=>{g&&(g.value.delete(r),g.value=new Set(g.value))})},[]),D(()=>{C()},[JSON.stringify(o),JSON.stringify(I)]),[n,y]}function k({name:r,context:o,slot:c,children:h,render:u,...g}){const n=P(v),[S,w]=j(r,o,c,h,u);return E(()=>{if(!r)return console.warn('Slot "name" is required');n&&(n.value.add(r),n.value=new Set(n.value))},[r,n]),M("div",{...g,ref:S,"data-slot":r,children:w.children})}window.DROPINS=window.DROPINS||{};window.DROPINS.showSlots=async r=>{window.sessionStorage.setItem("dropin-debugger--show-slots",r.toString()),document.body.classList.toggle("dropin-debugger--show-slots",r)};let m=()=>{};window.DROPINS.logSlots=async r=>{window.sessionStorage.setItem("dropin-debugger--log-slots",r.toString()),m=r?(...o)=>console.log(...o):()=>{}};window.DROPINS.showSlots(window.sessionStorage.getItem("dropin-debugger--show-slots")==="true");window.DROPINS.logSlots(window.sessionStorage.getItem("dropin-debugger--log-slots")==="true");export{ee as Config,te as Initializer,G as Render,k as Slot,v as SlotQueueContext,H as VComponent,U as classes,X as debounce,Y as deepmerge,Z as generateSrcset,J as getFormErrors,Q as getFormValues,ne as getImageParamsKeyMap,re as initializers,se as setImageParamsKeyMap,K as toLanguageTag,j as useSlot};
