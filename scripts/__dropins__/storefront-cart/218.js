export const id = 218;
export const ids = [218];
export const modules = {

/***/ 1188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ setImageParamsKeyMap),
/* harmony export */   c: () => (/* binding */ getImageParamsKeyMap)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ImageParamsKeyMap = /*#__PURE__*/function () {
  function ImageParamsKeyMap() {
    _classCallCheck(this, ImageParamsKeyMap);
  }
  _createClass(ImageParamsKeyMap, [{
    key: "map",
    get: function get() {
      return this._map;
    },
    set: function set(value) {
      this._map = value;
    }
  }, {
    key: "getMethods",
    value: function getMethods() {
      var _this = this;
      return {
        setMap: function setMap(value) {
          _this.map = value;
        },
        getMap: function getMap() {
          return _this.map;
        }
      };
    }
  }]);
  return ImageParamsKeyMap;
}();
var keyMap = new ImageParamsKeyMap();
var _keyMap$getMethods = keyMap.getMethods(),
  setImageParamsKeyMap = _keyMap$getMethods.setMap,
  getImageParamsKeyMap = _keyMap$getMethods.getMap;


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

var _FetchGraphQL$getMeth = new _adobe_fetch_graphql__WEBPACK_IMPORTED_MODULE_0__.FetchGraphQL().getMethods(),
  setEndpoint = _FetchGraphQL$getMeth.setEndpoint,
  setFetchGraphQlHeader = _FetchGraphQL$getMeth.setFetchGraphQlHeader,
  removeFetchGraphQlHeader = _FetchGraphQL$getMeth.removeFetchGraphQlHeader,
  setFetchGraphQlHeaders = _FetchGraphQL$getMeth.setFetchGraphQlHeaders,
  fetchGraphQl = _FetchGraphQL$getMeth.fetchGraphQl,
  getConfig = _FetchGraphQL$getMeth.getConfig;


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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var getCartData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var authenticated, cartId;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          authenticated = state/* state */.K.authenticated;
          cartId = state/* state */.K.cartId; // Customer Cart
          if (!authenticated) {
            _context.next = 4;
            break;
          }
          return _context.abrupt("return", (0,fetch_graphql/* fetchGraphQl */.CA)(CUSTOMER_CART_QUERY, {
            method: 'GET'
          }).then(function (_ref2) {
            var errors = _ref2.errors,
              data = _ref2.data;
            if (errors) return (0,fetch_error/* handleFetchError */.H)(errors);
            return (0,transform_cart/* transformCart */.o)(data.cart);
          }));
        case 4:
          if (cartId) {
            _context.next = 6;
            break;
          }
          throw new Error('No cart ID found');
        case 6:
          return _context.abrupt("return", (0,fetch_graphql/* fetchGraphQl */.CA)(GUEST_CART_QUERY, {
            method: 'GET',
            cache: 'no-cache',
            variables: {
              cartId: cartId
            }
          }).then(function (_ref3) {
            var errors = _ref3.errors,
              data = _ref3.data;
            if (errors) return (0,fetch_error/* handleFetchError */.H)(errors);
            return (0,transform_cart/* transformCart */.o)(data.cart);
          }));
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Config = /*#__PURE__*/function () {
  function Config(initialConfig) {
    _classCallCheck(this, Config);
    this.config = initialConfig;
  }
  _createClass(Config, [{
    key: "getConfig",
    value: function getConfig() {
      return this.config;
    }
  }, {
    key: "setConfig",
    value: function setConfig(newConfig) {
      this.config = newConfig;
    }
  }]);
  return Config;
}();
// EXTERNAL MODULE: ../../ElsieSDK/packages/elsie/src/lib/image-params-keymap.ts
var image_params_keymap = __webpack_require__(1188);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/lib/initializer.ts
var _excluded = ["imageParamsKeyMap"];
function initializer_typeof(o) { "@babel/helpers - typeof"; return initializer_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, initializer_typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function initializer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, initializer_toPropertyKey(descriptor.key), descriptor); } }
function initializer_createClass(Constructor, protoProps, staticProps) { if (protoProps) initializer_defineProperties(Constructor.prototype, protoProps); if (staticProps) initializer_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function initializer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = initializer_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function initializer_toPropertyKey(t) { var i = initializer_toPrimitive(t, "string"); return "symbol" == initializer_typeof(i) ? i : String(i); }
function initializer_toPrimitive(t, r) { if ("object" != initializer_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != initializer_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Initializer = /*#__PURE__*/initializer_createClass(function Initializer(_ref) {
  var _this = this;
  var init = _ref.init,
    listeners = _ref.listeners;
  initializer_classCallCheck(this, Initializer);
  _defineProperty(this, "_listeners", []);
  _defineProperty(this, "config", new Config({}));
  this.listeners = function (config) {
    // Unbind existing listeners
    _this._listeners.forEach(function (listener) {
      return listener.off();
    });
    // Bind new listeners
    return _this._listeners = listeners(config);
  };
  this.init = function (options) {
    var _ref2 = options,
      imageParamsKeyMap = _ref2.imageParamsKeyMap,
      rest = _objectWithoutProperties(_ref2, _excluded);
    _this.config.setConfig(_objectSpread(_objectSpread({}, _this.config.getConfig()), rest));
    (0,image_params_keymap/* setImageParamsKeyMap */.A)(imageParamsKeyMap);
    return init(options);
  };
});
var initializers = /*#__PURE__*/function () {
  function initializers() {
    initializer_classCallCheck(this, initializers);
  }
  initializer_createClass(initializers, null, [{
    key: "register",
    value: function register(initializer, options) {
      if (initializers._mounted) {
        var _initializer$listener, _initializer$init;
        (_initializer$listener = initializer.listeners) === null || _initializer$listener === void 0 || _initializer$listener.call(initializer, options);
        (_initializer$init = initializer.init) === null || _initializer$init === void 0 || _initializer$init.call(initializer, options);
      }
      initializers._initializers.push([initializer, options]);
    }
  }, {
    key: "mount",
    value: function mount() {
      var _initializers$_initia, _initializers$_initia2;
      initializers._mounted = true;
      // In this specific order
      // 1. Bind events
      (_initializers$_initia = initializers._initializers) === null || _initializers$_initia === void 0 || _initializers$_initia.forEach(function (_ref3) {
        var _initializer$listener2;
        var _ref4 = _slicedToArray(_ref3, 2),
          initializer = _ref4[0],
          options = _ref4[1];
        (_initializer$listener2 = initializer.listeners) === null || _initializer$listener2 === void 0 || _initializer$listener2.call(initializer, options);
      });

      // 2. Initialize APIs
      (_initializers$_initia2 = initializers._initializers) === null || _initializers$_initia2 === void 0 || _initializers$_initia2.forEach(function (_ref5) {
        var _initializer$init2;
        var _ref6 = _slicedToArray(_ref5, 2),
          initializer = _ref6[0],
          options = _ref6[1];
        (_initializer$init2 = initializer.init) === null || _initializer$init2 === void 0 || _initializer$init2.call(initializer, _objectSpread({
          imageParamsKeyMap: initializers._imageParamsKeyMap
        }, options));
      });
    }
  }, {
    key: "setImageParamKeys",
    value: function setImageParamKeys(params) {
      initializers._imageParamsKeyMap = params;
    }
  }]);
  return initializers;
}();
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
function initialize_typeof(o) { "@babel/helpers - typeof"; return initialize_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, initialize_typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == initialize_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(initialize_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function initialize_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function initialize_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? initialize_ownKeys(Object(t), !0).forEach(function (r) { initialize_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : initialize_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function initialize_defineProperty(obj, key, value) { key = initialize_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function initialize_toPropertyKey(t) { var i = initialize_toPrimitive(t, "string"); return "symbol" == initialize_typeof(i) ? i : String(i); }
function initialize_toPrimitive(t, r) { if ("object" != initialize_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != initialize_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var initialize = new Initializer({
  init: function () {
    var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_config) {
      var config;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            config = initialize_objectSpread({
              disableGuestCart: false,
              expiresInDays: 30
            }, _config);
            initialize.config.setConfig(config);

            // Initialize cart
            (0,initializeCart/* initializeCart */.c)();
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    function init(_x) {
      return _init.apply(this, arguments);
    }
    return init;
  }(),
  listeners: function listeners() {
    return [event_bus_js_.events.on('authenticated', /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(authenticated) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (authenticated !== state/* state */.K.authenticated) {
                state/* state */.K.authenticated = authenticated;
                (0,initializeCart/* initializeCart */.c)().catch(console.error);
              }
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function (_x2) {
        return _ref.apply(this, arguments);
      };
    }()), event_bus_js_.events.on('locale', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(locale) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (locale !== state/* state */.K.locale) {
                state/* state */.K.locale = locale;
                (0,initializeCart/* initializeCart */.c)().catch(console.error);
              }
            case 1:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      return function (_x3) {
        return _ref2.apply(this, arguments);
      };
    }()), event_bus_js_.events.on('cart/reset', function () {
      (0,resetCart/* resetCart */.a)().catch(console.error);
    }), event_bus_js_.events.on('cart/data', function (payload) {
      (0,persisted_data/* setPersistedData */.y)(payload);
    })];
  }
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var initializeCart = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var payload;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!state/* state */.K.authenticated) {
            _context.next = 6;
            break;
          }
          _context.next = 3;
          return getCustomerCartPayload();
        case 3:
          _context.t0 = _context.sent;
          _context.next = 9;
          break;
        case 6:
          _context.next = 8;
          return getGuestCartPayload();
        case 8:
          _context.t0 = _context.sent;
        case 9:
          payload = _context.t0;
          event_bus_js_.events.emit('cart/initialized', payload);
          event_bus_js_.events.emit('cart/data', payload);
          return _context.abrupt("return", payload);
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function initializeCart() {
    return _ref.apply(this, arguments);
  };
}();
function getCustomerCartPayload() {
  return _getCustomerCartPayload.apply(this, arguments);
}
function _getCustomerCartPayload() {
  _getCustomerCartPayload = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var existingCartId, cart;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          existingCartId = state/* state */.K.cartId;
          _context2.next = 3;
          return (0,getCartData/* getCartData */.K)();
        case 3:
          cart = _context2.sent;
          if (cart) {
            _context2.next = 6;
            break;
          }
          return _context2.abrupt("return", null);
        case 6:
          // set cartid in the state
          state/* state */.K.cartId = cart.id;

          // If the existing cart is the same as the fetched cart, return the fetched cart
          if (!(!existingCartId || cart.id === existingCartId)) {
            _context2.next = 9;
            break;
          }
          return _context2.abrupt("return", cart);
        case 9:
          _context2.next = 11;
          return (0,fetch_graphql/* fetchGraphQl */.CA)(MERGE_CARTS_MUTATION, {
            variables: {
              guestCartId: existingCartId,
              customerCartId: cart.id
            }
          }).then(function (_ref2) {
            var data = _ref2.data;
            return (0,transform_cart/* transformCart */.o)(data.mergeCarts);
          }).catch(function () {
            // gracefully handle merge error, continue with existing cart
            console.error('Could not merge carts');
            return cart;
          });
        case 11:
          return _context2.abrupt("return", _context2.sent);
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _getCustomerCartPayload.apply(this, arguments);
}
function getGuestCartPayload() {
  return _getGuestCartPayload.apply(this, arguments);
}
function _getGuestCartPayload() {
  _getGuestCartPayload = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          if (!(initialize/* config */.E.getConfig().disableGuestCart === true)) {
            _context3.next = 2;
            break;
          }
          return _context3.abrupt("return", null);
        case 2:
          if (state/* state */.K.cartId) {
            _context3.next = 4;
            break;
          }
          return _context3.abrupt("return", null);
        case 4:
          _context3.prev = 4;
          _context3.next = 7;
          return (0,getCartData/* getCartData */.K)();
        case 7:
          return _context3.abrupt("return", _context3.sent);
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](4);
          console.error(_context3.t0);
          return _context3.abrupt("return", null);
        case 14:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[4, 10]]);
  }));
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


var resetCart = function resetCart() {
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
  return data.reduce(function (acc, item) {
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
  return data.items.map(function (item) {
    var _item$product$price_r, _item$product$price_r2, _item$product$price_r3;
    return {
      uid: item.uid,
      url: {
        urlKey: item.product.url_key,
        categories: item.product.categories.map(function (category) {
          return category.url_key;
        })
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
  var result = data === null || data === void 0 || (_data$items2 = data.items) === null || _data$items2 === void 0 ? void 0 : _data$items2.reduce(function (acc, item) {
    var _item$errors;
    (_item$errors = item.errors) === null || _item$errors === void 0 || _item$errors.forEach(function (error) {
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
  return data.map(function (item) {
    return {
      amount: {
        value: item.amount.value,
        currency: item.amount.currency
      },
      label: item.label
    };
  });
}
function transformSelectedOptions(data) {
  var selected = data === null || data === void 0 ? void 0 : data.map(function (option) {
    return {
      uid: option.configurable_product_option_uid,
      label: option.option_label,
      value: option.value_label
    };
  });
  var selectedOptions = {};
  selected === null || selected === void 0 || selected.forEach(function (option) {
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
var handleFetchError = function handleFetchError(errors) {
  var unauthorized = errors.findIndex(function (_ref) {
    var extensions = _ref.extensions;
    return (extensions === null || extensions === void 0 ? void 0 : extensions.category) === 'graphql-authorization';
  }) > -1;
  var missingCart = errors.findIndex(function (_ref2) {
    var extensions = _ref2.extensions;
    return (extensions === null || extensions === void 0 ? void 0 : extensions.category) === 'graphql-no-such-entity';
  }) > -1;
  var errorMessage = errors.map(function (e) {
    return e.message;
  }).join(' ');

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


var _state = function () {
  return {
    cartId: null,
    authenticated: false
  };
}();

// Proxy state to allow reactivity
var state = new Proxy(_state, {
  set: function set(target, key, value) {
    // @ts-ignore
    target[key] = value;
    if (key === 'cartId') {
      if (value === null) {
        // remove cookie
        document.cookie = "DROPIN__CART__CART-ID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
        return true;
      }
      var _config$getConfig = initialize/* config */.E.getConfig(),
        expiresInDays = _config$getConfig.expiresInDays;
      var expires = new Date();
      expires.setDate(expires.getDate() + expiresInDays);
      // set cookie
      document.cookie = "DROPIN__CART__CART-ID=".concat(value, "; expires=").concat(expires.toUTCString(), "; path=/");
    }
    return true;
  },
  get: function get(target, key) {
    if (key === 'cartId') {
      // get value from cookie
      return getCookie('DROPIN__CART__CART-ID');
    }
    return target[key];
  }
});

/***/ })

};
