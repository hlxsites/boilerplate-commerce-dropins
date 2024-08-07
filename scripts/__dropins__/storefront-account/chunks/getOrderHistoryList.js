import{f as g,h as _,a as h}from"./addressField.config.js";const y=e=>{const t=new Date(e),r=String(t.getDate()).padStart(2,"0"),a=String(t.getMonth()+1).padStart(2,"0"),o=t.getFullYear();return`${r}/${a}/${o}`},f=e=>{var n,s;if(!((s=(n=e.data)==null?void 0:n.customer)!=null&&s.orders))return null;const{items:t,page_info:r,total_count:a}=e.data.customer.orders;return{items:t.map(i=>{const{billing_address:c,shipping_address:d,shipping_method:u,order_date:l,payment_methods:m,...p}=i;return{defaultBulling:c,defaultShipping:d,shippingMethod:u,paymentMethods:m,orderDate:y(l),...p}}),pageInfo:r,totalCount:a}},S=`
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
`,b=async e=>await g(S,{method:"GET",cache:"no-cache",variables:{pageSize:e}}).then(t=>{var r;return(r=t.errors)!=null&&r.length?_(t.errors):f(t)}).catch(h);export{b as g};
