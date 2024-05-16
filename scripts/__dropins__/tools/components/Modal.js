import{c as t}from"../chunks/classes__DJBjVfEyCI.js";import"../chunks/image-params-keymap__DhvefBR8Rn.js";import"../preact.js";import{jsx as o}from"../preact-jsx-runtime.js";import{useText as w}from"../i18n.js";import"../preact-compat.js";import E from"./Button.js";import L from"../chunks/Close__DQxKl-RcDt.js";import{useCallback as N,useEffect as a}from"../preact-hooks.js";import"../chunks/preload-helper__uemlvruIqb.js";import"../chunks/vcomponent__aWKDz3h7rt.js";const V=({size:m="small",title:l=null,centered:u=!1,backgroundDim:p=!0,clickToDismiss:i=!0,escapeToDismiss:s=!0,onClose:n,showCloseButton:_=!0,className:v,children:f=null,...y})=>{const r=N(()=>{n==null||n()},[n]),h=w({modalCloseLabel:"Dropin.Modal.Close.label"});return a(()=>{const e=d=>{const b=document.querySelector(".dropin-modal"),c=document.querySelector(".dropin-modal__body");i&&b&&c&&!c.contains(d.target)&&r()};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[r,i]),a(()=>{const e=d=>{d.key==="Escape"&&s&&r()};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[r,s]),a(()=>{const e=document.scrollingElement,d=e.style.overflow;return e.style.overflow="hidden",()=>{e.style.overflow=d}},[]),o("div",{className:t(["dropin-modal",["dropin-modal--dim",p]]),children:o("div",{...y,className:t(["dropin-modal__body",[`dropin-modal__body--${m}`,m],v]),children:[o("div",{className:t(["dropin-modal__header",["dropin-modal__header-title",!!l]]),children:[l&&o("div",{className:t(["dropin-modal__header-title-content"]),children:l}),_&&o(E,{"aria-label":h.modalCloseLabel,variant:"tertiary",className:"dropin-modal__header-close-button",onClick:r,icon:o(L,{})})]}),o("div",{className:t(["dropin-modal__content",["dropin-modal__body--centered",u]]),children:f})]})})};export{V as Modal};
//# sourceMappingURL=Modal.js.map