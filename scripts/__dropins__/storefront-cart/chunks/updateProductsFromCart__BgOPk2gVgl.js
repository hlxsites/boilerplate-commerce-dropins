import { C as CART_ITEMS_PAGINATION_ARGUMENTS, a as CART_FRAGMENT, s as state, f as fetchGraphQl, h as handleFetchError, t as transformCart } from "./getStoreConfig__D5TZNZKL7r.js";
import { events as events$1 } from "@dropins/tools/event-bus.js";
function transformShoppingCart(params) {
  const {
    cart,
    locale = "en-US"
  } = params;
  return {
    id: cart.id,
    items: transformItems(cart.items, locale),
    prices: {
      subtotalExcludingTax: cart.subtotal.excludingTax,
      subtotalIncludingTax: cart.subtotal.includingTax
    },
    totalQuantity: cart.totalQuantity,
    possibleOnepageCheckout: void 0,
    giftMessageSelected: void 0,
    giftWrappingSelected: void 0,
    source: void 0
  };
}
function transformItems(items, locale) {
  return items.map((item) => {
    var _a;
    return {
      canApplyMsrp: false,
      formattedPrice: formatCurrency(locale, item.price.currency, item.price.value),
      id: item.uid,
      prices: {
        price: item.price
      },
      product: {
        productId: item.uid,
        name: item.name,
        sku: item.sku,
        topLevelSku: void 0,
        specialToDate: void 0,
        specialFromDate: void 0,
        newToDate: void 0,
        newFromDate: void 0,
        createdAt: void 0,
        updatedAt: void 0,
        manufacturer: void 0,
        countryOfManufacture: void 0,
        categories: item.url.categories,
        productType: void 0,
        pricing: {
          regularPrice: item.regularPrice.value,
          minimalPrice: void 0,
          maximalPrice: void 0,
          specialPrice: (_a = item.discount) == null ? void 0 : _a.value,
          tierPricing: void 0,
          currencyCode: item.regularPrice.currency
        },
        canonicalUrl: item.url.urlKey,
        mainImageUrl: item.image.src,
        image: {
          src: item.image.src,
          alt: item.image.alt
        }
      },
      configurableOptions: void 0,
      quantity: item.quantity
    };
  });
}
function formatCurrency(locale, currency, value) {
  const formattedLocale = locale.replace("_", "-");
  return new Intl.NumberFormat(formattedLocale, {
    style: "currency",
    currency
  }).format(value);
}
const contexts = {
  SHOPPING_CART_CONTEXT: "shoppingCartContext",
  PRODUCT_CONTEXT: "productContext",
  CHANGED_PRODUCTS_CONTEXT: "changedProductsContext"
};
const events = {
  // See: https://github.com/adobe/commerce-events/blob/main/examples/events/open-cart.md
  OPEN_CART: "open-cart",
  // See: ??? (not documented in the commerce-events repo)
  //UPDATE_CART: 'update-cart',
  // See: https://github.com/adobe/commerce-events/blob/main/examples/events/add-to-cart.md
  ADD_TO_CART: "add-to-cart",
  // See: https://github.com/adobe/commerce-events/blob/main/examples/events/remove-from-cart.md
  REMOVE_FROM_CART: "remove-from-cart",
  // See: https://github.com/adobe/commerce-events/blob/main/examples/events/shopping-cart-view.md
  SHOPPING_CART_VIEW: "shopping-cart-view"
};
function getAdobeDataLayer() {
  window.adobeDataLayer = window.adobeDataLayer || [];
  return window.adobeDataLayer;
}
function setContext(name, data) {
  const adobeDataLayer = getAdobeDataLayer();
  adobeDataLayer.push({
    [name]: null
  });
  adobeDataLayer.push({
    [name]: data
  });
}
function pushEvent(event, additionalContext) {
  const adobeDataLayer = getAdobeDataLayer();
  adobeDataLayer.push((acdl) => {
    const state2 = acdl.getState ? acdl.getState() : {};
    acdl.push({
      event,
      eventInfo: {
        ...state2,
        ...additionalContext
      }
    });
  });
}
function publishOpenCartEvent(cart, addedItems, locale) {
  const shoppingCartContext = transformShoppingCart({
    cart,
    locale
  });
  setContext(contexts.SHOPPING_CART_CONTEXT, {
    ...shoppingCartContext
  });
  pushEvent(events.OPEN_CART);
  const shoppingCartItems = transformItems(addedItems, locale);
  shoppingCartItems.forEach((item) => {
    setContext(contexts.PRODUCT_CONTEXT, item.product);
    publishItemsUpdatedEvent(shoppingCartContext, [item], events.ADD_TO_CART);
  });
}
function publishShoppingCartViewEvent(cart, locale) {
  const shoppingCartContext = transformShoppingCart({
    cart,
    locale
  });
  setContext(contexts.SHOPPING_CART_CONTEXT, {
    ...shoppingCartContext
  });
  pushEvent(events.SHOPPING_CART_VIEW);
}
function publishItemsUpdatedEvent(shoppingCartContext, updatedItems, event) {
  const changedProductsContext = {
    items: updatedItems
  };
  setContext(contexts.SHOPPING_CART_CONTEXT, {
    ...shoppingCartContext
  });
  setContext(contexts.CHANGED_PRODUCTS_CONTEXT, {
    ...changedProductsContext
  });
  pushEvent(event);
}
function publishCartUpdateEvents(cart, updatedItems, locale) {
  const newShoppingCartContext = transformShoppingCart({
    cart,
    locale
  });
  const currentItems = newShoppingCartContext.items;
  const adobeDataLayer = getAdobeDataLayer();
  const currentState = adobeDataLayer.getState ? adobeDataLayer.getState() : {};
  const {
    shoppingCartContext: {
      items: previousItems = []
    } = {}
  } = currentState;
  updatedItems.forEach((updatedItem) => {
    const previousItem = previousItems.find((item) => item.id === updatedItem.uid);
    const currentItem = currentItems.find((item) => item.id === updatedItem.uid);
    if (!currentItem && !previousItem) {
      return;
    }
    if (!previousItem && currentItem) {
      setContext(contexts.PRODUCT_CONTEXT, currentItem.product);
      publishItemsUpdatedEvent(newShoppingCartContext, [currentItem], events.ADD_TO_CART);
    } else if (previousItem && !currentItem) {
      setContext(contexts.PRODUCT_CONTEXT, previousItem.product);
      publishItemsUpdatedEvent(newShoppingCartContext, [previousItem], events.REMOVE_FROM_CART);
    } else if (currentItem.quantity > previousItem.quantity) {
      setContext(contexts.PRODUCT_CONTEXT, currentItem.product);
      publishItemsUpdatedEvent(newShoppingCartContext, [currentItem], events.ADD_TO_CART);
    } else {
      setContext(contexts.PRODUCT_CONTEXT, currentItem.product);
      publishItemsUpdatedEvent(newShoppingCartContext, [currentItem], events.REMOVE_FROM_CART);
    }
  });
}
const UPDATE_PRODUCTS_FROM_CART_MUTATION = `
  mutation UPDATE_PRODUCTS_FROM_CART_MUTATION(
      $cartId: String!, 
      $cartItems: [CartItemUpdateInput!]!,
      ${CART_ITEMS_PAGINATION_ARGUMENTS}
    ) {
    updateCartItems(
      input: {
        cart_id: $cartId
        cart_items: $cartItems  
      }
    ) {
      cart {
        ...CartFragment
      }

    }
  }
  ${CART_FRAGMENT}
`;
const updateProductsFromCart = async (items) => {
  const cartId = state.cartId;
  if (!cartId) {
    throw Error("Cart ID is not set");
  }
  return fetchGraphQl(UPDATE_PRODUCTS_FROM_CART_MUTATION, {
    variables: {
      cartId,
      cartItems: items.map(({
        uid,
        quantity
      }) => ({
        cart_item_uid: uid,
        quantity
      }))
    }
  }).then(({
    errors,
    data
  }) => {
    if (errors)
      return handleFetchError(errors);
    const payload = transformCart(data.updateCartItems.cart);
    events$1.emit("cart/updated", payload);
    events$1.emit("cart/data", payload);
    if (payload) {
      publishCartUpdateEvents(payload, items, state.locale || "en-US");
    }
    return payload;
  });
};
export {
  publishCartUpdateEvents as a,
  publishShoppingCartViewEvent as b,
  publishOpenCartEvent as p,
  updateProductsFromCart as u
};
//# sourceMappingURL=updateProductsFromCart__BgOPk2gVgl.js.map
