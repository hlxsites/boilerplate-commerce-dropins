import{P as s}from"./countries.js";import{t as _,h as d}from"./dispatchApiCall.js";import{S as u,I as n}from"./cart-item.js";const p=e=>{if(e)return{code:e.code,title:e.title}},m=e=>{if(e)return e.filter(t=>!!t).map(t=>{const{code:r,title:a}=t;return{code:r,title:a}})},f=e=>e?!!e.code&&!!e.label:!1,b=e=>{if(!f(e))return;const{code:t,label:r,region_id:a}=e;return a?{code:t,name:r,id:a}:{code:t,name:r}},v=e=>{const{code:t,label:r}=e;return{value:t,label:r}},y=e=>e?"code"in e&&"value"in e:!1,g=e=>e.filter(y).map(t=>{const{code:r,value:a}=t;return{code:r,value:a}}),c=e=>{const t=e.street.filter(Boolean);return{firstName:e.firstname,lastName:e.lastname,company:e.company||void 0,city:e.city,street:t,postCode:e.postcode||void 0,vatId:e.vat_id||void 0,telephone:e.telephone||void 0,region:b(e.region),country:v(e.country),customAttributes:g(e.custom_attributes)}},C=e=>{if(e)return c(e)},h=e=>e.filter(t=>!!t).map(t=>{const{available_shipping_methods:r,selected_shipping_method:a,...o}=t;return{...c(o),availableShippingMethods:_(r),selectedShippingMethod:d(a)}}),I=e=>e?e.filter(Boolean).map(t=>{const{code:r}=t;return{code:r}}):[],V=e=>({coupons:I(e.applied_coupons),availablePaymentMethods:m(e.available_payment_methods),billingAddress:C(e.billing_address),email:e.email??void 0,id:e.id,virtual:e.is_virtual,items:M(e.itemsV2),prices:e.prices,selectedPaymentMethod:p(e.selected_payment_method),shippingAddresses:h(e.shipping_addresses),totalQty:e.total_quantity});function k(e){switch(e){case"SimpleCartItem":return n.Simple;case"ConfigurableCartItem":return n.Configurable;case"DownloadableCartItem":return n.Downloadable;case"GiftCardCartItem":return n.GiftCard;case"VirtualCartItem":return n.Virtual;case"BundleCartItem":return n.Bundle;default:throw new Error(`Unknown item kind: ${e}`)}}function S(e){if(e.__typename!=="ConfigurableCartItem")return;const t={};for(const r of e.configurable_options)t[r.option_label]=r.value_label;return t}function x(e){if(!("customizable_options"in e))return;const t={};for(const r of e.customizable_options)t[r.label]=r.values.map(a=>a.label||a.value).join(", ");return t}function A(e){var l,i;const r=e.__typename==="ConfigurableCartItem"?(l=e.configured_variant)==null?void 0:l.thumbnail:(i=e.product)==null?void 0:i.thumbnail;if(!r||!r.url)return;const a={src:r.url},o=String(r.label||e.product.name);return o!==""&&(a.alt=o),a}function w(e){var t,r;return{kind:k(e.__typename),name:e.product.name,quantity:e.quantity,sku:e.product.sku,uid:e.uid,url:(t=e.product)==null?void 0:t.url_key,image:A(e),price:{value:e.prices.price.value,currency:e.prices.price.currency},priceInclTax:{value:e.prices.price_including_tax.value,currency:e.prices.price_including_tax.currency},total:{value:e.prices.row_total.value,currency:e.prices.row_total.currency},totalInclTax:{value:e.prices.row_total_including_tax.value,currency:e.prices.row_total_including_tax.currency},discount:{value:e.prices.total_item_discount.value,currency:e.prices.total_item_discount.currency},regularPrice:{value:e.product.price_range.maximum_price.regular_price.value,currency:e.product.price_range.maximum_price.regular_price.currency},discounted:e.product.price_range.maximum_price.regular_price.value*e.quantity!==e.prices.row_total.value,stockStatus:e.product.stock_status===s.OutOfStock?u.OutOfStock:u.InStock,configurableOptions:S(e),customizableOptions:x(e),links:e.__typename==="DownloadableCartItem"?(r=e.links)==null?void 0:r.map(a=>a==null?void 0:a.title):void 0,onlyXLeftInStock:e.product.only_x_left_in_stock,senderName:e.__typename==="GiftCardCartItem"?e.sender_name:void 0,senderEmail:e.__typename==="GiftCardCartItem"?e.sender_email:void 0,recipientEmail:e.__typename==="GiftCardCartItem"?e.recipient_email:void 0,recipientName:e.__typename==="GiftCardCartItem"?e.recipient_name:void 0,message:e.__typename==="GiftCardCartItem"?e.message:void 0}}function D(e){return e.filter(Boolean).map(t=>w(t))}function M(e){return e?D(e.items):[]}const O=`
  fragment CheckoutData on Cart {
    is_virtual
    email
    billing_address {
      city
      country {
        code
        label
      }
      firstname
      lastname
      company
      postcode
      vat_id
      region {
        region_id
        code
        label
      }
      street
      telephone
      custom_attributes {
        ... on AttributeValue {
          code
          value
        }
      }
    }
    shipping_addresses {
      firstname
      lastname
      company
      street
      city
      postcode
      vat_id
      region {
        region_id
        code
        label
      }
      country {
        code
        label
      }
      telephone
      custom_attributes {
        ... on AttributeValue {
          code
          value
        }
      }
      available_shipping_methods {
        amount {
          currency
          value
        }
        available
        carrier_code
        carrier_title
        error_message
        method_code
        method_title
        price_excl_tax {
          value
          currency
        }
        price_incl_tax {
          value
          currency
        }
      }
      selected_shipping_method {
        amount {
          value
          currency
        }
        carrier_code
        carrier_title
        method_code
        method_title
      }
    }
    available_payment_methods {
      code
      title
    }
    selected_payment_method {
      code
      title
    }
    applied_coupons {
      code
    }
    prices {
      grand_total {
        value
        currency
      }
      subtotal_excluding_tax {
        value
        currency
      }
      subtotal_including_tax {
        value
        currency
      }
      applied_taxes {
        label
        amount {
          currency
          value
        }
      }
    }
  }
`,z=`
  fragment CartSummaryItems on Cart {
    total_quantity
    itemsV2(sort: { field: CREATED_AT, order: DESC }) {
      total_count
      items {
        __typename
        uid
        product {
          __typename
          uid
          name
          sku
          url_key
          thumbnail {
            url
            label
          }
          small_image {
            url
          }
          price_range {
            maximum_price {
              regular_price {
                currency
                value
              }
            }
          }
          stock_status
          only_x_left_in_stock
        }
        prices {
          fixed_product_taxes {
            amount {
              currency
              value
            }
            label
          }
          price {
            currency
            value
          }
          price_including_tax {
            currency
            value
          }
          row_total {
            value
            currency
          }
          row_total_including_tax {
            value
            currency
          }
          total_item_discount {
            value
            currency
          }
        }
        quantity
        errors {
          code
          message
        }
        ... on SimpleCartItem {
          customizable_options {
            label
            values {
              label
              value
            }
          }
        }
        ... on VirtualCartItem {
          customizable_options {
            label
            values {
              label
              value
            }
          }
        }
        ... on ConfigurableCartItem {
          customizable_options {
            label
            values {
              label
              value
            }
          }
          configurable_options {
            id
            configurable_product_option_uid
            option_label
            configurable_product_option_value_uid
            value_label
            value_id
          }
          configured_variant {
            thumbnail {
              label
              url
            }
          }
        }
        ... on GiftCardCartItem {
          sender_name
          sender_email
          recipient_name
          recipient_email
          message
          customizable_options {
            label
            values {
              label
              value
            }
          }
        }
        ... on DownloadableCartItem {
          links {
            title
          }
          customizable_options {
            label
            values {
              label
              value
            }
          }
        }
      }
    }
  }
`,q=`
  query getCheckoutData($cartId: String!) {
    cart(cart_id: $cartId) {
      id
      ...CheckoutData
      ...CartSummaryItems
    }
  }
  ${O}
  ${z}
`;export{O as C,z as a,q as g,V as t};
//# sourceMappingURL=getCheckoutData.graphql.js.map
