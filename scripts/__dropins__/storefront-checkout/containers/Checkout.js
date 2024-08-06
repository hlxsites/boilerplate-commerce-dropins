import{jsx as r,jsxs as f,Fragment as z}from"@dropins/tools/preact-jsx-runtime.js";import{o as G,n as J,m as _,k as Q,U as W}from"../chunks/fixtures.js";import"@dropins/tools/event-bus.js";import{a as X}from"../chunks/getCustomer.js";import{p as Y}from"../chunks/placeOrder2.js";import{C as u}from"../chunks/ToggleButton.js";import"@dropins/tools/preact-hooks.js";import{Slot as d,classes as m}from"@dropins/tools/lib.js";import{Divider as H,IllustratedMessage as y,Icon as M,Button as b}from"@dropins/tools/components.js";/* empty css                             */import{useText as v,MarkupText as D}from"@dropins/tools/i18n.js";import{O as rr,S as er}from"../chunks/OutOfStock.js";import{B as tr}from"../chunks/BillingForm.js";import{B as ir}from"../chunks/BillToShippingAddress2.js";import*as s from"@dropins/tools/preact-compat.js";import{useState as g,useCallback as or}from"@dropins/tools/preact-compat.js";import{L as nr}from"../chunks/LoginForm.js";import{P as cr}from"../chunks/ToggleButton2.js";import{P as ar}from"../chunks/PlaceOrder.js";import{S as sr}from"../chunks/ShippingForm.js";import{S as mr}from"../chunks/ShippingMethods.js";import"@dropins/tools/preact.js";import"@dropins/tools/fetch-graphql.js";import"../chunks/getCart.graphql.js";import"../chunks/getMultilineValues.js";import"../chunks/ErrorBanner.js";import"../chunks/MergedCartBanner.js";import"../chunks/setBillingAddress.js";import"../chunks/setShippingAddress.js";import"../chunks/constants2.js";import"../chunks/setGuestEmailOnCart.js";import"../chunks/constants3.js";import"../chunks/setPaymentMethod.js";import"../chunks/constants.js";import"../chunks/setShippingMethods.js";const pr=c=>s.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...c},s.createElement("g",{clipPath:"url(#clip0_102_196)"},s.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M18.3601 18.16H6.5601L4.8801 3H2.3501M19.6701 19.59C19.6701 20.3687 19.0388 21 18.2601 21C17.4814 21 16.8501 20.3687 16.8501 19.59C16.8501 18.8113 17.4814 18.18 18.2601 18.18C19.0388 18.18 19.6701 18.8113 19.6701 19.59ZM7.42986 19.59C7.42986 20.3687 6.79858 21 6.01986 21C5.24114 21 4.60986 20.3687 4.60986 19.59C4.60986 18.8113 5.24114 18.18 6.01986 18.18C6.79858 18.18 7.42986 18.8113 7.42986 19.59Z",stroke:"currentColor",strokeLinejoin:"round"}),s.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M5.25 6.37L20.89 8.06L20.14 14.8H6.19",stroke:"currentColor",strokeLinejoin:"round"})),s.createElement("defs",null,s.createElement("clipPath",{id:"clip0_102_196"},s.createElement("rect",{vectorEffect:"non-scaling-stroke",width:19.29,height:19.5,fill:"white",transform:"translate(2.3501 2.25)"})))),Jr="OUT_OF_STOCK",Qr=({className:c,slots:e,routeHome:t,onCartProductsUpdate:p,onCheckoutDataUpdate:a,preselectedCartData:i,onSignInClick:O,onSignOutClick:h,...T})=>{const B=G.authenticated,[P,x]=g(!1),[k,S]=g(""),F=k!=="",[L,w]=g(),{data:o,pending:A}=J.value,l=!!(o!=null&&o.isVirtual),N=o===null||(o==null?void 0:o.isEmpty),{data:E,pending:U}=_.value,j=A&&B&&!E,I=v({CheckoutUnexpectedError:"Checkout.ServerError.unexpected"}),V=or(async()=>{o&&(await Y(),x(!0))},[o]),$=n=>{w(()=>n)},K=async()=>{S(""),o&&X()},C=n=>{const q=n instanceof TypeError||n instanceof W?I.CheckoutUnexpectedError:n.message;S(q)};if(P)return null;if(N)return r(dr,{routeHome:t});if(F)return r(lr,{errorMessage:k,onClick:K});const R=()=>{const n=Q.value.checked?"checkout-billing-form__hidden":"checkout-billing-form__visible";return r(u.Main,{sections:{outOfStock:r(rr,{routeCart:t,onCartProductsUpdate:p}),billingAddress:f(z,{children:[r(d,{name:"BillingForm",className:n,slot:e==null?void 0:e.BillingForm,children:r(tr,{})}),r(H,{className:m([`${n}`,"checkout-billing-form__divider"]),variant:"primary"})]}),billToShippingAddress:l?void 0:r(ir,{},`bill-to-shipping-address${E?"-customer":""}`),login:r(d,{name:"Login",slot:e==null?void 0:e.Login,children:r(nr,{onSignInClick:O,onSignOutClick:()=>{h==null||h(),_.value.pending=!0}})}),paymentMethods:r(cr,{isShippingInfoRequired:!l,onPlaceOrder:$,handleServerError:C,paymentMethodsSlot:e==null?void 0:e.PaymentMethods}),placeOrder:r(ar,{onClick:L??V,handleServerError:C}),shippingAddress:l?void 0:r(d,{name:"ShippingForm",slot:e==null?void 0:e.ShippingForm,children:r(sr,{onCheckoutDataUpdate:a,preselectedFields:i==null?void 0:i.address})}),shippingMethods:l?void 0:r(d,{name:"ShippingMethods",slot:e==null?void 0:e.ShippingMethods,children:r(mr,{onCheckoutDataUpdate:a,preSelectedMethod:i==null?void 0:i.shippingMethod})})}})},Z=()=>r(u.Aside,{sections:{orderSummary:r(d,{name:"OrderSummary",slot:e==null?void 0:e.OrderSummary})}});return f(u,{className:c,isLoading:j||U,...T,children:[R(),Z()]})},dr=({className:c,title:e,routeHome:t,...p})=>{const a=v({Title:"Checkout.EmptyCart.title",Button:"Checkout.EmptyCart.button"});return r(y,{...p,"data-testid":"checkout-empty-cart",className:m(["checkout-empty-cart",c]),heading:e??a.Title,icon:r(M,{className:m(["checkout-empty-cart__icon"]),source:pr}),action:t!=null&&t()?r(b,{className:"checkout-empty-cart__button",size:"medium",variant:"primary",type:"submit",href:t==null?void 0:t(),children:a.Button},"routeHome"):void 0})},lr=({className:c,errorMessage:e,contactSupport:t,...p})=>{const{onClick:a}=p,i=v({Title:"Checkout.ServerError.title",Message:"Checkout.ServerError.message",ContactSupport:"Checkout.ServerError.contactSupport",Button:"Checkout.ServerError.button"});return r(y,{"aria-invalid":"true","aria-describedby":"checkout-server-error__message","aria-live":"polite",className:m(["checkout-server-error",c]),"data-testid":"checkout-server-error",heading:e??i.Title,message:f("p",{id:m(["checkout-server-error__message"]),children:[i.Message,r("br",{}),r(D,{id:"",children:t??i.ContactSupport})]}),icon:r(M,{className:m(["checkout-server-error__icon"]),source:er}),action:r(b,{className:m(["checkout-server-error__button"]),onClick:a,children:i.Button})})};export{Qr as Checkout,Jr as OUT_OF_STOCK,Qr as default};
