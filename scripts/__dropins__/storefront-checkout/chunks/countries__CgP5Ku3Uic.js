import{createContext as E,Component as ri,options as $,isValidElement as oi}from"@dropins/tools/preact.js";import{useContext as D,useMemo as H,useState as M,useEffect as O}from"@dropins/tools/preact-hooks.js";import{events as si}from"@dropins/tools/event-bus.js";import{jsx as w}from"@dropins/tools/preact-jsx-runtime.js";import{FetchGraphQL as ni}from"@dropins/tools/fetch-graphql.js";const Q=E({});function Ni({children:i,services:t}){return w(Q.Provider,{value:t,children:i})}function Fi(){const i=D(Q);if(i!==void 0)return i;throw new Error("useServices must be used within a ServicesProvider")}const{setEndpoint:Li,setFetchGraphQlHeader:Pi,removeFetchGraphQlHeader:Ui,setFetchGraphQlHeaders:ki,fetchGraphQl:N,getConfig:$i}=new ni().getMethods(),F=i=>{throw i instanceof DOMException&&i.name==="AbortError"||si.emit("error",{source:"checkout",type:"network",error:i}),i},ai=`
  query fetchAddressFormFields {
    attributesForm(formCode: "customer_register_address") {
      items {
        frontend_input
        code
        label
        default_value
        is_required
        options {
          label
          value
          is_default
        }
        ... on CustomerAttributeMetadata {
          multiline_count
          sort_order
          validate_rules {
            name
            value
          }
        }
      }
      errors {
        message
        type
      }
    }
  }
`,fi=async()=>{var e;const{data:i,errors:t}=await N(ai,{method:"GET",cache:"no-cache"}).catch(F);if(t)throw Error(t.map(r=>r.message).join(" "));return((e=i==null?void 0:i.attributesForm)==null?void 0:e.items)||[]};function b(){throw new Error("Cycle detected")}var ui=Symbol.for("preact-signals");function L(){if(_>1)_--;else{for(var i,t=!1;g!==void 0;){var e=g;for(g=void 0,G++;e!==void 0;){var r=e.o;if(e.o=void 0,e.f&=-3,!(8&e.f)&&R(e))try{e.c()}catch(s){t||(i=s,t=!0)}e=r}}if(G=0,_--,t)throw i}}var a=void 0,g=void 0,_=0,G=0,S=0;function X(i){if(a!==void 0){var t=i.n;if(t===void 0||t.t!==a)return t={i:0,S:i,p:a.s,n:void 0,t:a,e:void 0,x:void 0,r:t},a.s!==void 0&&(a.s.n=t),a.s=t,i.n=t,32&a.f&&i.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=a.s,t.n=void 0,a.s.n=t,a.s=t),t}}function u(i){this.v=i,this.i=0,this.n=void 0,this.t=void 0}u.prototype.brand=ui;u.prototype.h=function(){return!0};u.prototype.S=function(i){this.t!==i&&i.e===void 0&&(i.x=this.t,this.t!==void 0&&(this.t.e=i),this.t=i)};u.prototype.U=function(i){if(this.t!==void 0){var t=i.e,e=i.x;t!==void 0&&(t.x=e,i.e=void 0),e!==void 0&&(e.e=t,i.x=void 0),i===this.t&&(this.t=e)}};u.prototype.subscribe=function(i){var t=this;return U(function(){var e=t.value,r=32&this.f;this.f&=-33;try{i(e)}finally{this.f|=r}})};u.prototype.valueOf=function(){return this.value};u.prototype.toString=function(){return this.value+""};u.prototype.toJSON=function(){return this.value};u.prototype.peek=function(){return this.v};Object.defineProperty(u.prototype,"value",{get:function(){var i=X(this);return i!==void 0&&(i.i=this.i),this.v},set:function(i){if(a instanceof h&&function(){throw new Error("Computed cannot have side-effects")}(),i!==this.v){G>100&&b(),this.v=i,this.i++,S++,_++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{L()}}}});function W(i){return new u(i)}function R(i){for(var t=i.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function q(i){for(var t=i.s;t!==void 0;t=t.n){var e=t.S.n;if(e!==void 0&&(t.r=e),t.S.n=t,t.i=-1,t.n===void 0){i.s=t;break}}}function j(i){for(var t=i.s,e=void 0;t!==void 0;){var r=t.p;t.i===-1?(t.S.U(t),r!==void 0&&(r.n=t.n),t.n!==void 0&&(t.n.p=r)):e=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=r}i.s=e}function h(i){u.call(this,void 0),this.x=i,this.s=void 0,this.g=S-1,this.f=4}(h.prototype=new u).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===S))return!0;if(this.g=S,this.f|=1,this.i>0&&!R(this))return this.f&=-2,!0;var i=a;try{q(this),a=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(e){this.v=e,this.f|=16,this.i++}return a=i,j(this),this.f&=-2,!0};h.prototype.S=function(i){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}u.prototype.S.call(this,i)};h.prototype.U=function(i){if(this.t!==void 0&&(u.prototype.U.call(this,i),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};h.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var i=this.t;i!==void 0;i=i.x)i.t.N()}};h.prototype.peek=function(){if(this.h()||b(),16&this.f)throw this.v;return this.v};Object.defineProperty(h.prototype,"value",{get:function(){1&this.f&&b();var i=X(this);if(this.h(),i!==void 0&&(i.i=this.i),16&this.f)throw this.v;return this.v}});function ci(i){return new h(i)}function Z(i){var t=i.u;if(i.u=void 0,typeof t=="function"){_++;var e=a;a=void 0;try{t()}catch(r){throw i.f&=-2,i.f|=8,P(i),r}finally{a=e,L()}}}function P(i){for(var t=i.s;t!==void 0;t=t.n)t.S.U(t);i.x=void 0,i.s=void 0,Z(i)}function pi(i){if(a!==this)throw new Error("Out-of-order effect");j(this),a=i,this.f&=-2,8&this.f&&P(this),L()}function C(i){this.x=i,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}C.prototype.c=function(){var i=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{i()}};C.prototype.S=function(){1&this.f&&b(),this.f|=1,this.f&=-9,Z(this),q(this),_++;var i=a;return a=this,pi.bind(this,i)};C.prototype.N=function(){2&this.f||(this.f|=2,this.o=g,g=this)};C.prototype.d=function(){this.f|=8,1&this.f||P(this)};function U(i){var t=new C(i);try{t.c()}catch(e){throw t.d(),e}return t.d.bind(t)}var I;function v(i,t){$[i]=t.bind(null,$[i]||function(){})}function T(i){I&&I(),I=i&&i.S()}function B(i){var t=this,e=i.data,r=li(e);r.value=e;var s=H(function(){for(var o=t.__v;o=o.__;)if(o.__c){o.__c.__$f|=4;break}return t.__$u.c=function(){var n;!oi(s.peek())&&((n=t.base)==null?void 0:n.nodeType)===3?t.base.data=s.peek():(t.__$f|=1,t.setState({}))},ci(function(){var n=r.value.value;return n===0?0:n===!0?"":n||""})},[]);return s.value}B.displayName="_st";Object.defineProperties(u.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:B},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});v("__b",function(i,t){if(typeof t.type=="string"){var e,r=t.props;for(var s in r)if(s!=="children"){var o=r[s];o instanceof u&&(e||(t.__np=e={}),e[s]=o,r[s]=o.peek())}}i(t)});v("__r",function(i,t){T();var e,r=t.__c;r&&(r.__$f&=-2,(e=r.__$u)===void 0&&(r.__$u=e=function(s){var o;return U(function(){o=this}),o.c=function(){r.__$f|=1,r.setState({})},o}())),T(e),i(t)});v("__e",function(i,t,e,r){T(),i(t,e,r)});v("diffed",function(i,t){T();var e;if(typeof t.type=="string"&&(e=t.__e)){var r=t.__np,s=t.props;if(r){var o=e.U;if(o)for(var n in o){var p=o[n];p!==void 0&&!(n in r)&&(p.d(),o[n]=void 0)}else e.U=o={};for(var l in r){var d=o[l],y=r[l];d===void 0?(d=hi(e,l,y,s),o[l]=d):d.o(y,s)}}}i(t)});function hi(i,t,e,r){var s=t in i&&i.ownerSVGElement===void 0,o=W(e);return{o:function(n,p){o.value=n,r=p},d:U(function(){var n=o.value.value;r[t]!==n&&(r[t]=n,s?i[t]=n:n?i.setAttribute(t,n):i.removeAttribute(t))})}}v("unmount",function(i,t){if(typeof t.type=="string"){var e=t.__e;if(e){var r=e.U;if(r){e.U=void 0;for(var s in r){var o=r[s];o&&o.d()}}}}else{var n=t.__c;if(n){var p=n.__$u;p&&(n.__$u=void 0,p.d())}}i(t)});v("__h",function(i,t,e,r){(r<3||r===9)&&(t.__$f|=2),i(t,e,r)});ri.prototype.shouldComponentUpdate=function(i,t){var e=this.__$u;if(!(e&&e.s!==void 0||4&this.__$f)||3&this.__$f)return!0;for(var r in t)return!0;for(var s in i)if(s!=="__source"&&i[s]!==this.props[s])return!0;for(var o in this.props)if(!(o in i))return!0;return!1};function li(i){return H(function(){return W(i)},[])}var di=(i=>(i.Boolean="BOOLEAN",i.Date="DATE",i.Datetime="DATETIME",i.File="FILE",i.Gallery="GALLERY",i.Hidden="HIDDEN",i.Image="IMAGE",i.MediaImage="MEDIA_IMAGE",i.Multiline="MULTILINE",i.Multiselect="MULTISELECT",i.Price="PRICE",i.Select="SELECT",i.Text="TEXT",i.Textarea="TEXTAREA",i.Undefined="UNDEFINED",i.Weight="WEIGHT",i))(di||{}),_i=(i=>(i.InStock="IN_STOCK",i.OutOfStock="OUT_OF_STOCK",i))(_i||{}),m=(i=>(i.DisplayExcludingTax="DISPLAY_EXCLUDING_TAX",i.DisplayIncludingTax="DISPLAY_INCLUDING_TAX",i.DisplayTypeBoth="DISPLAY_TYPE_BOTH",i))(m||{}),vi=(i=>(i.DateRangeMax="DATE_RANGE_MAX",i.DateRangeMin="DATE_RANGE_MIN",i.FileExtensions="FILE_EXTENSIONS",i.InputValidation="INPUT_VALIDATION",i.MaxFileSize="MAX_FILE_SIZE",i.MaxImageHeight="MAX_IMAGE_HEIGHT",i.MaxImageWidth="MAX_IMAGE_WIDTH",i.MaxTextLength="MAX_TEXT_LENGTH",i.MinTextLength="MIN_TEXT_LENGTH",i))(vi||{}),c=(i=>(i[i.ExcludingTax=1]="ExcludingTax",i[i.IncludingTax=2]="IncludingTax",i[i.IncludingAndExcludingTax=3]="IncludingAndExcludingTax",i))(c||{}),x=(i=>(i[i.Rows=0]="Rows",i[i.Quantity=1]="Quantity",i))(x||{});const yi=i=>i==null;function gi(i){return i===0?x.Rows:x.Quantity}function A(i){return i===1?c.ExcludingTax:i===2?c.IncludingTax:i===3?c.IncludingAndExcludingTax:c.ExcludingTax}function xi(i){switch(i){case m.DisplayExcludingTax:return c.ExcludingTax;case m.DisplayIncludingTax:return c.IncludingTax;case m.DisplayTypeBoth:return c.IncludingAndExcludingTax}}function Ci(i){if(!i)return f;const{default_country:t,countries_with_required_region:e,display_state_if_optional:r,optional_zip_countries:s,is_guest_checkout_enabled:o,is_one_page_checkout_enabled:n,shopping_cart_display_price:p,shopping_cart_display_shipping:l,shopping_cart_display_subtotal:d,shopping_cart_display_tax_gift_wrapping:y,shopping_cart_display_grand_total:V,shopping_cart_display_full_summary:ii,shopping_cart_display_zero_tax:ti,max_items_in_order_summary:ei,cart_summary_display_quantity:k}=i;return{defaultCountry:t||f.defaultCountry,countriesWithRequiredRegion:(e==null?void 0:e.split(","))||f.countriesWithRequiredRegion,displayStateIfOptional:r||f.displayStateIfOptional,countriesWithOptionalZipCode:(s==null?void 0:s.split(","))||f.countriesWithOptionalZipCode,isGuestCheckoutEnabled:o||f.isGuestCheckoutEnabled,isOnePageCheckoutEnabled:n||f.isOnePageCheckoutEnabled,taxCartDisplay:{shoppingCartDisplayPrice:p?A(p):f.taxCartDisplay.shoppingCartDisplayPrice,shoppingCartDisplayShipping:l?A(l):f.taxCartDisplay.shoppingCartDisplayShipping,shoppingCartDisplaySubtotal:d?A(d):f.taxCartDisplay.shoppingCartDisplaySubtotal,shoppingCartDisplayGiftWrapping:y?xi(y):f.taxCartDisplay.shoppingCartDisplayGiftWrapping,shoppingCartDisplayGrandTotal:V||f.taxCartDisplay.shoppingCartDisplayGrandTotal,shoppingCartDisplayFullSummary:ii||f.taxCartDisplay.shoppingCartDisplayFullSummary,shoppingCartDisplayZeroTax:ti||f.taxCartDisplay.shoppingCartDisplayZeroTax},cartSummaryMaxItems:ei||f.cartSummaryMaxItems,cartSummaryTotalDisplay:yi(k)?f.cartSummaryTotalDisplay:gi(k)}}const mi=i=>{if(i)return i.filter(t=>!!t).filter(t=>{const{two_letter_abbreviation:e,full_name_locale:r}=t;return!!e&&!!r}).map(t=>{const{two_letter_abbreviation:e,full_name_locale:r}=t;return{value:e,label:r}})},Y=i=>{if(i)throw Error(i.map(t=>t.message).join(" "))},Si=`
  query getStoreConfig {
    storeConfig {
      cart_summary_display_quantity
      countries_with_required_region
      default_country
      display_state_if_optional
      is_guest_checkout_enabled
      is_one_page_checkout_enabled
      locale
      max_items_in_order_summary
      optional_zip_countries
      shopping_cart_display_full_summary
      shopping_cart_display_grand_total
      shopping_cart_display_price
      shopping_cart_display_shipping
      shopping_cart_display_subtotal
      shopping_cart_display_tax_gift_wrapping
      shopping_cart_display_zero_tax
      store_code
    }
  }
`,Ti=async()=>N(Si,{method:"GET",cache:"no-cache"}).then(({data:i,errors:t})=>(Y(t),Ci(i==null?void 0:i.storeConfig))).catch(F),Ei=`
query getCountries {
    countries {
      two_letter_abbreviation
      full_name_locale
    }
}`,Di=async()=>N(Ei,{method:"GET",cache:"no-cache"}).then(({data:i,errors:t})=>(t&&Y(t),mi(i.countries))).catch(F),wi="US",bi=10,f={defaultCountry:wi,countriesWithRequiredRegion:[],displayStateIfOptional:!1,countriesWithOptionalZipCode:[],isGuestCheckoutEnabled:!1,isOnePageCheckoutEnabled:!1,taxCartDisplay:{shoppingCartDisplayPrice:c.ExcludingTax,shoppingCartDisplayShipping:c.ExcludingTax,shoppingCartDisplaySubtotal:c.ExcludingTax,shoppingCartDisplayGiftWrapping:c.ExcludingTax,shoppingCartDisplayGrandTotal:!1,shoppingCartDisplayFullSummary:!1,shoppingCartDisplayZeroTax:!1},cartSummaryMaxItems:bi,cartSummaryTotalDisplay:x.Quantity},z=E(void 0),Hi=({children:i})=>{const[t,e]=M();return O(()=>{Ti().then(r=>{e(r)}).catch(()=>{console.error("Failed to fetch store config"),e(f)})},[]),w(z.Provider,{value:{config:t},children:i})};function Qi(){const i=D(z);if(i!==void 0)return i;throw new Error("useStore must be used within a StoreProvider")}const K=E(void 0);function Xi({children:i}){const[t,e]=M({});return O(()=>{fi().then(r=>e({fields:r}))},[]),w(K.Provider,{value:t,children:i})}function Wi(){const i=D(K);if(i!==void 0)return i;throw new Error("useAddressFormFields must be used within an AddressFormFieldsProvider")}const J=E(void 0);function Ri({children:i}){const[t,e]=M({});return O(()=>{Di().then(r=>e({countries:r}))},[]),w(J.Provider,{value:t,children:i})}function qi(){const i=D(J);if(i!==void 0)return i;throw new Error("useCountries must be used within a CountriesProvider")}export{Xi as A,Ri as C,_i as P,Ni as S,x as T,vi as V,Pi as a,ki as b,fi as c,Ti as d,Di as e,N as f,$i as g,W as h,Qi as i,F as j,Y as k,yi as l,Hi as m,c as n,di as o,qi as p,Fi as q,Ui as r,Li as s,Wi as u};
//# sourceMappingURL=countries__CgP5Ku3Uic.js.map
