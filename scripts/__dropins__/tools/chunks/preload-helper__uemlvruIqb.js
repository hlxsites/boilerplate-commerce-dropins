const f=function(){const o=typeof document<"u"&&document.createElement("link").relList;return o&&o.supports&&o.supports("modulepreload")?"modulepreload":"preload"}(),p=function(l){return"/"+l},u={},E=function(o,i,h){let c=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const e=document.querySelector("meta[property=csp-nonce]"),n=(e==null?void 0:e.nonce)||(e==null?void 0:e.getAttribute("nonce"));c=Promise.all(i.map(t=>{if(t=p(t),t in u)return;u[t]=!0;const s=t.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${a}`))return;const r=document.createElement("link");if(r.rel=s?"stylesheet":f,s||(r.as="script",r.crossOrigin=""),r.href=t,n&&r.setAttribute("nonce",n),document.head.appendChild(r),s)return new Promise((d,m)=>{r.addEventListener("load",d),r.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${t}`)))})}))}return c.then(()=>o()).catch(e=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=e,window.dispatchEvent(n),!n.defaultPrevented)throw e})};export{E as _};
//# sourceMappingURL=preload-helper__uemlvruIqb.js.map