import"../preact-compat.js";import{c as i}from"../chunks/classes.js";import"../chunks/image-params-keymap.js";import{Fragment as _}from"../preact.js";import{jsx as r}from"../preact-jsx-runtime.js";import{Price as d}from"./Price.js";import{useText as D}from"../i18n.js";import{useMemo as b}from"../preact-hooks.js";const M=({className:p,children:l,locale:t,currency:a,amount:e,variant:o="default",minimumAmount:n,maximumAmount:s,size:f="small",display:h="dash",specialPrice:c,sale:g=!1,...w})=>{const R=b(()=>e||n===s||n&&!s||s&&!n,[e,s,n]);return r("div",{children:R?r("div",{...w,className:i(["dropin-price-range",p]),children:r(d,{amount:e??n??s,currency:a,locale:t,size:f,variant:o,sale:g})}):r("div",{...w,className:i(["dropin-price-range",p]),children:[h==="dash"?r(N,{specialPrice:c,minimumAmount:n,maximumAmount:s,currency:a,locale:t,size:f,sale:g}):null,h==="from to"?r(v,{specialPrice:c,minimumAmount:n,maximumAmount:s,currency:a,locale:t,size:f,sale:g}):null,h==="as low as"?r(L,{specialPrice:c,minimumAmount:n,maximumAmount:s,currency:a,locale:t,size:f,sale:g}):null]})})};function N({specialPrice:p,minimumAmount:l,maximumAmount:t,currency:a,locale:e,size:o,sale:n}){return r(_,{children:[r(d,{amount:p??l,currency:a,locale:e,size:o,sale:!!p&&n}),r("span",{className:"dropin-price-range__separator",children:"-"}),r(d,{amount:t,currency:a,locale:e,size:o})]})}function v({specialPrice:p,minimumAmount:l,maximumAmount:t,currency:a,locale:e,size:o,sale:n}){const s=D({from:"Dropin.PriceRange.from.label",to:"Dropin.PriceRange.to.label",asLowAs:"Dropin.PriceRange.asLowAs.label"});return r(_,{children:[r("span",{className:i(["dropin-price-range__from",`dropin-price-range__from--${o}`]),children:s.from}),r(d,{amount:p??l,currency:a,locale:e,size:o,sale:!!p&&n}),r("span",{className:i(["dropin-price-range__to",`dropin-price-range__to--${o}`]),children:s.to}),r(d,{amount:t,currency:a,locale:e,size:o})]})}function L({specialPrice:p,minimumAmount:l,maximumAmount:t,currency:a,locale:e,size:o,sale:n}){const s=D({from:"Dropin.PriceRange.from.label",to:"Dropin.PriceRange.to.label",asLowAs:"Dropin.PriceRange.asLowAs.label"});return r(_,{children:[r("span",{className:i(["dropin-price-range__as-low-as",`dropin-price-range__as-low-as--${o}`]),children:s.asLowAs}),p?r("div",{children:[r(d,{amount:t,currency:a,locale:e,size:o,variant:"strikethrough"}),r(d,{amount:p,currency:a,locale:e,size:o,className:"dropin-price-range__special",sale:!!p&&n})]}):r(d,{amount:l,currency:a,locale:e,size:o})]})}export{M as PriceRange,M as default};
//# sourceMappingURL=PriceRange.js.map
