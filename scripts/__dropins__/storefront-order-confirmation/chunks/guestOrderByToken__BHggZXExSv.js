import { FetchGraphQL } from "@dropins/tools/fetch-graphql.js";
class FetchError extends Error {
  constructor(reasons) {
    super(reasons.map((e) => e.message).join(" "));
    this.name = "FetchError";
  }
}
class MissingArgument extends Error {
  constructor(argument) {
    super(`Missing argument: ${argument}`);
  }
}
class OrderNotFound extends Error {
  constructor() {
    super("Order not found");
  }
}
const {
  setEndpoint,
  setFetchGraphQlHeader,
  removeFetchGraphQlHeader,
  setFetchGraphQlHeaders,
  fetchGraphQl,
  getConfig
} = new FetchGraphQL().getMethods();
const GUEST_ORDER_FRAGMENT = (
  /* GraphQL */
  `
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
`
);
const guestOrderQuery = (
  /* GraphQL */
  `
  query guestOrder($number: String!, $email: String!, $postcode: String!) {
    guestOrder(input: { number: $number, email: $email, postcode: $postcode }) {
      ...guestOrderData
    }
  }
  ${GUEST_ORDER_FRAGMENT}
`
);
const guestOrder = async (input) => {
  const {
    data,
    errors
  } = await fetchGraphQl(guestOrderQuery, {
    variables: {
      ...input
    }
  });
  if (errors)
    throw new FetchError(errors);
  const order = data == null ? void 0 : data.guestOrder;
  if (!order)
    throw new OrderNotFound();
  return order;
};
const guestOrderByTokenQuery = (
  /* GraphQL */
  `
  query guestOrderByToken($token: String!) {
    guestOrderByToken(input: {token: $token}) {
      ...guestOrderData
    }
  }
  ${GUEST_ORDER_FRAGMENT}
`
);
const guestOrderByToken = async (token) => {
  const {
    data,
    errors
  } = await fetchGraphQl(guestOrderByTokenQuery, {
    variables: {
      token
    }
  });
  if (errors)
    throw new FetchError(errors);
  const order = data == null ? void 0 : data.guestOrderByToken;
  const hasOrder = !!order;
  if (!hasOrder)
    throw new OrderNotFound();
  return order;
};
export {
  FetchError as F,
  MissingArgument as M,
  OrderNotFound as O,
  setFetchGraphQlHeader as a,
  setFetchGraphQlHeaders as b,
  guestOrder as c,
  guestOrderByToken as d,
  fetchGraphQl as f,
  getConfig as g,
  removeFetchGraphQlHeader as r,
  setEndpoint as s
};
