import { M as MissingCart, c as MissingBillingAddress, f as dispatchApiCall } from "./transform-shipping-methods__Csm-KieitR.js";
import { C as CHECKOUT_DATA_FRAGMENT, a as CART_SUMMARY_FRAGMENT, t as transformCart } from "./transform-cart__DmkjTHv6RB.js";
import "./countries__BNdKWz0f2q.js";
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
