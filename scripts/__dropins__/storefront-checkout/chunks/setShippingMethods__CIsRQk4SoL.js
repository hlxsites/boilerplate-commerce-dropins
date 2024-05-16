import { M as MissingCart, f as dispatchApiCall } from "./transform-shipping-methods__Jr5_k8qEf1.js";
import "@dropins/tools/event-bus.js";
import { C as CHECKOUT_DATA_FRAGMENT, a as CART_SUMMARY_FRAGMENT, t as transformCart } from "./transform-cart__7m47FkHC4Y.js";
import "./countries__BI6v0R6zIv.js";
const setShippingMethodsMutation = (
  /* GraphQL */
  `
  mutation setShippingMethods(
    $cartId: String!
    $shippingMethods: [ShippingMethodInput]!
  ) {
    setShippingMethodsOnCart(
      input: { cart_id: $cartId, shipping_methods: $shippingMethods }
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
const setShippingMethodsOnCart = async ({
  cartId,
  shippingMethods
}) => {
  if (!cartId)
    throw new MissingCart();
  return dispatchApiCall({
    type: "mutation",
    query: setShippingMethodsMutation,
    options: {
      variables: {
        cartId,
        shippingMethods
      }
    },
    path: "setShippingMethodsOnCart.cart",
    signalType: "cart",
    transformer: transformCart
  });
};
export {
  setShippingMethodsOnCart as s
};
//# sourceMappingURL=setShippingMethods__CIsRQk4SoL.js.map
