import{jsx as t}from"@dropins/tools/preact-jsx-runtime.js";import"@dropins/tools/event-bus.js";import{k as a}from"./fixtures.js";import{A as d}from"./getMultilineValues.js";import{s as m}from"./setBillingAddress.js";import{s as n,p as l}from"./setShippingAddress.js";import{A as g}from"./ToggleButton.js";import"@dropins/tools/preact-hooks.js";import"@dropins/tools/lib.js";import{useCallback as h}from"@dropins/tools/preact-compat.js";import{S as A}from"./constants.js";const H=({onCheckoutDataUpdate:i,preselectedFields:e,...p})=>{const s=a.value.checked,o=h(r=>n({signal:r.signal,address:l(r.address)}).then(()=>{if(s)return m({input:{same_as_shipping:!0}})}),[s]);return t(g,{...p,addressType:d.SHIPPING,headingId:"Checkout.ShippingAddress.title",name:A,onCheckoutDataUpdate:i,preselectedFields:e,saveAddressHandler:o})};export{H as S};
