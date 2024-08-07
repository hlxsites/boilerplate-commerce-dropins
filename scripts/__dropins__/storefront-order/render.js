(function(a,t){try{if(typeof document<"u"){const e=document.createElement("style"),n=t.styleId;for(const r in t.attributes)e.setAttribute(r,t.attributes[r]);e.setAttribute("data-dropin",n),e.appendChild(document.createTextNode(a));const o=document.querySelector('style[data-dropin="sdk"]');if(o)o.after(e);else{const r=document.querySelector('link[rel="stylesheet"], style');r?r.before(e):document.head.append(e)}}}catch(e){console.error("dropin-styles (injectCodeFunction)",e)}})('.dropin-order-search-form{gap:var(--spacing-small)}.dropin-order-search-form p{color:var(--color-neutral-700);font:var(--type-body-2-default-font);letter-spacing:var(--type-body-2-default-letter-spacing);margin:0}.dropin-order-search-form__title{color:var(--color-neutral-800);font:var(--type-headline-2-strong-font);letter-spacing:var(--type-headline-2-strong-letter-spacing);margin:0}.dropin-order-search-form__wrapper{display:grid;grid-template-columns:1fr;grid-template-rows:auto;grid-template-areas:"email" "postcode" "number" "button";gap:var(--spacing-medium)}.dropin-order-search-form__wrapper__item--email{grid-area:email}.dropin-order-search-form__wrapper__item--postcode{grid-area:postcode}.dropin-order-search-form__wrapper__item--number{grid-area:number}.dropin-order-search-form__button-container{display:flex;justify-content:flex-end;grid-area:button}.dropin-order-search-form form button{align-self:flex-end;justify-self:flex-end;margin-top:var(--spacing-small)}@media (min-width: 768px){.dropin-order-search-form__wrapper{grid-template-columns:1fr 1fr;grid-template-rows:auto auto auto;grid-template-areas:"email postcode" "number number" "button button"}}',{styleId:"order"});
import{jsx as e}from"@dropins/tools/preact-jsx-runtime.js";import{Render as d}from"@dropins/tools/lib.js";import{useState as a,useEffect as s}from"@dropins/tools/preact-hooks.js";import{UIProvider as m}from"@dropins/tools/components.js";import{events as u}from"@dropins/tools/event-bus.js";const c={OrderSearchForm:{title:"Enter your information to view order details",description:"You can find your order number in the receipt you received via email.",button:"View Order",email:"Email",postcode:"Zip Code",orderNumber:"Order Number"},Form:{notifications:{requiredFieldError:"This is a required field."}},Errors:{invalidOrder:"Invalid order. Please try again.",invalidSearch:"No order found with these order details.",unknown:"Something went wrong. Please try again."}},f={Order:c},l={default:f},p=({children:o})=>{const[i,n]=a("en_US");return s(()=>{const r=u.on("locale",t=>{n(t)},{eager:!0});return()=>{r==null||r.off()}},[]),e(m,{lang:i,langDefinitions:l,children:o})},S=new d(e(p,{}));export{S as render};
