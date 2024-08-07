import{events as p}from"@dropins/tools/event-bus.js";import{FetchGraphQL as _}from"@dropins/tools/fetch-graphql.js";const g=`
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
}`,h=`
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
}`,f=`
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
}`,O=e=>{const t=e.map(a=>a.message).join(" ");throw Error(t)},y=e=>{throw e instanceof DOMException&&e.name==="AbortError"||p.emit("error",{source:"auth",type:"network",error:e}),e},E=e=>{var n,d;if(!((n=e==null?void 0:e.data)!=null&&n.guestOrder))return null;const t=(d=e==null?void 0:e.data)==null?void 0:d.guestOrder,{shipping_address:a,billing_address:s,payment_methods:i,gift_receipt_included:u,order_date:c,printed_card_included:o,shipping_method:l,total:r,...m}=t;return{defaultShipping:a,defaultBulling:s,paymentMethods:i,giftReceiptIncluded:u,orderDate:c,printedCardIncluded:o,shippingMethod:l,total:{discounts:(r==null?void 0:r.discounts)||null,subtotal:(r==null?void 0:r.subtotal)||null,totalTax:(r==null?void 0:r.total_tax)||null,totalShipping:(r==null?void 0:r.total_shipping)||null,grandTotal:(r==null?void 0:r.grand_total)||null},...m}},{setEndpoint:D,setFetchGraphQlHeader:S,removeFetchGraphQlHeader:T,setFetchGraphQlHeaders:x,fetchGraphQl:b,getConfig:I}=new _().getMethods(),G=`
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
${g}
${h}
${f}
`,R=`
  query GET_GUEST_ORDER($input: OrderInformationInput!) {
  guestOrder(input:$input) {
    ...guestOrderData
    }
  }
${G}
`,M=async e=>await b(R,{method:"GET",cache:"no-cache",variables:{input:e}}).then(t=>{var a;return(a=t.errors)!=null&&a.length?O(t.errors):E(t)}).catch(y);export{h as A,g as O,f as a,y as b,S as c,x as d,M as e,b as f,I as g,O as h,T as r,D as s};
