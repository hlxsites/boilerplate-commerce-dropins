import{c as o,f as l,h as u,a as m}from"./convertCase.js";import{t as i}from"./transform-customer-address.js";const _=e=>{const t=new Date(e),r=String(t.getDate()).padStart(2,"0"),n=String(t.getMonth()+1).padStart(2,"0"),a=t.getFullYear();return`${r}/${n}/${a}`},g=e=>{var a,c;if(!((c=(a=e.data)==null?void 0:a.customer)!=null&&c.orders))return null;const{items:t,page_info:r,total_count:n}=e.data.customer.orders;return{items:t.map(s=>{const d={...s,order_date:_(s.order_date),shipping_address:i(s.shipping_address),billing_address:i(s.billing_address)};return o(d,"camelCase",{})}),pageInfo:o(r,"camelCase",{}),totalCount:o(n,"camelCase",{})}},p=`
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
`,f=async e=>await l(p,{method:"GET",cache:"no-cache",variables:{pageSize:e}}).then(t=>{var r;return(r=t.errors)!=null&&r.length?u(t.errors):g(t)}).catch(m);export{f as g};
