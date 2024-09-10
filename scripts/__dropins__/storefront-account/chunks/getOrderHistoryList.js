import{c as i,f as l,h as u,a as m}from"./convertCase.js";import{t as c}from"./transform-customer-address.js";const _=(a,t="en-US",o={})=>{const e={...{day:"2-digit",month:"2-digit",year:"numeric"},...o},s=new Date(a);return isNaN(s.getTime())?"Invalid Date":new Intl.DateTimeFormat(t,e).format(s)},p=a=>{var e,s;if(!((s=(e=a.data)==null?void 0:e.customer)!=null&&s.orders))return null;const{items:t,page_info:o,total_count:r}=a.data.customer.orders;return{items:t.map(n=>{const d={...n,order_date:_(n.order_date),shipping_address:c(n.shipping_address),billing_address:c(n.billing_address)};return i(d,"camelCase",{})}),pageInfo:i(o,"camelCase",{}),totalCount:i(r,"camelCase",{})}},g=`
  query GET_CUSTOMER_ORDERS_LIST($pageSize: Int, $filter: CustomerOrdersFilterInput) {
  customer {
    orders(pageSize: $pageSize, filter: $filter) {
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
`,y=async(a,t)=>{const o=t?{order_date:JSON.parse(t)}:{};return await l(g,{method:"GET",cache:"no-cache",variables:{pageSize:100,filter:o}}).then(r=>{var e;return(e=r.errors)!=null&&e.length?u(r.errors):p(r)}).catch(m)};export{y as g};
