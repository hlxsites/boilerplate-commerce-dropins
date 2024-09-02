import{events as l}from"@dropins/tools/event-bus.js";import{FetchGraphQL as m}from"@dropins/tools/fetch-graphql.js";const _=`
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
}`,g=`
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
}`,p=`
fragment OrderItems on OrderItem {
  status
  product_name
  id
  quantity_ordered
  product_sale_price {
    value
    currency
  }
  selected_options {
    label
    value
  }
  product {
    name
    sku
    small_image {
      url
    }
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
}`,h=e=>{const t=e.map(a=>a.message).join(" ");throw Error(t)},O=e=>{throw e instanceof DOMException&&e.name==="AbortError"||l.emit("order/error",{source:"auth",type:"network",error:e}),e},d=e=>{const{shipping_address:t,billing_address:a,payment_methods:n,gift_receipt_included:i,order_date:u,printed_card_included:s,shipping_method:c,total:r,...o}=e;return{defaultShipping:t,defaultBulling:a,paymentMethods:n,giftReceiptIncluded:i,orderDate:u,printedCardIncluded:s,shippingMethod:c,total:{discounts:(r==null?void 0:r.discounts)||null,subtotal:(r==null?void 0:r.subtotal)||null,totalTax:(r==null?void 0:r.total_tax)||null,totalShipping:(r==null?void 0:r.total_shipping)||null,grandTotal:(r==null?void 0:r.grand_total)||null},...o}},f=e=>{var a,n;if(!((a=e==null?void 0:e.data)!=null&&a.guestOrder))return null;const t=(n=e==null?void 0:e.data)==null?void 0:n.guestOrder;return d(t)},R=e=>{var a,n;if(!((a=e==null?void 0:e.data)!=null&&a.guestOrderByToken))return null;const t=(n=e==null?void 0:e.data)==null?void 0:n.guestOrderByToken;return d(t)},{setEndpoint:v,setFetchGraphQlHeader:A,removeFetchGraphQlHeader:D,setFetchGraphQlHeaders:S,fetchGraphQl:y,getConfig:x}=new m().getMethods(),E=`
  fragment guestOrderData on CustomerOrder {
      gift_receipt_included
      carrier
      email
      id
      number
      order_date
      printed_card_included
      shipping_method
      status
      token
    payment_methods {
      name
      type
    }
    total {
    ...OrderSummary
    }
    billing_address {
      ...AddressesList
    }
    shipping_address {
      ...AddressesList
    }
    items {
      __typename
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
${_}
${g}
${p}
`,G=`
  query GET_GUEST_ORDER($input: OrderInformationInput!) {
  guestOrder(input:$input) {
    ...guestOrderData
    }
  }
${E}
`,I=async e=>await y(G,{method:"GET",cache:"no-cache",variables:{input:e}}).then(t=>{var a;return(a=t.errors)!=null&&a.length?h(t.errors):f(t)}).catch(O);export{g as A,_ as O,p as a,O as b,A as c,S as d,I as e,y as f,x as g,h,D as r,v as s,R as t};
