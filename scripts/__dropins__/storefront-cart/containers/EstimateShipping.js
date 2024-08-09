import{jsxs as I,jsx as e,Fragment as V}from"@dropins/tools/preact-jsx-runtime.js";import{classes as x,VComponent as Z,getFormValues as K}from"@dropins/tools/lib.js";/* empty css                     */import{Price as U,Picker as w,Input as G,Button as $}from"@dropins/tools/components.js";import{useState as p,useEffect as T,useRef as q,useCallback as H}from"@dropins/tools/preact-compat.js";import{useText as j,Text as F}from"@dropins/tools/i18n.js";import{a as X,s as J}from"../chunks/state.js";import{events as B}from"@dropins/tools/event-bus.js";import{g as O,a as Q,b as W}from"../chunks/getEstimateShipping.js";import"../chunks/resetCart.js";import"@dropins/tools/fetch-graphql.js";const Y=()=>{const[b,E]=p(!1),[L,N]=p([]),[_,a]=p("US"),[A,i]=p(""),[P,c]=p(""),[v,m]=p([]),[h,C]=p(!1),[k,l]=p(),[n,r]=p(),[z,t]=p(""),[u,D]=p(!1),o=()=>{a("US"),i(""),c(""),l(null),r(null),t(""),D(!1)},y=async d=>{const{shippingCountry:s,shippingState:g="",shippingZip:S=""}=d,M={countryCode:s,postcode:S,region:{region:g}};return E(!0),W(M).then(f=>(f&&(l({amount:f.amount.value,currency:f.amount.currency,priceIncludingtax:{amount:f.price_incl_tax.value,currency:f.price_incl_tax.currency},priceExcludingtax:{amount:f.price_excl_tax.value,currency:f.price_excl_tax.currency}}),r({carrier_code:f.carrier_code,method_code:f.method_code}),a(s),i(g),c(S),t(g||S||s),D(!0)),a(s),i(g),c(S),t(g||S||s),f)).finally(()=>{E(!1)})},R=d=>{d.preventDefault(),i(""),c("");const s=d.target.value;a(s)};return T(()=>{O().then(d=>{let s="US";const g=d.map(S=>(S.isDefaultCountry&&(s=S.id),{text:S.label,value:S.id}));N(g),a(s)})},[]),T(()=>{C(!0),Q(_).then(d=>{const s=d.map(g=>({text:g.name,value:g.code}));m(s)}).finally(()=>{C(!1)})},[_,C]),{loading:b,regionsLoading:h,estimatedDestinationText:z,countries:L,selectedCountry:_,selectedRegion:A,selectedZip:P,regions:v,estimatedShippingPrice:k,estimatedShippingMethod:n,shippingEstimated:u,handleEstimateShipping:y,handleCountrySelected:R,resetValues:o,setPriceSummaryLoading:E}},ee=({countryField:b,destinationText:E,estimateButton:L,estimated:N,loading:_,onEstimate:a,price:A,priceExcludingTax:i,priceIncludingTax:P,stateField:c,taxExcluded:v,taxIncluded:m,zipField:h})=>{const C=q(null),[k,l]=p(!0),[n,r]=p("zip"),z=j({editZipAction:"Cart.EstimateShipping.editZipAction",destinationLinkAriaLabel:"Cart.EstimateShipping.destinationLinkAriaLabel",shippingLabel:"Cart.EstimateShipping.label",zipPlaceholder:"Cart.EstimateShipping.zipPlaceholder"}),t=o=>{o.preventDefault(),l(y=>!y)},u=o=>{o.preventDefault(),l(!0),r(y=>y==="zip"?"state":"zip")},D=o=>{o.preventDefault(),l(!1);const y=K(C.current);a==null||a(y)};return I("div",{"data-testid":"estimate-shipping",className:x(["cart-estimate-shipping",["cart-estimate-shipping--loading",_]]),children:[e("span",{className:"cart-estimate-shipping__label",children:N?E?I(V,{children:[e(F,{id:"Cart.EstimateShipping.estimatedDestination"}),e("a",{className:"cart-estimate-shippingLink",role:"button",href:"",onClick:t,onKeyDown:o=>{(o.key==="Enter"||o.key===" ")&&t(o)},tabIndex:0,"aria-label":z.destinationLinkAriaLabel,"data-testid":"shipping-destination-link",children:E})]}):e(F,{id:"Cart.EstimateShipping.estimated"}):e(F,{id:"Cart.EstimateShipping.label"})}),e(Z,{node:A,className:"cart-estimate-shipping__price"}),N&&I(V,{children:[e("div",{className:x(["cart-estimate-shipping__caption"]),children:e("a",{href:"#",className:"cart-estimate-shipping__link",onClick:u,"data-testid":"shipping-alternate-field-link",children:n==="zip"?e(F,{id:"Cart.EstimateShipping.alternateField.state"}):e(F,{id:"Cart.EstimateShipping.alternateField.zip"})})}),I("form",{className:x(["cart-estimate-shipping--edit",["cart-estimate-shipping--hide",!k]]),ref:C,"data-testid":"shipping-estimate-form",children:[b&&e(Z,{node:b,className:x(["cart-estimate-shipping--country"])}),n==="state"?c&&e(Z,{node:c,className:x(["cart-estimate-shipping--state"])}):h&&e(Z,{node:h,className:x(["cart-estimate-shipping--zip"])}),L&&e(Z,{node:L,className:x(["cart-estimate-shipping--action"]),onClick:D,type:"submit"})]})]}),m&&e("div",{"data-testid":"shipping-tax-included",className:x(["cart-estimate-shipping__caption"]),children:I("span",{children:[P," ",e(F,{id:"Cart.EstimateShipping.withTaxes"})]})}),v?e("div",{"data-testid":"shipping-tax-included-excluded",className:x(["cart-estimate-shipping__caption"]),children:I("span",{children:[i," ",e(F,{id:"Cart.EstimateShipping.withoutTaxes"})]})}):void 0]})},me=()=>{var z;const[b,E]=p(!1),{loading:L,countries:N,regions:_,selectedCountry:a,estimatedDestinationText:A,estimatedShippingPrice:i,handleCountrySelected:P,handleEstimateShipping:c,regionsLoading:v,selectedRegion:m,selectedZip:h,shippingEstimated:C,resetValues:k}=Y(),l=H(t=>{c(t).then(()=>{X(t)})},[c]);T(()=>{const t=B.on("cart/data",u=>{var d,s;E((u==null?void 0:u.isVirtual)||!1);const D=(s=(d=u==null?void 0:u.addresses)==null?void 0:d.shipping)==null?void 0:s[0];if(!D)return;const{countryCode:o,regionCode:y,zipCode:R}=D;l({shippingCountry:o,shippingState:y,shippingZip:R})},{eager:!0});return()=>{t==null||t.off()}},[]),T(()=>{const t=B.on("cart/updated",()=>{c({shippingCountry:a,shippingState:m,shippingZip:h})});return()=>{t==null||t.off()}},[a,m,h]),T(()=>{const t=B.on("cart/reset",()=>{k(),X(null)});return()=>{t==null||t.off()}},[k]),T(()=>{const t=B.on("cart/merged",()=>{C&&l({shippingCountry:a,shippingState:m,shippingZip:h})});return()=>{t==null||t.off()}},[C,a,m,h,l]);const n=j({applyButton:"Cart.PriceSummary.estimatedShippingForm.apply.label",countryField:"Cart.PriceSummary.estimatedShippingForm.country.placeholder",freeShipping:"Cart.PriceSummary.freeShipping",stateField:"Cart.PriceSummary.estimatedShippingForm.state.placeholder",taxToBeDetermined:"Cart.PriceSummary.taxToBeDetermined",zipField:"Cart.PriceSummary.estimatedShippingForm.zip.placeholder"});if(b)return null;const r=(z=J.config)==null?void 0:z.shoppingCartDisplaySetting;return e(ee,{loading:L,taxIncluded:(r==null?void 0:r.shipping)==="INCLUDING_TAX",taxExcluded:(r==null?void 0:r.shipping)==="INCLUDING_EXCLUDING_TAX",price:(i==null?void 0:i.amount)==0?e("span",{"data-testId":"free-shipping",children:n.freeShipping}):(r==null?void 0:r.shipping)==="INCLUDING_TAX"&&i?e(U,{"data-testid":"shipping",...i.priceIncludingtax}):i?e(U,{...i}):e("span",{children:n.taxToBeDetermined}),estimated:!0,priceExcludingTax:i!=null&&i.priceExcludingtax?e(U,{"data-testid":"shipping-excluding-tax",...i.priceExcludingtax}):e("span",{children:n.taxToBeDetermined}),countryField:e(w,{name:"shippingCountry",placeholder:n.countryField,value:a,variant:"primary",options:N,handleSelect:P,"data-testid":"estimate-shipping-country-selector"}),stateField:_.length>0?e(w,{name:"shippingState",placeholder:n.stateField,variant:"primary",options:_,value:m,"data-testid":"estimate-shipping-state-selector",disabled:v}):e(G,{"aria-label":n.stateField,name:"shippingState",placeholder:n.stateField,variant:"primary",value:m,disabled:v,"data-testid":"estimate-shipping-state-input",maxLength:50}),zipField:e(G,{"aria-label":n.zipField,name:"shippingZip",placeholder:n.zipField,variant:"primary","data-testid":"estimate-shipping-zip-input",value:h,maxLength:12}),estimateButton:e($,{variant:"secondary","data-testid":"estimate-shipping-apply-button","aria-label":n.applyButton,children:n.applyButton}),destinationText:A||n.taxToBeDetermined,onEstimate:l})};export{me as EstimateShipping,me as default};
