import"../preact-compat.js";import{c as t}from"../chunks/classes__DJBjVfEyCI.js";import"../chunks/image-params-keymap__DhvefBR8Rn.js";import"../preact.js";import{jsx as e}from"../preact-jsx-runtime.js";import{Image as C}from"./Image.js";import{useText as m}from"../i18n.js";import{useCallback as I}from"../preact-hooks.js";import"../chunks/preload-helper__uemlvruIqb.js";const B=({className:s,name:d,value:f,id:w,label:n,groupAriaLabel:o,src:u,alt:b,disabled:p=!1,selected:c=!1,outOfStock:h=!1,multi:g=!1,onValue:i,onUpdateError:r,...$})=>{const _=m("Dropin.Swatches.outOfStock.label").label,y=m("Dropin.Swatches.selected.label").label,k=m("Dropin.Swatches.swatch.label").label,x=I(async a=>{if(i)try{await i(a)}catch(l){r&&r(l)}},[i,r]),S=a=>{const l=a.target;x(l.value)},D=()=>h?`${o}: ${n} ${_}`:c?`${o}: ${n} ${y}`:`${o}: ${n} ${k}`;return e("label",{className:t(["dropin-image-swatch__container",s]),children:[e("input",{type:g?"checkbox":"radio",name:d,id:w,value:f,"aria-label":D(),checked:c,disabled:p,onChange:S,...$,className:t(["dropin-image-swatch",["dropin-image-swatch--selected",c],["dropin-image-swatch--disabled",p],s])}),e("span",{className:t(["dropin-image-swatch__span",["dropin-image-swatch__span--out-of-stock",h],s]),children:e(C,{src:u,className:t(["dropin-image-swatch__content"]),params:{width:100,fit:"bounds",crop:!0},alt:b,loading:"lazy",onError:a=>a.target.style.display="none"})})]})};export{B as ImageSwatch,B as default};
//# sourceMappingURL=ImageSwatch.js.map