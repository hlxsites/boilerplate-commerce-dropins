import{c as K,d as Q}from"../chunks/guestOrderByToken__BiIPO-pQFP.js";import{useState as J,useEffect as X}from"@dropins/tools/preact-hooks.js";import{jsx as r,jsxs as d,Fragment as k}from"@dropins/tools/preact-jsx-runtime.js";import{Icon as F,Skeleton as O,SkeletonRow as s,Button as w,Card as L,Field as R,Input as z,Price as v,Divider as I,CartItem as Y,Image as A}from"@dropins/tools/components/index.js";import*as h from"@dropins/tools/preact-compat.js";import{useReducer as rr,useCallback as M,useEffect as er}from"@dropins/tools/preact-compat.js";import{Text as m,useText as V}from"@dropins/tools/i18n.js";import{c as p}from"../chunks/classes__DJBjVfEyCI.js";import"@dropins/tools/fetch-graphql.js";const nr=n=>{const e=new FormData(n);return Object.fromEntries(e)};var C=(n=>(n.ADD_ORDER_REFERENCE="ADD_ORDER_REFERENCE",n.LOADING="LOADING",n.SET_DETAILS="SET_DETAILS",n.ALERT="ALERT",n.DISMISS_ALERT="DISMISS_ALERT",n))(C||{}),W=(n=>(n.ERROR="error",n.WARNING="warning",n.SUCCESS="success",n))(W||{}),S=(n=>(n.INVALID_ORDER="invalid_order",n.INVALID_SEARCH="invalid_search",n.UNKNOWN="unknown_error",n))(S||{});function ar(n,e){switch(e.type){case"LOADING":return{...n,isLoading:!0};case"SET_DETAILS":return{...n,isLoading:!1,details:e.details,alert:e.alert};case"ALERT":return{...n,isLoading:!1,alert:e.alert};case"DISMISS_ALERT":return{...n,alert:void 0};default:return n}}const ir=()=>{const n=()=>window.innerWidth>=1920?"xxlarge":window.innerWidth>=1366?"xlarge":window.innerWidth>=1024?"large":window.innerWidth>=768?"medium":"small",[e,a]=J(n());return X(()=>{let i;const o=()=>{i&&clearTimeout(i),i=setTimeout(()=>a(n()),50)};return window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o),i&&clearTimeout(i)}},[]),e},U=({children:n,className:e})=>ir()!=="small"?r("div",{className:e,children:n}):r(k,{children:n});function tr(n){const e=n==null?void 0:n.total;if(!e)return;const a=e==null?void 0:e.grand_total,i=e==null?void 0:e.subtotal,o=e==null?void 0:e.total_shipping,t=e==null?void 0:e.total_tax;return{total:{inclTax:{amount:(a==null?void 0:a.value)||0,currency:(a==null?void 0:a.currency)||""}},subtotal:{amount:(i==null?void 0:i.value)||0,currency:(i==null?void 0:i.currency)||"",isTaxIncl:!1},shipping:{amount:(o==null?void 0:o.value)||0,currency:(o==null?void 0:o.currency)||""},tax:{amount:(t==null?void 0:t.value)||0,currency:(t==null?void 0:t.currency)||""}}}const or=({state:n})=>{const{isLoading:e,details:a}=n,i=tr(a);return d(k,{children:[r(Or,{isLoading:e,summary:i}),r(Ir,{isLoading:e,details:a})]})},cr=({state:n})=>r(U,{className:"order-confirmation__aside",children:r(or,{state:n})}),dr=({state:n,routeHome:e,routeSupport:a})=>{const{details:i,isLoading:o}=n,t=i==null?void 0:i.billing_address,l=(t==null?void 0:t.firstname)||"",c=(i==null?void 0:i.number)||"",_=(i==null?void 0:i.status)||"";return d(k,{children:[(o||!o&&(!!l&&!!c))&&r(fr,{isLoading:o,customerName:l,orderNumber:c,orderStatus:_}),r(gr,{isLoading:o,orderDetails:i}),r(kr,{isLoading:o,routeHome:e,routeSupport:a})]})},sr=({state:n,routeHome:e,routeSupport:a,dismissAlert:i,onOrderSearch:o})=>r(U,{className:"order-confirmation__main",children:r(dr,{state:n,routeHome:e,routeSupport:a,dismissAlert:i,onOrderSearch:o})}),mr=({className:n,state:e,dismissAlert:a,routeHome:i,routeSupport:o,onOrderSearch:t})=>{const{details:l,alert:c,isLoading:_}=e,f=!!(l!=null&&l.number),u=c&&c.code===S.INVALID_ORDER,y=c&&c.code===S.INVALID_SEARCH;return!_&&!f?r("div",{className:p(["order-confirmation",n]),children:r(vr,{alert:u||y?{heading:c.message,description:"",type:c.type,onDismiss:a}:void 0,onOrderSearch:t})}):d("div",{className:p(["order-confirmation",n]),children:[r(sr,{state:e,dismissAlert:a,routeHome:i,routeSupport:o,onOrderSearch:t}),r(cr,{state:e})]})},lr=n=>h.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},h.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M18.3599 5.64001L5.62988 18.37",stroke:"currentColor"}),h.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M18.3599 18.37L5.62988 5.64001",stroke:"currentColor"})),ur=n=>h.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},h.createElement("g",{clipPath:"url(#clip0_4797_15077)"},h.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M10.15 20.85L1.5 17.53V6.63L10.15 10V20.85Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),h.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M1.5 6.63001L10.15 3.20001L18.8 6.63001L10.15 10L1.5 6.63001Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),h.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M6.17969 4.77002L14.8297 8.15002V11.47",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),h.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M18.7896 12.64V6.63L10.1396 10V20.85L14.8296 19.05",stroke:"currentColor",strokeLinejoin:"round"}),h.createElement("path",{className:"success-icon",vectorEffect:"non-scaling-stroke",d:"M15.71 17.26C15.71 15.38 17.23 13.86 19.11 13.86C20.99 13.86 22.51 15.38 22.51 17.26C22.51 19.14 20.99 20.66 19.11 20.66C17.23 20.66 15.71 19.14 15.71 17.26Z",stroke:"currentColor"}),h.createElement("path",{className:"success-icon",vectorEffect:"non-scaling-stroke",d:"M17.4805 17.49L18.5605 18.41L20.7205 16.33",stroke:"currentColor",strokeLinecap:"square",strokeLinejoin:"round"})),h.createElement("defs",null,h.createElement("clipPath",{id:"clip0_4797_15077"},h.createElement("rect",{width:22,height:18.65,fill:"white",transform:"translate(1 2.70001)"})))),hr=n=>h.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},h.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M0.75 12C0.75 5.78421 5.78421 0.75 12 0.75C18.2158 0.75 23.25 5.78421 23.25 12C23.25 18.2158 18.2158 23.25 12 23.25C5.78421 23.25 0.75 18.2158 0.75 12Z",stroke:"currentColor"}),h.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M6.75 12.762L10.2385 15.75L17.25 9",stroke:"currentColor"})),$=n=>h.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},h.createElement("path",{vectorEffect:"non-scaling-stroke",fillRule:"evenodd",clipRule:"evenodd",d:"M1 20.8953L12.1922 1.5L23.395 20.8953H1ZM13.0278 13.9638L13.25 10.0377V9H11.25V10.0377L11.4722 13.9638H13.0278ZM11.2994 16V17.7509H13.2253V16H11.2994Z",fill:"currentColor"})),fr=({isLoading:n,customerName:e,orderNumber:a,orderStatus:i})=>n?r(_r,{}):d("div",{className:"order-confirmation-header order-confirmation__card",children:[r(F,{source:ur,size:"64",className:"order-confirmation-header__icon"}),r("h1",{className:"order-confirmation-header__title",children:e?r(m,{id:"OrderConfirmation.Header.title",fields:{name:e}}):r(m,{id:"OrderConfirmation.Header.defaultTitle"})}),a&&d("p",{children:[r(m,{id:"OrderConfirmation.Header.order",fields:{order:a}}),i!==void 0&&i!==""&&d("span",{className:"order-confirmation-header__status",children:[" ","(",i,")"]})]})]}),_r=()=>d(O,{"data-testid":"order-confirmation-header-skeleton",className:"order-confirmation-header",children:[r(s,{variant:"empty",size:"xlarge",fullWidth:!0}),r(s,{variant:"empty",size:"medium"}),r(s,{variant:"empty",size:"medium"}),r(s,{variant:"empty",size:"medium"}),r(s,{variant:"empty",size:"medium"}),r(s,{variant:"empty",size:"medium"}),r(s,{size:"small",fullWidth:!0}),r(s,{variant:"heading",size:"xsmall",fullWidth:!0})]}),pr={error:$,success:hr,warning:$},yr=({className:n,type:e="warning",additionalActions:a,onDismiss:i,heading:o,description:t,...l})=>{var f,u,y;const c=pr[e],_={dismiss:"OrderConfirmation.InlineAlert.Dismiss"};return d("div",{...l,className:p(["dropin-in-line-alert",`dropin-in-line-alert--${e}`,n]),children:[d("div",{className:"dropin-in-line-alert__heading",children:[d("div",{className:"dropin-in-line-alert__title-container",children:[c&&r(F,{source:c,className:"dropin-in-line-alert__icon"}),r("span",{className:"dropin-in-line-alert__title",children:o})]}),d("div",{className:"dropin-in-line-alert__actions-container",children:[(a==null?void 0:a.length)==1&&r(w,{variant:"tertiary",className:"dropin-in-line-alert__additional-action",onClick:(f=a[0])==null?void 0:f.onClick,"aria-label":(u=a[0])==null?void 0:u.label,children:(y=a[0])==null?void 0:y.label}),i&&r(w,{icon:r(F,{source:lr,size:"24",stroke:"2"}),className:"dropin-in-line-alert__dismiss-button",variant:"tertiary",onClick:i,"aria-label":_.dismiss})]})]}),t&&r("p",{className:"dropin-in-line-alert__description",children:t}),a&&(a==null?void 0:a.length)>1&&r("div",{className:"dropin-in-line-alert__additional-actions-container",children:a.map(g=>r(w,{variant:"tertiary",className:"dropin-in-line-alert__additional-action",onClick:g.onClick,children:g.label},g.label))})]})},vr=({alert:n,onOrderSearch:e})=>{const a=V({email:"OrderConfirmation.OrderSearchForm.email",postcode:"OrderConfirmation.OrderSearchForm.postcode",number:"OrderConfirmation.OrderSearchForm.orderNumber"}),i=o=>{o.preventDefault();const t=nr(o.target);e==null||e(t)};return d(L,{variant:"secondary",className:"order-confirmation-order-search-form order-confirmation__card",children:[r("h2",{className:"order-confirmation-order-search-form__title",children:r(m,{id:"OrderConfirmation.OrderSearchForm.title"})}),r("p",{children:r(m,{id:"OrderConfirmation.OrderSearchForm.description"})}),n&&r(yr,{className:"order-confirmation-order-search-form__alert","data-testid":"order-confirmation-alert",...n}),d("form",{className:"order-confirmation-order-search-form__fields",onSubmit:i,children:[d("div",{className:"order-confirmation-order-search-form__fields-columns",children:[r(R,{children:r(z,{id:"order-email",name:"email",type:"email",autocomplete:"email",placeholder:a.email,floatingLabel:a.email,required:!0,"aria-label":a.email,"aria-required":!0})}),r(R,{children:r(z,{id:"postcode",name:"postcode",type:"text",autocomplete:"postal-code",placeholder:a.postcode,floatingLabel:a.postcode,required:!1,"aria-label":a.postcode,"aria-required":!0})})]}),r(R,{children:r(z,{id:"order-number",name:"number",type:"text",placeholder:a.number,floatingLabel:a.number,required:!0,"aria-label":a.number,"aria-required":!0})}),r(w,{className:"order-confirmation-order-search-form__button",size:"medium",variant:"primary",type:"submit",children:r(m,{id:"OrderConfirmation.OrderSearchForm.button"})},"logIn")]})]})},gr=({isLoading:n,orderDetails:e})=>{var P,D,j,Z,H;if(n)return r(Nr,{});const a=e&&(e==null?void 0:e.number),i=(e==null?void 0:e.email)||"",o=e&&i!=="",t=e==null?void 0:e.shipping_address,l=e&&t!==null,c=e==null?void 0:e.billing_address,_=e&&c!==null,f=e==null?void 0:e.shipping_method,u=(D=(P=e==null?void 0:e.total)==null?void 0:P.total_shipping)==null?void 0:D.value,y=(Z=(j=e==null?void 0:e.total)==null?void 0:j.total_shipping)==null?void 0:Z.currency,g=e&&f&&y&&u!=null,x=e==null?void 0:e.payment_methods,q=x&&x.length>0,G=q?(H=x[0])==null?void 0:H.name:"",B=e&&q&&G!=="";return d(L,{variant:"secondary",className:"order-confirmation-details order-confirmation__card",children:[r("div",{className:"order-confirmation-details__header",children:r("h2",{className:"order-confirmation-details__title",children:r(m,{id:"OrderConfirmation.Details.title"})})}),d("div",{className:"order-confirmation-details__contact",children:[(!e||o)&&r("h3",{children:r(m,{id:"OrderConfirmation.Details.contact"})}),o&&r("p",{children:i}),!a&&r(N,{rows:1,"data-testid":"order-confirmation-details-contact-skeleton"})]}),d("div",{className:"order-confirmation-details__information",children:[d("div",{className:"order-confirmation-details__shipping_address",children:[(!a||l)&&r("h3",{children:r(m,{id:"OrderConfirmation.Details.shippingAddress"})}),l&&d(k,{children:[d("p",{children:[t==null?void 0:t.firstname," ",t==null?void 0:t.lastname]}),t==null?void 0:t.street.map((T,b)=>r("p",{children:T},b)),d("p",{children:[t==null?void 0:t.city," ",t==null?void 0:t.region," ",t==null?void 0:t.postcode,", ",t==null?void 0:t.country_code]})]}),!a&&r(N,{rows:3,"data-testid":"order-confirmation-shipping-address-skeleton"})]}),d("div",{className:"order-confirmation-details__billing_address",children:[(!a||_)&&r("h3",{children:r(m,{id:"OrderConfirmation.Details.billingAddress"})}),_&&d(k,{children:[d("p",{children:[c==null?void 0:c.firstname," ",c==null?void 0:c.lastname]}),c==null?void 0:c.street.map((T,b)=>r("p",{children:T},b)),d("p",{children:[c==null?void 0:c.city," ",c==null?void 0:c.region," ",c==null?void 0:c.postcode,", ",c==null?void 0:c.country_code]})]}),!a&&r(N,{rows:3,"data-testid":"order-confirmation-billing-address-skeleton"})]}),d("div",{className:"order-confirmation-details__shipping-method",children:[(!a||g)&&r("h3",{children:r(m,{id:"OrderConfirmation.Details.shippingMethod"})}),g&&r(k,{children:u===0?r("p",{className:"order-confirmation-order-summary__price",children:r(m,{id:"OrderConfirmation.Details.freeShipping"})}):d("p",{children:[r(v,{amount:u,currency:y})," ",f]})}),!a&&r(N,{rows:1,"data-testid":"order-confirmation-details-shipping-method-skeleton"})]}),d("div",{className:"order-confirmation-details__payment-method",children:[(!a||B)&&r("h3",{children:r(m,{id:"OrderConfirmation.Details.paymentMethod"})}),B&&r("p",{children:G}),!a&&r(N,{rows:1,"data-testid":"order-confirmation-details-payment-method-skeleton"})]})]})]})},Nr=()=>r(L,{variant:"secondary",className:"order-confirmation-details",children:d(O,{"data-testid":"order-confirmation-details-skeleton",children:[r(s,{variant:"heading",size:"medium",fullWidth:!0}),r(s,{size:"medium"}),r(s,{variant:"empty",size:"medium"}),r(s,{size:"xlarge"}),r(s,{size:"xlarge"}),r(s,{size:"xlarge"}),r(s,{size:"xlarge"})]})}),kr=({isLoading:n,className:e,routeHome:a,routeSupport:i,...o})=>n?r(Cr,{}):d("div",{className:p(["order-confirmation-footer",e]),...o,children:[(a==null?void 0:a())&&r(w,{"data-testid":"order-confirmation-footer__continue-button",className:"order-confirmation-footer__continue-button",size:"medium",variant:"primary",type:"submit",href:a==null?void 0:a(),children:r(m,{id:"OrderConfirmation.Footer.continueShopping"})},"continueShopping"),d("p",{className:"order-confirmation-footer__contact-support",children:[r(m,{id:"OrderConfirmation.Footer.help"})," ",(i==null?void 0:i())&&r("a",{href:i==null?void 0:i(),rel:"noreferrer",className:"order-confirmation-footer__contact-support-link","data-testid":"order-confirmation-footer__contact-support-link",children:r(m,{id:"OrderConfirmation.Footer.contactSupport"})})]})]}),Cr=()=>d(O,{className:"order-confirmation-footer",children:[r(s,{size:"small",fullWidth:!0}),r(s,{variant:"heading",size:"xsmall",fullWidth:!0})]}),N=({rows:n,size:e="xsmall",...a})=>r(O,{className:"static-skeleton",...a,children:Array.from(Array(n).keys()).map(i=>r(s,{variant:"heading",size:e,fullWidth:!0},i))}),Or=({className:n,isLoading:e,summary:a,variant:i="secondary"})=>{if(e)return r(Er,{});const{total:o,subtotal:t,shipping:l,tax:c}=a??{};return d(L,{className:p(["order-confirmation-order-summary",n]),variant:i,children:[r("h2",{className:"order-confirmation-order-summary__title",children:r(m,{id:"OrderConfirmation.OrderSummary.title"})}),r(I,{variant:"primary"}),t!=null?d("div",{"data-testid":"order-summary-subtotal",className:"order-confirmation-order-summary__row",children:[r("p",{children:r(m,{id:"OrderConfirmation.OrderSummary.subtotal"})}),r(v,{amount:t==null?void 0:t.amount,currency:t==null?void 0:t.currency,className:p(["order-confirmation-order-summary__price",n])})]}):r(N,{rows:1,"data-testid":"order-confirmation-order-summary-subtotal-skeleton"}),(t==null?void 0:t.isTaxIncl)&&r("div",{"data-testid":"order-summary-subtotal-incl-tax",className:"order-confirmation-order-summary__row order-confirmation-order-summary__row--muted",children:r("p",{children:r(m,{id:"OrderConfirmation.OrderSummary.includingTaxes"})})}),l!=null?d("div",{"data-testid":"order-summary-shipping",className:"order-confirmation-order-summary__row",children:[r("p",{children:r(m,{id:"OrderConfirmation.OrderSummary.shipping"})}),l.amount===0?r("p",{className:"order-confirmation-order-summary__price",children:r(m,{id:"OrderConfirmation.OrderSummary.freeShipping"})}):r(v,{amount:l.amount,currency:l.currency,className:p(["order-confirmation-order-summary__price",n])})]}):r(N,{rows:1,"data-testid":"order-confirmation-order-summary-shipping-skeleton"}),c!=null&&!c.breakdown&&d("div",{"data-testid":"order-summary-tax",className:"order-confirmation-order-summary__row",children:[r("p",{children:r(m,{id:"OrderConfirmation.OrderSummary.tax"})}),r(v,{amount:c.amount,currency:c.currency,className:p(["order-confirmation-order-summary__price",n])})]}),c!=null&&c.breakdown&&d(k,{children:[r(I,{variant:"secondary"}),r("div",{className:"order-confirmation-order-summary__row order-confirmation-order-summary__row--margin-bottom",children:r("p",{children:r(m,{id:"OrderConfirmation.OrderSummary.taxBreakdown"})})}),c.breakdown.map(_=>d("div",{"data-testid":"order-summary-tax-breakdown",className:"order-confirmation-order-summary__row order-confirmation-order-summary__row--muted",children:[r("p",{children:_.label}),r(v,{amount:_.amount.value,currency:_.amount.currency,className:p(["order-confirmation-order-summary__price",n])})]},_.label)),d("div",{"data-testid":"order-summary-tax-breakdown-total",className:"order-confirmation-order-summary__row order-confirmation-order-summary__row--strong order-confirmation-order-summary__row--margin-top",children:[r("p",{children:r(m,{id:"OrderConfirmation.OrderSummary.taxTotal"})}),r(v,{amount:c.amount,currency:c.currency,className:p(["order-confirmation-order-summary__price",n])})]}),r(I,{variant:"secondary"})]}),o!=null?d("div",{"data-testid":"order-summary-total-incl-tax",className:"order-confirmation-order-summary__row order-confirmation-order-summary__row--emphasized",children:[r("p",{children:r(m,{id:"OrderConfirmation.OrderSummary.total"})}),r(v,{amount:o==null?void 0:o.inclTax.amount,currency:o==null?void 0:o.inclTax.currency,className:p(["order-confirmation-order-summary__price",n])})]}):r(N,{rows:1,"data-testid":"order-confirmation-order-summary-total-skeleton"}),(o==null?void 0:o.exclTax)!=null&&d("div",{"data-testid":"order-summary-total-excl-tax",className:"order-confirmation-order-summary__row order-confirmation-order-summary__row--muted",children:[r("p",{children:r(m,{id:"OrderConfirmation.OrderSummary.totalExclTax"})}),r(v,{amount:o.exclTax.amount,currency:o.exclTax.currency,className:p(["order-confirmation-order-summary__price",n])})]})]})},Er=()=>d(O,{"data-testid":"order-confirmation-order-summary-skeleton",className:"order-confirmation-order-summary",children:[r(s,{variant:"heading",size:"small"}),r(s,{variant:"empty",size:"small"}),r(s,{variant:"empty",size:"small"}),r(s,{variant:"empty",size:"small"}),r(s,{variant:"heading",size:"small",fullWidth:!0,lines:3})]}),wr=({className:n,item:e,taxIncluded:a=!1})=>{const i=V({Sender:"OrderConfirmation.CartSummary.GiftCard.sender",Recipient:"OrderConfirmation.CartSummary.GiftCard.recipient"});let o=e.regularPrice,t=e.total;a&&(o=e.priceInclTax,t=e.totalInclTax);const l={..."configurableOptions"in e?e.configurableOptions:{},..."senderName"in e&&e.senderName?{[i.Sender]:e.senderName}:{},..."senderEmail"in e&&e.senderEmail?{[i.Sender]:e.senderEmail}:{},..."recipientName"in e&&e.recipientName?{[i.Recipient]:e.recipientName}:{},..."recipientEmail"in e&&e.recipientEmail?{[i.Recipient]:e.recipientEmail}:{}};return r("div",{className:p(["order-confirmation-cart-summary-item",n]),children:r(Y,{"data-testid":"cart-summary-item",taxIncluded:a,title:r("div",{"data-testid":"product-name",children:e.name}),sku:r("div",{children:e.sku}),quantity:e.quantity,image:r(A,{src:e.image.src,alt:e.image.alt,loading:"lazy",width:"80",height:"80",params:{width:80}}),configurations:l,price:r(v,{amount:e.regularPrice.value,currency:o.currency,weight:"normal"}),total:d(k,{children:[r(v,{amount:e.regularPrice.value*e.quantity,currency:o.currency,variant:e.discounted?"strikethrough":"default"}),e.discounted&&r(v,{amount:t.value,currency:t.currency,sale:!0})]})},e.uid)})};function Sr(n){return{uid:n.id,quantity:n.quantity_ordered,sku:n.product.sku,name:n.product.name,image:{src:n.product.thumbnail.url,alt:n.product.thumbnail.label},price:{value:n.product_sale_price.value,currency:n.product_sale_price.currency},priceInclTax:{value:n.product_sale_price.value,currency:n.product_sale_price.currency},total:{value:n.product_sale_price.value*n.quantity_ordered,currency:n.product_sale_price.currency},totalInclTax:{value:n.product_sale_price.value*n.quantity_ordered,currency:n.product_sale_price.currency},discount:{value:0,currency:n.product_sale_price.currency},regularPrice:{value:n.product.price_range.maximum_price.regular_price.value,currency:n.product.price_range.maximum_price.regular_price.currency},discounted:n.product.price_range.maximum_price.regular_price.value*n.quantity_ordered!==n.product_sale_price.value*n.quantity_ordered,configurableOptions:Lr(n),senderName:n.__typename==="GiftCardOrderItem"?n.gift_card.sender_name:void 0,senderEmail:n.__typename==="GiftCardOrderItem"?n.gift_card.sender_email:void 0,recipientEmail:n.__typename==="GiftCardOrderItem"?n.gift_card.recipient_email:void 0,recipientName:n.__typename==="GiftCardOrderItem"?n.gift_card.recipient_name:void 0}}function Lr(n){if(!("selected_options"in n))return;const e={};for(const a of n.selected_options)e[a.label]=a.value;return e}const Ir=({isLoading:n,details:e})=>{if(n)return r(xr,{});const a=!1,i=e.items,o=i.length;return r("div",{className:"order-confirmation-cart-summary",children:d(L,{variant:"secondary",children:[r("div",{className:"order-confirmation-cart-summary__heading",children:d("h2",{className:"order-confirmation-cart-summary__title",children:[r(m,{id:"OrderConfirmation.CartSummary.title"})," (",o,")"]})}),r(I,{className:"order-confirmation-cart-summary__divider-top",variant:"primary"}),r("div",{className:"order-confirmation-cart-summary__items",children:i==null?void 0:i.map(t=>{const l=Sr(t);return r(wr,{item:l,taxIncluded:a},l==null?void 0:l.uid)})})]})})},E=()=>r("div",{className:"dropin-cart-item dropin-cart-item-skeleton",children:d(O,{className:"dropin-cart-item__skeleton dropin-cart-item__wrapper",children:[r("div",{className:"dropin-cart-item__image",children:r(s,{className:"dropin-cart-item__skeleton__item"})}),r("div",{className:"dropin-cart-item__title",children:r(s,{className:"dropin-cart-item__skeleton__item"})}),r("div",{className:"dropin-cart-item__sku",children:r(s,{className:"dropin-cart-item__skeleton__item"})}),r("div",{className:"dropin-cart-item__price",children:r(s,{className:"dropin-cart-item__skeleton__item"})}),r("div",{className:"dropin-cart-item__quantity",children:r(s,{className:"dropin-cart-item__skeleton__item"})}),r("div",{className:"dropin-cart-item__total",children:r(s,{className:"dropin-cart-item__skeleton__item"})})]})}),xr=()=>d(O,{"data-testid":"cart-summary-skeleton",className:"order-confirmation-cart-summary",style:{gridTemplateColumns:"1fr"},children:[r(s,{variant:"heading",fullWidth:!0,size:"medium"}),r(E,{}),r(E,{}),r(E,{}),r(E,{}),r(E,{})]});function Tr(n){const[e,a]=rr(ar,{isLoading:!1,token:n,details:null}),i=V({invalidOrder:"OrderConfirmation.Errors.invalidOrder",invalidSearch:"OrderConfirmation.Errors.invalidSearch",pageNotFound:"OrderConfirmation.Errors.pageNotFound",unknown:"OrderConfirmation.Errors.unknown"}),o=M(f=>{switch(f){case"Invalid order":case"We couldn't locate an order with the information provided.":return{type:W.WARNING,code:S.INVALID_ORDER,message:i.invalidOrder};case"Invalid search":return{type:W.WARNING,code:S.INVALID_SEARCH,message:i.invalidSearch}}},[i.invalidOrder,i.invalidSearch]),t=M(f=>{K(f).then(u=>{const g=!!(u!=null&&u.number)?void 0:o("Invalid search");a({type:C.SET_DETAILS,details:u,alert:g})}).catch(()=>{const u=o("Invalid search");a({type:C.SET_DETAILS,details:null,alert:u})})},[o]),l=M(f=>{Q(f).then(u=>{const g=!!(u!=null&&u.number)?void 0:o("Invalid order");a({type:C.SET_DETAILS,details:u,alert:g})}).catch(u=>{const y=o(u.message);if(!y){console.error(u);return}a({type:C.ALERT,alert:y})})},[o]),c=()=>{a({type:C.DISMISS_ALERT})},_=function(f){t(f)};return er(()=>{e.token&&(a({type:C.LOADING}),l(e.token))},[e.token,l]),{state:e,handleOrderSearch:_,dismissAlert:c}}const Gr=({token:n,routeHome:e,routeSupport:a})=>{const{state:i,handleOrderSearch:o,dismissAlert:t}=Tr(n);return r(mr,{state:i,dismissAlert:t,onOrderSearch:o,routeHome:e,routeSupport:a})};export{Gr as OrderConfirmation,Gr as default};
//# sourceMappingURL=OrderConfirmation.js.map
