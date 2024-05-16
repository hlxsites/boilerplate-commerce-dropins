import"../preact-compat.js";import j from"../chunks/ChevronDown__BQ2yC5Yu4N.js";import{c as t}from"../chunks/classes__DJBjVfEyCI.js";import"../chunks/image-params-keymap__LH6wjfp1fd.js";import"../preact.js";import{jsx as k}from"../preact-jsx-runtime.js";import{useState as E,useEffect as M,useRef as P}from"../preact-hooks.js";import{Icon as q}from"./Icon.js";import"../chunks/preload-helper__uemlvruIqb.js";const W=({name:x,value:l=null,options:r,variant:C="primary",floatingLabel:c,size:o="medium",handleSelect:w=()=>{},disabled:v=!1,error:y=!1,placeholder:i,defaultOption:e,icon:_,className:D,...n})=>{var $;const N=(n==null?void 0:n.id)||x||`dropin-picker-${Math.random().toString(36)}`,s=r==null?void 0:r.find(d=>!d.disabled),[F,a]=E({value:l,text:(e==null?void 0:e.text)||i||(s==null?void 0:s.text),icon:_});M(()=>{const d=r==null?void 0:r.find(m=>m.value===l);a(d??{value:(e==null?void 0:e.value)||(i||c?null:s==null?void 0:s.value),text:(e==null?void 0:e.text)||i||(s==null?void 0:s.text),icon:_})},[l,r,i,_,e,c]);const I=d=>{const{options:m,value:h}=d.target;for(const p of m)p.selected&&(a({value:h,text:p.text,icon:_}),w(d))},R=r==null?void 0:r.map(d=>{const{value:m,text:h,disabled:p}=d,V=m===F.value;return k("option",{value:m,selected:V,disabled:p,className:t(["dropin-picker__option"]),children:h},m)}),u=P(null),S=!(($=u.current)!=null&&$.selected)||!!e;return k("div",{className:t([D,"dropin-picker",`dropin-picker__${o}`,["dropin-picker__floating",!!c],["dropin-picker__selected",S],["dropin-picker__error",y],["dropin-picker__disabled",v],["dropin-picker__icon",_]]),children:[_&&k(_.type,{..._.props,className:"dropin-picker__icon--placeholder"}),k("select",{id:N,className:t(["dropin-picker__select",`dropin-picker__select--${C}`,`dropin-picker__select--${o}`,["dropin-picker__select--floating",!!c]]),name:x,"aria-label":x,disabled:v,onChange:I,...n,children:[!e&&(c||i)&&k("option",{value:"",ref:u,className:t(["dropin-picker__option dropin-picker__placeholder"]),children:c??i},l),R]}),k(q,{source:j,size:"24",stroke:"2",className:"dropin-picker__chevronDown"}),c&&S&&k("label",{htmlFor:N,className:t(["dropin-picker__floatingLabel",!!c]),children:c})]})};export{W as Picker};
//# sourceMappingURL=Picker.js.map
