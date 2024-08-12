import{jsx as t,jsxs as c,Fragment as z}from"@dropins/tools/preact-jsx-runtime.js";import{classes as N}from"@dropins/tools/lib.js";import{Fragment as q}from"@dropins/tools/preact.js";import{useState as v,useCallback as p,useEffect as G}from"@dropins/tools/preact-hooks.js";import{u as O}from"../chunks/updateCustomerAddress.js";import{g as J,r as K}from"../chunks/removeCustomerAddress.js";import{C as U,A as P}from"../chunks/AddressForm.js";import{Card as H,Button as x,Tag as $,Icon as Q,Modal as W,ProgressSpinner as X,Header as Y}from"@dropins/tools/components.js";import*as d from"@dropins/tools/preact-compat.js";import{useCallback as j}from"@dropins/tools/preact-compat.js";import{useText as E}from"@dropins/tools/i18n.js";import"@dropins/tools/event-bus.js";import"@dropins/tools/fetch-graphql.js";const D=e=>typeof e=="function",ee=async(e,i)=>{if(i.length===1){const r=i[0],a=Object.values(r.region).every(w=>!!w)?{}:{region:{...r.region,region_id:0}};return!!await O({addressId:r.id,default_shipping:!1,default_billing:!1,...a})}const n=i.filter(r=>r.id!==e&&(r.default_billing||r.default_shipping)||r.id!==e),o=i[i.length-1],s=n[0]||((o==null?void 0:o.id)!==e?o:null);return s?!!await O({addressId:s.id,default_shipping:!0,default_billing:!0}):!1},te=({minifiedView:e,routeAddressesPage:i,onSuccess:n})=>{const[o,s]=v(!1),[l,r]=v(!1),[_,a]=v(!1),[C,w]=v(!1),[b,B]=v(!1),[f,m]=v(""),[h,A]=v([]),g=p(async()=>{a(!0),J().then(k=>{if(e){const Z=k.filter(I=>!!I.default_shipping||!!I.default_billing);A(Z)}else A(k)}).finally(()=>{a(!1)})},[e]);G(()=>{g()},[g]);const F=p(k=>{m(k),B(!1)},[]),R=p(()=>{r(!0)},[]),y=p(()=>{m(""),r(!1),s(!1)},[]),L=p(()=>{s(!0)},[]),T=p(async()=>{w(!0),await ee(f,h),K(+f).then(()=>{g(),y()}).finally(()=>{w(!1)})},[h,f,y,g]),S=p(()=>{B(!1)},[]),M=p(()=>{D(i)&&e&&!b?window.location.href=i():(B(!0),m(""))},[b,i,e]),u=p(async()=>{await g(),await(n==null?void 0:n())},[g,n]);return{submitLoading:C,isModalRendered:o,isFormRendered:l,loading:_,addNewAddress:b,addressesList:h,addressId:f,renderForm:R,renderModal:L,removeAddress:T,closeForm:y,setEditingAddressId:F,closeNewAddressForm:S,redirectToAddressesRoute:M,handleOnSuccess:u}},V=({addressData:e,loading:i,setAddressId:n,renderModal:o,renderForm:s})=>{var a;const l=E({cardLabelShipping:"Account.Addresses.addressesCard.cardLabelShipping",cardLabelBilling:"Account.Addresses.addressesCard.cardLabelBilling",actionRemove:"Account.Addresses.addressesCard.actionRemove",actionEdit:"Account.Addresses.addressesCard.actionEdit"}),r=j(()=>{n==null||n(e==null?void 0:e.id),o==null||o()},[o,e==null?void 0:e.id,n]),_=j(()=>{n==null||n(e==null?void 0:e.id),s==null||s()},[s,e==null?void 0:e.id,n]);return t(H,{variant:"secondary",className:"dropin-address-card","data-testid":"addressCard",children:i?t(U,{}):c(z,{children:[c("div",{className:"dropin-address-card__header",children:[c("p",{children:[e==null?void 0:e.firstname," ",e==null?void 0:e.lastname]}),o?t(x,{variant:"tertiary",onClick:r,"data-testid":"removeButton",children:l.actionRemove}):null,s?t(x,{variant:"tertiary",onClick:_,className:"dropin-address-card__header--editbutton","data-testid":"editButton",children:l.actionEdit}):null]}),c("p",{className:"dropin-address-card__description",children:[t("p",{"data-testid":"renderStreet",children:((a=e==null?void 0:e.street)==null?void 0:a[0])||""}),t("p",{children:`${e==null?void 0:e.city}, ${e==null?void 0:e.postcode}`}),c("p",{children:[e==null?void 0:e.country_code," ",e==null?void 0:e.postcode]})]}),e!=null&&e.default_shipping||e!=null&&e.default_billing?c("div",{className:"dropin-address-card__labels",children:[e!=null&&e.default_shipping?t($,{label:l.cardLabelShipping.toLocaleUpperCase()}):null,e!=null&&e.default_billing?t($,{label:l.cardLabelBilling.toLocaleUpperCase()}):null]}):null]})})},ne=e=>d.createElement("svg",{id:"Icon_Add_Base","data-name":"Icon \\u2013 Add \\u2013 Base",xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},d.createElement("g",{id:"Large"},d.createElement("rect",{id:"Placement_area","data-name":"Placement area",width:24,height:24,fill:"#fff",opacity:0}),d.createElement("g",{id:"Add_icon","data-name":"Add icon",transform:"translate(9.734 9.737)"},d.createElement("line",{vectorEffect:"non-scaling-stroke",id:"Line_579","data-name":"Line 579",y2:12.7,transform:"translate(2.216 -4.087)",fill:"none",stroke:"currentColor"}),d.createElement("line",{vectorEffect:"non-scaling-stroke",id:"Line_580","data-name":"Line 580",x2:12.7,transform:"translate(-4.079 2.263)",fill:"none",stroke:"currentColor"})))),ie=e=>d.createElement("svg",{id:"Icon_Chevron_right_Base","data-name":"Icon \\u2013 Chevron right \\u2013 Base",xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},d.createElement("g",{id:"Large"},d.createElement("rect",{id:"Placement_area","data-name":"Placement area",width:24,height:24,fill:"#fff",opacity:0}),d.createElement("g",{id:"Chevron_right_icon","data-name":"Chevron right icon"},d.createElement("path",{vectorEffect:"non-scaling-stroke",id:"chevron",d:"M199.75,367.5l4.255,-4.255-4.255,-4.255",transform:"translate(-189.25 -351.0)",fill:"none",stroke:"currentColor"})))),oe=({viewAllAddressesText:e,addNewAddress:i,minifiedView:n,className:o,routeAddressesPage:s})=>{const l=E({viewAllAddressesButton:"Account.AddressActions.viewAllAddressesButton",addNewAddressButton:"Account.AddressActions.addNewAddressButton"});return c("button",{className:N(["dropin-actions-address",["dropin-actions-address--viewall",n],["dropin-actions-address--address",!n],o]),"data-testid":"showRouteFullAddress",onClick:s,children:[t("span",{className:"dropin-actions-address--title","data-testid":"addressActionsText",children:n&&!i?e||l.viewAllAddressesButton:l.addNewAddressButton}),t(Q,{source:n&&!i?ie:ne,size:"32"})]})},se=({addressData:e,open:i,submitLoading:n,onRemoveAddress:o,closeModal:s})=>{const l=E({title:"Account.AddressModal.title",description:"Account.AddressModal.description",actionCancel:"Account.AddressModal.actionCancel",actionSave:"Account.AddressModal.actionSave"});return i?c(W,{title:t("h3",{children:l.title}),className:"dropin-address-modal",size:"full","data-testid":"addressModal",showCloseButton:!0,onClose:s,children:[n?t("div",{className:"dropin-address-modal__spinner","data-testid":"progressSpinner",children:t(X,{active:n,stroke:"4",size:"large"})}):null,t("p",{children:l.description}),t(V,{addressData:e}),c("div",{className:"dropin-address-modal__wrapper--buttons",children:[t(x,{type:"button",onClick:s,variant:"secondary",disabled:n,children:l.actionCancel}),t(x,{disabled:n,onClick:o,children:l.actionSave})]})]}):null},le=({isEmpty:e,className:i,children:n,...o})=>{const s=E({emptyListMessage:"Account.EmptyList.emptyListMessage"});return e?c("div",{...o,className:N(["dropin-empty-list",i]),"data-testid":"emptyList",children:[t("svg",{width:"25",height:"25",viewBox:"0 0 256 256",children:t("path",{fill:"#000000",d:"M154.7 142.75a36 36 0 1 0-37.4 0a63.6 63.6 0 0 0-32.5 22.85a4 4 0 0 0 6.4 4.8a56 56 0 0 1 89.6 0a4 4 0 0 0 6.4-4.8a63.65 63.65 0 0 0-32.5-22.85M108 112a28 28 0 1 1 28 28a28 28 0 0 1-28-28m100-84H64a12 12 0 0 0-12 12v28H32a4 4 0 0 0 0 8h20v48H32a4 4 0 0 0 0 8h20v48H32a4 4 0 0 0 0 8h20v28a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12m4 188a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4Z"})}),t("p",{children:s.emptyListMessage})]}):null},_e=({className:e,minifiedView:i,inputsDefaultValueSet:n,newAddressesFormTitle:o,editAddressesFormTitle:s,viewAllAddressesText:l,routeAddressesPage:r,onSuccess:_,onError:a})=>{const C=E({newAddressesFormTitle:"Account.Addresses.newAddressesFormTitle",editAddressesFormTitle:"Account.Addresses.editAddressesFormTitle",settingsAddressTitle:"Account.ContainersTitle.settingsAddressTitle"}),{submitLoading:w,isModalRendered:b,isFormRendered:B,loading:f,addNewAddress:m,addressesList:h,addressId:A,renderForm:g,renderModal:F,removeAddress:R,closeForm:y,handleOnSuccess:L,setEditingAddressId:T,closeNewAddressForm:S,redirectToAddressesRoute:M}=te({minifiedView:i,routeAddressesPage:r,onSuccess:_});return c(z,{children:[i?null:t(Y,{title:C.settingsAddressTitle}),c("div",{className:N(["dropin-addresses",e]),"data-testid":"addressesid",children:[t(se,{addressData:h.find(u=>u.id===A),submitLoading:w,open:b,closeModal:y,onRemoveAddress:R}),f?t(U,{testId:"addressSkeletonLoader",withCard:!1}):t(le,{isEmpty:!h.length}),h.map(u=>t(q,{children:A===u.id&&B?t(H,{variant:"secondary",style:{marginBottom:20},children:t(P,{isOpen:A===u.id&&B,addressFormId:A,inputsDefaultValueSet:u,addressesFormTitle:s||C.editAddressesFormTitle,showShippingCheckBox:!0,showBillingCheckBox:!0,shippingCheckBoxValue:!0,billingCheckBoxValue:!0,closeForm:y,onSuccess:L,onError:a})}):t(V,{addressData:u,loading:f,setAddressId:T,renderModal:F,renderForm:g},u.id)},u.id)),t("div",{className:"dropin-addresses__footer",children:m?t("div",{className:N(["dropin-addresses-form__footer__wrapper",["dropin-addresses-form__footer__wrapper-show",m]]),children:t(H,{variant:"secondary",children:t(P,{isOpen:m,addressesFormTitle:o||C.newAddressesFormTitle,inputsDefaultValueSet:n,showShippingCheckBox:!!h.length,showBillingCheckBox:!!h.length,shippingCheckBoxValue:!0,billingCheckBoxValue:!0,closeForm:S,onSuccess:L,onError:a})})}):t(oe,{minifiedView:i,addNewAddress:m,routeAddressesPage:M,viewAllAddressesText:l})})]})]})};export{_e as Addresses,_e as default};