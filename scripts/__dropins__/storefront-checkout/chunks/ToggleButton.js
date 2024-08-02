import{jsx as o,Fragment as T,jsxs as B}from"@dropins/tools/preact-jsx-runtime.js";import{events as ne}from"@dropins/tools/event-bus.js";import{A as P,y,n as oe,V as L,l as pe,z as ve,q as Fe,m as Ie}from"./fixtures.js";import{b as Q,a as p,A as $,e as Ee,D as U,g as Ae,M as ee,c as te}from"./getMultilineValues.js";import{useState as G,useCallback as O,useEffect as x,useRef as Ce,useMemo as ke}from"@dropins/tools/preact-hooks.js";import{classes as V,getFormErrors as Se,VComponent as D}from"@dropins/tools/lib.js";import{Text as ae,useText as we}from"@dropins/tools/i18n.js";import{Field as Z,Input as se,Picker as be,Skeleton as Me,SkeletonRow as S,Divider as Re,ProgressSpinner as $e}from"@dropins/tools/components.js";/* empty css                     */import{forwardRef as ye,useRef as Le,useImperativeHandle as Ne,useState as j,useEffect as X}from"@dropins/tools/preact-compat.js";import{E as _e}from"./ErrorBanner.js";import{M as De}from"./MergedCartBanner.js";const J={firstname:"given-name",lastname:"family-name",company:"organization",country:"country",region:"address-level1",city:"address-level2",postcode:"postal-code",telephone:"tel",street:"address-line1",email:"email",middlename:"additional-name",prefix:"honorific-prefix",suffix:"honorific-suffix"};function ie(e){return Object.keys(e).length===0&&e.constructor===Object}const xe=e=>e.map(t=>{var n;const r=((n=t==null?void 0:t.id)==null?void 0:n.toString())||t.code;return{text:t.name,value:r}}),ze=e=>e?e.map(t=>({text:t.label,value:t.value})):[];function Pe({address:e,addressType:t,availableCountries:r,availableRegions:n,config:a,dismissError:i,errors:s,fields:d,onBlur:m,onChange:v,onInvalid:c,onSelection:h,setAddress:A}){const I=()=>{A(l=>({...l,[p.Region]:"",[p.RegionId]:""})),i(p.Region)},E=l=>{A(k=>({...k,[p.RegionId]:l}))};return d.map(l=>{var F;let k,g=l.frontendInput,C=h,M=v,N=l.isDisabled,_=l.isRequired,R=[],u;return g===P.Multiline?(u=Q(l.code,e),k=Q(l.code,s)):(u=e[l.code],k=s[l.code]||""),l.code===p.Country&&(R=ze(r),t===$.SHIPPING&&(y.value.country=u,C=f=>{const w=f.target,{value:b}=w;b&&W({country_code:b}),h(f),I()})),l.code===p.RegionId&&t===$.SHIPPING&&(y.value.selectedRegionId=u),l.code===p.Region&&(t===y.value.addressType&&(N=y.value.pending),_=a.countriesWithRequiredRegion.includes(e==null?void 0:e.country_id),R=xe(n),!_&&!a.displayStateIfOptional&&(g=P.Undefined),g=R.length>0?P.Select:P.Text,g===P.Select?t===$.SHIPPING?(y.value.selectedRegion=u,C=f=>{const b=f.target.value;W({country_code:y.value.country,region_id:b}),h(f),E(b)}):C=f=>{h(f);const b=f.target.value;E(b)}:g===P.Text&&t===$.SHIPPING&&(y.value.selectedRegion=u,M=f=>{const w=f.target,{value:b}=w;y.value.country&&W({country_code:y.value.country,region_name:b}),v(f)}),u=R.length>0?((F=R.find(f=>f.value===u))==null?void 0:F.value)||"":u),l.code===p.PostCode&&(_=!a.countriesWithOptionalZipCode.includes(e==null?void 0:e.country_id)),{...l,error:k,frontendInput:g,handleSelect:C,isDisabled:N,isRequired:_,onBlur:m,onChange:M,onInvalid:c,options:R,value:u}})}let re;function W(e){var i;const t=oe.value.data,r=!!t,n=(i=t==null?void 0:t.shippingAddresses)==null?void 0:i[0],a=n==null?void 0:n.availableShippingMethods;r&&!a&&(clearTimeout(re),re=setTimeout(()=>{Ee({criteria:e})},U))}const H=({addressType:e,code:t,index:r})=>r?`${e}-${t}-${r}`:`${e}-${t}`,q=e=>`checkout-address-form__${e}`,Be=({addressType:e,element:t})=>{const{code:r,value:n,defaultValue:a}=t;return o("input",{className:q(r),id:H({addressType:e,code:r}),name:r,type:"hidden",value:n||a},r)},Oe=({addressType:e,element:t})=>{const{code:r,error:n,isDisabled:a,label:i,onBlur:s,onChange:d,onInvalid:m,validateRules:v,value:c}=t,h=ce(v);return o(Z,{disabled:a,error:n,children:o(se,{"aria-label":i,autocomplete:J[r]||"off",className:q(r),floatingLabel:`${i} ${t.isRequired?"*":""}`,id:H({addressType:e,code:r}),onBlur:s,onChange:d,onInvalid:m,placeholder:i,required:t.isRequired||!1,type:"text",name:r,value:c??void 0,...h})})},Ve=({addressType:e,element:t})=>{const{code:r,error:n,isDisabled:a,isRequired:i,label:s,multilineCount:d,onBlur:m,onChange:v,onInvalid:c,validateRules:h,value:A}=t,I=d??0,E=ce(h);return o(T,{children:Array.from(Array(I).keys()).map(l=>o(Z,{disabled:a,error:(n==null?void 0:n[l])||"",className:"dropin-field--multiline",children:o(se,{id:H({addressType:e,code:r,index:l}),className:q(r),floatingLabel:`${s} ${l!=0?l:""} ${i&&l===0?"*":""}`,autocomplete:l===0?J[r]:"off","aria-label":s,placeholder:`${s} ${l!=0?l:""}`,type:"text",required:i&&l===0,onChange:v,onBlur:m,onInvalid:c,name:`${r}-${l}`,value:(A==null?void 0:A[l])||void 0,...E})},`${r}-${l}`))})},Te=({addressType:e,element:t})=>{const{code:r,error:n,handleSelect:a,isDisabled:i,isRequired:s,label:d,onBlur:m,onInvalid:v,options:c,value:h}=t,A=a?{handleSelect:a}:{};return o(Z,{disabled:i,error:n,children:o(be,{id:H({addressType:e,code:r}),className:q(r),name:r,floatingLabel:`${d} ${s?"*":""}`,required:s,placeholder:d,"aria-label":d,options:c,value:h,autocomplete:J[r]||"off",onBlur:m,onInvalid:v,...A},r)})},Ue=({addressType:e,element:t})=>{switch(t.frontendInput){case"BOOLEAN":case"DATE":case"DATETIME":case"FILE":case"GALLERY":case"IMAGE":case"MEDIA_IMAGE":case"MULTISELECT":case"PRICE":case"TEXTAREA":case"UNDEFINED":case"WEIGHT":return null;case"HIDDEN":return Be({addressType:e,element:t});case"TEXT":return Oe({addressType:e,element:t});case"MULTILINE":return Ve({addressType:e,element:t});case"SELECT":return Te({addressType:e,element:t});default:return null}},ce=e=>e?e.reduce((t,r)=>{switch(r.name){case L.DateRangeMax:return{...t,max:r.value};case L.DateRangeMin:return{...t,min:r.value};case L.FileExtensions:return{...t,accept:r.value};case L.InputValidation:return{...t,pattern:Ge(r.value)};case L.MaxFileSize:case L.MaxImageHeight:case L.MaxImageWidth:return t;case L.MaxTextLength:return{...t,maxLength:r.value};case L.MinTextLength:return{...t,minLength:r.value};default:throw new Error(`Unknown rule: ${r.name}`)}},{}):{},z={alpha:/^[a-zA-Z]+$/,alphanumeric:/^[a-zA-Z0-9]+$/,"alphanumeric-w-space":/^[a-zA-Z0-9 ]+$/,"alphanum-with-spaces":/^[a-zA-Z0-9 ]+$/,email:/^([a-z0-9,!#$%&'*+/=?^_`{|}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9,!#$%&'*+/=?^_`{|}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*@([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*\.(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]){2,})$/i,numeric:/^[0-9]+$/,url:/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w\-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/},Ge=e=>{switch(e){case"alpha":return z.alpha.source;case"alphanumeric":return z.alphanumeric.source;case"alphanumeric-w-space":return z["alphanumeric-w-space"].source;case"alphanum-with-spaces":return z["alphanum-with-spaces"].source;case"url":return z.url.source;case"numeric":return z.numeric.source;case"email":return z.email.source;default:throw new Error(`Unknown validation type: ${e}`)}},He=e=>B(Me,{...e,children:[o(S,{variant:"heading",size:"medium"}),o(S,{variant:"empty",size:"medium"}),o(S,{size:"large"}),o(S,{size:"large"}),o(S,{size:"large",fullWidth:!0}),o(S,{size:"large",fullWidth:!0,lines:3}),o(S,{size:"large"}),o(S,{size:"large"}),o(S,{size:"large"}),o(S,{size:"large"}),o(S,{size:"large"}),o(S,{size:"large"}),o(S,{size:"large"})]}),qe=({addressType:e,className:t,fields:r,formRef:n,headingId:a,name:i,...s})=>B("div",{...s,className:V(["checkout-fields-form",t]),children:[o(de,{level:2,children:o(ae,{id:a}),className:"checkout-fields-form__title"}),o("form",{name:i,ref:n,className:V(["checkout-fields-form__form",t]),noValidate:!0,children:r.sort((d,m)=>!d.sortOrder||!m.sortOrder?d.code<m.code?-1:1:d.sortOrder-m.sortOrder).map(d=>Ue({element:d,addressType:e}))})]}),We=e=>{const t=new FormData(e),r=Object.fromEntries(t);return Object.entries(r).reduce((a,[i])=>{const s=e.elements[i];return s!=null&&s.validationMessage?{...a,[i]:s.validationMessage}:{...a}},{})};function Ze(e){const[t,r]=j({});return X(()=>{e&&r(n=>({...n,country_id:e}))},[e]),{defaultValues:t}}function je({country:e,addressType:t}){const[r,n]=j([]);return X(()=>{if(!e){n([]);return}Ae(e,t).then(a=>{n(a||[])}).catch(a=>{console.error(a)})},[n,e,t]),{availableRegions:r}}function Xe({autoFill:e,addressType:t,dismissError:r,loadAutoFill:n}){const[a,i]=j(!1),s=Ie.value.data,d=!!s,m=oe.value.data,v=!!m;X(()=>{var k;if(!e||!v||a)return;let c,h=!1;c=dt({addressType:t,cart:m}),!c&&d&&(c=ut({addressType:t,customer:s}),h=!0);const A=g=>g?g.split(te).length>1:!1;if(!c)return;i(!0);const I={[p.City]:c.city,[p.Company]:c.company||"",[p.Country]:c.country.value,[p.FirstName]:c.firstName,[p.LastName]:c.lastName,[p.PostCode]:c.postCode||"",[p.Telephone]:c.telephone||"",[p.Vat]:c.vatId||""},E=c.region;if(E){const g=(k=E==null?void 0:E.id)==null?void 0:k.toString();g?(I[p.Region]=g,I[p.RegionId]=g):I[p.Region]=E.code}c!=null&&c.street&&c.street.length>0&&c.street.forEach((g,C)=>{I[`${p.Street}${ee}${C}`]=g}),((c==null?void 0:c.customAttributes)||[]).forEach(g=>{A(g.code)?g.value.split(te).forEach((M,N)=>{I[`${g.code}${ee}${N}`]=M}):I[g.code]=g.value}),n({values:I,triggerAutoSave:h})},[t,e,m,s,a,v,d,n,r])}const Lt=ye(({addressType:e,autoFill:t=!0,children:r,headingId:n,name:a,preselectedFields:i,saveAddressHandler:s,...d},m)=>{const{data:v,pending:c}=pe.value,h=ve.value.data,A=h===void 0,I=v===void 0||c,E=Fe.value.data,l=E===void 0,{defaultValues:k}=Ze(E==null?void 0:E.defaultCountry),g=lt({fields:v,preselectedFields:i}),C=Le(null),{address:M,errors:N,loadAutoFill:_,onBlur:R,dismissError:u,onChange:F,onInvalid:f,onSelection:w,setAddress:b}=it({formRef:C,type:e,defaultValues:k,preselection:g,saveAddressHandler:s}),{availableRegions:me}=je({country:M.country_id,addressType:e});if(Ne(m,()=>({triggerSaveAddress:he=>{if(!C.current)return;const fe=We(C.current);if(ie(fe))return s({signal:he,address:M})}})),Xe({addressType:e,autoFill:t,loadAutoFill:_,dismissError:u}),I||A||l)return o(He,{"data-testid":`${e}-skeleton`});const ge=Pe({address:M,addressType:e,availableCountries:h,availableRegions:me,config:E,dismissError:u,errors:N,fields:v,onBlur:R,onChange:F,onInvalid:f,onSelection:w,setAddress:b}),Y={[$.SHIPPING]:"shipping",[$.BILLING]:"billing"};return o(qe,{...d,name:a,addressType:e,className:`checkout-${Y[e]}-form`,"data-testid":`${Y[e]}-form`,fields:ge,formRef:C,headingId:n})}),Je="DROPIN__CHECKOUT",K=e=>`${Je}__${e.toUpperCase()}`,Ke=(e,t)=>{window.localStorage.setItem(K(e),JSON.stringify(t))},Ye=e=>{const t=window.localStorage.getItem(K(e));return t?JSON.parse(t):null},Qe=e=>{window.localStorage.removeItem(K(e))};function et(e){const[t,r]=G(null),n=O(i=>setTimeout(()=>{Ke(e,i)},U),[e]),a=O(()=>{Qe(e)},[e]);return x(()=>{const i=Ye(e);i&&r(i)},[e]),x(()=>{const i=ne.on("checkout/order",()=>{a()});return()=>{i==null||i.off()}},[a]),{addressBackup:t,backupAddress:n,removeAddressBackup:a}}const tt={[$.BILLING]:"billing",[$.SHIPPING]:"shipping"};function rt({address:e,type:t}){x(()=>{const r=setTimeout(()=>{ne.emit("checkout/address",{type:tt[t],address:e})},U);return()=>{clearTimeout(r)}},[e,t])}const nt={badInput:"aria-label",patternMismatch:"aria-label",rangeOverflow:"max",rangeUnderflow:"min",tooLong:"maxlength",tooShort:"minlength",typeMismatch:"aria-label",valueMissing:"aria-label"},ot=["badInput","patternMismatch","rangeOverflow","rangeUnderflow","tooLong","tooShort","typeMismatch","valueMissing"],at=e=>{const[t,r]=G({}),n=O(s=>{const{name:d,validity:m,validationMessage:v}=s;let c=m.valid?"":v;ot.forEach(h=>{if(!m[h])return;const A=e[h];if(!A)return;const I=nt[h];c=A.replace("{field}",s.getAttribute(I)||"")}),r(h=>({...h,[d]:c}))},[e]);return{errors:t,dismissError:s=>{t[s]&&r(d=>{const{[s]:m,...v}=d;return v})},validateFormElement:n,resetErrors:()=>{r({})}}},st=e=>{const t=e.current;if(!t)return!1;const r=Se(t);return ie(r)},it=({formRef:e,type:t,defaultValues:r={},preselection:n={},saveAddressHandler:a})=>{const i=we({badInput:"Checkout.AddressForm.Validity.badInput",patternMismatch:"Checkout.AddressForm.Validity.patternMismatch",rangeUnderflow:"Checkout.AddressForm.Validity.rangeUnderflow",tooLong:"Checkout.AddressForm.Validity.tooLong",tooShort:"Checkout.AddressForm.Validity.tooShort",typeMismatch:"Checkout.AddressForm.Validity.typeMismatch",valueMissing:"Checkout.AddressForm.Validity.valueMissing"}),s=Ce(!1),[d,m]=G({});rt({address:d,type:t});const{addressBackup:v,backupAddress:c,removeAddressBackup:h}=et(t),{errors:A,validateFormElement:I,dismissError:E,resetErrors:l}=at(i),k=O(u=>{s.current=!1,a(u).then(()=>{h()}).catch(F=>{s.current=!0,console.error("Saving address form failed:",F)})},[h,a]),g=(u,F)=>{m(f=>({...f,[u]:F})),s.current=!0},C=({values:u,triggerAutoSave:F=!1})=>{l(),m(f=>({...f,...u})),F&&(s.current=!0)},M=u=>{const F=u.target,{name:f,value:w}=F;g(f,w),I(F)},N=u=>{const F=u.target;I(F)},_=u=>{const F=u.target,{name:f,value:w}=F;g(f,w),I(F)},R=u=>{u.target.checkValidity()};return x(()=>{m(u=>({...r,...n,...v,...u}))},[r,n,v]),x(()=>{if(!s.current)return;const u=c(d);return()=>{clearTimeout(u)}},[d,c]),x(()=>{if(!s.current||!st(e))return;const u=new AbortController,F=u.signal,f=setTimeout(()=>{k({signal:F,address:d})},U);return()=>{clearTimeout(f),u.abort()}},[d,e,k]),{address:d,errors:A,loadAutoFill:C,dismissError:E,onChange:M,onSelection:_,onBlur:R,onInvalid:N,setAddress:m}},ct={countryCode:p.Country,region:p.Region,postCode:p.PostCode};function lt({fields:e,preselectedFields:t}){return ke(()=>!(!!e&&e.length>0)||!!!t?{}:Object.keys(t).reduce((a,i)=>{const s=ct[i];return!s||!e.some(m=>m.code===s)?a:{...a,[s]:t[i]}},{}),[e,t])}const ut=({addressType:e,customer:t})=>e===$.BILLING?t.defaultBillingAddress:t.defaultShippingAddress,dt=({addressType:e,cart:t})=>{if(e===$.BILLING)return t.billingAddress;const r=t.shippingAddresses;if(!(!r||r.length===0))return r[0]},mt=()=>{const e=()=>window.innerWidth>=1920?"xxlarge":window.innerWidth>=1366?"xlarge":window.innerWidth>=1024?"large":window.innerWidth>=768?"medium":"small",[t,r]=G(e());return x(()=>{let n;const a=()=>{n&&clearTimeout(n),n=setTimeout(()=>r(e()),50)};return window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a),n&&clearTimeout(n)}},[]),t},le=({children:e,className:t})=>mt()==="small"?o(T,{children:e}):o("div",{className:t,children:e}),gt=({sections:e})=>o(le,{className:"checkout__aside",children:e.orderSummary&&o(D,{node:e.orderSummary})}),ht=({billingAddress:e,billToShippingAddress:t,login:r,paymentMethods:n,placeOrder:a,shippingAddress:i,shippingMethods:s})=>B(T,{children:[o(D,{node:r}),i&&o(D,{node:i}),t&&o(D,{node:t}),s&&o(D,{node:s}),o(D,{node:n}),o(D,{node:e}),o(D,{node:a})]}),ft=({sections:e})=>o(le,{className:"checkout__main",children:B(T,{children:[B("div",{className:"checkout-heading",children:[o(de,{level:1,className:"checkout-heading__title",children:o(ae,{id:"Checkout.title"})}),o(Re,{variant:"primary",className:"checkout-heading__divider-primary"})]}),e&&o(ht,{...e})]})}),ue=({children:e,className:t,isLoading:r=!1,...n})=>B("div",{"data-testid":"checkout",className:V(["checkout",t]),...n,children:[r&&o(vt,{}),o(_e,{}),o(De,{}),o("div",{className:"checkout__content",children:e})]});ue.Main=ft;ue.Aside=gt;const de=({className:e,children:t,level:r=2})=>{const n=r>=1&&r<=6?`h${r}`:"h2";return o(n,{className:e,children:t})},pt=()=>{const e=O(()=>{document.body.style.overflow="hidden"},[]),t=O(()=>{document.body.style.overflow=""},[]);return{lockScroll:e,unlockScroll:t}},vt=({className:e})=>{const{lockScroll:t,unlockScroll:r}=pt();return x(()=>(t(),r),[t,r]),o("div",{"data-testid":"checkout-overlay-loader",className:V(["checkout-overlay-loader",e]),children:o($e,{})})};export{Lt as A,ue as C,de as H,z as p};
