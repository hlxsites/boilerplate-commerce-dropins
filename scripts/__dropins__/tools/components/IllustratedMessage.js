import{c}from"../chunks/classes__DJBjVfEyCI.js";import"../chunks/image-params-keymap__LH6wjfp1fd.js";import"../preact.js";import{jsx as s}from"../preact-jsx-runtime.js";import{V as a}from"../chunks/vcomponent__BjnR-FRhjl.js";import{Card as p}from"./Card.js";const x=({className:i,icon:r,heading:t,headingLevel:e=2,message:o,action:d,variant:m="secondary",...l})=>{const n=e>=1&&e<=6?`h${e}`:"h2";return s("div",{...l,className:c(["dropin-illustrated-message",i]),children:s(p,{variant:m,children:[r&&s(a,{node:r,"aria-hidden":"true",size:"80",className:"dropin-illustrated-message__icon"}),t&&s(n,{className:"dropin-illustrated-message__heading",children:t}),o&&s(a,{node:o,className:"dropin-illustrated-message__message"}),d&&s(a,{node:d,className:"dropin-illustrated-message__action"})]})})};export{x as IllustratedMessage,x as default};
//# sourceMappingURL=IllustratedMessage.js.map
