import{c as n}from"../chunks/classes__DJBjVfEyCI.js";import"../chunks/image-params-keymap__LH6wjfp1fd.js";import"../preact.js";import{jsx as r}from"../preact-jsx-runtime.js";const m=1,y=({className:o,fullWidth:e=!1,lines:l=m,size:t="small",variant:s="row",children:i=null,multilineGap:k="medium",...p})=>{const d=[[`dropin-skeleton-row__${s}`,s],[`dropin-skeleton-row__${s}-${t}`,s&&t]];if(!i&&s==="empty")return r("div",{className:n(["dropin-skeleton-row dropin-skeleton-row__empty",o])});if(i){const a=i.trim();return r("div",{...p,class:n(["dropin-skeleton-row",["dropin-skeleton-row--full",e],o]),dangerouslySetInnerHTML:{__html:a}})}return l>m===!1?r("div",{...p,class:n(["dropin-skeleton-row",["dropin-skeleton-row--full",e],"dropin-skeleton--row__content",...d,o])}):r("div",{...p,style:{"--multiline-gap-spacing":`var(--spacing-${k})`},class:n(["dropin-skeleton-row--multiline",["dropin-skeleton-row--full",e],o]),children:Array.from({length:l}).map((a,w)=>r("div",{class:n(["dropin-skeleton-row",["dropin-skeleton-row--full",e],"dropin-skeleton--row__content",...d])},w))})},v=({className:o,children:e,rowGap:l="medium",...t})=>r("div",{style:{"--row-gap-spacing":`var(--spacing-${l})`},...t,className:n(["dropin-skeleton",o]),role:"status","aria-label":"Loading...",children:e});export{v as Skeleton,y as SkeletonRow};
//# sourceMappingURL=Skeleton.js.map
