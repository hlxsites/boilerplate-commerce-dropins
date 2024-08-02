(function(i,o){try{if(typeof document<"u"){const e=document.createElement("style"),a=o.styleId;for(const t in o.attributes)e.setAttribute(t,o.attributes[t]);e.setAttribute("data-dropin",a),e.appendChild(document.createTextNode(i));const r=document.querySelector('style[data-dropin="sdk"]');if(r)r.after(e);else{const t=document.querySelector('link[rel="stylesheet"], style');t?t.before(e):document.head.append(e)}}}catch(e){console.error("dropin-styles (injectCodeFunction)",e)}})(`.checkout-bill-to-shipping-address{display:grid;grid-area:billToShippingAddress}.checkout-bill-to-shipping-address label{font:var(--type-body-2-default-font);letter-spacing:var(--type-body-2-default-letter-spacing);gap:0}
.checkout-shipping-methods{display:grid;grid-area:shippingMethods}.checkout-shipping-methods__title{color:var(--color-neutral-800);font:var(--type-body-1-default-font);letter-spacing:var(--type-body-1-default-letter-spacing);margin:0 0 var(--spacing-medium) 0}.checkout-shipping-methods__content{position:relative;display:block}.checkout-shipping-methods__method{margin-bottom:var(--spacing-medium);width:fit-content;cursor:pointer;font:var(--type-body-2-default-font);letter-spacing:var(--type-body-2-default-letter-spacing)}.checkout-shipping-methods__method:last-child{margin-bottom:0}.dropin-radio-button__label .dropin-price{color:var(--color-neutral-800);font-weight:400}.checkout-shipping-methods__options--loading{opacity:.4;pointer-events:none}.checkout-shipping-methods__spinner{margin:0 auto;position:absolute;z-index:999;left:0;right:0;top:calc(50% - (var(--size) / 2));bottom:0}.checkout-fields-form{display:grid}div[data-slot=ShippingForm]{display:grid;grid-area:shippingAddress}div[data-slot=BillingForm]{display:grid;grid-area:billingAddress}.checkout-shipping-address__skeleton{display:flex;align-items:flex-start;justify-content:space-between;gap:var(--spacing-medium);flex-wrap:wrap;min-width:384px}.checkout-address-form__company,.checkout-address-form__street{grid-column:1 / -1}.checkout-address-form__street .dropin-input-container{margin-bottom:var(--spacing-medium)}.checkout-address-form__street .dropin-input-container:last-child{margin-bottom:0}.checkout-address-form__street .dropin-field__content{display:grid;grid-auto-flow:row;gap:var(--spacing-xxsmall)}.checkout-address-form__country_id .dropin-picker__options-container,.checkout-address-form__region .dropin-picker__options-container{z-index:100}.checkout-address-form__save{grid-column:1 / -1;justify-self:center}.checkout-fields-form__title{color:var(--color-neutral-800);font:var(--type-headline-2-default-font);letter-spacing:var(--type-headline-2-default-letter-spacing);margin:0 0 var(--spacing-medium) 0}.checkout-fields-form__form{display:grid;grid-template-columns:1fr 1fr;gap:var(--spacing-medium)}@media only screen and (min-width: 320px) and (max-width: 768px){.checkout-fields-form__form{grid-template-columns:1fr}}@media only screen and (min-width: 768px){.dropin-field--multiline{grid-column:span 2}}.checkout__content{display:grid;align-items:start;grid-template-columns:repeat(var(--grid-4-columns),1fr);grid-template-areas:"main aside";column-gap:var(--grid-4-gutters)}.checkout__main{display:grid;grid-area:main;grid-template-areas:"header" "login" "shippingAddress" "billToShippingAddress" "shippingMethods" "paymentMethods" "billingAddress" "placeOrder";grid-column:1 / span 7;row-gap:var(--spacing-xbig)}.checkout__aside{display:grid;grid-area:aside;grid-column:9 / span 4}.checkout__banner{margin-bottom:var(--spacing-xbig)}.checkout-heading__title{display:grid;grid-area:header;color:var(--color-neutral-800);font:var(--type-headline-1-font);letter-spacing:var(--type-headline-1-letter-spacing);padding:var(--spacing-small) 0;margin:0}.checkout-heading__divider-primary{margin:0}.checkout__content .dropin-divider{margin-bottom:0;width:100%}.checkout__content .checkout-billing-form__divider{margin-top:0}.checkout__content .checkout-billing-form__visible{display:block}.checkout__content .checkout-billing-form__hidden{display:none}@media only screen and (min-width: 320px) and (max-width: 768px){.checkout__content{grid-template-columns:1fr;grid-template-areas:"header" "login" "shippingAddress" "billToShippingAddress" "shippingMethods" "paymentMethods" "billingAddress" "orderSummary" "placeOrder";row-gap:var(--spacing-big);column-gap:0}.checkout__content>*:nth-last-child(2){margin-top:calc(var(--spacing-big) * -1)}div[data-slot=OrderSummary]{display:grid;grid-area:orderSummary}}.checkout-login-form{display:grid;grid-area:login}.checkout-login-form__heading{display:grid;grid-template-columns:1fr max-content;grid-auto-rows:max-content}.checkout-login-form__content{grid-auto-rows:max-content}.checkout-login-form__customer-details{display:grid;grid-auto-flow:row;gap:var(--spacing-xxsmall)}.checkout-login-form__customer-name{font:var(--type-body-1-strong-font);letter-spacing:var(--type-body-1-default-letter-spacing)}.checkout-login-form__customer-email{font:var(--type-body-2-default-font);letter-spacing:var(--type-body-2-default-letter-spacing);color:var(--color-neutral-700)}.checkout-login-form__title{grid-column-start:1;color:var(--color-neutral-800);font:var(--type-headline-2-default-font);letter-spacing:var(--type-headline-2-default-letter-spacing);margin-top:0}.checkout-login-form__sign-in,.checkout-login-form__sign-out{grid-column-start:2;color:var(--color-neutral-800);font:var(--type-body-2-default-font);letter-spacing:var(--type-body-2-default-letter-spacing);justify-self:flex-end;margin-top:var(--spacing-xxsmall)}a.checkout-login-form__link{font:var(--type-body-2-strong-font);margin-left:var(--spacing-xxsmall)}@media only screen and (min-width: 320px) and (max-width: 768px){.checkout-login-form__heading{grid-template-columns:repeat(1,1fr [col-start]);grid-template-rows:1fr}.checkout-login-form__sign-in,.checkout-login-form__sign-out{grid-column-start:1;align-self:flex-start;justify-self:flex-start;margin-top:0;margin-bottom:var(--spacing-medium)}}.checkout-payment-methods{position:relative;display:grid;grid-area:paymentMethods}.checkout-payment-methods__title{font:var(--type-headline-2-default-font);letter-spacing:var(--type-headline-2-default-letter-spacing);margin:0 0 var(--spacing-medium) 0}.checkout-payment-methods__wrapper{position:relative;display:grid}.checkout-payment-methods__methods{display:grid;grid-template-columns:1fr 1fr;gap:var(--spacing-medium)}.checkout-payment-methods__content{margin-top:var(--spacing-medium)}.checkout-payment-methods--full-width{grid-template-columns:1fr}.checkout-payment-methods--loading{opacity:.4;pointer-events:none}.checkout-payment-methods__spinner{margin:0 auto;position:absolute;z-index:999;left:0;right:0;top:calc(50% - (var(--size) / 2));bottom:0}.checkout__content [data-slot=PaymentMethods]:empty{display:none}@media only screen and (min-width: 320px) and (max-width: 768px){.checkout-payment-methods__methods{grid-template-columns:1fr}}.checkout-place-order{display:grid;grid-area:placeOrder;padding-bottom:var(--spacing-big)}.checkout-place-order__button{align-self:flex-end;justify-self:flex-end}@media only screen and (min-width:320px) and (max-width: 768px){.checkout-place-order{background-color:var(--color-neutral-200);padding:var(--spacing-medium) var(--spacing-medium) var(--spacing-big) var(--spacing-medium)}.checkout-place-order__button{align-self:center;justify-self:stretch}}.checkout-estimate-shipping{display:grid;grid-template-columns:1fr 1fr;gap:var(--spacing-xxsmall);align-items:center;color:var(--color-neutral-800)}.checkout-estimate-shipping__label,.checkout-estimate-shipping__price{font:var(--type-body-1-default-font);letter-spacing:var(--type-body-1-default-letter-spacing)}.checkout-estimate-shipping__label--muted{font:var(--type-body-2-default-font);letter-spacing:var(--type-body-2-default-letter-spacing);color:var(--color-neutral-700)}.checkout-estimate-shipping__price--muted{font:var(--type-body-2-default-font);letter-spacing:var(--type-body-2-default-letter-spacing)}.checkout-estimate-shipping__price{text-align:right}.checkout-estimate-shipping__label--bold,.checkout-estimate-shipping__price--bold{font:var(--type-body-1-emphasized-font);letter-spacing:var(--type-body-1-emphasized-letter-spacing)}.checkout-estimate-shipping__caption{font:var(--type-details-caption-2-font);letter-spacing:var(--type-details-caption-2-letter-spacing);color:var(--color-neutral-700)}.cart-order-summary__shipping .dropin-skeleton{grid-template-columns:1fr}.checkout-out-of-stock{display:grid}.checkout-out-of-stock__button{margin-top:var(--spacing-medium);align-self:flex-end;justify-self:flex-end}.checkout-out-of-stock__icon .error-icon{color:var(--color-warning-500)}.checkout-overlay-loader{align-items:center;background:var(--color-neutral-50);display:flex;height:100vh;justify-content:center;left:0;opacity:.5;position:fixed;top:0;width:100%;z-index:9999}.checkout-server-error{position:relative;text-align:center;display:grid}.checkout-server-error__icon .error-icon{color:var(--color-alert-500)}.checkout-server-error a{font:var(--type-body-2-strong-font);letter-spacing:var(--type-body-2-strong-letter-spacing)}.checkout-toggle-button{display:block;position:relative;width:100%}.checkout-toggle-button__actionButton{cursor:pointer;background-color:var(--color-neutral-200);border:var(--shape-border-width-1) solid var(--color-neutral-400);border-radius:var(--shape-border-radius-1);font:var(--type-body-2-strong-font);letter-spacing:var(--type-body-2-strong-letter-spacing);padding:var(--spacing-medium);align-items:center;display:grid}.checkout-toggle-button__selected .checkout-toggle-button__actionButton{background-color:var(--color-neutral-50);border:var(--shape-border-width-1) solid var(--color-neutral-800)}.checkout-toggle-button:has(input:focus-visible){outline:0 none;box-shadow:0 0 0 var(--shape-icon-stroke-4) var(--color-neutral-400);-webkit-box-shadow:0 0 0 var(--shape-icon-stroke-4) var(--color-neutral-400);-moz-box-shadow:0 0 0 var(--shape-icon-stroke-4) var(--color-neutral-400);border-radius:var(--shape-border-radius-1)}.checkout-toggle-button__radioButton.dropin-radio-button{cursor:pointer;position:absolute}.checkout-toggle-button__radioButton .dropin-radio-button__label:before{cursor:pointer;margin-right:0}.checkout-toggle-button__radioButton .dropin-radio-button__input:focus-visible+.dropin-radio-button__label:before{box-shadow:0 0 0 var(--shape-border-width-1) var(--color-neutral-600)}.checkout-toggle-button__content{display:flex;align-items:center;justify-content:center;margin-left:var(--spacing-big)}.checkout-toggle-button__icon{height:24px;margin-right:var(--spacing-xsmall)}`,{styleId:"checkout"});
import{jsx as d}from"@dropins/tools/preact-jsx-runtime.js";import{Render as m}from"@dropins/tools/lib.js";import{events as p}from"@dropins/tools/event-bus.js";import"./chunks/fixtures.js";import{c as g}from"./chunks/resetCustomer.js";import{UIProvider as y}from"@dropins/tools/components.js";import{useState as h,useEffect as b}from"@dropins/tools/preact-hooks.js";import"@dropins/tools/preact.js";import"@dropins/tools/fetch-graphql.js";import"./chunks/getCustomer.js";import"./chunks/getCart.graphql.js";function v(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var O=function(r){return w(r)&&!E(r)};function w(e){return!!e&&typeof e=="object"}function E(e){var r=Object.prototype.toString.call(e);return r==="[object RegExp]"||r==="[object Date]"||j(e)}var S=typeof Symbol=="function"&&Symbol.for,M=S?Symbol.for("react.element"):60103;function j(e){return e.$$typeof===M}function A(e){return Array.isArray(e)?[]:{}}function o(e,r){return r.clone!==!1&&r.isMergeableObject(e)?i(A(e),e,r):e}function P(e,r,t){return e.concat(r).map(function(a){return o(a,t)})}function I(e,r){if(!r.customMerge)return i;var t=r.customMerge(e);return typeof t=="function"?t:i}function T(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(r){return Object.propertyIsEnumerable.call(e,r)}):[]}function u(e){return Object.keys(e).concat(T(e))}function f(e,r){try{return r in e}catch{return!1}}function C(e,r){return f(e,r)&&!(Object.hasOwnProperty.call(e,r)&&Object.propertyIsEnumerable.call(e,r))}function x(e,r,t){var a={};return t.isMergeableObject(e)&&u(e).forEach(function(n){a[n]=o(e[n],t)}),u(r).forEach(function(n){C(e,n)||(f(e,n)&&t.isMergeableObject(r[n])?a[n]=I(n,t)(e[n],r[n],t):a[n]=o(r[n],t))}),a}function i(e,r,t){t=t||{},t.arrayMerge=t.arrayMerge||P,t.isMergeableObject=t.isMergeableObject||O,t.cloneUnlessOtherwiseSpecified=o;var a=Array.isArray(r),n=Array.isArray(e),s=a===n;return s?a?t.arrayMerge(e,r,t):x(e,r,t):o(r,t)}i.all=function(r,t){if(!Array.isArray(r))throw new Error("first argument should be an array");return r.reduce(function(a,n){return i(a,n,t)},{})};var D=i,B=D;const L=v(B),U={title:"Checkout",LoginForm:{title:"Contact details",account:"Already have an account?",ariaLabel:"Email",invalidEmailError:"Please enter a valid email address.",missingEmailError:"Enter an email address.",emailExists:{alreadyHaveAccount:"It looks like you already have an account.",signInButton:"Sign in",forFasterCheckout:"for a faster checkout."},floatingLabel:"Email *",placeholder:"Enter your email address",signIn:"Sign In",switch:"Do you want to switch account?",signOut:"Sign Out"},ShippingMethods:{title:"Shipping options",emptyState:"This order can't be shipped to the address provided. Please review the address details you entered and make sure they're correct."},ShippingAddress:{title:"Delivery"},BillingAddress:{title:"Billing Address"},AddressForm:{Validity:{badInput:"Provide a valid {field}.",patternMismatch:"Ensure you have entered a correct {field} format.",rangeOverflow:"Choose a valid {field} within the allowed range.",rangeUnderflow:"Choose a valid {field} within the allowed range.",tooLong:"This entry is too long. Keep it under {field} characters.",tooShort:"Use at least {field} characters.",typeMismatch:"Enter a valid {field}.",valueMissing:"Enter a {field}, this field is required."}},BillToShippingAddress:{title:"Bill to shipping address"},PaymentMethods:{title:"Payment",emptyState:"No payment methods available"},OutOfStock:{title:"Out of stock",message:"Your cart contains items that are out of stock or have limited availability. Please review your cart before placing the order.",button:"Review cart",lowInventory:{one:"Last item!",many:"Only {{count}} left!"},alert:"Out of stock!"},PlaceOrder:{button:"Place Order"},ServerError:{title:"We were unable to process your order",contactSupport:"If you continue to have issues, please contact support.",unexpected:"An unexpected error occurred while processing your order. Please try again later.",button:"Try again"},EmptyCart:{title:"Your cart is empty",button:"Start shopping"},ErrorBanner:{genericMessage:"Server error detected. Please check your connection and try again."},MergedCartBanner:{items:{one:"1 item from a previous session was added to your cart. Please review your new subtotal.",many:"{{count}} items from a previous session were added to your cart. Please review your new subtotal."}},EstimateShipping:{estimated:"Estimated Shipping",freeShipping:"Free",label:"Shipping",taxToBeDetermined:"TBD",withTaxes:"Including taxes",withoutTaxes:"Excluding taxes"}},_={Checkout:U},F={default:_},R=({children:e})=>{var s;const[r,t]=h(),a=(s=g.getConfig())==null?void 0:s.langDefinitions;b(()=>{const c=p.on("locale",l=>{l!==r&&t(l)},{eager:!0});return()=>{c==null||c.off()}},[r]);const n=L(F,a??{});return d(y,{lang:r,langDefinitions:n,children:e})},J=new m(d(R,{}));export{R as Provider,J as render};
