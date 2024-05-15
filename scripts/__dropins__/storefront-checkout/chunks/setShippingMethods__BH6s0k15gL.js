import { M as MissingCart, f as dispatchApiCall } from "./transform-shipping-methods__Csm-KieitR.js";
import "@dropins/tools/event-bus.js";
import { C as CHECKOUT_DATA_FRAGMENT, a as CART_SUMMARY_FRAGMENT, t as transformCart } from "./transform-cart__DmkjTHv6RB.js";
import "./countries__BNdKWz0f2q.js";
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
