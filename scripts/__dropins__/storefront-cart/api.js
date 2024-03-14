import * as __WEBPACK_EXTERNAL_MODULE__dropins_tools_event_bus_js_9bef1f3f__ from "@dropins/tools/event-bus.js";
import * as __WEBPACK_EXTERNAL_MODULE__dropins_tools_fetch_graphql_js_fa439c6b__ from "@dropins/tools/fetch-graphql.js";
export const id = 0;
export const ids = [0];
export const modules = {

/***/ 8452:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Mf: () => (/* reexport */ addProductsToCart),
  Ej: () => (/* reexport */ initialize/* config */.E),
  iS: () => (/* reexport */ createEmptyCart),
  CA: () => (/* reexport */ fetch_graphql/* fetchGraphQl */.CA),
  KG: () => (/* reexport */ getCartData/* getCartData */.K),
  eE: () => (/* reexport */ fetch_graphql/* getConfig */.eE),
  ii: () => (/* reexport */ initialize/* initialize */.i),
  cx: () => (/* reexport */ initializeCart/* initializeCart */.c),
  __: () => (/* reexport */ fetch_graphql/* removeFetchGraphQlHeader */.__),
  a_: () => (/* reexport */ resetCart/* resetCart */.a),
  Ef: () => (/* reexport */ fetch_graphql/* setEndpoint */.Ef),
  o8: () => (/* reexport */ fetch_graphql/* setFetchGraphQlHeader */.o8),
  Uh: () => (/* reexport */ fetch_graphql/* setFetchGraphQlHeaders */.Uh),
  EW: () => (/* reexport */ updateProductsFromCart/* updateProductsFromCart */.E)
});

// EXTERNAL MODULE: ./api/initialize/initialize.ts + 2 modules
var initialize = __webpack_require__(3704);
;// CONCATENATED MODULE: ./api/initialize/index.ts

// EXTERNAL MODULE: ./api/fetch-graphql/fetch-graphql.ts
var fetch_graphql = __webpack_require__(3584);
;// CONCATENATED MODULE: ./api/fetch-graphql/index.ts

// EXTERNAL MODULE: ./lib/state.ts + 1 modules
var state = __webpack_require__(7218);
;// CONCATENATED MODULE: ./api/createEmptyCart/graphql/CreateCartMutation.ts
var CREATE_EMPTY_CART_MUTATION = "\n    mutation CREATE_EMPTY_CART_MUTATION {\n        createEmptyCart\n    }\n";
;// CONCATENATED MODULE: ./api/createEmptyCart/createEmptyCart.ts
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var createEmptyCart = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* () {
    var {
      disableGuestCart
    } = initialize/* config */.E.getConfig();

    // If guest cart is disabled, throw an error
    if (disableGuestCart) {
      throw new Error('Guest cart is disabled');
    }

    // Return new empty cart id
    return yield (0,fetch_graphql/* fetchGraphQl */.CA)(CREATE_EMPTY_CART_MUTATION).then(_ref2 => {
      var {
        data
      } = _ref2;
      var cartId = data.createEmptyCart;

      // Set cart id in state
      state/* state */.K.cartId = cartId;
      return cartId;
    });
  });
  return function createEmptyCart() {
    return _ref.apply(this, arguments);
  };
}();
// EXTERNAL MODULE: ./data/transforms/transform-cart.ts
var transform_cart = __webpack_require__(4020);
// EXTERNAL MODULE: external "@dropins/tools/event-bus.js"
var event_bus_js_ = __webpack_require__(8122);
// EXTERNAL MODULE: ./lib/fetch-error.ts
var fetch_error = __webpack_require__(764);
// EXTERNAL MODULE: ./api/graphql/CartFragment.ts
var CartFragment = __webpack_require__(1136);
;// CONCATENATED MODULE: ./api/addProductsToCart/graphql/AddProductsToCartMutation.ts

var ADD_PRODUCTS_TO_CART_MUTATION = "\n  mutation ADD_PRODUCTS_TO_CART_MUTATION(\n      $cartId: String!, \n      $cartItems: [CartItemInput!]!,\n      ".concat(CartFragment/* CART_ITEMS_PAGINATION_ARGUMENTS */.w, "\n    ) {\n    addProductsToCart(\n      cartId: $cartId\n      cartItems: $cartItems\n    ) {\n      cart {\n        ...CartFragment\n      }\n      user_errors {\n        code\n        message\n      }\n    }\n  }\n  ").concat(CartFragment/* CART_FRAGMENT */.A, "\n");
// EXTERNAL MODULE: ./lib/acdl.ts + 1 modules
var acdl = __webpack_require__(7192);
;// CONCATENATED MODULE: ./api/addProductsToCart/addProductsToCart.ts
function addProductsToCart_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function addProductsToCart_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { addProductsToCart_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { addProductsToCart_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var addProductsToCart = /*#__PURE__*/function () {
  var _ref = addProductsToCart_asyncToGenerator(function* (items) {
    var isNewCart = false;
    var cartId = state/* state */.K.cartId || (yield createEmptyCart().then(id => {
      isNewCart = true;
      return id;
    }));
    return (0,fetch_graphql/* fetchGraphQl */.CA)(ADD_PRODUCTS_TO_CART_MUTATION, {
      variables: {
        cartId,
        cartItems: items.map(_ref2 => {
          var {
            sku,
            parentSku: parent_sku,
            quantity,
            optionsUIDs: selected_options,
            enteredOptions: entered_options
          } = _ref2;
          return {
            sku,
            parent_sku,
            quantity,
            selected_options,
            entered_options
          };
        })
      }
    }).then(_ref3 => {
      var {
        errors,
        data
      } = _ref3;
      if (errors) return (0,fetch_error/* handleFetchError */.H)(errors);
      var payload = (0,transform_cart/* transformCart */.o)(data.addProductsToCart.cart);
      event_bus_js_.events.emit('cart/updated', payload);
      event_bus_js_.events.emit('cart/data', payload);
      if (payload) {
        var updatedItems = payload.items.filter(item => items.some(_ref4 => {
          var {
            sku
          } = _ref4;
          return sku === item.sku;
        }));
        if (isNewCart) {
          // Publish open cart event when the first item is added to the cart
          (0,acdl/* publishOpenCartEvent */.S8)(payload, updatedItems, state/* state */.K.locale || 'en-US');
        } else {
          // Otherwise publish cart update events
          (0,acdl/* publishCartUpdateEvents */.K6)(payload, updatedItems, state/* state */.K.locale || 'en-US');
        }
      }
      return payload;
    });
  });
  return function addProductsToCart(_x) {
    return _ref.apply(this, arguments);
  };
}();
;// CONCATENATED MODULE: ./api/addProductsToCart/index.ts

// EXTERNAL MODULE: ./api/getCartData/getCartData.ts + 1 modules
var getCartData = __webpack_require__(6696);
;// CONCATENATED MODULE: ./api/getCartData/index.ts

// EXTERNAL MODULE: ./api/initializeCart/initializeCart.ts + 1 modules
var initializeCart = __webpack_require__(2840);
;// CONCATENATED MODULE: ./api/initializeCart/index.ts

// EXTERNAL MODULE: ./api/updateProductsFromCart/updateProductsFromCart.ts + 1 modules
var updateProductsFromCart = __webpack_require__(1580);
;// CONCATENATED MODULE: ./api/updateProductsFromCart/index.ts

// EXTERNAL MODULE: ./api/resetCart/resetCart.ts
var resetCart = __webpack_require__(4444);
;// CONCATENATED MODULE: ./api/resetCart/index.ts

;// CONCATENATED MODULE: ./api/createEmptyCart/index.ts

;// CONCATENATED MODULE: ./api/index.ts









/***/ }),

/***/ 1580:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  E: () => (/* binding */ updateProductsFromCart)
});

// EXTERNAL MODULE: ./lib/state.ts + 1 modules
var state = __webpack_require__(7218);
// EXTERNAL MODULE: ./api/fetch-graphql/fetch-graphql.ts
var fetch_graphql = __webpack_require__(3584);
// EXTERNAL MODULE: ./lib/fetch-error.ts
var fetch_error = __webpack_require__(764);
// EXTERNAL MODULE: ./data/transforms/transform-cart.ts
var transform_cart = __webpack_require__(4020);
// EXTERNAL MODULE: external "@dropins/tools/event-bus.js"
var event_bus_js_ = __webpack_require__(8122);
// EXTERNAL MODULE: ./api/graphql/CartFragment.ts
var CartFragment = __webpack_require__(1136);
;// CONCATENATED MODULE: ./api/updateProductsFromCart/graphql/UpdateProductsMutation.ts

var UPDATE_PRODUCTS_FROM_CART_MUTATION = "\n  mutation UPDATE_PRODUCTS_FROM_CART_MUTATION(\n      $cartId: String!, \n      $cartItems: [CartItemUpdateInput!]!,\n      ".concat(CartFragment/* CART_ITEMS_PAGINATION_ARGUMENTS */.w, "\n    ) {\n    updateCartItems(\n      input: {\n        cart_id: $cartId\n        cart_items: $cartItems  \n      }\n    ) {\n      cart {\n        ...CartFragment\n      }\n\n    }\n  }\n  ").concat(CartFragment/* CART_FRAGMENT */.A, "\n");
// EXTERNAL MODULE: ./lib/acdl.ts + 1 modules
var acdl = __webpack_require__(7192);
;// CONCATENATED MODULE: ./api/updateProductsFromCart/updateProductsFromCart.ts
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var updateProductsFromCart = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (items) {
    var cartId = state/* state */.K.cartId;
    if (!cartId) {
      throw Error('Cart ID is not set');
    }
    return (0,fetch_graphql/* fetchGraphQl */.CA)(UPDATE_PRODUCTS_FROM_CART_MUTATION, {
      variables: {
        cartId,
        cartItems: items.map(_ref2 => {
          var {
            uid,
            quantity
          } = _ref2;
          return {
            cart_item_uid: uid,
            quantity
          };
        })
      }
    }).then(_ref3 => {
      var {
        errors,
        data
      } = _ref3;
      if (errors) return (0,fetch_error/* handleFetchError */.H)(errors);
      var payload = (0,transform_cart/* transformCart */.o)(data.updateCartItems.cart);
      event_bus_js_.events.emit('cart/updated', payload);
      event_bus_js_.events.emit('cart/data', payload);
      if (payload) {
        // Publish cart update events
        (0,acdl/* publishCartUpdateEvents */.K6)(payload, items, state/* state */.K.locale || 'en-US');
      }
      return payload;
    });
  });
  return function updateProductsFromCart(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ 7192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  K6: () => (/* binding */ publishCartUpdateEvents),
  S8: () => (/* binding */ publishOpenCartEvent),
  Ws: () => (/* binding */ publishShoppingCartViewEvent)
});

// UNUSED EXPORTS: contexts, events, getAdobeDataLayer

;// CONCATENATED MODULE: ./data/transforms/acdl-context.ts
function transformShoppingCart(params) {
  var {
    cart,
    locale = 'en-US'
  } = params;
  return {
    id: cart.id,
    items: transformItems(cart.items, locale),
    prices: {
      subtotalExcludingTax: cart.subtotal.excludingTax,
      subtotalIncludingTax: cart.subtotal.includingTax
    },
    totalQuantity: cart.totalQuantity,
    possibleOnepageCheckout: undefined,
    giftMessageSelected: undefined,
    giftWrappingSelected: undefined,
    source: undefined
  };
}
function transformItems(items, locale) {
  return items.map(item => {
    var _item$discount;
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
        topLevelSku: undefined,
        specialToDate: undefined,
        specialFromDate: undefined,
        newToDate: undefined,
        newFromDate: undefined,
        createdAt: undefined,
        updatedAt: undefined,
        manufacturer: undefined,
        countryOfManufacture: undefined,
        categories: item.url.categories,
        productType: undefined,
        pricing: {
          regularPrice: item.regularPrice.value,
          minimalPrice: undefined,
          maximalPrice: undefined,
          specialPrice: (_item$discount = item.discount) === null || _item$discount === void 0 ? void 0 : _item$discount.value,
          tierPricing: undefined,
          currencyCode: item.regularPrice.currency
        },
        canonicalUrl: item.url.urlKey,
        mainImageUrl: item.image.src,
        image: {
          src: item.image.src,
          alt: item.image.alt
        }
      },
      configurableOptions: undefined,
      quantity: item.quantity
    };
  });
}
function formatCurrency(locale, currency, value) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency
  }).format(value);
}
;// CONCATENATED MODULE: ./lib/acdl.ts
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* Publish functions for the Adobe Client Data Layer (ACDL) */


/**
 * See: https://github.com/adobe/commerce-events/blob/main/packages/storefront-events-sdk/src/contexts.ts
 */
var contexts = {
  SHOPPING_CART_CONTEXT: 'shoppingCartContext',
  PRODUCT_CONTEXT: 'productContext',
  CHANGED_PRODUCTS_CONTEXT: 'changedProductsContext'
};

/**
 * See: https://github.com/adobe/commerce-events/blob/main/packages/storefront-events-sdk/src/events.ts
 */
var events = {
  // See: https://github.com/adobe/commerce-events/blob/main/examples/events/open-cart.md
  OPEN_CART: 'open-cart',
  // See: ??? (not documented in the commerce-events repo)
  //UPDATE_CART: 'update-cart',
  // See: https://github.com/adobe/commerce-events/blob/main/examples/events/add-to-cart.md
  ADD_TO_CART: 'add-to-cart',
  // See: https://github.com/adobe/commerce-events/blob/main/examples/events/remove-from-cart.md
  REMOVE_FROM_CART: 'remove-from-cart',
  // See: https://github.com/adobe/commerce-events/blob/main/examples/events/shopping-cart-view.md
  SHOPPING_CART_VIEW: 'shopping-cart-view'
};
function getAdobeDataLayer() {
  // @ts-ignore
  window.adobeDataLayer = window.adobeDataLayer || [];
  // @ts-ignore
  return window.adobeDataLayer;
}

/**
 * Sets a context in the Adobe Client Data Layer (ACDL)
 * Logic based on: https://github.com/adobe/commerce-events/blob/main/packages/storefront-events-sdk/src/Base.ts#L6
 */
function setContext(name, data) {
  var adobeDataLayer = getAdobeDataLayer();

  // Clear existing context
  adobeDataLayer.push({
    [name]: null
  });

  // Set new context
  adobeDataLayer.push({
    [name]: data
  });
}

/**
 * Pushes an event to the Adobe Client Data Layer (ACDL)
 * Logic based on: https://github.com/adobe/commerce-events/blob/1973d0ce28471ef190fa06dad6359ffa0ab51db6/packages/storefront-events-sdk/src/Base.ts#L34
 */
function pushEvent(event, additionalContext) {
  var adobeDataLayer = getAdobeDataLayer();
  adobeDataLayer.push(acdl => {
    var state = acdl.getState ? acdl.getState() : {};
    acdl.push({
      event,
      eventInfo: _objectSpread(_objectSpread({}, state), additionalContext)
    });
  });
}

// Triggered when a new cart is created, which is when a product is added to an empty cart.
function publishOpenCartEvent(cart, addedItems, locale) {
  var shoppingCartContext = transformShoppingCart({
    cart,
    locale
  });

  // Set context and push open cart event
  setContext(contexts.SHOPPING_CART_CONTEXT, _objectSpread({}, shoppingCartContext));
  pushEvent(events.OPEN_CART);

  // Set context and push add to cart event for each updated item
  var shoppingCartItems = transformItems(addedItems, locale);
  shoppingCartItems.forEach(item => {
    setContext(contexts.PRODUCT_CONTEXT, item.product);
    publishItemsUpdatedEvent(shoppingCartContext, [item], events.ADD_TO_CART);
  });
}

// Triggered when any cart page loads.
function publishShoppingCartViewEvent(cart, locale) {
  var shoppingCartContext = transformShoppingCart({
    cart,
    locale
  });
  setContext(contexts.SHOPPING_CART_CONTEXT, _objectSpread({}, shoppingCartContext));
  pushEvent(events.SHOPPING_CART_VIEW);
}

// A re-usable function to publish events when items are added to, or removed from the cart.
function publishItemsUpdatedEvent(shoppingCartContext, updatedItems, event) {
  var changedProductsContext = {
    items: updatedItems
  };
  setContext(contexts.SHOPPING_CART_CONTEXT, _objectSpread({}, shoppingCartContext));
  setContext(contexts.CHANGED_PRODUCTS_CONTEXT, _objectSpread({}, changedProductsContext));
  pushEvent(event);
}
function publishCartUpdateEvents(cart, updatedItems, locale) {
  var newShoppingCartContext = transformShoppingCart({
    cart,
    locale
  });
  var currentItems = newShoppingCartContext.items;
  var adobeDataLayer = getAdobeDataLayer();
  var currentState = adobeDataLayer.getState ? adobeDataLayer.getState() : {};
  var {
    shoppingCartContext: {
      items: previousItems = []
    } = {}
  } = currentState;
  updatedItems.forEach(updatedItem => {
    var previousItem = previousItems.find(item => item.id === updatedItem.uid);
    var currentItem = currentItems.find(item => item.id === updatedItem.uid);
    if (!currentItem && !previousItem) {
      // Not enough data available to publish an event
      // Adobe Data Layer possibly not initialized yet
      return;
    }
    if (!previousItem && currentItem) {
      // Publish add to cart event for the item added
      setContext(contexts.PRODUCT_CONTEXT, currentItem.product);
      publishItemsUpdatedEvent(newShoppingCartContext, [currentItem], events.ADD_TO_CART);
    } else if (previousItem && !currentItem) {
      // Publish remove from cart event for the item removed
      setContext(contexts.PRODUCT_CONTEXT, previousItem.product);
      publishItemsUpdatedEvent(newShoppingCartContext, [previousItem], events.REMOVE_FROM_CART);
    } else if (currentItem.quantity > previousItem.quantity) {
      // Publish add to cart event for the item increased
      setContext(contexts.PRODUCT_CONTEXT, currentItem.product);
      publishItemsUpdatedEvent(newShoppingCartContext, [currentItem], events.ADD_TO_CART);
    } else {
      // Publish remove from cart event for the item decreased
      setContext(contexts.PRODUCT_CONTEXT, currentItem.product);
      publishItemsUpdatedEvent(newShoppingCartContext, [currentItem], events.REMOVE_FROM_CART);
    }
  });
}

/***/ }),

/***/ 8122:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
module.exports = x({ ["events"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_event_bus_js_9bef1f3f__.events) });

/***/ }),

/***/ 8616:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
module.exports = x({ ["FetchGraphQL"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_fetch_graphql_js_fa439c6b__.FetchGraphQL) });

/***/ })

};
;

// load runtime
import __webpack_require__ from "./runtime.js";
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
import * as __webpack_chunk_0__ from "./218.js";
__webpack_require__.C(__webpack_chunk_0__);
import * as __webpack_chunk_1__ from "./api.js";
__webpack_require__.C(__webpack_chunk_1__);
var __webpack_exports__ = __webpack_exec__(8452);
var __webpack_exports__addProductsToCart = __webpack_exports__.Mf;
var __webpack_exports__config = __webpack_exports__.Ej;
var __webpack_exports__createEmptyCart = __webpack_exports__.iS;
var __webpack_exports__fetchGraphQl = __webpack_exports__.CA;
var __webpack_exports__getCartData = __webpack_exports__.KG;
var __webpack_exports__getConfig = __webpack_exports__.eE;
var __webpack_exports__initialize = __webpack_exports__.ii;
var __webpack_exports__initializeCart = __webpack_exports__.cx;
var __webpack_exports__removeFetchGraphQlHeader = __webpack_exports__.__;
var __webpack_exports__resetCart = __webpack_exports__.a_;
var __webpack_exports__setEndpoint = __webpack_exports__.Ef;
var __webpack_exports__setFetchGraphQlHeader = __webpack_exports__.o8;
var __webpack_exports__setFetchGraphQlHeaders = __webpack_exports__.Uh;
var __webpack_exports__updateProductsFromCart = __webpack_exports__.EW;
export { __webpack_exports__addProductsToCart as addProductsToCart, __webpack_exports__config as config, __webpack_exports__createEmptyCart as createEmptyCart, __webpack_exports__fetchGraphQl as fetchGraphQl, __webpack_exports__getCartData as getCartData, __webpack_exports__getConfig as getConfig, __webpack_exports__initialize as initialize, __webpack_exports__initializeCart as initializeCart, __webpack_exports__removeFetchGraphQlHeader as removeFetchGraphQlHeader, __webpack_exports__resetCart as resetCart, __webpack_exports__setEndpoint as setEndpoint, __webpack_exports__setFetchGraphQlHeader as setFetchGraphQlHeader, __webpack_exports__setFetchGraphQlHeaders as setFetchGraphQlHeaders, __webpack_exports__updateProductsFromCart as updateProductsFromCart };
