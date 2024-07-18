import{FetchGraphQL as A}from"@dropins/tools/fetch-graphql.js";import"@dropins/tools/event-bus.js";function D(r){const n=document.cookie.split(";");for(let t=0;t<n.length;t++){const e=n[t].trim();if(e.indexOf(`${r}=`)===0)return e.substring(r.length+1)}return null}function q(r){r?sessionStorage.setItem("DROPIN__CART__CART__DATA",JSON.stringify(r)):sessionStorage.removeItem("DROPIN__CART__CART__DATA")}function R(){const r=sessionStorage.getItem("DROPIN__CART__CART__DATA");return r?JSON.parse(r):null}function Q(r){r?sessionStorage.setItem("DROPIN__CART__SHIPPING__DATA",JSON.stringify(r)):sessionStorage.removeItem("DROPIN__CART__SHIPPING__DATA")}const S=(()=>{const r=R();return{cartId:null,authenticated:r?!r.isGuestCart:!1}})(),a=new Proxy(S,{set(r,n,t){var e;if(r[n]=t,n==="cartId"){if(t===a.cartId)return!0;if(t===null)return document.cookie="DROPIN__CART__CART-ID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/",!0;const u=(e=a.config)==null?void 0:e.cartExpiresInDays;u||console.warn('Missing "expiresInDays" config. Cookie expiration will default to 30 days.');const l=new Date;l.setDate(l.getDate()+(u??30)),document.cookie=`DROPIN__CART__CART-ID=${t}; expires=${l.toUTCString()}; path=/`}return!0},get(r,n){return n==="cartId"?D("DROPIN__CART__CART-ID"):r[n]}}),{setEndpoint:B,setFetchGraphQlHeader:V,removeFetchGraphQlHeader:j,setFetchGraphQlHeaders:H,fetchGraphQl:U,getConfig:J}=new A().getMethods();function L(r){var n,t,e,u,l,c,i;return r?{id:r.id,totalQuantity:N(r),errors:w(r==null?void 0:r.itemsV2),items:h(r==null?void 0:r.itemsV2),miniCartMaxItems:h(r==null?void 0:r.itemsV2).slice(0,((n=a.config)==null?void 0:n.miniCartMaxItemsDisplay)??10),total:{includingTax:{value:r.prices.grand_total.value,currency:r.prices.grand_total.currency},excludingTax:{value:r.prices.grand_total_excluding_tax.value,currency:r.prices.grand_total_excluding_tax.currency}},subtotal:{excludingTax:{value:(t=r.prices.subtotal_excluding_tax)==null?void 0:t.value,currency:(e=r.prices.subtotal_excluding_tax)==null?void 0:e.currency},includingTax:{value:(u=r.prices.subtotal_including_tax)==null?void 0:u.value,currency:(l=r.prices.subtotal_including_tax)==null?void 0:l.currency},includingDiscountOnly:{value:(c=r.prices.subtotal_with_discount_excluding_tax)==null?void 0:c.value,currency:(i=r.prices.subtotal_with_discount_excluding_tax)==null?void 0:i.currency}},appliedTaxes:I(r.prices.applied_taxes),totalTax:O(r.prices.applied_taxes),appliedDiscounts:I(r.prices.discounts),isVirtual:r.is_virtual,addresses:{shipping:r.shipping_addresses&&z(r)},isGuestCart:!a.authenticated}:null}function O(r){return r!=null&&r.length?r.reduce((n,t)=>({value:n.value+t.amount.value,currency:t.amount.currency}),{value:0,currency:""}):null}function h(r){var t;if(!((t=r==null?void 0:r.items)!=null&&t.length))return[];const n=a.config;return r.items.map(e=>{var u,l,c,i,_,o,s,g,d,m,y,f,b,v,C;return{itemType:e.__typename,uid:e.uid,url:{urlKey:e.product.url_key,categories:e.product.categories.map(T=>T.url_key)},quantity:e.quantity,sku:e.product.sku,name:e.product.name,image:{src:n!=null&&n.useConfigurableParentThumbnail?e.product.thumbnail.url:((l=(u=e.configured_variant)==null?void 0:u.thumbnail)==null?void 0:l.url)||e.product.thumbnail.url,alt:n!=null&&n.useConfigurableParentThumbnail?e.product.thumbnail.label:((i=(c=e.configured_variant)==null?void 0:c.thumbnail)==null?void 0:i.label)||e.product.thumbnail.label},price:{value:e.prices.price.value,currency:e.prices.price.currency},taxedPrice:{value:e.prices.price_including_tax.value,currency:e.prices.price_including_tax.currency},rowTotal:{value:e.prices.row_total.value,currency:e.prices.row_total.currency},rowTotalIncludingTax:{value:e.prices.row_total_including_tax.value,currency:e.prices.row_total_including_tax.currency},links:k(e.links),total:e.__typename==="SimpleCartItem"&&e.customizable_options.length!==0||e.__typename==="BundleCartItem"?{value:e.prices.row_total.value,currency:e.prices.row_total.currency}:{value:(_=e.prices.original_row_total)==null?void 0:_.value,currency:(o=e.prices.original_row_total)==null?void 0:o.currency},discount:{value:e.prices.total_item_discount.value,currency:e.prices.total_item_discount.currency},regularPrice:e.__typename==="ConfigurableCartItem"?{value:(g=(s=e.configured_variant)==null?void 0:s.price_range)==null?void 0:g.maximum_price.regular_price.value,currency:(m=(d=e.configured_variant)==null?void 0:d.price_range)==null?void 0:m.maximum_price.regular_price.currency}:e.__typename==="GiftCardCartItem"||e.__typename==="SimpleCartItem"&&e.customizable_options.length!==0||e.__typename==="BundleCartItem"?{value:e.prices.price.value,currency:e.prices.price.currency}:{value:(y=e.product.price_range)==null?void 0:y.maximum_price.regular_price.value,currency:(f=e.product.price_range)==null?void 0:f.maximum_price.regular_price.currency},discounted:e.__typename==="BundleCartItem"||e.__typename==="SimpleCartItem"&&e.customizable_options.length!==0?!1:e.__typename==="ConfigurableCartItem"?((v=(b=e.configured_variant)==null?void 0:b.price_range)==null?void 0:v.maximum_price.discount.amount_off)>0:((C=e.product.price_range)==null?void 0:C.maximum_price.discount.amount_off)>0,bundleOptions:e.__typename==="BundleCartItem"?P(e.bundle_options):null,selectedOptions:E(e.configurable_options),customizableOptions:G(e.customizable_options),sender:e.__typename==="GiftCardCartItem"?e.sender_name:null,senderEmail:e.__typename==="GiftCardCartItem"?e.sender_email:null,recipient:e.__typename==="GiftCardCartItem"?e.recipient_name:null,recipientEmail:e.__typename==="GiftCardCartItem"?e.recipient_email:null,message:e.__typename==="GiftCardCartItem"?e.message:null,discountedTotal:{value:e.prices.row_total.value,currency:e.prices.row_total.currency}}})}function w(r){var t;const n=(t=r==null?void 0:r.items)==null?void 0:t.reduce((e,u)=>{var l;return(l=u.errors)==null||l.forEach(c=>{e.push({uid:u.uid,text:c.message})}),e},[]);return n!=null&&n.length?n:null}function I(r){return r!=null&&r.length?r.map(n=>({amount:{value:n.amount.value,currency:n.amount.currency},label:n.label})):[]}function P(r){const n=r==null?void 0:r.map(e=>({uid:e.uid,label:e.label,value:e.values.map(u=>u.label).join(", ")})),t={};return n==null||n.forEach(e=>{t[e.label]=e.value}),Object.keys(t).length>0?t:null}function E(r){const n=r==null?void 0:r.map(e=>({uid:e.configurable_product_option_uid,label:e.option_label,value:e.value_label})),t={};return n==null||n.forEach(e=>{t[e.label]=e.value}),Object.keys(t).length>0?t:null}function G(r){const n=r==null?void 0:r.map(e=>({uid:e.customizable_option_uid,label:e.label,type:e.type,values:e.values.map(u=>({uid:u.customizable_option_value_uid,label:u.label,value:u.value}))})),t={};return n==null||n.forEach(e=>{var u;switch(e.type){case"field":case"area":case"date_time":t[e.label]=e.values[0].value;break;case"radio":case"drop_down":t[e.label]=e.values[0].label;break;case"multiple":case"checkbox":t[e.label]=e.values.reduce((o,s)=>o?`${o}, ${s.label}`:s.label,"");break;case"file":const l=new DOMParser,c=e.values[0].value,_=((u=l.parseFromString(c,"text/html").querySelector("a"))==null?void 0:u.textContent)||"";t[e.label]=_;break}}),t}function N(r){var n,t;return((n=a.config)==null?void 0:n.cartSummaryDisplayTotal)===0?r.itemsV2.items.length:((t=a.config)==null?void 0:t.cartSummaryDisplayTotal)===1?r.total_quantity:r.itemsV2.items.length}function k(r){return(r==null?void 0:r.length)>0?{count:r.length,result:r.map(n=>n.title).join(", ")}:null}function z(r){var n,t,e,u;return(n=r.shipping_addresses)!=null&&n.length?(t=r.shipping_addresses)==null?void 0:t.map(l=>({countryCode:l.country.code,zipCode:l.postcode,regionCode:l.region.code})):(e=r.addresses)!=null&&e.length?(u=r.addresses)==null?void 0:u.filter(l=>l.default_shipping).map(l=>{var c;return l.default_shipping&&{countryCode:l.country_id,zipCode:l.postcode,regionCode:(c=l.region)==null?void 0:c.region_code}}):null}const K=r=>{const n=r.findIndex(({extensions:u})=>(u==null?void 0:u.category)==="graphql-authorization")>-1,t=r.findIndex(({extensions:u})=>(u==null?void 0:u.category)==="graphql-no-such-entity")>-1,e=r.map(u=>u.message).join(" ");if(n||t)return $(),console.error(e),null;throw Error(e)},p=`
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
`,x=`
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
`,Z=`
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
    grand_total_excluding_tax {
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
        row_total_including_tax {
          value
          currency
        }
        price_including_tax {
          value
          currency
        }
        fixed_product_taxes {
          amount {
            value
            currency
          }
          label
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
        ${x}
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
          ${x}
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
`,W=`
  $pageSize: Int! = 100,
  $currentPage: Int! = 1,
  $itemsSortInput: QuoteItemsSortInput! = {field: CREATED_AT, order: DESC}
`,X=`
customer {
  addresses {
    default_shipping
    country_id
    postcode
    region {
      region
      region_code
      region_id
    }
  }
}`,$=()=>(a.cartId=null,a.authenticated=!1,Promise.resolve(null));export{W as C,Z as a,B as b,V as c,H as d,$ as e,U as f,J as g,K as h,q as i,X as j,R as k,Q as l,j as r,a as s,L as t};
