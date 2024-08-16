import{jsxs as d,jsx as t,Fragment as ir}from"@dropins/tools/preact-jsx-runtime.js";import*as J from"@dropins/tools/preact-compat.js";import{useState as R,useEffect as K}from"@dropins/tools/preact-compat.js";import{classes as o,VComponent as p,Slot as nr}from"@dropins/tools/lib.js";import{events as tr}from"@dropins/tools/event-bus.js";import{s as cr,g as sr}from"./resetCart.js";import{g as or}from"./getEstimatedTotals.js";import{Accordion as mr,AccordionSection as ur,ProgressSpinner as lr,Divider as dr,Price as l,Button as pr}from"@dropins/tools/components.js";/* empty css             */import{useText as ar}from"@dropins/tools/i18n.js";const yr=()=>{const[g,A]=R(!1),[C,y]=R();return{handleEstimateTotals:(h,r)=>{A(!0);const{shippingCountry:v,shippingState:m="",shippingStateId:P,shippingZip:u=""}=h,w={countryCode:v,postcode:u,region:{region:m,id:P},shipping_method:{carrier_code:(r==null?void 0:r.carrier_code)||"",method_code:(r==null?void 0:r.method_code)||""}};or(w).then(e=>{var B,L,a,N,f,x,_,D,E,I,s,F,z,G,V,Z,j,U,Q,X;e&&y({estimatedTaxTotal:{amount:(B=e.totalTax)==null?void 0:B.value,currency:(L=e.totalTax)==null?void 0:L.currency},estimatedSubTotal:{excludingTax:{amount:(N=(a=e.subtotal)==null?void 0:a.excludingTax)==null?void 0:N.value,currency:(x=(f=e.subtotal)==null?void 0:f.excludingTax)==null?void 0:x.currency},includingTax:{amount:(D=(_=e.subtotal)==null?void 0:_.includingTax)==null?void 0:D.value,currency:(I=(E=e.subtotal)==null?void 0:E.includingTax)==null?void 0:I.currency},includingDiscountOnly:{amount:(F=(s=e.subtotal)==null?void 0:s.includingDiscountOnly)==null?void 0:F.value,currency:(G=(z=e.subtotal)==null?void 0:z.includingDiscountOnly)==null?void 0:G.currency}},estimatedGrandTotalPrice:{includingTax:{amount:(V=e.total)==null?void 0:V.includingTax.value,currency:(Z=e.total)==null?void 0:Z.includingTax.currency},excludingTax:{amount:(j=e.total)==null?void 0:j.excludingTax.value,currency:(U=e.total)==null?void 0:U.excludingTax.currency}},estimatedAppliedTaxes:{taxes:(Q=e.appliedTaxes)==null?void 0:Q.map(n=>{var T,b;return{label:n.label,amount:{value:(T=n.amount)==null?void 0:T.value,currency:(b=n.amount)==null?void 0:b.currency}}})},estimatedItems:{items:(X=e.items)==null?void 0:X.map(n=>{var T,b,q,$,c,i,O,W,S,H;return{uid:n.uid,price:{amount:(T=n.price)==null?void 0:T.value,currency:(b=n.price)==null?void 0:b.currency},taxedPrice:{amount:(q=n.taxedPrice)==null?void 0:q.value,currency:($=n.taxedPrice)==null?void 0:$.currency},rowTotal:{amount:(c=n.rowTotal)==null?void 0:c.value,currency:(i=n.rowTotal)==null?void 0:i.currency},rowTotalIncludingTax:{amount:(O=n.rowTotalIncludingTax)==null?void 0:O.value,currency:(W=n.rowTotalIncludingTax)==null?void 0:W.currency},regularPrice:{amount:(S=n.regularPrice)==null?void 0:S.value,currency:(H=n.regularPrice)==null?void 0:H.currency}}})}})}).finally(()=>{A(!1)})},estimatedTotals:C,setEstimatedTotals:y,loading:g}},hr=g=>J.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...g},J.createElement("path",{d:"M7.74512 9.87701L12.0001 14.132L16.2551 9.87701",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"square",strokeLinejoin:"round"})),xr=g=>J.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...g},J.createElement("path",{d:"M7.74512 14.132L12.0001 9.87701L16.2551 14.132",stroke:"#2B2B2B",strokeWidth:1.5,strokeLinecap:"square",strokeLinejoin:"round"})),gr=({className:g,children:A,variant:C="primary",heading:y,loading:k=!0,subTotal:h,shipping:r,discounts:v,taxTotal:m,taxesApplied:P,total:u,primaryAction:w,...e})=>{const[B,L]=R(!1),a=ar({checkout:"Cart.PriceSummary.checkout",discountedPrice:"Cart.CartItem.discountedPrice",download:"Cart.CartItem.download",heading:"Cart.Cart.heading",message:"Cart.CartItem.message",regularPrice:"Cart.CartItem.regularPrice",recipient:"Cart.CartItem.recipient",sender:"Cart.CartItem.sender",file:"Cart.CartItem.file",files:"Cart.CartItem.files",orderSummary:"Cart.PriceSummary.orderSummary",taxesBreakdownTitle:"Cart.PriceSummary.taxes.breakdown",taxTotal:"Cart.PriceSummary.taxes.total",taxEstimated:"Cart.PriceSummary.taxes.estimated",taxTotalOnly:"Cart.PriceSummary.taxes.totalOnly",showTaxBreakdown:"Cart.PriceSummary.taxes.showBreakdown",hideTaxBreakdown:"Cart.PriceSummary.taxes.hideBreakdown",taxToBeDetermined:"Cart.PriceSummary.taxToBeDetermined",subtotalLabel:"Cart.PriceSummary.subTotal.label",subtotalWithTaxes:"Cart.PriceSummary.subTotal.withTaxes",subtotalWithoutTaxes:"Cart.PriceSummary.subTotal.withoutTaxes",totalEstimated:"Cart.PriceSummary.total.estimated",totalLabel:"Cart.PriceSummary.total.label",totalWithoutTax:"Cart.PriceSummary.total.withoutTax",shippingLabel:"Cart.PriceSummary.shipping.label",zipPlaceholder:"Cart.PriceSummary.shipping.zipPlaceholder",editZipAction:"Cart.PriceSummary.shipping.editZipAction",shippingWithTaxes:"Cart.PriceSummary.shipping.withTaxes",shippingWithoutTaxes:"Cart.PriceSummary.shipping.withoutTaxes",shippingEstimated:"Cart.PriceSummary.shipping.estimated",shippingEstimatedByState:"Cart.PriceSummary.shipping.alternateField.state",shippingEstimatedByZip:"Cart.PriceSummary.shipping.alternateField.zip",destinationLinkAriaLabel:"Cart.PriceSummary.shipping.destinationLinkAriaLabel",applyButton:"Cart.PriceSummary.estimatedShippingForm.apply.label",countryField:"Cart.PriceSummary.estimatedShippingForm.country.placeholder",freeShipping:"Cart.PriceSummary.freeShipping",stateField:"Cart.PriceSummary.estimatedShippingForm.state.placeholder",zipField:"Cart.PriceSummary.estimatedShippingForm.zip.placeholder"}),N=h&&d("div",{className:o(["cart-order-summary__entry","cart-order-summary__subTotal"]),children:[t("span",{className:"cart-order-summary__label",children:a.subtotalLabel}),t(p,{node:h.price,className:"cart-order-summary__price"}),h.taxIncluded&&t("div",{"data-testid":"sub-total-tax-caption",className:"cart-order-summary__caption",children:t("span",{children:a.subtotalWithTaxes})}),h.taxExcluded?t("div",{"data-testid":"sub-total-tax-caption-excluded",className:"cart-order-summary__caption",children:d("span",{children:[h.priceExcludingTax," ",a.subtotalWithoutTaxes]})}):void 0]}),f=r&&t(p,{node:r,className:"cart-order-summary__shipping"}),x=v&&v.length>0&&t(ir,{children:v.map(s=>d("div",{className:o(["cart-order-summary__entry","cart-order-summary__discount"]),children:[t("span",{className:"cart-order-summary__label",children:s.label}),t(p,{node:s.price,className:"cart-order-summary__price"}),s.caption&&t(p,{node:s.caption,className:"cart-order-summary__caption"})]},s.label))}),_=P&&P.length>0?t(mr,{"data-testid":"tax-breakdown",className:"cart-order-summary__taxes",iconOpen:hr,iconClose:xr,children:d(ur,{title:a.taxesBreakdownTitle,secondaryText:!B&&m?t(p,{node:m.price,className:"cart-order-summary__price"}):void 0,renderContentWhenClosed:!1,onStateChange:L,children:[t("div",{className:"cart-order-summary__appliedTaxes",children:P.map(s=>d("div",{className:o(["cart-order-summary__entry","cart-order-summary__taxEntry"]),children:[t("span",{className:o(["cart-order-summary__label","cart-order-summary__label--muted"]),children:s.label}),t(p,{node:s.price,className:o(["cart-order-summary__price","cart-order-summary__price--muted"])})]},s.label))}),d("div",{className:o(["cart-order-summary__entry","cart-order-summary__taxTotal"]),children:[t("span",{className:"cart-order-summary__label",children:a.taxTotal}),m&&t(p,{node:m.price,className:"cart-order-summary__price"})]})]})}):m&&d("div",{"data-testid":"tax-total-only",className:o(["cart-order-summary__entry","cart-order-summary__taxTotal"]),children:[t("span",{className:"cart-order-summary__label",children:m.estimated?a.taxEstimated:a.taxTotalOnly}),t(p,{node:m.price,className:"cart-order-summary__price"})]}),D=u&&d("div",{"data-testid":"total-content",className:o(["cart-order-summary__entry","cart-order-summary__total",u.estimated&&"cart-order-summary__total--padded"]),children:[t("span",{className:o(["cart-order-summary__label","cart-order-summary__label--bold"]),children:u.estimated?a.totalEstimated:a.totalLabel}),t(p,{node:u.price,className:o(["cart-order-summary__price","cart-order-summary__price--bold"])})]}),E=u&&u.priceWithoutTax&&d("div",{"data-testid":"total-without-tax",className:o(["cart-order-summary__entry","cart-order-summary__totalWithoutTax"]),children:[t("span",{className:o(["cart-order-summary__label","cart-order-summary__label--muted"]),children:a.totalWithoutTax}),t(p,{node:u.priceWithoutTax,className:o(["cart-order-summary__price","cart-order-summary__price--muted"])})]}),I=w&&t("div",{className:o(["cart-order-summary__entry","cart-order-summary__primaryAction"]),children:w});return d("div",{...e,className:o(["cart-order-summary",["cart-order-summary--loading",k],[`cart-order-summary__${C}`,C],g]),children:[k&&t(lr,{className:"cart-order-summary__spinner"}),d("div",{className:"cart-order-summary__heading",children:[y&&t(p,{node:y,className:"cart-order-summary__heading-text"}),t(dr,{variant:"primary",className:"cart-order-summary__divider-primary"})]}),d("div",{className:"cart-order-summary__content",children:[N,f,x,_,D,E,I]})]})},_r=({children:g,initialData:A=null,routeCheckout:C,slots:y,errors:k,...h})=>{var E,I,s,F,z,G,V,Z,j,U,Q,X,n,T,b,q,$;const[r,v]=R(A),[m,P]=R(!1),u=r==null?void 0:r.isVirtual,{handleEstimateTotals:w,estimatedTotals:e,setEstimatedTotals:B,loading:L}=yr(),a=(E=cr.config)==null?void 0:E.shoppingCartDisplaySetting,N=(a==null?void 0:a.subtotal)==="INCLUDING_TAX",f=(a==null?void 0:a.subtotal)==="INCLUDING_EXCLUDING_TAX",x=a==null?void 0:a.zeroTax;K(()=>{const c=tr.on("cart/data",i=>{var S;v(i);const O=(S=i==null?void 0:i.addresses)==null?void 0:S.shipping,W=i==null?void 0:i.isVirtual;(O||W)&&B(null)},{eager:!0});return()=>{c==null||c.off()}},[]),K(()=>{P(k)},[k]),K(()=>{const c=tr.on("shipping/estimate",i=>{var S,H,Y,M,rr,er;const O={shippingCountry:(S=i==null?void 0:i.address)==null?void 0:S.countryCode,shippingState:(H=i==null?void 0:i.address)==null?void 0:H.region,shippingStateId:(Y=i==null?void 0:i.address)==null?void 0:Y.regionId,shippingZip:(M=i==null?void 0:i.address)==null?void 0:M.postCode},W={carrier_code:((rr=i==null?void 0:i.shippingMethod)==null?void 0:rr.carrierCode)||"",method_code:((er=i==null?void 0:i.shippingMethod)==null?void 0:er.methodCode)||""};w(O,W)});return()=>{c==null||c.off()}},[w]);const _=ar({checkout:"Cart.PriceSummary.checkout",orderSummary:"Cart.PriceSummary.orderSummary",taxToBeDetermined:"Cart.PriceSummary.taxToBeDetermined"}),D=!u&&(y!=null&&y.EstimateShipping)?t(nr,{name:"EstimateShipping",slot:y.EstimateShipping},"estimateShippingId"):void 0;return!Object.keys(r??{}).length||(r==null?void 0:r.totalQuantity)===0?null:t(gr,{...h,"data-testid":"cart-order-summary",heading:t("div",{children:_.orderSummary}),shipping:D,loading:L,subTotal:{taxIncluded:N&&!x,taxExcluded:f,zeroTaxSubtotal:x,priceExcludingTax:(I=e==null?void 0:e.estimatedSubTotal)!=null&&I.excludingTax?t(l,{"data-testid":"subtotal",...(s=e==null?void 0:e.estimatedSubTotal)==null?void 0:s.excludingTax}):t(l,{"data-testid":"subtotal",amount:(F=r==null?void 0:r.subtotal.excludingTax)==null?void 0:F.value,currency:(z=r==null?void 0:r.subtotal.excludingTax)==null?void 0:z.currency}),price:!x&&N||!x&&f?(G=e==null?void 0:e.estimatedSubTotal)!=null&&G.includingTax?t(l,{"data-testid":"subtotal",...(V=e==null?void 0:e.estimatedSubTotal)==null?void 0:V.includingTax}):t(l,{"data-testid":"subtotal",amount:(Z=r==null?void 0:r.subtotal.includingTax)==null?void 0:Z.value,currency:(j=r==null?void 0:r.subtotal.includingTax)==null?void 0:j.currency}):t(l,{"data-testid":"subtotal",amount:(U=r==null?void 0:r.subtotal.excludingTax)==null?void 0:U.value,currency:(Q=r==null?void 0:r.subtotal.excludingTax)==null?void 0:Q.currency})},discounts:r==null?void 0:r.appliedDiscounts.map(c=>({label:c.label,price:t(l,{"data-testid":"summary-discount-total",amount:-c.amount.value,currency:c.amount.currency,sale:!0})})),taxTotal:u?{price:t("span",{"data-testid":"tax-total",children:_.taxToBeDetermined})}:{price:e!=null&&e.estimatedTaxTotal?t(l,{"data-testid":"tax-total",...e==null?void 0:e.estimatedTaxTotal}):t(l,{"data-testid":"tax-total",amount:(X=r==null?void 0:r.totalTax)==null?void 0:X.value,currency:(n=r==null?void 0:r.totalTax)==null?void 0:n.currency}),estimated:(!e||!!(e!=null&&e.estimatedTaxTotal))&&!((T=r==null?void 0:r.addresses)!=null&&T.shipping)},taxesApplied:u?void 0:a!=null&&a.fullSummary?(q=((b=e==null?void 0:e.estimatedAppliedTaxes)==null?void 0:b.taxes)||(r==null?void 0:r.appliedTaxes))==null?void 0:q.map(c=>({label:c.label,price:t(l,{"data-testid":"applied-taxes",amount:c.amount.value,currency:c.amount.currency})})):void 0,total:{price:e!=null&&e.estimatedGrandTotalPrice?t(l,{...e==null?void 0:e.estimatedGrandTotalPrice.includingTax}):t(l,{amount:r==null?void 0:r.total.includingTax.value,currency:r==null?void 0:r.total.includingTax.currency}),estimated:(!e||!!(e!=null&&e.estimatedTaxTotal))&&!(($=r==null?void 0:r.addresses)!=null&&$.shipping),priceWithoutTax:a!=null&&a.grandTotal?e!=null&&e.estimatedAppliedTaxes?t(l,{...e==null?void 0:e.estimatedGrandTotalPrice.excludingTax}):t(l,{amount:r==null?void 0:r.total.excludingTax.value,currency:r==null?void 0:r.total.excludingTax.currency}):void 0},primaryAction:C&&t(pr,{"data-testid":"checkout-button",variant:"primary",disabled:(r==null?void 0:r.hasOutOfStockItems)||m,"aria-disabled":(r==null?void 0:r.hasOutOfStockItems)||m,href:r!=null&&r.hasOutOfStockItems||m?void 0:C({cartId:r.id}),children:_.checkout})})};_r.getInitialData=async function(){return sr()};export{_r as O};
