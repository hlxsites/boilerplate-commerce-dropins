import{c as n}from"../chunks/classes__DJBjVfEyCI.js";import"../chunks/image-params-keymap__DhvefBR8Rn.js";import"../preact.js";import{jsx as r}from"../preact-jsx-runtime.js";import"../chunks/preload-helper__uemlvruIqb.js";import"../preact-hooks.js";import"../i18n.js";const a=1,L=({className:o,fullWidth:e=!1,lines:t=a,size:l="small",variant:s="row",children:i=null,multilineGap:k="medium",...p})=>{const d=[[`dropin-skeleton-row__${s}`,s],[`dropin-skeleton-row__${s}-${l}`,s&&l]];if(!i&&s==="empty")return r("div",{className:n(["dropin-skeleton-row dropin-skeleton-row__empty",o])});if(i){const m=i.trim();return r("div",{...p,class:n(["dropin-skeleton-row",["dropin-skeleton-row--full",e],o]),dangerouslySetInnerHTML:{__html:m}})}return t>a===!1?r("div",{...p,class:n(["dropin-skeleton-row",["dropin-skeleton-row--full",e],"dropin-skeleton--row__content",...d,o])}):r("div",{...p,style:{"--multiline-gap-spacing":`var(--spacing-${k})`},class:n(["dropin-skeleton-row--multiline",["dropin-skeleton-row--full",e],o]),children:Array.from({length:t}).map((m,w)=>r("div",{class:n(["dropin-skeleton-row",["dropin-skeleton-row--full",e],"dropin-skeleton--row__content",...d])},w))})},S=({className:o,children:e,rowGap:t="medium",...l})=>r("div",{style:{"--row-gap-spacing":`var(--spacing-${t})`},...l,className:n(["dropin-skeleton",o]),role:"status","aria-label":"Loading...",children:e});export{S as Skeleton,L as SkeletonRow};
//# sourceMappingURL=Skeleton.js.map