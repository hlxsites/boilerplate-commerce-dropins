import{c as n}from"../chunks/classes__DJBjVfEyCI.js";import"../chunks/image-params-keymap__DhvefBR8Rn.js";import"../preact.js";import{jsx as r}from"../preact-jsx-runtime.js";import{V as i}from"../chunks/vcomponent__aWKDz3h7rt.js";import"../preact-compat.js";import c from"../chunks/Close__DQxKl-RcDt.js";import{useText as b}from"../i18n.js";import o from"./Button.js";import{Icon as _}from"./Icon.js";import"../chunks/preload-helper__uemlvruIqb.js";import"../preact-hooks.js";const I=({className:s,variant:t,icon:e,message:l,onDismiss:m,action:a,...d})=>{const p=b({dismiss:"Dropin.InlineAlert.dismissLabel"});return r("div",{...d,className:n([s,"dropin-alert-banner",`dropin-alert-banner--${t}`]),children:[r("div",{className:"dropin-alert-banner__content",children:[e&&r(i,{node:e,"aria-hidden":"true",className:"dropin-alert-banner__icon"}),r(i,{node:l,className:n(["dropin-alert-banner__message"])})]}),r("div",{className:"dropin-alert-banner__actions",children:[a&&r(o,{variant:"tertiary",className:"dropin-alert-banner__action",onClick:a.onClick,"aria-label":a.label,children:a.label}),r(o,{icon:r(_,{source:c,size:"24",stroke:"2"}),className:"dropin-alert-banner__dismiss-button",variant:"primary",onClick:m,"aria-label":p.dismiss})]})]})};export{I as AlertBanner,I as default};
//# sourceMappingURL=AlertBanner.js.map