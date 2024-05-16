import { M as MissingCart, c as MissingBillingAddress, f as dispatchApiCall } from "./transform-shipping-methods__Jr5_k8qEf1.js";
import { C as CHECKOUT_DATA_FRAGMENT, a as CART_SUMMARY_FRAGMENT, t as transformCart } from "./transform-cart__7m47FkHC4Y.js";
import "./countries__BI6v0R6zIv.js";
const setBillingAddressMutation = (
  /* GraphQL */
  `
  mutation setBillingAddress(
    $cartId: String!
    $input: BillingAddressInput!
  ) {
    setBillingAddressOnCart(
      input: { cart_id: $cartId, billing_address: $input }
    ) {
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
const setBillingAddress = async ({
  signal,
  cartId,
  input
}) => {
  const {
    address,
    same_as_shipping
  } = input;
  if (!cartId)
    throw new MissingCart();
  if (!same_as_shipping && !address)
    throw new MissingBillingAddress();
  return await dispatchApiCall({
    type: "mutation",
    query: setBillingAddressMutation,
    options: {
      signal,
      variables: {
        cartId,
        input
      }
    },
    path: "setBillingAddressOnCart.cart",
    signalType: "cart",
    transformer: transformCart
  });
};
export {
  setBillingAddress as s
};
//# sourceMappingURL=setBillingAddress__YjJxZ6C51q.js.map
