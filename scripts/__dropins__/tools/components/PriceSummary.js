import"../preact-compat.js";import{c as e}from"../chunks/classes.js";import"../chunks/image-params-keymap.js";import{Fragment as s}from"../preact.js";import{jsx as i}from"../preact-jsx-runtime.js";import{V as n}from"../chunks/vcomponent.js";import{useText as j,Text as t}from"../i18n.js";import G from"../chunks/ChevronDown.js";import Z from"../chunks/ChevronUp.js";import K,{AccordionSection as U}from"./Accordion.js";import{useState as u,useRef as q}from"../preact-hooks.js";import{SkeletonRow as H,Skeleton as J}from"./Skeleton.js";import M from"./Divider.js";import"../chunks/Add.js";import"../chunks/Minus.js";import"./Icon.js";const Q=c=>{const _=new FormData(c);return Object.fromEntries(_)},ui=({className:c,children:_,...y})=>{const{heading:f,loading:k=!0,total:o,subTotal:m,shipping:r,taxTotal:p,taxesApplied:h,discounts:x,primaryAction:b,...v}=y,[w,P]=u(!1),N=q(null),[C,l]=u(!0),[g,F]=u("zip"),D=j({editZipAction:"Dropin.PriceSummary.shipping.editZipAction",destinationLinkAriaLabel:"Dropin.PriceSummary.shipping.destinationLinkAriaLabel",taxesBreakdownTitle:"Dropin.PriceSummary.taxes.breakdown",subtotalLabel:"Dropin.PriceSummary.subTotal.label",shippingLabel:"Dropin.PriceSummary.shipping.label",showTaxBreakdown:"Dropin.PriceSummary.taxes.showBreakdown",hideTaxBreakdown:"Dropin.PriceSummary.taxes.hideBreakdown",zipPlaceholder:"Dropin.PriceSummary.shipping.zipPlaceholder"}),S=a=>{a.preventDefault(),l(d=>!d)},A=a=>{a.preventDefault(),l(!0),F(d=>d==="zip"?"state":"zip")},E=a=>{var T;a.preventDefault(),l(!1);const d=Q(N.current);(T=r==null?void 0:r.onEstimate)==null||T.call(r,d)},z=i(J,{"data-testid":"loading-skeleton",rowGap:"xsmall",children:i(H,{variant:"row",size:"small",lines:5,fullWidth:!0,multilineGap:"xsmall"})}),L=r&&i(s,{children:i("div",{"data-testid":"shipping-content",className:e(["dropin-price-summary__entry","dropin-price-summary__shipping"]),children:[i("span",{className:"dropin-price-summary__label",children:r.estimated?r.destinationText?i(s,{children:[i(t,{id:"Dropin.PriceSummary.shipping.estimatedDestination"}),i("a",{className:"dropin-price-summary__shippingLink",role:"button",href:"",onClick:S,onKeyDown:a=>{(a.key==="Enter"||a.key===" ")&&S(a)},tabIndex:0,"aria-label":D.destinationLinkAriaLabel,"data-testid":"shipping-destination-link",children:r.destinationText})]}):i(t,{id:"Dropin.PriceSummary.shipping.estimated"}):i(t,{id:"Dropin.PriceSummary.shipping.label"})}),i(n,{node:r.price,className:"dropin-price-summary__price"}),r.estimated&&i(s,{children:i("div",{className:e(["dropin-price-summary__caption"]),children:i("a",{href:"#",className:"dropin-price-summary__shippingLink",onClick:A,"data-testid":"shipping-alternate-field-link",children:g==="zip"?i(t,{id:"Dropin.PriceSummary.shipping.alternateField.state"}):i(t,{id:"Dropin.PriceSummary.shipping.alternateField.zip"})})})}),r.estimated&&i(s,{children:i("form",{className:e(["dropin-price-summary__shipping--edit",["dropin-price-summary__shipping--hide",!C]]),ref:N,"data-testid":"shipping-estimate-form",children:[r.countryField&&i(n,{node:r.countryField,className:e(["dropin-price-summary__shipping--country"])}),g==="state"?r.stateField&&i(n,{node:r.stateField,className:e(["dropin-price-summary__shipping--state"])}):r.zipField&&i(n,{node:r.zipField,className:e(["dropin-price-summary__shipping--zip"])}),r.estimateButton&&i(n,{node:r.estimateButton,className:e(["dropin-price-summary__shipping--action"]),onClick:E,type:"submit"})]})}),r.taxIncluded&&i("div",{"data-testid":"shipping-tax-included",className:e(["dropin-price-summary__caption"]),children:i("span",{children:i(t,{id:"Dropin.PriceSummary.shipping.withTaxes"})})}),r.taxExcluded?i("div",{"data-testid":"shipping-tax-included-excluded",className:e(["dropin-price-summary__caption"]),children:i("span",{children:[r.priceExcludingTax," ",i(t,{id:"Dropin.PriceSummary.shipping.withoutTaxes"})]})}):void 0]})}),B=x&&i(s,{children:x.map(a=>i("div",{className:e(["dropin-price-summary__entry","dropin-price-summary__discount"]),children:[i("span",{className:e(["dropin-price-summary__label"]),children:a.label}),i(n,{node:a.price,className:e(["dropin-price-summary__price"])}),a.caption&&i(n,{node:a.caption,className:e(["dropin-price-summary__caption"])})]},a.label))}),W=h?i(s,{children:i(K,{"data-testid":"tax-breakdown",className:"dropin-price-summary__taxes",iconOpen:G,iconClose:Z,children:i(U,{title:D.taxesBreakdownTitle,secondaryText:!w&&p?i(n,{node:p.price,className:"dropin-price-summary__price"}):void 0,renderContentWhenClosed:!1,onStateChange:P,children:[i("div",{className:e(["dropin-price-summary__appliedTaxes"]),children:h.map(a=>i("div",{className:e(["dropin-price-summary__entry","dropin-price-summary__taxEntry"]),children:[i("span",{className:e(["dropin-price-summary__label","dropin-price-summary__label--muted"]),children:a.label}),i(n,{node:a.price,className:e(["dropin-price-summary__price","dropin-price-summary__price--muted"])})]},a.label))}),i("div",{className:e(["dropin-price-summary__entry"]),children:[i("span",{className:"dropin-price-summary__label",children:i(t,{id:"Dropin.PriceSummary.taxes.total"})}),p&&i(n,{node:p.price,className:"dropin-price-summary__price"})]})]})})}):p&&i("div",{"data-testid":"tax-total-only",className:e(["dropin-price-summary__entry","dropin-price-summary__taxTotal"]),children:[i("span",{className:"dropin-price-summary__label",children:p.estimated?i(t,{id:"Dropin.PriceSummary.taxes.estimated"}):i(t,{id:"Dropin.PriceSummary.taxes.totalOnly"})}),i(n,{node:p.price,className:"dropin-price-summary__price"})]}),I=o&&i(s,{children:i("div",{"data-testid":"total-content",className:e(["dropin-price-summary__entry","dropin-price-summary__total",o.estimated&&"dropin-price-summary__total--padded"]),children:[i("span",{className:e(["dropin-price-summary__label","dropin-price-summary__label--bold"]),children:o.estimated?i(t,{id:"Dropin.PriceSummary.total.estimated"}):i(t,{id:"Dropin.PriceSummary.total.label"})}),i(n,{node:o.price,className:e(["dropin-price-summary__price","dropin-price-summary__price--bold"])})]})}),O=o&&o.priceWithoutTax&&i("div",{"data-testid":"total-without-tax",className:"dropin-price-summary__entry dropin-price-summary__totalWithoutTax",children:[i("span",{className:e(["dropin-price-summary__label","dropin-price-summary__label--muted"]),children:i(t,{id:"Dropin.PriceSummary.total.withoutTax"})}),i(n,{node:o.priceWithoutTax,className:e(["dropin-price-summary__price","dropin-price-summary__price--muted"])})]}),R=b&&i("div",{className:e(["dropin-price-summary__entry","dropin-price-summary__primaryAction"]),children:b}),V=m&&i("div",{className:e(["dropin-price-summary__entry","dropin-price-summary__subTotal"]),children:[i("span",{className:"dropin-price-summary__label",children:i(t,{id:"Dropin.PriceSummary.subTotal.label"})}),i(n,{node:m.price,className:"dropin-price-summary__price"}),m.taxIncluded&&i("div",{"data-testid":"sub-total-tax-caption",className:e(["dropin-price-summary__caption"]),children:i("span",{children:i(t,{id:"Dropin.PriceSummary.subTotal.withTaxes"})})}),m.taxExcluded?i("div",{"data-testid":"sub-total-tax-caption-excluded",className:e(["dropin-price-summary__caption"]),children:i("span",{children:[m.priceExcludingTax," ",i(t,{id:"Dropin.PriceSummary.subTotal.withoutTaxes"})]})}):void 0]});return i("div",{...v,className:e(["dropin-price-summary",c]),children:[i("div",{className:"dropin-price-summary__heading",children:f}),i(M,{variant:"primary",className:"dropin-price-summary__divider-primary"}),k?z:i(s,{children:[V,L,B,W,I,O,R]})]})};export{ui as PriceSummary,ui as default};
//# sourceMappingURL=PriceSummary.js.map
