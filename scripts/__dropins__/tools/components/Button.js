import{c as x}from"../chunks/classes__DJBjVfEyCI.js";import"../chunks/image-params-keymap__DhvefBR8Rn.js";import"../preact.js";import{jsx as u}from"../preact-jsx-runtime.js";import{V as b}from"../chunks/vcomponent__aWKDz3h7rt.js";import"../chunks/preload-helper__uemlvruIqb.js";import"../preact-hooks.js";import"../i18n.js";const E=({value:B,variant:r="primary",size:N="medium",icon:o,className:f,children:s,disabled:n=!1,active:t=!1,activeChildren:m,activeIcon:$,href:y,...w})=>{let p="dropin-button";(o&&!s||o&&t&&!m||!o&&t&&$)&&(p="dropin-iconButton"),t&&m&&(p="dropin-button"),f=x([p,`${p}--${N}`,`${p}--${r}`,[`${p}--${r}--disabled`,n],s&&o&&`${p}--with-icon`,!s&&m&&o&&`${p}--with-icon`,t&&$&&`${p}--with-icon`,f]);const g=x(["dropin-button-icon",`dropin-button-icon--${r}`,[`dropin-button-icon--${r}--disabled`,n],o==null?void 0:o.props.className]),V=y?{node:u("a",{}),role:"link",href:y,...w,disabled:n,active:t}:{node:u("button",{}),role:"button",...w,value:B,disabled:n,active:t};return u(b,{...V,className:f,children:[o&&!t&&u(b,{node:o,className:g}),$&&t&&u(b,{node:$,className:g}),s&&!t&&(typeof s=="string"?u("span",{children:s}):s),t&&m&&(typeof m=="string"?u("span",{children:m}):m)]})};export{E as Button,E as default};
//# sourceMappingURL=Button.js.map
