import{FetchGraphQL as l}from"./fetch-graphql.js";const n={failedFetch:"Failed to fetch config from backend with status:",failedSetStorageConfig:"Failed to set storage config",failedGetStorageConfig:"Configuration could not be loaded.",failedExecutionRecaptcha:"Recaptcha execution failed",failedInitializing:"An error occurred while initializing ReCaptcha:"},u={PLACE_ORDER:"placeOrder",CONTACT:"contactUs",CUSTOMER_LOGIN:"generateCustomerToken",CUSTOMER_FORGOT_PASSWORD:"requestPasswordResetEmail",CUSTOMER_CREATE:"createCustomerV2",CUSTOMER_EDIT:"updateCustomerV2",NEWSLETTER:"subscribeEmailToNewsletter",PRODUCT_REVIEW:"createProductReview",SENDFRIEND:"SENDFRIEND",BRAINTREE:"BRAINTREE"},h=".grecaptcha-badge iframe",f=(o,e)=>{if(o&&o.forms){const t=o.forms.concat(e).map(a=>typeof a!="string"?{...a,enabledBadgePlace:!1}:{badgeId:u[a],enabledBadgePlace:!1});return{...o,forms:[...new Set(t)]}}},g=async(o,e=1,t=1e3)=>{const a=sessionStorage.getItem(o);return a!==null?JSON.parse(a):e>0?(await new Promise(r=>setTimeout(r,t)),g(o,e-1,t)):null},p=(o,e,t)=>{if(!o||!e.websiteKey)return null;try{sessionStorage.setItem(o,JSON.stringify(e))}catch(a){return t&&console.error(n.failedSetStorageConfig,a),null}},C=o=>new Promise(e=>{if(document.querySelector(o)){e(!0);return}const t=new MutationObserver(()=>{document.querySelector(o)&&(e(!0),t.disconnect())});t.observe(document.body,{childList:!0,subtree:!0})}),m=async()=>await C(h),b=o=>{const e=t=>t.replace(/_([a-z])/g,(a,r)=>r.toUpperCase());return Object.keys(o).reduce((t,a)=>{const r=e(a);return t[r]=o[a],t},{})},{failedExecutionRecaptcha:d}=n,_=async o=>{if(!window.grecaptcha)return Promise.reject(d);try{return await window.grecaptcha.execute(o,{action:"click"})}catch(e){return Promise.reject(`${d} : ${e}`)}},y=()=>new Promise(o=>{const e=new MutationObserver((a,r)=>{window.grecaptcha&&(r.disconnect(),o(!0))}),t={childList:!0,subtree:!0,attributes:!0};e.observe(document.body,t)}),w=async(o,e,t)=>(window.grecaptcha||await y(),grecaptcha.ready(()=>{const a=document.querySelectorAll(`#${o}`);a.length&&(a.forEach(r=>r.id=`${r.id}_${Math.random().toString(36)}`),a.forEach(r=>{if(r.innerHTML==="")try{grecaptcha.render(r.id,{sitekey:e.websiteKey,badge:e.badgePosition,size:"invisible",theme:e.theme??"light"})}catch(i){t&&console.error(i)}}))})),S=`query {
  recaptchaV3Config {
    is_enabled
    website_key
    minimum_score
    badge_position
    language_code
    failure_message
    forms
    theme
  } 
}`,c=new l().getMethods();class R{constructor(){var e;this._enableReCAPTCHA=!1,this._recaptchaBackendEndpoint=((e=c.getConfig())==null?void 0:e.endpoint)||"",this._recaptchaScriptUrl="https://www.google.com/recaptcha/api.js",this._configStorageKey="recaptchaConfig",this._logger=!1}async _updateBadgePosition(e,t){if(t){if((t==null?void 0:t.badgePosition)!=="inline"){if(!await m())return;const r=document.querySelector(h);t.theme&&r&&!r.src.includes("theme=dark")&&!r.src.includes("theme=light")&&r.setAttribute("src",`${r.src}&theme=${t.theme}`);return}await w(e,t,this._logger)}}async _addRecaptchaScript(){const e=await this._loadConfig();if(!document.getElementById("recaptchaId")&&e){const t=e.websiteKey,a=e.badgePosition==="inline",r=e.languageCode;if(!t)return;const i=document.createElement("script");i.setAttribute("id","recaptchaId"),i.defer=!0,i.src=a?`${this._recaptchaScriptUrl}?render=${t}&badge=none&hl=${r}`:`${this._recaptchaScriptUrl}?render=${t}&badge=${e.badgePosition}&hl=${r}`,document.head.appendChild(i)}}async _fetchStoreConfig(){var e;try{const t=await c.fetchGraphQl(S,{method:"GET",cache:"force-cache"});if((e=t==null?void 0:t.errors)!=null&&e.length){this._logger&&console.error(t.errors[0].message);return}return t}catch(t){this._logger&&console.error(`${n.failedFetch}:`,t)}}async _loadConfig(){const e=await g(this._configStorageKey);return e?(this._enableReCAPTCHA=!!e.isEnabled,e):(this._logger&&console.error(n.failedGetStorageConfig),null)}setEndpoint(e){e&&(this._recaptchaBackendEndpoint=e,c.setEndpoint(e))}async setConfig(e){var t,a;try{const r=await this._fetchStoreConfig();if(!((t=r==null?void 0:r.data)!=null&&t.recaptchaV3Config)){sessionStorage.removeItem(this._configStorageKey);return}const i=b((a=r==null?void 0:r.data)==null?void 0:a.recaptchaV3Config),s=f(i,e);s&&p(this._configStorageKey,s,this._logger)}catch(r){this._logger&&console.error(n.failedSetStorageConfig,r),sessionStorage.removeItem(this._configStorageKey)}}async initReCaptcha(e=3e3){setTimeout(()=>{(async()=>{try{const t=await this._loadConfig();if(!(t!=null&&t.forms)||!t.isEnabled)return;await this._addRecaptchaScript();for(const a of t.forms)await this._updateBadgePosition(a==null?void 0:a.badgeId,t)}catch(t){this._logger&&console.error(n.failedInitializing,t)}})()},e)}async verifyReCaptcha(){try{const e=await this._loadConfig();return!(e!=null&&e.forms)||!e.websiteKey||!e.isEnabled?void 0:await _(e.websiteKey)}catch(e){this._logger&&console.error(e)}}enableLogger(e){this._logger=e}getMethods(){return{enableLogger:this.enableLogger.bind(this),setEndpoint:this.setEndpoint.bind(this),setConfig:this.setConfig.bind(this),initReCaptcha:this.initReCaptcha.bind(this),verifyReCaptcha:this.verifyReCaptcha.bind(this)}}}const E=new R,{initReCaptcha:P,verifyReCaptcha:I,setEndpoint:O,setConfig:A,enableLogger:v}=E.getMethods();export{R as RecaptchaModule,v as enableLogger,P as initReCaptcha,c as recaptchaFetchApi,A as setConfig,O as setEndpoint,I as verifyReCaptcha};
