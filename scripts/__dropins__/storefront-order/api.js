import{Initializer as O}from"@dropins/tools/lib.js";import{events as y}from"@dropins/tools/event-bus.js";import{O as c,a as h,A as l,f as p,h as g,b as _,t as D}from"./chunks/getGuestOrder.js";import{g as x,e as F,r as L,s as Q,c as q,d as z}from"./chunks/getGuestOrder.js";import"@dropins/tools/fetch-graphql.js";const b=`
query ORDER_BY_NUMBER($orderNumber: String!) {
  customer {
    orders(
    filter: {number: {eq: $orderNumber}},
    ) {
      items {
        shipping_method
        payment_methods {
          name
        }
        shipping_address {
        ...AddressesList
        }
        billing_address {
        ...AddressesList
        }
        number
        id
        order_date
        carrier
        items {
          ...OrderItems
        }
        total {
        ...OrderSummary
        }
      }
    }
  }
}
${c}
${h}
${l}
`,E=r=>{const{shipping_address:e,billing_address:t,payment_methods:s,gift_receipt_included:d,order_date:n,shipping_method:o,total:a,gift_wrapping:i,gift_message:u,items:m}=r;return{defaultShipping:e,defaultBulling:t,paymentMethods:s,giftReceiptIncluded:d,orderDate:n,shippingMethod:o,giftWrapping:i,giftMessage:u,items:m,total:{discount:a==null?void 0:a.discounts,subtotal:a==null?void 0:a.subtotal,totalTax:a==null?void 0:a.total_tax,totalShipping:a==null?void 0:a.total_shipping,grandTotal:a==null?void 0:a.grand_total}}},R=r=>r.total,S=r=>({carrier:r==null?void 0:r.carrier,id:r==null?void 0:r.id,items:r==null?void 0:r.items,number:r==null?void 0:r.number,orderDate:r==null?void 0:r.order_date,paymentMethods:r==null?void 0:r.payment_methods,shippingMethod:r==null?void 0:r.shipping_method}),T=r=>({defaultShipping:r==null?void 0:r.shipping_address,defaultBulling:r==null?void 0:r.billing_address}),k=(r,e)=>{var s,d,n,o,a,i,u;if(!((o=(n=(d=(s=e==null?void 0:e.data)==null?void 0:s.customer)==null?void 0:d.orders)==null?void 0:n.items)!=null&&o.length))return null;const t=(u=(i=(a=e==null?void 0:e.data)==null?void 0:a.customer)==null?void 0:i.orders)==null?void 0:u.items[0];switch(r){case"orderData":return E(t);case"orderSummary":return R(t);case"orderStatus":return S(t);case"orderCustomerInformation":return T(t);default:return null}},B=async(r,e)=>await p(b,{method:"GET",cache:"force-cache",variables:{orderNumber:r}}).then(t=>{var s;return(s=t.errors)!=null&&s.length?g(t.errors):k(e||"orderData",t)}).catch(_),I=`
query ORDER_BY_TOKEN($token: String!) {
    guestOrderByToken( input: {token: $token} ) {
        shipping_method
        payment_methods {
          name
        }
        shipping_address {
        ...AddressesList
        }
        billing_address {
        ...AddressesList
        }
        number
        id
        order_date
        carrier
        token
        items {
          ...OrderItems
        }
        total {
        ...OrderSummary
    }
  }
}
${c}
${h}
${l}
`,M=async r=>await p(I,{method:"GET",cache:"no-cache",variables:{token:r}}).then(e=>{var t;return(t=e.errors)!=null&&t.length?g(e.errors):D(e)}).catch(_),$=async r=>{let e=null;const t=(r==null?void 0:r.orderId)||"",s=(r==null?void 0:r.orderToken)||"";if(!t&&!s){console.error("Order Token or ID not received.");return}if(t&&s){console.error("Error: You cannot pass both id and token together. You should pass only one identifier.");return}t&&(e=await B(t,"orderData")),s&&(e=await M(s)),y.emit("order/data",e)},f=new O({init:async r=>{const e={};f.config.setConfig({...e,...r}),$(r).catch(console.error)},listeners:()=>[]}),Y=f.config;export{Y as config,p as fetchGraphQl,x as getConfig,F as getGuestOrder,B as getOrderDetailsById,M as guestOrderByToken,f as initialize,L as removeFetchGraphQlHeader,Q as setEndpoint,q as setFetchGraphQlHeader,z as setFetchGraphQlHeaders};
