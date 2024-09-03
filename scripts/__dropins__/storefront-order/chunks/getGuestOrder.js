import{events as D}from"@dropins/tools/event-bus.js";import{FetchGraphQL as M}from"@dropins/tools/fetch-graphql.js";const o=`
fragment OrderSummary on OrderTotal {
  grand_total {
    value
    currency
  }
  subtotal {
    currency
    value
  }
  taxes {
    amount {
      currency
      value
    }
    rate
    title
  }
  total_tax {
    currency
    value
  }
  total_shipping {
    currency
    value
  }
  discounts {
    amount {
      currency
      value
    }
    label
  }
}`,F=`
fragment AddressesList on OrderAddress {
  city
  company
  country_code
  fax
  firstname
  lastname
  middlename
  postcode
  prefix
  region
  region_id
  street
  suffix
  telephone
  vat_id
}`,U=`
fragment OrderItems on OrderItem {
  __typename
  status
  product_name
  id
  quantity_ordered
  quantity_shipped
  quantity_canceled
  quantity_invoiced
  quantity_refunded
  quantity_returned
  product_sale_price {
    value
    currency
  }
  selected_options {
    label
    value
  }
  product {
    __typename
    canonical_url
    uid
    name
    sku
    thumbnail {
      label
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
  }
}`,$=n=>{const a=n.map(i=>i.message).join(" ");throw Error(a)},L=n=>{throw n instanceof DOMException&&n.name==="AbortError"||D.emit("order/error",{source:"auth",type:"network",error:n}),n},j=n=>n.replace(/_([a-z])/g,(a,i)=>i.toUpperCase()),O=(n,a,i)=>{const t=["string","boolean","number"],u=j;return Array.isArray(n)?n.map(c=>t.includes(typeof c)||c===null?c:typeof c=="object"?O(c,a,i):c):n!==null&&typeof n=="object"?Object.entries(n).reduce((c,[s,l])=>{const e=i&&i[s]?i[s]:u(s);return c[e]=t.includes(typeof l)||l===null?l:O(l,a,i),c},{}):n},B=n=>n||0,H=n=>{var a,i,t;return{canonicalUrl:(n==null?void 0:n.canonical_url)||"",id:(n==null?void 0:n.uid)||"",name:(n==null?void 0:n.name)||"",sku:(n==null?void 0:n.sku)||"",image:((a=n==null?void 0:n.image)==null?void 0:a.url)||"",productType:(n==null?void 0:n.__typename)||"",thumbnail:{label:((i=n==null?void 0:n.thumbnail)==null?void 0:i.label)||"",url:((t=n==null?void 0:n.thumbnail)==null?void 0:t.url)||""}}},K=n=>{if(!n||!("selected_options"in n))return;const a={};for(const i of n.selected_options)a[i.label]=i.value;return a},z=n=>n==null?void 0:n.map(a=>{var i,t,u,c,s,l,e,_,p,y,r,g,f,h,v,E,G,T,m,C,x,A,R,q,k,S,N,Q,w;return{type:a==null?void 0:a.__typename,id:a==null?void 0:a.id,discounted:((c=(u=(t=(i=a==null?void 0:a.product)==null?void 0:i.price_range)==null?void 0:t.maximum_price)==null?void 0:u.regular_price)==null?void 0:c.value)*(a==null?void 0:a.quantity_ordered)!==((s=a==null?void 0:a.product_sale_price)==null?void 0:s.value)*(a==null?void 0:a.quantity_ordered),total:{value:((l=a==null?void 0:a.product_sale_price)==null?void 0:l.value)*(a==null?void 0:a.quantity_ordered),currency:(e=a==null?void 0:a.product_sale_price)==null?void 0:e.currency},totalInclTax:{value:((_=a==null?void 0:a.product_sale_price)==null?void 0:_.value)*(a==null?void 0:a.quantity_ordered),currency:(p=a==null?void 0:a.product_sale_price)==null?void 0:p.currency},price:{value:(y=a==null?void 0:a.product_sale_price)==null?void 0:y.value,currency:(r=a==null?void 0:a.product_sale_price)==null?void 0:r.currency},priceInclTax:{value:(g=a==null?void 0:a.product_sale_price)==null?void 0:g.value,currency:(f=a==null?void 0:a.product_sale_price)==null?void 0:f.currency},totalQuantity:B(a==null?void 0:a.quantity_ordered),regularPrice:{value:(G=(E=(v=(h=a==null?void 0:a.product)==null?void 0:h.price_range)==null?void 0:v.maximum_price)==null?void 0:E.regular_price)==null?void 0:G.value,currency:(x=(C=(m=(T=a==null?void 0:a.product)==null?void 0:T.price_range)==null?void 0:m.maximum_price)==null?void 0:C.regular_price)==null?void 0:x.currency},product:H(a==null?void 0:a.product),thumbnail:{label:((R=(A=a==null?void 0:a.product)==null?void 0:A.thumbnail)==null?void 0:R.label)||"",url:((k=(q=a==null?void 0:a.product)==null?void 0:q.thumbnail)==null?void 0:k.url)||""},giftCard:(a==null?void 0:a.__typename)==="GiftCardOrderItem"?{senderName:((S=a.gift_card)==null?void 0:S.sender_name)||"",senderEmail:((N=a.gift_card)==null?void 0:N.sender_email)||"",recipientEmail:((Q=a.gift_card)==null?void 0:Q.recipient_email)||"",recipientName:((w=a.gift_card)==null?void 0:w.recipient_name)||""}:void 0,configurableOptions:K(a)}}),b=n=>{var _,p,y,r,g;const a=z(n.items),{total:i,...t}=O({...n,items:a},"camelCase",{applied_coupons:"coupons",__typename:"__typename",firstname:"firstName",middlename:"middleName",lastname:"lastName",postcode:"postCode",payment_methods:"payments"}),u=(_=n==null?void 0:n.payment_methods)==null?void 0:_[0],c=(u==null?void 0:u.type)||"",s=(u==null?void 0:u.name)||"",l=(p=t==null?void 0:t.items)==null?void 0:p.reduce((f,h)=>f+h.totalQuantity,0);return{...i,...t,totalQuantity:l,shipping:{amount:((y=t==null?void 0:t.total)==null?void 0:y.totalShipping.value)??0,currency:((g=(r=t.total)==null?void 0:r.totalShipping)==null?void 0:g.currency)||"",code:t.shippingMethod??""},payments:[{code:c,name:s}]}},Z=(n,a)=>{var t,u,c,s,l,e,_;if(!((s=(c=(u=(t=a==null?void 0:a.data)==null?void 0:t.customer)==null?void 0:u.orders)==null?void 0:c.items)!=null&&s.length))return null;const i=(_=(e=(l=a==null?void 0:a.data)==null?void 0:l.customer)==null?void 0:e.orders)==null?void 0:_.items[0];return n==="orderData"?b(i):null},P=n=>{var i,t;if(!((i=n==null?void 0:n.data)!=null&&i.guestOrder))return null;const a=(t=n==null?void 0:n.data)==null?void 0:t.guestOrder;return b(a)},d=n=>{var i,t;if(!((i=n==null?void 0:n.data)!=null&&i.guestOrderByToken))return null;const a=(t=n==null?void 0:n.data)==null?void 0:t.guestOrderByToken;return b(a)},{setEndpoint:I,setFetchGraphQlHeader:aa,removeFetchGraphQlHeader:na,setFetchGraphQlHeaders:ia,fetchGraphQl:Y,getConfig:ta}=new M().getMethods(),J=`
  fragment guestOrderData on CustomerOrder {
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
${o}
${F}
${U}
`,V=`
  query GET_GUEST_ORDER($input: OrderInformationInput!) {
  guestOrder(input:$input) {
    ...guestOrderData
    }
  }
${J}
`,ca=async n=>await Y(V,{method:"GET",cache:"no-cache",variables:{input:n}}).then(a=>{var i;return(i=a.errors)!=null&&i.length?$(a.errors):P(a)}).catch(L);export{F as A,o as O,U as a,L as b,d as c,aa as d,ia as e,Y as f,ta as g,$ as h,ca as i,na as r,I as s,Z as t};
