import{FetchGraphQL as d}from"./fetch-graphql.js";const n={failedFetch:"Failed to fetch config from backend with status:",failedSetStorageConfig:"Failed to set storage config",failedGetStorageConfig:"Configuration could not be loaded.",failedExecutionRecaptcha:"Recaptcha execution failed",failedInitializing:"An error occurred while initializing ReCaptcha:"},g={PLACE_ORDER:"placeOrder",CONTACT:"contactUs",CUSTOMER_LOGIN:"generateCustomerToken",CUSTOMER_FORGOT_PASSWORD:"requestPasswordResetEmail",CUSTOMER_CREATE:"createCustomerV2",CUSTOMER_EDIT:"updateCustomerV2",NEWSLETTER:"subscribeEmailToNewsletter",PRODUCT_REVIEW:"createProductReview",SENDFRIEND:"SENDFRIEND",BRAINTREE:"BRAINTREE"},l=(i,e)=>{if(i&&i.forms){const t=i.forms.concat(e).map(r=>typeof r!="string"?{...r,enabledBadgePlace:!1}:{badgeId:g[r],enabledBadgePlace:!1});return{...i,forms:[...new Set(t)]}}return{}},h=async(i,e=1,t=1e3)=>{const r=sessionStorage.getItem(i);return r!==null?JSON.parse(r):e>0?(await new Promise(a=>setTimeout(a,t)),h(i,e-1,t)):null},f=(i,e,t)=>{if(!i||!e.website_key)return null;try{sessionStorage.setItem(i,JSON.stringify(e))}catch(r){return t&&console.error(n.failedSetStorageConfig,r),null}},u=[500,600,700,800,900,1e3,1e3,1e3],p=".grecaptcha-badge iframe",_=async()=>{for(const i of u){if(document.querySelector(p))return!0;await new Promise(t=>setTimeout(t,i))}return!1},{failedExecutionRecaptcha:s}=n,m=async i=>{if(!window.grecaptcha)return Promise.reject(s);try{return await window.grecaptcha.execute(i,{action:"click"})}catch(e){return Promise.reject(`${s} : ${e}`)}},C=()=>new Promise(i=>{const e=new MutationObserver((r,a)=>{window.grecaptcha&&(a.disconnect(),i(!0))}),t={childList:!0,subtree:!0,attributes:!0};e.observe(document.body,t)}),b=async(i,e,t)=>(window.grecaptcha||await C(),grecaptcha.ready(()=>{const r=document.querySelectorAll(`#${i}`);r.length&&(r.forEach(a=>a.id=`${a.id}_${Math.random().toString(36)}`),r.forEach(a=>{if(a.innerHTML==="")try{grecaptcha.render(a.id,{sitekey:e.website_key,badge:e.badge_position,size:"invisible",theme:e.theme||"light"})}catch(o){t&&console.error(o)}}))})),y=`query {
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
}`,c=new d().getMethods();class w{constructor(){var e;this._enableReCAPTCHA=!1,this._recaptchaBackendEndpoint=((e=c.getConfig())==null?void 0:e.endpoint)||"",this._recaptchaScriptUrl="https://www.google.com/recaptcha/api.js",this._configStorageKey="recaptchaConfig",this._logger=!1}async _updateBadgePosition(e,t){if(t){if((t==null?void 0:t.badge_position)!=="inline"){if(!await _())return;const a=document.querySelector(".grecaptcha-badge iframe");t.theme&&a&&(!a.src.includes("theme=dark")||!a.src.includes("theme=light"))&&a.setAttribute("src",`${a.src}&theme=${t.theme}`);return}await b(e,t,this._logger)}}async _addRecaptchaScript(){const e=await this._loadConfig();if(!document.getElementById("recaptchaId")&&e){const t=e.website_key,r=e.badge_position==="inline",a=e.language_code;if(!t)return;const o=document.createElement("script");o.setAttribute("id","recaptchaId"),o.defer=!0,o.src=r?`${this._recaptchaScriptUrl}?render=${t}&badge=none&hl=${a}`:`${this._recaptchaScriptUrl}?render=${t}&badge=${e.badge_position}&hl=${a}`,document.head.appendChild(o)}}async _fetchStoreConfig(){var e;try{const t=await c.fetchGraphQl(y,{method:"GET",cache:"force-cache"});if((e=t==null?void 0:t.errors)!=null&&e.length){this._logger&&console.error(t.errors[0].message);return}return t}catch(t){this._logger&&console.error(`${n.failedFetch}:`,t)}}async _loadConfig(){const e=await h(this._configStorageKey);return e?(this._enableReCAPTCHA=!!e.is_enabled,e):(this._logger&&console.error(n.failedGetStorageConfig),null)}setEndpoint(e){e&&(this._recaptchaBackendEndpoint=e,c.setEndpoint(e))}async setConfig(e){var t;try{const r=await this._fetchStoreConfig();if(!((t=r==null?void 0:r.data)!=null&&t.recaptchaV3Config)){sessionStorage.removeItem(this._configStorageKey);return}const a=l(r.data.recaptchaV3Config,e);f(this._configStorageKey,a,this._logger)}catch(r){this._logger&&console.error(n.failedSetStorageConfig,r),sessionStorage.removeItem(this._configStorageKey)}}async initReCaptcha(e=3e3){setTimeout(()=>{(async()=>{try{const t=await this._loadConfig();if(!(t!=null&&t.forms)||!t.is_enabled)return;await this._addRecaptchaScript();for(let r=0;r<t.forms.length;r++){const a=t.forms[r];await this._updateBadgePosition(a.badgeId,t)}}catch(t){this._logger&&console.error(n.failedInitializing,t)}})()},e)}async verifyReCaptcha(){try{const e=await this._loadConfig();return!(e!=null&&e.forms)||!e.website_key||!e.is_enabled?void 0:await m(e.website_key)}catch(e){this._logger&&console.error(e)}}enableLogger(e){this._logger=e}getMethods(){return{enableLogger:this.enableLogger.bind(this),setEndpoint:this.setEndpoint.bind(this),setConfig:this.setConfig.bind(this),initReCaptcha:this.initReCaptcha.bind(this),verifyReCaptcha:this.verifyReCaptcha.bind(this)}}}const S=new w,{initReCaptcha:E,verifyReCaptcha:T,setEndpoint:I,setConfig:A,enableLogger:O}=S.getMethods();export{w as RecaptchaModule,O as enableLogger,E as initReCaptcha,c as recaptchaFetchApi,A as setConfig,I as setEndpoint,T as verifyReCaptcha};
