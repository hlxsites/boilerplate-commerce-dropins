import{cloneElement as f}from"../preact.js";import{c as a}from"../chunks/classes__DJBjVfEyCI.js";import"../chunks/image-params-keymap__DhvefBR8Rn.js";import{jsx as _}from"../preact-jsx-runtime.js";import{useState as g,useCallback as O}from"../preact-hooks.js";import{Children as A}from"../preact-compat.js";import"../chunks/preload-helper__uemlvruIqb.js";import"../i18n.js";const w=({className:e,variant:p="primary",activeOption:u,disabled:t=!1,dividers:c=!0,children:m,handleSelect:i,...l})=>{const[b,r]=g(u),d=O(o=>{t||o.props.disabled||(r(o.props.value),i&&i(o.props.value))},[i,r,t]),v=A.map(m,o=>{const n=t||o.props.disabled,s=o.props.value===b;return f(o,{disabled:n,active:s,onClick:()=>d(o),className:a(["dropin-action-button-group__option",`dropin-action-button-group__option--${p}`,["dropin-action-button-group__option--active",s],["dropin-action-button-group__option--with-dividers",c]])})});return _("div",{role:"group",...l,className:a(["dropin-action-button-group",`dropin-action-button-group--${p}`,e]),children:v})};export{w as ActionButtonGroup};
//# sourceMappingURL=ActionButtonGroup.js.map