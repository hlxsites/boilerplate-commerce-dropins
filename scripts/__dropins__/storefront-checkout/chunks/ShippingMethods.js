import{jsx as o,Fragment as X,jsxs as M}from"@dropins/tools/preact-jsx-runtime.js";import{d as ve,A as b,f as B,e as _e,D as oe,g as Ue,M as ke,h as Fe,p as Le,i as Ze,s as Ke,a as Xe,b as Je,c as Ye}from"./setShippingMethods.js";import{events as ee}from"@dropins/tools/event-bus.js";import{z as Qe,A as U,y as O,n as T,V as z,w as Me,B as et,m as be,o as de,v as Ie,k as tt,E as Q}from"./getCart.graphql.js";import{useState as H,useCallback as K,useEffect as x,useRef as nt,useMemo as ot}from"@dropins/tools/preact-hooks.js";import{classes as R,getFormErrors as rt,Slot as Ee,VComponent as I}from"@dropins/tools/lib.js";import{Text as q,useText as J}from"@dropins/tools/i18n.js";import{Field as re,Input as ue,Picker as it,Skeleton as me,SkeletonRow as A,IllustratedMessage as Se,Icon as Ae,ProgressSpinner as he,Button as st,Divider as j,RadioButton as Ne,Price as at}from"@dropins/tools/components.js";import{w as Y,c as lt}from"./BillToShippingAddress.js";import{s as we}from"./setBillingAddress.js";import*as $ from"@dropins/tools/preact-compat.js";import{forwardRef as ct,useRef as Pe,useImperativeHandle as dt,useState as G,useEffect as V,useMemo as Re,useCallback as te}from"@dropins/tools/preact-compat.js";import{E as ut}from"./ErrorBanner.js";import{M as mt}from"./MergedCartBanner.js";const Z=Qe(void 0),ht=e=>({countryCode:e.country_id,postCode:e.postcode||"",...e.region_id?{regionId:Number(e.region_id)}:{...e.region?{region:e.region}:{}}}),gt=e=>({carrierCode:e.carrier.code||"",methodCode:e.code||"",amount:e.amount,amountExclTax:e.amountExclTax,amountInclTax:e.amountInclTax}),ge={firstname:"given-name",lastname:"family-name",company:"organization",country:"country",region:"address-level1",city:"address-level2",postcode:"postal-code",telephone:"tel",street:"address-line1",email:"email",middlename:"additional-name",prefix:"honorific-prefix",suffix:"honorific-suffix"};function $e(e){return Object.keys(e).length===0&&e.constructor===Object}const pt=e=>e.map(t=>{var r;const n=((r=t==null?void 0:t.id)==null?void 0:r.toString())||t.code;return{text:t.name,value:n}}),ft=e=>e?e.map(t=>({text:t.label,value:t.value})):[];function vt({address:e,addressType:t,availableCountries:n,availableRegions:r,config:i,dismissError:a,errors:s,fields:l,onBlur:d,onChange:h,onInvalid:c,onSelection:p,setAddress:u}){const E=()=>{u(m=>({...m,[b.Region]:"",[b.RegionId]:""})),a(b.Region)},v=m=>{u(w=>({...w,[b.RegionId]:m}))};return l.map(m=>{var C;let w,F=m.frontendInput,k=p,f=h,L=m.isDisabled,P=m.isRequired,N=[],S;return F===U.Multiline?(S=ve(m.code,e),w=ve(m.code,s)):(S=e[m.code],w=s[m.code]||""),m.code===b.Country&&(N=ft(n),t===B.SHIPPING&&(O.value.country=S,k=g=>{const y=g.target,{value:_}=y;_&&le({country_code:_}),p(g),E()})),m.code===b.RegionId&&t===B.SHIPPING&&(O.value.selectedRegionId=S),m.code===b.Region&&(t===O.value.addressType&&(L=O.value.pending),P=i.countriesWithRequiredRegion.includes(e==null?void 0:e.country_id),N=pt(r),!P&&!i.displayStateIfOptional&&(F=U.Undefined),F=N.length>0?U.Select:U.Text,F===U.Select?t===B.SHIPPING?(O.value.selectedRegion=S,k=g=>{const _=g.target.value;le({country_code:O.value.country,region_id:_}),p(g),v(_)}):k=g=>{p(g);const _=g.target.value;v(_)}:F===U.Text&&t===B.SHIPPING&&(O.value.selectedRegion=S,f=g=>{const y=g.target,{value:_}=y;O.value.country&&le({country_code:O.value.country,region_name:_}),h(g)}),S=N.length>0?((C=N.find(g=>g.value===S))==null?void 0:C.value)||"":S),m.code===b.PostCode&&(P=!i.countriesWithOptionalZipCode.includes(e==null?void 0:e.country_id)),{...m,error:w,frontendInput:F,handleSelect:k,isDisabled:L,isRequired:P,onBlur:d,onChange:f,onInvalid:c,options:N,value:S}})}let Ce;function le(e){var a;const t=T.value.data,n=!!t,r=(a=t==null?void 0:t.shippingAddresses)==null?void 0:a[0],i=r==null?void 0:r.availableShippingMethods;n&&!i&&(clearTimeout(Ce),Ce=setTimeout(()=>{_e({criteria:e})},oe))}const ie=({addressType:e,code:t,index:n})=>n?`${e}-${t}-${n}`:`${e}-${t}`,se=e=>`checkout-address-form__${e}`,kt=({addressType:e,element:t})=>{const{code:n,value:r,defaultValue:i}=t;return o("input",{className:se(n),id:ie({addressType:e,code:n}),name:n,type:"hidden",value:r||i},n)},Ft=({addressType:e,element:t})=>{const{code:n,error:r,isDisabled:i,label:a,onBlur:s,onChange:l,onInvalid:d,validateRules:h,value:c}=t,p=xe(h);return o(re,{disabled:i,error:r,children:o(ue,{"aria-label":a,autocomplete:ge[n]||"off",className:se(n),floatingLabel:`${a} ${t.isRequired?"*":""}`,id:ie({addressType:e,code:n}),onBlur:s,onChange:l,onInvalid:d,placeholder:a,required:t.isRequired||!1,type:"text",name:n,value:c??void 0,...p})})},Et=({addressType:e,element:t})=>{const{code:n,error:r,isDisabled:i,isRequired:a,label:s,multilineCount:l,onBlur:d,onChange:h,onInvalid:c,validateRules:p,value:u}=t,E=l??0,v=xe(p);return o(X,{children:Array.from(Array(E).keys()).map(m=>o(re,{disabled:i,error:(r==null?void 0:r[m])||"",className:"dropin-field--multiline",children:o(ue,{id:ie({addressType:e,code:n,index:m}),className:se(n),floatingLabel:`${s} ${m!=0?m:""} ${a&&m===0?"*":""}`,autocomplete:m===0?ge[n]:"off","aria-label":s,placeholder:`${s} ${m!=0?m:""}`,type:"text",required:a&&m===0,onChange:h,onBlur:d,onInvalid:c,name:`${n}-${m}`,value:(u==null?void 0:u[m])||void 0,...v})},`${n}-${m}`))})},Ct=({addressType:e,element:t})=>{const{code:n,error:r,handleSelect:i,isDisabled:a,isRequired:s,label:l,onBlur:d,onInvalid:h,options:c,value:p}=t,u=i?{handleSelect:i}:{};return o(re,{disabled:a,error:r,children:o(it,{id:ie({addressType:e,code:n}),className:se(n),name:n,floatingLabel:`${l} ${s?"*":""}`,required:s,placeholder:l,"aria-label":l,options:c,value:p,autocomplete:ge[n]||"off",onBlur:d,onInvalid:h,...u},n)})},yt=({addressType:e,element:t})=>{switch(t.frontendInput){case"BOOLEAN":case"DATE":case"DATETIME":case"FILE":case"GALLERY":case"IMAGE":case"MEDIA_IMAGE":case"MULTISELECT":case"PRICE":case"TEXTAREA":case"UNDEFINED":case"WEIGHT":return null;case"HIDDEN":return kt({addressType:e,element:t});case"TEXT":return Ft({addressType:e,element:t});case"MULTILINE":return Et({addressType:e,element:t});case"SELECT":return Ct({addressType:e,element:t});default:return null}},xe=e=>e?e.reduce((t,n)=>{switch(n.name){case z.DateRangeMax:return{...t,max:n.value};case z.DateRangeMin:return{...t,min:n.value};case z.FileExtensions:return{...t,accept:n.value};case z.InputValidation:return{...t,pattern:_t(n.value)};case z.MaxFileSize:case z.MaxImageHeight:case z.MaxImageWidth:return t;case z.MaxTextLength:return{...t,maxLength:n.value};case z.MinTextLength:return{...t,minLength:n.value};default:throw new Error(`Unknown rule: ${n.name}`)}},{}):{},D={alpha:/^[a-zA-Z]+$/,alphanumeric:/^[a-zA-Z0-9]+$/,"alphanumeric-w-space":/^[a-zA-Z0-9 ]+$/,"alphanum-with-spaces":/^[a-zA-Z0-9 ]+$/,email:/^([a-z0-9,!#$%&'*+/=?^_`{|}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9,!#$%&'*+/=?^_`{|}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*@([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*\.(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]){2,})$/i,numeric:/^[0-9]+$/,url:/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w\-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/},_t=e=>{switch(e){case"alpha":return D.alpha.source;case"alphanumeric":return D.alphanumeric.source;case"alphanumeric-w-space":return D["alphanumeric-w-space"].source;case"alphanum-with-spaces":return D["alphanum-with-spaces"].source;case"url":return D.url.source;case"numeric":return D.numeric.source;case"email":return D.email.source;default:throw new Error(`Unknown validation type: ${e}`)}},Lt=e=>M(me,{...e,children:[o(A,{variant:"heading",size:"medium"}),o(A,{variant:"empty",size:"medium"}),o(A,{size:"large"}),o(A,{size:"large"}),o(A,{size:"large",fullWidth:!0}),o(A,{size:"large",fullWidth:!0,lines:3}),o(A,{size:"large"}),o(A,{size:"large"}),o(A,{size:"large"}),o(A,{size:"large"}),o(A,{size:"large"}),o(A,{size:"large"}),o(A,{size:"large"})]}),Mt=({addressType:e,className:t,fields:n,formRef:r,headingId:i,name:a,...s})=>M("div",{...s,className:R(["checkout-fields-form",t]),children:[o(ne,{level:2,children:o(q,{id:i}),className:"checkout-fields-form__title"}),o("form",{name:a,ref:r,className:R(["checkout-fields-form__form",t]),noValidate:!0,children:n.sort((l,d)=>!l.sortOrder||!d.sortOrder?l.code<d.code?-1:1:l.sortOrder-d.sortOrder).map(l=>yt({element:l,addressType:e}))})]}),bt=e=>{const t=new FormData(e),n=Object.fromEntries(t);return Object.entries(n).reduce((i,[a])=>{const s=e.elements[a];return s!=null&&s.validationMessage?{...i,[a]:s.validationMessage}:{...i}},{})};function It(e){const[t,n]=G({});return V(()=>{e&&n(r=>({...r,country_id:e}))},[e]),{defaultValues:t}}function St({country:e,addressType:t}){const[n,r]=G([]);return V(()=>{if(!e){r([]);return}Ue(e,t).then(i=>{r(i||[])}).catch(i=>{console.error(i)})},[r,e,t]),{availableRegions:n}}function At({autoFill:e,addressType:t,dismissError:n,loadAutoFill:r}){const[i,a]=G(!1),s=de.value.data,l=!!s,d=T.value.data,h=!!d;V(()=>{var w;if(!e||!h||i)return;let c,p=!1;c=jt({addressType:t,cart:d}),!c&&l&&(c=Gt({addressType:t,customer:s}),p=!0);const u=F=>F?F.split(Fe).length>1:!1;if(!c)return;a(!0);const E={[b.City]:c.city,[b.Company]:c.company||"",[b.Country]:c.country.value,[b.FirstName]:c.firstName,[b.LastName]:c.lastName,[b.PostCode]:c.postCode||"",[b.Telephone]:c.telephone||"",[b.Vat]:c.vatId||""},v=c.region;if(v){const F=(w=v==null?void 0:v.id)==null?void 0:w.toString();F?(E[b.Region]=F,E[b.RegionId]=F):E[b.Region]=v.code}c!=null&&c.street&&c.street.length>0&&c.street.forEach((F,k)=>{E[`${b.Street}${ke}${k}`]=F}),((c==null?void 0:c.customAttributes)||[]).forEach(F=>{u(F.code)?F.value.split(Fe).forEach((f,L)=>{E[`${F.code}${ke}${L}`]=f}):E[F.code]=F.value}),r({values:E,triggerAutoSave:p})},[t,e,d,s,i,h,l,r,n])}const Be=ct(({addressType:e,autoFill:t=!0,children:n,headingId:r,name:i,preselectedFields:a,saveAddressHandler:s,onCheckoutDataUpdate:l,...d},h)=>{const{data:c,pending:p}=Me.value,u=et.value.data,E=u===void 0,v=c===void 0||p,m=be.value.data,w=m===void 0,{defaultValues:F}=It(m==null?void 0:m.defaultCountry),k=Dt({fields:c,preselectedFields:a}),f=Pe(null),{address:L,errors:P,loadAutoFill:N,onBlur:S,dismissError:C,onChange:g,onInvalid:y,onSelection:_,setAddress:W}=Vt({defaultValues:F,formRef:f,onCheckoutDataUpdate:l,preselection:k,saveAddressHandler:s,type:e}),{availableRegions:ae}=St({country:L.country_id,addressType:e});if(dt(h,()=>({triggerSaveAddress:je=>{if(!f.current)return;const qe=bt(f.current);if($e(qe))return s({signal:je,address:L})}})),At({addressType:e,autoFill:t,loadAutoFill:N,dismissError:C}),v||E||w)return o(Lt,{"data-testid":`${e}-skeleton`});const Ge=vt({address:L,addressType:e,availableCountries:u,availableRegions:ae,config:m,dismissError:C,errors:P,fields:c,onBlur:S,onChange:g,onInvalid:y,onSelection:_,setAddress:W}),fe={[B.SHIPPING]:"shipping",[B.BILLING]:"billing"};return o(Mt,{...d,name:i,addressType:e,className:`checkout-${fe[e]}-form`,"data-testid":`${fe[e]}-form`,fields:Ge,formRef:f,headingId:r})}),Nt="DROPIN__CHECKOUT",pe=e=>`${Nt}__${e.toUpperCase()}`,wt=(e,t)=>{window.localStorage.setItem(pe(e),JSON.stringify(t))},Pt=e=>{const t=window.localStorage.getItem(pe(e));return t?JSON.parse(t):null},Rt=e=>{window.localStorage.removeItem(pe(e))};function $t(e){const[t,n]=H(null),r=K(a=>setTimeout(()=>{wt(e,a)},oe),[e]),i=K(()=>{Rt(e)},[e]);return x(()=>{const a=Pt(e);a&&n(a)},[e]),x(()=>{const a=ee.on("checkout/order",()=>{i()});return()=>{a==null||a.off()}},[i]),{addressBackup:t,backupAddress:r,removeAddressBackup:i}}const xt={[B.BILLING]:"billing",[B.SHIPPING]:"shipping"};function Bt({address:e,type:t}){x(()=>{const n=setTimeout(()=>{ee.emit("checkout/address",{type:xt[t],address:e})},oe);return()=>{clearTimeout(n)}},[e,t])}const Ot={badInput:"aria-label",patternMismatch:"aria-label",rangeOverflow:"max",rangeUnderflow:"min",tooLong:"maxlength",tooShort:"minlength",typeMismatch:"aria-label",valueMissing:"aria-label"},Ht=["badInput","patternMismatch","rangeOverflow","rangeUnderflow","tooLong","tooShort","typeMismatch","valueMissing"],Tt=e=>{const[t,n]=H({}),r=K(s=>{const{name:l,validity:d,validationMessage:h}=s;let c=d.valid?"":h;Ht.forEach(p=>{if(!d[p])return;const u=e[p];if(!u)return;const E=Ot[p];c=u.replace("{field}",s.getAttribute(E)||"")}),n(p=>({...p,[l]:c}))},[e]);return{errors:t,dismissError:s=>{t[s]&&n(l=>{const{[s]:d,...h}=l;return h})},validateFormElement:r,resetErrors:()=>{n({})}}},zt=e=>{const t=e.current;if(!t)return!1;const n=rt(t);return $e(n)},Vt=({defaultValues:e={},formRef:t,onCheckoutDataUpdate:n,preselection:r={},saveAddressHandler:i,type:a})=>{const s=J({badInput:"Checkout.AddressForm.Validity.badInput",patternMismatch:"Checkout.AddressForm.Validity.patternMismatch",rangeUnderflow:"Checkout.AddressForm.Validity.rangeUnderflow",tooLong:"Checkout.AddressForm.Validity.tooLong",tooShort:"Checkout.AddressForm.Validity.tooShort",typeMismatch:"Checkout.AddressForm.Validity.typeMismatch",valueMissing:"Checkout.AddressForm.Validity.valueMissing"}),l=nt(!1),[d,h]=H({});Bt({address:d,type:a});const{addressBackup:c,backupAddress:p,removeAddressBackup:u}=$t(a),{errors:E,validateFormElement:v,dismissError:m,resetErrors:w}=Tt(s),F=K(C=>{l.current=!1,i(C).then(()=>{u(),n==null||n()}).catch(g=>{l.current=!0,console.error("Saving address form failed:",g)})},[u,i,n]),k=(C,g)=>{h(y=>({...y,[C]:g})),l.current=!0},f=({values:C,triggerAutoSave:g=!1})=>{w(),h(y=>({...y,...C})),g&&(l.current=!0)},L=C=>{const g=C.target,{name:y,value:_}=g;k(y,_),v(g)},P=C=>{const g=C.target;v(g)},N=C=>{const g=C.target,{name:y,value:_}=g;k(y,_),v(g)},S=C=>{C.target.checkValidity()};return x(()=>{h(C=>({...e,...r,...c,...C}))},[e,r,c]),x(()=>{if(!l.current)return;const C=p(d);return()=>{clearTimeout(C)}},[d,p]),x(()=>{if(!l.current||!zt(t))return;const C=new AbortController,g=C.signal,y=setTimeout(()=>{F({signal:g,address:d})},oe);return()=>{clearTimeout(y),C.abort()}},[d,t,F]),{address:d,errors:E,loadAutoFill:f,dismissError:m,onChange:L,onSelection:N,onBlur:S,onInvalid:P,setAddress:h}},Wt={countryCode:b.Country,region:b.Region,postCode:b.PostCode};function Dt({fields:e,preselectedFields:t}){return ot(()=>!(!!e&&e.length>0)||!!!t?{}:Object.keys(t).reduce((i,a)=>{const s=Wt[a];return!s||!e.some(d=>d.code===s)?i:{...i,[s]:t[a]}},{}),[e,t])}const Gt=({addressType:e,customer:t})=>e===B.BILLING?t.defaultBillingAddress:t.defaultShippingAddress,jt=({addressType:e,cart:t})=>{if(e===B.BILLING)return t.billingAddress;const n=t.shippingAddresses;if(!(!n||n.length===0))return n[0]},Oe=e=>{var E;const t=Pe(null),n=Me.value.data,r=de.value.data,i=r==null?void 0:r.defaultBillingAddress,a=T.value.data,s=a==null?void 0:a.billingAddress,l=(E=a==null?void 0:a.shippingAddresses)==null?void 0:E[0],{checked:d,setByUser:h}=Ie.value,c=!d,p=Re(()=>!n||!c?!1:s?!lt(n,s,l):!!i,[c,n,s,l,i]),u=te(v=>we({signal:v.signal,input:{address:d?void 0:Le(v.address),same_as_shipping:d}}),[d]);return V(()=>{if(!h)return;const v=new AbortController;return d||t.current.triggerSaveAddress(v.signal),()=>{v.abort()}},[d,h]),o(Be,{...e,addressType:B.BILLING,autoFill:p,"data-testid":"billing-form",headingId:"Checkout.BillingAddress.title",name:qt,ref:t,saveAddressHandler:u,style:{display:c?"block":"none"}})};Oe.displayName="BillingFormContainer";const Hn=Y(Oe),qt="billing_address",Ut=e=>$.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},$.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M17.93 14.8V18.75H5.97C4.75 18.75 3.75 17.97 3.75 17V6.5M3.75 6.5C3.75 5.53 4.74 4.75 5.97 4.75H15.94V8.25H5.97C4.75 8.25 3.75 7.47 3.75 6.5Z",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}),$.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M19.35 11.64H14.04V14.81H19.35V11.64Z",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}),$.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M17.9304 11.64V8.25H15.1504",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"})),Zt=e=>$.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},$.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M2.47266 4.90002H15.1851V10.9645H21.2495L23 12.715V17.6124H20.073",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}),$.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M15.1758 5.87573H19.0019L21.0394 10.7636",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}),$.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M9.76151 16.7898C9.76151 18.0525 8.72845 19.076 7.46582 19.076C6.20318 19.076 5.17969 18.0429 5.17969 16.7803C5.17969 15.5176 6.20318 14.4941 7.46582 14.4941C8.72845 14.4941 9.75195 15.5176 9.76151 16.7803C9.76151 16.7803 9.76151 16.7803 9.76151 16.7898Z",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}),$.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M19.8726 16.7898C19.8726 18.062 18.8491 19.0855 17.5769 19.0855C16.3047 19.0855 15.2812 18.062 15.2812 16.7898C15.2812 15.5176 16.3047 14.4941 17.5769 14.4941C18.8491 14.4941 19.8726 15.5176 19.8726 16.7898Z",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}),$.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M8.08792 7.63574H1.69824",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}),$.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M7.11229 10.3619H1",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}),$.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M5.16084 13.0402H1.92773",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}),$.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M9.76172 16.7611H15.2809",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}),$.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M2.38672 16.7611H5.17025",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"})),He="login-form",Kt=({value:e,error:t,hint:n,onChange:r,onBlur:i,onInvalid:a})=>{const s=J({LoginFormLabel:"Checkout.LoginForm.ariaLabel",LoginFormFloatingLabel:"Checkout.LoginForm.floatingLabel",LoginFormPlaceholder:"Checkout.LoginForm.placeholder"});return o(re,{size:"medium",error:t,hint:n,children:o(ue,{id:"customer-email",name:"customer-email",type:"email",value:e,autocomplete:"email",placeholder:s.LoginFormPlaceholder,floatingLabel:s.LoginFormFloatingLabel,onChange:r,onBlur:i,onInvalid:a,required:!0,"aria-label":s.LoginFormLabel,"aria-required":!0})})},Xt=({onSignInClick:e,email:t})=>M("div",{className:"checkout-login-form__sign-in",children:[o(q,{id:"Checkout.LoginForm.account"}),o("a",{"data-testid":"sign-in-link",className:"checkout-login-form__link",href:"#",target:"_blank",rel:"noreferrer",onClick:n=>{n.preventDefault(),e==null||e(t)},children:o(q,{id:"Checkout.LoginForm.signIn"})})]}),Jt=({name:e,className:t,currentEmail:n,hint:r,error:i=null,onEmailChange:a,onEmailBlur:s,onEmailInvalid:l,onSignInClick:d,onSignOutClick:h,customer:c,...p})=>{const u=J({Title:"Checkout.LoginForm.title"}),E=!!c;return M("div",{...p,className:R(["checkout-login-form",t]),"data-testid":"checkout-login-form",children:[M("div",{className:"checkout-login-form__heading",children:[o(ne,{level:2,className:"checkout-login-form__title",children:u.Title}),E?o(Yt,{onSignOutClick:h}):o(Xt,{onSignInClick:d,email:n})]}),c?M("div",{className:"checkout-login-form__customer-details",children:[o("div",{className:"checkout-login-form__customer-name",children:`${c==null?void 0:c.firstName} ${c==null?void 0:c.lastName}`}),o("div",{className:"checkout-login-form__customer-email",children:c==null?void 0:c.email})]}):o("div",{className:"checkout-login-form__content",children:M("form",{className:R(["dropin-login-form__form",t]),name:e,noValidate:!0,children:[o("button",{type:"submit",disabled:!0,style:"display: none","aria-hidden":"true"}),o(Kt,{value:n||void 0,error:i||"",hint:r,onChange:a,onBlur:s,onInvalid:l})]})})]})},Yt=({onSignOutClick:e})=>M("p",{className:"checkout-login-form__sign-out",children:[o(q,{id:"Checkout.LoginForm.switch"}),o("a",{className:"checkout-login-form__link",href:"#",target:"_blank",rel:"noreferrer",onClick:t=>{t.preventDefault(),e==null||e()},children:o(q,{id:"Checkout.LoginForm.signOut"})})]}),Qt=e=>D.email.test(e),en=1e3,Te=({className:e,email:t=null,onSignInClick:n,onSignOutClick:r,...i})=>{const a=J({LoginFormInvalidEmailError:"Checkout.LoginForm.invalidEmailError",LoginFormMissingEmailError:"Checkout.LoginForm.missingEmailError",LoginFormEmailExistsAlreadyHaveAccount:"Checkout.LoginForm.emailExists.alreadyHaveAccount",LoginFormEmailExistsSignInButton:"Checkout.LoginForm.emailExists.signInButton",LoginFormEmailExistsForFasterCheckout:"Checkout.LoginForm.emailExists.forFasterCheckout"}),{data:s}=T.value,l=(s==null?void 0:s.id)||"",d=!!s,h=(s==null?void 0:s.email)||"",[c,p]=H(!1),[u,E]=H(t),[v,m]=H(null),[w,F]=H(!0),k=g=>g.valid?null:g.valueMissing?a.LoginFormMissingEmailError:a.LoginFormInvalidEmailError,f=de.value.data,L=g=>{const{value:y}=g.target;E(y),m(null),F(!0)},P=g=>{const{validity:y}=g.target;m(k(y))},N=g=>{const{validity:y}=g.target;m(k(y))};!c&&d&&(p(!0),E((s==null?void 0:s.email)||t)),x(()=>{if(v!==null&&v!==""||u===null||u===""||tt.authenticated)return;const g=setTimeout(()=>{Ze(u).then(y=>{F(y),h!==u&&Ke(u).catch(console.error)}).catch(y=>{console.log(y),m(a.LoginFormInvalidEmailError),F(!0)})},en);return()=>{g&&clearTimeout(g)}},[h,l,u,v,a.LoginFormInvalidEmailError]);const S=w?"":M(X,{children:[a.LoginFormEmailExistsAlreadyHaveAccount," ",o("a",{href:"#",onClick:g=>{g.preventDefault(),n==null||n(u)},children:a.LoginFormEmailExistsSignInButton})," ",a.LoginFormEmailExistsForFasterCheckout]});return o(Jt,{className:e,currentEmail:u,error:v,hint:S,name:He,onEmailBlur:P,onEmailChange:L,onEmailInvalid:N,onSignInClick:g=>{const y=u?Qt(u):!1;n==null||n(y?g:null)},onSignOutClick:r,customer:f,...i})};Te.displayName="LoginFormContainer";const Tn=Y(Te),tn=()=>M(me,{"data-testid":"payment-methods-skeleton",children:[o(A,{variant:"heading",size:"medium"}),o(A,{variant:"empty",size:"medium"}),o(A,{size:"xlarge",fullWidth:!0}),o(A,{size:"xlarge",fullWidth:!0})]}),nn=({code:e,isLoading:t,isSelected:n,onChange:r,title:i})=>o(Fn,{className:"checkout-payment-methods__method",label:i,name:"payment-method",value:e,selected:n,onChange:r,radioButtonProps:{"aria-busy":t}}),on=({className:e,paymentMethodContent:t,isLoading:n,onChange:r=()=>{},options:i,selection:a})=>{const s=J({Title:"Checkout.PaymentMethods.title",EmptyState:"Checkout.PaymentMethods.emptyState"});return i===void 0?o(tn,{}):M("div",{className:R(["checkout-payment-methods",e]),children:[o(ne,{level:2,className:"checkout-payment-methods__title",children:s.Title}),!n&&i.length===0&&o(Se,{icon:o(Ae,{source:Ut}),message:o("p",{children:s.EmptyState})}),M("div",{className:R(["checkout-payment-methods__wrapper"]),children:[n&&o(he,{className:"checkout-payment-methods__spinner"}),o("div",{className:R(["checkout-payment-methods__methods",["checkout-payment-methods--loading",n],["checkout-payment-methods--full-width",i.length%2!==0]]),children:i==null?void 0:i.map(l=>o(nn,{code:l.code,onChange:r,isSelected:l.code===a,title:l.title},l.code))}),t&&o("div",{className:"checkout-payment-methods__content",children:t})]})]})},ye={free:{render:e=>{const t=document.createElement("div");t.innerText="",e.replaceHTML(t)}},checkmo:{render:e=>{const t=document.createElement("div");t.innerText="",e.replaceHTML(t)}}};function rn(e){var y;const{onPlaceOrder:t,handleServerError:n,paymentMethodsSlot:r}=e,[i,a]=G(),[s,l]=G(),[d,h]=G(ye),[c,p]=G(!0),{data:u}=T.value,E=(u==null?void 0:u.id)??"",v=!!u,m=!!((y=u==null?void 0:u.shippingAddresses)!=null&&y[0]),F=!((u==null?void 0:u.isVirtual)??!1),k=u==null?void 0:u.availablePaymentMethods,f=u==null?void 0:u.selectedPaymentMethod,L=te(async _=>{try{if(a(_),!m&&F||_===(f==null?void 0:f.code))return;await Xe(_)}catch(W){console.error("setting payment method failed:",W)}},[m,F,f]);V(()=>{v&&(f!=null&&f.code?(k==null?void 0:k.some(W=>W.code===f.code))?a(f.code):k!=null&&k.length?L(k[0].code):a(void 0):k[0]&&L(s||k[0].code))},[k,v,f,L,s]);const P=async _=>{await L(_),f!=null&&f.code||l(_)},N=te((_,W)=>{if(!_){console.warn("Payment method handler is ignored because it has no code");return}if(!W){console.warn("Payment method handler is ignored because it is empty");return}h(ae=>({...ae,[_]:W}))},[]),S=r?o(Ee,{name:"PaymentMethods",slot:r,context:{addPaymentMethodHandler:N,replaceHTML(_){this.replaceWith(_),p(!1)}}}):null,C=i?d[i]:null,g=C?o(Ee,{name:"PaymentMethodContent",slot:C.render,context:{cartId:E,onPlaceOrder:t,handleServerError:n,replaceHTML(_){this.replaceWith(_)}}},C):void 0;return V(()=>{!c&&d!=ye&&console.warn("Payment method handlers you have added are ignored because the default content has been replaced")},[c,d]),{availablePaymentMethods:k,selectedPaymentMethod:i,onPaymentMethodChange:P,paymentMethodContent:g,mainSlotContent:S,isDefaultContentUsed:c}}const ze=e=>{const{onPlaceOrder:t,handleServerError:n,paymentMethodsSlot:r}=e,{availablePaymentMethods:i,selectedPaymentMethod:a,onPaymentMethodChange:s,paymentMethodContent:l,mainSlotContent:d,isDefaultContentUsed:h}=rn({onPlaceOrder:t,handleServerError:n,paymentMethodsSlot:r});return M(X,{children:[d&&o(d.type,{ref:d.ref,...d.props}),h&&o(on,{options:i,selection:a,onChange:s,paymentMethodContent:l,isLoading:T.value.pending})]})};ze.displayName="PaymentMethodsContainer";const zn=Y(ze),sn=({className:e,onClick:t=()=>{},disabled:n=!1})=>o("div",{className:R(["checkout-place-order",e]),children:o(st,{className:R(["checkout-place-order__button",e]),"data-testid":"place-order-button",disabled:n,onClick:t,size:"medium",type:"submit",variant:"primary",children:o(q,{id:"Checkout.PlaceOrder.button"})},"placeOrder")}),an=[He,"shipping_address","billing_address"],ln=e=>{const t=e.querySelector(":invalid");t&&(t.scrollIntoView({behavior:"smooth"}),t.focus())},cn=()=>{const t=(Array.from(document.forms)||[]).filter(r=>an.includes(r.name)).filter(r=>r.offsetParent!==null).filter(r=>!r.checkValidity()),n=t.length===0;if(!n){const r=t[0];ln(r)}return n},dn=({onClick:e,handleServerError:t})=>{const[n,r]=G(!1),i=T.value.pending,a=async()=>{if(cn())try{await e()}catch(s){t(s)}};return V(()=>{const s=ee.on("cart/initialized",l=>{const d=(l==null?void 0:l.items)||[];r(d.some(h=>h.outOfStock||h.insufficientQuantity))},{eager:!0});return()=>{s==null||s.off()}},[]),o(sn,{onClick:a,disabled:i||n})},Vn=Y(dn),Ve=({onCheckoutDataUpdate:e,preselectedFields:t,...n})=>{const r=Ie.value.checked,i=te(a=>Je({signal:a.signal,address:Le(a.address)}).then(()=>{if(r)return we({input:{same_as_shipping:!0}})}),[r]);return o(Be,{...n,addressType:B.SHIPPING,headingId:"Checkout.ShippingAddress.title",name:un,onCheckoutDataUpdate:e,preselectedFields:t,saveAddressHandler:i})};Ve.displayName="ShippingFormContainer";const Wn=Y(Ve),un="shipping_address",mn=()=>{const e=()=>window.innerWidth>=1920?"xxlarge":window.innerWidth>=1366?"xlarge":window.innerWidth>=1024?"large":window.innerWidth>=768?"medium":"small",[t,n]=H(e());return x(()=>{let r;const i=()=>{r&&clearTimeout(r),r=setTimeout(()=>n(e()),50)};return window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i),r&&clearTimeout(r)}},[]),t},hn=()=>{const e=K(()=>{document.body.style.overflow="hidden"},[]),t=K(()=>{document.body.style.overflow=""},[]);return{lockScroll:e,unlockScroll:t}},We=()=>M("div",{className:"checkout-heading",children:[o(ne,{level:1,className:"checkout-heading__title",children:o(q,{id:"Checkout.title"})}),o(j,{variant:"primary",className:"checkout-heading__divider-primary"})]}),gn=({billingAddress:e,billToShippingAddress:t,cartSummaryList:n,emptyCart:r,login:i,orderSummary:a,outOfStock:s,paymentMethods:l,placeOrder:d,shippingAddress:h,shippingMethods:c})=>M(X,{children:[o(We,{}),n&&o(I,{node:n}),o(I,{node:r}),o(I,{node:s}),o(I,{node:i}),o(j,{variant:"primary"}),o(I,{node:h}),o(I,{node:t}),o(I,{node:c}),o(j,{variant:"primary"}),o(I,{node:l}),o(I,{node:e}),a&&o(I,{node:a}),o(I,{node:s}),o(j,{variant:"primary"}),o(I,{node:d})]}),pn=({billingAddress:e,billToShippingAddress:t,cartSummaryList:n,emptyCart:r,login:i,orderSummary:a,outOfStock:s,paymentMethods:l,placeOrder:d,shippingAddress:h,shippingMethods:c})=>M(X,{children:[M("div",{className:"checkout__main",children:[o(We,{}),o(I,{node:r}),o(I,{node:s}),o(I,{node:i}),o(j,{variant:"primary"}),o(I,{node:h}),o(I,{node:t}),o(I,{node:c}),o(j,{variant:"primary"}),o(I,{node:e}),o(I,{node:l}),o(j,{variant:"primary"}),o(I,{node:d})]}),M("div",{className:"checkout__aside",children:[a&&o(I,{node:a}),n&&o(I,{node:n})]})]}),fn=({blocks:e})=>mn()==="small"?o(gn,{...e}):o(pn,{...e}),vn=({children:e,className:t,isLoading:n=!1,...r})=>M("div",{"data-testid":"checkout",className:R(["checkout",t]),...r,children:[n&&o(kn,{}),o(ut,{}),o(mt,{}),o("div",{className:"checkout__content",children:e})]});vn.Main=fn;const ne=({className:e,children:t,level:n=2})=>{const r=n>=1&&n<=6?`h${n}`:"h2";return o(r,{className:e,children:t})},kn=({className:e})=>{const{lockScroll:t,unlockScroll:n}=hn();return x(()=>(t(),n),[t,n]),o("div",{"data-testid":"checkout-overlay-loader",className:R(["checkout-overlay-loader",e]),children:o(he,{})})},Fn=({label:e,name:t,value:n,icon:r,selected:i,onChange:a,className:s,children:l,radioButtonProps:d,...h})=>o("div",{className:R(["checkout-toggle-button",s,["checkout-toggle-button__selected",i]]),...h,children:M("label",{className:"checkout-toggle-button__actionButton",children:[o(Ne,{...d,label:"",name:t,value:n,checked:i,onChange:()=>a(n),"aria-label":e,className:R([s,"checkout-toggle-button__radioButton"])}),M("div",{className:"checkout-toggle-button__content",children:[r&&o(r.type,{...r==null?void 0:r.props,className:"checkout-toggle-button__icon"}),e]})]})}),En=({className:e,isLoading:t=!1,onSelectionChange:n=()=>{},options:r,selection:i,...a})=>{const s=J({Title:"Checkout.ShippingMethods.title",EmptyState:"Checkout.ShippingMethods.emptyState"});return r===void 0?o(Cn,{}):M("div",{...a,className:R(["checkout-shipping-methods",e]),children:[o(ne,{level:3,className:"checkout-shipping-methods__title",children:s.Title}),!t&&r.length===0&&o(Se,{icon:o(Ae,{source:Zt}),message:o("p",{children:s.EmptyState})}),M("div",{className:R(["checkout-shipping-methods__content"]),children:[t&&o(he,{className:"checkout-shipping-methods__spinner"}),o("div",{className:R(["checkout-shipping-methods__options",["checkout-shipping-methods__options--loading",t]]),children:r.map(l=>o(Ne,{"data-testid":"shipping-method-radiobutton","aria-busy":t,id:l.value,name:"shipping-method",className:"checkout-shipping-methods__method",label:M(X,{children:[o(at,{amount:l.amount.value,currency:l.amount.currency})," ",o("span",{children:l.carrier.title})]}),description:l.title,value:l.value,checked:(i==null?void 0:i.value)===l.value,onChange:()=>n(l)},l.value))})]})]})},Cn=()=>M(me,{"data-testid":"shipping-methods-skeleton",children:[o(A,{variant:"heading",size:"small"}),o(A,{variant:"empty",size:"small"}),o(A,{size:"medium",fullWidth:!0}),o(A,{size:"medium",fullWidth:!0})]});function yn(){var p;const[e,t]=H(),[n,r]=H();x(()=>{ee.on("checkout/address",({address:u,type:E})=>{E==="shipping"&&t(u)})},[]),x(()=>{r(Z.value)},[Z.value]),x(()=>{Q.value.pending?r(void 0):r(Z.value)},[Q.value.pending]);const{country_id:i,region_id:a,region:s,postcode:l}=e||{},d=!!e,h=T.value.data,c=!!((p=h==null?void 0:h.shippingAddresses)!=null&&p[0]);x(()=>{c||!n||!d||ee.emit("shipping/estimate",{address:ht({country_id:i,region_id:a,region:s,postcode:l}),shippingMethod:gt(n)})},[n,i,a,s,l,d,c])}const ce=(e,t)=>e.code===t.code&&e.carrier.code===t.carrier.code;function _n({onCheckoutDataUpdate:e,preSelectedMethod:t}){const n=be.value.data,r=!n,i=T.value.data,a=T.value.pending,s=Q.value.data,l=Q.value.pending,d=Z.value,h=i==null?void 0:i.id,c=i==null?void 0:i.shippingAddresses,p=c==null?void 0:c[0],u=!!p,E=p==null?void 0:p.availableShippingMethods,v=p==null?void 0:p.selectedShippingMethod,m=E||s,w=te(f=>{if(!u)return;const L={method_code:f.code,carrier_code:f.carrier.code};Ye([L]).then(()=>{e==null||e()}).catch(P=>{console.error("setting shipping methods on cart failed:",P)})},[u,e]),F=f=>{Z.value=f},k=Re(()=>{if(!(m!=null&&m.length))return;const f=m[0],L=d||v;return L?m.some(N=>ce(N,L))?L:f:m.find(S=>S.carrier.code===(t==null?void 0:t.carrierCode)&&S.code===(t==null?void 0:t.methodCode))||f},[d,v,m,t]);return V(()=>{k&&((!d||!ce(k,d))&&(Z.value=k),(!v||!ce(k,v))&&w(k))},[k,d,v,w]),V(()=>{if(!h||E)return;const{country:f,selectedRegion:L,selectedRegionId:P}=O.value,N=f||(n==null?void 0:n.defaultCountry);N&&_e({criteria:{country_code:N,region_name:L,region_id:P}}).catch(C=>{Q.value={pending:!1,data:[]},console.error("shipping methods estimation failed:",C)})},[h,E,n]),{isLoading:a||r||l,options:m,selection:k,onSelectionChange:F}}const De=({preSelectedMethod:e,onCheckoutDataUpdate:t,...n})=>{const{isLoading:r,options:i,selection:a,onSelectionChange:s}=_n({preSelectedMethod:e,onCheckoutDataUpdate:t});return yn(),o(En,{...n,className:"checkout-shipping-methods",isLoading:r,onSelectionChange:s,options:i,selection:a})};De.displayName="ShippingMethodsContainer";const Dn=Y(De);export{Hn as B,vn as C,Tn as L,Vn as P,Dn as S,Wn as a,un as b,zn as c,He as d,qt as e};
