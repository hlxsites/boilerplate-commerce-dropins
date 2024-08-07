import{Initializer as l}from"@dropins/tools/lib.js";import{events as g}from"@dropins/tools/event-bus.js";import{O as p,a as f,A as _,f as m,h as D,b as O}from"./chunks/getGuestOrder.js";import{g as x,e as F,r as Q,s as T,c as z,d as H}from"./chunks/getGuestOrder.js";import"@dropins/tools/fetch-graphql.js";const y=`
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
${p}
${f}
${_}
`,S=r=>{const{shipping_address:a,billing_address:t,payment_methods:s,gift_receipt_included:d,order_date:n,shipping_method:o,total:e,gift_wrapping:i,gift_message:c,items:h}=r;return{defaultShipping:a,defaultBulling:t,paymentMethods:s,giftReceiptIncluded:d,orderDate:n,shippingMethod:o,giftWrapping:i,giftMessage:c,items:h,total:{discount:e==null?void 0:e.discounts,subtotal:e==null?void 0:e.subtotal,totalTax:e==null?void 0:e.total_tax,totalShipping:e==null?void 0:e.total_shipping,grandTotal:e==null?void 0:e.grand_total}}},b=r=>r.total,R=r=>({carrier:r==null?void 0:r.carrier,id:r==null?void 0:r.id,items:r==null?void 0:r.items,number:r==null?void 0:r.number,orderDate:r==null?void 0:r.order_date,paymentMethods:r==null?void 0:r.payment_methods,shippingMethod:r==null?void 0:r.shipping_method}),E=r=>({defaultShipping:r==null?void 0:r.shipping_address,defaultBulling:r==null?void 0:r.billing_address}),I=(r,a)=>{var s,d,n,o,e,i,c;if(!((o=(n=(d=(s=a==null?void 0:a.data)==null?void 0:s.customer)==null?void 0:d.orders)==null?void 0:n.items)!=null&&o.length))return null;const t=(c=(i=(e=a==null?void 0:a.data)==null?void 0:e.customer)==null?void 0:i.orders)==null?void 0:c.items[0];switch(r){case"orderData":return S(t);case"orderSummary":return b(t);case"orderStatus":return R(t);case"orderCustomerInformation":return E(t);default:return null}},M=async(r,a)=>await m(y,{method:"GET",cache:"force-cache",variables:{orderNumber:r}}).then(t=>{var s;return(s=t.errors)!=null&&s.length?D(t.errors):I(a||"orderData",t)}).catch(O),B=async r=>{const a=(r==null?void 0:r.orderId)||"";if(!a){console.error("Order ID not received.");return}const t=await M(a,"orderData");g.emit("order/data",t)},u=new l({init:async r=>{const a={};u.config.setConfig({...a,...r}),B(r).catch(console.error)},listeners:()=>[]}),C=u.config;export{C as config,m as fetchGraphQl,x as getConfig,F as getGuestOrder,M as getOrderDetailsById,u as initialize,Q as removeFetchGraphQlHeader,T as setEndpoint,z as setFetchGraphQlHeader,H as setFetchGraphQlHeaders};
