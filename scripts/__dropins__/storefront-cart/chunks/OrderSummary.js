import{jsxs as l,jsx as t,Fragment as _r}from"@dropins/tools/preact-jsx-runtime.js";import{classes as o,VComponent as p,Slot as Tr}from"@dropins/tools/lib.js";/* empty css             */import{Accordion as br,AccordionSection as Cr,ProgressSpinner as Sr,Divider as vr,Price as m,Button as Pr}from"@dropins/tools/components.js";import*as M from"@dropins/tools/preact-compat.js";import{useState as Y,useEffect as tr,useCallback as wr}from"@dropins/tools/preact-compat.js";import{useText as gr}from"@dropins/tools/i18n.js";import{s as yr}from"./resetCart.js";import{events as xr}from"@dropins/tools/event-bus.js";import{g as Nr}from"./getEstimatedTotals.js";import{b as kr}from"./acdl.js";import{g as fr}from"./persisted-data.js";const Er=_=>M.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",..._},M.createElement("path",{d:"M7.74512 9.87701L12.0001 14.132L16.2551 9.87701",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"square",strokeLinejoin:"round"})),Ir=_=>M.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",..._},M.createElement("path",{d:"M7.74512 14.132L12.0001 9.87701L16.2551 14.132",stroke:"#2B2B2B",strokeWidth:1.5,strokeLinecap:"square",strokeLinejoin:"round"})),Lr=({className:_,children:D,variant:S="primary",heading:h,loading:f=!0,subTotal:x,shipping:r,discounts:v,taxTotal:d,taxesApplied:P,total:u,primaryAction:w,...e})=>{const[E,I]=Y(!1),a=gr({checkout:"Cart.PriceSummary.checkout",discountedPrice:"Cart.CartItem.discountedPrice",download:"Cart.CartItem.download",heading:"Cart.Cart.heading",message:"Cart.CartItem.message",regularPrice:"Cart.CartItem.regularPrice",recipient:"Cart.CartItem.recipient",sender:"Cart.CartItem.sender",file:"Cart.CartItem.file",files:"Cart.CartItem.files",orderSummary:"Cart.PriceSummary.orderSummary",taxesBreakdownTitle:"Cart.PriceSummary.taxes.breakdown",taxTotal:"Cart.PriceSummary.taxes.total",taxEstimated:"Cart.PriceSummary.taxes.estimated",taxTotalOnly:"Cart.PriceSummary.taxes.totalOnly",showTaxBreakdown:"Cart.PriceSummary.taxes.showBreakdown",hideTaxBreakdown:"Cart.PriceSummary.taxes.hideBreakdown",taxToBeDetermined:"Cart.PriceSummary.taxToBeDetermined",subtotalLabel:"Cart.PriceSummary.subTotal.label",subtotalWithTaxes:"Cart.PriceSummary.subTotal.withTaxes",subtotalWithoutTaxes:"Cart.PriceSummary.subTotal.withoutTaxes",totalEstimated:"Cart.PriceSummary.total.estimated",totalLabel:"Cart.PriceSummary.total.label",totalWithoutTax:"Cart.PriceSummary.total.withoutTax",shippingLabel:"Cart.PriceSummary.shipping.label",zipPlaceholder:"Cart.PriceSummary.shipping.zipPlaceholder",editZipAction:"Cart.PriceSummary.shipping.editZipAction",shippingWithTaxes:"Cart.PriceSummary.shipping.withTaxes",shippingWithoutTaxes:"Cart.PriceSummary.shipping.withoutTaxes",shippingEstimated:"Cart.PriceSummary.shipping.estimated",shippingEstimatedByState:"Cart.PriceSummary.shipping.alternateField.state",shippingEstimatedByZip:"Cart.PriceSummary.shipping.alternateField.zip",destinationLinkAriaLabel:"Cart.PriceSummary.shipping.destinationLinkAriaLabel",applyButton:"Cart.PriceSummary.estimatedShippingForm.apply.label",countryField:"Cart.PriceSummary.estimatedShippingForm.country.placeholder",freeShipping:"Cart.PriceSummary.freeShipping",stateField:"Cart.PriceSummary.estimatedShippingForm.state.placeholder",zipField:"Cart.PriceSummary.estimatedShippingForm.zip.placeholder"}),N=x&&l("div",{className:o(["cart-order-summary__entry","cart-order-summary__subTotal"]),children:[t("span",{className:"cart-order-summary__label",children:a.subtotalLabel}),t(p,{node:x.price,className:"cart-order-summary__price"}),x.taxIncluded&&t("div",{"data-testid":"sub-total-tax-caption",className:"cart-order-summary__caption",children:t("span",{children:a.subtotalWithTaxes})}),x.taxExcluded?t("div",{"data-testid":"sub-total-tax-caption-excluded",className:"cart-order-summary__caption",children:l("span",{children:[x.priceExcludingTax," ",a.subtotalWithoutTaxes]})}):void 0]}),k=r&&t(p,{node:r,className:"cart-order-summary__shipping"}),g=v&&v.length>0&&t(_r,{children:v.map(c=>l("div",{className:o(["cart-order-summary__entry","cart-order-summary__discount"]),children:[t("span",{className:"cart-order-summary__label",children:c.label}),t(p,{node:c.price,className:"cart-order-summary__price"}),c.caption&&t(p,{node:c.caption,className:"cart-order-summary__caption"})]},c.label))}),T=P&&P.length>0?t(br,{"data-testid":"tax-breakdown",className:"cart-order-summary__taxes",iconOpen:Er,iconClose:Ir,children:l(Cr,{title:a.taxesBreakdownTitle,secondaryText:!E&&d?t(p,{node:d.price,className:"cart-order-summary__price"}):void 0,renderContentWhenClosed:!1,onStateChange:I,children:[t("div",{className:"cart-order-summary__appliedTaxes",children:P.map(c=>l("div",{className:o(["cart-order-summary__entry","cart-order-summary__taxEntry"]),children:[t("span",{className:o(["cart-order-summary__label","cart-order-summary__label--muted"]),children:c.label}),t(p,{node:c.price,className:o(["cart-order-summary__price","cart-order-summary__price--muted"])})]},c.label))}),l("div",{className:o(["cart-order-summary__entry","cart-order-summary__taxTotal"]),children:[t("span",{className:"cart-order-summary__label",children:a.taxTotal}),d&&t(p,{node:d.price,className:"cart-order-summary__price"})]})]})}):d&&l("div",{"data-testid":"tax-total-only",className:o(["cart-order-summary__entry","cart-order-summary__taxTotal"]),children:[t("span",{className:"cart-order-summary__label",children:d.estimated?a.taxEstimated:a.taxTotalOnly}),t(p,{node:d.price,className:"cart-order-summary__price"})]}),y=u&&l("div",{"data-testid":"total-content",className:o(["cart-order-summary__entry","cart-order-summary__total",u.estimated&&"cart-order-summary__total--padded"]),children:[t("span",{className:o(["cart-order-summary__label","cart-order-summary__label--bold"]),children:u.estimated?a.totalEstimated:a.totalLabel}),t(p,{node:u.price,className:o(["cart-order-summary__price","cart-order-summary__price--bold"])})]}),L=u&&u.priceWithoutTax&&l("div",{"data-testid":"total-without-tax",className:o(["cart-order-summary__entry","cart-order-summary__totalWithoutTax"]),children:[t("span",{className:o(["cart-order-summary__label","cart-order-summary__label--muted"]),children:a.totalWithoutTax}),t(p,{node:u.priceWithoutTax,className:o(["cart-order-summary__price","cart-order-summary__price--muted"])})]}),B=w&&t("div",{className:o(["cart-order-summary__entry","cart-order-summary__primaryAction"]),children:w});return l("div",{...e,className:o(["cart-order-summary",["cart-order-summary--loading",f],[`cart-order-summary__${S}`,S],_]),children:[f&&t(Sr,{className:"cart-order-summary__spinner"}),l("div",{className:"cart-order-summary__heading",children:[h&&t(p,{node:h,className:"cart-order-summary__heading-text"}),t(vr,{variant:"primary",className:"cart-order-summary__divider-primary"})]}),l("div",{className:"cart-order-summary__content",children:[N,k,g,T,y,L,B]})]})},Br=()=>{const[_,D]=Y(!1),[S,h]=Y();return{handleEstimateTotals:(x,r)=>{D(!0);const{shippingCountry:v,shippingState:d="",shippingStateId:P,shippingZip:u=""}=x,w={countryCode:v,postcode:u,region:{region:d,id:P},shipping_method:{carrier_code:(r==null?void 0:r.carrier_code)||"",method_code:(r==null?void 0:r.method_code)||""}};Nr(w).then(e=>{var E,I,a,N,k,g,T,y,L,B,c,W,A,O,F,z,G,V,Z,j;e&&h({estimatedTaxTotal:{amount:(E=e.totalTax)==null?void 0:E.value,currency:(I=e.totalTax)==null?void 0:I.currency},estimatedSubTotal:{excludingTax:{amount:(N=(a=e.subtotal)==null?void 0:a.excludingTax)==null?void 0:N.value,currency:(g=(k=e.subtotal)==null?void 0:k.excludingTax)==null?void 0:g.currency},includingTax:{amount:(y=(T=e.subtotal)==null?void 0:T.includingTax)==null?void 0:y.value,currency:(B=(L=e.subtotal)==null?void 0:L.includingTax)==null?void 0:B.currency},includingDiscountOnly:{amount:(W=(c=e.subtotal)==null?void 0:c.includingDiscountOnly)==null?void 0:W.value,currency:(O=(A=e.subtotal)==null?void 0:A.includingDiscountOnly)==null?void 0:O.currency}},estimatedGrandTotalPrice:{includingTax:{amount:(F=e.total)==null?void 0:F.includingTax.value,currency:(z=e.total)==null?void 0:z.includingTax.currency},excludingTax:{amount:(G=e.total)==null?void 0:G.excludingTax.value,currency:(V=e.total)==null?void 0:V.excludingTax.currency}},estimatedAppliedTaxes:{taxes:(Z=e.appliedTaxes)==null?void 0:Z.map(n=>{var b,C;return{label:n.label,amount:{value:(b=n.amount)==null?void 0:b.value,currency:(C=n.amount)==null?void 0:C.currency}}})},estimatedItems:{items:(j=e.items)==null?void 0:j.map(n=>{var b,C,U,Q,X,q,$,H,R,J;return{uid:n.uid,price:{amount:(b=n.price)==null?void 0:b.value,currency:(C=n.price)==null?void 0:C.currency},taxedPrice:{amount:(U=n.taxedPrice)==null?void 0:U.value,currency:(Q=n.taxedPrice)==null?void 0:Q.currency},rowTotal:{amount:(X=n.rowTotal)==null?void 0:X.value,currency:(q=n.rowTotal)==null?void 0:q.currency},rowTotalIncludingTax:{amount:($=n.rowTotalIncludingTax)==null?void 0:$.value,currency:(H=n.rowTotalIncludingTax)==null?void 0:H.currency},regularPrice:{amount:(R=n.regularPrice)==null?void 0:R.value,currency:(J=n.regularPrice)==null?void 0:J.currency}}})}})}).finally(()=>{D(!1)})},estimatedTotals:S,setEstimatedTotals:h,loading:_}},Dr=({children:_,initialData:D=null,routeCheckout:S,slots:h,errors:f,...x})=>{var c,W,A,O,F,z,G,V,Z,j,n,b,C,U,Q,X,q,$,H,R,J,ar,ir,nr,cr,sr,or,ur;const[r,v]=Y(D),[d,P]=Y(!1),u=r==null?void 0:r.isVirtual,{handleEstimateTotals:w,estimatedTotals:e,setEstimatedTotals:E,loading:I}=Br(),a=(c=yr.config)==null?void 0:c.shoppingCartDisplaySetting,N=(a==null?void 0:a.subtotal)==="INCLUDING_TAX",k=(a==null?void 0:a.subtotal)==="INCLUDING_EXCLUDING_TAX",g=a==null?void 0:a.zeroTax;tr(()=>{const s=xr.on("cart/data",i=>{var K;v(i);const rr=(K=i==null?void 0:i.addresses)==null?void 0:K.shipping,er=i==null?void 0:i.isVirtual;(rr||er)&&E(null)},{eager:!0});return()=>{s==null||s.off()}},[]),tr(()=>{P(f)},[f]),tr(()=>{const s=xr.on("shipping/estimate",i=>{var K,mr,lr,dr,pr,hr;const rr={shippingCountry:(K=i==null?void 0:i.address)==null?void 0:K.countryCode,shippingState:(mr=i==null?void 0:i.address)==null?void 0:mr.region,shippingStateId:(lr=i==null?void 0:i.address)==null?void 0:lr.regionId,shippingZip:(dr=i==null?void 0:i.address)==null?void 0:dr.postCode},er={carrier_code:((pr=i==null?void 0:i.shippingMethod)==null?void 0:pr.carrierCode)||"",method_code:((hr=i==null?void 0:i.shippingMethod)==null?void 0:hr.methodCode)||""};w(rr,er)});return()=>{s==null||s.off()}},[w]);const T=gr({checkout:"Cart.PriceSummary.checkout",orderSummary:"Cart.PriceSummary.orderSummary",taxToBeDetermined:"Cart.PriceSummary.taxToBeDetermined"}),y=(r==null?void 0:r.hasOutOfStockItems)||d,L=wr(()=>{!y&&r&&kr(r,yr.locale)},[y,r]),B=!u&&(h!=null&&h.EstimateShipping)?t(Tr,{name:"EstimateShipping",slot:h.EstimateShipping},"estimateShippingId"):void 0;return!Object.keys(r??{}).length||(r==null?void 0:r.totalQuantity)===0?null:t(Lr,{...x,"data-testid":"cart-order-summary",heading:t("div",{children:T.orderSummary}),shipping:B,loading:I,subTotal:{taxIncluded:N&&!g,taxExcluded:k,zeroTaxSubtotal:g,priceExcludingTax:(W=e==null?void 0:e.estimatedSubTotal)!=null&&W.excludingTax?t(m,{"data-testid":"subtotal",...(A=e==null?void 0:e.estimatedSubTotal)==null?void 0:A.excludingTax}):t(m,{"data-testid":"subtotal",amount:(F=(O=r==null?void 0:r.subtotal)==null?void 0:O.excludingTax)==null?void 0:F.value,currency:(G=(z=r==null?void 0:r.subtotal)==null?void 0:z.excludingTax)==null?void 0:G.currency}),price:!g&&N||!g&&k?(V=e==null?void 0:e.estimatedSubTotal)!=null&&V.includingTax?t(m,{"data-testid":"subtotal",...(Z=e==null?void 0:e.estimatedSubTotal)==null?void 0:Z.includingTax}):t(m,{"data-testid":"subtotal",amount:(j=r==null?void 0:r.subtotal.includingTax)==null?void 0:j.value,currency:(n=r==null?void 0:r.subtotal.includingTax)==null?void 0:n.currency}):t(m,{"data-testid":"subtotal",amount:(C=(b=r==null?void 0:r.subtotal)==null?void 0:b.excludingTax)==null?void 0:C.value,currency:(Q=(U=r==null?void 0:r.subtotal)==null?void 0:U.excludingTax)==null?void 0:Q.currency})},discounts:(X=r==null?void 0:r.appliedDiscounts)==null?void 0:X.map(s=>({label:s.label,price:t(m,{"data-testid":"summary-discount-total",amount:-s.amount.value,currency:s.amount.currency,sale:!0})})),taxTotal:u?{price:t("span",{"data-testid":"tax-total",children:T.taxToBeDetermined})}:{price:e!=null&&e.estimatedTaxTotal?t(m,{"data-testid":"tax-total",...e==null?void 0:e.estimatedTaxTotal}):t(m,{"data-testid":"tax-total",amount:(q=r==null?void 0:r.totalTax)==null?void 0:q.value,currency:($=r==null?void 0:r.totalTax)==null?void 0:$.currency}),estimated:(!e||!!(e!=null&&e.estimatedTaxTotal))&&!((H=r==null?void 0:r.addresses)!=null&&H.shipping)},taxesApplied:u?void 0:a!=null&&a.fullSummary?(J=((R=e==null?void 0:e.estimatedAppliedTaxes)==null?void 0:R.taxes)||(r==null?void 0:r.appliedTaxes))==null?void 0:J.map(s=>({label:s.label,price:t(m,{"data-testid":"applied-taxes",amount:s.amount.value,currency:s.amount.currency})})):void 0,total:{price:e!=null&&e.estimatedGrandTotalPrice?t(m,{...(ar=e==null?void 0:e.estimatedGrandTotalPrice)==null?void 0:ar.includingTax}):t(m,{amount:(ir=r==null?void 0:r.total)==null?void 0:ir.includingTax.value,currency:(nr=r==null?void 0:r.total)==null?void 0:nr.includingTax.currency}),estimated:(!e||!!(e!=null&&e.estimatedTaxTotal))&&!((cr=r==null?void 0:r.addresses)!=null&&cr.shipping),priceWithoutTax:a!=null&&a.grandTotal?e!=null&&e.estimatedAppliedTaxes?t(m,{...(sr=e==null?void 0:e.estimatedGrandTotalPrice)==null?void 0:sr.excludingTax}):t(m,{amount:(or=r==null?void 0:r.total)==null?void 0:or.excludingTax.value,currency:(ur=r==null?void 0:r.total)==null?void 0:ur.excludingTax.currency}):void 0},primaryAction:S&&t(Pr,{"data-testid":"checkout-button",variant:"primary",disabled:y,"aria-disabled":y,href:y?void 0:S({cartId:r.id}),onClick:L,children:T.checkout})})};Dr.getInitialData=async function(){return fr()};export{Dr as O};
