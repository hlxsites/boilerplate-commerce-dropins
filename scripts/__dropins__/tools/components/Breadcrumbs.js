import{c as l}from"../chunks/classes.js";import"../chunks/image-params-keymap.js";import{Fragment as o}from"../preact.js";import{jsx as m}from"../preact-jsx-runtime.js";import{V as d}from"../chunks/vcomponent.js";const t=({className:s,categories:r,separator:a,...p})=>m(o,{children:(r==null?void 0:r.length)>1&&m("nav",{role:"navigation",...p,className:l(["dropin-breadcrumbs__container",s]),children:m("ul",{className:"dropin-breadcrumbs__items",children:r==null?void 0:r.map((b,n)=>m("li",{className:l(["dropin-breadcrumbs__item",["dropin-breadcrumbs__item--last",n===r.length-1]]),children:[m(d,{node:b,className:"dropin-breadcrumbs__link"}),!a&&n!==r.length-1&&m("span",{className:"dropin-breadcrumbs__separator--default",children:[" ","/"," "]}),a&&n!==r.length-1&&m(d,{node:a,className:"dropin-breadcrumbs__separator--icon"})]},n))})})});export{t as Breadcrumbs,t as default};
//# sourceMappingURL=Breadcrumbs.js.map
