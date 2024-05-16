import { a as MissingEmail, M as MissingCart, f as dispatchApiCall } from "./transform-shipping-methods__Jr5_k8qEf1.js";
import { f as fetchGraphQl, j as handleNetworkError, k as handleFetchErrors } from "./countries__BI6v0R6zIv.js";
import "@dropins/tools/event-bus.js";
import { C as CHECKOUT_DATA_FRAGMENT, a as CART_SUMMARY_FRAGMENT, t as transformCart } from "./transform-cart__7m47FkHC4Y.js";
const transformEmailAvailability = (data) => {
  return Boolean(data == null ? void 0 : data.is_email_available);
};
const isEmailAvailableQuery = (
  /* GraphQL */
  `
  query isEmailAvailable($email: String!) {
    isEmailAvailable(email: $email) {
      is_email_available
    }
  }
`
);
const isEmailAvailable = async (email) => {
  if (!email)
    throw new MissingEmail();
  const {
    data,
    errors
  } = await fetchGraphQl(isEmailAvailableQuery, {
    method: "GET",
    cache: "no-cache",
    variables: {
      email
    }
  }).catch(handleNetworkError);
  if (errors)
    handleFetchErrors(errors);
  return transformEmailAvailability(data.isEmailAvailable);
};
const setGuestEmailMutation = (
  /* GraphQL */
  `
  mutation setGuestEmail($cartId: String!, $email: String!) {
    setGuestEmailOnCart(input: { cart_id: $cartId, email: $email }) {
      cart {
        id
        ...CheckoutData
        ...CartSummaryItems
      }
    }
  }
  ${CHECKOUT_DATA_FRAGMENT}
  ${CART_SUMMARY_FRAGMENT}
`
);
const setGuestEmailOnCart = async ({
  cartId,
  email
}) => {
  if (!cartId)
    throw new MissingCart();
  return await dispatchApiCall({
    type: "mutation",
    query: setGuestEmailMutation,
    options: {
      variables: {
        cartId,
        email
      }
    },
    path: "setGuestEmailOnCart.cart",
    signalType: "cart",
    transformer: transformCart
  });
};
export {
  isEmailAvailable as i,
  setGuestEmailOnCart as s
};
//# sourceMappingURL=setGuestEmailOnCart__BoK0QUy0GA.js.map
