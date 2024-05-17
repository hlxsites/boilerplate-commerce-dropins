import{events as o}from"@dropins/tools/event-bus.js";import{FetchGraphQL as T}from"@dropins/tools/fetch-graphql.js";import{Initializer as b}from"@dropins/tools/lib.js";function v(e){const t=document.cookie.split(";");for(let r=0;r<t.length;r++){const n=t[r].trim();if(n.indexOf(`${e}=`)===0)return n.substring(e.length+1)}return null}const R={cartId:null,authenticated:!1},c=new Proxy(R,{set(e,t,r){var n;if(e[t]=r,t==="cartId"){if(r===c.cartId)return!0;if(r===null)return document.cookie="DROPIN__CART__CART-ID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/",!0;const i=(n=c.config)==null?void 0:n.cartExpiresInDays;i||console.warn('Missing "expiresInDays" config. Cookie expiration will default to 30 days.');const a=new Date;a.setDate(a.getDate()+(i??30)),document.cookie=`DROPIN__CART__CART-ID=${r}; expires=${a.toUTCString()}; path=/`}return!0},get(e,t){return t==="cartId"?v("DROPIN__CART__CART-ID"):e[t]}});function D(e){e?sessionStorage.setItem("DROPIN__CART__CART__DATA",JSON.stringify(e)):sessionStorage.removeItem("DROPIN__CART__CART__DATA")}function j(){const e=sessionStorage.getItem("DROPIN__CART__CART__DATA");return e?JSON.parse(e):null}const C=new b({init:async e=>{const t={disableGuestCart:!1,...e};C.config.setConfig(t),l()},listeners:()=>[o.on("authenticated",async e=>{e!==c.authenticated&&(c.authenticated=e,l().catch(console.error))}),o.on("locale",async e=>{e!==c.locale&&(c.locale=e,l().catch(console.error))}),o.on("cart/reset",()=>{I().catch(console.error)}),o.on("cart/data",e=>{D(e)})]}),E=C.config,{setEndpoint:H,setFetchGraphQlHeader:J,removeFetchGraphQlHeader:L,setFetchGraphQlHeaders:B,fetchGraphQl:_,getConfig:K}=new T().getMethods();function p(e){var t,r,n,i,a,u,s;return e?{id:e.id,totalQuantity:w(e),errors:A(e==null?void 0:e.itemsV2),items:m(e==null?void 0:e.itemsV2),miniCartMaxItems:m(e==null?void 0:e.itemsV2).slice(0,((t=c.config)==null?void 0:t.miniCartMaxItemsDisplay)??10),total:{value:e.prices.grand_total.value,currency:e.prices.grand_total.currency},subtotal:{excludingTax:{value:(r=e.prices.subtotal_excluding_tax)==null?void 0:r.value,currency:(n=e.prices.subtotal_excluding_tax)==null?void 0:n.currency},includingTax:{value:(i=e.prices.subtotal_including_tax)==null?void 0:i.value,currency:(a=e.prices.subtotal_including_tax)==null?void 0:a.currency},includingDiscountOnly:{value:(u=e.prices.subtotal_with_discount_excluding_tax)==null?void 0:u.value,currency:(s=e.prices.subtotal_with_discount_excluding_tax)==null?void 0:s.currency}},appliedTaxes:f(e.prices.applied_taxes),totalTax:S(e.prices.applied_taxes),appliedDiscounts:f(e.prices.discounts),isVirtual:e.is_virtual,addresses:{shipping:e.shipping_addresses&&$(e.shipping_addresses)}}:null}function S(e){return e!=null&&e.length?e.reduce((t,r)=>({value:t.value+r.amount.value,currency:r.amount.currency}),{value:0,currency:""}):null}function m(e){var t;return(t=e==null?void 0:e.items)!=null&&t.length?e.items.map(r=>{var n,i,a,u,s;return{itemType:r.__typename,uid:r.uid,url:{urlKey:r.product.url_key,categories:r.product.categories.map(x=>x.url_key)},quantity:r.quantity,sku:r.product.sku,name:r.product.name,image:{src:r.product.thumbnail.url,alt:r.product.thumbnail.label},price:{value:r.prices.price.value,currency:r.prices.price.currency},links:O(r.links),total:r.configurable_options||r.__typename==="GiftCardCartItem"?{value:r.prices.row_total.value,currency:r.prices.row_total.currency}:{value:((n=r.product.price_range)==null?void 0:n.maximum_price.regular_price.value)*r.quantity,currency:(i=r.product.price_range)==null?void 0:i.maximum_price.regular_price.currency},discount:{value:r.prices.total_item_discount.value,currency:r.prices.total_item_discount.currency},regularPrice:r.configurable_options||r.__typename==="GiftCardCartItem"?{value:r.prices.price.value,currency:r.prices.price.currency}:{value:(a=r.product.price_range)==null?void 0:a.maximum_price.regular_price.value,currency:(u=r.product.price_range)==null?void 0:u.maximum_price.regular_price.currency},discounted:!r.configurable_options&&r.__typename!=="GiftCardCartItem"&&Number(((s=r.product.price_range)==null?void 0:s.maximum_price.regular_price.value)*r.quantity).toFixed(2)!==Number(r.prices.row_total.value).toFixed(2),selectedOptions:G(r.configurable_options),sender:r.__typename==="GiftCardCartItem"?r.sender_name:null,senderEmail:r.__typename==="GiftCardCartItem"?r.sender_email:null,recipient:r.__typename==="GiftCardCartItem"?r.recipient_name:null,recipientEmail:r.__typename==="GiftCardCartItem"?r.recipient_email:null,message:r.__typename==="GiftCardCartItem"?r.message:null,discountedTotal:!r.configurable_options&&r.__typename!=="GiftCardCartItem"&&{value:r.prices.row_total.value,currency:r.prices.row_total.currency}}}):[]}function A(e){var r;const t=(r=e==null?void 0:e.items)==null?void 0:r.reduce((n,i)=>{var a;return(a=i.errors)==null||a.forEach(u=>{n.push({uid:i.uid,text:u.message})}),n},[]);return t!=null&&t.length?t:null}function f(e){return e!=null&&e.length?e.map(t=>({amount:{value:t.amount.value,currency:t.amount.currency},label:t.label})):[]}function G(e){const t=e==null?void 0:e.map(n=>({uid:n.configurable_product_option_uid,label:n.option_label,value:n.value_label})),r={};return t==null||t.forEach(n=>{r[n.label]=n.value}),Object.keys(r).length>0?r:null}function w(e){var t,r;return((t=c.config)==null?void 0:t.cartSummaryDisplayTotal)===0?e.itemsV2.items.length:((r=c.config)==null?void 0:r.cartSummaryDisplayTotal)===1?e.total_quantity:e.itemsV2.items.length}function O(e){return(e==null?void 0:e.length)>0?{count:e.length,result:e.map(t=>t.title).join(", ")}:null}function $(e){return e!=null&&e.length?e.map(t=>{var r,n;return{countryCode:(r=t.country)==null?void 0:r.code,zipCode:t.postcode,regionCode:(n=t.region)==null?void 0:n.code}}):null}function P(e){return e?{displayMiniCart:e.minicart_display,miniCartMaxItemsDisplay:e.minicart_max_items,cartExpiresInDays:e.cart_expires_in_days,cartSummaryDisplayTotal:e.cart_summary_display_quantity,defaultCountry:e.default_country,categoryFixedProductTaxDisplaySetting:e.category_fixed_product_tax_display_setting,productFixedProductTaxDisplaySetting:e.product_fixed_product_tax_display_setting,salesFixedProductTaxDisplaySetting:e.sales_fixed_product_tax_display_setting,shoppingCartDisplayZeroTax:e.shopping_cart_display_zero_tax}:null}const g=e=>{const t=e.findIndex(({extensions:i})=>(i==null?void 0:i.category)==="graphql-authorization")>-1,r=e.findIndex(({extensions:i})=>(i==null?void 0:i.category)==="graphql-no-such-entity")>-1,n=e.map(i=>i.message).join(" ");if(t||r)return I(),console.error(n),null;throw Error(n)},d=`
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
`,y=`
  $pageSize: Int! = 100,
  $currentPage: Int! = 1,
  $itemsSortInput: QuoteItemsSortInput! = {field: CREATED_AT, order: DESC}
`,N=`
  query GUEST_CART_QUERY(
      $cartId: String!,
      ${y}
    ) {

    cart(cart_id: $cartId){
      ...CartFragment
    }
  }

  ${d}
`,F=`
  query CUSTOMER_CART_QUERY(
      ${y}
    ) {

    cart: customerCart {
      ...CartFragment
    }
  }

  ${d}
`,h=async()=>{const e=c.authenticated,t=c.cartId;if(e)return _(F,{method:"GET"}).then(({errors:r,data:n})=>r?g(r):p(n.cart));if(!t)throw new Error("No cart ID found");return _(N,{method:"GET",cache:"no-cache",variables:{cartId:t}}).then(({errors:r,data:n})=>r?g(r):p(n.cart))},M=`
  mutation MERGE_CARTS_MUTATION(
      $guestCartId: String!, 
      $customerCartId: String!,
      ${y}
    ) {
    mergeCarts(
      source_cart_id: $guestCartId,
      destination_cart_id: $customerCartId
    ) {
      ...CartFragment 
    }
  }

  ${d}
`,l=async()=>{c.config=await Q();const e=c.authenticated?await q():await U();return o.emit("cart/initialized",e),o.emit("cart/data",e),e};async function q(){const e=c.cartId,t=await h();return t?(c.cartId=t.id,!e||t.id===e?t:await _(M,{variables:{guestCartId:e,customerCartId:t.id}}).then(({data:r})=>p(r.mergeCarts)).catch(()=>(console.error("Could not merge carts"),t))):null}async function U(){if(E.getConfig().disableGuestCart===!0||!c.cartId)return null;try{return await h()}catch(e){return console.error(e),null}}const I=()=>(c.cartId=null,c.authenticated=!1,l()),z=`
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
`,Q=async()=>_(z,{method:"GET",cache:"force-cache"}).then(({errors:e,data:t})=>e?g(e):P(t.storeConfig));export{y as C,d as a,H as b,E as c,J as d,B as e,_ as f,K as g,g as h,C as i,h as j,l as k,I as l,Q as m,j as n,L as r,c as s,p as t};
//# sourceMappingURL=getStoreConfig.js.map
