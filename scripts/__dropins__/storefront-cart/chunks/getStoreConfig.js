var b=Object.defineProperty;var v=(e,t,r)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var s=(e,t,r)=>(v(e,typeof t!="symbol"?t+"":t,r),r);import{events as o}from"@dropins/tools/event-bus.js";import{FetchGraphQL as R}from"@dropins/tools/fetch-graphql.js";class D{constructor({init:t,listeners:r}){s(this,"_listeners",[]);s(this,"listeners");s(this,"init");s(this,"config",new E({}));this.listeners=n=>(this._listeners.forEach(i=>i.off()),this._listeners=r(n)),this.init=n=>{const{imageParamsKeyMap:i,...c}=n;return this.config.setConfig({...this.config.getConfig(),...c}),G(i),t(n)}}}class E{constructor(t){s(this,"config");this.config=t}getConfig(){return this.config}setConfig(t){this.config=t}}class S{constructor(){s(this,"_map")}get map(){return this._map}set map(t){this._map=t}getMethods(){return{setMap:t=>{this.map=t},getMap:()=>this.map}}}const A=new S,{setMap:G,getMap:W}=A.getMethods();function M(e){const t=document.cookie.split(";");for(let r=0;r<t.length;r++){const n=t[r].trim();if(n.indexOf(`${e}=`)===0)return n.substring(e.length+1)}return null}const w={cartId:null,authenticated:!1},a=new Proxy(w,{set(e,t,r){var n;if(e[t]=r,t==="cartId"){if(r===a.cartId)return!0;if(r===null)return document.cookie="DROPIN__CART__CART-ID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/",!0;const i=(n=a.config)==null?void 0:n.cartExpiresInDays;i||console.warn('Missing "expiresInDays" config. Cookie expiration will default to 30 days.');const c=new Date;c.setDate(c.getDate()+(i??30)),document.cookie=`DROPIN__CART__CART-ID=${r}; expires=${c.toUTCString()}; path=/`}return!0},get(e,t){return t==="cartId"?M("DROPIN__CART__CART-ID"):e[t]}});function P(e){e?sessionStorage.setItem("DROPIN__CART__CART__DATA",JSON.stringify(e)):sessionStorage.removeItem("DROPIN__CART__CART__DATA")}function X(){const e=sessionStorage.getItem("DROPIN__CART__CART__DATA");return e?JSON.parse(e):null}const h=new D({init:async e=>{const t={disableGuestCart:!1,...e};h.config.setConfig(t),_()},listeners:()=>[o.on("authenticated",async e=>{e!==a.authenticated&&(a.authenticated=e,_().catch(console.error))}),o.on("locale",async e=>{e!==a.locale&&(a.locale=e,_().catch(console.error))}),o.on("cart/reset",()=>{x().catch(console.error)}),o.on("cart/data",e=>{P(e)})]}),O=h.config,{setEndpoint:ee,setFetchGraphQlHeader:re,removeFetchGraphQlHeader:te,setFetchGraphQlHeaders:ne,fetchGraphQl:p,getConfig:ie}=new R().getMethods();function g(e){var t,r,n,i,c,u,l;return e?{id:e.id,totalQuantity:q(e),errors:N(e==null?void 0:e.itemsV2),items:y(e==null?void 0:e.itemsV2),miniCartMaxItems:y(e==null?void 0:e.itemsV2).slice(0,((t=a.config)==null?void 0:t.miniCartMaxItemsDisplay)??10),total:{value:e.prices.grand_total.value,currency:e.prices.grand_total.currency},subtotal:{excludingTax:{value:(r=e.prices.subtotal_excluding_tax)==null?void 0:r.value,currency:(n=e.prices.subtotal_excluding_tax)==null?void 0:n.currency},includingTax:{value:(i=e.prices.subtotal_including_tax)==null?void 0:i.value,currency:(c=e.prices.subtotal_including_tax)==null?void 0:c.currency},includingDiscountOnly:{value:(u=e.prices.subtotal_with_discount_excluding_tax)==null?void 0:u.value,currency:(l=e.prices.subtotal_with_discount_excluding_tax)==null?void 0:l.currency}},appliedTaxes:C(e.prices.applied_taxes),totalTax:$(e.prices.applied_taxes),appliedDiscounts:C(e.prices.discounts),isVirtual:e.is_virtual,addresses:{shipping:e.shipping_addresses&&z(e.shipping_addresses)}}:null}function $(e){return e!=null&&e.length?e.reduce((t,r)=>({value:t.value+r.amount.value,currency:r.amount.currency}),{value:0,currency:""}):null}function y(e){var t;return(t=e==null?void 0:e.items)!=null&&t.length?e.items.map(r=>{var n,i,c,u,l;return{itemType:r.__typename,uid:r.uid,url:{urlKey:r.product.url_key,categories:r.product.categories.map(T=>T.url_key)},quantity:r.quantity,sku:r.product.sku,name:r.product.name,image:{src:r.product.thumbnail.url,alt:r.product.thumbnail.label},price:{value:r.prices.price.value,currency:r.prices.price.currency},links:U(r.links),total:r.configurable_options||r.__typename==="GiftCardCartItem"?{value:r.prices.row_total.value,currency:r.prices.row_total.currency}:{value:((n=r.product.price_range)==null?void 0:n.maximum_price.regular_price.value)*r.quantity,currency:(i=r.product.price_range)==null?void 0:i.maximum_price.regular_price.currency},discount:{value:r.prices.total_item_discount.value,currency:r.prices.total_item_discount.currency},regularPrice:r.configurable_options||r.__typename==="GiftCardCartItem"?{value:r.prices.price.value,currency:r.prices.price.currency}:{value:(c=r.product.price_range)==null?void 0:c.maximum_price.regular_price.value,currency:(u=r.product.price_range)==null?void 0:u.maximum_price.regular_price.currency},discounted:!r.configurable_options&&r.__typename!=="GiftCardCartItem"&&Number(((l=r.product.price_range)==null?void 0:l.maximum_price.regular_price.value)*r.quantity).toFixed(2)!==Number(r.prices.row_total.value).toFixed(2),selectedOptions:F(r.configurable_options),sender:r.__typename==="GiftCardCartItem"?r.sender_name:null,senderEmail:r.__typename==="GiftCardCartItem"?r.sender_email:null,recipient:r.__typename==="GiftCardCartItem"?r.recipient_name:null,recipientEmail:r.__typename==="GiftCardCartItem"?r.recipient_email:null,message:r.__typename==="GiftCardCartItem"?r.message:null,discountedTotal:!r.configurable_options&&r.__typename!=="GiftCardCartItem"&&{value:r.prices.row_total.value,currency:r.prices.row_total.currency}}}):[]}function N(e){var r;const t=(r=e==null?void 0:e.items)==null?void 0:r.reduce((n,i)=>{var c;return(c=i.errors)==null||c.forEach(u=>{n.push({uid:i.uid,text:u.message})}),n},[]);return t!=null&&t.length?t:null}function C(e){return e!=null&&e.length?e.map(t=>({amount:{value:t.amount.value,currency:t.amount.currency},label:t.label})):[]}function F(e){const t=e==null?void 0:e.map(n=>({uid:n.configurable_product_option_uid,label:n.option_label,value:n.value_label})),r={};return t==null||t.forEach(n=>{r[n.label]=n.value}),Object.keys(r).length>0?r:null}function q(e){var t,r;return((t=a.config)==null?void 0:t.cartSummaryDisplayTotal)===0?e.itemsV2.items.length:((r=a.config)==null?void 0:r.cartSummaryDisplayTotal)===1?e.total_quantity:e.itemsV2.items.length}function U(e){return(e==null?void 0:e.length)>0?{count:e.length,result:e.map(t=>t.title).join(", ")}:null}function z(e){return e!=null&&e.length?e.map(t=>{var r,n;return{countryCode:(r=t.country)==null?void 0:r.code,zipCode:t.postcode,regionCode:(n=t.region)==null?void 0:n.code}}):null}function Q(e){return e?{displayMiniCart:e.minicart_display,miniCartMaxItemsDisplay:e.minicart_max_items,cartExpiresInDays:e.cart_expires_in_days,cartSummaryDisplayTotal:e.cart_summary_display_quantity,defaultCountry:e.default_country,categoryFixedProductTaxDisplaySetting:e.category_fixed_product_tax_display_setting,productFixedProductTaxDisplaySetting:e.product_fixed_product_tax_display_setting,salesFixedProductTaxDisplaySetting:e.sales_fixed_product_tax_display_setting,shoppingCartDisplayZeroTax:e.shopping_cart_display_zero_tax}:null}const d=e=>{const t=e.findIndex(({extensions:i})=>(i==null?void 0:i.category)==="graphql-authorization")>-1,r=e.findIndex(({extensions:i})=>(i==null?void 0:i.category)==="graphql-no-such-entity")>-1,n=e.map(i=>i.message).join(" ");if(t||r)return x(),console.error(n),null;throw Error(n)},m=`
fragment CartFragment on Cart {
  id
  total_quantity
  is_virtual
  prices {
    subtotal_with_discount_excluding_tax {
      currency
      value
    }
    subtotal_including_tax {
      currency
      value
    }
    subtotal_excluding_tax {
      currency
      value
    }
    grand_total {
      currency
      value
    }
    applied_taxes {
      label,
      amount {
        value
        currency
      }
    }
    discounts {
      amount {
        value
        currency
      }
      label
    }
  }
  itemsV2 (
      pageSize:$pageSize,
      currentPage:$currentPage,
      sort: $itemsSortInput
    ) {
    items {
      __typename
      uid
      quantity
    
      errors {
        code
        message
      }
      
      prices {
        price {
          value
          currency
        }
        total_item_discount {
          value
          currency
        }
        row_total {
          value
          currency
        }
      }
  
      product {
        name
        sku
        thumbnail {
          url
          label
        }
        url_key
        url_suffix
        categories {
          url_path
          url_key
        }
        price_range {
          maximum_price {
            regular_price {
              value
              currency
            }
          }
        }
      }
      ...on SimpleCartItem {
        customizable_options {
          customizable_option_uid
          label
          values {
            label
          }
        }
      }
      ... on ConfigurableCartItem {
        configurable_options {
          configurable_product_option_uid
          option_label
          value_label
        }
        configured_variant {
          uid
          thumbnail {
            label
            url
          }
        }
      }
      ... on DownloadableCartItem {
        links {
          sort_order
          title
        }
      }
      ... on BundleCartItem {
        bundle_options {
          uid
          label
          values {
            uid
            label
            quantity
            price
          }
        }
      }
      ... on GiftCardCartItem {
        message
        recipient_name
        sender_name
      }
    }
  }
  shipping_addresses {
    country {
      code
    }
    region {
      code
    }
    postcode
  }
}
`,f=`
  $pageSize: Int! = 100,
  $currentPage: Int! = 1,
  $itemsSortInput: QuoteItemsSortInput! = {field: CREATED_AT, order: DESC}
`,k=`
  query GUEST_CART_QUERY(
      $cartId: String!,
      ${f}
    ) {

    cart(cart_id: $cartId){
      ...CartFragment
    }
  }

  ${m}
`,V=`
  query CUSTOMER_CART_QUERY(
      ${f}
    ) {

    cart: customerCart {
      ...CartFragment
    }
  }

  ${m}
`,I=async()=>{const e=a.authenticated,t=a.cartId;if(e)return p(V,{method:"GET"}).then(({errors:r,data:n})=>r?d(r):g(n.cart));if(!t)throw new Error("No cart ID found");return p(k,{method:"GET",cache:"no-cache",variables:{cartId:t}}).then(({errors:r,data:n})=>r?d(r):g(n.cart))},Y=`
  mutation MERGE_CARTS_MUTATION(
      $guestCartId: String!, 
      $customerCartId: String!,
      ${f}
    ) {
    mergeCarts(
      source_cart_id: $guestCartId,
      destination_cart_id: $customerCartId
    ) {
      ...CartFragment 
    }
  }

  ${m}
`,_=async()=>{a.config=await J();const e=a.authenticated?await K():await j();return o.emit("cart/initialized",e),o.emit("cart/data",e),e};async function K(){const e=a.cartId,t=await I();return t?(a.cartId=t.id,!e||t.id===e?t:await p(Y,{variables:{guestCartId:e,customerCartId:t.id}}).then(({data:r})=>g(r.mergeCarts)).catch(()=>(console.error("Could not merge carts"),t))):null}async function j(){if(O.getConfig().disableGuestCart===!0||!a.cartId)return null;try{return await I()}catch(e){return console.error(e),null}}const x=()=>(a.cartId=null,a.authenticated=!1,_()),H=`
query STORE_CONFIG_QUERY {
  storeConfig {
    minicart_display 
    minicart_max_items
    cart_expires_in_days 
    cart_summary_display_quantity
    default_country
    category_fixed_product_tax_display_setting
    product_fixed_product_tax_display_setting
    sales_fixed_product_tax_display_setting
    shopping_cart_display_zero_tax
  }
}
`,J=async()=>p(H,{method:"GET",cache:"force-cache"}).then(({errors:e,data:t})=>e?d(e):Q(t.storeConfig));export{f as C,m as a,ee as b,O as c,re as d,ne as e,p as f,ie as g,d as h,h as i,I as j,_ as k,x as l,J as m,X as n,te as r,a as s,g as t};
//# sourceMappingURL=getStoreConfig.js.map
