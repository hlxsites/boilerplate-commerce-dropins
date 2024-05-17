import{c as s}from"../chunks/classes.js";import"../chunks/image-params-keymap.js";import"../preact.js";import{jsx as r}from"../preact-jsx-runtime.js";import{useText as g}from"../i18n.js";import"../preact-hooks.js";const C=({ariaLabel:i,size:d="small",stroke:l="4",children:e,className:n,style:u,...a})=>{const o=["dropin-progress-spinner",`dropin-progress-spinner--shape-size-${d}`,`dropin-progress-spinner--shape-stroke-${l}`],p=g({updating:"Dropin.ProgressSpinner.updating.label",updatingChildren:"Dropin.ProgressSpinner.updatingChildren.label"}),t=()=>i||(e?p.updatingChildren:p.updating);return e?r("div",{...a,className:s(["dropin-progress-spinner-provider"]),"aria-live":"polite",role:"status",children:[r("div",{"aria-hidden":!0,children:e}),r("div",{"aria-label":t(),role:"status",className:s(["dropin-progress-spinner-background",n]),style:u}),r("div",{className:s(["dropin-progress-spinner-with-provider",...o]),"aria-hidden":!0})]}):r("div",{...a,className:s([n,...o]),"aria-live":"polite",role:"status","aria-label":t()})};export{C as ProgressSpinner,C as default};
//# sourceMappingURL=ProgressSpinner.js.map
