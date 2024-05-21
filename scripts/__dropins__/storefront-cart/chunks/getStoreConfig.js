import{events as l}from"@dropins/tools/event-bus.js";import{FetchGraphQL as z}from"@dropins/tools/fetch-graphql.js";import{Initializer as M}from"@dropins/tools/lib.js";function N(e){const t=document.cookie.split(";");for(let n=0;n<t.length;n++){const r=t[n].trim();if(r.indexOf(`${e}=`)===0)return r.substring(e.length+1)}return null}const k={cartId:null,authenticated:!1},u=new Proxy(k,{set(e,t,n){var r;if(e[t]=n,t==="cartId"){if(n===u.cartId)return!0;if(n===null)return document.cookie="DROPIN__CART__CART-ID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/",!0;const a=(r=u.config)==null?void 0:r.cartExpiresInDays;a||console.warn('Missing "expiresInDays" config. Cookie expiration will default to 30 days.');const c=new Date;c.setDate(c.getDate()+(a??30)),document.cookie=`DROPIN__CART__CART-ID=${n}; expires=${c.toUTCString()}; path=/`}return!0},get(e,t){return t==="cartId"?N("DROPIN__CART__CART-ID"):e[t]}});function F(e){e?sessionStorage.setItem("DROPIN__CART__CART__DATA",JSON.stringify(e)):sessionStorage.removeItem("DROPIN__CART__CART__DATA")}function ce(){const e=sessionStorage.getItem("DROPIN__CART__CART__DATA");return e?JSON.parse(e):null}const G=new M({init:async e=>{const t={disableGuestCart:!1,...e};G.config.setConfig(t),s()},listeners:()=>[l.on("authenticated",async e=>{e!==u.authenticated&&(u.authenticated=e,s().catch(console.error))}),l.on("locale",async e=>{e!==u.locale&&(u.locale=e,s().catch(console.error))}),l.on("cart/reset",()=>{$().catch(console.error)}),l.on("cart/data",e=>{F(e)})]}),U=G.config,{setEndpoint:ie,setFetchGraphQlHeader:le,removeFetchGraphQlHeader:oe,setFetchGraphQlHeaders:se,fetchGraphQl:_,getConfig:_e}=new z().getMethods();function m(e){var t,n,r,a,c,i,o;return e?{id:e.id,totalQuantity:Y(e),errors:q(e==null?void 0:e.itemsV2),items:A(e==null?void 0:e.itemsV2),miniCartMaxItems:A(e==null?void 0:e.itemsV2).slice(0,((t=u.config)==null?void 0:t.miniCartMaxItemsDisplay)??10),total:{value:e.prices.grand_total.value,currency:e.prices.grand_total.currency},subtotal:{excludingTax:{value:(n=e.prices.subtotal_excluding_tax)==null?void 0:n.value,currency:(r=e.prices.subtotal_excluding_tax)==null?void 0:r.currency},includingTax:{value:(a=e.prices.subtotal_including_tax)==null?void 0:a.value,currency:(c=e.prices.subtotal_including_tax)==null?void 0:c.currency},includingDiscountOnly:{value:(i=e.prices.subtotal_with_discount_excluding_tax)==null?void 0:i.value,currency:(o=e.prices.subtotal_with_discount_excluding_tax)==null?void 0:o.currency}},appliedTaxes:D(e.prices.applied_taxes),totalTax:Q(e.prices.applied_taxes),appliedDiscounts:D(e.prices.discounts),isVirtual:e.is_virtual,addresses:{shipping:e.shipping_addresses&&J(e.shipping_addresses)}}:null}function Q(e){return e!=null&&e.length?e.reduce((t,n)=>({value:t.value+n.amount.value,currency:n.amount.currency}),{value:0,currency:""}):null}function A(e){var n;if(!((n=e==null?void 0:e.items)!=null&&n.length))return[];const t=u.config;return e.items.map(r=>{var a,c,i,o,y,C,b,h,I,v,x,T,R,E,S;return{itemType:r.__typename,uid:r.uid,url:{urlKey:r.product.url_key,categories:r.product.categories.map(P=>P.url_key)},quantity:r.quantity,sku:r.product.sku,name:r.product.name,image:{src:t!=null&&t.useConfigurableParentThumbnail?r.product.thumbnail.url:((c=(a=r.configured_variant)==null?void 0:a.thumbnail)==null?void 0:c.url)||r.product.thumbnail.url,alt:t!=null&&t.useConfigurableParentThumbnail?r.product.thumbnail.label:((o=(i=r.configured_variant)==null?void 0:i.thumbnail)==null?void 0:o.label)||r.product.thumbnail.label},price:{value:r.prices.price.value,currency:r.prices.price.currency},links:H(r.links),total:r.__typename==="SimpleCartItem"&&r.customizable_options.length!==0||r.__typename==="BundleCartItem"?{value:r.prices.row_total.value,currency:r.prices.row_total.currency}:{value:(y=r.prices.original_row_total)==null?void 0:y.value,currency:(C=r.prices.original_row_total)==null?void 0:C.currency},discount:{value:r.prices.total_item_discount.value,currency:r.prices.total_item_discount.currency},regularPrice:r.__typename==="ConfigurableCartItem"?{value:(h=(b=r.configured_variant)==null?void 0:b.price_range)==null?void 0:h.maximum_price.regular_price.value,currency:(v=(I=r.configured_variant)==null?void 0:I.price_range)==null?void 0:v.maximum_price.regular_price.currency}:r.__typename==="GiftCardCartItem"||r.__typename==="SimpleCartItem"&&r.customizable_options.length!==0||r.__typename==="BundleCartItem"?{value:r.prices.price.value,currency:r.prices.price.currency}:{value:(x=r.product.price_range)==null?void 0:x.maximum_price.regular_price.value,currency:(T=r.product.price_range)==null?void 0:T.maximum_price.regular_price.currency},discounted:r.__typename==="BundleCartItem"||r.__typename==="SimpleCartItem"&&r.customizable_options.length!==0?!1:r.__typename==="ConfigurableCartItem"?((E=(R=r.configured_variant)==null?void 0:R.price_range)==null?void 0:E.maximum_price.discount.amount_off)>0:((S=r.product.price_range)==null?void 0:S.maximum_price.discount.amount_off)>0,bundleOptions:r.__typename==="BundleCartItem"?B(r.bundle_options):null,selectedOptions:V(r.configurable_options),customizableOptions:j(r.customizable_options),sender:r.__typename==="GiftCardCartItem"?r.sender_name:null,senderEmail:r.__typename==="GiftCardCartItem"?r.sender_email:null,recipient:r.__typename==="GiftCardCartItem"?r.recipient_name:null,recipientEmail:r.__typename==="GiftCardCartItem"?r.recipient_email:null,message:r.__typename==="GiftCardCartItem"?r.message:null,discountedTotal:{value:r.prices.row_total.value,currency:r.prices.row_total.currency}}})}function q(e){var n;const t=(n=e==null?void 0:e.items)==null?void 0:n.reduce((r,a)=>{var c;return(c=a.errors)==null||c.forEach(i=>{r.push({uid:a.uid,text:i.message})}),r},[]);return t!=null&&t.length?t:null}function D(e){return e!=null&&e.length?e.map(t=>({amount:{value:t.amount.value,currency:t.amount.currency},label:t.label})):[]}function B(e){const t=e==null?void 0:e.map(r=>({uid:r.uid,label:r.label,value:r.values.map(a=>a.label).join(", ")})),n={};return t==null||t.forEach(r=>{n[r.label]=r.value}),Object.keys(n).length>0?n:null}function V(e){const t=e==null?void 0:e.map(r=>({uid:r.configurable_product_option_uid,label:r.option_label,value:r.value_label})),n={};return t==null||t.forEach(r=>{n[r.label]=r.value}),Object.keys(n).length>0?n:null}function j(e){const t=e==null?void 0:e.map(r=>({uid:r.customizable_option_uid,label:r.label,type:r.type,values:r.values.map(a=>({uid:a.customizable_option_value_uid,label:a.label,value:a.value}))})),n={};return t==null||t.forEach(r=>{switch(r.type){case"field":case"area":case"date_time":n[r.label]=r.values[0].value;break;case"radio":case"drop_down":n[r.label]=r.values[0].label;break;case"multiple":case"checkbox":n[r.label]=r.values.reduce((a,c)=>a?`${a}, ${c.label}`:c.label,"");break}}),n}function Y(e){var t,n;return((t=u.config)==null?void 0:t.cartSummaryDisplayTotal)===0?e.itemsV2.items.length:((n=u.config)==null?void 0:n.cartSummaryDisplayTotal)===1?e.total_quantity:e.itemsV2.items.length}function H(e){return(e==null?void 0:e.length)>0?{count:e.length,result:e.map(t=>t.title).join(", ")}:null}function J(e){return e!=null&&e.length?e.map(t=>{var n,r;return{countryCode:(n=t.country)==null?void 0:n.code,zipCode:t.postcode,regionCode:(r=t.region)==null?void 0:r.code}}):null}function L(e){return e?{displayMiniCart:e.minicart_display,miniCartMaxItemsDisplay:e.minicart_max_items,cartExpiresInDays:e.cart_expires_in_days,cartSummaryDisplayTotal:e.cart_summary_display_quantity,defaultCountry:e.default_country,categoryFixedProductTaxDisplaySetting:e.category_fixed_product_tax_display_setting,productFixedProductTaxDisplaySetting:e.product_fixed_product_tax_display_setting,salesFixedProductTaxDisplaySetting:e.sales_fixed_product_tax_display_setting,shoppingCartDisplayZeroTax:e.shopping_cart_display_zero_tax,useConfigurableParentThumbnail:e.configurable_thumbnail_source==="parent"}:null}const g=e=>{const t=e.findIndex(({extensions:a})=>(a==null?void 0:a.category)==="graphql-authorization")>-1,n=e.findIndex(({extensions:a})=>(a==null?void 0:a.category)==="graphql-no-such-entity")>-1,r=e.map(a=>a.message).join(" ");if(t||n)return $(),console.error(r),null;throw Error(r)},p=`
  customizable_options {
    type
    customizable_option_uid
    label
    is_required
    values {
      label
      value
      price{
        type
        units
        value
      }
    }
  }
`,O=`
  price_range {
    minimum_price {
      regular_price {
        value
        currency
      }
      final_price {
        value
        currency
      }
      discount {
        percent_off
        amount_off
      }
    }
    maximum_price {
      regular_price {
        value
        currency
      }
      final_price {
        value
        currency
      }
      discount {
        percent_off
        amount_off
      }
    }
  }
`,d=`
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
        original_row_total{
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
        ${O}
      }
      ...on SimpleCartItem {
        ${p}
      }
      ... on ConfigurableCartItem {
        configurable_options {
          configurable_product_option_uid
          option_label
          value_label
        }
        configured_variant {
          uid
          sku
          thumbnail {
            label
            url
          }
          ${O}
        }
        ${p}
      }
      ... on DownloadableCartItem {
        links {
          sort_order
          title
        }
        ${p}
      }
      ... on BundleCartItem {
        bundle_options {
          uid
          label
          values {
            uid
            label
          }
        }
      }
      ... on GiftCardCartItem {
        message
        recipient_email
        recipient_name
        sender_email
        sender_name
        amount{
          currency
          value
        }
        is_available
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
`,Z=`
  query GUEST_CART_QUERY(
      $cartId: String!,
      ${f}
    ) {

    cart(cart_id: $cartId){
      ...CartFragment
    }
  }

  ${d}
`,K=`
  query CUSTOMER_CART_QUERY(
      ${f}
    ) {

    cart: customerCart {
      ...CartFragment
    }
  }

  ${d}
`,w=async()=>{const e=u.authenticated,t=u.cartId;if(e)return _(K,{method:"GET"}).then(({errors:n,data:r})=>n?g(n):m(r.cart));if(!t)throw new Error("No cart ID found");return _(Z,{method:"GET",cache:"no-cache",variables:{cartId:t}}).then(({errors:n,data:r})=>n?g(n):m(r.cart))},W=`
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

  ${d}
`,s=async()=>{u.config=await te();const e=u.authenticated?await X():await ee();return l.emit("cart/initialized",e),l.emit("cart/data",e),e};async function X(){const e=u.cartId,t=await w();return t?(u.cartId=t.id,!e||t.id===e?t:await _(W,{variables:{guestCartId:e,customerCartId:t.id}}).then(({data:n})=>m(n.mergeCarts)).catch(()=>(console.error("Could not merge carts"),t))):null}async function ee(){if(U.getConfig().disableGuestCart===!0||!u.cartId)return null;try{return await w()}catch(e){return console.error(e),null}}const $=()=>(u.cartId=null,u.authenticated=!1,s()),re=`
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
    configurable_thumbnail_source
  }
}
`,te=async()=>_(re,{method:"GET",cache:"force-cache"}).then(({errors:e,data:t})=>e?g(e):L(t.storeConfig));export{f as C,d as a,ie as b,U as c,le as d,se as e,_ as f,_e as g,g as h,G as i,w as j,s as k,$ as l,te as m,ce as n,oe as r,u as s,m as t};
//# sourceMappingURL=getStoreConfig.js.map
