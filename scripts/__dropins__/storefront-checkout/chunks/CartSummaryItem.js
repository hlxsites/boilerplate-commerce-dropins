import{events as ue}from"@dropins/tools/event-bus.js";import{r as M,e as K}from"./transform-shipping-methods.js";import{o as V,V as S,u as le,p as de,i as me,q as he}from"./countries.js";import{b as X,a as F,A as R,e as fe,D as B,g as ge,M as Y,c as pe}from"./estimateShippingMethods.js";import{useState as P,useEffect as D,useCallback as T,useRef as Fe,useMemo as ve}from"@dropins/tools/preact-hooks.js";import{classes as U,getFormErrors as Ie,VComponent as w}from"@dropins/tools/lib.js";import{Text as Q,useText as Ee}from"@dropins/tools/i18n.js";import{Skeleton as be,SkeletonRow as k,Field as G,Input as ee,Picker as Ae}from"@dropins/tools/components.js";/* empty css                     */import{jsxs as x,jsx as o,Fragment as z}from"@dropins/tools/preact-jsx-runtime.js";import{forwardRef as _e,useRef as ke,useImperativeHandle as Ce,useState as H,useEffect as q}from"@dropins/tools/preact-compat.js";const W={firstname:"given-name",lastname:"family-name",company:"organization",country:"country",region:"address-level1",city:"address-level2",postcode:"postal-code",telephone:"tel",street:"address-line1",email:"email",middlename:"additional-name",prefix:"honorific-prefix",suffix:"honorific-suffix"};function te(e){return Object.keys(e).length===0&&e.constructor===Object}const $e=e=>(e==null?void 0:e.label)&&(e==null?void 0:e.value),ye=e=>e?e.filter($e).map(t=>({text:t.label,value:t.value})):[],we=e=>e.map(t=>{var n;const r=((n=t==null?void 0:t.id)==null?void 0:n.toString())||t.code;return{text:t.name,value:r}}),Me=e=>e?e.map(t=>({text:t.label,value:t.value})):[];function Se({fields:e,address:t,setAddress:r,addressType:n,errors:s,config:i,availableCountries:a,availableRegions:g,onSelection:l,onChange:h,onBlur:b,onInvalid:A}){const d=()=>{r(c=>({...c,[F.Region]:"",[F.RegionId]:""}))},p=c=>{r(_=>({..._,[F.RegionId]:c}))};return e.map(c=>{var $;let _=c.is_required,v,m=c.frontend_input,u=[],C,f,I=!1;if(m==="MULTILINE"?(v=X(c.code,t),C=X(c.code,s)):(v=t[c.code],C=s[c.code]||""),c.code!==F.Region&&c.code!==F.Country&&(u=ye(c.options)),c.code===F.Country&&(u=Me(a),n===R.SHIPPING?(M.value.country=v,f=E=>{const L=E.target,{value:y}=L;y&&O({country_code:y}),l(E),d()}):f=l),c.code===F.RegionId&&n===R.SHIPPING&&(M.value.selectedRegionId=v),c.code===F.Region){if(n===M.value.addressType&&(I=M.value.pending),_=i.countriesWithRequiredRegion.includes(t==null?void 0:t.country_id),u=we(g),!_&&!i.displayStateIfOptional&&(m=V.Undefined),m=u.length>0?V.Select:V.Text,m==="SELECT")n===R.SHIPPING?(M.value.selectedRegion=v,f=E=>{const y=E.target.value;O({country_code:M.value.country,region_id:y}),l(E),p(y)}):f=E=>{l(E);const y=E.target.value;p(y)};else if(m==="TEXT"&&n===R.SHIPPING){M.value.selectedRegion=v;const E=h;h=L=>{const y=L.target,{value:Z}=y;M.value.country&&O({country_code:M.value.country,region_name:Z}),E(L)}}v=u.length>0?(($=u.find(E=>E.value===v))==null?void 0:$.value)||"":v}return c.code===F.PostCode&&(_=!i.countriesWithOptionalZipCode.includes(t==null?void 0:t.country_id)),{...c,is_required:_,frontend_input:m,addressType:n,className:`checkout-address-form__${c.code}`,value:v,options:u,error:C,onChange:h,onBlur:b,onInvalid:A,handleSelect:f,disabled:I}})}let J;function O(e){var i;const t=K.value.data,r=!!t,n=(i=t==null?void 0:t.shippingAddresses)==null?void 0:i[0],s=n==null?void 0:n.availableShippingMethods;r&&!s&&(clearTimeout(J),J=setTimeout(()=>{fe({cartId:t.id,criteria:e})},B))}const ne=e=>e.reduce((t,r)=>{switch(r.name){case S.DateRangeMax:return{...t,max:r.value};case S.DateRangeMin:return{...t,min:r.value};case S.FileExtensions:return{...t,accept:r.value};case S.InputValidation:return{...t,pattern:Le(r.value)};case S.MaxFileSize:case S.MaxImageHeight:case S.MaxImageWidth:return t;case S.MaxTextLength:return{...t,maxLength:r.value};case S.MinTextLength:return{...t,minLength:r.value};default:throw new Error(`Unknown rule: ${r.name}`)}},{}),N={alpha:/^[a-zA-Z]+$/,alphanumeric:/^[a-zA-Z0-9]+$/,"alphanumeric-w-space":/^[a-zA-Z0-9 ]+$/,"alphanum-with-spaces":/^[a-zA-Z0-9 ]+$/,email:/^([a-z0-9,!#$%&'*+/=?^_`{|}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9,!#$%&'*+/=?^_`{|}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*@([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*\.(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]){2,})$/i,numeric:/^[0-9]+$/,url:/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w\-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/},Le=e=>{switch(e){case"alpha":return N.alpha.source;case"alphanumeric":return N.alphanumeric.source;case"alphanumeric-w-space":return N["alphanumeric-w-space"].source;case"alphanum-with-spaces":return N["alphanum-with-spaces"].source;case"url":return N.url.source;case"numeric":return N.numeric.source;case"email":return N.email.source;default:throw new Error(`Unknown validation type: ${e}`)}},Ne=e=>x(be,{...e,children:[o(k,{variant:"heading",size:"medium"}),o(k,{variant:"empty",size:"medium"}),o(k,{size:"large"}),o(k,{size:"large"}),o(k,{size:"large",fullWidth:!0}),o(k,{size:"large",fullWidth:!0,lines:3}),o(k,{size:"large"}),o(k,{size:"large"}),o(k,{size:"large"}),o(k,{size:"large"}),o(k,{size:"large"}),o(k,{size:"large"}),o(k,{size:"large"})]}),Re=e=>{const{id:t,addressType:r,className:n,code:s,value:i,default_value:a}=e;return o("input",{className:n,id:`${r}-${t||s}`,name:s,type:"hidden",value:i??a},s)},De=e=>{const{addressType:t,className:r,code:n,error:s,id:i,onBlur:a,onChange:g,onInvalid:l,validate_rules:h,value:b}=e,A=ne(h),d=i||n;return o(G,{disabled:e.disabled,error:s,children:o(ee,{"aria-label":e.label,autocomplete:W[n]||"off",className:r,floatingLabel:`${e.label} ${e.is_required?"*":""}`,id:`${t}-${d}`,onBlur:a,onChange:g,onInvalid:l,placeholder:e.label,required:e.is_required||!1,type:"text",name:n,value:b??void 0,...A})})},xe=e=>{const{addressType:t,className:r,code:n,disabled:s,error:i,id:a,is_required:g,label:l,multiline_count:h,onBlur:b,onChange:A,onInvalid:d,validate_rules:p,value:c}=e,_=h??0,v=a||n,m=ne(p);return o(z,{children:Array.from(Array(_).keys()).map(u=>o(G,{disabled:s,error:(i==null?void 0:i[u])||"",className:"dropin-field--multiline",children:o(ee,{id:`${t}-${v}-${u}`,className:r,floatingLabel:`${l} ${u!=0?u:""} ${g&&u===0?"*":""}`,autocomplete:u===0?W[n]:"off","aria-label":l,placeholder:`${l} ${u!=0?u:""}`,type:"text",required:g&&u===0,onChange:A,onBlur:b,onInvalid:d,name:`${n}-${u}`,value:(c==null?void 0:c[u])||void 0,...m})},`${n}-${u}`))})},ze=e=>{const{addressType:t,className:r,code:n,disabled:s,error:i,handleSelect:a,id:g,is_required:l,label:h,onBlur:b,onInvalid:A,options:d,value:p}=e,c=g||n,_=a?{handleSelect:a}:{};return o(G,{disabled:s,error:i,children:o(Ae,{id:`${t}-${c}`,className:r,name:n,floatingLabel:`${h} ${l?"*":""}`,required:l,placeholder:h,"aria-label":h,options:d,value:p,autocomplete:W[n]||"off",onBlur:b,onInvalid:A,..._},n)})},Te=e=>{switch(e.frontend_input){case"BOOLEAN":case"DATE":case"DATETIME":case"FILE":case"GALLERY":case"IMAGE":case"MEDIA_IMAGE":case"MULTISELECT":case"PRICE":case"TEXTAREA":case"UNDEFINED":case"WEIGHT":return null;case"HIDDEN":return Re(e);case"TEXT":return De(e);case"MULTILINE":return xe(e);case"SELECT":return ze(e);default:throw new Error(`Unknown field type: ${e.frontend_input}`)}},Pe=({className:e,name:t,headingId:r,formRef:n,fields:s,...i})=>x("div",{...i,className:U(["checkout-fields-form",e]),children:[o(oe,{level:2,children:o(Q,{id:r}),className:"checkout-fields-form__title"}),o("form",{name:t,ref:n,className:U(["checkout-fields-form__form",e]),noValidate:!0,children:s.sort((a,g)=>a.sort_order-g.sort_order).map(Te)})]}),Ve=e=>{const t=new FormData(e),r=Object.fromEntries(t);return Object.entries(r).reduce((s,[i])=>{const a=e.elements[i];return a!=null&&a.validationMessage?{...s,[i]:a.validationMessage}:{...s}},{})};function Oe(e){const[t,r]=H({});return q(()=>{e&&r(n=>({...n,country_id:e}))},[e]),{defaultValues:t}}function Ue({country:e,addressType:t}){const[r,n]=H([]);return q(()=>{if(!e){n([]);return}ge(e,t).then(s=>{n(s||[])}).catch(s=>{console.error(s)})},[n,e,t]),{availableRegions:r}}function Be({shouldAutoFillForm:e,addressType:t,setAddress:r,fields:n}){const[s,i]=H(!1),a=K.value.data;q(()=>{var v;if(s||!(a&&n))return;i(!0);const l=t===R.SHIPPING?a==null?void 0:a.shippingAddresses:a==null?void 0:a.billingAddress;if(!(Array.isArray(l)?l.length>0:!!l)||e&&!e())return;const A=m=>{if(!n)return!1;const u=n.find(C=>C.code===m);return u?u.frontend_input==="MULTILINE":!1},d=Array.isArray(l)?l[0]:l;if(!d)return;const p={[F.City]:d.city,[F.Company]:d.company||"",[F.Country]:d.country.value,[F.FirstName]:d.firstName,[F.LastName]:d.lastName,[F.PostCode]:d.postCode||"",[F.Telephone]:d.telephone||"",[F.Vat]:d.vatId||""},c=d.region;if(c){const m=(v=c==null?void 0:c.id)==null?void 0:v.toString();m?(p[F.Region]=m,p[F.RegionId]=m):p[F.Region]=c.code}d!=null&&d.street&&d.street.length>0&&d.street.forEach((m,u)=>{p[`${F.Street}${Y}${u}`]=m}),((d==null?void 0:d.customAttributes)||[]).forEach(m=>{A(m.code)?m.value.split(pe).forEach((C,f)=>{p[`${m.code}${Y}${f}`]=C}):p[m.code]=m.value}),r(p)},[r,e,t,a,n,s])}const mt=_e(({name:e,preselectedFields:t,addressType:r,headingId:n,saveAddressHandler:s,children:i,shouldAutoFillForm:a,...g},l)=>{const{fields:h}=le(),{countries:b}=de(),A=b===void 0,d=h===void 0,{config:p}=me(),c=p===void 0,{defaultValues:_}=Oe(p==null?void 0:p.defaultCountry),{preselection:v}=Ye({fields:h,preselectedFields:t}),m=ke(null),{address:u,setAddress:C,onSelection:f,errors:I,onChange:$,onInvalid:E,onBlur:L}=je({formRef:m,type:r,defaultValues:_,preselection:v,saveAddressHandler:s}),{availableRegions:y}=Ue({country:u.country_id,addressType:r});if(Ce(l,()=>({triggerSaveAddress:ie=>{if(!m.current)return;const ce=Ve(m.current);if(te(ce))return s({signal:ie,address:u})}})),Be({shouldAutoFillForm:a,addressType:r,setAddress:C,fields:h}),d||A||c)return o(Ne,{"data-testid":`${r}-skeleton`});const se=Se({fields:h,address:u,setAddress:C,addressType:r,errors:I,config:p,availableCountries:b,availableRegions:y,onSelection:f,onChange:$,onBlur:L,onInvalid:E}),j={[R.SHIPPING]:"shipping",[R.BILLING]:"billing"};return o(Pe,{...g,"data-testid":`${j[r]}-form`,name:e,className:`checkout-${j[r]}-form`,headingId:n,formRef:m,fields:se})});function Ge(e){const{backupService:t}=he(),[r,n]=P(null);D(()=>{const a=t.restore(e);a&&n(a)},[e,t]),D(()=>{const a=ue.on("checkout/order",()=>{t.remove(e)});return()=>{a==null||a.off()}},[e,t]);const s=T(a=>setTimeout(()=>{t.backup(e,a)},B),[e,t]),i=T(()=>{t.remove(e)},[e,t]);return{addressBackup:r,backup:s,removeBackup:i}}const He={badInput:"aria-label",patternMismatch:"aria-label",rangeOverflow:"max",rangeUnderflow:"min",tooLong:"maxlength",tooShort:"minlength",typeMismatch:"aria-label",valueMissing:"aria-label"},qe=["badInput","patternMismatch","rangeOverflow","rangeUnderflow","tooLong","tooShort","typeMismatch","valueMissing"],We=e=>{const[t,r]=P({}),n=T(s=>{const{name:i,validity:a,validationMessage:g}=s;let l=a.valid?"":g;qe.forEach(h=>{if(!a[h])return;const b=e[h];if(!b)return;const A=He[h];l=b.replace("{field}",s.getAttribute(A)||"")}),r(h=>({...h,[i]:l}))},[e]);return{errors:t,validateFormElement:n}},Ze=e=>{const t=e.current;if(!t)return!1;const r=Ie(t);return te(r)},je=({formRef:e,type:t,defaultValues:r={},preselection:n={},saveAddressHandler:s})=>{const i=Ee({badInput:"Checkout.AddressForm.Validity.badInput",patternMismatch:"Checkout.AddressForm.Validity.patternMismatch",rangeUnderflow:"Checkout.AddressForm.Validity.rangeUnderflow",tooLong:"Checkout.AddressForm.Validity.tooLong",tooShort:"Checkout.AddressForm.Validity.tooShort",typeMismatch:"Checkout.AddressForm.Validity.typeMismatch",valueMissing:"Checkout.AddressForm.Validity.valueMissing"}),a=Fe(!1),[g,l]=P({}),{addressBackup:h,backup:b,removeBackup:A}=Ge(t),{errors:d,validateFormElement:p}=We(i),c=T(f=>{a.current=!1,s(f).then(()=>{A()}).catch(I=>{a.current=!0,console.error("Saving address form failed:",I)})},[A,s]),_=(f,I)=>{l($=>({...$,[f]:I})),a.current=!0},v=f=>{const I=f.target,{name:$,value:E}=I;_($,E),p(I)},m=f=>{const I=f.target;p(I)},u=f=>{const I=f.target,{name:$,value:E}=I;_($,E),p(I)},C=f=>{f.target.checkValidity()};return D(()=>{l(f=>({...r,...n,...h,...f}))},[r,n,h]),D(()=>{if(!a.current)return;const f=b(g);return()=>{clearTimeout(f)}},[g,b]),D(()=>{if(!a.current||!Ze(e))return;const f=new AbortController,I=f.signal,$=setTimeout(()=>{c({signal:I,address:g})},B);return()=>{clearTimeout($),f.abort()}},[g,e,c]),{address:g,setAddress:l,errors:d,onChange:v,onSelection:u,onBlur:C,onInvalid:m}},Xe={countryCode:"country_id",region:"region",postCode:"postcode"};function Ye({fields:e,preselectedFields:t}){return{preselection:ve(()=>!(!!e&&e.length>0)||!!!t?null:Object.keys(t).reduce((i,a)=>{const g=Xe[a];return!g||!e.some(h=>h.code===g)?i:{...i,[g]:t[a]}},{}),[e,t])}}const Je=()=>{const e=()=>window.innerWidth>=1920?"xxlarge":window.innerWidth>=1366?"xlarge":window.innerWidth>=1024?"large":window.innerWidth>=768?"medium":"small",[t,r]=P(e());return D(()=>{let n;const s=()=>{n&&clearTimeout(n),n=setTimeout(()=>r(e()),50)};return window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s),n&&clearTimeout(n)}},[]),t},re=({children:e,className:t})=>Je()==="small"?o(z,{children:e}):o("div",{className:t,children:e}),Ke=({sections:e})=>o(re,{className:"checkout__aside",children:x(z,{children:[o(w,{node:e.orderSummary}),o(w,{node:e.cartSummary})]})}),Qe=({billingAddress:e,billToShippingAddress:t,login:r,paymentMethods:n,placeOrder:s,shippingAddress:i,shippingMethods:a})=>x(z,{children:[o(w,{node:r}),i&&o(w,{node:i}),t&&o(w,{node:t}),a&&o(w,{node:a}),o(w,{node:n}),o(w,{node:e}),o(w,{node:s})]}),et=({outOfStock:e,sections:t})=>o(re,{className:"checkout__main",children:x(z,{children:[o(oe,{level:1,className:"checkout-title",children:o(Q,{id:"Checkout.title"})}),e&&o(w,{className:"checkout-outOfStock",node:e}),t&&o(Qe,{...t})]})}),ae=e=>{const{banner:t,className:r,children:n,...s}=e;return x("div",{className:U(["checkout",r]),...s,children:[t&&o(w,{className:"checkout__banner",node:t}),o("div",{className:"checkout__content",children:n})]})};ae.Main=et;ae.Aside=Ke;const oe=({className:e,children:t,level:r=2})=>{const n=r>=1&&r<=6?`h${r}`:"h2";return o(n,{className:e,children:t})};export{mt as A,ae as C,oe as H,Je as u};
//# sourceMappingURL=CartSummaryItem.js.map
