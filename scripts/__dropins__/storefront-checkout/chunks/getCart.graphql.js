import{events as k}from"@dropins/tools/event-bus.js";import{Component as Y,options as O,isValidElement as J}from"@dropins/tools/preact.js";import{useMemo as $}from"@dropins/tools/preact-hooks.js";import{FetchGraphQL as K}from"@dropins/tools/fetch-graphql.js";class ee extends Error{constructor(t){super(t.map(i=>i.message).join(" ")),this.name="FetchError"}}class b extends Error{constructor(t){super(t),this.name="InvalidArgument"}}class Fe extends Error{constructor(t){super(t),this.name="UnexpectedError"}}class He extends b{constructor(){super("Cart ID is required")}}class Be extends b{constructor(){super("Email is required")}}class We extends b{constructor(){super("Payment method code is required")}}class Qe extends b{constructor(){super("Billing address is required")}}class Ve extends b{constructor(){super("Country Code is required")}}const A=[];function te(e){return new Promise((t,i)=>{A.push(e);const r=()=>{A[0]===e?e().then(t).catch(i).finally(()=>A.shift()):setTimeout(r,100)};r()})}const ie=["sender_email","recipient_email"];function re(e){return e.filter(t=>!t.path||!ie.some(i=>{var r;return((r=t.path)==null?void 0:r.at(-1))===i}))}const R=e=>{throw e instanceof DOMException&&e.name==="AbortError"||k.emit("error",{source:"checkout",type:"network",error:e}),e};var se=Symbol.for("preact-signals");function U(){if(y>1)y--;else{for(var e,t=!1;S!==void 0;){var i=S;for(S=void 0,M++;i!==void 0;){var r=i.o;if(i.o=void 0,i.f&=-3,!(8&i.f)&&F(i))try{i.c()}catch(o){t||(e=o,t=!0)}i=r}}if(M=0,y--,t)throw e}}var n=void 0,S=void 0,y=0,M=0,x=0;function P(e){if(n!==void 0){var t=e.n;if(t===void 0||t.t!==n)return t={i:0,S:e,p:n.s,n:void 0,t:n,e:void 0,x:void 0,r:t},n.s!==void 0&&(n.s.n=t),n.s=t,e.n=t,32&n.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=n.s,t.n=void 0,n.s.n=t,n.s=t),t}}function l(e){this.v=e,this.i=0,this.n=void 0,this.t=void 0}l.prototype.brand=se;l.prototype.h=function(){return!0};l.prototype.S=function(e){this.t!==e&&e.e===void 0&&(e.x=this.t,this.t!==void 0&&(this.t.e=e),this.t=e)};l.prototype.U=function(e){if(this.t!==void 0){var t=e.e,i=e.x;t!==void 0&&(t.x=i,e.e=void 0),i!==void 0&&(i.e=t,e.x=void 0),e===this.t&&(this.t=i)}};l.prototype.subscribe=function(e){var t=this;return T(function(){var i=t.value,r=n;n=void 0;try{e(i)}finally{n=r}})};l.prototype.valueOf=function(){return this.value};l.prototype.toString=function(){return this.value+""};l.prototype.toJSON=function(){return this.value};l.prototype.peek=function(){var e=n;n=void 0;try{return this.value}finally{n=e}};Object.defineProperty(l.prototype,"value",{get:function(){var e=P(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(M>100)throw new Error("Cycle detected");this.v=e,this.i++,x++,y++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{U()}}}});function f(e){return new l(e)}function F(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function H(e){for(var t=e.s;t!==void 0;t=t.n){var i=t.S.n;if(i!==void 0&&(t.r=i),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function B(e){for(var t=e.s,i=void 0;t!==void 0;){var r=t.p;t.i===-1?(t.S.U(t),r!==void 0&&(r.n=t.n),t.n!==void 0&&(t.n.p=r)):i=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=r}e.s=i}function g(e){l.call(this,void 0),this.x=e,this.s=void 0,this.g=x-1,this.f=4}(g.prototype=new l).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===x))return!0;if(this.g=x,this.f|=1,this.i>0&&!F(this))return this.f&=-2,!0;var e=n;try{H(this),n=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(i){this.v=i,this.f|=16,this.i++}return n=e,B(this),this.f&=-2,!0};g.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}l.prototype.S.call(this,e)};g.prototype.U=function(e){if(this.t!==void 0&&(l.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};g.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(g.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=P(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function oe(e){return new g(e)}function W(e){var t=e.u;if(e.u=void 0,typeof t=="function"){y++;var i=n;n=void 0;try{t()}catch(r){throw e.f&=-2,e.f|=8,G(e),r}finally{n=i,U()}}}function G(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,W(e)}function ne(e){if(n!==this)throw new Error("Out-of-order effect");B(this),n=e,this.f&=-2,8&this.f&&G(this),U()}function E(e){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}E.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};E.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,W(this),H(this),y++;var e=n;return n=this,ne.bind(this,e)};E.prototype.N=function(){2&this.f||(this.f|=2,this.o=S,S=this)};E.prototype.d=function(){this.f|=8,1&this.f||G(this)};function T(e){var t=new E(e);try{t.c()}catch(i){throw t.d(),i}return t.d.bind(t)}var D;function m(e,t){O[e]=t.bind(null,O[e]||function(){})}function I(e){D&&D(),D=e&&e.S()}function Q(e){var t=this,i=e.data,r=le(i);r.value=i;var o=$(function(){for(var s=t.__v;s=s.__;)if(s.__c){s.__c.__$f|=4;break}return t.__$u.c=function(){var a;!J(o.peek())&&((a=t.base)==null?void 0:a.nodeType)===3?t.base.data=o.peek():(t.__$f|=1,t.setState({}))},oe(function(){var a=r.value.value;return a===0?0:a===!0?"":a||""})},[]);return o.value}Q.displayName="_st";Object.defineProperties(l.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Q},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});m("__b",function(e,t){if(typeof t.type=="string"){var i,r=t.props;for(var o in r)if(o!=="children"){var s=r[o];s instanceof l&&(i||(t.__np=i={}),i[o]=s,r[o]=s.peek())}}e(t)});m("__r",function(e,t){I();var i,r=t.__c;r&&(r.__$f&=-2,(i=r.__$u)===void 0&&(r.__$u=i=function(o){var s;return T(function(){s=this}),s.c=function(){r.__$f|=1,r.setState({})},s}())),I(i),e(t)});m("__e",function(e,t,i,r){I(),e(t,i,r)});m("diffed",function(e,t){I();var i;if(typeof t.type=="string"&&(i=t.__e)){var r=t.__np,o=t.props;if(r){var s=i.U;if(s)for(var a in s){var u=s[a];u!==void 0&&!(a in r)&&(u.d(),s[a]=void 0)}else i.U=s={};for(var c in r){var p=s[c],v=r[c];p===void 0?(p=ae(i,c,v,o),s[c]=p):p.o(v,o)}}}e(t)});function ae(e,t,i,r){var o=t in e&&e.ownerSVGElement===void 0,s=f(i);return{o:function(a,u){s.value=a,r=u},d:T(function(){var a=s.value.value;r[t]!==a&&(r[t]=a,o?e[t]=a:a?e.setAttribute(t,a):e.removeAttribute(t))})}}m("unmount",function(e,t){if(typeof t.type=="string"){var i=t.__e;if(i){var r=i.U;if(r){i.U=void 0;for(var o in r){var s=r[o];s&&s.d()}}}}else{var a=t.__c;if(a){var u=a.__$u;u&&(a.__$u=void 0,u.d())}}e(t)});m("__h",function(e,t,i,r){(r<3||r===9)&&(t.__$f|=2),e(t,i,r)});Y.prototype.shouldComponentUpdate=function(e,t){var i=this.__$u;if(!(i&&i.s!==void 0||4&this.__$f)||3&this.__$f)return!0;for(var r in t)return!0;for(var o in e)if(o!=="__source"&&e[o]!==this.props[o])return!0;for(var s in this.props)if(!(s in e))return!0;return!1};function le(e){return $(function(){return f(e)},[])}const ce=f({data:void 0,pending:!1}),ue=f({checked:!0,setByUser:!1}),N=f({pending:!1,data:void 0});T(()=>{var e;(e=N.value.data)!=null&&e.isVirtual&&(ue.value={checked:!1,setByUser:!1})});T(()=>{N.value.pending||k.emit("checkout/data",N.value.data||null)});const de=f({data:void 0,pending:!1}),fe=f({pending:!1,data:void 0}),he=f({pending:!1,data:void 0}),pe=f({pending:!1,data:void 0}),ve=f({data:void 0,pending:!1}),_e={cart:N,customer:fe,estimateShippingMethods:he,regions:pe,storeConfig:ve,countryList:de,addressFormFields:ce};function ye(e,t){return t.split(".").reduce((i,r)=>i&&i[r]!==void 0?i[r]:void 0,e)}const q={cart:null,customer:null,estimateShippingMethods:null,regions:null,storeConfig:null,countryList:null,addressFormFields:null};async function ge(e){const{defaultValueOnFail:t,query:i,options:r,path:o,signalType:s,type:a,transformer:u}=e,c=_e[s],p=Symbol();q[s]=p,c.value={...c.value,pending:!0};try{const{data:v,errors:w}=await(a==="mutation"?te(()=>X(i,r).catch(R)):X(i,{method:"GET",cache:"no-cache",...r}).catch(R));if(w){const L=re(w);if(L.length>0)throw new ee(L)}let C=ye(v,o);if(C===void 0)throw new Error(`No data found at path: ${o}`);return u&&(C=u(C)),c.value={...c.value,data:C},setTimeout(()=>{c.value={...c.value,pending:q[s]===p?!1:c.value.pending}},0),C}catch(v){if(t)return c.value={pending:!1,data:t},t;if(v.name==="AbortError")return;throw c.value={...c.value,pending:!1},v}}const me={cartId:null,authenticated:!1},je=new Proxy(me,{set(e,t,i){return e[t]=i,!0},get(e,t){return e[t]}}),Ce=e=>{if(e)return{code:e.code,title:e.title}},Se=e=>{if(e)return e.filter(t=>!!t).map(t=>{const{code:i,title:r}=t;return{code:i,title:r}})},be=e=>e==null,Ee=(e,t)=>e.amount.value-t.amount.value,V=e=>!(!e||!e.method_code||!e.method_title||be(e.amount.value)||!e.amount.currency),j=e=>({amount:{value:e.amount.value,currency:e.amount.currency},title:e.method_title,code:e.method_code,carrier:{code:e.carrier_code,title:e.carrier_title},value:`${e.carrier_code} - ${e.method_code}`,...e.price_excl_tax&&{amountExclTax:{value:e.price_excl_tax.value,currency:e.price_excl_tax.currency}},...e.price_incl_tax&&{amountInclTax:{value:e.price_incl_tax.value,currency:e.price_incl_tax.currency}}}),Te=e=>{if(V(e))return j(e)},xe=e=>{if(e)return e.filter(V).map(t=>j(t)).sort(Ee)},Ie=e=>e?!!e.code&&!!e.label:!1,Ne=e=>{if(!Ie(e))return;const{code:t,label:i,region_id:r}=e;return r?{code:t,name:i,id:r}:{code:t,name:i}},Ae=e=>{const{code:t,label:i}=e;return{value:t,label:i}},De=e=>e?"code"in e&&"value"in e:!1,Me=e=>e.filter(De).map(t=>{const{code:i,value:r}=t;return{code:i,value:r}}),Z=e=>{const t=e.street.filter(Boolean);return{firstName:e.firstname,lastName:e.lastname,company:e.company||void 0,city:e.city,street:t,postCode:e.postcode||void 0,vatId:e.vat_id||void 0,telephone:e.telephone||void 0,region:Ne(e.region),country:Ae(e.country),customAttributes:Me(e.custom_attributes)}},Ue=e=>{if(e)return Z(e)},Ge=e=>e.filter(t=>!!t).map(t=>{const{available_shipping_methods:i,selected_shipping_method:r,...o}=t;return{...Z(o),availableShippingMethods:xe(i),selectedShippingMethod:Te(r)}}),Ze=e=>({availablePaymentMethods:Se(e.available_payment_methods),billingAddress:Ue(e.billing_address),email:e.email??void 0,id:e.id,isEmpty:e.total_quantity===0,isVirtual:e.is_virtual,selectedPaymentMethod:Ce(e.selected_payment_method),shippingAddresses:Ge(e.shipping_addresses)}),we=`
  query getStoreConfig {
    storeConfig {
      countries_with_required_region
      default_country
      display_state_if_optional
      is_guest_checkout_enabled
      is_one_page_checkout_enabled
      locale
      optional_zip_countries
      shopping_cart_display_shipping
      store_code
    }
  }
`;var _=(e=>(e.EXCLUDING_TAX="EXCLUDING_TAX",e.INCLUDING_EXCLUDING_TAX="INCLUDING_AND_EXCLUDING_TAX",e.INCLUDING_TAX="INCLUDING_TAX",e))(_||{});const Le="US",h={defaultCountry:Le,countriesWithRequiredRegion:[],displayStateIfOptional:!1,countriesWithOptionalZipCode:[],isGuestCheckoutEnabled:!1,isOnePageCheckoutEnabled:!1,shoppingCartDisplaySetting:{shipping:_.EXCLUDING_TAX}},ze=async()=>await ge({type:"query",query:we,options:{method:"GET",cache:"no-cache"},path:"storeConfig",signalType:"storeConfig",transformer:Re,defaultValueOnFail:h});function Oe(e){switch(e){case 1:return _.EXCLUDING_TAX;case 2:return _.INCLUDING_TAX;case 3:return _.INCLUDING_EXCLUDING_TAX;default:return _.EXCLUDING_TAX}}function Re(e){if(!e)return h;const{default_country:t,countries_with_required_region:i,display_state_if_optional:r,optional_zip_countries:o,is_guest_checkout_enabled:s,is_one_page_checkout_enabled:a,shopping_cart_display_shipping:u}=e;return{defaultCountry:t||h.defaultCountry,countriesWithRequiredRegion:(i==null?void 0:i.split(","))||h.countriesWithRequiredRegion,displayStateIfOptional:r||h.displayStateIfOptional,countriesWithOptionalZipCode:(o==null?void 0:o.split(","))||h.countriesWithOptionalZipCode,isGuestCheckoutEnabled:s||h.isGuestCheckoutEnabled,isOnePageCheckoutEnabled:a||h.isOnePageCheckoutEnabled,shoppingCartDisplaySetting:{shipping:Oe(u)}}}const{setEndpoint:Ye,setFetchGraphQlHeader:Je,removeFetchGraphQlHeader:Ke,setFetchGraphQlHeaders:et,fetchGraphQl:X,getConfig:tt}=new K().getMethods();var d=(e=>(e.Boolean="BOOLEAN",e.Date="DATE",e.Datetime="DATETIME",e.File="FILE",e.Gallery="GALLERY",e.Hidden="HIDDEN",e.Image="IMAGE",e.MediaImage="MEDIA_IMAGE",e.Multiline="MULTILINE",e.Multiselect="MULTISELECT",e.Price="PRICE",e.Select="SELECT",e.Text="TEXT",e.Textarea="TEXTAREA",e.Undefined="UNDEFINED",e.Weight="WEIGHT",e))(d||{}),qe=(e=>(e.DateRangeMax="DATE_RANGE_MAX",e.DateRangeMin="DATE_RANGE_MIN",e.FileExtensions="FILE_EXTENSIONS",e.InputValidation="INPUT_VALIDATION",e.MaxFileSize="MAX_FILE_SIZE",e.MaxImageHeight="MAX_IMAGE_HEIGHT",e.MaxImageWidth="MAX_IMAGE_WIDTH",e.MaxTextLength="MAX_TEXT_LENGTH",e.MinTextLength="MIN_TEXT_LENGTH",e))(qe||{});const it=[{frontendInput:d.Text,code:"firstname",label:"First Name",isRequired:!0,isDisabled:!1,options:[],validateRules:[],sortOrder:10},{frontendInput:d.Text,code:"lastname",label:"Last Name",isRequired:!0,isDisabled:!1,options:[],validateRules:[],sortOrder:20},{frontendInput:d.Text,code:"company",label:"Company",isRequired:!1,isDisabled:!1,options:[],validateRules:[],sortOrder:30},{frontendInput:d.Multiline,code:"street",label:"Street Address",isRequired:!0,isDisabled:!1,options:[],validateRules:[],sortOrder:40},{frontendInput:d.Text,code:"city",label:"City",isRequired:!0,isDisabled:!1,options:[],validateRules:[],sortOrder:50},{frontendInput:d.Select,code:"country_id",label:"Country",isRequired:!0,isDisabled:!1,options:[{text:"United States",value:"US"},{text:"Spain",value:"ES"},{text:"France",value:"FR"}],validateRules:[],sortOrder:60},{frontendInput:d.Text,code:"region",label:"State/Province",isRequired:!1,isDisabled:!1,options:[],validateRules:[],sortOrder:70},{frontendInput:d.Hidden,code:"region_id",label:"State/Province",isRequired:!1,isDisabled:!1,options:[],validateRules:[],sortOrder:80},{frontendInput:d.Text,code:"postcode",label:"Zip/Postal Code",isRequired:!1,isDisabled:!1,options:[],validateRules:[],sortOrder:90},{frontendInput:d.Text,code:"telephone",label:"Phone Number",isRequired:!0,isDisabled:!1,options:[],validateRules:[],sortOrder:100},{frontendInput:d.Text,code:"vat_id",label:"VAT Number",isRequired:!1,isDisabled:!1,options:[],validateRules:[],sortOrder:110}],z=`
  fragment CheckoutData on Cart {
    is_virtual
    email
    total_quantity
    billing_address {
      city
      country {
        code
        label
      }
      firstname
      lastname
      company
      postcode
      vat_id
      region {
        region_id
        code
        label
      }
      street
      telephone
      custom_attributes {
        ... on AttributeValue {
          code
          value
        }
      }
    }
    shipping_addresses {
      firstname
      lastname
      company
      street
      city
      postcode
      vat_id
      region {
        region_id
        code
        label
      }
      country {
        code
        label
      }
      telephone
      custom_attributes {
        ... on AttributeValue {
          code
          value
        }
      }
      available_shipping_methods {
        amount {
          currency
          value
        }
        available
        carrier_code
        carrier_title
        error_message
        method_code
        method_title
        price_excl_tax {
          value
          currency
        }
        price_incl_tax {
          value
          currency
        }
      }
      selected_shipping_method {
        amount {
          value
          currency
        }
        carrier_code
        carrier_title
        method_code
        method_title
        price_excl_tax {
          value
          currency
        }
        price_incl_tax {
          value
          currency
        }
      }
    }
    available_payment_methods {
      code
      title
    }
    selected_payment_method {
      code
      title
    }
  }
`,rt=`
  query getCart($cartId: String!) {
    cart(cart_id: $cartId) {
      id
      ...CheckoutData
    }
  }
  ${z}
`,st=`
  query getCustomerCart {
    cart: customerCart {
      id
      ...CheckoutData
    }
  }
  ${z}
`;export{d as A,de as B,z as C,Le as D,he as E,ee as F,b as I,He as M,h as S,_ as T,Fe as U,qe as V,Be as a,We as b,Qe as c,Ve as d,Je as e,et as f,X as g,tt as h,it as i,ze as j,je as k,ge as l,ve as m,N as n,fe as o,R as p,rt as q,Ke as r,Ye as s,Ze as t,st as u,ue as v,ce as w,xe as x,pe as y,f as z};
