export const id = 580;
export const ids = [580];
export const modules = {

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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var updateProductsFromCart = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(items) {
    var cartId;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          cartId = state/* state */.K.cartId;
          if (cartId) {
            _context.next = 3;
            break;
          }
          throw Error('Cart ID is not set');
        case 3:
          return _context.abrupt("return", (0,fetch_graphql/* fetchGraphQl */.CA)(UPDATE_PRODUCTS_FROM_CART_MUTATION, {
            variables: {
              cartId: cartId,
              cartItems: items.map(function (_ref2) {
                var uid = _ref2.uid,
                  quantity = _ref2.quantity;
                return {
                  cart_item_uid: uid,
                  quantity: quantity
                };
              })
            }
          }).then(function (_ref3) {
            var errors = _ref3.errors,
              data = _ref3.data;
            if (errors) return (0,fetch_error/* handleFetchError */.H)(errors);
            var payload = (0,transform_cart/* transformCart */.o)(data.updateCartItems.cart);
            event_bus_js_.events.emit('cart/updated', payload);
            event_bus_js_.events.emit('cart/data', payload);
            if (payload) {
              // Publish cart update events
              (0,acdl/* publishCartUpdateEvents */.K6)(payload, items, state/* state */.K.locale || 'en-US');
            }
            return payload;
          }));
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
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
  var cart = params.cart,
    _params$locale = params.locale,
    locale = _params$locale === void 0 ? 'en-US' : _params$locale;
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
  return items.map(function (item) {
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
    currency: currency
  }).format(value);
}
;// CONCATENATED MODULE: ./lib/acdl.ts
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
  adobeDataLayer.push(_defineProperty({}, name, null));

  // Set new context
  adobeDataLayer.push(_defineProperty({}, name, data));
}

/**
 * Pushes an event to the Adobe Client Data Layer (ACDL)
 * Logic based on: https://github.com/adobe/commerce-events/blob/1973d0ce28471ef190fa06dad6359ffa0ab51db6/packages/storefront-events-sdk/src/Base.ts#L34
 */
function pushEvent(event, additionalContext) {
  var adobeDataLayer = getAdobeDataLayer();
  adobeDataLayer.push(function (acdl) {
    var state = acdl.getState ? acdl.getState() : {};
    acdl.push({
      event: event,
      eventInfo: _objectSpread(_objectSpread({}, state), additionalContext)
    });
  });
}

// Triggered when a new cart is created, which is when a product is added to an empty cart.
function publishOpenCartEvent(cart, addedItems, locale) {
  var shoppingCartContext = transformShoppingCart({
    cart: cart,
    locale: locale
  });

  // Set context and push open cart event
  setContext(contexts.SHOPPING_CART_CONTEXT, _objectSpread({}, shoppingCartContext));
  pushEvent(events.OPEN_CART);

  // Set context and push add to cart event for each updated item
  var shoppingCartItems = transformItems(addedItems, locale);
  shoppingCartItems.forEach(function (item) {
    setContext(contexts.PRODUCT_CONTEXT, item.product);
    publishItemsUpdatedEvent(shoppingCartContext, [item], events.ADD_TO_CART);
  });
}

// Triggered when any cart page loads.
function publishShoppingCartViewEvent(cart, locale) {
  var shoppingCartContext = transformShoppingCart({
    cart: cart,
    locale: locale
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
    cart: cart,
    locale: locale
  });
  var currentItems = newShoppingCartContext.items;
  var adobeDataLayer = getAdobeDataLayer();
  var currentState = adobeDataLayer.getState ? adobeDataLayer.getState() : {};
  var _currentState$shoppin = currentState.shoppingCartContext,
    _currentState$shoppin2 = _currentState$shoppin === void 0 ? {} : _currentState$shoppin,
    _currentState$shoppin3 = _currentState$shoppin2.items,
    previousItems = _currentState$shoppin3 === void 0 ? [] : _currentState$shoppin3;
  updatedItems.forEach(function (updatedItem) {
    var previousItem = previousItems.find(function (item) {
      return item.id === updatedItem.uid;
    });
    var currentItem = currentItems.find(function (item) {
      return item.id === updatedItem.uid;
    });
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

/***/ })

};
