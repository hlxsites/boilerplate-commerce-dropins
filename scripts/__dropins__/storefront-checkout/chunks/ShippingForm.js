import{jsx as o}from"@dropins/tools/preact-jsx-runtime.js";import"@dropins/tools/event-bus.js";import{k as t}from"./fixtures.js";import{A as a}from"./getMultilineValues.js";import{s as d}from"./setBillingAddress.js";import{s as m,p as n}from"./setShippingAddress.js";import{A as l}from"./ToggleButton.js";import"@dropins/tools/preact-hooks.js";import"@dropins/tools/lib.js";import{useCallback as g}from"@dropins/tools/preact-compat.js";import{S as h}from"./constants.js";const B=({preselectedFields:i,...e})=>{const s=t.value.checked,p=g(r=>m({signal:r.signal,address:n(r.address)}).then(()=>{if(s)return d({input:{same_as_shipping:!0}})}),[s]);return o(l,{...e,addressType:a.SHIPPING,headingId:"Checkout.ShippingAddress.title",name:h,preselectedFields:i,saveAddressHandler:p})};export{B as S};
