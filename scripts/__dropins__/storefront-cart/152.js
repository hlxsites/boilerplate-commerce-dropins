export const id=152;export const ids=[152];export const modules={5840:(e,t,n)=>{n.d(t,{s:()=>T,C:()=>E});var r=n(9064),a=n(8528),o=n.n(a),l=n(8884);const i=JSON.parse('{"Dropin":{"ExampleComponentName":{"item":{"label":"string"}},"Incrementer":{"decreaseLabel":"Decrease Quantity","increaseLabel":"Increase Quantity","label":"Quantity"},"Modal":{"Close":{"label":"Close"}},"InlineAlert":{"dismissLabel":"Dismiss Alert"},"PriceSummary":{"subTotal":{"label":"Subtotal","withTaxes":"Including taxes"},"shipping":{"label":"Shipping","estimated":"Estimated Shipping","estimatedZip":"Estimated Shipping to ","zipLinkAriaLabel":"Change zip code","withTaxes":"Including taxes"},"taxes":{"total":"Tax Total","totalOnly":"Tax","breakdown":"Taxes","showBreakdown":"Show Tax Breakdown","hideBreakdown":"Hide Tax Breakdown"},"total":{"estimated":"Estimated Total","label":"Total","withoutTax":"Total excluding taxes"}},"ProgressSpinner":{"updating":{"label":"Item is updating"},"updatingChildren":{"label":"Items are updating"}},"PriceRange":{"from":{"label":"From"},"to":{"label":"to"},"asLowAs":{"label":"As low as"}},"Swatches":{"outOfStock":{"label":"out of stock swatch"},"selected":{"label":"swatch selected"},"swatch":{"label":"swatch"}},"Accordion":{"open":{"label":"Open"},"close":{"label":"Close"}},"CartItem":{"each":{"label":"each"},"quantity":{"label":"Quantity"},"remove":{"label":"Remove {product} from the cart"},"removeDefault":{"label":"Remove item from the cart"},"taxIncluded":{"label":"incl. VAT"},"updating":{"label":"{product} is updating"}}}}');var s=n(8300),p={default:i,en_US:i},d=n(5536),c=n.n(d),f=n(7008),b=n.n(f),y=n(1496),u=n.n(y),m=n(9356),g=n.n(m),x=n(9904),v=n.n(x),h=n(3040),w={attributes:{"data-dropin":"storefront-cart","data-sdk":"0170"},styleTagTransform:(e,t)=>{window._loadedStyles=window._loadedStyles??{};const n=e.match(/\.([^\s{]+)/)?.[1],r=n?.match(/dropin-(.*)/)?.[1],a=Number(t.getAttribute("data-sdk")??0),o=r?`sdk/${r}`:t.getAttribute("data-dropin"),l=window._loadedStyles[o];if(l){if(!r||r&&a>l.sdk){const t=l.style.textContent;l.style.textContent=`${t}\n/* --- MERGED --- */\n${e}`}return void t.remove()}t.textContent=e,t.setAttribute("data-dropin",o),t.removeAttribute("data-sdk"),window._loadedStyles[o]={sdk:a,core:r,style:t};const i=document.querySelector("head"),{lastStyleInjected:s,lastCoreStyleInjected:p}=window._loadedStyles;s?s.nextSibling?r&&s!==p?i.insertBefore(t,p.nextSibling):i.insertBefore(t,s.nextSibling):i.appendChild(t):i.insertBefore(t,i.firstChild),window._loadedStyles.lastStyleInjected=t,r&&(window._loadedStyles.lastCoreStyleInjected=t)}};w.setAttributes=g(),w.insert=u().bind(null,"head"),w.domAPI=b(),w.insertStyleElement=v();c()(h.c,w);h.c&&h.c.locals&&h.c.locals;var S=n(4044),O={attributes:{"data-dropin":"storefront-cart","data-sdk":"0170"},styleTagTransform:(e,t)=>{window._loadedStyles=window._loadedStyles??{};const n=e.match(/\.([^\s{]+)/)?.[1],r=n?.match(/dropin-(.*)/)?.[1],a=Number(t.getAttribute("data-sdk")??0),o=r?`sdk/${r}`:t.getAttribute("data-dropin"),l=window._loadedStyles[o];if(l){if(!r||r&&a>l.sdk){const t=l.style.textContent;l.style.textContent=`${t}\n/* --- MERGED --- */\n${e}`}return void t.remove()}t.textContent=e,t.setAttribute("data-dropin",o),t.removeAttribute("data-sdk"),window._loadedStyles[o]={sdk:a,core:r,style:t};const i=document.querySelector("head"),{lastStyleInjected:s,lastCoreStyleInjected:p}=window._loadedStyles;s?s.nextSibling?r&&s!==p?i.insertBefore(t,p.nextSibling):i.insertBefore(t,s.nextSibling):i.appendChild(t):i.insertBefore(t,i.firstChild),window._loadedStyles.lastStyleInjected=t,r&&(window._loadedStyles.lastCoreStyleInjected=t)}};O.setAttributes=g(),O.insert=u().bind(null,"head"),O.domAPI=b(),O.insertStyleElement=v();c()(S.c,O);S.c&&S.c.locals&&S.c.locals;var j=n(9888),P=["lang","langDefinitions","className","children"];function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t,n){var r;return(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?r:String(r))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var T=(0,r.GY)({locale:"en-US"}),E=e=>{var{lang:t="en_US",langDefinitions:n={},className:a,children:i}=e,d=I(e,P),c=(0,r.bB)((()=>{var e,r=o()(n.default,null!==(e=n[t])&&void 0!==e?e:{});return o()((e=>o()(p.default,p[e]||{}))(t),r)}),[t,n]);return(0,j.im)(T.Provider,{value:{locale:t.replace("_","-")},children:(0,j.im)(s.us,{definition:c,children:(0,j.im)("div",C(C({},d),{},{className:(0,l.i)(["dropin-design",a]),children:i}))})})}},8884:(e,t,n)=>{n.d(t,{i:()=>r});var r=e=>e.reduce(((e,t)=>{if(!t)return e;if("string"==typeof t&&(e+=" ".concat(t)),Array.isArray(t)){var[n,r]=t;n&&r&&(e+=" ".concat(n))}return e}),"").trim()},4496:(e,t,n)=>{n.d(t,{o:()=>d});var r=n(8884),a=n(9888),o=["node"];function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){var r;return(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?r:String(r))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function d(e){var{node:t}=e,n=p(e,o);return t?Array.isArray(t)?(0,a.im)(a.ae,{children:t.map(((e,t)=>(0,a.im)(d,i({node:e,className:n.className},n),t)))}):(n.className=(0,r.i)([t.props.className,n.className]),(0,a.im)(t.type,i(i({ref:t.ref},t.props),n),t.key)):null}},3040:(e,t,n)=>{n.d(t,{c:()=>i});var r=n(6008),a=n.n(r),o=n(2076),l=n.n(o)()(a());l.push([e.id,".dropin-design{\n  --color-brand-500:#454545;\n  --color-brand-600:#383838;\n  --color-brand-700:#2b2b2b;\n  --color-neutral-50:#ffffff;\n  --color-neutral-100:#fafafa;\n  --color-neutral-200:#f5f5f5;\n  --color-neutral-300:#e8e8e8;\n  --color-neutral-400:#d6d6d6;\n  --color-neutral-500:#b8b8b8;\n  --color-neutral-600:#8f8f8f;\n  --color-neutral-700:#666666;\n  --color-neutral-800:#3d3d3d;\n  --color-neutral-900:#292929;\n  --color-positive-200:#eff5ef;\n  --color-positive-500:#7fb078;\n  --color-positive-800:#53824c;\n  --color-informational-200:#eeeffb;\n  --color-informational-500:#6978d9;\n  --color-informational-800:#5d6dd6;\n  --color-warning-200:#fdf3e9;\n  --color-warning-500:#e79f5c;\n  --color-warning-800:#cc7a2e;\n  --color-alert-200:#ffebeb;\n  --color-alert-500:#db7070;\n  --color-alert-800:#c35050;\n  --color-button-active:var(--color-brand-700);\n  --color-button-focus:var(--color-neutral-400);\n  --color-button-hover:var(--color-brand-600);\n  --color-action-button-active:var(--color-neutral-50);\n  --color-action-button-hover:var(--color-neutral-300);\n  --color-opacity-16:rgba(255, 255, 255, 0.16);\n  --color-opacity-24:rgba(255, 255, 255, 0.24);\n  --grid-1-columns:4;\n  --grid-1-margins:0;\n  --grid-1-gutters:16px;\n  --grid-2-columns:12;\n  --grid-2-margins:0;\n  --grid-2-gutters:16px;\n  --grid-3-columns:12;\n  --grid-3-margins:0;\n  --grid-3-gutters:24px;\n  --grid-4-columns:12;\n  --grid-4-margins:0;\n  --grid-4-gutters:24px;\n  --grid-5-columns:12;\n  --grid-5-margins:0;\n  --grid-5-gutters:24px;\n  --shape-border-radius-1:3px;\n  --shape-border-radius-2:8px;\n  --shape-border-radius-3:24px;\n  --shape-border-width-1:1px;\n  --shape-border-width-2:1.5px;\n  --shape-border-width-3:2px;\n  --shape-border-width-4:4px;\n  --shape-shadow-1:0 0 16px 0 rgba(0, 0, 0, 0.16);\n  --shape-shadow-2:0 2px 16px 0 rgba(0, 0, 0, 0.16);\n  --shape-shadow-3:0 2px 3px 0 rgba(0, 0, 0, 0.16);\n  --shape-icon-stroke-1:1px;\n  --shape-icon-stroke-2:1.5px;\n  --shape-icon-stroke-3:2px;\n  --shape-icon-stroke-4:4px;\n  --spacing-xxsmall:4px;\n  --spacing-xsmall:8px;\n  --spacing-small:16px;\n  --spacing-medium:24px;\n  --spacing-big:32px;\n  --spacing-xbig:40px;\n  --spacing-xxbig:48px;\n  --spacing-large:64px;\n  --spacing-xlarge:72px;\n  --spacing-xxlarge:96px;\n  --spacing-huge:120px;\n  --spacing-xhuge:144px;\n  --spacing-xxhuge:192px;\n  --type-base-font-family:system-ui, sans-serif;\n  --type-display-1-font:normal normal 300 60px/72px var(--type-base-font-family);\n  --type-display-1-letter-spacing:0.04em;\n  --type-display-2-font:normal normal 300 48px/56px var(--type-base-font-family);\n  --type-display-2-letter-spacing:0.04em;\n  --type-display-3-font:normal normal 300 34px/40px var(--type-base-font-family);\n  --type-display-3-letter-spacing:0.04em;\n  --type-headline-1-font:normal normal 400 24px/32px var(--type-base-font-family);\n  --type-headline-1-letter-spacing:0.04em;\n  --type-headline-2-default-font:normal normal 300 20px/24px var(--type-base-font-family);\n  --type-headline-2-default-letter-spacing:0.04em;\n  --type-headline-2-strong-font:normal normal 400 20px/24px var(--type-base-font-family);\n  --type-headline-2-strong-letter-spacing:0.04em;\n  --type-body-1-default-font:normal normal 300 16px/24px var(--type-base-font-family);\n  --type-body-1-default-letter-spacing:0.04em;\n  --type-body-1-strong-font:normal normal 400 16px/24px var(--type-base-font-family);\n  --type-body-1-strong-letter-spacing:0.04em;\n  --type-body-1-emphasized-font:normal normal 700 16px/24px var(--type-base-font-family);\n  --type-body-1-emphasized-letter-spacing:0.04em;\n  --type-body-2-default-font:normal normal 300 14px/20px var(--type-base-font-family);\n  --type-body-2-default-letter-spacing:0.04em;\n  --type-body-2-strong-font:normal normal 400 14px/20px var(--type-base-font-family);\n  --type-body-2-strong-letter-spacing:0.04em;\n  --type-body-2-emphasized-font:normal normal 700 14px/20px var(--type-base-font-family);\n  --type-body-2-emphasized-letter-spacing:0.04em;\n  --type-button-1-font:normal normal 400 20px/26px var(--type-base-font-family);\n  --type-button-1-letter-spacing:0.08em;\n  --type-button-2-font:normal normal 400 16px/24px var(--type-base-font-family);\n  --type-button-2-letter-spacing:0.08em;\n  --type-details-caption-1-font:normal normal 400 12px/16px var(--type-base-font-family);\n  --type-details-caption-1-letter-spacing:0.08em;\n  --type-details-caption-2-font:normal normal 300 12px/16px var(--type-base-font-family);\n  --type-details-caption-2-letter-spacing:0.08em;\n  --type-details-overline-font:normal normal 400 12px/20px var(--type-base-font-family);\n  --type-details-overline-letter-spacing:0.16em;\n}\n",""]);const i=l},4044:(e,t,n)=>{n.d(t,{c:()=>i});var r=n(6008),a=n.n(r),o=n(2076),l=n.n(o)()(a());l.push([e.id,".dropin-design a{\n  --textColor:var(--color-brand-500);\n  color:var(--textColor);\n  text-decoration:none;\n}\n\n.dropin-design a:hover{\n  --textColor:var(--color-brand-700);\n  text-decoration:solid underline var(--textColor);\n  text-underline-offset:6px;\n}\n\n.dropin-design a:focus-visible{\n  outline:solid var(--shape-border-width-4) var(--color-neutral-400);\n  border:var(--shape-border-width-1) solid var(--color-neutral-800);\n  border-radius:var(--shape-border-radius-1);\n}\n",""]);const i=l}};