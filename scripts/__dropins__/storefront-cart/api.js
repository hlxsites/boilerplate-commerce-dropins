import { C as CART_ITEMS_PAGINATION_ARGUMENTS, a as CART_FRAGMENT, s as state, f as fetchGraphQl, h as handleFetchError, t as transformCart, c as config } from "./chunks/getStoreConfig__D5TZNZKL7r.js";
import { j, g, m, i, k, r, l, b, d, e } from "./chunks/getStoreConfig__D5TZNZKL7r.js";
import { events } from "@dropins/tools/event-bus.js";
import { p as publishOpenCartEvent, a as publishCartUpdateEvents } from "./chunks/updateProductsFromCart__BgOPk2gVgl.js";
import { u } from "./chunks/updateProductsFromCart__BgOPk2gVgl.js";
import { a, g as g2, b as b2 } from "./chunks/getEstimateShipping__Bin9bPsMEq.js";
import "@dropins/tools/fetch-graphql.js";
const ADD_PRODUCTS_TO_CART_MUTATION = `
  mutation ADD_PRODUCTS_TO_CART_MUTATION(
      $cartId: String!, 
      $cartItems: [CartItemInput!]!,
      ${CART_ITEMS_PAGINATION_ARGUMENTS}
    ) {
    addProductsToCart(
      cartId: $cartId
      cartItems: $cartItems
    ) {
      cart {
        ...CartFragment
      }
      user_errors {
        code
        message
      }
    }
  }
  ${CART_FRAGMENT}
`;
const addProductsToCart = async (items) => {
  let isNewCart = false;
  const cartId = state.cartId || await createEmptyCart().then((id) => {
    isNewCart = true;
    return id;
  });
  return fetchGraphQl(ADD_PRODUCTS_TO_CART_MUTATION, {
    variables: {
      cartId,
      cartItems: items.map(({
        sku,
        parentSku: parent_sku,
        quantity,
        optionsUIDs: selected_options,
        enteredOptions: entered_options
      }) => ({
        sku,
        parent_sku,
        quantity,
        selected_options,
        entered_options
      }))
    }
  }).then(({
    errors,
    data
  }) => {
    if (errors)
      return handleFetchError(errors);
    const payload = transformCart(data.addProductsToCart.cart);
    events.emit("cart/updated", payload);
    events.emit("cart/data", payload);
    if (payload) {
      const updatedItems = payload.items.filter((item) => items.some(({
        sku
      }) => sku === item.sku));
      if (isNewCart) {
        publishOpenCartEvent(payload, updatedItems, state.locale || "en-US");
      } else {
        publishCartUpdateEvents(payload, updatedItems, state.locale || "en-US");
      }
    }
    return payload;
  });
};
const CREATE_EMPTY_CART_MUTATION = `
    mutation CREATE_EMPTY_CART_MUTATION {
        createEmptyCart
    }
`;
const createEmptyCart = async () => {
  const {
    disableGuestCart
  } = config.getConfig();
  if (disableGuestCart) {
    throw new Error("Guest cart is disabled");
  }
  return await fetchGraphQl(CREATE_EMPTY_CART_MUTATION).then(({
    data
  }) => {
    const cartId = data.createEmptyCart;
    state.cartId = cartId;
    return cartId;
  });
};
export {
  addProductsToCart,
  config,
  createEmptyCart,
  fetchGraphQl,
  j as getCartData,
  g as getConfig,
  a as getCountries,
  g2 as getEstimateShipping,
  b2 as getRegions,
  m as getStoreConfig,
  i as initialize,
  k as initializeCart,
  r as removeFetchGraphQlHeader,
  l as resetCart,
  b as setEndpoint,
  d as setFetchGraphQlHeader,
  e as setFetchGraphQlHeaders,
  u as updateProductsFromCart
};
