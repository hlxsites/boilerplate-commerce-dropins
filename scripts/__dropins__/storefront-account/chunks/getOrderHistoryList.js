import{c as n,f as l,h as u,a as m}from"./convertCase.js";import{t as c}from"./transform-customer-address.js";const _=(e,t="en-US",r={})=>{const s={...{day:"2-digit",month:"2-digit",year:"numeric"},...r},a=new Date(e);return isNaN(a.getTime())?"Invalid Date":new Intl.DateTimeFormat(t,s).format(a)},g=e=>{var s,a;if(!((a=(s=e.data)==null?void 0:s.customer)!=null&&a.orders))return null;const{items:t,page_info:r,total_count:i}=e.data.customer.orders;return{items:t.map(o=>{const d={...o,order_date:_(o.order_date),shipping_address:c(o.shipping_address),billing_address:c(o.billing_address)};return n(d,"camelCase",{})}),pageInfo:n(r,"camelCase",{}),totalCount:n(i,"camelCase",{})}},p=`
  query GET_CUSTOMER_ORDERS_LIST($pageSize: Int) {
  customer {
    orders(pageSize: $pageSize) {
      page_info {
        page_size
        total_pages
        current_page
      }
      total_count
      items {
        token
        email
        shipping_method
        shipping_address {
          firstname
          lastname
          postcode
          street
          region
          city
          country_code
          region_id
        }
        billing_address {
          firstname
          lastname
          postcode
          street
          region
          city
          country_code
          region_id
        }
        payment_methods {
          name
        }
        number
        id
        order_date
        carrier
        status
        items {
          status
          product_name
          id
          product {
          small_image {
              url
            }
          }
        }
        total {
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
        }
      }
    }
  }
}
`,y=async e=>await l(p,{method:"GET",cache:"no-cache",variables:{pageSize:e}}).then(t=>{var r;return(r=t.errors)!=null&&r.length?u(t.errors):g(t)}).catch(m);export{y as g};
