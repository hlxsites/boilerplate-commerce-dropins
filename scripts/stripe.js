export const QUERY_GET_STRIPE_CONFIG = `query {
  getStripeConfiguration {
    apiKey
    elementsOptions
  }
}`;

export const MUTATION_SET_PAYMENT_METHOD = `mutation SET_PAYMENT_METHOD_ON_CART ($cartId: String!, $paymentMethodId: String!){
  setPaymentMethodOnCart(input: {
      cart_id: $cartId
      payment_method: {
        code: "stripe_payments"
        stripe_payments: {
          payment_method: $paymentMethodId
          save_payment_method: true
        }
      }
  }) {
    cart {
      selected_payment_method {
        code
        title
      }
    }
  }
}`;

export const MUTATION_PLACE_ORDER = `mutation PLACE_ORDER($cartId: String!) {
  placeOrder(input: {cart_id: $cartId}) {
    order {
      order_number
      client_secret
    }
    orderV2 {
      number
      status
      token
      is_virtual
      applied_coupons {
        code
      }
      email
      id
      total {
        grand_total {
          currency
          value
        }
        subtotal {
          currency
          value
        }
        total_shipping {
          currency
          value
        }
        total_tax {
          currency
          value
        }
      }
      shipping_method
      payment_methods {
        name
        type
      }
      billing_address {
        firstname
        middlename
        lastname
        street
        city
        postcode
        telephone
        country_code
        region
        region_id
        company
        custom_attributesV2 {
          code
          ... on AttributeValue {
            value
          }
        }
      }
      shipping_address {
        firstname
        middlename
        lastname
        street
        city
        postcode
        telephone
        country_code
        region
        region_id
        company
        custom_attributesV2 {
          code
          ... on AttributeValue {
            value
          }
        }
      }
      items {
        __typename
        id
        discounts {
          amount {
            value
          }
        }
        product {
          __typename
          canonical_url
          image {
            url
          }
          thumbnail {
            label
            url
          }
          name
          sku
          uid
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
        product_sale_price {
          value
          currency
        }
        quantity_ordered
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
}`;
