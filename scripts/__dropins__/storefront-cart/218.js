export const id = 218;
export const ids = [218];
export const modules = {

/***/ 1188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ setImageParamsKeyMap),
/* harmony export */   c: () => (/* binding */ getImageParamsKeyMap)
/* harmony export */ });
class ImageParamsKeyMap {
  get map() {
    return this._map;
  }
  set map(value) {
    this._map = value;
  }
  getMethods() {
    return {
      setMap: value => {
        this.map = value;
      },
      getMap: () => this.map
    };
  }
}
var keyMap = new ImageParamsKeyMap();
var {
  setMap: setImageParamsKeyMap,
  getMap: getImageParamsKeyMap
} = keyMap.getMethods();

/***/ }),

/***/ 3584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CA: () => (/* binding */ fetchGraphQl),
/* harmony export */   Ef: () => (/* binding */ setEndpoint),
/* harmony export */   Uh: () => (/* binding */ setFetchGraphQlHeaders),
/* harmony export */   __: () => (/* binding */ removeFetchGraphQlHeader),
/* harmony export */   eE: () => (/* binding */ getConfig),
/* harmony export */   o8: () => (/* binding */ setFetchGraphQlHeader)
/* harmony export */ });
/* harmony import */ var _adobe_fetch_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8616);

var {
  setEndpoint,
  setFetchGraphQlHeader,
  removeFetchGraphQlHeader,
  setFetchGraphQlHeaders,
  fetchGraphQl,
  getConfig
} = new _adobe_fetch_graphql__WEBPACK_IMPORTED_MODULE_0__.FetchGraphQL().getMethods();

/***/ }),

/***/ 6696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  K: () => (/* binding */ getCartData)
});

// EXTERNAL MODULE: ./api/fetch-graphql/fetch-graphql.ts
var fetch_graphql = __webpack_require__(3584);
// EXTERNAL MODULE: ./lib/fetch-error.ts
var fetch_error = __webpack_require__(764);
// EXTERNAL MODULE: ./lib/state.ts + 1 modules
var state = __webpack_require__(7218);
// EXTERNAL MODULE: ./data/transforms/transform-cart.ts
var transform_cart = __webpack_require__(4020);
// EXTERNAL MODULE: ./api/graphql/CartFragment.ts
var CartFragment = __webpack_require__(1136);
;// CONCATENATED MODULE: ./api/getCartData/graphql/CartQuery.ts

var GUEST_CART_QUERY = "\n  query GUEST_CART_QUERY(\n      $cartId: String!,\n      ".concat(CartFragment/* CART_ITEMS_PAGINATION_ARGUMENTS */.w, "\n    ) {\n    cart(cart_id: $cartId){\n      ...CartFragment\n    }\n  }\n  \n  ").concat(CartFragment/* CART_FRAGMENT */.A, "\n");
var CUSTOMER_CART_QUERY = "\n  query CUSTOMER_CART_QUERY(\n      ".concat(CartFragment/* CART_ITEMS_PAGINATION_ARGUMENTS */.w, "\n    ) {\n    cart: customerCart {\n      ...CartFragment\n    }\n  }\n\n  ").concat(CartFragment/* CART_FRAGMENT */.A, "\n");
;// CONCATENATED MODULE: ./api/getCartData/getCartData.ts
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var getCartData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* () {
    var authenticated = state/* state */.K.authenticated;
    var cartId = state/* state */.K.cartId;

    // Customer Cart
    if (authenticated) {
      return (0,fetch_graphql/* fetchGraphQl */.CA)(CUSTOMER_CART_QUERY, {
        method: 'GET'
      }).then(_ref2 => {
        var {
          errors,
          data
        } = _ref2;
        if (errors) return (0,fetch_error/* handleFetchError */.H)(errors);
        return (0,transform_cart/* transformCart */.o)(data.cart);
      });
    }

    // Guest Cart
    if (!cartId) throw new Error('No cart ID found');
    return (0,fetch_graphql/* fetchGraphQl */.CA)(GUEST_CART_QUERY, {
      method: 'GET',
      cache: 'no-cache',
      variables: {
        cartId
      }
    }).then(_ref3 => {
      var {
        errors,
        data
      } = _ref3;
      if (errors) return (0,fetch_error/* handleFetchError */.H)(errors);
      return (0,transform_cart/* transformCart */.o)(data.cart);
    });
  });
  return function getCartData() {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ 1136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ CART_FRAGMENT),
/* harmony export */   w: () => (/* binding */ CART_ITEMS_PAGINATION_ARGUMENTS)
/* harmony export */ });
var CART_FRAGMENT = "\nfragment CartFragment on Cart {\n  id\n  total_quantity\n  prices {\n    subtotal_with_discount_excluding_tax {\n      currency\n      value\n    }\n    subtotal_including_tax {\n      currency\n      value\n    }\n    subtotal_excluding_tax {\n      currency\n      value\n    }\n    grand_total {\n      currency\n      value\n    }\n    applied_taxes {\n      label,\n      amount {\n        value\n        currency\n      }\n    }\n    discounts {\n      amount {\n        value\n        currency\n      }\n      label\n    }\n  }\n  itemsV2 (\n      pageSize:$pageSize,\n      currentPage:$currentPage,\n      sort: $itemsSortInput\n    ) {\n    items {\n      uid\n      quantity\n    \n      errors {\n        code\n        message\n      }\n      \n      prices {\n        price {\n          value\n          currency\n        }\n        total_item_discount {\n          value\n          currency\n        }\n        row_total {\n          value\n          currency\n        }\n      }\n  \n      product {\n        name\n        sku\n        thumbnail {\n          url\n          label\n        }\n        url_key\n        url_suffix\n        categories {\n          url_path\n          url_key\n        }\n        price_range {\n          maximum_price {\n            regular_price {\n              value\n              currency\n            }\n          }\n        }\n      }\n      ...on SimpleCartItem {\n        customizable_options {\n          customizable_option_uid\n          label\n          values {\n            label\n          }\n        }\n      }\n      ... on ConfigurableCartItem {\n        configurable_options {\n          configurable_product_option_uid\n          option_label\n          value_label\n        }\n        configured_variant {\n          uid\n          thumbnail {\n            label\n            url\n          }\n        }\n      }\n      ... on DownloadableCartItem {\n        links {\n          sort_order\n          title\n        }\n      }\n      ... on BundleCartItem {\n        bundle_options {\n          uid\n          label\n          values {\n            uid\n            label\n            quantity\n            price\n          }\n        }\n      }\n    }\n  }\n}\n";

// Default values for pagination and sorting for cart items
var CART_ITEMS_PAGINATION_ARGUMENTS = "\n  $pageSize: Int! = 100,\n  $currentPage: Int! = 1,\n  $itemsSortInput: QuoteItemsSortInput! = {field: CREATED_AT, order: DESC}\n";

/***/ }),

/***/ 3704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  E: () => (/* binding */ config),
  i: () => (/* binding */ initialize)
});

;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/lib/config.ts
class Config {
  constructor(initialConfig) {
    this.config = initialConfig;
  }
  getConfig() {
    return this.config;
  }
  setConfig(newConfig) {
    this.config = newConfig;
  }
}
// EXTERNAL MODULE: ../../ElsieSDK/packages/elsie/src/lib/image-params-keymap.ts
var image_params_keymap = __webpack_require__(1188);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/lib/initializer.ts
var _excluded = ["imageParamsKeyMap"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

class Initializer {
  constructor(_ref) {
    var {
      init,
      listeners
    } = _ref;
    _defineProperty(this, "_listeners", []);
    _defineProperty(this, "config", new Config({}));
    this.listeners = config => {
      // Unbind existing listeners
      this._listeners.forEach(listener => listener.off());
      // Bind new listeners
      return this._listeners = listeners(config);
    };
    this.init = options => {
      var _ref2 = options,
        {
          imageParamsKeyMap
        } = _ref2,
        rest = _objectWithoutProperties(_ref2, _excluded);
      this.config.setConfig(_objectSpread(_objectSpread({}, this.config.getConfig()), rest));
      (0,image_params_keymap/* setImageParamsKeyMap */.A)(imageParamsKeyMap);
      return init(options);
    };
  }
}
class initializers {
  static register(initializer, options) {
    if (initializers._mounted) {
      var _initializer$listener, _initializer$init;
      (_initializer$listener = initializer.listeners) === null || _initializer$listener === void 0 || _initializer$listener.call(initializer, options);
      (_initializer$init = initializer.init) === null || _initializer$init === void 0 || _initializer$init.call(initializer, options);
    }
    initializers._initializers.push([initializer, options]);
  }
  static mount() {
    var _initializers$_initia, _initializers$_initia2;
    initializers._mounted = true;
    // In this specific order
    // 1. Bind events
    (_initializers$_initia = initializers._initializers) === null || _initializers$_initia === void 0 || _initializers$_initia.forEach(_ref3 => {
      var _initializer$listener2;
      var [initializer, options] = _ref3;
      (_initializer$listener2 = initializer.listeners) === null || _initializer$listener2 === void 0 || _initializer$listener2.call(initializer, options);
    });

    // 2. Initialize APIs
    (_initializers$_initia2 = initializers._initializers) === null || _initializers$_initia2 === void 0 || _initializers$_initia2.forEach(_ref4 => {
      var _initializer$init2;
      var [initializer, options] = _ref4;
      (_initializer$init2 = initializer.init) === null || _initializer$init2 === void 0 || _initializer$init2.call(initializer, _objectSpread({
        imageParamsKeyMap: initializers._imageParamsKeyMap
      }, options));
    });
  }
  static setImageParamKeys(params) {
    initializers._imageParamsKeyMap = params;
  }
}
_defineProperty(initializers, "_initializers", []);
_defineProperty(initializers, "_mounted", false);
_defineProperty(initializers, "_imageParamsKeyMap", undefined);
// EXTERNAL MODULE: ./api/initializeCart/initializeCart.ts + 1 modules
var initializeCart = __webpack_require__(2840);
// EXTERNAL MODULE: ./api/resetCart/resetCart.ts
var resetCart = __webpack_require__(4444);
// EXTERNAL MODULE: ./lib/state.ts + 1 modules
var state = __webpack_require__(7218);
// EXTERNAL MODULE: external "@dropins/tools/event-bus.js"
var event_bus_js_ = __webpack_require__(8122);
// EXTERNAL MODULE: ./lib/persisted-data.ts
var persisted_data = __webpack_require__(2336);
;// CONCATENATED MODULE: ./api/initialize/initialize.ts
function initialize_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function initialize_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? initialize_ownKeys(Object(t), !0).forEach(function (r) { initialize_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : initialize_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function initialize_defineProperty(obj, key, value) { key = initialize_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function initialize_toPropertyKey(t) { var i = initialize_toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function initialize_toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var initialize = new Initializer({
  init: function () {
    var _init = _asyncToGenerator(function* (_config) {
      var config = initialize_objectSpread({
        disableGuestCart: false,
        expiresInDays: 30
      }, _config);
      initialize.config.setConfig(config);

      // Initialize cart
      (0,initializeCart/* initializeCart */.c)();
    });
    function init(_x) {
      return _init.apply(this, arguments);
    }
    return init;
  }(),
  listeners: () => [event_bus_js_.events.on('authenticated', /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* (authenticated) {
      if (authenticated !== state/* state */.K.authenticated) {
        state/* state */.K.authenticated = authenticated;
        (0,initializeCart/* initializeCart */.c)().catch(console.error);
      }
    });
    return function (_x2) {
      return _ref.apply(this, arguments);
    };
  }()), event_bus_js_.events.on('locale', /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(function* (locale) {
      if (locale !== state/* state */.K.locale) {
        state/* state */.K.locale = locale;
        (0,initializeCart/* initializeCart */.c)().catch(console.error);
      }
    });
    return function (_x3) {
      return _ref2.apply(this, arguments);
    };
  }()), event_bus_js_.events.on('cart/reset', () => {
    (0,resetCart/* resetCart */.a)().catch(console.error);
  }), event_bus_js_.events.on('cart/data', payload => {
    (0,persisted_data/* setPersistedData */.y)(payload);
  })]
});
var config = initialize.config;

/***/ }),

/***/ 2840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ initializeCart)
});

// EXTERNAL MODULE: external "@dropins/tools/event-bus.js"
var event_bus_js_ = __webpack_require__(8122);
// EXTERNAL MODULE: ./lib/state.ts + 1 modules
var state = __webpack_require__(7218);
// EXTERNAL MODULE: ./api/getCartData/getCartData.ts + 1 modules
var getCartData = __webpack_require__(6696);
// EXTERNAL MODULE: ./api/fetch-graphql/fetch-graphql.ts
var fetch_graphql = __webpack_require__(3584);
// EXTERNAL MODULE: ./api/initialize/initialize.ts + 2 modules
var initialize = __webpack_require__(3704);
// EXTERNAL MODULE: ./api/graphql/CartFragment.ts
var CartFragment = __webpack_require__(1136);
;// CONCATENATED MODULE: ./api/initializeCart/graphql/MergeCartsMutation.ts

var MERGE_CARTS_MUTATION = "\n  mutation MERGE_CARTS_MUTATION(\n      $guestCartId: String!, \n      $customerCartId: String!,\n      ".concat(CartFragment/* CART_ITEMS_PAGINATION_ARGUMENTS */.w, "\n    ) {\n    mergeCarts(\n      source_cart_id: $guestCartId,\n      destination_cart_id: $customerCartId\n    ) {\n      ...CartFragment \n    }\n  }\n\n  ").concat(CartFragment/* CART_FRAGMENT */.A, "\n");
// EXTERNAL MODULE: ./data/transforms/transform-cart.ts
var transform_cart = __webpack_require__(4020);
;// CONCATENATED MODULE: ./api/initializeCart/initializeCart.ts
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var initializeCart = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* () {
    var payload = state/* state */.K.authenticated ? yield getCustomerCartPayload() : yield getGuestCartPayload();
    event_bus_js_.events.emit('cart/initialized', payload);
    event_bus_js_.events.emit('cart/data', payload);
    return payload;
  });
  return function initializeCart() {
    return _ref.apply(this, arguments);
  };
}();
function getCustomerCartPayload() {
  return _getCustomerCartPayload.apply(this, arguments);
}
function _getCustomerCartPayload() {
  _getCustomerCartPayload = _asyncToGenerator(function* () {
    var existingCartId = state/* state */.K.cartId;
    var cart = yield (0,getCartData/* getCartData */.K)();
    if (!cart) return null;

    // set cartid in the state
    state/* state */.K.cartId = cart.id;

    // If the existing cart is the same as the fetched cart, return the fetched cart
    if (!existingCartId || cart.id === existingCartId) return cart;

    // If the existing cart is not the same as the fetched cart, merge the carts
    return yield (0,fetch_graphql/* fetchGraphQl */.CA)(MERGE_CARTS_MUTATION, {
      variables: {
        guestCartId: existingCartId,
        customerCartId: cart.id
      }
    }).then(_ref2 => {
      var {
        data
      } = _ref2;
      return (0,transform_cart/* transformCart */.o)(data.mergeCarts);
    }).catch(() => {
      // gracefully handle merge error, continue with existing cart
      console.error('Could not merge carts');
      return cart;
    });
  });
  return _getCustomerCartPayload.apply(this, arguments);
}
function getGuestCartPayload() {
  return _getGuestCartPayload.apply(this, arguments);
}
function _getGuestCartPayload() {
  _getGuestCartPayload = _asyncToGenerator(function* () {
    // If guest cart is not enabled, return null
    if (initialize/* config */.E.getConfig().disableGuestCart === true) {
      return null;
    }

    // If there is not a cart id in the state, return null
    if (!state/* state */.K.cartId) {
      return null;
    }

    // If there is a cart id in the state, return the cart data
    try {
      return yield (0,getCartData/* getCartData */.K)();
    } catch (error) {
      console.error(error);
      return null;
    }
  });
  return _getGuestCartPayload.apply(this, arguments);
}

/***/ }),

/***/ 4444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ resetCart)
/* harmony export */ });
/* harmony import */ var _lib_state_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7218);
/* harmony import */ var _index_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2840);


var resetCart = () => {
  _lib_state_ts__WEBPACK_IMPORTED_MODULE_0__/* .state */ .K.cartId = null;
  _lib_state_ts__WEBPACK_IMPORTED_MODULE_0__/* .state */ .K.authenticated = false;
  return (0,_index_ts__WEBPACK_IMPORTED_MODULE_1__/* .initializeCart */ .c)();
};

/***/ }),

/***/ 4020:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ transformCart)
/* harmony export */ });
function transformCart(data) {
  var _data$prices$subtotal, _data$prices$subtotal2, _data$prices$subtotal3, _data$prices$subtotal4, _data$prices$subtotal5, _data$prices$subtotal6;
  if (!data) return null;
  return {
    id: data.id,
    totalQuantity: data.total_quantity,
    errors: transformErrors(data === null || data === void 0 ? void 0 : data.itemsV2),
    items: transformItems(data === null || data === void 0 ? void 0 : data.itemsV2),
    total: {
      value: data.prices.grand_total.value,
      currency: data.prices.grand_total.currency
    },
    subtotal: {
      excludingTax: {
        value: (_data$prices$subtotal = data.prices.subtotal_excluding_tax) === null || _data$prices$subtotal === void 0 ? void 0 : _data$prices$subtotal.value,
        currency: (_data$prices$subtotal2 = data.prices.subtotal_excluding_tax) === null || _data$prices$subtotal2 === void 0 ? void 0 : _data$prices$subtotal2.currency
      },
      includingTax: {
        value: (_data$prices$subtotal3 = data.prices.subtotal_including_tax) === null || _data$prices$subtotal3 === void 0 ? void 0 : _data$prices$subtotal3.value,
        currency: (_data$prices$subtotal4 = data.prices.subtotal_including_tax) === null || _data$prices$subtotal4 === void 0 ? void 0 : _data$prices$subtotal4.currency
      },
      includingDiscountOnly: {
        value: (_data$prices$subtotal5 = data.prices.subtotal_with_discount_excluding_tax) === null || _data$prices$subtotal5 === void 0 ? void 0 : _data$prices$subtotal5.value,
        currency: (_data$prices$subtotal6 = data.prices.subtotal_with_discount_excluding_tax) === null || _data$prices$subtotal6 === void 0 ? void 0 : _data$prices$subtotal6.currency
      }
    },
    appliedTaxes: transformTotalPriceModifiers(data.prices.applied_taxes),
    totalTax: calculateTotalTax(data.prices.applied_taxes),
    appliedDiscounts: transformTotalPriceModifiers(data.prices.discounts)
  };
}

// Need to calculate total tax amount since it's not provided by GraphQL
function calculateTotalTax(data) {
  if (!(data !== null && data !== void 0 && data.length)) return null;
  return data.reduce((acc, item) => {
    return {
      value: acc.value + item.amount.value,
      currency: item.amount.currency
    };
  }, {
    value: 0,
    currency: ''
  });
}
function transformItems(data) {
  var _data$items;
  if (!(data !== null && data !== void 0 && (_data$items = data.items) !== null && _data$items !== void 0 && _data$items.length)) return [];
  return data.items.map(item => {
    var _item$product$price_r, _item$product$price_r2, _item$product$price_r3;
    return {
      uid: item.uid,
      url: {
        urlKey: item.product.url_key,
        categories: item.product.categories.map(category => category.url_key)
      },
      quantity: item.quantity,
      sku: item.product.sku,
      name: item.product.name,
      image: {
        src: item.product.thumbnail.url,
        alt: item.product.thumbnail.label
      },
      price: {
        value: item.prices.price.value,
        currency: item.prices.price.currency
      },
      total: {
        value: item.prices.row_total.value,
        currency: item.prices.row_total.currency
      },
      discount: {
        value: item.prices.total_item_discount.value,
        currency: item.prices.total_item_discount.currency
      },
      regularPrice: {
        value: (_item$product$price_r = item.product.price_range) === null || _item$product$price_r === void 0 ? void 0 : _item$product$price_r.maximum_price.regular_price.value,
        currency: (_item$product$price_r2 = item.product.price_range) === null || _item$product$price_r2 === void 0 ? void 0 : _item$product$price_r2.maximum_price.regular_price.currency
      },
      discounted: ((_item$product$price_r3 = item.product.price_range) === null || _item$product$price_r3 === void 0 ? void 0 : _item$product$price_r3.maximum_price.regular_price.value) * item.quantity !== item.prices.row_total.value,
      selectedOptions: transformSelectedOptions(item.configurable_options)
    };
  });
}
function transformErrors(data) {
  var _data$items2;
  var result = data === null || data === void 0 || (_data$items2 = data.items) === null || _data$items2 === void 0 ? void 0 : _data$items2.reduce((acc, item) => {
    var _item$errors;
    (_item$errors = item.errors) === null || _item$errors === void 0 || _item$errors.forEach(error => {
      acc.push({
        uid: item.uid,
        text: error.message
      });
    });
    return acc;
  }, []);
  return result !== null && result !== void 0 && result.length ? result : null;
}
function transformTotalPriceModifiers(data) {
  if (!(data !== null && data !== void 0 && data.length)) return [];
  return data.map(item => ({
    amount: {
      value: item.amount.value,
      currency: item.amount.currency
    },
    label: item.label
  }));
}
function transformSelectedOptions(data) {
  var selected = data === null || data === void 0 ? void 0 : data.map(option => ({
    uid: option.configurable_product_option_uid,
    label: option.option_label,
    value: option.value_label
  }));
  var selectedOptions = {};
  selected === null || selected === void 0 || selected.forEach(option => {
    selectedOptions[option.label] = option.value;
  });
  return Object.keys(selectedOptions).length > 0 ? selectedOptions : null;
}

/***/ }),

/***/ 764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ handleFetchError)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4444);


/** Actions */
var handleFetchError = errors => {
  var unauthorized = errors.findIndex(_ref => {
    var {
      extensions
    } = _ref;
    return (extensions === null || extensions === void 0 ? void 0 : extensions.category) === 'graphql-authorization';
  }) > -1;
  var missingCart = errors.findIndex(_ref2 => {
    var {
      extensions
    } = _ref2;
    return (extensions === null || extensions === void 0 ? void 0 : extensions.category) === 'graphql-no-such-entity';
  }) > -1;
  var errorMessage = errors.map(e => e.message).join(' ');

  // Reset cart data if unauthorized or missing cart
  if (unauthorized || missingCart) {
    (0,_api__WEBPACK_IMPORTED_MODULE_0__/* .resetCart */ .a)();
    console.error(errorMessage);
    return null;
  }
  throw Error(errorMessage);
};

/***/ }),

/***/ 2336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ getPersistedData),
/* harmony export */   y: () => (/* binding */ setPersistedData)
/* harmony export */ });
function setPersistedData(data) {
  if (data) {
    sessionStorage.setItem('DROPIN__CART__CART__DATA', JSON.stringify(data));
  } else {
    sessionStorage.removeItem('DROPIN__CART__CART__DATA');
  }
}
function getPersistedData() {
  var data = sessionStorage.getItem('DROPIN__CART__CART__DATA');
  if (data) return JSON.parse(data);
  return null;
}

/***/ }),

/***/ 7218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  K: () => (/* binding */ state)
});

// EXTERNAL MODULE: ./api/initialize/initialize.ts + 2 modules
var initialize = __webpack_require__(3704);
;// CONCATENATED MODULE: ./lib/cookies.ts
function getCookie(cookieName) {
  // Split the cookie string into an array of individual cookies
  var cookies = document.cookie.split(';');

  // Loop through the cookies to find the one with the specified name
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim(); // Remove leading and trailing spaces

    // Check if this cookie starts with the name you're looking for
    if (cookie.indexOf("".concat(cookieName, "=")) === 0) {
      // Extract and return the cookie's value
      return cookie.substring(cookieName.length + 1);
    }
  }

  // If the cookie is not found, return null
  return null;
}
;// CONCATENATED MODULE: ./lib/state.ts


var _state = (() => ({
  cartId: null,
  authenticated: false
}))();

// Proxy state to allow reactivity
var state = new Proxy(_state, {
  set(target, key, value) {
    // @ts-ignore
    target[key] = value;
    if (key === 'cartId') {
      if (value === null) {
        // remove cookie
        document.cookie = "DROPIN__CART__CART-ID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
        return true;
      }
      var {
        expiresInDays
      } = initialize/* config */.E.getConfig();
      var expires = new Date();
      expires.setDate(expires.getDate() + expiresInDays);
      // set cookie
      document.cookie = "DROPIN__CART__CART-ID=".concat(value, "; expires=").concat(expires.toUTCString(), "; path=/");
    }
    return true;
  },
  get(target, key) {
    if (key === 'cartId') {
      // get value from cookie
      return getCookie('DROPIN__CART__CART-ID');
    }
    return target[key];
  }
});

/***/ })

};
