import{jsx as t,jsxs as d,Fragment as $}from"@dropins/tools/preact-jsx-runtime.js";import{classes as F}from"@dropins/tools/lib.js";import{Fragment as q}from"@dropins/tools/preact.js";import{useState as w,useCallback as g,useEffect as G}from"@dropins/tools/preact-hooks.js";import"@dropins/tools/event-bus.js";import{g as J,r as K}from"../chunks/removeCustomerAddress.js";import{S as Q,c as U}from"../chunks/checkIsFunction.js";import{u as j}from"../chunks/updateCustomerAddress.js";import{A as z}from"../chunks/AddressForm.js";import{Card as H,Button as R,Icon as W,Modal as X,ProgressSpinner as Y,Header as D}from"@dropins/tools/components.js";import{C as P}from"../chunks/OrdersListCard.js";import*as y from"@dropins/tools/preact-compat.js";import{useCallback as I}from"@dropins/tools/preact-compat.js";import{useText as k}from"@dropins/tools/i18n.js";import"../chunks/addressField.config.js";import"@dropins/tools/fetch-graphql.js";const V=({addressData:e,loading:s,setAddressId:n,renderModal:i,renderForm:o})=>{var c,u,p;const r=k({cardLabelShipping:"Account.Addresses.addressesCard.cardLabelShipping",cardLabelBilling:"Account.Addresses.addressesCard.cardLabelBilling",actionRemove:"Account.Addresses.addressesCard.actionRemove",actionEdit:"Account.Addresses.addressesCard.actionEdit"}),l=I(()=>{n==null||n(e==null?void 0:e.id),i==null||i()},[i,e==null?void 0:e.id,n]),B=I(()=>{n==null||n(e==null?void 0:e.id),o==null||o()},[o,e==null?void 0:e.id,n]);return t(H,{variant:"secondary",className:"dropin-address-card","data-testid":"addressCard",children:s?t(P,{}):d($,{children:[d("div",{className:"dropin-address-card__header",children:[d("p",{children:[e==null?void 0:e.firstname," ",e==null?void 0:e.lastname]}),i?t(R,{variant:"tertiary",onClick:l,"data-testid":"removeButton",children:r.actionRemove}):null,o?t(R,{variant:"tertiary",onClick:B,className:"dropin-address-card__header--editbutton","data-testid":"editButton",children:r.actionEdit}):null]}),d("div",{className:"dropin-address-card__description",children:[(c=e==null?void 0:e.street)==null?void 0:c.map((v,h)=>t("p",{"data-testid":`renderStreet_${h}`,children:v},h)),d("p",{children:[(u=e==null?void 0:e.region)==null?void 0:u.region,", ",(p=e==null?void 0:e.region)==null?void 0:p.region_code]}),d("p",{children:[e==null?void 0:e.country_code," ",e==null?void 0:e.postcode]})]}),d("div",{className:"dropin-address-card__labels",children:[e!=null&&e.default_shipping?t("div",{className:"dropin-address-card__labels--label","data-testid":"defaultShipping",children:r.cardLabelShipping}):null,e!=null&&e.default_billing?t("div",{className:"dropin-address-card__labels--label","data-testid":"defaultBilling",children:r.cardLabelBilling}):null]})]})})},ee=e=>y.createElement("svg",{id:"Icon_Add_Base","data-name":"Icon \\u2013 Add \\u2013 Base",xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},y.createElement("g",{id:"Large"},y.createElement("rect",{id:"Placement_area","data-name":"Placement area",width:24,height:24,fill:"#fff",opacity:0}),y.createElement("g",{id:"Add_icon","data-name":"Add icon",transform:"translate(9.734 9.737)"},y.createElement("line",{vectorEffect:"non-scaling-stroke",id:"Line_579","data-name":"Line 579",y2:12.7,transform:"translate(2.216 -4.087)",fill:"none",stroke:"currentColor"}),y.createElement("line",{vectorEffect:"non-scaling-stroke",id:"Line_580","data-name":"Line 580",x2:12.7,transform:"translate(-4.079 2.263)",fill:"none",stroke:"currentColor"})))),te=({viewAllAddressesText:e,addNewAddress:s,minifiedView:n,className:i,routeAddressesPage:o})=>{const r=k({viewAllAddressesButton:"Account.AddressActions.viewAllAddressesButton",addNewAddressButton:"Account.AddressActions.addNewAddressButton"});return d("button",{className:F(["dropin-actions-address",["dropin-actions-address--viewall",n],["dropin-actions-address--address",!n],i]),"data-testid":"showRouteFullAddress",onClick:o,children:[t("span",{className:"dropin-actions-address--title","data-testid":"addressActionsText",children:n&&!s?e||r.viewAllAddressesButton:r.addNewAddressButton}),t(W,{source:n&&!s?Q:ee,size:"32"})]})},ne=({addressData:e,open:s,submitLoading:n,onRemoveAddress:i,closeModal:o})=>{const r=k({title:"Account.AddressModal.title",description:"Account.AddressModal.description",actionCancel:"Account.AddressModal.actionCancel",actionSave:"Account.AddressModal.actionSave"});return s?d(X,{title:t("h3",{children:r.title}),className:"dropin-address-modal",size:"full","data-testid":"addressModal",showCloseButton:!0,onClose:o,children:[n?t("div",{className:"dropin-address-modal__spinner","data-testid":"progressSpinner",children:t(Y,{active:n,stroke:"4",size:"large"})}):null,t("p",{children:r.description}),t(V,{addressData:e}),d("div",{className:"dropin-address-modal__wrapper--buttons",children:[t(R,{type:"button",onClick:o,variant:"secondary",disabled:n,children:r.actionCancel}),t(R,{disabled:n,onClick:i,children:r.actionSave})]})]}):null},se=({isEmpty:e,className:s,children:n,...i})=>{const o=k({emptyListMessage:"Account.EmptyList.emptyListMessage"});return e?d("div",{...i,className:F(["dropin-empty-list",s]),"data-testid":"emptyList",children:[t("svg",{width:"25",height:"25",viewBox:"0 0 256 256",children:t("path",{fill:"#000000",d:"M154.7 142.75a36 36 0 1 0-37.4 0a63.6 63.6 0 0 0-32.5 22.85a4 4 0 0 0 6.4 4.8a56 56 0 0 1 89.6 0a4 4 0 0 0 6.4-4.8a63.65 63.65 0 0 0-32.5-22.85M108 112a28 28 0 1 1 28 28a28 28 0 0 1-28-28m100-84H64a12 12 0 0 0-12 12v28H32a4 4 0 0 0 0 8h20v48H32a4 4 0 0 0 0 8h20v48H32a4 4 0 0 0 0 8h20v28a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12m4 188a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4Z"})}),t("p",{children:o.emptyListMessage})]}):null},ie=async(e,s)=>{if(s.length===1){const l=s[0],c=Object.values(l.region).every(p=>!!p)?{}:{region:{...l.region,region_id:0}};return!!await j({addressId:l.id,default_shipping:!1,default_billing:!1,...c})}const n=s.filter(l=>l.id!==e&&(l.default_billing||l.default_shipping)||l.id!==e),i=s[s.length-1],o=n[0]||((i==null?void 0:i.id)!==e?i:null);return o?!!await j({addressId:o.id,default_shipping:!0,default_billing:!0}):!1},oe=({minifiedView:e,routeAddressesPage:s,onSuccess:n})=>{const[i,o]=w(!1),[r,l]=w(!1),[B,c]=w(!1),[u,p]=w(!1),[v,h]=w(!1),[_,A]=w(""),[m,C]=w([]),f=g(async()=>{c(!0),J().then(N=>{if(e){const Z=N.filter(O=>!!O.default_shipping||!!O.default_billing);C(Z)}else C(N)}).finally(()=>{c(!1)})},[e]);G(()=>{f()},[f]);const E=g(N=>{A(N),h(!1)},[]),S=g(()=>{l(!0)},[]),b=g(()=>{A(""),l(!1),o(!1)},[]),L=g(()=>{o(!0)},[]),x=g(async()=>{p(!0),await ie(_,m),K(+_).then(()=>{f(),b()}).finally(()=>{p(!1)})},[m,_,b,f]),T=g(()=>{h(!1)},[]),M=g(()=>{U(s)&&e&&!v?window.location.href=s():(h(!0),A(""))},[v,s,e]),a=g(async()=>{await f(),await(n==null?void 0:n())},[f,n]);return{submitLoading:u,isModalRendered:i,isFormRendered:r,loading:B,addNewAddress:v,addressesList:m,addressId:_,renderForm:S,renderModal:L,removeAddress:x,closeForm:b,setEditingAddressId:E,closeNewAddressForm:T,redirectToAddressesRoute:M,handleOnSuccess:a}},we=({className:e,minifiedView:s,inputsDefaultValueSet:n,newAddressesFormTitle:i,editAddressesFormTitle:o,viewAllAddressesText:r,routeAddressesPage:l,onSuccess:B,onError:c})=>{const u=k({newAddressesFormTitle:"Account.Addresses.newAddressesFormTitle",editAddressesFormTitle:"Account.Addresses.editAddressesFormTitle",settingsAddressTitle:"Account.ContainersTitle.settingsAddressTitle"}),{submitLoading:p,isModalRendered:v,isFormRendered:h,loading:_,addNewAddress:A,addressesList:m,addressId:C,renderForm:f,renderModal:E,removeAddress:S,closeForm:b,handleOnSuccess:L,setEditingAddressId:x,closeNewAddressForm:T,redirectToAddressesRoute:M}=oe({minifiedView:s,routeAddressesPage:l,onSuccess:B});return d($,{children:[s?null:t(D,{title:u.settingsAddressTitle}),d("div",{className:F(["dropin-addresses",e]),"data-testid":"addressesid",children:[t(ne,{addressData:m.find(a=>a.id===C),submitLoading:p,open:v,closeModal:b,onRemoveAddress:S}),_?t(P,{testId:"addressSkeletonLoader",withCard:!1}):t(se,{isEmpty:!m.length}),m.map(a=>t(q,{children:C===a.id&&h?t(H,{variant:"secondary",style:{marginBottom:20},children:t(z,{isOpen:C===a.id&&h,addressFormId:C,inputsDefaultValueSet:a,addressesFormTitle:o||u.editAddressesFormTitle,showShippingCheckBox:!0,showBillingCheckBox:!0,shippingCheckBoxValue:!0,billingCheckBoxValue:!0,closeForm:b,onSuccess:L,onError:c})}):t(V,{addressData:a,loading:_,setAddressId:x,renderModal:E,renderForm:f},a.id)},a.id)),t("div",{className:"dropin-addresses__footer",children:A?t("div",{className:F(["dropin-addresses-form__footer__wrapper",["dropin-addresses-form__footer__wrapper-show",A]]),children:t(H,{variant:"secondary",children:t(z,{isOpen:A,addressesFormTitle:i||u.newAddressesFormTitle,inputsDefaultValueSet:n,showShippingCheckBox:!!m.length,showBillingCheckBox:!!m.length,shippingCheckBoxValue:!0,billingCheckBoxValue:!0,closeForm:T,onSuccess:L,onError:c})})}):t(te,{minifiedView:s,addNewAddress:A,routeAddressesPage:M,viewAllAddressesText:r})})]})]})};export{we as Addresses,we as default};
