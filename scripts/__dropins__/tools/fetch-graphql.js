export const id=85;export const ids=[85];export const modules={597:(e,t,r)=>{function n(e,t,r,n,a,i,s){try{var h=e[i](s),o=h.value}catch(e){return void r(e)}h.done?t(o):Promise.resolve(o).then(n,a)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){var n,a,i,s;n=e,a=t,i=r[t],(a="symbol"==typeof(s=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(a))?s:String(s))in n?Object.defineProperty(n,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[a]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,{AZ:()=>u,Cz:()=>c,MR:()=>l,Np:()=>d,WI:()=>p,Xx:()=>f,zj:()=>v});var s={"Content-Type":"application/json",Accept:"application/json"};class h{get endpoint(){return this._endpoint}get fetchGraphQlHeaders(){return this._fetchGraphQlHeaders}setEndpoint(e){this._endpoint=e}setFetchGraphQlHeader(e,t){this._fetchGraphQlHeaders=i(i({},this.fetchGraphQlHeaders),{},{[e]:t})}removeFetchGraphQlHeader(e){var t;null===(t=this._fetchGraphQlHeaders)||void 0===t||delete t[e]}setFetchGraphQlHeaders(e){this._fetchGraphQlHeaders=i({},e)}fetchGraphQl(e,t){var r,a=this;return(r=function*(){var r,n=a.endpoint,h=a.fetchGraphQlHeaders;if(!n)throw Error('Missing "url"');var o,p=null!==(r=null==t?void 0:t.method)&&void 0!==r?r:"POST",c=null==t?void 0:t.cache,l=null==t?void 0:t.signal,d=new URL(n),f=i(i({},s),h);return"POST"===p&&(o=JSON.stringify({query:e,variables:null==t?void 0:t.variables})),"GET"===p&&(d.searchParams.append("query",function(e){return(e=(e=e.replace(/\s+/g," ")).replace(/#.*/g,"")).trim()}(e)),null!=t&&t.variables&&d.searchParams.append("variables",JSON.stringify(t.variables))),yield fetch(d,{method:p,headers:f,body:o,cache:c,signal:l}).then((e=>e.json()))},function(){var e=this,t=arguments;return new Promise((function(a,i){var s=r.apply(e,t);function h(e){n(s,a,i,h,o,"next",e)}function o(e){n(s,a,i,h,o,"throw",e)}h(void 0)}))})()}getConfig(){return{endpoint:this.endpoint,fetchGraphQlHeaders:this.fetchGraphQlHeaders}}getMethods(){return{setEndpoint:this.setEndpoint.bind(this),setFetchGraphQlHeader:this.setFetchGraphQlHeader.bind(this),removeFetchGraphQlHeader:this.removeFetchGraphQlHeader.bind(this),setFetchGraphQlHeaders:this.setFetchGraphQlHeaders.bind(this),fetchGraphQl:this.fetchGraphQl.bind(this),getConfig:this.getConfig.bind(this)}}}var o=new h;class p extends h{get endpoint(){var e;return null!==(e=this._endpoint)&&void 0!==e?e:o.endpoint}get fetchGraphQlHeaders(){return(this._endpoint?this._fetchGraphQlHeaders:i(i({},this._fetchGraphQlHeaders),o.fetchGraphQlHeaders))||{}}}var{setEndpoint:c,setFetchGraphQlHeaders:l,setFetchGraphQlHeader:d,removeFetchGraphQlHeader:f,fetchGraphQl:u,getConfig:v}=o.getMethods()}};import e from"./runtime.js";import*as t from"./fetch-graphql.js";e.C(t);var r=(597,e(e.s=597)),n=r.WI,a=r.AZ,i=r.zj,s=r.Xx,h=r.Cz,o=r.Np,p=r.MR;export{n as FetchGraphQL,a as fetchGraphQl,i as getConfig,s as removeFetchGraphQlHeader,h as setEndpoint,o as setFetchGraphQlHeader,p as setFetchGraphQlHeaders};