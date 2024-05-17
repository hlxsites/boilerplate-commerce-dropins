import{FetchGraphQL as i}from"@dropins/tools/fetch-graphql.js";class n extends Error{constructor(e){super(e.map(r=>r.message).join(" ")),this.name="FetchError"}}class m extends Error{constructor(e){super(`Missing argument: ${e}`)}}class a extends Error{constructor(){super("Order not found")}}const{setEndpoint:p,setFetchGraphQlHeader:h,removeFetchGraphQlHeader:_,setFetchGraphQlHeaders:y,fetchGraphQl:o,getConfig:O}=new i().getMethods(),c=`
    fragment guestOrderData on CustomerOrder {
      number
      status
      email
      shipping_method
      payment_methods {
        name
        type
      }
      total {
        subtotal {
          currency
          value
        }
        total_tax {
          currency
          value
        }
        total_shipping {
          currency
          value
        }
        grand_total {
          currency
          value
        }
      }
      billing_address {
        firstname
        lastname
        street
        city
        postcode
        telephone
        country_code
        region
        region_id
      }
      shipping_address {
        firstname
        lastname
        street
        city
        postcode
        telephone
        country_code
        region
        region_id
      }
      items {
        __typename
        id
        quantity_ordered
        product_sale_price {
          value
          currency
        }
        product {
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
        selected_options {
          label
          value
        }
        
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
`,u=`
  query guestOrder($number: String!, $email: String!, $postcode: String!) {
    guestOrder(input: { number: $number, email: $email, postcode: $postcode }) {
      ...guestOrderData
    }
  }
  ${c}
`,f=async t=>{const{data:e,errors:r}=await o(u,{variables:{...t}});if(r)throw new n(r);const s=e==null?void 0:e.guestOrder;if(!s)throw new a;return s},d=`
  query guestOrderByToken($token: String!) {
    guestOrderByToken(input: {token: $token}) {
      ...guestOrderData
    }
  }
  ${c}
`,b=async t=>{const{data:e,errors:r}=await o(d,{variables:{token:t}});if(r)throw new n(r);const s=e==null?void 0:e.guestOrderByToken;if(!!!s)throw new a;return s};export{n as F,m as M,a as O,h as a,y as b,f as c,b as d,o as f,O as g,_ as r,p as s};
//# sourceMappingURL=guestOrderByToken.js.map
