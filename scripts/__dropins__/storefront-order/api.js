import{Initializer as p}from"@dropins/tools/lib.js";import{events as i}from"@dropins/tools/event-bus.js";import{O as d,a as n,A as o,f as m,h as c,t as u,b as _,c as h}from"./chunks/getGuestOrder.js";import{g as B,i as $,r as v,s as N,d as S,e as A}from"./chunks/getGuestOrder.js";import"@dropins/tools/fetch-graphql.js";const O=`
query ORDER_BY_NUMBER($orderNumber: String!) {
  customer {
    orders(
    filter: {number: {eq: $orderNumber}},
    ) {
      items {
        available_actions
        status
        number
        id
        order_date
        carrier
        shipping_method
        is_virtual
        applied_coupons {
          code
        }
        shipments {
        id
        tracking {
          title
          number
        }
        comments {
          message
          timestamp
        }
        items {
          id
          product_sku
          product_name
          order_item {
            ...OrderItems
            ... on GiftCardOrderItem {
              gift_card {
                recipient_name
                recipient_email
                sender_name
                sender_email
                message
              }
            }
          }
         }
      }
        payment_methods {
          name
          type
        }
        shipping_address {
        ...AddressesList
        }
        billing_address {
        ...AddressesList
        }
        items {
          ...OrderItems
          ... on GiftCardOrderItem {
            __typename
            gift_card {
              recipient_name
              recipient_email
              sender_name
              sender_email
              message
            }
          }
        }
        total {
        ...OrderSummary
        }
      }
    }
  }
}
${d}
${n}
${o}
`,g=async(e,r)=>await m(O,{method:"GET",cache:"force-cache",variables:{orderNumber:e}}).then(t=>{var a;return(a=t.errors)!=null&&a.length?c(t.errors):u(r??"orderData",t)}).catch(_),y=`
query ORDER_BY_TOKEN($token: String!) {
  guestOrderByToken(input: { token: $token }) {
    email
    id
    number
    order_date
    status
    token
    carrier
    shipping_method
    printed_card_included
    gift_receipt_included
    available_actions
    is_virtual
    payment_methods {
      name
      type
    }
    applied_coupons {
      code
    }
    shipments {
      id
      tracking {
        title
        number
      }
      comments {
        message
        timestamp
      }
      items {
        id
        product_sku
        product_name
        order_item {
          ...OrderItems
          ... on GiftCardOrderItem {
            gift_card {
              recipient_name
              recipient_email
              sender_name
              sender_email
              message
            }
          }
        }
      }
    }
    payment_methods {
      name
      type
    }
    shipping_address {
      ...AddressesList
    }
    billing_address {
      ...AddressesList
    }
    items {
      ...OrderItems
      ... on GiftCardOrderItem {
        __typename
        gift_card {
          recipient_name
          recipient_email
          sender_name
          sender_email
          message
        }
      }
    }
    total {
      ...OrderSummary
    }
  }
}
${d}
${n}
${o}
`,f=async e=>await m(y,{method:"GET",cache:"no-cache",variables:{token:e}}).then(r=>{var t;return(t=r.errors)!=null&&t.length?c(r.errors):h(r)}).catch(_),E=async e=>{let r=null;const t=(e==null?void 0:e.orderId)||"",a=(e==null?void 0:e.orderToken)||"",s=(e==null?void 0:e.preloadedData)||null;if(s){i.emit("order/data",s);return}if(!t&&!a){console.error("Order Token or ID not received.");return}if(t&&a){console.error("Error: You cannot pass both id and token together. You should pass only one identifier.");return}t&&(r=await g(t,"orderData")),a&&(r=await f(a)),i.emit("order/data",r)},l=new p({init:async e=>{const r={};l.config.setConfig({...r,...e}),E(e).catch(console.error)},listeners:()=>[]}),I=l.config;export{I as config,m as fetchGraphQl,B as getConfig,$ as getGuestOrder,g as getOrderDetailsById,f as guestOrderByToken,l as initialize,v as removeFetchGraphQlHeader,N as setEndpoint,S as setFetchGraphQlHeader,A as setFetchGraphQlHeaders};
