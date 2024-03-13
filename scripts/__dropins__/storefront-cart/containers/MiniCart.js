import * as __WEBPACK_EXTERNAL_MODULE__dropins_tools_event_bus_js_9bef1f3f__ from "@dropins/tools/event-bus.js";
import * as __WEBPACK_EXTERNAL_MODULE__dropins_tools_fetch_graphql_js_fa439c6b__ from "@dropins/tools/fetch-graphql.js";
import * as __WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_compat_js_873595ef__ from "@dropins/tools/preact-compat.js";
import * as __WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_hooks_js_08969fb2__ from "@dropins/tools/preact-hooks.js";
import * as __WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_jsx_runtime_js_61a4be9f__ from "@dropins/tools/preact-jsx-runtime.js";
import * as __WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_js_29681626__ from "@dropins/tools/preact.js";
export const id = 836;
export const ids = [836];
export const modules = {

/***/ 8404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Y: () => (/* reexport */ containers_MiniCart_MiniCart_MiniCart),
  c: () => (/* reexport */ containers_MiniCart_MiniCart_MiniCart)
});

// EXTERNAL MODULE: external "@dropins/tools/preact-compat.js"
var preact_compat_js_ = __webpack_require__(6528);
// EXTERNAL MODULE: ./lib/persisted-data.ts
var persisted_data = __webpack_require__(2336);
// EXTERNAL MODULE: external "@dropins/tools/event-bus.js"
var event_bus_js_ = __webpack_require__(8122);
// EXTERNAL MODULE: ../../ElsieSDK/packages/elsie/src/lib/classes.ts
var classes = __webpack_require__(8884);
// EXTERNAL MODULE: ../../ElsieSDK/packages/elsie/src/lib/vcomponent.tsx
var vcomponent = __webpack_require__(4496);
// EXTERNAL MODULE: ../../ElsieSDK/packages/elsie/src/components/Divider/Divider.tsx + 1 modules
var Divider = __webpack_require__(6028);
// EXTERNAL MODULE: ../../ElsieSDK/node_modules/preact-i18n/dist/preact-i18n.esm.js + 1 modules
var preact_i18n_esm = __webpack_require__(8300);
// EXTERNAL MODULE: ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(5536);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ../node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(7008);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js
var setAttributesWithAttributesAndNonce = __webpack_require__(9356);
var setAttributesWithAttributesAndNonce_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithAttributesAndNonce);
// EXTERNAL MODULE: ../node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(9904);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ../node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(4192);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./components/MiniCart/MiniCart.css
var MiniCart = __webpack_require__(1496);
;// CONCATENATED MODULE: ./components/MiniCart/MiniCart.css

      
      
      
      
      
      
      
      
      

var options = {"attributes":{"data-dropin":"@dropins/storefront-cart"}};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithAttributesAndNonce_default());
options.insert = function insertAtTop(element) {
                  const parent = document.querySelector('head');

                  const lastInsertedElement =
                    window._lastElementInsertedByStyleLoader;

                  if (!lastInsertedElement) {
                    parent.insertBefore(element, parent.firstChild);
                  } else if (lastInsertedElement.nextSibling) {
                    parent.insertBefore(
                      element,
                      lastInsertedElement.nextSibling
                    );
                  } else {
                    parent.appendChild(element);
                  }

                  window._lastElementInsertedByStyleLoader = element;
                };
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(MiniCart/* default */.c, options);




       /* harmony default export */ const MiniCart_MiniCart = (MiniCart/* default */.c && MiniCart/* default */.c.locals ? MiniCart/* default */.c.locals : undefined);

// EXTERNAL MODULE: ../../ElsieSDK/node_modules/preact/compat/jsx-runtime.mjs
var jsx_runtime = __webpack_require__(5092);
;// CONCATENATED MODULE: ./components/MiniCart/MiniCart.tsx
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["className", "children", "emptyCart", "heading", "products", "estimatedTotal", "ctas"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var MiniCart_MiniCart_MiniCart = function MiniCart(_ref) {
  var className = _ref.className,
    children = _ref.children,
    emptyCart = _ref.emptyCart,
    heading = _ref.heading,
    products = _ref.products,
    estimatedTotal = _ref.estimatedTotal,
    ctas = _ref.ctas,
    props = _objectWithoutProperties(_ref, _excluded);
  var dictionary = (0,preact_i18n_esm/* useText */.cF)({
    estimatedTotal: 'Cart.MiniCart.estimatedTotal'
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", _objectSpread(_objectSpread({}, props), {}, {
    className: (0,classes/* classes */.i)(['cart-mini-cart', className]),
    children: [products && heading && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "cart-mini-cart__heading",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(vcomponent/* VComponent */.o, {
        node: heading,
        className: "cart-mini-cart__heading-text"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Divider/* Divider */.c, {
        variant: "primary",
        className: "cart-mini-cart__heading-divider"
      })]
    }), products ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "cart-mini-cart__products",
        children: products
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "cart-mini-cart__footer",
        children: [estimatedTotal && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "cart-mini-cart__footer__estimated-total",
          children: [dictionary.estimatedTotal, /*#__PURE__*/(0,jsx_runtime.jsx)(vcomponent/* VComponent */.o, {
            node: estimatedTotal
          })]
        }), ctas && /*#__PURE__*/(0,jsx_runtime.jsx)(vcomponent/* VComponent */.o, {
          node: ctas,
          className: "cart-mini-cart__footer__ctas"
        })]
      })]
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(vcomponent/* VComponent */.o, {
      node: emptyCart,
      className: "cart-mini-cart__empty-cart"
    })]
  }));
};
// EXTERNAL MODULE: ./components/EmptyCart/EmptyCart.tsx + 4 modules
var EmptyCart = __webpack_require__(208);
// EXTERNAL MODULE: ../../ElsieSDK/packages/elsie/src/components/Price/Price.tsx + 1 modules
var Price = __webpack_require__(6816);
// EXTERNAL MODULE: ../../ElsieSDK/packages/elsie/src/components/Button/Button.tsx + 1 modules
var Button = __webpack_require__(5424);
// EXTERNAL MODULE: ../../ElsieSDK/packages/elsie/src/components/CartList/CartList.tsx + 1 modules
var CartList = __webpack_require__(9743);
// EXTERNAL MODULE: ../../ElsieSDK/packages/elsie/src/components/CartItem/CartItem.tsx + 8 modules
var CartItem = __webpack_require__(2312);
// EXTERNAL MODULE: ../../ElsieSDK/packages/elsie/src/components/Image/Image.tsx + 2 modules
var Image = __webpack_require__(8036);
// EXTERNAL MODULE: ./api/updateProductsFromCart/updateProductsFromCart.ts + 1 modules
var updateProductsFromCart = __webpack_require__(1580);
// EXTERNAL MODULE: ./lib/acdl.ts + 1 modules
var acdl = __webpack_require__(7192);
// EXTERNAL MODULE: ./lib/state.ts + 1 modules
var state = __webpack_require__(7218);
;// CONCATENATED MODULE: ./containers/MiniCart/MiniCart.tsx
function MiniCart_typeof(o) { "@babel/helpers - typeof"; return MiniCart_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, MiniCart_typeof(o); }
var MiniCart_excluded = ["children", "initialData", "routeProduct", "routeCart", "routeCheckout", "routeEmptyCartCTA"];
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == MiniCart_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(MiniCart_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function MiniCart_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function MiniCart_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? MiniCart_ownKeys(Object(t), !0).forEach(function (r) { MiniCart_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : MiniCart_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function MiniCart_defineProperty(obj, key, value) { key = MiniCart_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function MiniCart_toPropertyKey(t) { var i = MiniCart_toPrimitive(t, "string"); return "symbol" == MiniCart_typeof(i) ? i : String(i); }
function MiniCart_toPrimitive(t, r) { if ("object" != MiniCart_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != MiniCart_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function MiniCart_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = MiniCart_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function MiniCart_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












var containers_MiniCart_MiniCart_MiniCart = function MiniCart(_ref) {
  var _data$totalQuantity, _data$totalQuantity2;
  var children = _ref.children,
    _ref$initialData = _ref.initialData,
    initialData = _ref$initialData === void 0 ? null : _ref$initialData,
    routeProduct = _ref.routeProduct,
    routeCart = _ref.routeCart,
    routeCheckout = _ref.routeCheckout,
    routeEmptyCartCTA = _ref.routeEmptyCartCTA,
    props = MiniCart_objectWithoutProperties(_ref, MiniCart_excluded);
  var _useState = (0,preact_compat_js_.useState)(initialData),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  var _useState3 = (0,preact_compat_js_.useState)(new Set()),
    _useState4 = _slicedToArray(_useState3, 2),
    itemsLoading = _useState4[0],
    setItemLoading = _useState4[1];
  var handleItemsLoading = function handleItemsLoading(state, uid) {
    setItemLoading(function (prev) {
      state ? prev.add(uid) : prev.delete(uid);
      return new Set(prev);
    });
  };
  (0,preact_compat_js_.useEffect)(function () {
    var event = event_bus_js_.events.on('cart/data', function (payload) {
      setData(payload);
    }, {
      eager: true
    });
    return function () {
      event === null || event === void 0 || event.off();
    };
  }, []);
  var dictionary = (0,preact_i18n_esm/* useText */.cF)({
    heading: 'Cart.MiniCart.heading',
    regularPrice: 'Cart.CartItem.regularPrice',
    discountedPrice: 'Cart.CartItem.discountedPrice',
    checkoutLink: 'Cart.MiniCart.checkoutLink',
    cartLink: 'Cart.MiniCart.cartLink'
  });
  var handleItemQuantityUpdate = function handleItemQuantityUpdate(uid, quantity) {
    handleItemsLoading(true, uid);
    (0,updateProductsFromCart/* updateProductsFromCart */.E)([{
      uid: uid,
      quantity: quantity
    }]).finally(function () {
      handleItemsLoading(false, uid);
    });
  };

  // Publish shopping cart view event only once when the component is mounted and initialData is available
  (0,preact_compat_js_.useEffect)(function () {
    if (initialData && Object.keys(initialData).length > 0) {
      (0,acdl/* publishShoppingCartViewEvent */.Ws)(initialData, state/* state */.K.locale || 'en-US');
    }
  }, [initialData]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(MiniCart_MiniCart_MiniCart, MiniCart_objectSpread(MiniCart_objectSpread({}, props), {}, {
    heading: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      children: dictionary.heading.replace('{count}', ((_data$totalQuantity = data === null || data === void 0 ? void 0 : data.totalQuantity) !== null && _data$totalQuantity !== void 0 ? _data$totalQuantity : 0).toString())
    }),
    emptyCart: /*#__PURE__*/(0,jsx_runtime.jsx)(EmptyCart/* EmptyCart */.Q, {
      ctaLinkURL: routeEmptyCartCTA === null || routeEmptyCartCTA === void 0 ? void 0 : routeEmptyCartCTA()
    }),
    estimatedTotal: (data === null || data === void 0 ? void 0 : data.total) && /*#__PURE__*/(0,jsx_runtime.jsx)(Price/* Price */.Y, {
      amount: data === null || data === void 0 ? void 0 : data.total.value,
      currency: data === null || data === void 0 ? void 0 : data.total.currency,
      style: {
        font: 'inherit'
      }
    }),
    ctas: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [routeCheckout && /*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.q, {
        variant: "primary",
        href: routeCheckout(),
        children: dictionary.checkoutLink
      }), routeCart && /*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.q, {
        variant: "tertiary",
        href: routeCart(),
        children: dictionary.cartLink
      })]
    }),
    products: ((_data$totalQuantity2 = data === null || data === void 0 ? void 0 : data.totalQuantity) !== null && _data$totalQuantity2 !== void 0 ? _data$totalQuantity2 : 0) ? /*#__PURE__*/(0,jsx_runtime.jsx)(CartList/* CartList */.A, {
      children: data === null || data === void 0 ? void 0 : data.items.map(function (item, index) {
        var _item$regularPrice, _item$regularPrice2, _item$regularPrice3, _item$regularPrice4;
        var isLoading = itemsLoading.has(item.uid);
        return /*#__PURE__*/(0,jsx_runtime.jsx)(CartItem/* CartItem */.Y, {
          updating: isLoading,
          image: routeProduct ? /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: routeProduct(item),
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Image/* Image */.W, {
              loading: index < 4 ? 'eager' : 'lazy',
              src: item.image.src,
              alt: item.image.alt,
              width: "300",
              height: "300",
              params: {
                width: 300
              }
            })
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Image/* Image */.W, {
            loading: index < 4 ? 'eager' : 'lazy',
            src: item.image.src,
            alt: item.image.alt,
            width: "300",
            height: "300",
            params: {
              width: 300
            }
          }),
          title: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            children: routeProduct ? /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
              href: routeProduct(item),
              children: item.name
            }) : item.name
          }),
          sku: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            children: item.sku
          }),
          configurations: item.selectedOptions,
          quantity: item.quantity,
          price: /*#__PURE__*/(0,jsx_runtime.jsx)(Price/* Price */.Y, {
            amount: (_item$regularPrice = item.regularPrice) === null || _item$regularPrice === void 0 ? void 0 : _item$regularPrice.value,
            currency: (_item$regularPrice2 = item.regularPrice) === null || _item$regularPrice2 === void 0 ? void 0 : _item$regularPrice2.currency,
            weight: "normal"
          }),
          total: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Price/* Price */.Y, {
              amount: ((_item$regularPrice3 = item.regularPrice) === null || _item$regularPrice3 === void 0 ? void 0 : _item$regularPrice3.value) * item.quantity,
              currency: (_item$regularPrice4 = item.regularPrice) === null || _item$regularPrice4 === void 0 ? void 0 : _item$regularPrice4.currency,
              variant: item.discounted ? 'strikethrough' : 'default',
              "data-testid": "regular-total",
              "aria-label": dictionary.regularPrice
            }), item.discounted && /*#__PURE__*/(0,jsx_runtime.jsx)(Price/* Price */.Y, {
              amount: item.total.value,
              currency: item.total.currency,
              sale: item.discounted,
              "data-testid": "discount-total",
              "aria-label": dictionary.discountedPrice
            })]
          }),
          onRemove: function onRemove() {
            handleItemQuantityUpdate(item.uid, 0);
          }
        }, item.uid);
      })
    }) : undefined
  }));
};
containers_MiniCart_MiniCart_MiniCart.getInitialData = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        return _context.abrupt("return", (0,persisted_data/* getPersistedData */.u)());
      case 1:
      case "end":
        return _context.stop();
    }
  }, _callee);
}));
;// CONCATENATED MODULE: ./containers/MiniCart/index.ts



/***/ }),

/***/ 1496:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6008);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2076);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.cart-mini-cart{
  display:flex;
  flex-direction:column;
  height:100%;
  padding:var(--spacing-small) var(--spacing-small) var(--spacing-medium);
  box-sizing:border-box;
}

.cart-mini-cart__empty-cart{
  width:100%;
  max-width:800px;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-self:center;
}

.cart-mini-cart__heading{
  display:grid;
  row-gap:var(--spacing-xsmall);
  font:var(--type-headline-2-default-font);
  letter-spacing:var(--type-headline-2-default-letter-spacing);
}

.cart-mini-cart__heading-divider{
  width:100%;
  margin:var(--spacing-xxsmall) 0 0 0;
}

.cart-mini-cart__products{
  flex:1;
  overflow-y:auto;
  max-height:100%;
  padding-top:var(--spacing-medium);
  padding-bottom:var(--spacing-medium);
}

.cart-mini-cart__footer{
  display:grid;
  grid-auto-flow:row;
  gap:var(--spacing-small);
  padding-top:var(--spacing-small);
}

.cart-mini-cart__footer__estimated-total{
  font:var(--type-body-1-emphasized-font);
  letter-spacing:var(--type-body-1-emphasized-letter-spacing);
  display:grid;
  grid-template:max-content / 1fr auto;
  gap:var(--spacing-xsmall);
}

.cart-mini-cart__footer__ctas{
  display:grid;
  grid-auto-flow:row;
  gap:var(--spacing-xsmall);
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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

/***/ }),

/***/ 6528:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
module.exports = x({ ["Children"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_compat_js_873595ef__.Children), ["createContext"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_compat_js_873595ef__.createContext), ["useContext"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_compat_js_873595ef__.useContext), ["useEffect"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_compat_js_873595ef__.useEffect), ["useMemo"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_compat_js_873595ef__.useMemo), ["useState"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_compat_js_873595ef__.useState) });

/***/ }),

/***/ 2720:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
module.exports = x({ ["useCallback"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_hooks_js_08969fb2__.useCallback), ["useContext"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_hooks_js_08969fb2__.useContext), ["useDebugValue"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_hooks_js_08969fb2__.useDebugValue), ["useEffect"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_hooks_js_08969fb2__.useEffect), ["useId"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_hooks_js_08969fb2__.useId), ["useImperativeHandle"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_hooks_js_08969fb2__.useImperativeHandle), ["useLayoutEffect"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_hooks_js_08969fb2__.useLayoutEffect), ["useMemo"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_hooks_js_08969fb2__.useMemo), ["useReducer"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_hooks_js_08969fb2__.useReducer), ["useRef"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_hooks_js_08969fb2__.useRef), ["useState"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_hooks_js_08969fb2__.useState) });

/***/ }),

/***/ 6168:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
module.exports = x({ ["Fragment"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_jsx_runtime_js_61a4be9f__.Fragment), ["jsx"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_jsx_runtime_js_61a4be9f__.jsx), ["jsxs"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_jsx_runtime_js_61a4be9f__.jsxs) });

/***/ }),

/***/ 7320:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
module.exports = x({ ["Component"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_js_29681626__.Component), ["Fragment"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_js_29681626__.Fragment), ["cloneElement"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_js_29681626__.cloneElement), ["createContext"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_js_29681626__.createContext), ["createElement"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_js_29681626__.createElement), ["createRef"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_js_29681626__.createRef), ["h"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_js_29681626__.h), ["hydrate"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_js_29681626__.hydrate), ["options"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_js_29681626__.options), ["render"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_js_29681626__.render), ["toChildArray"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_js_29681626__.toChildArray) });

/***/ })

};
;

// load runtime
import __webpack_require__ from "../runtime.js";
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
import * as __webpack_chunk_0__ from "../424.js";
__webpack_require__.C(__webpack_chunk_0__);
import * as __webpack_chunk_1__ from "../218.js";
__webpack_require__.C(__webpack_chunk_1__);
import * as __webpack_chunk_2__ from "../580.js";
__webpack_require__.C(__webpack_chunk_2__);
import * as __webpack_chunk_3__ from "../684.js";
__webpack_require__.C(__webpack_chunk_3__);
import * as __webpack_chunk_4__ from "./MiniCart.js";
__webpack_require__.C(__webpack_chunk_4__);
var __webpack_exports__ = __webpack_exec__(8404);
var __webpack_exports__MiniCart = __webpack_exports__.Y;
var __webpack_exports__default = __webpack_exports__.c;
export { __webpack_exports__MiniCart as MiniCart, __webpack_exports__default as default };
