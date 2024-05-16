import { M as MissingCart, b as MissingPaymentMethod, f as dispatchApiCall } from "./transform-shipping-methods__Jr5_k8qEf1.js";
import { C as CHECKOUT_DATA_FRAGMENT, a as CART_SUMMARY_FRAGMENT, t as transformCart } from "./transform-cart__7m47FkHC4Y.js";
import "./countries__BI6v0R6zIv.js";
const setPaymentMethodMutation = (
  /* GraphQL */
  `
  mutation setPaymentMethod($cartId: String!, $paymentMethod: String!) {
    setPaymentMethodOnCart(
      input: { cart_id: $cartId, payment_method: { code: $paymentMethod } }
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
const setPaymentMethod = async ({
  cartId,
  paymentMethod
}) => {
  if (!cartId)
    throw new MissingCart();
  if (!paymentMethod)
    throw new MissingPaymentMethod();
  return await dispatchApiCall({
    type: "mutation",
    query: setPaymentMethodMutation,
    options: {
      variables: {
        cartId,
        paymentMethod
      }
    },
    path: "setPaymentMethodOnCart.cart",
    signalType: "cart",
    transformer: transformCart
  });
};
export {
  setPaymentMethod as s
};
//# sourceMappingURL=setPaymentMethod__CX8fd5XcrC.js.map
