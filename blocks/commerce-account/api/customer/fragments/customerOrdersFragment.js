const customerOrdersFragment = `
      page_info {
        current_page
        page_size
        total_pages
      }
      items {
        order_date
        number
        shipping_method
        payment_methods{
            type
            name
        }
        billing_address{
          firstname
          lastname
          city
          country_code
          region
          telephone
          postcode
          telephone
          street
        }
        shipping_address{
          region
          firstname
          lastname
          city
          country_code
          region_id
          telephone
          postcode
          street
      }
        items{
          product_name
          product_type
          product_url_key
          id
          quantity_invoiced
          quantity_canceled
          quantity_ordered
          quantity_refunded
          quantity_returned
          quantity_shipped
          status
          product_sku
          product_sale_price{
              currency
              value
          }
        }
        id
        status
    }
`;

export default customerOrdersFragment;
