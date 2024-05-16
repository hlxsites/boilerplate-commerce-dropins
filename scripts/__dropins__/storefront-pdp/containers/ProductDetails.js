import*as pe from"@dropins/tools/preact-compat.js";import{useState as K,Children as te,useRef as Se,useMemo as ve,useEffect as re,useCallback as Q}from"@dropins/tools/preact-compat.js";import{Button as we,Icon as be,Price as ye,Picker as Ve,ColorSwatch as He,ImageSwatch as qe,TextSwatch as ze,Incrementer as Ge,Breadcrumbs as Te,Image as ge}from"@dropins/tools/components/index.js";import{jsxs as R,jsx as e,Fragment as Pe}from"@dropins/tools/preact-jsx-runtime.js";import{useText as z}from"@dropins/tools/i18n.js";import{c as x,V as W}from"../chunks/vcomponent__7E94D35BBn.js";import{c as Ie,d as Be}from"../chunks/getRefinedProduct__BeU9ZMr3mu.js";import{events as Ue}from"@dropins/tools/event-bus.js";import{c as Ee}from"../chunks/initialize__BRSu0U-gnU.js";import{Slot as T}from"@dropins/tools/lib/slot.js";import"@dropins/tools/fetch-graphql.js";const xe=(l,p)=>{let _;return function(...m){clearTimeout(_),_=setTimeout(()=>l.apply(this,m),p)}},Ne=l=>l.replace("_","-"),je=l=>pe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...l},pe.createElement("path",{d:"M7.74512 9.87701L12.0001 14.132L16.2551 9.87701",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"square",strokeLinejoin:"round"})),Fe=l=>pe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...l},pe.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M18.3599 5.64001L5.62988 18.37",stroke:"currentColor"}),pe.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M18.3599 18.37L5.62988 5.64001",stroke:"currentColor"})),me=({show:l=1,scrollbar:p=!1,peak:_=!1,arrows:m=!1,controls:s="dots",arrowsOnMainImage:y=!1,loop:u=!1,gap:D=null,direction:c="horizontal",width:ee="100%",height:j="100%",defaultIndex:r=0,className:V,children:H,thumbnails:Y=null,isZoomed:P,...A})=>{const h=z("PDP.Carousel.label").label,b=z("PDP.Carousel.Slide.label").label,n=z("PDP.Carousel.Previous.label").label,O=z("PDP.Carousel.Next.label").label,f=z("PDP.Carousel.Controls.label").label,t=z("PDP.Carousel.Controls.Button.label").label,[$,U]=K(()=>$e(l)),B=Math.ceil(te.toArray(H).length/$),ne={small:16,medium:24,large:64},E=_?24:0,k=D?ne[D]:0,Z=te.toArray(H).length%$,le=16,C=2,ce="32",[g,ae]=K(u?r+1:r),J=Se([]),[G,X]=K(0),[ie,se]=K(0),i=ve(()=>te.toArray(Y),[Y]),o=ve(()=>{const a=te.toArray(H).reduce((d,L,S)=>S%$===0?[...d,[L]]:[...d.slice(0,-1),[...d[d.length-1],L]],[]);return!u||a.length===1?a:u&&te.toArray(H).length%$===0?[a[B-1]].concat(a).concat([a[0],a[1]]):[te.toArray(H).slice(-$)].concat(a).concat([a[0],a[1]])},[H,$,B,u]),v=Se(null),N=Se(null),w=s==="thumbnailsRow"||s==="thumbnailsColumn";re(()=>{const a=document.body,d=xe(()=>{var I,Ae;X(((I=v.current)==null?void 0:I.offsetWidth)??0),se(((Ae=v.current)==null?void 0:Ae.offsetHeight)??0);const S=window.innerWidth,M=$e(l,S);M!==$&&U(M)},50),L=new ResizeObserver(d);return L.observe(a),()=>{L.unobserve(a)}},[$,l]);const F=Q(a=>{const d=u?a-1:a,L=J==null?void 0:J.current[0],S=(L==null?void 0:L.offsetWidth)+le,M=(L==null?void 0:L.offsetHeight)+le,I=N.current;s==="thumbnailsRow"&&(I!=null&&I.offsetWidth)&&(S*(d+1)>I.offsetWidth&&(I.style.scrollBehavior="smooth",I.scrollLeft=(d+C)*S),I.scrollLeft>S*d&&(I.style.scrollBehavior="smooth",I.scrollLeft=(d-C)*S)),s==="thumbnailsColumn"&&(I!=null&&I.offsetHeight)&&(M*(d+1)>I.offsetHeight&&(I.style.scrollBehavior="smooth",I.scrollTop=(d+C)*M),I.scrollTop>M*d&&(I.style.scrollBehavior="smooth",I.scrollTop=(d-C)*M))},[s,u]),q=Q((a,d,L)=>{(s==="thumbnailsRow"||s==="thumbnailsColumn")&&F(a);const S=v.current,M=E?S.offsetWidth-E:S.offsetWidth-E+k;if(!Array.from(S.querySelectorAll("[data-index]")).filter(_e=>{const oe=Number(_e.getAttribute("data-index"));return!isNaN(oe)&&oe>-1})[a])return;if(L){const _e=a===0?B:0,oe=M*(B+(Z||$)/$);if(S.scrollLeft>=0&&S.scrollLeft<M-5){q(1,!0);return}if(S.scrollLeft>oe-M&&S.scrollLeft<=oe){q(B,!0);return}S.style.scrollBehavior="auto",S.scrollLeft=_e===0?0:oe,q(_e===0?1:B,!0);return}const We=(S.offsetWidth-k)/$*o[a].length-E;S.style.scrollBehavior=d?"smooth":"auto",S.scrollLeft=o[a].length===$?M*a:M*(a-1)+We},[k,B,E,$,Z,o,F,s]),de=Q(()=>{if(u){const d=g-1;q(d,!0,g===1);return}const a=g<=0?0:g-1;q(a,!0)},[g,q,u]),he=Q(()=>{const a=o.length-1;if(u){const L=g+1;q(L,!0,g===B);return}const d=g>=a?a:g+1;q(d,!0)},[o.length,u,g,q,B]);re(()=>{const a=d=>{d.key==="ArrowLeft"&&(d.preventDefault(),de()),d.key==="ArrowRight"&&(d.preventDefault(),he())};return window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)}},[he,de]),re(()=>{q(u?r+1:r,!1)},[r,q,u]);const fe=xe(()=>{const a=v.current,d=E?a.offsetWidth-E:a.offsetWidth-E+k,L=a.scrollLeft/d,S=Math.round(L)-L<1?Math.round(L):Math.ceil(L);if(w&&F(S),u){const M=d*(B+(Z||$)/$);if(Math.ceil(a.scrollLeft)>=Math.ceil(M)-5){a.style.scrollBehavior="auto",a.scrollLeft=a.offsetWidth*1+(Math.ceil(a.scrollLeft)-Math.ceil(M)-E);return}if(a.scrollLeft===0){a.style.scrollBehavior="auto",a.scrollLeft=M-a.offsetWidth+E;return}}g!==S&&ae(S)},100);re(()=>{const a=v.current;return a==null||a.addEventListener("scroll",fe),()=>{a==null||a.removeEventListener("scroll",fe)}},[fe]);const ue=(a,d,L)=>e(we,{className:x([["pdp-carousel__button",!a],[`pdp-carousel__button--${d}`,!a],[`pdp-carousel__button--${s}`,a]]),style:{"--height":`${ie}px`},variant:"tertiary","aria-label":d==="next"?O:n,onClick:L,disabled:u?!1:d==="next"?g>=o.length-1:g<1,children:e(be,{className:x([["pdp-carousel__button__icon",!a],[`pdp-carousel__button__icon--${d}`,!a],[`pdp-carousel__button__icon--${s}--${d}`,a]]),size:ce,source:je})}),Le=m&&o.length!=1&&ue(w,"prev",de),De=m&&o.length!=1&&ue(w,"next",he),Oe=m&&o.length!=1&&ue(!1,"prev",de),Re=m&&o.length!=1&&ue(!1,"next",he);return R("div",{role:"region","aria-roledescription":h,className:x(["pdp-carousel",["pdp-carousel--main-image-controls",y],["pdp-carousel--arrows",m&&!w],[`pdp-carousel--${s}`,w],V]),style:{"--flex-carousel":s==="thumbnailsColumn"?"row-reverse":"column","--gap":w?"0":"var(--spacing-small)","--width":ee},...A,children:[e("div",{ref:v,className:x(["pdp-carousel__wrapper",`pdp-carousel__wrapper--${c}`,["pdp-carousel__wrapper--scrollbar",p],["pdp-carousel__wrapper--peak",_]]),style:{"--total-width":s==="thumbnailsColumn"?"81.6%":"100%","--height":s==="thumbnailsColumn"?"auto":j,"--gap":D?`var(--spacing-${D})`:"0px","--per-page":$},tabIndex:0,children:o.map((a,d)=>{const L=a.length<$;return e("div",{role:"group","aria-roledescription":b,"data-index":d,className:x(["pdp-carousel__slide",`pdp-carousel__slide--${c}`,["pdp-carousel__slide--active",g===d],["pdp-carousel__slide--orphan",L]]),style:{"--length":a.length},children:a},d)})}),!w&&R(Pe,{children:[Le,De]}),w&&y&&R(Pe,{children:[Oe,Re]}),s&&o.length!=1&&R("div",{className:x([[`pdp-carousel__controls__container--${s}`,w],["pdp-carousel__controls__container--no-arrows",!m||y]]),style:{"--width":s==="thumbnailsRow"?`${G}px`:ee,"--height":`${ie}px`,"--nr-thumbnails":i.length},children:[(w||P)&&!y&&Le,e("div",{ref:N,className:x([[`pdp-carousel__controls__wrapper--${s}`,w],["pdp-carousel__controls__wrapper",w]]),children:e("div",{role:"group","aria-label":f,className:x(["pdp-carousel__controls",[`pdp-carousel__controls--${s}`,w]]),children:(u?o.slice(0,B):o).map((a,d)=>{const L=u?B:o.length,S=u?g-1===d:g===d;return w?R("label",{className:x(["pdp-carousel__thumbnail__container"]),ref:M=>{M&&(J.current[d]=M)},children:[e("input",{type:"radio",name:"carousel-thumbnails","aria-label":t.replace("{key}",String(d+1)).replace("{total}",String(L)),checked:S&&G!==0,onChange:()=>{q(u?d+1:d,!0)},...A,className:x(["pdp-carousel__thumbnail",["pdp-carousel__thumbnail--selected",S&&G!==0]])}),e("span",{className:x(["pdp-carousel__thumbnail__span"]),children:i[d]})]},d):e("button",{"aria-label":t.replace("{key}",String(d+1)).replace("{total}",String(L)),onClick:()=>{q(u?d+1:d,!0)},className:x(["pdp-carousel__controls__button",["pdp-carousel__controls__button--active",S]])},d)})})}),(w||P)&&!y&&De]})]})};function $e(l,p=0){if(typeof l=="number")return l;const{small:_,medium:m,large:s}=l,y=786;return p>1024?s:p>y?m:_}const Ke=({title:l,breadcrumbs:p,galleryContent:_,infoContent:m,productContent:s,sku:y,outOfStock:u,hideSku:D,shortDescription:c,description:ee,attributes:j,images:r,options:V,price:H,specialPrice:Y,className:P,children:A,quantity:h,actions:b,carouselConfig:n,...O})=>{var Z,le,C,ce,g,ae;const f=z("PDP.Product.RegularPrice.label").label,t=z("PDP.Product.SpecialPrice.label").label,$=z("PDP.Product.OutOfStock.label").label,U=z("PDP.Product.Image.label").label,[B,ne]=K(null),E=r!=null&&r.length?r.map((J,G)=>{var X;return e(W,{node:J,loading:G===0?"eager":"lazy",alt:((X=l==null?void 0:l.props)==null?void 0:X.children)&&(U==null?void 0:U.replace("{product}",l.props.children.toString()).replace("{key}",String(G+1)).replace("{total}",String(r.length))),onClick:()=>ne(G)},G)}):e("img",{src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",className:"pdp-product__images__placeholder","aria-hidden":!0}),k=(Z=n==null?void 0:n.thumbnails)!=null&&Z.length?n.thumbnails.map((J,G)=>{var X;return e(W,{node:J,loading:(n==null?void 0:n.thumbnailsLoadingMode)||"lazy",alt:((X=l==null?void 0:l.props)==null?void 0:X.children)&&(U==null?void 0:U.replace("{product}",l.props.children.toString()).replace("{key}",String(G+1)).replace("{total}",String(r.length)))},G)}):e("img",{src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",className:"pdp-product__images__placeholder","aria-hidden":!0});return R("div",{...O,className:x(["pdp-product",P]),children:[p&&e(W,{node:p,className:"pdp-product__breadcrumbs"}),R("div",{className:"pdp-product__column-container pdp-product__gallery-column",children:[e("div",{className:"pdp-product__column-body",children:n!=null&&n.controls?e(me,{className:"pdp-product__overlay__carousel",arrows:(r==null?void 0:r.length)>1,controls:(r==null?void 0:r.length)>1?n.controls:"dots",arrowsOnMainImage:n==null?void 0:n.arrowsOnMainImage,loop:(n==null?void 0:n.loopable)&&(r==null?void 0:r.length)>1,peak:((le=n==null?void 0:n.thumbnails)==null?void 0:le.length)>1&&((C=n==null?void 0:n.peak)==null?void 0:C.desktop)||!1,gap:(n==null?void 0:n.gap)||null,width:"100%",height:"100%",defaultIndex:B||0,thumbnails:k,children:E}):e(Qe,{className:"pdp-product__images",gap:"small",children:E})}),_&&e(W,{node:_,className:"pdp-product__gallery-content"})]}),R("div",{className:"pdp-product__column-container pdp-product__content-column",children:[R("div",{className:"pdp-product__column-body",children:[R("div",{className:"pdp-product__header",children:[l&&e(W,{node:l,className:"pdp-product__title"}),!D&&y&&e(W,{node:y,className:"pdp-product__sku"})]}),R("div",{className:"pdp-product__prices",children:[Y&&e(W,{node:Y,className:x(["pdp-product__price-special","pdp-product__price"]),"aria-label":t,role:"text"}),H&&e(W,{node:H,className:x(["pdp-product__price-regular","pdp-product__price--grey"]),"aria-label":f,role:"text"})]}),n!=null&&n.mobile?e(me,{className:"pdp-product__images pdp-product__images--carousel pdp-product__images--carousel--thumbnails",width:"100%",height:"auto",arrows:(r==null?void 0:r.length)>1,controls:(r==null?void 0:r.length)>1?"thumbnailsRow":null,loop:(n==null?void 0:n.loopable)&&(r==null?void 0:r.length)>1,peak:((ce=n==null?void 0:n.thumbnails)==null?void 0:ce.length)>1&&((g=n==null?void 0:n.peak)==null?void 0:g.mobile)||!1,gap:(n==null?void 0:n.gap)||null,thumbnails:k,children:E}):e(me,{className:"pdp-product__images pdp-product__images--carousel",peak:((ae=n==null?void 0:n.peak)==null?void 0:ae.mobile)&&(r==null?void 0:r.length)>1,gap:(n==null?void 0:n.gap)||null,width:"100%",height:"auto",arrows:(r==null?void 0:r.length)>1,controls:(r==null?void 0:r.length)>1?"dots":null,loop:(n==null?void 0:n.loopable)&&(r==null?void 0:r.length)>1,children:E}),R("div",{className:x(["pdp-product__actions",["pdp-product__actions--out-of-stock",u]]),children:[u&&e("div",{className:"pdp-product__out-of-stock__text",children:$}),V&&e(W,{node:V,className:x(["pdp-product__options"])}),h&&e("div",{className:"pdp-product__quantity",children:e(W,{node:h})}),b&&e(W,{node:b,className:x(["pdp-product__buttons"])})]}),c&&e(W,{node:c,className:x(["pdp-product__short_description"])}),ee&&e(W,{node:ee,className:x(["pdp-product__description"])}),j?e("div",{className:"pdp-product__attributes",children:j}):null]}),m&&e(W,{node:m,className:"pdp-product__info-content"})]}),s&&e(W,{node:s,className:"pdp-product__content"}),B===null?null:e(Ze,{className:"pdp-product__overlay",onClose:()=>ne(null),centered:!0,children:e(me,{className:"pdp-product__overlay__carousel",arrows:(r==null?void 0:r.length)>1,width:"100%",height:"100%",defaultIndex:B||0,loop:(r==null?void 0:r.length)>1,controls:(r==null?void 0:r.length)>1?"dots":null,isZoomed:!0,children:E})})]})},Qe=({children:l,gap:p=null,className:_,style:m,...s})=>{const y=te.count(l);return e("div",{...s,className:x(["pdp-gallery-grid",_]),style:{"--gap":p?`var(--spacing-${p})`:"0px",...m},children:te.map(l,(u,D)=>e("div",{className:"pdp-gallery-grid__item",children:e(W,{node:u,loading:D===0?"eager":"lazy"},u.props.src)},y+D))})},ke=({amount:l,currency:p,locale:_,variant:m,sale:s,minimumAmount:y,maximumAmount:u,className:D,...c})=>e(Pe,{children:l||y===u?e("div",{className:"pdp-price-range",...c,children:e(ye,{amount:l||y,currency:p,locale:_,variant:m,sale:s,className:D})}):R("div",{className:"pdp-price-range",...c,children:[e(ye,{amount:y,currency:p,locale:_,className:D}),e("span",{className:"pdp-price-range__label",children:"-"}),e(ye,{amount:u,currency:p,locale:_,className:D})]})}),Ze=({centered:l,onClose:p,className:_,children:m,...s})=>{const y=z("PDP.Overlay.Close.label").label,u=Q(()=>{p==null||p()},[p]);return re(()=>{const D=c=>{c.key==="Escape"&&u()};return document.addEventListener("keydown",D),()=>{document.removeEventListener("keydown",D)}},[u]),re(()=>{const D=document.scrollingElement,c=D.style.overflow;return D.style.overflow="hidden",()=>{D.style.overflow=c}},[]),R("div",{...s,className:x(["pdp-overlay",["pdp-overlay--centered",l],_]),children:[e("div",{className:"pdp-overlay__content",children:m}),e(we,{"aria-label":y,variant:"tertiary",className:"pdp-overlay__close-button",onClick:u,icon:e(Fe,{})})]})},Je=["text","image","color","dropdown"],Xe=l=>l.map(p=>({...p,text:p.label,disabled:!p.inStock})),Ye=({options:l,hideSelectedValue:p,onValues:_,onErrors:m,defaultOptions:s,selectionsToUpdate:y,className:u,children:D,...c})=>{const ee=z("PDP.Swatches.Required.label").label,[j,r]=K(()=>l==null?void 0:l.reduce((A,h)=>{const{items:b}=h,n=b==null?void 0:b.find(f=>s==null?void 0:s.includes(f.id)),O=b==null?void 0:b.find(f=>f.selected);return n?{...A,[h.id]:{label:n.label,value:n.id}}:O?{...A,[h.id]:{label:O.label,value:O.id}}:A},{}));re(()=>{y==null||y.forEach(P=>{r(A=>{var n;const h=(n=P==null?void 0:P.items)==null?void 0:n.find(O=>O.selected);return h?{...A,[P.id]:{label:h==null?void 0:h.label,value:h==null?void 0:h.id}}:A})})},[y,r]),ve(()=>{const P=l==null?void 0:l.reduce((A,h)=>{var b;return(b=h==null?void 0:h.items)==null||b.forEach(n=>{var f;const O=((f=j[h.id])==null?void 0:f.value)===n.id;h.required&&!O&&(A[h.id]=ee)}),A},{});return m==null||m(P),P},[j]);const V=Q((P,A,h)=>{r(b=>{const n={...b,[P]:{label:A,value:h}};return _==null||_(n,h),n})},[_]),H=(P,A)=>{var b;const h=((b=A.selectedOptions[0])==null?void 0:b.label)??"";V(P,h,A.value)},Y=Q(({items:P,id:A,required:h,type:b,selected:n,label:O})=>e("div",{className:x(["pdp-swatches__options"]),children:(b==null?void 0:b.toLowerCase())==="dropdown"?e(Ve,{"aria-label":O,handleSelect:f=>H(A,f.target),options:Xe(P),value:n}):P==null?void 0:P.map(f=>{const t={key:f.id,id:f.id,name:A,value:f.value,label:f.label,groupAriaLabel:O,selected:n===f.id,outOfStock:!f.inStock,required:h===null?!0:h,onValue:()=>{V(A,f.label,f.id)}};switch(b){case"text":return e(ze,{...t,label:f.label});case"image":return e(qe,{...t,src:f.value,alt:f.label});case"color":return e(He,{...t,size:"large",color:f.value});default:return console.warn(`Invalid swatch type ${b}`),null}})}),[V]);return e("div",{...c,className:x(["pdp-swatches",u]),children:l==null?void 0:l.map(({type:P,label:A,id:h,multiple:b,required:n,items:O})=>{var f;if(!P){console.warn("Bundle product not supported on UI.");return}return Je.includes(P)||console.warn(`Invalid swatch type ${P}`),b&&console.warn("Multiple selection swatches are not currently supported."),R("div",{id:`swatch-item-${h}`,"data-slot-key":`product-swatch--${h}`,className:"pdp-swatches__field",children:[e("div",{className:"pdp-swatches__field__label",children:j[h]?p?`${A}`:`${A}: ${j[h].label}`:A}),e(Y,{id:h,type:P,required:n,items:O,label:A,selected:(f=j[h])==null?void 0:f.value})]},`swatch-item-${h}`)})})};function Ce(l,p="en_US"){if(!Me(l))throw Error("Invalid date string");return l.split(" ")[1]||(l=`${l} 00:00:00`),new Date(l).toLocaleDateString(Ne(p)).toString()}function Me(l){if(![/^\d{4}-\d{2}-\d{2}$/,/^\d{1,2}\/\d{1,2}\/\d{4}$/,/^\d{2}\/\d{2}\/\d{4}$/,/^\d{4}\/\d{2}\/\d{2}$/,/^\d{1,2}\.\d{1,2}\.\d{4}$/,/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/].some(m=>m.test(l)))return!1;const _=new Date(l);return!isNaN(_.getTime())}function et(l){const p=new URLSearchParams(window.location.search);Object.entries(l).forEach(([m,s])=>{s===null?p.delete(m):p.set(m,String(s))});let _=window.location.pathname;_+=`?${p.toString()}`,_+=window.location.hash,window.history.replaceState({},"",_)}function tt(){const l=new URLSearchParams(window.location.search),p={};return l.forEach((_,m)=>{p[m]=_}),p}const rt=({sku:l,hideSku:p,hideQuantity:_,hideShortDescription:m,hideDescription:s,hideAttributes:y,hideURLParams:u,hideSelectedOptionValue:D,slots:c,children:ee,initialData:j,carousel:r,optionsConfig:V,onAddToCart:H,...Y})=>{var G,X,ie,se;const P=z("PDP.Product.AddToCart.label").label,A=z("PDP.Product.Incrementer.label").label,h=z("PDP.Product.Details.label").label,[b,n]=K(Ee.getConfig().defaultLocale||"en-US"),[O,f]=K(),[t=null,$]=K(j),[U,B]=K(()=>{const i={sku:l,quantity:1};return t!=null&&t.optionUIDs&&(i.optionsUIDs=t.optionUIDs),i}),[ne,E]=K(()=>{var i,o;return!(t!=null&&t.options&&((i=t==null?void 0:t.options)==null?void 0:i.length)>0&&((o=t==null?void 0:t.optionUIDs)==null?void 0:o.length)!==(t==null?void 0:t.options.length))}),k={data:t,values:U,valid:ne};re(()=>{const i=Ue.on("locale",o=>{o!==b&&(n(o),Ie(l).then($))});return()=>{i==null||i.off()}},[b,l]);const Z=Q(i=>{B(o=>({...o,...i}))},[]),le=Q(i=>{var v;let o=Object.keys(i).map(N=>i[N].value).filter(N=>N!==void 0);u||et({optionsUIDs:o.join(",")}),B(N=>({...N,optionsUIDs:o})),E((o==null?void 0:o.length)===((v=t==null?void 0:t.options)==null?void 0:v.length)),Be(l,o,V==null?void 0:V.anchorOptions).then(N=>{var w;$(N),(w=V==null?void 0:V.anchorOptions)!=null&&w.length&&C(N,o)})},[l]),C=Q((i,o)=>{var w;const v=(i==null?void 0:i.optionUIDs)??[];o.every(F=>v.includes(F))||(f(i==null?void 0:i.options),B(F=>({...F,optionsUIDs:v})),E((v==null?void 0:v.length)===((w=i==null?void 0:i.options)==null?void 0:w.length)))},[l]),ce=Q(i=>{Object.keys(i).length!==0&&E(!1)},[]),g=ve(()=>{var i;return(i=t==null?void 0:t.attributes)==null?void 0:i.map(({label:o,value:v},N)=>{const w=Me(v)?Ce(v,b):v.toString();return R("li",{children:[o,": ",e("span",{dangerouslySetInnerHTML:{__html:w}})]},N)})},[t==null?void 0:t.attributes,b]),ae=!_&&(t!=null&&t.inStock)?e(T,{name:"Quantity",slot:c==null?void 0:c.Quantity,context:{...k},children:e(Ge,{name:"quantity",defaultValue:U.quantity.toString(),min:1,"aria-label":A,className:"pdp-product__quantity",onValue:i=>{Z({quantity:Number(i)})}},"quantity")}):void 0,J=()=>{if(t!=null&&t.options)return e(T,{name:"Options",slot:c==null?void 0:c.Options,context:{...k},children:e(Ye,{options:t.options,defaultOptions:U.optionsUIDs,selectionsToUpdate:O,hideSelectedValue:D,onValues:le,onErrors:ce})})};return e("div",{...Y,children:e(Ke,{title:e(T,{name:"Title",slot:c==null?void 0:c.Title,context:{...k},children:t==null?void 0:t.name}),sku:p?void 0:e(T,{name:"SKU",slot:c==null?void 0:c.SKU,context:{...k},children:t==null?void 0:t.sku}),options:J(),breadcrumbs:(c==null?void 0:c.Breadcrumbs)&&e(T,{name:"Breadcrumbs",slot:c==null?void 0:c.Breadcrumbs,context:{...k,setSeparator(i){this._registerMethod((...o)=>{const v=i(...o),N=v&&e(be,{source:v});this._setProps(w=>({...w,separator:N}))})},appendLink(i){this._registerMethod((...o)=>{const{text:v,...N}=i(...o),w=e("a",{...N,children:v});this._setProps(F=>({...F,categories:[...F.categories||[],w]}))})},appendHTMLElement(i){this._registerMethod((...o)=>{const v=i(...o),N=this._htmlElementToVNode(v);this._setProps(w=>({...w,categories:[...w.categories||[],N]}))})}},render:({separator:i,categories:o})=>e(Te,{separator:i,categories:o})}),quantity:ae,actions:e(T,{name:"Actions",slot:c==null?void 0:c.Actions,context:{...k,appendButton(i){this._registerMethod((...o)=>{const v=i(...o);if(!v)return;const{text:N,icon:w,...F}=v,q=e(we,{type:"button",...F,icon:w&&e(be,{source:w}),children:N});this._setProps(de=>({children:[...de.children||[],q]}))})}},children:!(c!=null&&c.Actions)&&e(we,{size:"medium",type:"submit",icon:e(be,{source:"Cart"}),disabled:!(t!=null&&t.inStock)||!ne,"aria-label":P,onClick:()=>H==null?void 0:H(U),children:P})}),shortDescription:m?void 0:e(T,{name:"ShortDescription",slot:c==null?void 0:c.ShortDescription,context:{...k},children:e("div",{dangerouslySetInnerHTML:{__html:(t==null?void 0:t.shortDescription)??""}})}),description:s?void 0:e(T,{name:"Description",slot:c==null?void 0:c.Description,context:{...k},children:e("div",{dangerouslySetInnerHTML:{__html:(t==null?void 0:t.description)??""}})}),images:((G=t==null?void 0:t.images)==null?void 0:G.map(({label:i,url:o})=>{var v,N;return e(ge,{title:i,alt:i,src:o,width:((v=r==null?void 0:r.imageParams)==null?void 0:v.width)??960,height:((N=r==null?void 0:r.imageParams)==null?void 0:N.height)??1191,params:(r==null?void 0:r.imageParams)??{width:960}},o)}))??[],specialPrice:(X=t==null?void 0:t.prices)!=null&&X.visible?e(T,{name:"SpecialPrice",slot:c==null?void 0:c.SpecialPrice,context:{...k},children:e(ke,{...t.prices.final,locale:Ne(b)})}):void 0,price:(ie=t==null?void 0:t.prices)!=null&&ie.visible&&t.prices.regular&&t.prices.final.amount!==(t==null?void 0:t.prices.regular.amount)?e(T,{name:"RegularPrice",slot:c==null?void 0:c.RegularPrice,context:{...k},children:e(ke,{...t.prices.regular,locale:Ne(b)})}):void 0,carouselConfig:{...r,thumbnails:r?((se=t==null?void 0:t.images)==null?void 0:se.map(({label:i,url:o})=>{var v,N;return e(ge,{title:i,alt:i,src:o,width:((v=r==null?void 0:r.thumbnailParams)==null?void 0:v.width)??200,height:((N=r==null?void 0:r.thumbnailParams)==null?void 0:N.height)??248,params:(r==null?void 0:r.thumbnailParams)??{width:200}},o)}))??[]:[]},outOfStock:!(t!=null&&t.inStock),attributes:y?void 0:e(T,{name:"Attributes",slot:c==null?void 0:c.Attributes,context:{...k},children:g!=null&&g.length?R(Pe,{children:[h,e("ul",{children:g})]}):null}),galleryContent:(c==null?void 0:c.GalleryContent)&&e(T,{name:"GalleryContent",slot:c.GalleryContent,context:{...k}}),infoContent:(c==null?void 0:c.InfoContent)&&e(T,{name:"InfoContent",slot:c.InfoContent,context:{...k}}),productContent:(c==null?void 0:c.Content)&&e(T,{name:"Content",slot:c.Content,context:{...k}})})})};rt.getInitialData=async function({sku:l,optionsConfig:p}){var m,s,y,u,D,c;const _=((m=tt().optionsUIDs)==null?void 0:m.split(","))||((c=(D=(u=(y=(s=Ee)==null?void 0:s.getConfig())==null?void 0:y.models)==null?void 0:u.ProductDetails)==null?void 0:D.initialData)==null?void 0:c.optionsUIDs);return _!=null&&_.length?await Be(l,_,p==null?void 0:p.anchorOptions):await Ie(l)};export{rt as ProductDetails,rt as default};
//# sourceMappingURL=ProductDetails.js.map
