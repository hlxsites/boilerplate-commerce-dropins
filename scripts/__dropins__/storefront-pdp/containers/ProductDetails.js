import * as __WEBPACK_EXTERNAL_MODULE__dropins_tools_event_bus_js_9bef1f3f__ from "@dropins/tools/event-bus.js";
import * as __WEBPACK_EXTERNAL_MODULE__dropins_tools_fetch_graphql_js_fa439c6b__ from "@dropins/tools/fetch-graphql.js";
import * as __WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_compat_js_873595ef__ from "@dropins/tools/preact-compat.js";
import * as __WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_hooks_js_08969fb2__ from "@dropins/tools/preact-hooks.js";
import * as __WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_jsx_runtime_js_61a4be9f__ from "@dropins/tools/preact-jsx-runtime.js";
import * as __WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_js_29681626__ from "@dropins/tools/preact.js";
export const id = 175;
export const ids = [175];
export const modules = {

/***/ 850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ classes)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var classes = function classes(_classes) {
  var result = _classes.reduce(function (result, item) {
    if (!item) return result;
    if (typeof item === 'string') result += " ".concat(item);
    if (Array.isArray(item)) {
      var _item = _slicedToArray(item, 2),
        className = _item[0],
        isActive = _item[1];
      if (className && isActive) {
        result += " ".concat(className);
      }
    }
    return result;
  }, '');
  return result.trim();
};

/***/ }),

/***/ 650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ VComponent)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(850);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(567);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["node"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*
ADOBE CONFIDENTIAL
Copyright 2023 Adobe
All Rights Reserved.
NOTICE: All information contained herein is, and remains
the property of Adobe and its suppliers, if any. The intellectual
and technical concepts contained herein are proprietary to Adobe
and its suppliers and are protected by all applicable intellectual
property laws, including trade secret and copyright laws.
Dissemination of this information or reproduction of this material
is strictly forbidden unless prior written permission is obtained
from Adobe.
*/




function VComponent(_ref) {
  var node = _ref.node,
    props = _objectWithoutProperties(_ref, _excluded);
  if (!node) return null;
  if (Array.isArray(node)) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: node.map(function (n, key) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(VComponent, _objectSpread({
          node: n,
          className: props.className
        }, props), key);
      })
    });
  }

  // @ts-ignore
  props.className = (0,___WEBPACK_IMPORTED_MODULE_1__/* .classes */ .S)([node.props.className, props.className]);

  // @ts-ignore
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(node.type, _objectSpread(_objectSpread({
    ref: node.ref
  }, node.props), props), node.key);
}

/***/ }),

/***/ 159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  f: () => (/* reexport */ ProductDetails),
  Z: () => (/* reexport */ ProductDetails)
});

// NAMESPACE OBJECT: ../../ElsieSDK/packages/elsie/src/icons/index.ts
var icons_namespaceObject = {};
__webpack_require__.r(icons_namespaceObject);
__webpack_require__.d(icons_namespaceObject, {
  Add: () => (Add),
  Bulk: () => (Bulk),
  Burger: () => (Burger),
  Card: () => (Card),
  Cart: () => (Cart),
  Check: () => (Check),
  CheckWithCircle: () => (CheckWithCircle),
  ChevronDown: () => (ChevronDown),
  ChevronRight: () => (ChevronRight),
  ChevronUp: () => (ChevronUp),
  Close: () => (Close),
  Delivery: () => (Delivery),
  Heart: () => (Heart),
  HeartFilled: () => (HeartFilled),
  InfoFilled: () => (InfoFilled),
  Locker: () => (Locker),
  Minus: () => (Minus),
  Order: () => (Order),
  OrderError: () => (OrderError),
  OrderSuccess: () => (OrderSuccess),
  PaymentError: () => (PaymentError),
  Placeholder: () => (Placeholder),
  PlaceholderFilled: () => (PlaceholderFilled),
  Search: () => (Search),
  SearchFilled: () => (SearchFilled),
  Sort: () => (Sort),
  Star: () => (Star),
  User: () => (User),
  View: () => (View),
  Wallet: () => (Wallet),
  Warning: () => (Warning),
  WarningFilled: () => (WarningFilled),
  WarningWithCircle: () => (WarningWithCircle)
});

// EXTERNAL MODULE: external "@dropins/tools/preact-compat.js"
var preact_compat_js_ = __webpack_require__(419);
// EXTERNAL MODULE: external "@dropins/tools/preact-hooks.js"
var preact_hooks_js_ = __webpack_require__(454);
// EXTERNAL MODULE: ../../ElsieSDK/node_modules/preact-i18n/dist/preact-i18n.esm.js + 1 modules
var preact_i18n_esm = __webpack_require__(921);
// EXTERNAL MODULE: ../../ElsieSDK/node_modules/preact/compat/jsx-runtime.mjs
var jsx_runtime = __webpack_require__(567);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/lib/slot.tsx
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["name", "slot", "context", "children", "render"];
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



// NOSONAR

// Slot Hook
function useSlot() {
  var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var callback = arguments.length > 1 ? arguments[1] : undefined;
  var render = arguments.length > 2 ? arguments[2] : undefined;
  // HTML Element
  var elementRef = (0,preact_hooks_js_.useRef)(null);
  var loadedRef = (0,preact_hooks_js_.useRef)(false);

  // Methods
  var methodsRef = (0,preact_hooks_js_.useRef)([]);

  // Children VNodes
  var _useState = (0,preact_hooks_js_.useState)({
      children: [render === null || render === void 0 ? void 0 : render({})]
    }),
    _useState2 = _slicedToArray(_useState, 2),
    props = _useState2[0],
    _setProps = _useState2[1];

  // Attributes
  var _useState3 = (0,preact_hooks_js_.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    _state = _useState4[0],
    setState = _useState4[1];
  var state = {
    get: function get(key) {
      return _state[key];
    },
    set: function set(key, value) {
      setState(_objectSpread(_objectSpread({}, state), {}, _defineProperty({}, key, value)));
    }
  };

  /** Internationalization */
  var _useContext = (0,preact_hooks_js_.useContext)(preact_i18n_esm/* IntlContext */.fH),
    intl = _useContext.intl;
  // @ts-ignore
  context.dictionary = intl.dictionary;

  /** Privates */
  // @ts-ignore
  context._setProps = _setProps;

  // @ts-ignore
  context._registerMethod = function (callback) {
    if (typeof callback === 'function') {
      methodsRef.current.push(callback);
    } else {
      console.warn('Skipped: Invalid _registerMethod', callback);
    }
  };

  // @ts-ignore
  context._htmlElementToVNode = function (htmlElement) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      "data-slot-html-element": htmlElement.tagName.toLowerCase(),
      ref: function ref(elem) {
        elem === null || elem === void 0 ? void 0 : elem.appendChild(htmlElement);
      }
    });
  };

  /** Prebuilt Methods */
  // @ts-ignore
  context.getSlotElement = function (key) {
    var element = document.querySelector("[data-slot-key=\"".concat(key, "\"]"));
    if (!element) {
      console.warn("Slot Element \"".concat(key, "\" not found"));
      return;
    }
    return {
      appendChild: function appendChild(htmlElement) {
        element.appendChild(htmlElement);
      },
      prependChild: function prependChild(htmlElement) {
        element.insertBefore(htmlElement, element.firstChild);
      },
      appendSibling: function appendSibling(htmlElement) {
        var parent = element.parentNode;
        parent === null || parent === void 0 ? void 0 : parent.insertBefore(htmlElement, element.nextSibling);
      },
      prependSibling: function prependSibling(htmlElement) {
        var parent = element.parentNode;
        parent === null || parent === void 0 ? void 0 : parent.insertBefore(htmlElement, element);
      }
    };
  };

  // @ts-ignore
  context.onChange = function (callback) {
    methodsRef.current.push(callback);
  };

  // @ts-ignore
  context.replaceWith = function (htmlElement) {
    // @ts-ignore
    context._registerMethod(function (next) {
      // @ts-ignore
      var children = context._htmlElementToVNode(htmlElement);
      next._setProps({
        children: [children]
      });
    });
  };

  // @ts-ignore
  context.appendChild = function (htmlElement) {
    // @ts-ignore
    context._registerMethod(function (next) {
      // @ts-ignore
      var vnode = context._htmlElementToVNode(htmlElement);
      next._setProps(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          children: [].concat(_toConsumableArray(prev.children), [vnode])
        });
      });
    });
  };

  // @ts-ignore
  context.prependChild = function (htmlElement) {
    // @ts-ignore
    context._registerMethod(function (next) {
      // @ts-ignore
      var vnode = context._htmlElementToVNode(htmlElement);
      next._setProps(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          children: [vnode].concat(_toConsumableArray(prev.children))
        });
      });
    });
  };

  // @ts-ignore
  context.appendSibling = function (htmlElement) {
    // @ts-ignore
    context._registerMethod(function () {
      var _elementRef$current, _elementRef$current$n, _elementRef$current2;
      var parent = (_elementRef$current = elementRef.current) === null || _elementRef$current === void 0 ? void 0 : _elementRef$current.parentNode;
      parent === null || parent === void 0 ? void 0 : parent.insertBefore(htmlElement, (_elementRef$current$n = (_elementRef$current2 = elementRef.current) === null || _elementRef$current2 === void 0 ? void 0 : _elementRef$current2.nextSibling) !== null && _elementRef$current$n !== void 0 ? _elementRef$current$n : null);
    });
  };

  // @ts-ignore
  context.prependSibling = function (htmlElement) {
    // @ts-ignore
    context._registerMethod(function () {
      var _elementRef$current3;
      var parent = (_elementRef$current3 = elementRef.current) === null || _elementRef$current3 === void 0 ? void 0 : _elementRef$current3.parentNode;
      parent === null || parent === void 0 ? void 0 : parent.insertBefore(htmlElement, elementRef.current);
    });
  };

  // Initialization
  (0,preact_hooks_js_.useEffect)(function () {
    var element = elementRef.current;
    if (!callback || !element) return;

    // Run callback
    try {
      callback(context, element);
    } catch (error) {
      console.error("Error in \"".concat(callback.name, "\" Slot callback"), error);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Lifecycles
  (0,preact_hooks_js_.useEffect)(function () {
    // Reset
    _setProps({
      children: [render === null || render === void 0 ? void 0 : render(props)]
    });

    // Run all registered methods
    methodsRef.current.forEach(function (method) {
      method(context, state);
    });

    // Required to trigger re-render of render method
    if ((render === null || render === void 0 ? void 0 : render.name) === 'render' && loadedRef.current === false) {
      loadedRef.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(context), JSON.stringify(_state), loadedRef.current]);
  return [elementRef, props];
}

// Slot Component

function Slot(_ref) {
  var name = _ref.name,
    slot = _ref.slot,
    context = _ref.context,
    children = _ref.children,
    render = _ref.render,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useSlot = useSlot(context, slot, render !== null && render !== void 0 ? render : function () {
      return children;
    }),
    _useSlot2 = _slicedToArray(_useSlot, 2),
    elementRef = _useSlot2[0],
    slotProps = _useSlot2[1];
  (0,preact_hooks_js_.useEffect)(function () {
    if (!name) console.warn('Slot "name" is required');
  }, [name]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", _objectSpread(_objectSpread({}, props), {}, {
    ref: elementRef,
    "data-slot": name,
    children: slotProps.children
  }));
}

// Debugger

// @ts-ignore
window.DROPINS = window.DROPINS || {};

// @ts-ignore
window.DROPINS.showSlots = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(state) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          // cache state in session storage
          window.sessionStorage.setItem('dropin-debugger--show-slots', state.toString());
          document.body.classList.toggle('dropin-debugger--show-slots', state);
          if (!state) {
            _context.next = 10;
            break;
          }
          _context.prev = 3;
          _context.next = 6;
          return __webpack_require__.e(/* import() */ 601).then(__webpack_require__.bind(__webpack_require__, 601));
        case 6:
          _context.next = 10;
          break;
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](3);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[3, 8]]);
  }));
  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}();

// @ts-ignore
window.DROPINS.showSlots(window.sessionStorage.getItem('dropin-debugger--show-slots') === 'true');
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/lib/i18n.ts
/**
 * Convert locale from Magento standard to react-intl BCP 47 language tag
 *
 * @param {string} locale - A locale (e.g. `fr_FR`).
 * @returns {string} A BCP 47 language tag (e.g. `fr-FR`).
 */
var toLanguageTag = function toLanguageTag(locale) {
  return locale.replace('_', '-');
};
// EXTERNAL MODULE: ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(892);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ../node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(760);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js
var setAttributesWithAttributesAndNonce = __webpack_require__(615);
var setAttributesWithAttributesAndNonce_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithAttributesAndNonce);
// EXTERNAL MODULE: ../node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(60);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ../node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(865);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../ElsieSDK/packages/elsie/src/components/Icon/Icon.css
var Icon = __webpack_require__(731);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/components/Icon/Icon.css

      
      
      
      
      
      
      
      
      

var options = {"attributes":{"data-dropin":"@dropins/storefront-pdp"}};

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

var update = injectStylesIntoStyleTag_default()(Icon/* default */.Z, options);




       /* harmony default export */ const Icon_Icon = (Icon/* default */.Z && Icon/* default */.Z.locals ? Icon/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ../../ElsieSDK/packages/elsie/src/lib/classes.ts
var classes = __webpack_require__(850);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/components/Icon/Icon.tsx
function Icon_typeof(obj) { "@babel/helpers - typeof"; return Icon_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Icon_typeof(obj); }
var Icon_excluded = ["source", "size", "stroke", "viewBox", "className"];
function Icon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function Icon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Icon_ownKeys(Object(source), !0).forEach(function (key) { Icon_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Icon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function Icon_defineProperty(obj, key, value) { key = Icon_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Icon_toPropertyKey(arg) { var key = Icon_toPrimitive(arg, "string"); return Icon_typeof(key) === "symbol" ? key : String(key); }
function Icon_toPrimitive(input, hint) { if (Icon_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (Icon_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function Icon_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Icon_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function Icon_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function Icon_Icon_Icon(_ref) {
  var source = _ref.source,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? '24' : _ref$size,
    _ref$stroke = _ref.stroke,
    stroke = _ref$stroke === void 0 ? '2' : _ref$stroke,
    _ref$viewBox = _ref.viewBox,
    viewBox = _ref$viewBox === void 0 ? '0 0 24 24' : _ref$viewBox,
    className = _ref.className,
    props = Icon_objectWithoutProperties(_ref, Icon_excluded);
  var SourceComponent = source;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(SourceComponent, Icon_objectSpread(Icon_objectSpread({}, props), {}, {
    className: (0,classes/* classes */.S)(['dropin-icon', "dropin-icon--shape-stroke-".concat(stroke), className]),
    width: size,
    height: size,
    viewBox: viewBox
  }));
}
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/lib/debounce.ts
var debounce = function debounce(fn, ms) {
  var timeoutId;
  return function () {
    var _this = this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function () {
      return fn.apply(_this, args);
    }, ms);
  };
};
// EXTERNAL MODULE: external "@dropins/tools/preact.js"
var preact_js_ = __webpack_require__(770);
;// CONCATENATED MODULE: ../../ElsieSDK/node_modules/preact/compat/dist/compat.module.js
function g(n,t){for(var e in t)n[e]=t[e];return n}function C(n,t){for(var e in n)if("__source"!==e&&!(e in t))return!0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return!0;return!1}function E(n,t){return n===t&&(0!==n||1/n==1/t)||n!=n&&t!=t}function w(n){this.props=n}function x(n,e){function r(n){var t=this.props.ref,r=t==n.ref;return!r&&t&&(t.call?t(null):t.current=null),e?!e(this.props,n)||!r:C(this.props,n)}function u(e){return this.shouldComponentUpdate=r,(0,preact_js_.createElement)(n,e)}return u.displayName="Memo("+(n.displayName||n.name)+")",u.prototype.isReactComponent=!0,u.__f=!0,u}(w.prototype=new preact_js_.Component).isPureReactComponent=!0,w.prototype.shouldComponentUpdate=function(n,t){return C(this.props,n)||C(this.state,t)};var R=preact_js_.options.__b;preact_js_.options.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),R&&R(n)};var N="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function k(n){function t(t){var e=g({},t);return delete e.ref,n(e,t.ref||null)}return t.$$typeof=N,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var A=function(n,t){return null==n?null:(0,preact_js_.toChildArray)((0,preact_js_.toChildArray)(n).map(t))},O={map:A,forEach:A,count:function(n){return n?(0,preact_js_.toChildArray)(n).length:0},only:function(n){var t=(0,preact_js_.toChildArray)(n);if(1!==t.length)throw"Children.only";return t[0]},toArray:preact_js_.toChildArray},T=preact_js_.options.__e;preact_js_.options.__e=function(n,t,e,r){if(n.then)for(var u,o=t;o=o.__;)if((u=o.__c)&&u.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),u.__c(n,t);T(n,t,e,r)};var I=preact_js_.options.unmount;function L(n,t,e){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c()}),n.__c.__H=null),null!=(n=g({},n)).__c&&(n.__c.__P===e&&(n.__c.__P=t),n.__c=null),n.__k=n.__k&&n.__k.map(function(n){return L(n,t,e)})),n}function U(n,t,e){return n&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(n){return U(n,t,e)}),n.__c&&n.__c.__P===t&&(n.__e&&e.insertBefore(n.__e,n.__d),n.__c.__e=!0,n.__c.__P=e)),n}function D(){this.__u=0,this.t=null,this.__b=null}function F(n){var t=n.__.__c;return t&&t.__a&&t.__a(n)}function M(n){var e,r,u;function o(o){if(e||(e=n()).then(function(n){r=n.default||n},function(n){u=n}),u)throw u;if(!r)throw e;return (0,preact_js_.createElement)(r,o)}return o.displayName="Lazy",o.__f=!0,o}function V(){this.u=null,this.o=null}preact_js_.options.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),I&&I(n)},(D.prototype=new preact_js_.Component).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=F(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l())};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__a){var n=r.state.__a;r.__v.__k[0]=U(n,n.__c.__P,n.__c.__O)}var t;for(r.setState({__a:r.__b=null});t=r.t.pop();)t.forceUpdate()}},c=!0===t.__h;r.__u++||c||r.setState({__a:r.__b=r.__v.__k[0]}),n.then(i,i)},D.prototype.componentWillUnmount=function(){this.t=[]},D.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=L(this.__b,r,o.__O=o.__P)}this.__b=null}var i=e.__a&&(0,preact_js_.createElement)(preact_js_.Fragment,null,n.fallback);return i&&(i.__h=null),[(0,preact_js_.createElement)(preact_js_.Fragment,null,e.__a?null:n.children),i]};var W=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2]}};function P(n){return this.getChildContext=function(){return n.context},n.children}function j(n){var e=this,r=n.i;e.componentWillUnmount=function(){(0,preact_js_.render)(null,e.l),e.l=null,e.i=null},e.i&&e.i!==r&&e.componentWillUnmount(),n.__v?(e.l||(e.i=r,e.l={nodeType:1,parentNode:r,childNodes:[],appendChild:function(n){this.childNodes.push(n),e.i.appendChild(n)},insertBefore:function(n,t){this.childNodes.push(n),e.i.appendChild(n)},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),e.i.removeChild(n)}}),(0,preact_js_.render)((0,preact_js_.createElement)(P,{context:e.context},n.__v),e.l)):e.l&&e.componentWillUnmount()}function z(n,e){var r=(0,preact_js_.createElement)(j,{__v:n,i:e});return r.containerInfo=e,r}(V.prototype=new preact_js_.Component).__a=function(n){var t=this,e=F(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),W(t,n,r)):u()};e?e(o):o()}},V.prototype.render=function(n){this.u=null,this.o=new Map;var t=(0,preact_js_.toChildArray)(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},V.prototype.componentDidUpdate=V.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){W(n,e,t)})};var B="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,H=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Z=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Y=/[A-Z0-9]/g,$="undefined"!=typeof document,q=function(n){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(n)};function G(n,t,e){return null==t.__k&&(t.textContent=""),(0,preact_js_.render)(n,t),"function"==typeof e&&e(),n?n.__c:null}function J(n,t,e){return (0,preact_js_.hydrate)(n,t),"function"==typeof e&&e(),n?n.__c:null}preact_js_.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(preact_js_.Component.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(n){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:n})}})});var K=preact_js_.options.event;function Q(){}function X(){return this.cancelBubble}function nn(){return this.defaultPrevented}preact_js_.options.event=function(n){return K&&(n=K(n)),n.persist=Q,n.isPropagationStopped=X,n.isDefaultPrevented=nn,n.nativeEvent=n};var tn,en={enumerable:!1,configurable:!0,get:function(){return this.class}},rn=preact_js_.options.vnode;preact_js_.options.vnode=function(n){"string"==typeof n.type&&function(n){var t=n.props,e=n.type,u={};for(var o in t){var i=t[o];if(!("value"===o&&"defaultValue"in t&&null==i||$&&"children"===o&&"noscript"===e||"class"===o||"className"===o)){var l=o.toLowerCase();"defaultValue"===o&&"value"in t&&null==t.value?o="value":"download"===o&&!0===i?i="":"ondoubleclick"===l?o="ondblclick":"onchange"!==l||"input"!==e&&"textarea"!==e||q(t.type)?"onfocus"===l?o="onfocusin":"onblur"===l?o="onfocusout":Z.test(o)?o=l:-1===e.indexOf("-")&&H.test(o)?o=o.replace(Y,"-$&").toLowerCase():null===i&&(i=void 0):l=o="oninput","oninput"===l&&u[o=l]&&(o="oninputCapture"),u[o]=i}}"select"==e&&u.multiple&&Array.isArray(u.value)&&(u.value=(0,preact_js_.toChildArray)(t.children).forEach(function(n){n.props.selected=-1!=u.value.indexOf(n.props.value)})),"select"==e&&null!=u.defaultValue&&(u.value=(0,preact_js_.toChildArray)(t.children).forEach(function(n){n.props.selected=u.multiple?-1!=u.defaultValue.indexOf(n.props.value):u.defaultValue==n.props.value})),t.class&&!t.className?(u.class=t.class,Object.defineProperty(u,"className",en)):(t.className&&!t.class||t.class&&t.className)&&(u.class=u.className=t.className),n.props=u}(n),n.$$typeof=B,rn&&rn(n)};var un=preact_js_.options.__r;preact_js_.options.__r=function(n){un&&un(n),tn=n.__c};var on=preact_js_.options.diffed;preact_js_.options.diffed=function(n){on&&on(n);var t=n.props,e=n.__e;null!=e&&"textarea"===n.type&&"value"in t&&t.value!==e.value&&(e.value=null==t.value?"":t.value),tn=null};var ln={ReactCurrentDispatcher:{current:{readContext:function(n){return tn.__n[n.__c].props.value}}}},cn="17.0.2";function fn(n){return preact_js_.createElement.bind(null,n)}function an(n){return!!n&&n.$$typeof===B}function sn(n){return an(n)?preact_js_.cloneElement.apply(null,arguments):n}function hn(n){return!!n.__k&&((0,preact_js_.render)(null,n),!0)}function vn(n){return n&&(n.base||1===n.nodeType&&n)||null}var dn=function(n,t){return n(t)},pn=function(n,t){return n(t)},mn=preact_js_.Fragment;function yn(n){n()}function _n(n){return n}function bn(){return[!1,yn]}var Sn=preact_hooks_js_.useLayoutEffect;function gn(n,t){var e=t(),r=(0,preact_hooks_js_.useState)({h:{__:e,v:t}}),u=r[0].h,o=r[1];return (0,preact_hooks_js_.useLayoutEffect)(function(){u.__=e,u.v=t,E(u.__,t())||o({h:u})},[n,e,t]),(0,preact_hooks_js_.useEffect)(function(){return E(u.__,u.v())||o({h:u}),n(function(){E(u.__,u.v())||o({h:u})})},[n]),e}var Cn={useState:preact_hooks_js_.useState,useId:preact_hooks_js_.useId,useReducer:preact_hooks_js_.useReducer,useEffect:preact_hooks_js_.useEffect,useLayoutEffect:preact_hooks_js_.useLayoutEffect,useInsertionEffect:Sn,useTransition:bn,useDeferredValue:_n,useSyncExternalStore:gn,startTransition:yn,useRef:preact_hooks_js_.useRef,useImperativeHandle:preact_hooks_js_.useImperativeHandle,useMemo:preact_hooks_js_.useMemo,useCallback:preact_hooks_js_.useCallback,useContext:preact_hooks_js_.useContext,useDebugValue:preact_hooks_js_.useDebugValue,version:"17.0.2",Children:O,render:G,hydrate:J,unmountComponentAtNode:hn,createPortal:z,createElement:preact_js_.createElement,createContext:preact_js_.createContext,createFactory:fn,cloneElement:sn,createRef:preact_js_.createRef,Fragment:preact_js_.Fragment,isValidElement:an,findDOMNode:vn,Component:preact_js_.Component,PureComponent:w,memo:x,forwardRef:k,flushSync:pn,unstable_batchedUpdates:dn,StrictMode:mn,Suspense:D,SuspenseList:V,lazy:M,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:ln};
//# sourceMappingURL=compat.module.js.map

;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/icons/Minus.svg
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMinus = function SvgMinus(props) {
  return /*#__PURE__*/preact_js_.createElement("svg", _extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/preact_js_.createElement("path", {
    d: "M17.333 11.75H6.667",
    strokeWidth: 1.5,
    strokeLinecap: "square",
    strokeLinejoin: "round",
    vectorEffect: "non-scaling-stroke",
    stroke: "currentColor"
  })));
};
/* harmony default export */ const Minus = (SvgMinus);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/icons/Add.svg
var _g;
function Add_extends() { Add_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Add_extends.apply(this, arguments); }

var SvgAdd = function SvgAdd(props) {
  return /*#__PURE__*/preact_js_.createElement("svg", Add_extends({
    "data-name": "Icon \\u2013 Add \\u2013 Base",
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24
  }, props), _g || (_g = /*#__PURE__*/preact_js_.createElement("g", {
    "data-name": "Add icon",
    fill: "none",
    stroke: "currentColor"
  }, /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    "data-name": "Line 579",
    d: "M11.95 5.65v12.7"
  }), /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    "data-name": "Line 580",
    d: "M5.655 12h12.7"
  }))));
};
/* harmony default export */ const Add = (SvgAdd);
// EXTERNAL MODULE: ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../ElsieSDK/packages/elsie/src/components/Incrementer/Incrementer.css
var Incrementer = __webpack_require__(606);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/components/Incrementer/Incrementer.css

      
      
      
      
      
      
      
      
      

var Incrementer_options = {"attributes":{"data-dropin":"@dropins/storefront-pdp"}};

Incrementer_options.styleTagTransform = (styleTagTransform_default());
Incrementer_options.setAttributes = (setAttributesWithAttributesAndNonce_default());
Incrementer_options.insert = function insertAtTop(element) {
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
Incrementer_options.domAPI = (styleDomAPI_default());
Incrementer_options.insertStyleElement = (insertStyleElement_default());

var Incrementer_update = injectStylesIntoStyleTag_default()(Incrementer/* default */.Z, Incrementer_options);




       /* harmony default export */ const Incrementer_Incrementer = (Incrementer/* default */.Z && Incrementer/* default */.Z.locals ? Incrementer/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/components/Incrementer/Incrementer.tsx
function Incrementer_typeof(obj) { "@babel/helpers - typeof"; return Incrementer_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Incrementer_typeof(obj); }
var Incrementer_excluded = ["name", "value", "className", "disabled", "error", "success", "min", "max", "onValue", "onUpdateError", "size"];
function Incrementer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function Incrementer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Incrementer_ownKeys(Object(source), !0).forEach(function (key) { Incrementer_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Incrementer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function Incrementer_defineProperty(obj, key, value) { key = Incrementer_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Incrementer_toPropertyKey(arg) { var key = Incrementer_toPrimitive(arg, "string"); return Incrementer_typeof(key) === "symbol" ? key : String(key); }
function Incrementer_toPrimitive(input, hint) { if (Incrementer_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (Incrementer_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function Incrementer_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ Incrementer_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == Incrementer_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function Incrementer_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function Incrementer_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { Incrementer_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { Incrementer_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function Incrementer_slicedToArray(arr, i) { return Incrementer_arrayWithHoles(arr) || Incrementer_iterableToArrayLimit(arr, i) || Incrementer_unsupportedIterableToArray(arr, i) || Incrementer_nonIterableRest(); }
function Incrementer_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Incrementer_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Incrementer_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Incrementer_arrayLikeToArray(o, minLen); }
function Incrementer_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Incrementer_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function Incrementer_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Incrementer_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Incrementer_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function Incrementer_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var Incrementer_Incrementer_Incrementer = function Incrementer(_ref) {
  var name = _ref.name,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? '1' : _ref$value,
    className = _ref.className,
    disabled = _ref.disabled,
    error = _ref.error,
    success = _ref.success,
    min = _ref.min,
    max = _ref.max,
    onValue = _ref.onValue,
    onUpdateError = _ref.onUpdateError,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'medium' : _ref$size,
    props = Incrementer_objectWithoutProperties(_ref, Incrementer_excluded);
  var _useState = (0,preact_hooks_js_.useState)(Number(value)),
    _useState2 = Incrementer_slicedToArray(_useState, 2),
    currentValue = _useState2[0],
    setCurrentValue = _useState2[1];
  var minValue = Number(min);
  var maxValue = Number(max);
  (0,preact_hooks_js_.useEffect)(function () {
    setCurrentValue(Number(value));
  }, [value]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  var debouncedOnValueHandler = (0,preact_hooks_js_.useCallback)(debounce( /*#__PURE__*/function () {
    var _ref2 = Incrementer_asyncToGenerator( /*#__PURE__*/Incrementer_regeneratorRuntime().mark(function _callee(newValue) {
      return Incrementer_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!onValue) {
              _context.next = 9;
              break;
            }
            _context.prev = 1;
            _context.next = 4;
            return onValue(newValue);
          case 4:
            _context.next = 9;
            break;
          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](1);
            if (onUpdateError) {
              onUpdateError(_context.t0);
            }
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 6]]);
    }));
    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }(), 200), [onValue, onUpdateError]);
  var handleIncrementer = function handleIncrementer(_value) {
    var newValue = _value;
    if (_value < minValue) newValue = minValue;
    if (_value > maxValue) newValue = maxValue;
    debouncedOnValueHandler(newValue);
    setCurrentValue(newValue);
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: (0,classes/* classes */.S)(['dropin-incrementer', "dropin-incrementer--".concat(size), className]),
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: (0,classes/* classes */.S)(['dropin-incrementer__content', "dropin-incrementer__content--".concat(size), ["dropin-incrementer__content--error", error], ["dropin-incrementer__content--success", success], ["dropin-incrementer__content--disabled", disabled]]),
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: (0,classes/* classes */.S)(['dropin-incrementer__button-container', ["dropin-incrementer__button-container--disabled", disabled]]),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(preact_i18n_esm/* Localizer */.Cf, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
            type: "button",
            className: (0,classes/* classes */.S)(['dropin-incrementer__decrease-button', ["dropin-incrementer__decrease-button--disabled", disabled]]),
            onClick: function onClick() {
              return handleIncrementer(currentValue - 1);
            },
            disabled: disabled || currentValue < minValue + 1,
            "aria-label": /*#__PURE__*/(0,jsx_runtime.jsx)(preact_i18n_esm/* Text */.xv, {
              id: "Dropin.Incrementer.decreaseLabel"
            }),
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Icon_Icon_Icon, {
              source: Minus,
              size: "16",
              stroke: "1",
              viewBox: "4 2 20 20",
              className: "dropin-incrementer__down"
            })
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("input", Incrementer_objectSpread({
        className: "dropin-incrementer__input",
        max: max,
        min: min,
        step: 1,
        type: "number",
        name: name,
        value: currentValue,
        disabled: disabled,
        onChange: function onChange(e) {
          var newValue = e.currentTarget.value;
          if (newValue !== '') {
            handleIncrementer(Number(newValue));
          }
        }
      }, props)), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: (0,classes/* classes */.S)(['dropin-incrementer__button-container', ["dropin-incrementer__button-container--disabled", disabled]]),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(preact_i18n_esm/* Localizer */.Cf, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
            type: "button",
            className: (0,classes/* classes */.S)(['dropin-incrementer__increase-button', ["dropin-incrementer__increase-button--disabled", disabled]]),
            onClick: function onClick() {
              return handleIncrementer(currentValue + 1);
            },
            disabled: disabled || currentValue > maxValue - 1,
            "aria-label": /*#__PURE__*/(0,jsx_runtime.jsx)(preact_i18n_esm/* Text */.xv, {
              id: "Dropin.Incrementer.increaseLabel"
            }),
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Icon_Icon_Icon, {
              source: Add,
              size: "16",
              stroke: "1",
              viewBox: "4 2 20 20",
              className: "dropin-incrementer__add"
            })
          })
        })
      })]
    })
  });
};
// EXTERNAL MODULE: ../../ElsieSDK/packages/elsie/src/lib/vcomponent.tsx
var vcomponent = __webpack_require__(650);
// EXTERNAL MODULE: ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../ElsieSDK/packages/elsie/src/components/Breadcrumbs/Breadcrumbs.css
var Breadcrumbs = __webpack_require__(875);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/components/Breadcrumbs/Breadcrumbs.css

      
      
      
      
      
      
      
      
      

var Breadcrumbs_options = {"attributes":{"data-dropin":"@dropins/storefront-pdp"}};

Breadcrumbs_options.styleTagTransform = (styleTagTransform_default());
Breadcrumbs_options.setAttributes = (setAttributesWithAttributesAndNonce_default());
Breadcrumbs_options.insert = function insertAtTop(element) {
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
Breadcrumbs_options.domAPI = (styleDomAPI_default());
Breadcrumbs_options.insertStyleElement = (insertStyleElement_default());

var Breadcrumbs_update = injectStylesIntoStyleTag_default()(Breadcrumbs/* default */.Z, Breadcrumbs_options);




       /* harmony default export */ const Breadcrumbs_Breadcrumbs = (Breadcrumbs/* default */.Z && Breadcrumbs/* default */.Z.locals ? Breadcrumbs/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/components/Breadcrumbs/Breadcrumbs.tsx
function Breadcrumbs_typeof(obj) { "@babel/helpers - typeof"; return Breadcrumbs_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Breadcrumbs_typeof(obj); }
var Breadcrumbs_excluded = ["className", "categories", "separator"];
function Breadcrumbs_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function Breadcrumbs_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Breadcrumbs_ownKeys(Object(source), !0).forEach(function (key) { Breadcrumbs_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Breadcrumbs_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function Breadcrumbs_defineProperty(obj, key, value) { key = Breadcrumbs_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Breadcrumbs_toPropertyKey(arg) { var key = Breadcrumbs_toPrimitive(arg, "string"); return Breadcrumbs_typeof(key) === "symbol" ? key : String(key); }
function Breadcrumbs_toPrimitive(input, hint) { if (Breadcrumbs_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (Breadcrumbs_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function Breadcrumbs_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Breadcrumbs_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function Breadcrumbs_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var Breadcrumbs_Breadcrumbs_Breadcrumbs = function Breadcrumbs(_ref) {
  var className = _ref.className,
    categories = _ref.categories,
    separator = _ref.separator,
    props = Breadcrumbs_objectWithoutProperties(_ref, Breadcrumbs_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: (categories === null || categories === void 0 ? void 0 : categories.length) > 1 && /*#__PURE__*/(0,jsx_runtime.jsx)("nav", Breadcrumbs_objectSpread(Breadcrumbs_objectSpread({
      role: "navigation"
    }, props), {}, {
      className: (0,classes/* classes */.S)(['dropin-breadcrumbs__container', className]),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("ul", {
        className: "dropin-breadcrumbs__items",
        children: categories === null || categories === void 0 ? void 0 : categories.map(function (category, index) {
          return /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
            className: (0,classes/* classes */.S)(['dropin-breadcrumbs__item', ['dropin-breadcrumbs__item--last', index === categories.length - 1]]),
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(vcomponent/* VComponent */.F, {
              node: category,
              className: "dropin-breadcrumbs__link"
            }), !separator && index !== categories.length - 1 && /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
              className: "dropin-breadcrumbs__separator--default",
              children: [' ', "/", ' ']
            }), separator && index !== categories.length - 1 && /*#__PURE__*/(0,jsx_runtime.jsx)(vcomponent/* VComponent */.F, {
              node: separator,
              className: "dropin-breadcrumbs__separator--icon"
            })]
          }, index);
        })
      })
    }))
  });
};
// EXTERNAL MODULE: ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../ElsieSDK/packages/elsie/src/components/Button/Button.css
var Button = __webpack_require__(241);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/components/Button/Button.css

      
      
      
      
      
      
      
      
      

var Button_options = {"attributes":{"data-dropin":"@dropins/storefront-pdp"}};

Button_options.styleTagTransform = (styleTagTransform_default());
Button_options.setAttributes = (setAttributesWithAttributesAndNonce_default());
Button_options.insert = function insertAtTop(element) {
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
Button_options.domAPI = (styleDomAPI_default());
Button_options.insertStyleElement = (insertStyleElement_default());

var Button_update = injectStylesIntoStyleTag_default()(Button/* default */.Z, Button_options);




       /* harmony default export */ const Button_Button = (Button/* default */.Z && Button/* default */.Z.locals ? Button/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/components/Button/Button.tsx
function Button_typeof(obj) { "@babel/helpers - typeof"; return Button_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Button_typeof(obj); }
var Button_excluded = ["value", "variant", "size", "icon", "className", "children", "disabled", "active", "activeChildren", "activeIcon", "href"];
function Button_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function Button_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Button_ownKeys(Object(source), !0).forEach(function (key) { Button_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Button_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function Button_defineProperty(obj, key, value) { key = Button_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Button_toPropertyKey(arg) { var key = Button_toPrimitive(arg, "string"); return Button_typeof(key) === "symbol" ? key : String(key); }
function Button_toPrimitive(input, hint) { if (Button_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (Button_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function Button_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Button_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function Button_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Button_Button_Button = function Button(_ref) {
  var value = _ref.value,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'primary' : _ref$variant,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'medium' : _ref$size,
    icon = _ref.icon,
    className = _ref.className,
    children = _ref.children,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$active = _ref.active,
    active = _ref$active === void 0 ? false : _ref$active,
    activeChildren = _ref.activeChildren,
    activeIcon = _ref.activeIcon,
    href = _ref.href,
    props = Button_objectWithoutProperties(_ref, Button_excluded);
  var buttonType = 'dropin-button';
  if (icon && !children || icon && active && !activeChildren || !icon && active && activeIcon) {
    buttonType = 'dropin-iconButton';
  }
  if (active && activeChildren) {
    buttonType = 'dropin-button';
  }
  className = (0,classes/* classes */.S)([buttonType, "".concat(buttonType, "--").concat(size), "".concat(buttonType, "--").concat(variant), ["".concat(buttonType, "--").concat(variant, "--disabled"), disabled], children && icon && "".concat(buttonType, "--with-icon"), !children && activeChildren && icon && "".concat(buttonType, "--with-icon"), active && activeIcon && "".concat(buttonType, "--with-icon"), className]);
  var iconClassName = (0,classes/* classes */.S)(['dropin-button-icon', "dropin-button-icon--".concat(variant), ["dropin-button-icon--".concat(variant, "--disabled"), disabled], icon === null || icon === void 0 ? void 0 : icon.props.className]);
  var attributes = href ? Button_objectSpread(Button_objectSpread({
    node: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {}),
    role: 'link',
    href: href
  }, props), {}, {
    disabled: disabled,
    active: active
  }) : Button_objectSpread(Button_objectSpread({
    node: /*#__PURE__*/(0,jsx_runtime.jsx)("button", {}),
    role: 'button'
  }, props), {}, {
    value: value,
    disabled: disabled,
    active: active
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(vcomponent/* VComponent */.F, Button_objectSpread(Button_objectSpread({}, attributes), {}, {
    className: className,
    children: [icon && !active && /*#__PURE__*/(0,jsx_runtime.jsx)(vcomponent/* VComponent */.F, {
      node: icon,
      className: iconClassName
    }), activeIcon && active && /*#__PURE__*/(0,jsx_runtime.jsx)(vcomponent/* VComponent */.F, {
      node: activeIcon,
      className: iconClassName
    }), children && !active && (typeof children === 'string' ? /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      children: children
    }) : children), active && activeChildren && (typeof activeChildren === 'string' ? /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      children: activeChildren
    }) : activeChildren)]
  }));
};
// EXTERNAL MODULE: ../../ElsieSDK/packages/elsie/src/lib/image-params-keymap.ts
var image_params_keymap = __webpack_require__(500);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/lib/resolve-image.ts
function resolve_image_typeof(obj) { "@babel/helpers - typeof"; return resolve_image_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, resolve_image_typeof(obj); }
function resolve_image_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function resolve_image_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? resolve_image_ownKeys(Object(source), !0).forEach(function (key) { resolve_image_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : resolve_image_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function resolve_image_defineProperty(obj, key, value) { key = resolve_image_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function resolve_image_toPropertyKey(arg) { var key = resolve_image_toPrimitive(arg, "string"); return resolve_image_typeof(key) === "symbol" ? key : String(key); }
function resolve_image_toPrimitive(input, hint) { if (resolve_image_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (resolve_image_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function resolve_image_slicedToArray(arr, i) { return resolve_image_arrayWithHoles(arr) || resolve_image_iterableToArrayLimit(arr, i) || resolve_image_unsupportedIterableToArray(arr, i) || resolve_image_nonIterableRest(); }
function resolve_image_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function resolve_image_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return resolve_image_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return resolve_image_arrayLikeToArray(o, minLen); }
function resolve_image_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function resolve_image_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function resolve_image_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BREAKPOINTS = {
  medium: 768,
  large: 1024,
  xlarge: 1366,
  xxlarge: 1920
};
var resolveImageUrl = function resolveImageUrl(url, _opts) {
  var _url$split = url.split('?'),
    _url$split2 = resolve_image_slicedToArray(_url$split, 2),
    base = _url$split2[0],
    query = _url$split2[1];
  var params = new URLSearchParams(query);
  var keyMapping = (0,image_params_keymap/* getImageParamsKeyMap */.b)();
  var opts = {};
  if (keyMapping && Object.keys(keyMapping).length > 0 && _opts) {
    opts = Object.entries(_opts).reduce(function (acc, _ref) {
      var _ref2 = resolve_image_slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];
      var newKey = keyMapping[key];
      if (newKey) {
        acc[newKey] = value;
      }
      return acc;
    }, {});
  } else {
    opts = resolve_image_objectSpread({
      auto: 'webp',
      quality: 80,
      crop: false,
      fit: 'cover'
    }, _opts);
  }
  // Append image optimization parameters
  Object.entries(opts).forEach(function (_ref3) {
    var _ref4 = resolve_image_slicedToArray(_ref3, 2),
      key = _ref4[0],
      value = _ref4[1];
    if (value !== undefined && value !== null) {
      params.set(key, String(value));
    }
  });
  return "".concat(base, "?").concat(params.toString());
};
var generateSrcset = function generateSrcset(imageURL, options) {
  if (!imageURL || !(options !== null && options !== void 0 && options.width)) return;
  var generateSrcsetUrl = function generateSrcsetUrl(options) {
    return resolveImageUrl(imageURL, resolve_image_objectSpread({}, options));
  };
  return Object.entries(BREAKPOINTS).map(function (_ref5) {
    var _ref6 = resolve_image_slicedToArray(_ref5, 2),
      value = _ref6[1];
    // calculate breakpoints width
    var relativeWidth = options.width * value / BREAKPOINTS.xxlarge;
    return "".concat(generateSrcsetUrl(resolve_image_objectSpread(resolve_image_objectSpread({}, options), {}, {
      width: relativeWidth
    })), " ").concat(value, "w");
  }).join(',\n');
};
// EXTERNAL MODULE: ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../ElsieSDK/packages/elsie/src/components/Image/Image.css
var Image = __webpack_require__(640);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/components/Image/Image.css

      
      
      
      
      
      
      
      
      

var Image_options = {"attributes":{"data-dropin":"@dropins/storefront-pdp"}};

Image_options.styleTagTransform = (styleTagTransform_default());
Image_options.setAttributes = (setAttributesWithAttributesAndNonce_default());
Image_options.insert = function insertAtTop(element) {
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
Image_options.domAPI = (styleDomAPI_default());
Image_options.insertStyleElement = (insertStyleElement_default());

var Image_update = injectStylesIntoStyleTag_default()(Image/* default */.Z, Image_options);




       /* harmony default export */ const Image_Image = (Image/* default */.Z && Image/* default */.Z.locals ? Image/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/components/Image/Image.tsx
function Image_typeof(obj) { "@babel/helpers - typeof"; return Image_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Image_typeof(obj); }
var Image_excluded = ["className", "src", "params", "loading", "srcSet", "onLoad"];
function Image_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function Image_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Image_ownKeys(Object(source), !0).forEach(function (key) { Image_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Image_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function Image_defineProperty(obj, key, value) { key = Image_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Image_toPropertyKey(arg) { var key = Image_toPrimitive(arg, "string"); return Image_typeof(key) === "symbol" ? key : String(key); }
function Image_toPrimitive(input, hint) { if (Image_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (Image_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function Image_slicedToArray(arr, i) { return Image_arrayWithHoles(arr) || Image_iterableToArrayLimit(arr, i) || Image_unsupportedIterableToArray(arr, i) || Image_nonIterableRest(); }
function Image_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Image_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Image_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Image_arrayLikeToArray(o, minLen); }
function Image_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Image_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function Image_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Image_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Image_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function Image_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Image_Image_Image = function Image(_ref) {
  var className = _ref.className,
    src = _ref.src,
    params = _ref.params,
    _ref$loading = _ref.loading,
    loading = _ref$loading === void 0 ? 'lazy' : _ref$loading,
    srcSet = _ref.srcSet,
    onLoad = _ref.onLoad,
    props = Image_objectWithoutProperties(_ref, Image_excluded);
  var _useState = (0,preact_compat_js_.useState)(false),
    _useState2 = Image_slicedToArray(_useState, 2),
    loaded = _useState2[0],
    setLoaded = _useState2[1];
  var _srcSet = (0,preact_compat_js_.useMemo)(function () {
    // If srcSet is provided, use it
    if (srcSet) return srcSet;

    // If src is not provided, return "undefined"
    if (!src || !params) return;

    // Otherwise, generate srcSet based on params
    return generateSrcset(src, Image_objectSpread({}, params));
  }, [params, src, srcSet]);

  // Add class at image onLoad
  var onLoadHandler = function onLoadHandler(e) {
    setLoaded(true);
    onLoad === null || onLoad === void 0 ? void 0 : onLoad(e);
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)("img", Image_objectSpread(Image_objectSpread({}, props), {}, {
    className: (0,classes/* classes */.S)(['dropin-image', ['dropin-image--loaded', loaded], className]),
    loading: loading,
    onLoad: onLoadHandler,
    src: src,
    srcSet: _srcSet
  }));
};
// EXTERNAL MODULE: ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../ElsieSDK/packages/elsie/src/components/Picker/Picker.css
var Picker = __webpack_require__(800);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/components/Picker/Picker.css

      
      
      
      
      
      
      
      
      

var Picker_options = {"attributes":{"data-dropin":"@dropins/storefront-pdp"}};

Picker_options.styleTagTransform = (styleTagTransform_default());
Picker_options.setAttributes = (setAttributesWithAttributesAndNonce_default());
Picker_options.insert = function insertAtTop(element) {
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
Picker_options.domAPI = (styleDomAPI_default());
Picker_options.insertStyleElement = (insertStyleElement_default());

var Picker_update = injectStylesIntoStyleTag_default()(Picker/* default */.Z, Picker_options);




       /* harmony default export */ const Picker_Picker = (Picker/* default */.Z && Picker/* default */.Z.locals ? Picker/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/icons/ChevronDown.svg
var ChevronDown_path;
function ChevronDown_extends() { ChevronDown_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ChevronDown_extends.apply(this, arguments); }

var SvgChevronDown = function SvgChevronDown(props) {
  return /*#__PURE__*/preact_js_.createElement("svg", ChevronDown_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ChevronDown_path || (ChevronDown_path = /*#__PURE__*/preact_js_.createElement("path", {
    d: "M7.745 9.877 12 14.132l4.255-4.255",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "square",
    strokeLinejoin: "round"
  })));
};
/* harmony default export */ const ChevronDown = (SvgChevronDown);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/components/Picker/Picker.tsx
function Picker_typeof(obj) { "@babel/helpers - typeof"; return Picker_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Picker_typeof(obj); }
var Picker_excluded = ["name", "value", "options", "variant", "floatingLabel", "size", "handleSelect", "disabled", "error", "placeholder", "defaultOption", "icon", "className"];
function Picker_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function Picker_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Picker_ownKeys(Object(source), !0).forEach(function (key) { Picker_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Picker_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function Picker_defineProperty(obj, key, value) { key = Picker_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Picker_toPropertyKey(arg) { var key = Picker_toPrimitive(arg, "string"); return Picker_typeof(key) === "symbol" ? key : String(key); }
function Picker_toPrimitive(input, hint) { if (Picker_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (Picker_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = Picker_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function Picker_slicedToArray(arr, i) { return Picker_arrayWithHoles(arr) || Picker_iterableToArrayLimit(arr, i) || Picker_unsupportedIterableToArray(arr, i) || Picker_nonIterableRest(); }
function Picker_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Picker_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Picker_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Picker_arrayLikeToArray(o, minLen); }
function Picker_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Picker_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function Picker_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Picker_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Picker_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function Picker_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var Picker_Picker_Picker = function Picker(_ref) {
  var _placeholderOptionRef;
  var name = _ref.name,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? null : _ref$value,
    options = _ref.options,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'primary' : _ref$variant,
    floatingLabel = _ref.floatingLabel,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'medium' : _ref$size,
    _ref$handleSelect = _ref.handleSelect,
    handleSelect = _ref$handleSelect === void 0 ? function () {} : _ref$handleSelect,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$error = _ref.error,
    error = _ref$error === void 0 ? false : _ref$error,
    placeholder = _ref.placeholder,
    defaultOption = _ref.defaultOption,
    icon = _ref.icon,
    className = _ref.className,
    props = Picker_objectWithoutProperties(_ref, Picker_excluded);
  var id = (props === null || props === void 0 ? void 0 : props.id) || name || "dropin-picker-".concat(Math.random().toString(36));

  // find the first option that is not disabled
  var firstAvailableeOption = options === null || options === void 0 ? void 0 : options.find(function (option) {
    return !option.disabled;
  });
  var _useState = (0,preact_compat_js_.useState)({
      value: value,
      text: (defaultOption === null || defaultOption === void 0 ? void 0 : defaultOption.text) || placeholder || (firstAvailableeOption === null || firstAvailableeOption === void 0 ? void 0 : firstAvailableeOption.text),
      icon: icon
    }),
    _useState2 = Picker_slicedToArray(_useState, 2),
    selectedValue = _useState2[0],
    setSelectedValue = _useState2[1];
  (0,preact_compat_js_.useEffect)(function () {
    var selected = options === null || options === void 0 ? void 0 : options.find(function (option) {
      return option.value === value;
    });
    setSelectedValue(selected !== null && selected !== void 0 ? selected : {
      value: (defaultOption === null || defaultOption === void 0 ? void 0 : defaultOption.value) || (placeholder || floatingLabel ? null : firstAvailableeOption === null || firstAvailableeOption === void 0 ? void 0 : firstAvailableeOption.value),
      text: (defaultOption === null || defaultOption === void 0 ? void 0 : defaultOption.text) || placeholder || (firstAvailableeOption === null || firstAvailableeOption === void 0 ? void 0 : firstAvailableeOption.text),
      icon: icon
    });
  }, [value, options, placeholder, icon, defaultOption, floatingLabel]);
  var handleOptionClick = function handleOptionClick(event) {
    var _ref2 = event.target,
      options = _ref2.options,
      value = _ref2.value;
    var _iterator = _createForOfIteratorHelper(options),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var element = _step.value;
        if (element.selected) {
          setSelectedValue({
            value: value,
            text: element.text,
            icon: icon
          });
          handleSelect(event);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };
  var optionsListItems = options === null || options === void 0 ? void 0 : options.map(function (option) {
    var value = option.value,
      text = option.text,
      disabled = option.disabled;
    var selected = value === selectedValue.value;
    return /*#__PURE__*/(0,jsx_runtime.jsx)("option", {
      value: value,
      selected: selected,
      disabled: disabled,
      className: (0,classes/* classes */.S)(['dropin-picker__option']),
      children: text
    }, value);
  });
  var placeholderOptionRef = (0,preact_hooks_js_.useRef)(null);
  // @ts-ignore
  var selected = !((_placeholderOptionRef = placeholderOptionRef.current) !== null && _placeholderOptionRef !== void 0 && _placeholderOptionRef.selected) || !!defaultOption;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: (0,classes/* classes */.S)([className, 'dropin-picker', "dropin-picker__".concat(size), ['dropin-picker__floating', !!floatingLabel], ['dropin-picker__selected', selected], ['dropin-picker__error', error], ['dropin-picker__disabled', disabled], ['dropin-picker__icon', icon]]),
    children: [icon &&
    /*#__PURE__*/
    // @ts-ignore
    (0,jsx_runtime.jsx)(icon.type, Picker_objectSpread(Picker_objectSpread({}, icon.props), {}, {
      className: 'dropin-picker__icon--placeholder'
    })), /*#__PURE__*/(0,jsx_runtime.jsxs)("select", Picker_objectSpread(Picker_objectSpread({
      id: id,
      className: (0,classes/* classes */.S)(['dropin-picker__select', "dropin-picker__select--".concat(variant), "dropin-picker__select--".concat(size), ['dropin-picker__select--floating', !!floatingLabel]]),
      name: name,
      "aria-label": name,
      disabled: disabled,
      onChange: handleOptionClick
    }, props), {}, {
      children: [!defaultOption && (floatingLabel || placeholder) && /*#__PURE__*/(0,jsx_runtime.jsx)("option", {
        value: '',
        ref: placeholderOptionRef,
        className: (0,classes/* classes */.S)(['dropin-picker__option dropin-picker__placeholder']),
        children: floatingLabel !== null && floatingLabel !== void 0 ? floatingLabel : placeholder
      }, value), optionsListItems]
    })), /*#__PURE__*/(0,jsx_runtime.jsx)(Icon_Icon_Icon, {
      source: ChevronDown,
      size: "24",
      stroke: "2",
      className: "dropin-picker__chevronDown"
    }), floatingLabel && selected && /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
      htmlFor: id,
      className: (0,classes/* classes */.S)(['dropin-picker__floatingLabel', !!floatingLabel]),
      children: floatingLabel
    })]
  });
};
// EXTERNAL MODULE: ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../ElsieSDK/packages/elsie/src/components/TextSwatch/TextSwatch.css
var TextSwatch = __webpack_require__(643);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/components/TextSwatch/TextSwatch.css

      
      
      
      
      
      
      
      
      

var TextSwatch_options = {"attributes":{"data-dropin":"@dropins/storefront-pdp"}};

TextSwatch_options.styleTagTransform = (styleTagTransform_default());
TextSwatch_options.setAttributes = (setAttributesWithAttributesAndNonce_default());
TextSwatch_options.insert = function insertAtTop(element) {
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
TextSwatch_options.domAPI = (styleDomAPI_default());
TextSwatch_options.insertStyleElement = (insertStyleElement_default());

var TextSwatch_update = injectStylesIntoStyleTag_default()(TextSwatch/* default */.Z, TextSwatch_options);




       /* harmony default export */ const TextSwatch_TextSwatch = (TextSwatch/* default */.Z && TextSwatch/* default */.Z.locals ? TextSwatch/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/components/TextSwatch/TextSwatch.tsx
function TextSwatch_typeof(obj) { "@babel/helpers - typeof"; return TextSwatch_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, TextSwatch_typeof(obj); }
var TextSwatch_excluded = ["className", "name", "value", "label", "groupAriaLabel", "id", "disabled", "selected", "outOfStock", "multi", "onValue", "onUpdateError"];
function TextSwatch_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function TextSwatch_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? TextSwatch_ownKeys(Object(source), !0).forEach(function (key) { TextSwatch_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : TextSwatch_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function TextSwatch_defineProperty(obj, key, value) { key = TextSwatch_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function TextSwatch_toPropertyKey(arg) { var key = TextSwatch_toPrimitive(arg, "string"); return TextSwatch_typeof(key) === "symbol" ? key : String(key); }
function TextSwatch_toPrimitive(input, hint) { if (TextSwatch_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (TextSwatch_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function TextSwatch_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ TextSwatch_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == TextSwatch_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function TextSwatch_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function TextSwatch_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { TextSwatch_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { TextSwatch_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function TextSwatch_slicedToArray(arr, i) { return TextSwatch_arrayWithHoles(arr) || TextSwatch_iterableToArrayLimit(arr, i) || TextSwatch_unsupportedIterableToArray(arr, i) || TextSwatch_nonIterableRest(); }
function TextSwatch_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function TextSwatch_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return TextSwatch_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return TextSwatch_arrayLikeToArray(o, minLen); }
function TextSwatch_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function TextSwatch_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function TextSwatch_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function TextSwatch_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = TextSwatch_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function TextSwatch_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var TextSwatch_TextSwatch_TextSwatch = function TextSwatch(_ref) {
  var className = _ref.className,
    name = _ref.name,
    value = _ref.value,
    label = _ref.label,
    groupAriaLabel = _ref.groupAriaLabel,
    id = _ref.id,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$selected = _ref.selected,
    selected = _ref$selected === void 0 ? false : _ref$selected,
    _ref$outOfStock = _ref.outOfStock,
    outOfStock = _ref$outOfStock === void 0 ? false : _ref$outOfStock,
    _ref$multi = _ref.multi,
    multi = _ref$multi === void 0 ? false : _ref$multi,
    onValue = _ref.onValue,
    onUpdateError = _ref.onUpdateError,
    props = TextSwatch_objectWithoutProperties(_ref, TextSwatch_excluded);
  // i18n
  var outOfStockLabel = (0,preact_i18n_esm/* useText */.XK)('Dropin.Swatches.outOfStock.label').label;
  var selectedLabel = (0,preact_i18n_esm/* useText */.XK)('Dropin.Swatches.selected.label').label;
  var swatchLabel = (0,preact_i18n_esm/* useText */.XK)('Dropin.Swatches.swatch.label').label;
  var _useState = (0,preact_compat_js_.useState)(false),
    _useState2 = TextSwatch_slicedToArray(_useState, 2),
    isOverflowing = _useState2[0],
    setIsOverflowing = _useState2[1];
  var spanRef = (0,preact_compat_js_.useRef)(null);
  var onValueHandler = (0,preact_compat_js_.useCallback)( /*#__PURE__*/function () {
    var _ref2 = TextSwatch_asyncToGenerator( /*#__PURE__*/TextSwatch_regeneratorRuntime().mark(function _callee(newValue) {
      return TextSwatch_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!onValue) {
              _context.next = 9;
              break;
            }
            _context.prev = 1;
            _context.next = 4;
            return onValue(newValue);
          case 4:
            _context.next = 9;
            break;
          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](1);
            if (onUpdateError) {
              onUpdateError(_context.t0);
            }
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 6]]);
    }));
    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }(), [onValue, onUpdateError]);
  var handleOnValue = function handleOnValue(e) {
    var input = e.target;
    onValueHandler(input.value);
  };
  var handleAriaLabel = function handleAriaLabel() {
    if (outOfStock) return "".concat(groupAriaLabel, ": ").concat(label, " ").concat(outOfStockLabel);
    if (selected) return "".concat(groupAriaLabel, ": ").concat(label, " ").concat(selectedLabel);
    return "".concat(groupAriaLabel, ": ").concat(label, " ").concat(swatchLabel);
  };
  (0,preact_compat_js_.useEffect)(function () {
    if (spanRef.current && spanRef.current.scrollWidth > spanRef.current.clientWidth) {
      setIsOverflowing(true);
    }
  }, [label]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", TextSwatch_objectSpread(TextSwatch_objectSpread({
    className: "dropin-text-swatch__container"
  }, isOverflowing ? {
    'data-tooltip': label
  } : {}), {}, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("input", TextSwatch_objectSpread(TextSwatch_objectSpread({
      type: multi ? 'checkbox' : 'radio',
      name: name,
      id: id,
      value: value,
      "aria-label": handleAriaLabel(),
      checked: selected,
      disabled: disabled,
      onChange: handleOnValue
    }, props), {}, {
      className: (0,classes/* classes */.S)(['dropin-text-swatch', ['dropin-text-swatch--selected', selected], ['dropin-text-swatch--disabled', disabled], className])
    })), /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
      htmlFor: id,
      ref: spanRef,
      className: (0,classes/* classes */.S)(['dropin-text-swatch__label', ['dropin-text-swatch__label--out-of-stock', outOfStock], className]),
      children: label
    })]
  }));
};
// EXTERNAL MODULE: ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../ElsieSDK/packages/elsie/src/components/ImageSwatch/ImageSwatch.css
var ImageSwatch = __webpack_require__(357);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/components/ImageSwatch/ImageSwatch.css

      
      
      
      
      
      
      
      
      

var ImageSwatch_options = {"attributes":{"data-dropin":"@dropins/storefront-pdp"}};

ImageSwatch_options.styleTagTransform = (styleTagTransform_default());
ImageSwatch_options.setAttributes = (setAttributesWithAttributesAndNonce_default());
ImageSwatch_options.insert = function insertAtTop(element) {
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
ImageSwatch_options.domAPI = (styleDomAPI_default());
ImageSwatch_options.insertStyleElement = (insertStyleElement_default());

var ImageSwatch_update = injectStylesIntoStyleTag_default()(ImageSwatch/* default */.Z, ImageSwatch_options);




       /* harmony default export */ const ImageSwatch_ImageSwatch = (ImageSwatch/* default */.Z && ImageSwatch/* default */.Z.locals ? ImageSwatch/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/components/ImageSwatch/ImageSwatch.tsx
function ImageSwatch_typeof(obj) { "@babel/helpers - typeof"; return ImageSwatch_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, ImageSwatch_typeof(obj); }
var ImageSwatch_excluded = ["className", "name", "value", "id", "label", "groupAriaLabel", "src", "alt", "disabled", "selected", "outOfStock", "multi", "onValue", "onUpdateError"];
function ImageSwatch_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function ImageSwatch_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ImageSwatch_ownKeys(Object(source), !0).forEach(function (key) { ImageSwatch_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ImageSwatch_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function ImageSwatch_defineProperty(obj, key, value) { key = ImageSwatch_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function ImageSwatch_toPropertyKey(arg) { var key = ImageSwatch_toPrimitive(arg, "string"); return ImageSwatch_typeof(key) === "symbol" ? key : String(key); }
function ImageSwatch_toPrimitive(input, hint) { if (ImageSwatch_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (ImageSwatch_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function ImageSwatch_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ ImageSwatch_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == ImageSwatch_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ImageSwatch_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function ImageSwatch_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { ImageSwatch_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { ImageSwatch_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ImageSwatch_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ImageSwatch_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function ImageSwatch_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var ImageSwatch_ImageSwatch_ImageSwatch = function ImageSwatch(_ref) {
  var className = _ref.className,
    name = _ref.name,
    value = _ref.value,
    id = _ref.id,
    label = _ref.label,
    groupAriaLabel = _ref.groupAriaLabel,
    src = _ref.src,
    alt = _ref.alt,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$selected = _ref.selected,
    selected = _ref$selected === void 0 ? false : _ref$selected,
    _ref$outOfStock = _ref.outOfStock,
    outOfStock = _ref$outOfStock === void 0 ? false : _ref$outOfStock,
    _ref$multi = _ref.multi,
    multi = _ref$multi === void 0 ? false : _ref$multi,
    onValue = _ref.onValue,
    onUpdateError = _ref.onUpdateError,
    props = ImageSwatch_objectWithoutProperties(_ref, ImageSwatch_excluded);
  var outOfStockLabel = (0,preact_i18n_esm/* useText */.XK)('Dropin.Swatches.outOfStock.label').label;
  var selectedLabel = (0,preact_i18n_esm/* useText */.XK)('Dropin.Swatches.selected.label').label;
  var swatchLabel = (0,preact_i18n_esm/* useText */.XK)('Dropin.Swatches.swatch.label').label;
  var onValueHandler = (0,preact_compat_js_.useCallback)( /*#__PURE__*/function () {
    var _ref2 = ImageSwatch_asyncToGenerator( /*#__PURE__*/ImageSwatch_regeneratorRuntime().mark(function _callee(newValue) {
      return ImageSwatch_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!onValue) {
              _context.next = 9;
              break;
            }
            _context.prev = 1;
            _context.next = 4;
            return onValue(newValue);
          case 4:
            _context.next = 9;
            break;
          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](1);
            if (onUpdateError) {
              onUpdateError(_context.t0);
            }
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 6]]);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), [onValue, onUpdateError]);
  var handleOnValue = function handleOnValue(e) {
    var input = e.target;
    onValueHandler(input.value);
  };
  var handleAriaLabel = function handleAriaLabel() {
    if (outOfStock) return "".concat(groupAriaLabel, ": ").concat(label, " ").concat(outOfStockLabel);
    if (selected) return "".concat(groupAriaLabel, ": ").concat(label, " ").concat(selectedLabel);
    return "".concat(groupAriaLabel, ": ").concat(label, " ").concat(swatchLabel);
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("label", {
    className: (0,classes/* classes */.S)(['dropin-image-swatch__container', className]),
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("input", ImageSwatch_objectSpread(ImageSwatch_objectSpread({
      type: multi ? 'checkbox' : 'radio',
      name: name,
      id: id,
      value: value,
      "aria-label": handleAriaLabel(),
      checked: selected,
      disabled: disabled,
      onChange: handleOnValue
    }, props), {}, {
      className: (0,classes/* classes */.S)(['dropin-image-swatch', ['dropin-image-swatch--selected', selected], ['dropin-image-swatch--disabled', disabled], className])
    })), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      className: (0,classes/* classes */.S)(['dropin-image-swatch__span', ['dropin-image-swatch__span--out-of-stock', outOfStock], className]),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Image_Image_Image, {
        src: src,
        className: (0,classes/* classes */.S)(['dropin-image-swatch__content']),
        params: {
          width: 100,
          fit: 'bounds',
          crop: true
        },
        alt: alt,
        loading: 'lazy',
        onError: function onError(e) {
          return e.target.style.display = 'none';
        }
      })
    })]
  });
};
// EXTERNAL MODULE: ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../ElsieSDK/packages/elsie/src/components/ColorSwatch/ColorSwatch.css
var ColorSwatch = __webpack_require__(466);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/components/ColorSwatch/ColorSwatch.css

      
      
      
      
      
      
      
      
      

var ColorSwatch_options = {"attributes":{"data-dropin":"@dropins/storefront-pdp"}};

ColorSwatch_options.styleTagTransform = (styleTagTransform_default());
ColorSwatch_options.setAttributes = (setAttributesWithAttributesAndNonce_default());
ColorSwatch_options.insert = function insertAtTop(element) {
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
ColorSwatch_options.domAPI = (styleDomAPI_default());
ColorSwatch_options.insertStyleElement = (insertStyleElement_default());

var ColorSwatch_update = injectStylesIntoStyleTag_default()(ColorSwatch/* default */.Z, ColorSwatch_options);




       /* harmony default export */ const ColorSwatch_ColorSwatch = (ColorSwatch/* default */.Z && ColorSwatch/* default */.Z.locals ? ColorSwatch/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/components/ColorSwatch/ColorSwatch.tsx
function ColorSwatch_typeof(obj) { "@babel/helpers - typeof"; return ColorSwatch_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, ColorSwatch_typeof(obj); }
var ColorSwatch_excluded = ["className", "name", "value", "id", "label", "groupAriaLabel", "size", "color", "disabled", "selected", "outOfStock", "multi", "onValue", "onUpdateError"];
function ColorSwatch_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function ColorSwatch_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ColorSwatch_ownKeys(Object(source), !0).forEach(function (key) { ColorSwatch_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ColorSwatch_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function ColorSwatch_defineProperty(obj, key, value) { key = ColorSwatch_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function ColorSwatch_toPropertyKey(arg) { var key = ColorSwatch_toPrimitive(arg, "string"); return ColorSwatch_typeof(key) === "symbol" ? key : String(key); }
function ColorSwatch_toPrimitive(input, hint) { if (ColorSwatch_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (ColorSwatch_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function ColorSwatch_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ ColorSwatch_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == ColorSwatch_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ColorSwatch_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function ColorSwatch_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { ColorSwatch_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { ColorSwatch_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ColorSwatch_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ColorSwatch_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function ColorSwatch_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var ColorSwatch_ColorSwatch_ColorSwatch = function ColorSwatch(_ref) {
  var className = _ref.className,
    name = _ref.name,
    value = _ref.value,
    id = _ref.id,
    label = _ref.label,
    groupAriaLabel = _ref.groupAriaLabel,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'medium' : _ref$size,
    color = _ref.color,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$selected = _ref.selected,
    selected = _ref$selected === void 0 ? false : _ref$selected,
    _ref$outOfStock = _ref.outOfStock,
    outOfStock = _ref$outOfStock === void 0 ? false : _ref$outOfStock,
    _ref$multi = _ref.multi,
    multi = _ref$multi === void 0 ? false : _ref$multi,
    onValue = _ref.onValue,
    onUpdateError = _ref.onUpdateError,
    props = ColorSwatch_objectWithoutProperties(_ref, ColorSwatch_excluded);
  // i18n
  var outOfStockLabel = (0,preact_i18n_esm/* useText */.XK)('Dropin.Swatches.outOfStock.label').label;
  var selectedLabel = (0,preact_i18n_esm/* useText */.XK)('Dropin.Swatches.selected.label').label;
  var swatchLabel = (0,preact_i18n_esm/* useText */.XK)('Dropin.Swatches.swatch.label').label;
  var onValueHandler = (0,preact_compat_js_.useCallback)( /*#__PURE__*/function () {
    var _ref2 = ColorSwatch_asyncToGenerator( /*#__PURE__*/ColorSwatch_regeneratorRuntime().mark(function _callee(newValue) {
      return ColorSwatch_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!onValue) {
              _context.next = 9;
              break;
            }
            _context.prev = 1;
            _context.next = 4;
            return onValue(newValue);
          case 4:
            _context.next = 9;
            break;
          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](1);
            if (onUpdateError) {
              onUpdateError(_context.t0);
            }
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 6]]);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), [onValue, onUpdateError]);
  var handleOnValue = function handleOnValue(e) {
    var input = e.target;
    onValueHandler(input.value);
  };
  var isValidColor = function isValidColor(color) {
    var colorStyle = new Option().style;
    colorStyle.color = color;
    return colorStyle.color !== ''; // Returns true if the browser accepts this as a valid color
  };

  var defaultColor = 'var(--color-gray-300);';
  var validColor = color && isValidColor(color) ? color : defaultColor;
  var handleAriaLabel = function handleAriaLabel() {
    if (outOfStock) return "".concat(groupAriaLabel, ": ").concat(label, " ").concat(outOfStockLabel);
    if (selected) return "".concat(groupAriaLabel, ": ").concat(label, " ").concat(selectedLabel);
    return "".concat(groupAriaLabel, ": ").concat(label, " ").concat(swatchLabel);
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("label", {
    className: (0,classes/* classes */.S)(['dropin-color-swatch__container', "dropin-color-swatch__container--".concat(size), className]),
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("input", ColorSwatch_objectSpread(ColorSwatch_objectSpread({
      type: multi ? 'checkbox' : 'radio',
      name: name,
      id: id,
      value: value,
      "aria-label": handleAriaLabel(),
      checked: selected,
      disabled: disabled,
      onChange: handleOnValue
    }, props), {}, {
      className: (0,classes/* classes */.S)(['dropin-color-swatch', ['dropin-color-swatch--selected', selected], ['dropin-color-swatch--disabled', disabled], className])
    })), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      style: {
        '--bg-color': validColor
      },
      className: (0,classes/* classes */.S)(['dropin-color-swatch__span', ['dropin-color-swatch__span--out-of-stock', outOfStock], className])
    })]
  });
};
// EXTERNAL MODULE: ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./components/Swatches/Swatches.css
var Swatches = __webpack_require__(696);
;// CONCATENATED MODULE: ./components/Swatches/Swatches.css

      
      
      
      
      
      
      
      
      

var Swatches_options = {"attributes":{"data-dropin":"@dropins/storefront-pdp"}};

Swatches_options.styleTagTransform = (styleTagTransform_default());
Swatches_options.setAttributes = (setAttributesWithAttributesAndNonce_default());
Swatches_options.insert = function insertAtTop(element) {
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
Swatches_options.domAPI = (styleDomAPI_default());
Swatches_options.insertStyleElement = (insertStyleElement_default());

var Swatches_update = injectStylesIntoStyleTag_default()(Swatches/* default */.Z, Swatches_options);




       /* harmony default export */ const Swatches_Swatches = (Swatches/* default */.Z && Swatches/* default */.Z.locals ? Swatches/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./components/Swatches/Swatches.tsx
var Swatches_excluded = ["options", "hideSelectedValue", "onValues", "onErrors", "defaultOptions", "selectionsToUpdate", "className", "children"];
function Swatches_typeof(obj) { "@babel/helpers - typeof"; return Swatches_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Swatches_typeof(obj); }
function Swatches_slicedToArray(arr, i) { return Swatches_arrayWithHoles(arr) || Swatches_iterableToArrayLimit(arr, i) || Swatches_unsupportedIterableToArray(arr, i) || Swatches_nonIterableRest(); }
function Swatches_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Swatches_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Swatches_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Swatches_arrayLikeToArray(o, minLen); }
function Swatches_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Swatches_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function Swatches_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Swatches_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Swatches_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function Swatches_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Swatches_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function Swatches_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Swatches_ownKeys(Object(source), !0).forEach(function (key) { Swatches_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Swatches_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function Swatches_defineProperty(obj, key, value) { key = Swatches_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Swatches_toPropertyKey(arg) { var key = Swatches_toPrimitive(arg, "string"); return Swatches_typeof(key) === "symbol" ? key : String(key); }
function Swatches_toPrimitive(input, hint) { if (Swatches_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (Swatches_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }







var supportedTypes = ['text', 'image', 'color', 'dropdown'];
var mapToPickerOptions = function mapToPickerOptions(items) {
  return items.map(function (item) {
    return Swatches_objectSpread(Swatches_objectSpread({}, item), {}, {
      text: item.label,
      disabled: !item.inStock
    });
  });
};
var Swatches_Swatches_Swatches = function Swatches(_ref) {
  var options = _ref.options,
    hideSelectedValue = _ref.hideSelectedValue,
    onValues = _ref.onValues,
    onErrors = _ref.onErrors,
    defaultOptions = _ref.defaultOptions,
    selectionsToUpdate = _ref.selectionsToUpdate,
    className = _ref.className,
    children = _ref.children,
    props = Swatches_objectWithoutProperties(_ref, Swatches_excluded);
  // i18n
  var RequiredLabel = (0,preact_i18n_esm/* useText */.XK)('PDP.Swatches.Required.label').label;
  var _useState = (0,preact_compat_js_.useState)(function () {
      var initial = options === null || options === void 0 ? void 0 : options.reduce(function (accum, option) {
        var items = option.items;
        var defaultSelection = items === null || items === void 0 ? void 0 : items.find(function (item) {
          return defaultOptions === null || defaultOptions === void 0 ? void 0 : defaultOptions.includes(item.id);
        });
        var selected = items === null || items === void 0 ? void 0 : items.find(function (item) {
          return item.selected;
        });
        if (defaultSelection) {
          return Swatches_objectSpread(Swatches_objectSpread({}, accum), {}, Swatches_defineProperty({}, option.id, {
            label: defaultSelection.label,
            value: defaultSelection.id
          }));
        } else if (selected) {
          return Swatches_objectSpread(Swatches_objectSpread({}, accum), {}, Swatches_defineProperty({}, option.id, {
            label: selected.label,
            value: selected.id
          }));
        }
        return accum;
      }, {});
      return initial;
    }),
    _useState2 = Swatches_slicedToArray(_useState, 2),
    selections = _useState2[0],
    setSelections = _useState2[1];

  // this only applies for the case with anchor options
  // update selections in the swatches if they are updated in the parent component
  (0,preact_compat_js_.useEffect)(function () {
    selectionsToUpdate === null || selectionsToUpdate === void 0 ? void 0 : selectionsToUpdate.forEach(function (selectionToUpdate) {
      setSelections(function (prev) {
        var _options$find, _options$find$items;
        var optionId = selectionToUpdate === null || selectionToUpdate === void 0 ? void 0 : selectionToUpdate.id;
        var selectedItem = options === null || options === void 0 ? void 0 : (_options$find = options.find(function (option) {
          return option.id === optionId;
        })) === null || _options$find === void 0 ? void 0 : (_options$find$items = _options$find.items) === null || _options$find$items === void 0 ? void 0 : _options$find$items.find(function (item) {
          return item.selected;
        });
        if (!optionId || !selectedItem) return prev;
        var next = Swatches_objectSpread(Swatches_objectSpread({}, prev), {}, Swatches_defineProperty({}, optionId, {
          label: selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.label,
          value: selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.id
        }));
        return next;
      });
    });
  }, [selectionsToUpdate, setSelections]);

  // Update invalid options
  (0,preact_compat_js_.useMemo)(function () {
    var errors = options === null || options === void 0 ? void 0 : options.reduce(function (accum, option) {
      var _option$items;
      option === null || option === void 0 ? void 0 : (_option$items = option.items) === null || _option$items === void 0 ? void 0 : _option$items.forEach(function (item) {
        var _selections$option$id;
        var selected = ((_selections$option$id = selections[option.id]) === null || _selections$option$id === void 0 ? void 0 : _selections$option$id.value) === item.id;

        // Validate required
        if (option.required && !selected) {
          accum[option.id] = RequiredLabel;
        }
      });
      return accum;
    }, {});

    // Call the callback
    onErrors === null || onErrors === void 0 ? void 0 : onErrors(errors);
    return errors;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selections]);
  var handleOnSelection = (0,preact_compat_js_.useCallback)(function (id, label, optionId) {
    setSelections(function (prev) {
      var next = Swatches_objectSpread(Swatches_objectSpread({}, prev), {}, Swatches_defineProperty({}, id, {
        label: label,
        value: optionId
      }));

      // Call the callback
      onValues === null || onValues === void 0 ? void 0 : onValues(next, optionId);

      // Return the next state
      return next;
    });
  }, [onValues]);

  // Function to handle the picker selection
  var handlePickerSelect = function handlePickerSelect(optionId, selection) {
    var _selection$selectedOp, _selection$selectedOp2;
    var label = (_selection$selectedOp = (_selection$selectedOp2 = selection.selectedOptions[0]) === null || _selection$selectedOp2 === void 0 ? void 0 : _selection$selectedOp2.label) !== null && _selection$selectedOp !== void 0 ? _selection$selectedOp : '';
    handleOnSelection(optionId, label, selection.value);
  };
  var Swatches = (0,preact_compat_js_.useCallback)(function (_ref2) {
    var items = _ref2.items,
      id = _ref2.id,
      required = _ref2.required,
      type = _ref2.type,
      selected = _ref2.selected,
      label = _ref2.label;
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: (0,classes/* classes */.S)(['pdp-swatches__options']),
      children: (type === null || type === void 0 ? void 0 : type.toLowerCase()) === 'dropdown' ? /*#__PURE__*/(0,jsx_runtime.jsx)(Picker_Picker_Picker, {
        handleSelect: function handleSelect(event) {
          return handlePickerSelect(id, event.target);
        },
        options: mapToPickerOptions(items),
        value: selected
      }) : items === null || items === void 0 ? void 0 : items.map(function (option) {
        var common = {
          key: option.id,
          id: option.id,
          name: id,
          value: option.value,
          label: option.label,
          groupAriaLabel: label,
          selected: selected === option.id,
          outOfStock: !option.inStock,
          // API may return null, we default to true as all swatches are required.
          //  we still comply to this in case the api return "false".
          required: required === null ? true : required,
          onValue: function onValue() {
            handleOnSelection(id, option.label, option.id);
          }
        };
        switch (type) {
          case 'text':
            return /*#__PURE__*/(0,jsx_runtime.jsx)(TextSwatch_TextSwatch_TextSwatch, Swatches_objectSpread(Swatches_objectSpread({}, common), {}, {
              label: option.label
            }));
          case 'image':
            return /*#__PURE__*/(0,jsx_runtime.jsx)(ImageSwatch_ImageSwatch_ImageSwatch, Swatches_objectSpread(Swatches_objectSpread({}, common), {}, {
              src: option.value,
              alt: option.label
            }));
          case 'color':
            return /*#__PURE__*/(0,jsx_runtime.jsx)(ColorSwatch_ColorSwatch_ColorSwatch, Swatches_objectSpread(Swatches_objectSpread({}, common), {}, {
              size: "large",
              color: option.value
            }));
          default:
            console.warn("Invalid swatch type ".concat(type));
            return null;
        }
      })
    });
  }, [handleOnSelection]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", Swatches_objectSpread(Swatches_objectSpread({}, props), {}, {
    className: (0,classes/* classes */.S)(['pdp-swatches', className]),
    children: options === null || options === void 0 ? void 0 : options.map(function (_ref3) {
      var _selections$id;
      var type = _ref3.type,
        label = _ref3.label,
        id = _ref3.id,
        multiple = _ref3.multiple,
        required = _ref3.required,
        items = _ref3.items;
      if (!type) {
        console.warn("Bundle product not supported on UI.");
        return;
      }

      // Only render supported types
      if (!supportedTypes.includes(type)) {
        console.warn("Invalid swatch type ".concat(type));
      }
      if (multiple) {
        console.warn('Multiple selection swatches are not currently supported.');
      }
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        id: "swatch-item-".concat(id),
        "data-slot-key": "product-swatch--".concat(id),
        className: "pdp-swatches__field",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "pdp-swatches__field__label",
          children: selections[id] ? hideSelectedValue ? "".concat(label) : "".concat(label, ": ").concat(selections[id].label) : label
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Swatches, {
          id: id,
          type: type,
          required: required,
          items: items,
          label: label //label referring to the name of the swatchGroup
          ,
          selected: (_selections$id = selections[id]) === null || _selections$id === void 0 ? void 0 : _selections$id.value
        })]
      }, "swatch-item-".concat(id));
    })
  }));
};
// EXTERNAL MODULE: ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./components/Carousel/Carousel.css
var Carousel = __webpack_require__(952);
;// CONCATENATED MODULE: ./components/Carousel/Carousel.css

      
      
      
      
      
      
      
      
      

var Carousel_options = {"attributes":{"data-dropin":"@dropins/storefront-pdp"}};

Carousel_options.styleTagTransform = (styleTagTransform_default());
Carousel_options.setAttributes = (setAttributesWithAttributesAndNonce_default());
Carousel_options.insert = function insertAtTop(element) {
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
Carousel_options.domAPI = (styleDomAPI_default());
Carousel_options.insertStyleElement = (insertStyleElement_default());

var Carousel_update = injectStylesIntoStyleTag_default()(Carousel/* default */.Z, Carousel_options);




       /* harmony default export */ const Carousel_Carousel = (Carousel/* default */.Z && Carousel/* default */.Z.locals ? Carousel/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./components/Carousel/Carousel.tsx
function Carousel_typeof(obj) { "@babel/helpers - typeof"; return Carousel_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Carousel_typeof(obj); }
var Carousel_excluded = ["show", "scrollbar", "peak", "arrows", "controls", "loop", "gap", "direction", "width", "height", "defaultIndex", "className", "children", "thumbnails", "isZoomed"];
function Carousel_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function Carousel_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Carousel_ownKeys(Object(source), !0).forEach(function (key) { Carousel_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Carousel_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function Carousel_defineProperty(obj, key, value) { key = Carousel_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Carousel_toPropertyKey(arg) { var key = Carousel_toPrimitive(arg, "string"); return Carousel_typeof(key) === "symbol" ? key : String(key); }
function Carousel_toPrimitive(input, hint) { if (Carousel_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (Carousel_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function Carousel_toConsumableArray(arr) { return Carousel_arrayWithoutHoles(arr) || Carousel_iterableToArray(arr) || Carousel_unsupportedIterableToArray(arr) || Carousel_nonIterableSpread(); }
function Carousel_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Carousel_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function Carousel_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return Carousel_arrayLikeToArray(arr); }
function Carousel_slicedToArray(arr, i) { return Carousel_arrayWithHoles(arr) || Carousel_iterableToArrayLimit(arr, i) || Carousel_unsupportedIterableToArray(arr, i) || Carousel_nonIterableRest(); }
function Carousel_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Carousel_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Carousel_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Carousel_arrayLikeToArray(o, minLen); }
function Carousel_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Carousel_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function Carousel_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Carousel_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Carousel_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function Carousel_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









var Carousel_Carousel_Carousel = function Carousel(_ref) {
  var _ref$show = _ref.show,
    show = _ref$show === void 0 ? 1 : _ref$show,
    _ref$scrollbar = _ref.scrollbar,
    scrollbar = _ref$scrollbar === void 0 ? false : _ref$scrollbar,
    _ref$peak = _ref.peak,
    peak = _ref$peak === void 0 ? false : _ref$peak,
    _ref$arrows = _ref.arrows,
    arrows = _ref$arrows === void 0 ? false : _ref$arrows,
    _ref$controls = _ref.controls,
    controls = _ref$controls === void 0 ? 'dots' : _ref$controls,
    _ref$loop = _ref.loop,
    loop = _ref$loop === void 0 ? false : _ref$loop,
    _ref$gap = _ref.gap,
    gap = _ref$gap === void 0 ? null : _ref$gap,
    _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? 'horizontal' : _ref$direction,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? '100%' : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? '100%' : _ref$height,
    _ref$defaultIndex = _ref.defaultIndex,
    defaultIndex = _ref$defaultIndex === void 0 ? 0 : _ref$defaultIndex,
    className = _ref.className,
    children = _ref.children,
    _ref$thumbnails = _ref.thumbnails,
    thumbnails = _ref$thumbnails === void 0 ? null : _ref$thumbnails,
    isZoomed = _ref.isZoomed,
    props = Carousel_objectWithoutProperties(_ref, Carousel_excluded);
  // i18n
  var Label = (0,preact_i18n_esm/* useText */.XK)('PDP.Carousel.label').label;
  var SlideLabel = (0,preact_i18n_esm/* useText */.XK)('PDP.Carousel.Slide.label').label;
  var PreviousLabel = (0,preact_i18n_esm/* useText */.XK)('PDP.Carousel.Previous.label').label;
  var NextLabel = (0,preact_i18n_esm/* useText */.XK)('PDP.Carousel.Next.label').label;
  var ControlsLabel = (0,preact_i18n_esm/* useText */.XK)('PDP.Carousel.Controls.label').label;
  var ControlsBtnLabel = (0,preact_i18n_esm/* useText */.XK)('PDP.Carousel.Controls.Button.label').label;

  // States
  var _useState = (0,preact_compat_js_.useState)(function () {
      return getPerPageFromBreakpoint(show);
    }),
    _useState2 = Carousel_slicedToArray(_useState, 2),
    perPage = _useState2[0],
    setPerPage = _useState2[1];

  // Constants
  var length = Math.ceil(preact_compat_js_.Children.toArray(children).length / perPage);
  var gapSizes = {
    small: 16,
    medium: 24,
    large: 64
  };
  var peakWidth = peak ? 24 : 0;
  var gapWidth = gap ? gapSizes[gap] : 0;
  var rest = preact_compat_js_.Children.toArray(children).length % perPage;
  var thumbGap = 16;
  var thumbBoxWidth = 4;
  var thumbPeak = 32;
  var thumbSeen = 4;
  var iconSize = '32';

  // States
  var _useState3 = (0,preact_compat_js_.useState)(loop ? defaultIndex + 1 : defaultIndex),
    _useState4 = Carousel_slicedToArray(_useState3, 2),
    current = _useState4[0],
    setCurrent = _useState4[1];

  // Thumbnails
  var _useState5 = (0,preact_compat_js_.useState)(0),
    _useState6 = Carousel_slicedToArray(_useState5, 2),
    thumbWidth = _useState6[0],
    setThumbWidth = _useState6[1];
  var _useState7 = (0,preact_compat_js_.useState)(0),
    _useState8 = Carousel_slicedToArray(_useState7, 2),
    thumbHeight = _useState8[0],
    setThumbHeight = _useState8[1];
  var thumbnailSlides = (0,preact_compat_js_.useMemo)(function () {
    return preact_compat_js_.Children.toArray(thumbnails);
  }, [thumbnails]);

  // Slides
  var slides = (0,preact_compat_js_.useMemo)(function () {
    var returnValue = preact_compat_js_.Children.toArray(children).reduce(function (acc, child, i) {
      if (i % perPage === 0) {
        return [].concat(Carousel_toConsumableArray(acc), [[child]]);
      }
      return [].concat(Carousel_toConsumableArray(acc.slice(0, -1)), [[].concat(Carousel_toConsumableArray(acc[acc.length - 1]), [child])]);
    }, []);
    if (!loop || returnValue.length === 1) {
      return returnValue;
    }
    if (loop && !(preact_compat_js_.Children.toArray(children).length % perPage !== 0)) {
      return [returnValue[length - 1]].concat(returnValue).concat([returnValue[0], returnValue[1]]);
    }
    return [preact_compat_js_.Children.toArray(children).slice(-perPage)].concat(returnValue).concat([returnValue[0], returnValue[1]]);
  }, [children, perPage, length, loop]);

  // Wrapper
  var wrapperRef = (0,preact_compat_js_.useRef)(null);
  var thumbnailsWrapperRef = (0,preact_compat_js_.useRef)(null);
  var thumbnailControls = controls === 'thumbnailsRow' || controls === 'thumbnailsColumn';

  // Observe Window Resize (responsive)
  (0,preact_compat_js_.useEffect)(function () {
    var wrapper = document.body;
    var handleResize = debounce(function () {
      var _wrapperRef$current$o, _wrapperRef$current, _wrapperRef$current$o2, _wrapperRef$current2;
      setThumbWidth((_wrapperRef$current$o = (_wrapperRef$current = wrapperRef.current) === null || _wrapperRef$current === void 0 ? void 0 : _wrapperRef$current.offsetWidth) !== null && _wrapperRef$current$o !== void 0 ? _wrapperRef$current$o : 0);
      setThumbHeight((_wrapperRef$current$o2 = (_wrapperRef$current2 = wrapperRef.current) === null || _wrapperRef$current2 === void 0 ? void 0 : _wrapperRef$current2.offsetHeight) !== null && _wrapperRef$current$o2 !== void 0 ? _wrapperRef$current$o2 : 0);
      var width = window.innerWidth;
      var newPerPage = getPerPageFromBreakpoint(show, width);
      if (newPerPage !== perPage) {
        setPerPage(newPerPage);
      }
    }, 50);
    var observer = new ResizeObserver(handleResize);
    observer.observe(wrapper);
    return function () {
      observer.unobserve(wrapper);
    };
  }, [perPage, show]);

  // Scrolling logic controls
  var handleThumbnailsScroll = (0,preact_compat_js_.useCallback)(function (nextSlideIndex) {
    var thumbnailsWrapper = thumbnailsWrapperRef.current;
    var nextItem = loop ? nextSlideIndex - 1 : nextSlideIndex;
    var thumbOffset = thumbSeen * thumbGap + 2 * thumbBoxWidth + thumbPeak;
    if (controls === 'thumbnailsRow' && thumbnailsWrapper !== null && thumbnailsWrapper !== void 0 && thumbnailsWrapper.offsetWidth) {
      var oneItemWidth = (thumbnailsWrapper.offsetWidth - thumbOffset) / thumbSeen;
      if (oneItemWidth * (nextItem + 1) > thumbnailsWrapper.offsetWidth) {
        thumbnailsWrapper.style.scrollBehavior = 'smooth';
        thumbnailsWrapper.scrollLeft = (nextItem - thumbSeen + 2) * oneItemWidth;
      }
      if (thumbnailsWrapper.scrollLeft > oneItemWidth * nextItem) {
        thumbnailsWrapper.style.scrollBehavior = 'smooth';
        thumbnailsWrapper.scrollLeft = (nextItem - thumbSeen + 2) * oneItemWidth;
      }
    }
    if (controls === 'thumbnailsColumn' && thumbnailsWrapper !== null && thumbnailsWrapper !== void 0 && thumbnailsWrapper.offsetHeight) {
      var oneItemHeight = (thumbnailsWrapper.offsetHeight - thumbOffset) / thumbSeen;
      if (oneItemHeight * (nextItem + 1) > thumbnailsWrapper.offsetHeight) {
        thumbnailsWrapper.style.scrollBehavior = 'smooth';
        thumbnailsWrapper.scrollTop = (nextItem - thumbSeen + 2) * oneItemHeight;
      }
      if (thumbnailsWrapper.scrollTop > oneItemHeight * nextItem) {
        thumbnailsWrapper.style.scrollBehavior = 'smooth';
        thumbnailsWrapper.scrollTop = (nextItem - thumbSeen + 2) * oneItemHeight;
      }
    }
  }, [controls, loop]);

  // Navigation
  var handleScrollTo = (0,preact_compat_js_.useCallback)(function (nextSlideIndex, smooth, reset) {
    if (controls === 'thumbnailsRow' || controls === 'thumbnailsColumn') {
      handleThumbnailsScroll(nextSlideIndex);
    }
    var wrapper = wrapperRef.current;
    var realWidth = peakWidth ? wrapper.offsetWidth - peakWidth : wrapper.offsetWidth - peakWidth + gapWidth;
    var items = Array.from(wrapper.querySelectorAll('[data-index]')).filter(function (element) {
      var dataIndex = Number(element.getAttribute('data-index'));
      return !isNaN(dataIndex) && dataIndex > -1;
    });
    var item = items[nextSlideIndex];
    if (!item) {
      return;
    }
    if (reset) {
      var futureIndex = nextSlideIndex === 0 ? length : 0;
      var scrollWidth = realWidth * (length + (rest ? rest : perPage) / perPage);
      if (wrapper.scrollLeft >= 0 && wrapper.scrollLeft < realWidth - 5) {
        handleScrollTo(1, true);
        return;
      }
      if (wrapper.scrollLeft > scrollWidth - realWidth && wrapper.scrollLeft <= scrollWidth) {
        handleScrollTo(length, true);
        return;
      }
      wrapper.style.scrollBehavior = 'auto';
      wrapper.scrollLeft = futureIndex === 0 ? 0 : scrollWidth;
      handleScrollTo(futureIndex === 0 ? 1 : length, true);
      return;
    }
    var diff = (wrapper.offsetWidth - gapWidth) / perPage * slides[nextSlideIndex].length - peakWidth;
    wrapper.style.scrollBehavior = smooth ? 'smooth' : 'auto';
    wrapper.scrollLeft = slides[nextSlideIndex].length === perPage ? realWidth * nextSlideIndex : realWidth * (nextSlideIndex - 1) + diff;
    return;
  }, [gapWidth, length, peakWidth, perPage, rest, slides, handleThumbnailsScroll, controls]);
  var handleGoToPrev = (0,preact_compat_js_.useCallback)(function () {
    if (loop) {
      var _nextSlideIndex = current - 1;
      handleScrollTo(_nextSlideIndex, true, current === 1);
      return;
    }
    var nextSlideIndex = current <= 0 ? 0 : current - 1;
    handleScrollTo(nextSlideIndex, true);
  }, [current, handleScrollTo, loop]);
  var handleGoToNext = (0,preact_compat_js_.useCallback)(function () {
    var lastSlideIndex = slides.length - 1;
    if (loop) {
      var _nextSlideIndex2 = current + 1;
      handleScrollTo(_nextSlideIndex2, true, current === length);
      return;
    }
    var nextSlideIndex = current >= lastSlideIndex ? lastSlideIndex : current + 1;
    handleScrollTo(nextSlideIndex, true);
  }, [slides.length, loop, current, handleScrollTo, length]);

  // Navigate with keyboard
  (0,preact_compat_js_.useEffect)(function () {
    var handleKeyDown = function handleKeyDown(event) {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        handleGoToPrev();
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        handleGoToNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return function () {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleGoToNext, handleGoToPrev]);

  // Set default index
  (0,preact_compat_js_.useEffect)(function () {
    handleScrollTo(loop ? defaultIndex + 1 : defaultIndex, false);
  }, [defaultIndex, handleScrollTo, loop]);

  // Track scrolling (swipes)
  var handleOnScroll = debounce(function () {
    var wrapper = wrapperRef.current;
    var realWidth = peakWidth ? wrapper.offsetWidth - peakWidth : wrapper.offsetWidth - peakWidth + gapWidth;
    var dividing = wrapper.scrollLeft / realWidth;
    var nextSlideIndex = Math.round(dividing) - dividing < 1 ? Math.round(dividing) : Math.ceil(dividing);
    if (thumbnailControls) {
      handleThumbnailsScroll(nextSlideIndex);
    }
    if (loop) {
      var totalWidth = realWidth * (length + (rest ? rest : perPage) / perPage);
      if (Math.ceil(wrapper.scrollLeft) >= Math.ceil(totalWidth) - 5) {
        wrapper.style.scrollBehavior = 'auto';
        wrapper.scrollLeft = wrapper.offsetWidth * 1 + (Math.ceil(wrapper.scrollLeft) - Math.ceil(totalWidth) - peakWidth);
        return;
      }
      if (wrapper.scrollLeft === 0) {
        wrapper.style.scrollBehavior = 'auto';
        wrapper.scrollLeft = totalWidth - wrapper.offsetWidth + peakWidth;
        return;
      }
    }
    if (current !== nextSlideIndex) {
      setCurrent(nextSlideIndex);
    }
  }, 100);
  (0,preact_compat_js_.useEffect)(function () {
    var wrapper = wrapperRef.current;
    wrapper === null || wrapper === void 0 ? void 0 : wrapper.addEventListener('scroll', handleOnScroll);
    return function () {
      wrapper === null || wrapper === void 0 ? void 0 : wrapper.removeEventListener('scroll', handleOnScroll);
    };
  }, [handleOnScroll]);

  // thumbnails is column -> container is row reverse, controls is column
  // thumbnails is row -> container is column, controls is row
  /* Previous Arrow */
  var prevArrow = arrows && slides.length != 1 && /*#__PURE__*/(0,jsx_runtime.jsx)(Button_Button_Button, {
    className: (0,classes/* classes */.S)([['pdp-carousel__button', !thumbnailControls], ['pdp-carousel__button--prev', !thumbnailControls], ["pdp-carousel__button--".concat(controls), thumbnailControls]]),
    variant: "tertiary",
    "aria-label": PreviousLabel,
    onClick: handleGoToPrev,
    disabled: loop ? false : current < 1,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Icon_Icon_Icon, {
      className: (0,classes/* classes */.S)([['pdp-carousel__button__icon', !thumbnailControls], ['pdp-carousel__button__icon--prev', !thumbnailControls], ["pdp-carousel__button__icon--".concat(controls, "--prev"), thumbnailControls]]),
      size: iconSize,
      source: ChevronDown
    })
  });

  /* Next Arrow */
  var nextArrow = arrows && slides.length != 1 && /*#__PURE__*/(0,jsx_runtime.jsx)(Button_Button_Button, {
    className: (0,classes/* classes */.S)([['pdp-carousel__button', !thumbnailControls], ['pdp-carousel__button--next', !thumbnailControls], ["pdp-carousel__button--".concat(controls), thumbnailControls]]),
    variant: "tertiary",
    "aria-label": NextLabel,
    onClick: handleGoToNext,
    disabled: loop ? false : current >= slides.length - 1,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Icon_Icon_Icon, {
      className: (0,classes/* classes */.S)([['pdp-carousel__button__icon', !thumbnailControls], ['pdp-carousel__button__icon--next', !thumbnailControls], ["pdp-carousel__button__icon--".concat(controls, "--next"), thumbnailControls]]),
      size: iconSize,
      source: ChevronDown
    })
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", Carousel_objectSpread(Carousel_objectSpread({
    role: "region",
    "aria-roledescription": Label,
    className: (0,classes/* classes */.S)(['pdp-carousel', ['pdp-carousel--arrows', arrows && !thumbnailControls], ["pdp-carousel--".concat(controls), thumbnailControls], className]),
    style: {
      '--flex-carousel': controls === 'thumbnailsColumn' ? 'row-reverse' : 'column',
      '--gap': thumbnailControls ? '0' : 'var(--spacing-small)',
      '--width': width
    }
  }, props), {}, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      ref: wrapperRef,
      className: (0,classes/* classes */.S)(['pdp-carousel__wrapper', "pdp-carousel__wrapper--".concat(direction), ['pdp-carousel__wrapper--scrollbar', scrollbar], ['pdp-carousel__wrapper--peak', peak]]),
      style: {
        '--total-width': controls === 'thumbnailsColumn' ? "81.6%" : "100%",
        '--height': controls === 'thumbnailsColumn' ? 'auto' : height,
        '--gap': gap ? "var(--spacing-".concat(gap, ")") : '0px',
        '--per-page': perPage
      },
      tabIndex: 0,
      children: slides.map(function (page, index) {
        var orphan = page.length < perPage;
        return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          role: "group",
          "aria-roledescription": SlideLabel,
          "data-index": index,
          className: (0,classes/* classes */.S)(['pdp-carousel__slide', "pdp-carousel__slide--".concat(direction), ['pdp-carousel__slide--active', current === index], ['pdp-carousel__slide--orphan', orphan]]),
          style: {
            '--length': page.length
          },
          children: page
        }, index);
      })
    }), !thumbnailControls && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [prevArrow, nextArrow]
    }), controls && slides.length != 1 && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: (0,classes/* classes */.S)([["pdp-carousel__controls__container--".concat(controls), thumbnailControls]]),
      style: {
        '--width': controls === 'thumbnailsRow' ? "".concat(thumbWidth, "px") : width,
        '--height': "".concat(thumbHeight, "px"),
        '--nr-thumbnails': thumbnailSlides.length
      },
      children: [(thumbnailControls || isZoomed) && prevArrow, /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        ref: thumbnailsWrapperRef,
        className: (0,classes/* classes */.S)([["pdp-carousel__controls__wrapper--".concat(controls), thumbnailControls], ["pdp-carousel__controls__wrapper", thumbnailControls]]),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          role: "group",
          "aria-label": ControlsLabel,
          className: (0,classes/* classes */.S)(['pdp-carousel__controls', ["pdp-carousel__controls--".concat(controls), thumbnailControls]]),
          children: (loop ? slides.slice(0, length) : slides).map(function (_, key) {
            var buttonsLength = loop ? length : slides.length;
            var active = loop ? current - 1 === key : current === key;
            if (!thumbnailControls) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
                "aria-label": ControlsBtnLabel.replace('{key}', String(key + 1)).replace('{total}', String(buttonsLength)),
                onClick: function onClick() {
                  handleScrollTo(loop ? key + 1 : key, true);
                },
                className: (0,classes/* classes */.S)(['pdp-carousel__controls__button', ['pdp-carousel__controls__button--active', active]])
              }, key);
            }
            return /*#__PURE__*/(0,jsx_runtime.jsxs)("label", {
              className: (0,classes/* classes */.S)(['pdp-carousel__thumbnail__container']),
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("input", Carousel_objectSpread(Carousel_objectSpread({
                type: "radio",
                name: "carousel-thumbnails",
                "aria-label": ControlsBtnLabel.replace('{key}', String(key + 1)).replace('{total}', String(buttonsLength)),
                checked: active && thumbWidth !== 0,
                onChange: function onChange() {
                  handleScrollTo(loop ? key + 1 : key, true);
                }
              }, props), {}, {
                className: (0,classes/* classes */.S)(['pdp-carousel__thumbnail', ['pdp-carousel__thumbnail--selected', active && thumbWidth !== 0]])
              })), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                className: (0,classes/* classes */.S)(['pdp-carousel__thumbnail__span']),
                children: thumbnailSlides[key]
              })]
            }, key);
          })
        })
      }), (thumbnailControls || isZoomed) && nextArrow]
    })]
  }));
};

// Utilities
function getPerPageFromBreakpoint(breakpoints) {
  var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  if (typeof breakpoints === 'number') return breakpoints;
  var small = breakpoints.small,
    medium = breakpoints.medium,
    large = breakpoints.large;
  var mediumViewport = 786;
  var largeVierport = 1024;
  if (width > largeVierport) return large;
  if (width > mediumViewport) return medium;
  return small;
}
// EXTERNAL MODULE: ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./components/GalleryGrid/GalleryGrid.css
var GalleryGrid = __webpack_require__(848);
;// CONCATENATED MODULE: ./components/GalleryGrid/GalleryGrid.css

      
      
      
      
      
      
      
      
      

var GalleryGrid_options = {"attributes":{"data-dropin":"@dropins/storefront-pdp"}};

GalleryGrid_options.styleTagTransform = (styleTagTransform_default());
GalleryGrid_options.setAttributes = (setAttributesWithAttributesAndNonce_default());
GalleryGrid_options.insert = function insertAtTop(element) {
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
GalleryGrid_options.domAPI = (styleDomAPI_default());
GalleryGrid_options.insertStyleElement = (insertStyleElement_default());

var GalleryGrid_update = injectStylesIntoStyleTag_default()(GalleryGrid/* default */.Z, GalleryGrid_options);




       /* harmony default export */ const GalleryGrid_GalleryGrid = (GalleryGrid/* default */.Z && GalleryGrid/* default */.Z.locals ? GalleryGrid/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./components/GalleryGrid/GalleryGrid.tsx
function GalleryGrid_typeof(obj) { "@babel/helpers - typeof"; return GalleryGrid_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, GalleryGrid_typeof(obj); }
var GalleryGrid_excluded = ["children", "gap", "className", "style"];
function GalleryGrid_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function GalleryGrid_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? GalleryGrid_ownKeys(Object(source), !0).forEach(function (key) { GalleryGrid_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : GalleryGrid_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function GalleryGrid_defineProperty(obj, key, value) { key = GalleryGrid_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function GalleryGrid_toPropertyKey(arg) { var key = GalleryGrid_toPrimitive(arg, "string"); return GalleryGrid_typeof(key) === "symbol" ? key : String(key); }
function GalleryGrid_toPrimitive(input, hint) { if (GalleryGrid_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (GalleryGrid_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function GalleryGrid_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = GalleryGrid_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function GalleryGrid_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var GalleryGrid_GalleryGrid_GalleryGrid = function GalleryGrid(_ref) {
  var children = _ref.children,
    _ref$gap = _ref.gap,
    gap = _ref$gap === void 0 ? null : _ref$gap,
    className = _ref.className,
    style = _ref.style,
    props = GalleryGrid_objectWithoutProperties(_ref, GalleryGrid_excluded);
  var count = preact_compat_js_.Children.count(children);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", GalleryGrid_objectSpread(GalleryGrid_objectSpread({}, props), {}, {
    className: (0,classes/* classes */.S)(['pdp-gallery-grid', className]),
    style: GalleryGrid_objectSpread({
      '--gap': gap ? "var(--spacing-".concat(gap, ")") : '0px'
    }, style),
    children: preact_compat_js_.Children.map(children, function (child, key) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "pdp-gallery-grid__item",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(vcomponent/* VComponent */.F, {
          node: child,
          loading: key === 0 ? 'eager' : 'lazy'
        }, child.props.src)
      }, count + key);
    })
  }));
};
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/icons/Close.svg
var Close_path;
function Close_extends() { Close_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Close_extends.apply(this, arguments); }

var SvgClose = function SvgClose(props) {
  return /*#__PURE__*/preact_js_.createElement("svg", Close_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), Close_path || (Close_path = /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    d: "M18.36 5.64 5.63 18.37M18.36 18.37 5.63 5.64",
    stroke: "currentColor"
  })));
};
/* harmony default export */ const Close = (SvgClose);
// EXTERNAL MODULE: ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./components/Overlay/Overlay.css
var Overlay = __webpack_require__(340);
;// CONCATENATED MODULE: ./components/Overlay/Overlay.css

      
      
      
      
      
      
      
      
      

var Overlay_options = {"attributes":{"data-dropin":"@dropins/storefront-pdp"}};

Overlay_options.styleTagTransform = (styleTagTransform_default());
Overlay_options.setAttributes = (setAttributesWithAttributesAndNonce_default());
Overlay_options.insert = function insertAtTop(element) {
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
Overlay_options.domAPI = (styleDomAPI_default());
Overlay_options.insertStyleElement = (insertStyleElement_default());

var Overlay_update = injectStylesIntoStyleTag_default()(Overlay/* default */.Z, Overlay_options);




       /* harmony default export */ const Overlay_Overlay = (Overlay/* default */.Z && Overlay/* default */.Z.locals ? Overlay/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./components/Overlay/Overlay.tsx
function Overlay_typeof(obj) { "@babel/helpers - typeof"; return Overlay_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Overlay_typeof(obj); }
var Overlay_excluded = ["centered", "onClose", "className", "children"];
function Overlay_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function Overlay_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Overlay_ownKeys(Object(source), !0).forEach(function (key) { Overlay_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Overlay_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function Overlay_defineProperty(obj, key, value) { key = Overlay_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Overlay_toPropertyKey(arg) { var key = Overlay_toPrimitive(arg, "string"); return Overlay_typeof(key) === "symbol" ? key : String(key); }
function Overlay_toPrimitive(input, hint) { if (Overlay_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (Overlay_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function Overlay_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Overlay_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function Overlay_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var Overlay_Overlay_Overlay = function Overlay(_ref) {
  var centered = _ref.centered,
    onClose = _ref.onClose,
    className = _ref.className,
    children = _ref.children,
    props = Overlay_objectWithoutProperties(_ref, Overlay_excluded);
  // i18n
  var CloseLabel = (0,preact_i18n_esm/* useText */.XK)('PDP.Overlay.Close.label').label;
  var handleOnClose = (0,preact_compat_js_.useCallback)(function () {
    onClose === null || onClose === void 0 ? void 0 : onClose();
  }, [onClose]);

  // Close on ESC
  (0,preact_compat_js_.useEffect)(function () {
    var handleKeyDown = function handleKeyDown(event) {
      if (event.key === 'Escape') {
        handleOnClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return function () {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleOnClose]);

  // Prevent document scrolling
  (0,preact_compat_js_.useEffect)(function () {
    var scrollingElement = document.scrollingElement;
    var defaultOverflowValue = scrollingElement.style.overflow;
    scrollingElement.style.overflow = 'hidden';
    return function () {
      scrollingElement.style.overflow = defaultOverflowValue;
    };
  }, []);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", Overlay_objectSpread(Overlay_objectSpread({}, props), {}, {
    className: (0,classes/* classes */.S)(['pdp-overlay', ['pdp-overlay--centered', centered], className]),
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "pdp-overlay__content",
      children: children
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Button_Button_Button, {
      "aria-label": CloseLabel,
      variant: "tertiary",
      className: "pdp-overlay__close-button",
      onClick: handleOnClose,
      icon: /*#__PURE__*/(0,jsx_runtime.jsx)(Close, {})
    })]
  }));
};
// EXTERNAL MODULE: ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./components/Product/Product.css
var Product = __webpack_require__(994);
;// CONCATENATED MODULE: ./components/Product/Product.css

      
      
      
      
      
      
      
      
      

var Product_options = {"attributes":{"data-dropin":"@dropins/storefront-pdp"}};

Product_options.styleTagTransform = (styleTagTransform_default());
Product_options.setAttributes = (setAttributesWithAttributesAndNonce_default());
Product_options.insert = function insertAtTop(element) {
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
Product_options.domAPI = (styleDomAPI_default());
Product_options.insertStyleElement = (insertStyleElement_default());

var Product_update = injectStylesIntoStyleTag_default()(Product/* default */.Z, Product_options);




       /* harmony default export */ const Product_Product = (Product/* default */.Z && Product/* default */.Z.locals ? Product/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./components/Product/Product.tsx
function Product_typeof(obj) { "@babel/helpers - typeof"; return Product_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Product_typeof(obj); }
var Product_excluded = ["title", "breadcrumbs", "galleryContent", "productInfo", "productContent", "sku", "outOfStock", "hideSku", "shortDescription", "description", "attributes", "images", "options", "price", "specialPrice", "className", "children", "quantity", "actions", "carouselConfig"];
function Product_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function Product_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Product_ownKeys(Object(source), !0).forEach(function (key) { Product_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Product_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function Product_defineProperty(obj, key, value) { key = Product_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Product_toPropertyKey(arg) { var key = Product_toPrimitive(arg, "string"); return Product_typeof(key) === "symbol" ? key : String(key); }
function Product_toPrimitive(input, hint) { if (Product_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (Product_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function Product_slicedToArray(arr, i) { return Product_arrayWithHoles(arr) || Product_iterableToArrayLimit(arr, i) || Product_unsupportedIterableToArray(arr, i) || Product_nonIterableRest(); }
function Product_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Product_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Product_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Product_arrayLikeToArray(o, minLen); }
function Product_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Product_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function Product_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Product_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Product_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function Product_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var Product_Product_Product = function Product(_ref) {
  var _carouselConfig$thumb;
  var title = _ref.title,
    breadcrumbs = _ref.breadcrumbs,
    galleryContent = _ref.galleryContent,
    productInfo = _ref.productInfo,
    productContent = _ref.productContent,
    sku = _ref.sku,
    outOfStock = _ref.outOfStock,
    hideSku = _ref.hideSku,
    shortDescription = _ref.shortDescription,
    description = _ref.description,
    attributes = _ref.attributes,
    images = _ref.images,
    options = _ref.options,
    price = _ref.price,
    specialPrice = _ref.specialPrice,
    className = _ref.className,
    children = _ref.children,
    quantity = _ref.quantity,
    actions = _ref.actions,
    carouselConfig = _ref.carouselConfig,
    props = Product_objectWithoutProperties(_ref, Product_excluded);
  // i18n
  var RegularPriceLabel = (0,preact_i18n_esm/* useText */.XK)('PDP.Product.RegularPrice.label').label;
  var SpecialPriceLabel = (0,preact_i18n_esm/* useText */.XK)('PDP.Product.SpecialPrice.label').label;
  var OutOfStockLabel = (0,preact_i18n_esm/* useText */.XK)('PDP.Product.OutOfStock.label').label;
  var ImagesLabel = (0,preact_i18n_esm/* useText */.XK)('PDP.Product.Image.label').label;
  var _useState = (0,preact_compat_js_.useState)(null),
    _useState2 = Product_slicedToArray(_useState, 2),
    zoom = _useState2[0],
    setZoom = _useState2[1];
  var galleryImages = images !== null && images !== void 0 && images.length ? images.map(function (image, key) {
    var _title$props;
    return /*#__PURE__*/(0,jsx_runtime.jsx)(vcomponent/* VComponent */.F, {
      node: image,
      loading: key === 0 ? 'eager' : 'lazy',
      alt: (title === null || title === void 0 ? void 0 : (_title$props = title.props) === null || _title$props === void 0 ? void 0 : _title$props.children) && (ImagesLabel === null || ImagesLabel === void 0 ? void 0 : ImagesLabel.replace('{product}', title.props.children.toString()).replace('{key}', String(key + 1)).replace('{total}', String(images.length))),
      onClick: function onClick() {
        return setZoom(key);
      }
    }, key);
  }) : /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
    src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    className: "pdp-product__images__placeholder",
    "aria-hidden": true
  });
  var localThumbnailsImages = carouselConfig !== null && carouselConfig !== void 0 && (_carouselConfig$thumb = carouselConfig.thumbnails) !== null && _carouselConfig$thumb !== void 0 && _carouselConfig$thumb.length ? carouselConfig.thumbnails.map(function (image, key) {
    var _title$props2;
    return /*#__PURE__*/(0,jsx_runtime.jsx)(vcomponent/* VComponent */.F, {
      node: image,
      loading: (carouselConfig === null || carouselConfig === void 0 ? void 0 : carouselConfig.thumbnailsLoadingMode) || 'lazy',
      alt: (title === null || title === void 0 ? void 0 : (_title$props2 = title.props) === null || _title$props2 === void 0 ? void 0 : _title$props2.children) && (ImagesLabel === null || ImagesLabel === void 0 ? void 0 : ImagesLabel.replace('{product}', title.props.children.toString()).replace('{key}', String(key + 1)).replace('{total}', String(images.length)))
    }, key);
  }) : /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
    src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    className: "pdp-product__images__placeholder",
    "aria-hidden": true
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", Product_objectSpread(Product_objectSpread({}, props), {}, {
    className: (0,classes/* classes */.S)(['pdp-product', className]),
    children: [breadcrumbs && /*#__PURE__*/(0,jsx_runtime.jsx)(vcomponent/* VComponent */.F, {
      node: breadcrumbs,
      className: "pdp-product__breadcrumbs"
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "pdp-product__column-container pdp-product__gallery-column",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "pdp-product__column-body",
        children: carouselConfig !== null && carouselConfig !== void 0 && carouselConfig.controls ? /*#__PURE__*/(0,jsx_runtime.jsx)(Carousel_Carousel_Carousel, {
          className: "pdp-product__overlay__carousel",
          arrows: (images === null || images === void 0 ? void 0 : images.length) > 1,
          controls: (images === null || images === void 0 ? void 0 : images.length) > 1 ? carouselConfig.controls : 'dots',
          loop: (carouselConfig === null || carouselConfig === void 0 ? void 0 : carouselConfig.loopable) && (images === null || images === void 0 ? void 0 : images.length) > 1,
          width: "100%",
          height: "100%",
          defaultIndex: zoom || 0,
          thumbnails: localThumbnailsImages,
          children: galleryImages
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)(GalleryGrid_GalleryGrid_GalleryGrid, {
          className: "pdp-product__images",
          gap: "small",
          children: galleryImages
        })
      }), galleryContent && /*#__PURE__*/(0,jsx_runtime.jsx)(vcomponent/* VComponent */.F, {
        node: galleryContent,
        className: "pdp-product__gallery-content"
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "pdp-product__column-container pdp-product__content-column",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "pdp-product__column-body",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "pdp-product__header",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(vcomponent/* VComponent */.F, {
            node: /*#__PURE__*/(0,jsx_runtime.jsx)("h1", {
              children: title
            }),
            className: "pdp-product__title"
          }), !hideSku && sku && /*#__PURE__*/(0,jsx_runtime.jsx)(vcomponent/* VComponent */.F, {
            node: sku,
            className: "pdp-product__sku"
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "pdp-product__prices",
            children: [specialPrice && /*#__PURE__*/(0,jsx_runtime.jsx)(vcomponent/* VComponent */.F, {
              node: specialPrice,
              className: (0,classes/* classes */.S)(['pdp-product__price-special', 'pdp-product__price--grey']),
              "aria-label": SpecialPriceLabel,
              role: "text"
            }), price && /*#__PURE__*/(0,jsx_runtime.jsx)(vcomponent/* VComponent */.F, {
              node: price,
              className: (0,classes/* classes */.S)(['pdp-product__price']),
              "aria-label": RegularPriceLabel,
              role: "text"
            })]
          })]
        }), carouselConfig !== null && carouselConfig !== void 0 && carouselConfig.mobile ? /*#__PURE__*/(0,jsx_runtime.jsx)(Carousel_Carousel_Carousel, {
          className: "pdp-product__images pdp-product__images--carousel pdp-product__images--carousel--thumbnails",
          width: "100%",
          height: "auto",
          arrows: (images === null || images === void 0 ? void 0 : images.length) > 1,
          controls: (images === null || images === void 0 ? void 0 : images.length) > 1 ? 'thumbnailsRow' : null,
          loop: (carouselConfig === null || carouselConfig === void 0 ? void 0 : carouselConfig.loopable) && (images === null || images === void 0 ? void 0 : images.length) > 1,
          thumbnails: localThumbnailsImages,
          children: galleryImages
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Carousel_Carousel_Carousel, {
          className: "pdp-product__images pdp-product__images--carousel",
          peak: (images === null || images === void 0 ? void 0 : images.length) > 1,
          width: "100%",
          height: "auto",
          arrows: (images === null || images === void 0 ? void 0 : images.length) > 1,
          controls: (images === null || images === void 0 ? void 0 : images.length) > 1 ? 'dots' : null,
          loop: (carouselConfig === null || carouselConfig === void 0 ? void 0 : carouselConfig.loopable) && (images === null || images === void 0 ? void 0 : images.length) > 1,
          children: galleryImages
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: (0,classes/* classes */.S)(['pdp-product__actions', ["pdp-product__actions--out-of-stock", outOfStock]]),
          children: [outOfStock && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "pdp-product__out-of-stock__text",
            children: OutOfStockLabel
          }), options && /*#__PURE__*/(0,jsx_runtime.jsx)(vcomponent/* VComponent */.F, {
            node: options,
            className: (0,classes/* classes */.S)(['pdp-product__options'])
          }), quantity && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "pdp-product__quantity",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(vcomponent/* VComponent */.F, {
              node: quantity
            })
          }), actions && /*#__PURE__*/(0,jsx_runtime.jsx)(vcomponent/* VComponent */.F, {
            node: actions,
            className: (0,classes/* classes */.S)(['pdp-product__buttons'])
          })]
        }), shortDescription && /*#__PURE__*/(0,jsx_runtime.jsx)(vcomponent/* VComponent */.F, {
          node: shortDescription,
          className: (0,classes/* classes */.S)(['pdp-product__short_description'])
        }), description && /*#__PURE__*/(0,jsx_runtime.jsx)(vcomponent/* VComponent */.F, {
          node: description,
          className: (0,classes/* classes */.S)(['pdp-product__description'])
        }), attributes ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "pdp-product__attributes",
          children: attributes
        }) : null]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(vcomponent/* VComponent */.F, {
        node: productInfo,
        className: "pdp-product__product-info"
      })]
    }), productContent && /*#__PURE__*/(0,jsx_runtime.jsx)(vcomponent/* VComponent */.F, {
      node: productContent,
      className: "pdp-product__product-content"
    }), zoom === null ? null : /*#__PURE__*/(0,jsx_runtime.jsx)(Overlay_Overlay_Overlay, {
      className: "pdp-product__overlay",
      onClose: function onClose() {
        return setZoom(null);
      },
      centered: true,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Carousel_Carousel_Carousel, {
        className: "pdp-product__overlay__carousel",
        arrows: (images === null || images === void 0 ? void 0 : images.length) > 1,
        width: "100%",
        height: "100%",
        defaultIndex: zoom || 0,
        loop: (images === null || images === void 0 ? void 0 : images.length) > 1,
        controls: (images === null || images === void 0 ? void 0 : images.length) > 1 ? 'dots' : null,
        isZoomed: true,
        children: galleryImages
      })
    })]
  }));
};
// EXTERNAL MODULE: ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./components/PriceRange/PriceRange.css
var PriceRange = __webpack_require__(321);
;// CONCATENATED MODULE: ./components/PriceRange/PriceRange.css

      
      
      
      
      
      
      
      
      

var PriceRange_options = {"attributes":{"data-dropin":"@dropins/storefront-pdp"}};

PriceRange_options.styleTagTransform = (styleTagTransform_default());
PriceRange_options.setAttributes = (setAttributesWithAttributesAndNonce_default());
PriceRange_options.insert = function insertAtTop(element) {
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
PriceRange_options.domAPI = (styleDomAPI_default());
PriceRange_options.insertStyleElement = (insertStyleElement_default());

var PriceRange_update = injectStylesIntoStyleTag_default()(PriceRange/* default */.Z, PriceRange_options);




       /* harmony default export */ const PriceRange_PriceRange = (PriceRange/* default */.Z && PriceRange/* default */.Z.locals ? PriceRange/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../ElsieSDK/packages/elsie/src/components/Price/Price.css
var Price = __webpack_require__(192);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/components/Price/Price.css

      
      
      
      
      
      
      
      
      

var Price_options = {"attributes":{"data-dropin":"@dropins/storefront-pdp"}};

Price_options.styleTagTransform = (styleTagTransform_default());
Price_options.setAttributes = (setAttributesWithAttributesAndNonce_default());
Price_options.insert = function insertAtTop(element) {
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
Price_options.domAPI = (styleDomAPI_default());
Price_options.insertStyleElement = (insertStyleElement_default());

var Price_update = injectStylesIntoStyleTag_default()(Price/* default */.Z, Price_options);




       /* harmony default export */ const Price_Price = (Price/* default */.Z && Price/* default */.Z.locals ? Price/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/components/Price/Price.tsx
function Price_typeof(obj) { "@babel/helpers - typeof"; return Price_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Price_typeof(obj); }
var Price_excluded = ["amount", "currency", "locale", "variant", "weight", "className", "children", "sale", "formatOptions", "size"];
function Price_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function Price_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Price_ownKeys(Object(source), !0).forEach(function (key) { Price_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Price_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function Price_defineProperty(obj, key, value) { key = Price_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Price_toPropertyKey(arg) { var key = Price_toPrimitive(arg, "string"); return Price_typeof(key) === "symbol" ? key : String(key); }
function Price_toPrimitive(input, hint) { if (Price_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (Price_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function Price_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Price_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function Price_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Price_Price_Price = function Price(_ref) {
  var _ref$amount = _ref.amount,
    amount = _ref$amount === void 0 ? 0 : _ref$amount,
    currency = _ref.currency,
    _ref$locale = _ref.locale,
    locale = _ref$locale === void 0 ? undefined : _ref$locale,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'default' : _ref$variant,
    _ref$weight = _ref.weight,
    weight = _ref$weight === void 0 ? 'bold' : _ref$weight,
    className = _ref.className,
    children = _ref.children,
    _ref$sale = _ref.sale,
    sale = _ref$sale === void 0 ? false : _ref$sale,
    _ref$formatOptions = _ref.formatOptions,
    formatOptions = _ref$formatOptions === void 0 ? {} : _ref$formatOptions,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'small' : _ref$size,
    props = Price_objectWithoutProperties(_ref, Price_excluded);
  var formatter = (0,preact_compat_js_.useMemo)(function () {
    return new Intl.NumberFormat(locale, Price_objectSpread({
      style: 'currency',
      currency: currency || 'USD',
      // These options are needed to round to whole numbers if that's what you want.
      minimumFractionDigits: 2,
      // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      maximumFractionDigits: 2
    }, formatOptions));
  }, [locale, currency, formatOptions]);
  var formattedAmount = (0,preact_compat_js_.useMemo)(function () {
    return formatter.format(amount);
  }, [amount, formatter]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("span", Price_objectSpread(Price_objectSpread({}, props), {}, {
    className: (0,classes/* classes */.S)(['dropin-price', "dropin-price--".concat(variant), "dropin-price--".concat(size), "dropin-price--".concat(weight), ['dropin-price--sale', sale], className]),
    children: formattedAmount
  }));
};
;// CONCATENATED MODULE: ./components/PriceRange/PriceRange.tsx
function PriceRange_typeof(obj) { "@babel/helpers - typeof"; return PriceRange_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, PriceRange_typeof(obj); }
var PriceRange_excluded = ["amount", "currency", "locale", "variant", "sale", "minimumAmount", "maximumAmount", "className"];
function PriceRange_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function PriceRange_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? PriceRange_ownKeys(Object(source), !0).forEach(function (key) { PriceRange_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : PriceRange_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function PriceRange_defineProperty(obj, key, value) { key = PriceRange_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function PriceRange_toPropertyKey(arg) { var key = PriceRange_toPrimitive(arg, "string"); return PriceRange_typeof(key) === "symbol" ? key : String(key); }
function PriceRange_toPrimitive(input, hint) { if (PriceRange_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (PriceRange_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function PriceRange_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = PriceRange_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function PriceRange_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*
ADOBE CONFIDENTIAL
Copyright 2023 Adobe
All Rights Reserved.
NOTICE: All information contained herein is, and remains
the property of Adobe and its suppliers, if any. The intellectual
and technical concepts contained herein are proprietary to Adobe
and its suppliers and are protected by all applicable intellectual
property laws, including trade secret and copyright laws.
Dissemination of this information or reproduction of this material
is strictly forbidden unless prior written permission is obtained
from Adobe.
*/






var PriceRange_PriceRange_PriceRange = function PriceRange(_ref) {
  var amount = _ref.amount,
    currency = _ref.currency,
    locale = _ref.locale,
    variant = _ref.variant,
    sale = _ref.sale,
    minimumAmount = _ref.minimumAmount,
    maximumAmount = _ref.maximumAmount,
    className = _ref.className,
    props = PriceRange_objectWithoutProperties(_ref, PriceRange_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: amount || minimumAmount === maximumAmount ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", PriceRange_objectSpread(PriceRange_objectSpread({
      className: 'pdp-price-range'
    }, props), {}, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Price_Price_Price, {
        amount: amount ? amount : minimumAmount,
        currency: currency,
        locale: locale,
        variant: variant,
        sale: sale,
        className: className
      })
    })) : /*#__PURE__*/(0,jsx_runtime.jsxs)("div", PriceRange_objectSpread(PriceRange_objectSpread({
      className: 'pdp-price-range'
    }, props), {}, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Price_Price_Price, {
        amount: minimumAmount,
        currency: currency,
        locale: locale,
        className: className
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: "pdp-price-range__label",
        children: '-'
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Price_Price_Price, {
        amount: maximumAmount,
        currency: currency,
        locale: locale,
        className: className
      })]
    }))
  });
};
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/icons/Cart.svg
var Cart_g, _defs;
function Cart_extends() { Cart_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Cart_extends.apply(this, arguments); }

var SvgCart = function SvgCart(props) {
  return /*#__PURE__*/preact_js_.createElement("svg", Cart_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), Cart_g || (Cart_g = /*#__PURE__*/preact_js_.createElement("g", {
    clipPath: "url(#Cart_svg__a)",
    stroke: "currentColor",
    strokeLinejoin: "round"
  }, /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    d: "M18.36 18.16H6.56L4.88 3H2.35m17.32 16.59a1.41 1.41 0 1 1-2.82 0 1.41 1.41 0 0 1 2.82 0Zm-12.24 0a1.41 1.41 0 1 1-2.82 0 1.41 1.41 0 0 1 2.82 0Z"
  }), /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    d: "m5.25 6.37 15.64 1.69-.75 6.74H6.19"
  }))), _defs || (_defs = /*#__PURE__*/preact_js_.createElement("defs", null, /*#__PURE__*/preact_js_.createElement("clipPath", {
    id: "Cart_svg__a"
  }, /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    fill: "#fff",
    transform: "translate(2.35 2.25)",
    d: "M0 0h19.29v19.5H0z"
  })))));
};
/* harmony default export */ const Cart = (SvgCart);
// EXTERNAL MODULE: ./api/getProductData/getProductData.ts + 1 modules
var getProductData = __webpack_require__(675);
// EXTERNAL MODULE: ./api/getRefinedProduct/getRefinedProduct.ts + 1 modules
var getRefinedProduct = __webpack_require__(52);
// EXTERNAL MODULE: external "@dropins/tools/event-bus.js"
var event_bus_js_ = __webpack_require__(214);
;// CONCATENATED MODULE: ./lib/date.ts

function toDateString(value) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en_US';
  if (!isDateValid(value)) throw Error('Invalid date string');

  // normalize time to 00:00:00
  var time = value.split(' ')[1];
  if (!time) value = "".concat(value, " 00:00:00");
  return new Date(value).toLocaleDateString(toLanguageTag(locale)).toString();
}
function isDateValid(dateString) {
  var acceptedFormats = [/^\d{4}-\d{2}-\d{2}$/,
  // YYYY-MM-DD
  /^\d{1,2}\/\d{1,2}\/\d{4}$/,
  // MM/DD/YYYY
  /^\d{2}\/\d{2}\/\d{4}$/,
  // MM/DD/YYYY
  /^\d{4}\/\d{2}\/\d{2}$/,
  // YYYY/MM/DD
  /^\d{1,2}\.\d{1,2}\.\d{4}$/,
  // DD.MM.YYYY
  /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/ // YYYY-MM-DD HH:mm:ss
  ];

  if (!acceptedFormats.some(function (format) {
    return format.test(dateString);
  })) return false;
  var date = new Date(dateString);
  return !isNaN(date.getTime());
}
;// CONCATENATED MODULE: ./lib/url-params.ts
function url_params_slicedToArray(arr, i) { return url_params_arrayWithHoles(arr) || url_params_iterableToArrayLimit(arr, i) || url_params_unsupportedIterableToArray(arr, i) || url_params_nonIterableRest(); }
function url_params_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function url_params_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return url_params_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return url_params_arrayLikeToArray(o, minLen); }
function url_params_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function url_params_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function url_params_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function setUrlParams(params) {
  var urlSearchParams = new URLSearchParams(window.location.search);
  Object.entries(params).forEach(function (_ref) {
    var _ref2 = url_params_slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    if (value === null) {
      urlSearchParams.delete(key);
    } else {
      urlSearchParams.set(key, String(value));
    }
  });
  var url = window.location.pathname;
  url += "?".concat(urlSearchParams.toString());
  url += window.location.hash;
  window.history.replaceState({}, '', url);
}
function getUrlParams() {
  var urlSearchParams = new URLSearchParams(window.location.search);
  var params = {};
  urlSearchParams.forEach(function (value, key) {
    params[key] = value;
  });
  return params;
}
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/icons/Bulk.svg
var Bulk_defs, Bulk_g;
function Bulk_extends() { Bulk_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Bulk_extends.apply(this, arguments); }

var SvgBulk = function SvgBulk(props) {
  return /*#__PURE__*/preact_js_.createElement("svg", Bulk_extends({
    "data-name": "Icon \\u2013 Bulk \\u2013 Base",
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24
  }, props), Bulk_defs || (Bulk_defs = /*#__PURE__*/preact_js_.createElement("defs", null, /*#__PURE__*/preact_js_.createElement("clipPath", {
    id: "Bulk_svg__a"
  }, /*#__PURE__*/preact_js_.createElement("path", {
    "data-name": "Rectangle 215980",
    fill: "none",
    d: "M0 0h12v12H0z"
  })))), Bulk_g || (Bulk_g = /*#__PURE__*/preact_js_.createElement("g", {
    "data-name": "Bulk icon"
  }, /*#__PURE__*/preact_js_.createElement("g", {
    "data-name": "Rectangle 215979",
    fill: "none",
    stroke: "currentColor"
  }, /*#__PURE__*/preact_js_.createElement("path", {
    stroke: "none",
    d: "M3 3h12v12H3z"
  }), /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    d: "M3.75 3.75h10.5v10.5H3.75z"
  })), /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    "data-name": "Path 884140",
    d: "M9 6v6",
    fill: "none",
    stroke: "currentColor"
  }), /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    "data-name": "Path 884141",
    d: "M6 9.005h6",
    fill: "none",
    stroke: "currentColor"
  }), /*#__PURE__*/preact_js_.createElement("g", {
    "data-name": "Group 299364",
    transform: "translate(6 6)",
    clipPath: "url(#Bulk_svg__a)"
  }, /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    "data-name": "Path 884142",
    d: "M11.25.75v10.5H.75",
    fill: "none",
    stroke: "currentColor"
  })), /*#__PURE__*/preact_js_.createElement("g", {
    "data-name": "Group 299364",
    transform: "translate(9 9)",
    clipPath: "url(#Bulk_svg__a)"
  }, /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    "data-name": "Path 884142",
    d: "M11.25.75v10.5H.75",
    fill: "none",
    stroke: "currentColor"
  })))));
};
/* harmony default export */ const Bulk = (SvgBulk);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/icons/Burger.svg
var Burger_path;
function Burger_extends() { Burger_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Burger_extends.apply(this, arguments); }

var SvgBurger = function SvgBurger(props) {
  return /*#__PURE__*/preact_js_.createElement("svg", Burger_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), Burger_path || (Burger_path = /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    d: "M3 12h18M3 6h18M3 18h18",
    stroke: "currentColor"
  })));
};
/* harmony default export */ const Burger = (SvgBurger);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/icons/Check.svg
var Check_g;
function Check_extends() { Check_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Check_extends.apply(this, arguments); }

var SvgCheck = function SvgCheck(props) {
  return /*#__PURE__*/preact_js_.createElement("svg", Check_extends({
    "data-name": "Icon \\u2013 Check \\u2013 Base",
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24
  }, props), Check_g || (Check_g = /*#__PURE__*/preact_js_.createElement("g", {
    "data-name": "Check icon"
  }, /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    "data-name": "Path 884137",
    d: "m5.609 12.017 4.248 4.244 8.538-8.522",
    fill: "none",
    stroke: "currentColor"
  }))));
};
/* harmony default export */ const Check = (SvgCheck);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/icons/ChevronUp.svg
var ChevronUp_path;
function ChevronUp_extends() { ChevronUp_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ChevronUp_extends.apply(this, arguments); }

var SvgChevronUp = function SvgChevronUp(props) {
  return /*#__PURE__*/preact_js_.createElement("svg", ChevronUp_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ChevronUp_path || (ChevronUp_path = /*#__PURE__*/preact_js_.createElement("path", {
    d: "M7.745 14.132 12 9.877l4.255 4.255",
    stroke: "#2B2B2B",
    strokeWidth: 1.5,
    strokeLinecap: "square",
    strokeLinejoin: "round"
  })));
};
/* harmony default export */ const ChevronUp = (SvgChevronUp);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/icons/ChevronRight.svg
var ChevronRight_path;
function ChevronRight_extends() { ChevronRight_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ChevronRight_extends.apply(this, arguments); }

var SvgChevronRight = function SvgChevronRight(props) {
  return /*#__PURE__*/preact_js_.createElement("svg", ChevronRight_extends({
    "data-name": "Icon \\u2013 Chevron right \\u2013 Base",
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24
  }, props), ChevronRight_path || (ChevronRight_path = /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    d: "m10.5 16.5 4.255-4.255L10.5 7.99",
    fill: "none",
    stroke: "currentColor",
    "data-name": "Chevron right icon"
  })));
};
/* harmony default export */ const ChevronRight = (SvgChevronRight);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/icons/Heart.svg
var Heart_path;
function Heart_extends() { Heart_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Heart_extends.apply(this, arguments); }

var SvgHeart = function SvgHeart(props) {
  return /*#__PURE__*/preact_js_.createElement("svg", Heart_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), Heart_path || (Heart_path = /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    d: "M19.734 5.418a4.815 4.815 0 0 0-6.824 0l-.929.93-.929-.93a4.815 4.815 0 0 0-6.823.07 4.833 4.833 0 0 0 0 6.76l.929.93 6.823 6.83 6.824-6.83.929-.93a4.826 4.826 0 0 0 0-6.83Z",
    stroke: "currentColor"
  })));
};
/* harmony default export */ const Heart = (SvgHeart);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/icons/Placeholder.svg
var _circle;
function Placeholder_extends() { Placeholder_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Placeholder_extends.apply(this, arguments); }

var SvgPlaceholder = function SvgPlaceholder(props) {
  return /*#__PURE__*/preact_js_.createElement("svg", Placeholder_extends({
    width: 24,
    height: 24,
    fill: "none",
    "data-name": "placeholder_icon",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _circle || (_circle = /*#__PURE__*/preact_js_.createElement("circle", {
    vectorEffect: "non-scaling-stroke",
    cx: 12,
    cy: 12,
    r: 8.25,
    stroke: "currentColor"
  })));
};
/* harmony default export */ const Placeholder = (SvgPlaceholder);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/icons/PlaceholderFilled.svg
var PlaceholderFilled_circle;
function PlaceholderFilled_extends() { PlaceholderFilled_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return PlaceholderFilled_extends.apply(this, arguments); }

var SvgPlaceholderFilled = function SvgPlaceholderFilled(props) {
  return /*#__PURE__*/preact_js_.createElement("svg", PlaceholderFilled_extends({
    width: 24,
    height: 24,
    fill: "currentColor",
    "data-name": "placeholder_icon_filled",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), PlaceholderFilled_circle || (PlaceholderFilled_circle = /*#__PURE__*/preact_js_.createElement("circle", {
    vectorEffect: "non-scaling-stroke",
    cx: 12,
    cy: 12,
    r: 8.25,
    stroke: "currentColor"
  })));
};
/* harmony default export */ const PlaceholderFilled = (SvgPlaceholderFilled);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/icons/Search.svg
var Search_g;
function Search_extends() { Search_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Search_extends.apply(this, arguments); }

var SvgSearch = function SvgSearch(props) {
  return /*#__PURE__*/preact_js_.createElement("svg", Search_extends({
    "data-name": "Icon \\u2013 Search \\u2013 Base",
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none"
  }, props), Search_g || (Search_g = /*#__PURE__*/preact_js_.createElement("g", {
    "data-name": "Search icon",
    transform: "translate(3.75 3.75)",
    stroke: "currentColor"
  }, /*#__PURE__*/preact_js_.createElement("circle", {
    vectorEffect: "non-scaling-stroke",
    "data-name": "Ellipse 186",
    cx: 6,
    cy: 6,
    r: 6
  }), /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    "data-name": "Line 556",
    d: "m10.5 10.5 6 6"
  }))));
};
/* harmony default export */ const Search = (SvgSearch);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/icons/SearchFilled.svg
var SearchFilled_g;
function SearchFilled_extends() { SearchFilled_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SearchFilled_extends.apply(this, arguments); }

var SvgSearchFilled = function SvgSearchFilled(props) {
  return /*#__PURE__*/preact_js_.createElement("svg", SearchFilled_extends({
    "data-name": "Icon \\u2013 Search \\u2013 Base",
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none"
  }, props), SearchFilled_g || (SearchFilled_g = /*#__PURE__*/preact_js_.createElement("g", {
    "data-name": "Search icon filled",
    transform: "translate(3.75 3.75)",
    stroke: "currentColor"
  }, /*#__PURE__*/preact_js_.createElement("circle", {
    vectorEffect: "non-scaling-stroke",
    "data-name": "Ellipse 186",
    cx: 6,
    cy: 6,
    r: 6,
    fill: "#fff"
  }), /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    "data-name": "Line 556",
    d: "m10.5 10.5 6 6"
  }))));
};
/* harmony default export */ const SearchFilled = (SvgSearchFilled);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/icons/Sort.svg
var Sort_g;
function Sort_extends() { Sort_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Sort_extends.apply(this, arguments); }

var SvgSort = function SvgSort(props) {
  return /*#__PURE__*/preact_js_.createElement("svg", Sort_extends({
    "data-name": "Icon \\u2013 Sort \\u2013 Base",
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24
  }, props), Sort_g || (Sort_g = /*#__PURE__*/preact_js_.createElement("g", {
    "data-name": "Sort icon",
    fill: "none",
    stroke: "currentColor"
  }, /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    "data-name": "Path 38562",
    d: "m19.048 15.003-1.5 1.5-1.5-1.5"
  }), /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    "data-name": "Line 510",
    d: "M4.951 12h6.833"
  }), /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    "data-name": "Line 511",
    d: "M4.951 8.136h8.121M17.544 7.491v9.017"
  }), /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    "data-name": "Line 512",
    d: "M4.951 15.864h5.545"
  }))));
};
/* harmony default export */ const Sort = (SvgSort);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/icons/Star.svg
var Star_g;
function Star_extends() { Star_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Star_extends.apply(this, arguments); }

var SvgStar = function SvgStar(props) {
  return /*#__PURE__*/preact_js_.createElement("svg", Star_extends({
    "data-name": "Icon \\u2013 Star \\u2013 Base",
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none"
  }, props), Star_g || (Star_g = /*#__PURE__*/preact_js_.createElement("g", {
    "data-name": "Star icon"
  }, /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    "data-name": "Path 884138",
    d: "m12.4 2.087 2.5 6.656a.285.285 0 0 0 .253.185l7.075.334a.431.431 0 0 1 .247.764l-5.518 4.453a.286.286 0 0 0-.1.3l1.867 6.865a.427.427 0 0 1-.646.472l-5.921-3.903a.285.285 0 0 0-.313 0l-5.921 3.906a.428.428 0 0 1-.646-.472l1.867-6.868a.286.286 0 0 0-.1-.3l-5.523-4.455a.431.431 0 0 1-.064-.6.427.427 0 0 1 .312-.159l7.075-.334a.285.285 0 0 0 .253-.185l2.5-6.653a.427.427 0 0 1 .8 0Z",
    stroke: "currentColor"
  }))));
};
/* harmony default export */ const Star = (SvgStar);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/icons/View.svg
var View_g;
function View_extends() { View_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return View_extends.apply(this, arguments); }

var SvgView = function SvgView(props) {
  return /*#__PURE__*/preact_js_.createElement("svg", View_extends({
    "data-name": "Icon \\u2013 View \\u2013 Base",
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24
  }, props), View_g || (View_g = /*#__PURE__*/preact_js_.createElement("g", {
    "data-name": "View icon",
    transform: "translate(3.75 3.75)",
    fill: "none",
    stroke: "currentColor"
  }, /*#__PURE__*/preact_js_.createElement("circle", {
    vectorEffect: "non-scaling-stroke",
    "data-name": "Ellipse 186",
    cx: 6,
    cy: 6,
    r: 6
  }), /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    "data-name": "Line 556",
    d: "m10.5 10.5 6 6"
  }), /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    "data-name": "Line 575",
    d: "M9.396 6H2.604"
  }), /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    "data-name": "Line 576",
    d: "M6 9.396V2.604"
  }))));
};
/* harmony default export */ const View = (SvgView);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/icons/User.svg
var User_path;
function User_extends() { User_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return User_extends.apply(this, arguments); }

var SvgUser = function SvgUser(props) {
  return /*#__PURE__*/preact_js_.createElement("svg", User_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), User_path || (User_path = /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    d: "M11.805 14.497c-.95 0-1.83-.47-2.36-1.26l-.03-.05-.03-.06c-1.25-1.9-1.85-4.16-1.7-6.44a4.21 4.21 0 0 1 4.18-4.08h.14a4.115 4.115 0 0 1 4.34 3.87v.23c.14 2.24-.44 4.47-1.66 6.35l-.08.12a2.99 2.99 0 0 1-2.44 1.3h-.16c-.07 0-.14.01-.21.01l.01.01ZM4.325 21.547c.03-1.13.15-2.26.35-3.37.22-1.01 1.8-2.15 4.23-3.02.33-.12.58-.37.69-.7l.21-.43M14.425 14.407l-.26-.25c.21.44.56.8.99 1.03 1.79.61 3.97 1.77 4.22 3.02.21 1.1.31 2.22.3 3.33",
    stroke: "currentColor"
  })));
};
/* harmony default export */ const User = (SvgUser);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/icons/Warning.svg
var Warning_g, Warning_defs;
function Warning_extends() { Warning_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Warning_extends.apply(this, arguments); }

var SvgWarning = function SvgWarning(props) {
  return /*#__PURE__*/preact_js_.createElement("svg", Warning_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), Warning_g || (Warning_g = /*#__PURE__*/preact_js_.createElement("g", {
    clipPath: "url(#Warning_svg__a)",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    d: "M11.995 2.302.803 21.698h22.395L11.995 2.302Z"
  }), /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    d: "m12.434 10.55-.097 3.927h-.674l-.096-3.927V9.513h.867v1.037Zm-.846 7.714v-.995h.835v.995h-.835Z"
  }))), Warning_defs || (Warning_defs = /*#__PURE__*/preact_js_.createElement("defs", null, /*#__PURE__*/preact_js_.createElement("clipPath", {
    id: "Warning_svg__a"
  }, /*#__PURE__*/preact_js_.createElement("path", {
    fill: "#fff",
    transform: "translate(0 1.5)",
    d: "M0 0h24v21H0z"
  })))));
};
/* harmony default export */ const Warning = (SvgWarning);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/icons/Locker.svg
var Locker_g, Locker_defs;
function Locker_extends() { Locker_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Locker_extends.apply(this, arguments); }

var SvgLocker = function SvgLocker(props) {
  return /*#__PURE__*/preact_js_.createElement("svg", Locker_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), Locker_g || (Locker_g = /*#__PURE__*/preact_js_.createElement("g", {
    clipPath: "url(#Locker_svg__a)",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    d: "M7.33 11h9.33c.74 0 1.33.81 1.33 1.82v6.36c0 1-.6 1.82-1.33 1.82H7.33C6.59 21 6 20.19 6 19.18v-6.36c0-1 .6-1.82 1.33-1.82ZM8.5 10.86V6.5C8.5 4.57 10.07 3 12 3s3.5 1.57 3.5 3.5v4.36"
  }))), Locker_defs || (Locker_defs = /*#__PURE__*/preact_js_.createElement("defs", null, /*#__PURE__*/preact_js_.createElement("clipPath", {
    id: "Locker_svg__a"
  }, /*#__PURE__*/preact_js_.createElement("path", {
    fill: "#fff",
    transform: "translate(5.25 2.25)",
    d: "M0 0h13.5v19.5H0z"
  })))));
};
/* harmony default export */ const Locker = (SvgLocker);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/icons/Wallet.svg
var Wallet_path, _path2;
function Wallet_extends() { Wallet_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Wallet_extends.apply(this, arguments); }

var SvgWallet = function SvgWallet(props) {
  return /*#__PURE__*/preact_js_.createElement("svg", Wallet_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), Wallet_path || (Wallet_path = /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    d: "M17.93 14.8v3.95H5.97c-1.22 0-2.22-.78-2.22-1.75V6.5m0 0c0-.97.99-1.75 2.22-1.75h9.97v3.5H5.97c-1.22 0-2.22-.78-2.22-1.75Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), _path2 || (_path2 = /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    d: "M19.35 11.64h-5.31v3.17h5.31v-3.17ZM17.93 11.64V8.25h-2.78",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};
/* harmony default export */ const Wallet = (SvgWallet);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/icons/Card.svg
var Card_path, Card_path2, _path3, _path4;
function Card_extends() { Card_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Card_extends.apply(this, arguments); }

var SvgCard = function SvgCard(props) {
  return /*#__PURE__*/preact_js_.createElement("svg", Card_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), Card_path || (Card_path = /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    d: "M2.007 5h20.144a1.01 1.01 0 0 1 1.007 1.007v1.51S1.01 7.589 1 7.559v-1.55A1.01 1.01 0 0 1 2.007 5ZM23.158 9.784v8.561a1.01 1.01 0 0 1-1.007 1.007H2.007A1.01 1.01 0 0 1 1 18.345v-8.56h22.158Z",
    stroke: "currentColor"
  })), Card_path2 || (Card_path2 = /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    d: "M3.015 15.968h5.388",
    stroke: "currentColor",
    strokeLinecap: "round"
  })), _path3 || (_path3 = /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    d: "M17.62 17.59a1.51 1.51 0 1 0 0-3.022 1.51 1.51 0 0 0 0 3.022Z",
    stroke: "currentColor"
  })), _path4 || (_path4 = /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    d: "M19.885 17.59a1.51 1.51 0 1 0 0-3.022 1.51 1.51 0 0 0 0 3.022Z",
    stroke: "currentColor"
  })));
};
/* harmony default export */ const Card = (SvgCard);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/icons/Order.svg
var Order_path, Order_path2, Order_path3;
function Order_extends() { Order_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Order_extends.apply(this, arguments); }

var SvgOrder = function SvgOrder(props) {
  return /*#__PURE__*/preact_js_.createElement("svg", Order_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), Order_path || (Order_path = /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    d: "M12 22.212 2 18.375V5.762l10 3.9v12.55ZM12 22.212l10-3.837V5.762l-10 3.9v12.55Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), Order_path2 || (Order_path2 = /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    d: "M2 5.762 12 1.8l10 3.962-10 3.9-10-3.9Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), Order_path3 || (Order_path3 = /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    d: "m7.413 3.612 10 3.913v3.838",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};
/* harmony default export */ const Order = (SvgOrder);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/icons/Delivery.svg
var Delivery_path, Delivery_path2;
function Delivery_extends() { Delivery_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Delivery_extends.apply(this, arguments); }

var SvgDelivery = function SvgDelivery(props) {
  return /*#__PURE__*/preact_js_.createElement("svg", Delivery_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), Delivery_path || (Delivery_path = /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    d: "M2.473 4.9h12.712v6.064h6.065L23 12.715v4.897h-2.927",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), Delivery_path2 || (Delivery_path2 = /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    d: "M15.176 5.876h3.826l2.037 4.888M9.762 16.79a2.294 2.294 0 0 1-2.296 2.286A2.294 2.294 0 0 1 5.18 16.78a2.286 2.286 0 0 1 2.286-2.286 2.3 2.3 0 0 1 2.296 2.286v.01ZM19.873 16.79a2.29 2.29 0 0 1-2.296 2.296 2.29 2.29 0 0 1-2.296-2.296 2.29 2.29 0 0 1 2.296-2.296 2.29 2.29 0 0 1 2.296 2.296ZM8.088 7.636h-6.39M7.112 10.362H1M5.16 13.04H1.929M9.762 16.761h5.519M2.387 16.761H5.17",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};
/* harmony default export */ const Delivery = (SvgDelivery);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/icons/OrderError.svg
var OrderError_g, OrderError_defs;
function OrderError_extends() { OrderError_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return OrderError_extends.apply(this, arguments); }

var SvgOrderError = function SvgOrderError(props) {
  return /*#__PURE__*/preact_js_.createElement("svg", OrderError_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), OrderError_g || (OrderError_g = /*#__PURE__*/preact_js_.createElement("g", {
    clipPath: "url(#OrderError_svg__a)",
    stroke: "currentColor",
    strokeLinejoin: "round"
  }, /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    d: "M10.25 20.91 1.5 17.55V6.52l8.75 3.41v10.98ZM6.24 4.64l8.75 3.42v3.36",
    strokeLinecap: "round"
  }), /*#__PURE__*/preact_js_.createElement("path", {
    className: "OrderError_svg__error-icon",
    vectorEffect: "non-scaling-stroke",
    d: "m19 13.31-3.5 6.06h7L19 13.31Z",
    strokeLinecap: "round"
  }), /*#__PURE__*/preact_js_.createElement("path", {
    className: "OrderError_svg__error-icon",
    vectorEffect: "non-scaling-stroke",
    d: "M19.02 17.11h-.04l-.03-1.55h.1l-.03 1.55Zm-.06 1.18v-.23h.09v.23h-.09Z",
    strokeLinecap: "round"
  }), /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    d: "M19 12.16V6.52l-8.75 3.41v10.98l4.02-1.54.13-.05"
  }), /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    d: "m1.5 6.52 8.75-3.47L19 6.52l-8.75 3.41L1.5 6.52Z",
    strokeLinecap: "round"
  }))), OrderError_defs || (OrderError_defs = /*#__PURE__*/preact_js_.createElement("defs", null, /*#__PURE__*/preact_js_.createElement("clipPath", {
    id: "OrderError_svg__a"
  }, /*#__PURE__*/preact_js_.createElement("path", {
    fill: "#fff",
    transform: "translate(1 2.55)",
    d: "M0 0h22v18.86H0z"
  })))));
};
/* harmony default export */ const OrderError = (SvgOrderError);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/icons/OrderSuccess.svg
var OrderSuccess_g, OrderSuccess_defs;
function OrderSuccess_extends() { OrderSuccess_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return OrderSuccess_extends.apply(this, arguments); }

var SvgOrderSuccess = function SvgOrderSuccess(props) {
  return /*#__PURE__*/preact_js_.createElement("svg", OrderSuccess_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), OrderSuccess_g || (OrderSuccess_g = /*#__PURE__*/preact_js_.createElement("g", {
    clipPath: "url(#OrderSuccess_svg__a)",
    stroke: "currentColor"
  }, /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    d: "M10.15 20.85 1.5 17.53V6.63L10.15 10v10.85Z",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    d: "m1.5 6.63 8.65-3.43 8.65 3.43L10.15 10 1.5 6.63Z",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    d: "m6.18 4.77 8.65 3.38v3.32",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    d: "M18.79 12.64V6.63L10.14 10v10.85l4.69-1.8",
    strokeLinejoin: "round"
  }), /*#__PURE__*/preact_js_.createElement("path", {
    className: "OrderSuccess_svg__success-icon",
    vectorEffect: "non-scaling-stroke",
    d: "M15.71 17.26c0-1.88 1.52-3.4 3.4-3.4s3.4 1.52 3.4 3.4-1.52 3.4-3.4 3.4-3.4-1.52-3.4-3.4Z"
  }), /*#__PURE__*/preact_js_.createElement("path", {
    className: "OrderSuccess_svg__success-icon",
    vectorEffect: "non-scaling-stroke",
    d: "m17.48 17.49 1.08.92 2.16-2.08",
    strokeLinecap: "square",
    strokeLinejoin: "round"
  }))), OrderSuccess_defs || (OrderSuccess_defs = /*#__PURE__*/preact_js_.createElement("defs", null, /*#__PURE__*/preact_js_.createElement("clipPath", {
    id: "OrderSuccess_svg__a"
  }, /*#__PURE__*/preact_js_.createElement("path", {
    fill: "#fff",
    transform: "translate(1 2.7)",
    d: "M0 0h22v18.65H0z"
  })))));
};
/* harmony default export */ const OrderSuccess = (SvgOrderSuccess);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/icons/PaymentError.svg
var PaymentError_g, PaymentError_defs;
function PaymentError_extends() { PaymentError_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return PaymentError_extends.apply(this, arguments); }

var SvgPaymentError = function SvgPaymentError(props) {
  return /*#__PURE__*/preact_js_.createElement("svg", PaymentError_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), PaymentError_g || (PaymentError_g = /*#__PURE__*/preact_js_.createElement("g", {
    clipPath: "url(#PaymentError_svg__a)",
    stroke: "currentColor"
  }, /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    d: "M2.3 4.77h15.94c.44 0 .8.36.8.8v1.2L1.5 6.8V5.57c0-.44.36-.8.8-.8Z"
  }), /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    d: "M3.86 13.45h4.27",
    strokeLinecap: "round"
  }), /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    d: "M13.89 14.74c.66 0 1.2-.54 1.2-1.2 0-.66-.54-1.2-1.2-1.2-.66 0-1.2.54-1.2 1.2 0 .66.54 1.2 1.2 1.2Z"
  }), /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    d: "M15.69 14.74c.66 0 1.2-.54 1.2-1.2 0-.66-.54-1.2-1.2-1.2-.66 0-1.2.54-1.2 1.2 0 .66.54 1.2 1.2 1.2Z"
  }), /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    d: "M19.04 11.91V8.56H1.5v6.78c0 .44.36.8.8.8h13.64"
  }), /*#__PURE__*/preact_js_.createElement("path", {
    className: "PaymentError_svg__error-icon",
    vectorEffect: "non-scaling-stroke",
    d: "m18.92 13.03-3.58 6.2h7.16l-3.58-6.2Z",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/preact_js_.createElement("path", {
    className: "PaymentError_svg__error-icon",
    vectorEffect: "non-scaling-stroke",
    d: "M18.94 16.92h-.04l-.03-1.59h.1l-.03 1.59Zm-.06 1.21v-.24h.09v.24h-.09Z",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), PaymentError_defs || (PaymentError_defs = /*#__PURE__*/preact_js_.createElement("defs", null, /*#__PURE__*/preact_js_.createElement("clipPath", {
    id: "PaymentError_svg__a"
  }, /*#__PURE__*/preact_js_.createElement("path", {
    fill: "#fff",
    transform: "translate(1 4.27)",
    d: "M0 0h22v15.46H0z"
  })))));
};
/* harmony default export */ const PaymentError = (SvgPaymentError);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/icons/CheckWithCircle.svg
var CheckWithCircle_path, CheckWithCircle_path2;
function CheckWithCircle_extends() { CheckWithCircle_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CheckWithCircle_extends.apply(this, arguments); }

var SvgCheckWithCircle = function SvgCheckWithCircle(props) {
  return /*#__PURE__*/preact_js_.createElement("svg", CheckWithCircle_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), CheckWithCircle_path || (CheckWithCircle_path = /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    d: "M.75 12C.75 5.784 5.784.75 12 .75S23.25 5.784 23.25 12 18.216 23.25 12 23.25.75 18.216.75 12Z",
    stroke: "currentColor"
  })), CheckWithCircle_path2 || (CheckWithCircle_path2 = /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    d: "m6.75 12.762 3.489 2.988L17.25 9",
    stroke: "currentColor"
  })));
};
/* harmony default export */ const CheckWithCircle = (SvgCheckWithCircle);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/icons/WarningWithCircle.svg
var WarningWithCircle_path, WarningWithCircle_path2;
function WarningWithCircle_extends() { WarningWithCircle_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return WarningWithCircle_extends.apply(this, arguments); }

var SvgWarningWithCircle = function SvgWarningWithCircle(props) {
  return /*#__PURE__*/preact_js_.createElement("svg", WarningWithCircle_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), WarningWithCircle_path || (WarningWithCircle_path = /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    d: "M.75 12C.75 5.784 5.784.75 12 .75S23.25 5.784 23.25 12 18.216 23.25 12 23.25.75 18.216.75 12Z",
    stroke: "currentColor"
  })), WarningWithCircle_path2 || (WarningWithCircle_path2 = /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    d: "M11.75 5.884V4.75h.5v1.134l-.201 7.187h-.098l-.201-7.187Zm.05 12.366v-1.263h.425v1.263H11.8Z",
    stroke: "currentColor"
  })));
};
/* harmony default export */ const WarningWithCircle = (SvgWarningWithCircle);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/icons/WarningFilled.svg
var WarningFilled_path;
function WarningFilled_extends() { WarningFilled_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return WarningFilled_extends.apply(this, arguments); }

var SvgWarningFilled = function SvgWarningFilled(props) {
  return /*#__PURE__*/preact_js_.createElement("svg", WarningFilled_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), WarningFilled_path || (WarningFilled_path = /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1 20.895 12.192 1.5l11.203 19.395H1Zm12.028-6.931.222-3.926V9h-2v1.038l.222 3.926h1.556ZM11.299 16v1.75h1.926V16H11.3Z",
    fill: "currentColor"
  })));
};
/* harmony default export */ const WarningFilled = (SvgWarningFilled);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/icons/InfoFilled.svg
var InfoFilled_path;
function InfoFilled_extends() { InfoFilled_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return InfoFilled_extends.apply(this, arguments); }

var SvgInfoFilled = function SvgInfoFilled(props) {
  return /*#__PURE__*/preact_js_.createElement("svg", InfoFilled_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), InfoFilled_path || (InfoFilled_path = /*#__PURE__*/preact_js_.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0 12C0 5.38 5.38 0 12 0s12 5.38 12 12-5.38 12-12 12S0 18.62 0 12Zm11.889-6.939c-.748 0-1.353.605-1.353 1.353v.159a1.28 1.28 0 0 0 1.353 1.194h.19c.7-.064 1.21-.669 1.162-1.353 0-.748-.604-1.353-1.352-1.353Zm1.305 11.761h.907c.159 0 .302.143.302.303v.604a.302.302 0 0 1-.302.303H9.883a.302.302 0 0 1-.302-.303v-.604c0-.175.143-.303.302-.303h.907v-6.031h-.907a.302.302 0 0 1-.302-.303v-.605c0-.175.143-.302.302-.302h2.706c.334 0 .604.27.604.605v6.636Z",
    fill: "currentColor"
  })));
};
/* harmony default export */ const InfoFilled = (SvgInfoFilled);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/icons/HeartFilled.svg
var HeartFilled_path;
function HeartFilled_extends() { HeartFilled_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return HeartFilled_extends.apply(this, arguments); }

var SvgHeartFilled = function SvgHeartFilled(props) {
  return /*#__PURE__*/preact_js_.createElement("svg", HeartFilled_extends({
    width: 24,
    height: 24,
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), HeartFilled_path || (HeartFilled_path = /*#__PURE__*/preact_js_.createElement("path", {
    vectorEffect: "non-scaling-stroke",
    d: "M12 20.75a.75.75 0 0 1-.53-.22l-7.76-7.76c-2.12-2.16-2.12-5.66 0-7.82a5.535 5.535 0 0 1 3.93-1.67h.06c1.47 0 2.85.57 3.9 1.6l.4.4.4-.4a5.537 5.537 0 0 1 3.94-1.63c1.49 0 2.89.58 3.94 1.63l.05.05c1.02 1.05 1.59 2.43 1.59 3.9s-.58 2.89-1.63 3.94l-7.76 7.76a.75.75 0 0 1-.53.22Z",
    stroke: "currentColor"
  })));
};
/* harmony default export */ const HeartFilled = (SvgHeartFilled);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/icons/index.ts

































;// CONCATENATED MODULE: ./containers/ProductDetails/ProductDetails.tsx
function ProductDetails_typeof(obj) { "@babel/helpers - typeof"; return ProductDetails_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, ProductDetails_typeof(obj); }
var ProductDetails_excluded = ["sku", "hideSku", "hideQuantity", "hideShortDescription", "hideDescription", "hideAttributes", "hideURLParams", "hideSelectedOptionValue", "slots", "children", "initialData", "carousel", "optionsConfig", "onAddToCart"],
  _excluded2 = ["text"],
  _excluded3 = ["text", "icon"];
function ProductDetails_toConsumableArray(arr) { return ProductDetails_arrayWithoutHoles(arr) || ProductDetails_iterableToArray(arr) || ProductDetails_unsupportedIterableToArray(arr) || ProductDetails_nonIterableSpread(); }
function ProductDetails_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function ProductDetails_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function ProductDetails_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return ProductDetails_arrayLikeToArray(arr); }
function ProductDetails_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function ProductDetails_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ProductDetails_ownKeys(Object(source), !0).forEach(function (key) { ProductDetails_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ProductDetails_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function ProductDetails_defineProperty(obj, key, value) { key = ProductDetails_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function ProductDetails_toPropertyKey(arg) { var key = ProductDetails_toPrimitive(arg, "string"); return ProductDetails_typeof(key) === "symbol" ? key : String(key); }
function ProductDetails_toPrimitive(input, hint) { if (ProductDetails_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (ProductDetails_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function ProductDetails_slicedToArray(arr, i) { return ProductDetails_arrayWithHoles(arr) || ProductDetails_iterableToArrayLimit(arr, i) || ProductDetails_unsupportedIterableToArray(arr, i) || ProductDetails_nonIterableRest(); }
function ProductDetails_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function ProductDetails_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ProductDetails_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ProductDetails_arrayLikeToArray(o, minLen); }
function ProductDetails_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ProductDetails_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function ProductDetails_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ProductDetails_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ProductDetails_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function ProductDetails_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }














function getIcon(icon) {
  var source = icons_namespaceObject[icon];
  return source ? /*#__PURE__*/(0,jsx_runtime.jsx)(Icon_Icon_Icon, {
    source: source
  }) : undefined;
}
var ProductDetails = function ProductDetails(_ref) {
  var _data$attributes, _data$shortDescriptio, _data$description, _data$images$map, _data$images, _data$prices, _data$prices2, _data$images$map2, _data$images2;
  var sku = _ref.sku,
    hideSku = _ref.hideSku,
    hideQuantity = _ref.hideQuantity,
    hideShortDescription = _ref.hideShortDescription,
    hideDescription = _ref.hideDescription,
    hideAttributes = _ref.hideAttributes,
    hideURLParams = _ref.hideURLParams,
    hideSelectedOptionValue = _ref.hideSelectedOptionValue,
    slots = _ref.slots,
    children = _ref.children,
    initialData = _ref.initialData,
    carousel = _ref.carousel,
    optionsConfig = _ref.optionsConfig,
    onAddToCart = _ref.onAddToCart,
    props = ProductDetails_objectWithoutProperties(_ref, ProductDetails_excluded);
  // i18n
  var AddToCartLabel = (0,preact_i18n_esm/* useText */.XK)('PDP.Product.AddToCart.label').label;
  var IncrementerLabel = (0,preact_i18n_esm/* useText */.XK)('PDP.Product.Incrementer.label').label;
  var DetailsLabel = (0,preact_i18n_esm/* useText */.XK)('PDP.Product.Details.label').label;
  var _useState = (0,preact_compat_js_.useState)('en_US'),
    _useState2 = ProductDetails_slicedToArray(_useState, 2),
    locale = _useState2[0],
    setLocale = _useState2[1];
  var _useState3 = (0,preact_compat_js_.useState)(),
    _useState4 = ProductDetails_slicedToArray(_useState3, 2),
    selectionsToUpdate = _useState4[0],
    setSelectionsToUpdate = _useState4[1];
  var _useState5 = (0,preact_compat_js_.useState)(initialData),
    _useState6 = ProductDetails_slicedToArray(_useState5, 2),
    _useState6$ = _useState6[0],
    data = _useState6$ === void 0 ? null : _useState6$,
    setData = _useState6[1];
  var _useState7 = (0,preact_compat_js_.useState)(function () {
      var defaultValues = {
        sku: sku,
        quantity: 1
      };
      if (data !== null && data !== void 0 && data.optionUIDs) {
        defaultValues.optionsUIDs = data.optionUIDs;
      }
      return defaultValues;
    }),
    _useState8 = ProductDetails_slicedToArray(_useState7, 2),
    values = _useState8[0],
    setValues = _useState8[1];

  // the context is invalid for a configurable product that doesn't have all the options selected
  var _useState9 = (0,preact_compat_js_.useState)(function () {
      var _data$options, _data$optionUIDs;
      return !(data !== null && data !== void 0 && data.options && (data === null || data === void 0 ? void 0 : (_data$options = data.options) === null || _data$options === void 0 ? void 0 : _data$options.length) > 0 && (data === null || data === void 0 ? void 0 : (_data$optionUIDs = data.optionUIDs) === null || _data$optionUIDs === void 0 ? void 0 : _data$optionUIDs.length) !== (data === null || data === void 0 ? void 0 : data.options.length));
    }),
    _useState10 = ProductDetails_slicedToArray(_useState9, 2),
    valid = _useState10[0],
    setValid = _useState10[1];
  var defaultSlotContext = {
    data: data,
    values: values,
    valid: valid
  };
  (0,preact_compat_js_.useEffect)(function () {
    (0,getProductData/* getProductData */.b)(sku).then(setData);
  }, []);

  // Locale
  (0,preact_compat_js_.useEffect)(function () {
    var localeEvent = event_bus_js_.events.on('locale', function (payload) {
      if (payload === locale) return;
      setLocale(payload);
      (0,getProductData/* getProductData */.b)(sku).then(setData);

      // TODO: need to keep the optionsUIDs when locale changes
      // if (values?.optionsUIDs) {
      //   getRefinedProduct(sku, values?.optionsUIDs).then(setData);
      // } else {
      //   getProductData(sku).then(setData);
      // }
    });

    return function () {
      localeEvent === null || localeEvent === void 0 ? void 0 : localeEvent.off();
    };
  }, [locale, sku]);

  // Callbacks
  var handleOnValues = (0,preact_compat_js_.useCallback)(function (newValues) {
    setValues(function (prev) {
      return ProductDetails_objectSpread(ProductDetails_objectSpread({}, prev), newValues);
    });
  }, []);
  var handleOptionSelected = (0,preact_compat_js_.useCallback)(function (selections) {
    var _data$options2;
    // options Selected
    var optionsUIDs = Object.keys(selections).map(function (id) {
      return selections[id].value;
    }).filter(function (element) {
      return element !== undefined;
    });

    // set optionUIDs to URL params
    // ?optionsUIDs=1,2,3
    if (!hideURLParams) {
      setUrlParams({
        optionsUIDs: optionsUIDs.join(',')
      });
    }

    // update state
    setValues(function (prev) {
      return ProductDetails_objectSpread(ProductDetails_objectSpread({}, prev), {}, {
        optionsUIDs: optionsUIDs
      });
    });
    setValid((optionsUIDs === null || optionsUIDs === void 0 ? void 0 : optionsUIDs.length) === (data === null || data === void 0 ? void 0 : (_data$options2 = data.options) === null || _data$options2 === void 0 ? void 0 : _data$options2.length));

    // get refined product data and update state
    (0,getRefinedProduct/* getRefinedProduct */.R)(sku, optionsUIDs, optionsConfig === null || optionsConfig === void 0 ? void 0 : optionsConfig.anchorOptions).then(function (next) {
      var _optionsConfig$anchor;
      setData(next);

      // special processing for anchor options (options that should not be refined when other options are selected)
      if (optionsConfig !== null && optionsConfig !== void 0 && (_optionsConfig$anchor = optionsConfig.anchorOptions) !== null && _optionsConfig$anchor !== void 0 && _optionsConfig$anchor.length) {
        processUpdates(next, optionsUIDs);
      }
    });
  }, [sku]);
  var processUpdates = (0,preact_compat_js_.useCallback)(function (next, optionsUIDs) {
    var _next$optionUIDs, _next$options, _updatedOptions$lengt;
    var updatedOptionsUIDs = (_next$optionUIDs = next === null || next === void 0 ? void 0 : next.optionUIDs) !== null && _next$optionUIDs !== void 0 ? _next$optionUIDs : [];
    var updatedOptions = next === null || next === void 0 ? void 0 : (_next$options = next.options) === null || _next$options === void 0 ? void 0 : _next$options.filter(function (option) {
      var _option$items;
      return (_option$items = option.items) === null || _option$items === void 0 ? void 0 : _option$items.find(function (item) {
        return item.selected && !optionsUIDs.includes(item.id);
      });
    });
    if ((_updatedOptions$lengt = updatedOptions === null || updatedOptions === void 0 ? void 0 : updatedOptions.length) !== null && _updatedOptions$lengt !== void 0 ? _updatedOptions$lengt : 0 > 0) {
      setSelectionsToUpdate(updatedOptions);
      optionsUIDs = updatedOptionsUIDs;
      setValues(function (prev) {
        return ProductDetails_objectSpread(ProductDetails_objectSpread({}, prev), {}, {
          optionsUIDs: optionsUIDs
        });
      });
    }
  }, []);
  var handleOnErrors = (0,preact_compat_js_.useCallback)(function (_errors) {
    if (Object.keys(_errors).length !== 0) setValid(false);
  }, []);

  // Product Attributes
  var attributes = data === null || data === void 0 ? void 0 : (_data$attributes = data.attributes) === null || _data$attributes === void 0 ? void 0 : _data$attributes.map(function (_ref2, key) {
    var label = _ref2.label,
      value = _ref2.value;
    var __html = isDateValid(value) ? toDateString(value, locale) : value.toString();
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
      children: [label, ": ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        dangerouslySetInnerHTML: {
          __html: __html
        }
      })]
    }, key);
  });
  var quantity = !hideQuantity && data !== null && data !== void 0 && data.inStock ? /*#__PURE__*/(0,jsx_runtime.jsx)(Slot, {
    name: "Quantity",
    slot: slots === null || slots === void 0 ? void 0 : slots.Quantity,
    context: ProductDetails_objectSpread({}, defaultSlotContext),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Incrementer_Incrementer_Incrementer, {
      name: "quantity",
      defaultValue: values.quantity.toString(),
      min: 1,
      "aria-label": IncrementerLabel,
      className: "pdp-product__quantity",
      onValue: function onValue(quantity) {
        handleOnValues({
          quantity: Number(quantity)
        });
      }
    }, "quantity")
  }) : undefined;
  var renderOptions = function renderOptions() {
    if (data !== null && data !== void 0 && data.options) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(Slot, {
        name: "Options",
        slot: slots === null || slots === void 0 ? void 0 : slots.Options,
        context: ProductDetails_objectSpread({}, defaultSlotContext),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Swatches_Swatches_Swatches, {
          options: data.options,
          defaultOptions: values.optionsUIDs,
          selectionsToUpdate: selectionsToUpdate,
          hideSelectedValue: hideSelectedOptionValue,
          onValues: handleOptionSelected,
          onErrors: handleOnErrors
        })
      });
    }
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", ProductDetails_objectSpread(ProductDetails_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Product_Product_Product, {
      title: /*#__PURE__*/(0,jsx_runtime.jsx)(Slot, {
        name: "Title",
        slot: slots === null || slots === void 0 ? void 0 : slots.Title,
        context: ProductDetails_objectSpread({}, defaultSlotContext),
        children: data === null || data === void 0 ? void 0 : data.name
      }),
      sku: hideSku ? undefined : /*#__PURE__*/(0,jsx_runtime.jsx)(Slot, {
        name: "SKU",
        slot: slots === null || slots === void 0 ? void 0 : slots.SKU,
        context: ProductDetails_objectSpread({}, defaultSlotContext),
        children: data === null || data === void 0 ? void 0 : data.sku
      }),
      options: renderOptions(),
      breadcrumbs: (slots === null || slots === void 0 ? void 0 : slots.Breadcrumbs) && /*#__PURE__*/(0,jsx_runtime.jsx)(Slot, {
        name: "Breadcrumbs",
        slot: slots === null || slots === void 0 ? void 0 : slots.Breadcrumbs,
        context: ProductDetails_objectSpread(ProductDetails_objectSpread({}, defaultSlotContext), {}, {
          setSeparator: function setSeparator(callback) {
            var _this = this;
            this._registerMethod(function () {
              var nextSeparator = callback.apply(void 0, arguments);
              var separator = getIcon(nextSeparator);
              _this._setProps(function (prev) {
                return ProductDetails_objectSpread(ProductDetails_objectSpread({}, prev), {}, {
                  separator: separator
                });
              });
            });
          },
          appendLink: function appendLink(callback) {
            var _this2 = this;
            this._registerMethod(function () {
              var _callback = callback.apply(void 0, arguments),
                text = _callback.text,
                p = ProductDetails_objectWithoutProperties(_callback, _excluded2);
              var link = /*#__PURE__*/(0,jsx_runtime.jsx)("a", ProductDetails_objectSpread(ProductDetails_objectSpread({}, p), {}, {
                children: text
              }));
              _this2._setProps(function (prev) {
                return ProductDetails_objectSpread(ProductDetails_objectSpread({}, prev), {}, {
                  categories: [].concat(ProductDetails_toConsumableArray(prev.categories || []), [link])
                });
              });
            });
          },
          appendHTMLElement: function appendHTMLElement(callback) {
            var _this3 = this;
            this._registerMethod(function () {
              var domElement = callback.apply(void 0, arguments);
              var vnode = _this3._htmlElementToVNode(domElement);
              _this3._setProps(function (prev) {
                return ProductDetails_objectSpread(ProductDetails_objectSpread({}, prev), {}, {
                  categories: [].concat(ProductDetails_toConsumableArray(prev.categories || []), [vnode])
                });
              });
            });
          }
        }),
        render: function render(_ref3) {
          var separator = _ref3.separator,
            categories = _ref3.categories;
          return /*#__PURE__*/(0,jsx_runtime.jsx)(Breadcrumbs_Breadcrumbs_Breadcrumbs, {
            separator: separator,
            categories: categories
          });
        }
      }),
      quantity: quantity,
      actions: /*#__PURE__*/(0,jsx_runtime.jsx)(Slot, {
        name: "Actions",
        slot: slots === null || slots === void 0 ? void 0 : slots.Actions,
        context: ProductDetails_objectSpread(ProductDetails_objectSpread({}, defaultSlotContext), {}, {
          appendButton: function appendButton(callback) {
            var _this4 = this;
            this._registerMethod(function () {
              var _button = callback.apply(void 0, arguments);
              if (!_button) return;
              var text = _button.text,
                icon = _button.icon,
                buttonProps = ProductDetails_objectWithoutProperties(_button, _excluded3);
              var button = /*#__PURE__*/(0,jsx_runtime.jsx)(Button_Button_Button, ProductDetails_objectSpread(ProductDetails_objectSpread({
                type: "button"
              }, buttonProps), {}, {
                icon: icon && getIcon(icon),
                children: text
              }));
              _this4._setProps(function (prev) {
                return {
                  children: [].concat(ProductDetails_toConsumableArray(prev.children || []), [button])
                };
              });
            });
          }
        }),
        children:
        // Default Add to Cart button if no slot is provided
        !(slots !== null && slots !== void 0 && slots.Actions) && /*#__PURE__*/(0,jsx_runtime.jsx)(Button_Button_Button, {
          size: "medium",
          type: "submit",
          icon: /*#__PURE__*/(0,jsx_runtime.jsx)(Icon_Icon_Icon, {
            source: Cart
          }),
          disabled: !(data !== null && data !== void 0 && data.inStock) || !valid,
          "aria-label": AddToCartLabel,
          onClick: function onClick() {
            return onAddToCart === null || onAddToCart === void 0 ? void 0 : onAddToCart(values);
          },
          children: AddToCartLabel
        })
      }),
      shortDescription: !hideShortDescription ? /*#__PURE__*/(0,jsx_runtime.jsx)(Slot, {
        name: "ShortDescription",
        slot: slots === null || slots === void 0 ? void 0 : slots.ShortDescription,
        context: ProductDetails_objectSpread({}, defaultSlotContext),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          dangerouslySetInnerHTML: {
            __html: (_data$shortDescriptio = data === null || data === void 0 ? void 0 : data.shortDescription) !== null && _data$shortDescriptio !== void 0 ? _data$shortDescriptio : ''
          }
        })
      }) : undefined,
      description: !hideDescription ? /*#__PURE__*/(0,jsx_runtime.jsx)(Slot, {
        name: "Description",
        slot: slots === null || slots === void 0 ? void 0 : slots.Description,
        context: ProductDetails_objectSpread({}, defaultSlotContext),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          dangerouslySetInnerHTML: {
            __html: (_data$description = data === null || data === void 0 ? void 0 : data.description) !== null && _data$description !== void 0 ? _data$description : ''
          }
        })
      }) : undefined,
      images: (_data$images$map = data === null || data === void 0 ? void 0 : (_data$images = data.images) === null || _data$images === void 0 ? void 0 : _data$images.map(function (_ref4) {
        var label = _ref4.label,
          url = _ref4.url;
        return /*#__PURE__*/(0,jsx_runtime.jsx)(Image_Image_Image, {
          title: label,
          alt: label,
          src: url
          // TODO: change width/height for image aspect ratio
          // pending https://jira.corp.adobe.com/browse/DATA-5122
          ,
          width: 960,
          height: 1191,
          params: {
            width: 960
          }
        }, url);
      })) !== null && _data$images$map !== void 0 ? _data$images$map : [],
      price: data !== null && data !== void 0 && (_data$prices = data.prices) !== null && _data$prices !== void 0 && _data$prices.visible ? /*#__PURE__*/(0,jsx_runtime.jsx)(Slot, {
        name: "RegularPrice",
        slot: slots === null || slots === void 0 ? void 0 : slots.RegularPrice,
        context: ProductDetails_objectSpread({}, defaultSlotContext),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(PriceRange_PriceRange_PriceRange, ProductDetails_objectSpread(ProductDetails_objectSpread({}, data.prices.final), {}, {
          locale: toLanguageTag(locale)
        }))
      }) : undefined,
      specialPrice: data !== null && data !== void 0 && (_data$prices2 = data.prices) !== null && _data$prices2 !== void 0 && _data$prices2.visible && data.prices.regular && data.prices.final.amount !== (data === null || data === void 0 ? void 0 : data.prices.regular.amount) ? /*#__PURE__*/(0,jsx_runtime.jsx)(Slot, {
        name: "SpecialPrice",
        slot: slots === null || slots === void 0 ? void 0 : slots.SpecialPrice,
        context: ProductDetails_objectSpread({}, defaultSlotContext),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(PriceRange_PriceRange_PriceRange, ProductDetails_objectSpread(ProductDetails_objectSpread({}, data.prices.regular), {}, {
          locale: toLanguageTag(locale)
        }))
      }) : undefined,
      carouselConfig: ProductDetails_objectSpread(ProductDetails_objectSpread({}, carousel), {}, {
        thumbnails: carousel ? (_data$images$map2 = data === null || data === void 0 ? void 0 : (_data$images2 = data.images) === null || _data$images2 === void 0 ? void 0 : _data$images2.map(function (_ref5) {
          var label = _ref5.label,
            url = _ref5.url;
          return /*#__PURE__*/(0,jsx_runtime.jsx)(Image_Image_Image, {
            title: label,
            alt: label,
            src: url
            // TODO: change width/height for image aspect ratio
            // pending https://jira.corp.adobe.com/browse/DATA-5122
            ,
            width: 200,
            height: 248,
            params: {
              width: 200
            }
          }, url);
        })) !== null && _data$images$map2 !== void 0 ? _data$images$map2 : [] : []
      }),
      outOfStock: !(data !== null && data !== void 0 && data.inStock),
      attributes: !hideAttributes ? /*#__PURE__*/(0,jsx_runtime.jsx)(Slot, {
        name: "Attributes",
        slot: slots === null || slots === void 0 ? void 0 : slots.Attributes,
        context: ProductDetails_objectSpread({}, defaultSlotContext),
        children: attributes !== null && attributes !== void 0 && attributes.length ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [DetailsLabel, /*#__PURE__*/(0,jsx_runtime.jsx)("ul", {
            children: attributes
          })]
        }) : null
      }) : undefined,
      galleryContent: (slots === null || slots === void 0 ? void 0 : slots.GalleryContent) && /*#__PURE__*/(0,jsx_runtime.jsx)(Slot, {
        name: "GalleryContent",
        slot: slots.GalleryContent,
        context: ProductDetails_objectSpread({}, defaultSlotContext)
      }),
      productContent: (slots === null || slots === void 0 ? void 0 : slots.ProductContent) && /*#__PURE__*/(0,jsx_runtime.jsx)(Slot, {
        name: "ProductContent",
        slot: slots.ProductContent,
        context: ProductDetails_objectSpread({}, defaultSlotContext)
      }),
      productInfo: (slots === null || slots === void 0 ? void 0 : slots.ProductInfoContent) && /*#__PURE__*/(0,jsx_runtime.jsx)(Slot, {
        name: "ProductInfoContent",
        slot: slots.ProductInfoContent,
        context: ProductDetails_objectSpread({}, defaultSlotContext)
      })
    })
  }));
};

// ProductDetails.getInitialData = async function ({ sku, optionsConfig}) {
//   // check if default selections are made
//   const defaultSelections = getUrlParams().optionsUIDs?.split(',') || config?.getConfig()?.models?.ProductDetails?.initialData?.optionsUIDs;

//   // if it has selections, refine the product data
//   if (defaultSelections?.length) {
//     return await getRefinedProduct(sku, defaultSelections, optionsConfig?.anchorOptions);
//   }

//   // otherwise return the product data
//   return await getProductData(sku);
// };
;// CONCATENATED MODULE: ./containers/ProductDetails/index.ts



/***/ }),

/***/ 875:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storefront_pdp_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(933);
/* harmony import */ var _storefront_pdp_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storefront_pdp_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storefront_pdp_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(476);
/* harmony import */ var _storefront_pdp_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storefront_pdp_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _storefront_pdp_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_storefront_pdp_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.dropin-breadcrumbs__container{
  display:flex;
}

.dropin-breadcrumbs__items{
  display:flex;
  flex-wrap:wrap;
  font:var(--type-details-caption-1-font);
  list-style:none;
  margin:0;
  padding:0;
}

.dropin-breadcrumbs__item{
  display:flex;
  justify-content:center;
}

.dropin-breadcrumbs__item--last > :first-child{
  color:var(--color-brand-500);
  cursor:default;
}

.dropin-breadcrumbs__item--last > :first-child:hover,
.dropin-breadcrumbs__item--last > :first-child:focus-visible{
  text-decoration:none;
}

.dropin-breadcrumbs__separator--default{
  margin:0 var(--spacing-xsmall);
}

.dropin-breadcrumbs__separator--icon{
  width:16px;
  height:16px;
  margin:0 var(--spacing-xxsmall);
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 241:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storefront_pdp_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(933);
/* harmony import */ var _storefront_pdp_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storefront_pdp_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storefront_pdp_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(476);
/* harmony import */ var _storefront_pdp_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storefront_pdp_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _storefront_pdp_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_storefront_pdp_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.dropin-button,
.dropin-iconButton{
  border:0 none;
  cursor:pointer;
  white-space:normal;
}

.dropin-button{
  border-radius:var(--shape-border-radius-3);
  font-size:var(--type-button-1-font);
  font-weight:var(--type-button-1-font);
  padding:var(--spacing-xsmall) var(--spacing-medium);
  display:flex;
  justify-content:center;
  align-items:center;
  text-align:left;
  word-wrap:break-word;
}

.dropin-iconButton{
  height:var(--spacing-xbig);
  width:var(--spacing-xbig);
  padding:var(--spacing-xsmall);
}

.dropin-button:disabled,
.dropin-iconButton:disabled{
  pointer-events:none;
  user-select:none;
}

.dropin-button:not(:disabled),
.dropin-iconButton:not(:disabled){
  cursor:pointer;
}

.dropin-button:focus,
.dropin-iconButton:focus{
  outline:none;
}

.dropin-button:focus-visible,
.dropin-iconButton:focus-visible{
  outline:var(--spacing-xxsmall) solid var(--color-button-focus);
}
.dropin-button--primary,
a.dropin-button--primary,
.dropin-iconButton--primary{
  border:none;
  background:var(--color-brand-500) 0 0% no-repeat padding-box;
  color:var(--color-neutral-50);
  text-align:left;
  margin-right:0;
}

.dropin-iconButton--primary{
  border-radius:var(--spacing-xbig);
  min-height:var(--spacing-xbig);
  min-width:var(--spacing-xbig);
  padding:var(--spacing-xsmall);
}

.dropin-button--primary--disabled,
a.dropin-button--primary--disabled,
.dropin-iconButton--primary--disabled{
  background:var(--color-neutral-300) 0 0% no-repeat padding-box;
  color:var(--color-neutral-500);
  fill:var(--color-neutral-300);
  pointer-events:none;
  user-select:none;
}

.dropin-button--primary:hover,
a.dropin-button--primary:hover,
.dropin-iconButton--primary:hover,
.dropin-button--primary:focus:hover,
.dropin-iconButton--primary:focus:hover{
  background-color:var(--color-button-hover);
  text-decoration:none;
}

.dropin-button--primary:focus,
.dropin-iconButton--primary:focus{
  background-color:var(--color-brand-500);
}

.dropin-button--primary:hover:active,
.dropin-iconButton--primary:hover:active{
  background-color:var(--color-button-active);
}
.dropin-button--secondary,
a.dropin-button--secondary,
.dropin-iconButton--secondary{
  border:var(--shape-border-width-2) solid var(--color-brand-500);
  background:none 0 0% no-repeat padding-box;
  color:var(--color-brand-500);
  padding-top:calc(var(--spacing-xsmall) - var(--shape-border-width-2));
  padding-left:calc(var(--spacing-medium) - var(--shape-border-width-2));
}

.dropin-iconButton--secondary{
  border-radius:var(--spacing-xbig);
  min-height:var(--spacing-xbig);
  min-width:var(--spacing-xbig);
  padding:var(--spacing-xsmall);
  padding-top:calc(var(--spacing-xsmall) - var(--shape-border-width-2));
  padding-left:calc(var(--spacing-xsmall) - var(--shape-border-width-2));
}

.dropin-button--secondary--disabled,
a.dropin-button--secondary--disabled,
.dropin-iconButton--secondary--disabled{
  border:var(--shape-border-width-2) solid var(--color-neutral-300);
  background:none 0 0% no-repeat padding-box;
  color:var(--color-neutral-500);
  fill:var(--color-neutral-300);
  pointer-events:none;
  user-select:none;
}

.dropin-button--secondary:hover,
a.dropin-button--secondary:hover,
.dropin-iconButton--secondary:hover{
  border:var(--shape-border-width-2) solid var(--color-button-hover);
  color:var(--color-button-hover);
  text-decoration:none;
}

.dropin-button--secondary:active,
.dropin-iconButton--secondary:active{
  border:var(--shape-border-width-2) solid var(--color-button-active);
  color:var(--color-button-active);
}
.dropin-button--tertiary,
a.dropin-button--tertiary,
.dropin-iconButton--tertiary{
  border:none;
  background:none 0 0% no-repeat padding-box;
  color:var(--color-brand-500);
}

.dropin-iconButton--tertiary{
  border:none;
  border-radius:var(--spacing-xbig);
  min-height:var(--spacing-xbig);
  min-width:var(--spacing-xbig);
  padding:var(--spacing-xsmall);
}

.dropin-button--tertiary--disabled,
a.dropin-button--tertiary--disabled,
.dropin-iconButton--tertiary--disabled{
  border:none;
  color:var(--color-neutral-500);
  pointer-events:none;
  user-select:none;
}

.dropin-button--tertiary:hover,
a.dropin-button--tertiary:hover,
.dropin-iconButton--tertiary:hover{
  color:var(--color-button-hover);
  text-decoration:none;
}

.dropin-button--tertiary:active,
.dropin-iconButton--tertiary:active{
  color:var(--color-button-active);
}

.dropin-button--tertiary:focus-visible,
.dropin-iconButton--tertiary:focus-visible{
  -webkit-box-shadow:inset 0 0 0 2px var(--color-neutral-800);
  -moz-box-shadow:inset 0 0 0 2px var(--color-neutral-800);
  box-shadow:inset 0 0 0 2px var(--color-neutral-800);
}
.dropin-button--large{
  font:var(--type-button-1-font);
  letter-spacing:var(--type-button-1-letter-spacing);
}

.dropin-button--medium{
  font:var(--type-button-2-font);
  letter-spacing:var(--type-button-2-letter-spacing);
}

.dropin-button-icon{
  height:24px;
}
.dropin-button--with-icon{
  column-gap:var(--spacing-xsmall);
  row-gap:var(--spacing-xsmall);
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 466:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storefront_pdp_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(933);
/* harmony import */ var _storefront_pdp_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storefront_pdp_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storefront_pdp_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(476);
/* harmony import */ var _storefront_pdp_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storefront_pdp_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _storefront_pdp_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_storefront_pdp_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.dropin-color-swatch__container input[type='radio'],
.dropin-color-swatch__container input[type='checkbox']{
  opacity:0;
  position:absolute;
  width:0;
  height:0;
}

.dropin-color-swatch__container .dropin-color-swatch__span{
  border-radius:50%;
  display:inline-block;
  --bg-color:var(--color-neutral-300);
  box-shadow:0 0 0 var(--shape-border-width-1) var(--color-neutral-400);
  position:relative;
  cursor:pointer;
  background-color:var(--bg-color);
}

.dropin-color-swatch__container--medium .dropin-color-swatch__span{
  height:32px;
  width:32px;
}

.dropin-color-swatch__container--large .dropin-color-swatch__span{
  height:40px;
  width:40px;
}

.dropin-color-swatch__container
  input[type='radio']:not(:checked):active
  ~ .dropin-color-swatch__span,
.dropin-color-swatch__container
  input[type='checkbox']:not(:checked):active
  ~ .dropin-color-swatch__span{
  box-shadow:0 0 0 var(--shape-border-width-1) var(--color-neutral-500);
  outline:none;
}

.dropin-color-swatch__container
  input[type='radio']:checked
  ~ .dropin-color-swatch__span,
.dropin-color-swatch__container
  input[type='checkbox']:checked
  ~ .dropin-color-swatch__span,
.dropin-color-swatch--selected{
  box-shadow:0 0 0 var(--shape-border-width-3) var(--color-neutral-50), 0 0 0 var(--shape-border-width-4) var(--color-neutral-800);
}

.dropin-color-swatch__container
  input[type='radio']:checked:active
  ~ .dropin-color-swatch__span,
.dropin-color-swatch__container
  input[type='checkbox']:checked:active
  ~ .dropin-color-swatch__span{
  box-shadow:0 0 0 var(--shape-border-width-3) var(--color-neutral-50), 0 0 0 var(--shape-border-width-4) var(--color-neutral-900);
}

.dropin-color-swatch__container
  input[type='radio']:focus-visible
  + .dropin-color-swatch__span,
.dropin-color-swatch__container
  input[type='checkbox']:focus-visible
  + .dropin-color-swatch__span{
  box-shadow:0 0 0 var(--shape-border-width-3) var(--color-neutral-900), 0 0 0 6px var(--color-neutral-400);
}

.dropin-color-swatch__container
  input[type='radio']:disabled
  ~ .dropin-color-swatch__span,
.dropin-color-swatch__container
  input[type='checkbox']:disabled
  ~ .dropin-color-swatch__span,
.dropin-color-swatch--disabled,
.dropin-color-swatch__container
  input[type='radio']:disabled:active
  ~ .dropin-color-swatch__span,
.dropin-color-swatch__container
  input[type='checkbox']:disabled:active
  ~ .dropin-color-swatch__span{
  box-shadow:0 0 0 var(--shape-border-width-4) var(--color-neutral-500);
  opacity:0.24;
  pointer-events:none;
}

.dropin-color-swatch__span--out-of-stock{
  box-shadow:0 0 0 var(--shape-border-width-1) var(--color-neutral-700);
  background:linear-gradient(
      to top left,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) calc(50% - 0.8px),
      var(--color-neutral-700) 50%,
      rgba(0, 0, 0, 0) calc(50% + 0.8px),
      rgba(0, 0, 0, 0) 100%
    ), var(--bg-color);
}

.dropin-color-swatch__container
  input[type='radio']:not(:disabled)
  ~ .dropin-color-swatch__span,
.dropin-color-swatch__container
  input[type='checkbox']:not(:disabled)
  ~ .dropin-color-swatch__span{
  cursor:pointer;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 731:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storefront_pdp_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(933);
/* harmony import */ var _storefront_pdp_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storefront_pdp_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storefront_pdp_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(476);
/* harmony import */ var _storefront_pdp_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storefront_pdp_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _storefront_pdp_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_storefront_pdp_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.dropin-icon{
}

.dropin-icon--shape-stroke-1{
  stroke-width:var(--shape-icon-stroke-1);
}

.dropin-icon--shape-stroke-2{
  stroke-width:var(--shape-icon-stroke-2);
}

.dropin-icon--shape-stroke-3{
  stroke-width:var(--shape-icon-stroke-3);
}

.dropin-icon--shape-stroke-4{
  stroke-width:var(--shape-icon-stroke-4);
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 640:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storefront_pdp_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(933);
/* harmony import */ var _storefront_pdp_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storefront_pdp_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storefront_pdp_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(476);
/* harmony import */ var _storefront_pdp_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storefront_pdp_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _storefront_pdp_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_storefront_pdp_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.dropin-image{
  background:var(--color-neutral-300) linear-gradient(
      to right,
      var(--color-neutral-300) 0%,
      var(--color-neutral-100) 20%,
      var(--color-neutral-300) 40%,
      var(--color-neutral-300) 100%
    ) no-repeat;
  animation:imageShimmer infinite 1.2s linear;
  border-radius:var(--shape-border-radius-2);
}
.dropin-image--loaded{
  background:unset;
  border-radius:unset;
}

@keyframes imageShimmer{
  0%{
    background-position:-600px 0;
  }

  100%{
    background-position:600px 0;
  }
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 357:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storefront_pdp_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(933);
/* harmony import */ var _storefront_pdp_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storefront_pdp_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storefront_pdp_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(476);
/* harmony import */ var _storefront_pdp_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storefront_pdp_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _storefront_pdp_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_storefront_pdp_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.dropin-image-swatch__container input[type='radio'],
.dropin-image-swatch__container input[type='checkbox']{
  opacity:0;
  position:absolute;
  width:0;
  height:0;
}

.dropin-image-swatch__container .dropin-image-swatch__span{
  display:inline-block;
  --bg-color:var(--color-neutral-300);
  box-shadow:0 0 0 var(--shape-border-width-1) var(--color-neutral-400);
  position:relative;
  cursor:pointer;
  background-color:var(--bg-color);
  background-image:var(--background-image);
  background-repeat:no-repeat;
  background-size:cover;
  height:100px;
  width:100px;
  overflow:hidden;
}

.dropin-image-swatch__content{
  width:inherit;
  position:absolute;
  top:-9999px;
  bottom:-9999px;
  left:-9999px;
  right:-9999px;
  margin:auto;
}

.dropin-image-swatch__span:hover{
  box-shadow:0 0 0 var(--shape-border-width-3) var(--color-neutral-50), 0 0 0 var(--shape-border-width-4) var(--color-neutral-500);
  outline:none;
}

.dropin-image-swatch__container
  input[type='radio']:not(:checked):active
  ~ .dropin-image-swatch__span,
.dropin-image-swatch__container
  input[type='checkbox']:not(:checked):active
  ~ .dropin-image-swatch__span{
  box-shadow:0 0 0 var(--shape-border-width-1) var(--color-neutral-500);
  outline:none;
}

.dropin-image-swatch__container
  input[type='radio']:checked
  ~ .dropin-image-swatch__span,
.dropin-image-swatch__container
  input[type='checkbox']:checked
  ~ .dropin-image-swatch__span,
.dropin-image-swatch--selected{
  box-shadow:0 0 0 var(--shape-border-width-3) var(--color-neutral-50), 0 0 0 var(--shape-border-width-4) var(--color-neutral-800);
}

.dropin-image-swatch__container
  input[type='radio']:checked:active
  ~ .dropin-image-swatch__span,
.dropin-image-swatch__container
  input[type='checkbox']:checked:active
  ~ .dropin-image-swatch__span{
  box-shadow:0 0 0 var(--shape-border-width-3) var(--color-neutral-50), 0 0 0 var(--shape-border-width-4) var(--color-neutral-600);
}

.dropin-image-swatch__container
  input[type='radio']:focus-visible
  + .dropin-image-swatch__span,
.dropin-image-swatch__container
  input[type='checkbox']:focus-visible
  + .dropin-image-swatch__span{
  box-shadow:0 0 0 var(--shape-border-width-3) var(--color-neutral-900), 0 0 0 6px var(--color-neutral-400);
}

.dropin-image-swatch__container
  input[type='radio']:disabled
  ~ .dropin-image-swatch__span,
.dropin-image-swatch__container
  input[type='checkbox']:disabled
  ~ .dropin-image-swatch__span,
.dropin-image-swatch--disabled,
.dropin-image-swatch__container
  input[type='radio']:disabled:active
  ~ .dropin-image-swatch__span,
.dropin-image-swatch__container
  input[type='checkbox']:disabled:active
  ~ .dropin-image-swatch__span{
  box-shadow:0 0 0 var(--shape-border-width-4) var(--color-neutral-500);
  background-color:rgba(255, 255, 255, 0.76);
  pointer-events:none;
}

.dropin-image-swatch__container .dropin-image-swatch__span--out-of-stock{
  background:linear-gradient(
    to top left,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) calc(50% - 0.8px),
    var(--color-neutral-700) 50%,
    rgba(0, 0, 0, 0) calc(50% + 0.8px),
    rgba(0, 0, 0, 0) 100%
  );
  background-color:rgba(255, 255, 255, 0.6);
}

.dropin-image-swatch__span--out-of-stock > .dropin-image-swatch__content,
.dropin-image-swatch__container
  input[type='radio']:disabled
  ~ .dropin-image-swatch__span
  > .dropin-image-swatch__content,
.dropin-image-swatch__container
  input[type='checkbox']:disabled
  ~ .dropin-image-swatch__span
  > .dropin-image-swatch__content{
  z-index:-1;
}

.dropin-image-swatch__container
  input[type='radio']:not(:disabled)
  ~ .dropin-image-swatch__span,
.dropin-image-swatch__container
  input[type='checkbox']:not(:disabled)
  ~ .dropin-image-swatch__span{
  cursor:pointer;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 606:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storefront_pdp_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(933);
/* harmony import */ var _storefront_pdp_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storefront_pdp_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storefront_pdp_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(476);
/* harmony import */ var _storefront_pdp_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storefront_pdp_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _storefront_pdp_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_storefront_pdp_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.dropin-incrementer__content{
  border-radius:var(--shape-border-radius-1);
  border:solid var(--shape-border-width-1) var(--color-neutral-600);
  display:grid;
  grid-template-columns:var(--spacing-xxbig) auto var(--spacing-xxbig);
  height:var(--spacing-xbig);
  opacity:1;
}

.dropin-incrementer__content--disabled{
  background:var(--color-neutral-300);
  border-radius:var(--shape-border-radius-1);
  border:solid var(--shape-border-width-1) var(--color-neutral-500);
}

.dropin-incrementer__content--large{
  height:var(--spacing-xxbig);
}

.dropin-incrementer__content:hover{
  border:solid var(--shape-border-width-1) var(--color-neutral-700);
}

.dropin-incrementer__content:active{
  border:solid var(--shape-border-width-1) var(--color-neutral-800);
}
.dropin-incrementer__footer{
  font:var(--type-details-caption-2-font);
}
.dropin-incrementer__decrease-button > svg,
.dropin-incrementer__increase-button > svg{
  align-items:center;
  justify-content:center;
}

.dropin-incrementer__button-container{
  align-items:center;
  border-radius:var(--shape-border-radius-1);
  display:grid;
  justify-content:center;
  background:var(--color-neutral-50);
}

.dropin-incrementer__button-container--disabled{
  background-color:var(--color-neutral-300);
}

.dropin-incrementer__decrease-button,
.dropin-incrementer__increase-button{
  align-items:center;
  background-color:var(--color-neutral-50);
  border-radius:var(--shape-border-radius-3);
  border:none;
  display:grid;
  height:var(--spacing-medium);
  width:var(--spacing-medium);
}

.dropin-incrementer__decrease-button:enabled,
.dropin-incrementer__increase-button:enabled{
  cursor:pointer;
}

.dropin-incrementer__decrease-button--disabled,
.dropin-incrementer__increase-button--disabled{
  background-color:var(--color-neutral-300);
}

.dropin-incrementer__increase-button:focus-visible,
.dropin-incrementer__decrease-button:focus-visible{
  outline:var(--shape-border-width-1) solid var(--color-brand-500);
  box-shadow:0px 0px 0px var(--shape-border-radius-1) var(--color-neutral-500);
}

.dropin-incrementer__decrease-button:focus:not(:focus-visible),
.dropin-incrementer__increase-button:focus:not(:focus-visible){
  background-color:var(--color-neutral-50);
}

.dropin-incrementer__decrease-button:hover:enabled,
.dropin-incrementer__increase-button:hover:enabled,
.dropin-incrementer__decrease-button:focus,
.dropin-incrementer__increase-button:focus{
  background:var(--color-neutral-300);
}
.dropin-incrementer__input{
  box-sizing:border-box;
  text-align:center;
  min-width:var(--spacing-xxbig);
}

.dropin-incrementer__input:disabled{
  background-color:var(--color-neutral-300);
  color:var(--color-neutral-500);
}

.dropin-incrementer__input::-webkit-outer-spin-button,
.dropin-incrementer__input::-webkit-inner-spin-button{
  -webkit-appearance:none;
  margin:0;
}

.dropin-incrementer__input:focus-within{
  border:none;
  box-sizing:border-box;
  text-align:center;
}

.dropin-incrementer__input:focus-within[type='number']{
  box-shadow:none;
}
.dropin-incrementer__input[type='number']{
  -moz-appearance:textfield;
  box-shadow:none;
  border:none;
}

textarea:focus,
input:focus{
  outline:none;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 800:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storefront_pdp_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(933);
/* harmony import */ var _storefront_pdp_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storefront_pdp_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storefront_pdp_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(476);
/* harmony import */ var _storefront_pdp_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storefront_pdp_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _storefront_pdp_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_storefront_pdp_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.dropin-picker{
  position:relative;
  display:flex;
  flex-direction:row;
  background-color:var(--color-neutral-50);
  justify-content:space-between;
  align-items:center;
  cursor:pointer;
  gap:var(--spacing-small);
  text-overflow:ellipsis;
  white-space:nowrap;
  overflow:hidden;
}

.dropin-picker select{
  background-color:transparent;
  border:var(--shape-border-width-1) solid var(--color-neutral-600);
  border-radius:var(--shape-border-radius-1);
  color:var(--color-neutral-700);
  appearance:none;
  box-shadow:none;
  flex:1;
  cursor:pointer;
  width:100%;
  overflow:hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
}

.dropin-picker__select:focus{
  outline:none;
  border:var(--shape-border-width-1) solid var(--color-neutral-800);
}
.dropin-picker__medium .dropin-picker__select--primary,
.dropin-picker__medium .dropin-picker__select--secondary{
  padding:9px var(--spacing-xxbig) 9px var(--spacing-small);
}

.dropin-picker__large .dropin-picker__select--primary,
.dropin-picker__large .dropin-picker__select--secondary{
  padding:11px var(--spacing-xxbig) 11px var(--spacing-small);
}

.dropin-picker__select--medium{
  font:var(--type-body-2-default-font);
  letter-spacing:var(--type-body-2-default-letter-spacing);
}

.dropin-picker__select--large{
  font:var(--type-body-1-default-font);
  letter-spacing:var(--type-body-1-default-letter-spacing);
}
.dropin-picker__chevronDown{
  z-index:1;
  position:absolute;
  color:var(--color-neutral-700);
  right:var(--spacing-small);
  display:block;
  pointer-events:none;
  padding:0;
  height:var(--icon-size);
  width:var(--icon-size);
}
.dropin-picker__floatingLabel{
  position:absolute;
  pointer-events:none;
  left:var(--spacing-small);
  color:var(--color-neutral-700);
  touch-action:manipulation;
  transform:translateY(-50%);
  transition:top 20ms ease-in, font-size 50ms ease-in;
}

.dropin-picker__select--floating:focus ~ label{
  transition:all 40ms;
}
.dropin-picker__selected select{
  color:var(--color-neutral-800);
}
.dropin-picker__selected label{
  top:30%;
}
.dropin-picker__medium.dropin-picker__floating.dropin-picker__selected label{
  font:var(--type-details-caption-1-font);
  letter-spacing:var(--type-details-caption-1-letter-spacing);
}

.dropin-picker__large.dropin-picker__floating.dropin-picker__selected label{
  font:var(--type-details-caption-2-font);
  letter-spacing:var(--type-details-caption-2-letter-spacing);
}
.dropin-picker__medium.dropin-picker__floating select{
  padding:17px var(--spacing-small);
}

.dropin-picker__large.dropin-picker__floating select{
  padding:15px var(--spacing-small);
}
.dropin-picker__large.dropin-picker__floating.dropin-picker__selected select{
  padding:25px var(--spacing-xxbig) 5px var(--spacing-small);
}

.dropin-picker__medium.dropin-picker__floating.dropin-picker__selected select{
  padding:27px var(--spacing-xxbig) 7px var(--spacing-small);
}
select::-ms-expand{
  display:none;
}
.dropin-picker__disabled select.dropin-picker__select{
  background-color:var(--color-neutral-300);
  border:var(--shape-border-width-1) solid var(--color-neutral-500);
  color:var(--color-neutral-500);
  cursor:not-allowed;
}

.dropin-picker__disabled svg.dropin-picker__chevronDown{
  color:var(--color-neutral-500);
}
.dropin-picker__error select{
  border:var(--shape-border-width-2) solid var(--color-alert-500);
  color:var(--color-alert-500);
}

.dropin-picker__error .dropin-picker__select:focus{
  border:var(--shape-border-width-2) solid var(--color-alert-500);
}

.dropin-picker__error .dropin-picker__chevronDown{
  color:var(--color-alert-500);
}

.dropin-picker__error label{
  color:var(--color-alert-500);
}
.dropin-picker select.dropin-picker__select--secondary{
  border-top:var(--shape-border-width-1) solid transparent;
  border-left:0 none;
  border-right:0 none;
  border-radius:0;
}

.dropin-picker__disabled select.dropin-picker__select--secondary{
  border-bottom:var(--shape-border-width-1) solid var(--color-neutral-500);
}
.dropin-picker__error select.dropin-picker__select--secondary{
  border-top:var(--shape-border-width-1) solid transparent;
  border-left:0 none;
  border-right:0 none;
}
.dropin-picker__icon--placeholder{
  z-index:1;
  position:absolute;
  color:var(--color-neutral-700);
  left:var(--spacing-small);
  display:block;
  pointer-events:none;
  padding:0;
  height:var(--icon-size);
  width:var(--icon-size);
}

.dropin-picker__icon select.dropin-picker__select{
  padding-left:var(--spacing-xxbig);
}

.dropin-picker__floating.dropin-picker__selected.dropin-picker__icon select{
  padding-left:var(--spacing-xxbig);
}

.dropin-picker__floating.dropin-picker__selected.dropin-picker__icon label{
  left:var(--spacing-xxbig);
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 192:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storefront_pdp_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(933);
/* harmony import */ var _storefront_pdp_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storefront_pdp_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storefront_pdp_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(476);
/* harmony import */ var _storefront_pdp_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storefront_pdp_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _storefront_pdp_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_storefront_pdp_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.dropin-price{
  color:inherit;
}

.dropin-price--small{
  font:var(--type-body-2-strong-font);
  letter-spacing:var(--type-body-2-strong-letter-spacing);
}

.dropin-price--medium{
  font:var(--type-body-1-default-font);
  letter-spacing:var(--type-body-1-default-letter-spacing);
}

.dropin-price--large{
  font:var(--type-headline-2-strong-font);
  letter-spacing:var(--type-headline-2-strong-letter-spacing);
}

.dropin-price--strikethrough{
  text-decoration:line-through;
}

.dropin-price--sale{
  color:var(--color-alert-800);
}

.dropin-price--bold{
  font-weight:bold;
}

.dropin-price--normal{
  font-weight:normal;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 643:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storefront_pdp_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(933);
/* harmony import */ var _storefront_pdp_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storefront_pdp_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storefront_pdp_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(476);
/* harmony import */ var _storefront_pdp_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storefront_pdp_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _storefront_pdp_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_storefront_pdp_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.dropin-text-swatch__container input[type='radio'],
.dropin-text-swatch__container input[type='checkbox']{
  opacity:0;
  position:absolute;
  width:0;
}

.dropin-text-swatch__container label{
  display:inline-block;
  background-color:var(--color-neutral-200);
  color:var(--color-neutral-800);
  border:var(--shape-border-width-1) solid var(--color-neutral-400);
  padding:6px var(--spacing-small);
  border-radius:var(--shape-border-radius-1);
  box-sizing:border-box;
  align-items:center;
  justify-content:center;
  font:var(--type-body-1-strong-font);
  position:relative;
  display:block;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}

.dropin-text-swatch__container label:hover{
  color:var(--color-neutral-900);
}

.dropin-text-swatch__container
  input[type='radio']:checked
  + .dropin-text-swatch__label,
.dropin-text-swatch__container
  input[type='checkbox']:checked
  + .dropin-text-swatch__label,
.dropin-text-swatch--selected{
  background-color:var(--color-neutral-50);
  box-shadow:0 0 0 var(--shape-border-width-1) var(--color-neutral-900);
}

.dropin-text-swatch__container input[type='radio']:focus-visible + label,
.dropin-text-swatch__container input[type='checkbox']:focus-visible + label{
  background-color:var(--color-neutral-200);
  border:var(--shape-border-width-3) solid var(--color-neutral-800);
  outline:solid var(--shape-border-width-4) var(--color-neutral-400);
}

.dropin-text-swatch__container input[type='radio']:checked + label:active,
.dropin-text-swatch__container input[type='checkbox']:checked + label:active,
.dropin-text-swatch--selected{
  background-color:var(--color-neutral-200);
  box-shadow:0 0 0 var(--shape-border-width-3) var(--color-neutral-900), 0 0 0 6px var(--color-neutral-400);
}

.dropin-text-swatch__container input[type='radio']:active + label,
.dropin-text-swatch__container input[type='radio']:checked + label:active,
.dropin-text-swatch__container
  input[type='radio']:checked
  + label:hover:not(:focus-visible),
.dropin-text-swatch__container input[type='checkbox']:active + label,
.dropin-text-swatch__container input[type='checkbox']:checked + label:active,
.dropin-text-swatch__container
  input[type='checkbox']:checked
  + label:hover:not(:focus-visible){
  border:var(--shape-border-width-1) solid var(--color-neutral-500);
  color:var(--color-neutral-900);
  outline:none;
}

.dropin-text-swatch__container input[type='radio']:disabled + label,
.dropin-text-swatch__container input[type='checkbox']:disabled + label,
.dropin-text-swatch--disabled,
.dropin-text-swatch__container
  input[type='radio']:disabled:focus-visible
  + label,
.dropin-text-swatch__container
  input[type='checkbox']:disabled:focus-visible
  + label{
  background-color:var(--color-neutral-300);
  color:var(--color-neutral-500);
  pointer-events:none;
  border:var(--shape-border-width-1) solid var(--color-neutral-500);
  outline:none;
}

.dropin-text-swatch__label--out-of-stock{
  background:linear-gradient(
      to top left,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) calc(50% - 0.8px),
      var(--color-neutral-700) 50%,
      rgba(0, 0, 0, 0) calc(50% + 0.8px),
      rgba(0, 0, 0, 0) 100%
    ), var(--color-neutral-200);
}

.dropin-text-swatch__container input[type='radio']:not(:disabled) + label,
.dropin-text-swatch__container input[type='checkbox']:not(:disabled) + label{
  cursor:pointer;
}

[data-tooltip]{
  position:relative;
}

[data-tooltip]:after{
  display:none;
  content:attr(data-tooltip);
  position:absolute;
  bottom:100%;
  left:0px;
  background-color:var(--color-neutral-50);
  color:var(--color-neutral-800);
  border:var(--shape-border-width-1) solid var(--color-neutral-400);
  padding:6px var(--spacing-small);
  border-radius:var(--shape-border-radius-1);
  white-space:nowrap;
  z-index:1000;
  font:var(--type-body-1-strong-font);
  margin-bottom:var(--spacing-xxsmall);
  -webkit-border-radius:var(--shape-border-radius-1);
  -moz-border-radius:var(--shape-border-radius-1);
}

[data-tooltip]:hover:after{
  display:block;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 952:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(933);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(476);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.pdp-carousel{
  --icon-size:32px;
  --icon-extra-padding:8px;
  --thumb-peak:32px;

  position:relative;
  display:flex;
  flex-direction:var(--flex-carousel);
  align-items:center;
  gap:var(--gap);
  width:var(--width);
}

.pdp-carousel--thumbnailsColumn{
  justify-content:flex-end;
  align-items:start;
}

.pdp-carousel--thumbnailsRow{
  align-items:center;
}


.pdp-carousel--arrows{
  padding-left:calc(var(--icon-size) + var(--icon-extra-padding));
  padding-right:calc(var(--icon-size) + var(--icon-extra-padding));
  width:calc(var(--width) - 2 * var(--icon-size) - 2 * var(--icon-extra-padding))
}
.pdp-carousel__button{
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  padding:0;
}

.pdp-carousel__button--prev{
  left:0;
}

.pdp-carousel__button--next{
  right:0;
}

.pdp-carousel__button__icon--prev{
  transform:rotate(90deg);
}

.pdp-carousel__button__icon--next{
  transform:rotate(-90deg);
}
.pdp-carousel__button--thumbnailsColumn{
  margin:auto;
  padding:0;
}

.pdp-carousel__button--thumbnailsRow{
  padding:0;
}

.pdp-carousel__button__icon--thumbnailsColumn--prev{
  transform:rotate(180deg);
}

.pdp-carousel__button__icon--thumbnailsRow--prev{
  transform:rotate(90deg);
}

.pdp-carousel__button__icon--thumbnailsRow--next{
  transform:rotate(-90deg);
}
.pdp-carousel__wrapper{
  --peak:0px;
  scroll-padding:var(--peak);
  width:var(--total-width);
  height:var(--height);
  display:flex;
  flex-wrap:nowrap;
  gap:var(--gap);
  -webkit-overflow-scrolling:touch;
}
.pdp-carousel__wrapper--horizontal{
  overflow-x:auto;
  overflow-y:hidden;
  scroll-snap-type:x mandatory;
}
.pdp-carousel__slide{
  display:grid;
  grid-gap:var(--gap);
  grid-auto-columns:1fr;
  grid-auto-rows:100%;
  scroll-snap-align:end;
  scroll-snap-stop:always;
  flex-shrink:0;
}

.pdp-carousel__slide--horizontal{
  grid-auto-flow:column;
  width:calc(calc(100%) - var(--peak));
}

.pdp-carousel__slide--horizontal.pdp-carousel__slide--orphan{
  width:calc((calc(100%) / var(--per-page) * var(--length)) - var(--peak) / var(--per-page) * var(--length) - var(--gap) / var(--per-page) * (var(--per-page) - var(--length)));
}

.pdp-carousel__slide > *{
  vertical-align:middle;
  max-width:100%;
  max-height:100%;
}

.pdp-carousel__slide > img{
  object-fit:contain;
  width:100%;
  height:100%;
}
.pdp-carousel__wrapper--peak{
  --peak:calc(var(--spacing-medium) + var(--gap));
}
.pdp-carousel__wrapper--scrollbar{
  --scroll-foreground:var(--color-neutral-600);
  --scroll-background:var(--color-neutral-400);
  scrollbar-color:var(--scroll-foreground) var(--scroll-background);
  scrollbar-width:thin;
}

.pdp-carousel__wrapper:not(.pdp-carousel__wrapper--scrollbar){
  scrollbar-width:none;
}

.pdp-carousel__wrapper:not(
    .pdp-carousel__wrapper--scrollbar
  )::-webkit-scrollbar{
  display:none;
}

.pdp-carousel__wrapper--scrollbar::-webkit-scrollbar{
  width:4px;
  height:4px;
}

.pdp-carousel__wrapper--scrollbar::-webkit-scrollbar-thumb{
  background:var(--scroll-foreground);
}

.pdp-carousel__wrapper--scrollbar::-webkit-scrollbar-track{
  background:var(--scroll-background);
}
.pdp-carousel__controls__container--thumbnailsRow{
  --thumbnails-spacing:var(--spacing-small);
  --thumbnails-box-width:var(--spacing-xxsmall);
  --thumbnails-rest:calc(var(--thumbnails-spacing) - var(--thumbnails-box-width));
  --thumbnails-width:calc((var(--width) - 2 * var(--icon-size) - 4 * var(--thumbnails-spacing) - var(--thumb-peak) - 2 * var(--thumbnails-box-width)) / 4);
  margin-top:var(--thumbnails-rest);
  width:var(--width);
  display:flex;
}

.pdp-carousel__controls__container--thumbnailsColumn{
  --thumbnails-spacing:var(--spacing-small);
  --thumbnails-box-width:var(--spacing-xxsmall);
  --thumbnails-rest:calc(var(--thumbnails-spacing) - var(--thumbnails-box-width));
  --thumbnails-width:100%;

  width:calc(18.6% - var(--thumbnails-rest));
  height:calc(max(var(--height), 4 * var(--thumbnails-spacing)) - 4 * var(--thumbnails-spacing));
  margin-right:var(--thumbnails-rest);
}
.pdp-carousel__controls__wrapper--thumbnailsColumn{
  max-height:100%;
  overflow-y:scroll;
}

.pdp-carousel__controls__wrapper--thumbnailsRow{
  max-width:100%;
  overflow-x:scroll;
}

.pdp-carousel__controls--thumbnailsRow > label > span:nth-last-child(1){
  margin-right:var(--thumbnails-box-width);
}

.pdp-carousel__controls__wrapper::-webkit-scrollbar{
  display:none;
}

.pdp-carousel__controls__wrapper{
  -ms-overflow-style:none;
  scrollbar-width:none;
}
.pdp-carousel__controls{
  display:flex;
  flex-direction:row;
  gap:var(--spacing-xsmall);
}

.pdp-carousel__controls--thumbnailsColumn{
  display:grid;
  grid-template-columns:repeat(1, 1fr);
  grid-auto-rows:1fr;
  grid-row-gap:var(--thumbnails-spacing);
  padding:var(--thumbnails-box-width);
}

.pdp-carousel__controls--thumbnailsRow{
  display:grid;
  grid-template-columns:repeat(var(--nr-thumbnails), 1fr);
  grid-column-gap:var(--thumbnails-spacing);
  grid-auto-rows:1fr;
  padding:var(--thumbnails-box-width);
}

.pdp-carousel__controls__button{
  border-radius:50%;
  width:10px;
  height:10px;
  padding:0;
  border:none;
  background:var(--color-neutral-400);
  cursor:pointer;
}

.pdp-carousel__controls__button:hover{
  background:var(--color-neutral-500);
}

.pdp-carousel__controls__button:active,
.pdp-carousel__controls__button--active{
  background:var(--color-neutral-600);
}

.pdp-carousel__slide--last{
  width:calc(100%);
}
.pdp-carousel__thumbnail__container input[type='radio']{
  opacity:0;
  position:absolute;
  width:0;
  height:0;
  
}

.pdp-carousel__thumbnail__container .pdp-carousel__thumbnail__span{
  display:inline-block;
  --bg-color:var(--color-neutral-300);
  box-shadow:0 0 0 var(--shape-border-width-1) var(--color-neutral-400);
  position:relative;
  cursor:pointer;
  background-color:var(--bg-color);
  background-image:var(--background-image);
  background-repeat:no-repeat;
  background-size:cover;
  height:100%;
  width:var(--thumbnails-width);
  overflow:hidden;
}

.pdp-carousel__thumbnail__content{
  width:inherit;
  position:absolute;
  top:-9999px;
  bottom:-9999px;
  left:-9999px;
  right:-9999px;
  margin:auto;
  overflow:hidden;
}

.pdp-carousel__thumbnail__span:hover{
  box-shadow:0 0 0 var(--shape-border-width-3) var(--color-neutral-50), 0 0 0 var(--shape-border-width-4) var(--color-neutral-500);
  outline:none;
}

.pdp-carousel__thumbnail__container
  input[type='radio']:not(:checked):active
  ~ .pdp-carousel-thumbnail__span{
  box-shadow:0 0 0 var(--shape-border-width-1) var(--color-neutral-500);
  outline:none;
}

.pdp-carousel__thumbnail__container
  input[type='radio']:checked
  ~ .pdp-carousel__thumbnail__span,
.pdp-carousel__thumbnail--selected{
  box-shadow:0 0 0 var(--shape-border-width-3) var(--color-neutral-50), 0 0 0 var(--shape-border-width-4) var(--color-neutral-800);
}

.pdp-carousel__thumbnail__container
  input[type='radio']:checked:active
  ~ .pdp-carousel__thumbnail__span{
  box-shadow:0 0 0 var(--shape-border-width-3) var(--color-neutral-50), 0 0 0 var(--shape-border-width-4) var(--color-neutral-600);
}

.pdp-carousel__thumbnail__container
  input[type='radio']:focus-visible
  + .pdp-carousel__thumbnail__span{
  box-shadow:0 0 0 var(--shape-border-width-3) var(--color-neutral-900), 0 0 0 6px var(--color-neutral-400);
}

.pdp-carousel__thumbnail__span > img{
  object-fit:cover;
  width:100%;
  height:100%;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 848:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(933);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(476);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.pdp-gallery-grid{
  display:grid;
  grid-gap:var(--gap);
  grid-template-columns:repeat(1, 1fr);
  grid-auto-rows:max-content;
}

.pdp-gallery-grid__item > *{
  height:100%;
  max-width:100%;
  min-width:100%;
  vertical-align:middle;
  width:100%;
  object-fit:contain;
}
.pdp-gallery-grid__item:only-child{
  grid-column:1 / span 2;
}
.pdp-gallery-grid__item:first-child:nth-last-child(2){
  grid-column:1 / span 2;
  grid-row:1;
}

.pdp-gallery-grid__item:nth-child(2):last-child{
  grid-column:1 / 3;
  grid-row:2;
}
@media only screen and (min-width: 1024px){
  .pdp-gallery-grid{
    grid-template-columns:repeat(2, 1fr);
  }
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 340:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(933);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(476);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.pdp-overlay{
  position:fixed;
  top:0;
  left:0;
  z-index:1000;
  right:0;
  bottom:0;
  background-color:var(--color-neutral-50);
  display:flex;
  padding:var(--spacing-medium);
}

.pdp-overlay--centered{
  align-items:center;
  justify-content:center;
}

.pdp-overlay__close-button{
  position:absolute;
  top:var(--spacing-medium);
  right:var(--spacing-medium);
  z-index:1001;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 321:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(933);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(476);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.pdp-price-range .dropin-price{
  letter-spacing:var(--type-headline-2-strong-letter-spacing);
  font:var(--type-headline-2-strong-font);
}

.pdp-price-range__label{
  font:var(--type-headline-2-strong-font);
  letter-spacing:var(--type-body-1-strong-letter-spacing);
  margin-left:5px;
  margin-right:5px;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 994:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(933);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(476);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.pdp-product{
  display:grid;
  grid-template-columns:repeat(var(--grid-1-columns), 1fr);
  grid-column-gap:var(--grid-1-gutters);
  margin:0 var(--grid-1-margins);
}
.pdp-product__gallery-column{
  display:none;
}
.pdp-product__content-column{
  grid-column:1 / span 4;
  color:var(--color-neutral-800);
}
.pdp-product__header{
  display:grid;
  grid-auto-rows:max-content;
  margin-bottom:var(--spacing-medium);
}
.pdp-product__breadcrumbs{
  grid-column:1 / -1;
  padding:var(--spacing-medium) 0 var(--spacing-xxbig);
}
.pdp-product__title{
  font:var(--type-display-3-font);
  letter-spacing:var(--type-display-3-letter-spacing);
  margin:0;
}
.pdp-product__sku{
  font:var(--type-body-1-default-font);
  max-width:600px;
}
.pdp-product__prices{
  display:flex;
  gap:var(--spacing-xsmall);
  margin-top:var(--spacing-medium);
}
.pdp-product__out-of-stock__text{
  font:var(--type-headline-2-strong-font);
}
.pdp-product__options{
  grid-column:1 / span 4;
}
.pdp-product__price,
.pdp-product__price-special{
  font:var(--type-headline-2-strong-font);
}

.pdp-product__price,
.pdp-product__sku,
.pdp-product__price-special,
.pdp-product__out-of-stock__text{
  letter-spacing:var(--type-headline-2-strong-letter-spacing);
}
.pdp-product__price-special{
  margin-left:var(--spacing-xsmall);
}
.pdp-product__price--grey{
  color:var(--color-neutral-500);
}
.pdp-product__actions,
.pdp-product__actions--out-of-stock{
  display:grid;
  grid-auto-flow:row;
  gap:var(--grid-1-gutters);
  grid-auto-rows:max-content;
  margin-bottom:var(--spacing-xxbig);
  margin-top:var(--spacing-big);
}
.pdp-product__short_description,
.pdp-product__attributes{
  font:var(--type-body-1-strong-font);
  letter-spacing:var(--type-body-1-strong-letter-spacing);
  margin-bottom:var(--spacing-small);
}
.pdp-product__description,
.pdp-product__attributes li{
  font:var(--type-body-1-default-font);
  letter-spacing:var(--type-body-1-default-letter-spacing);
}
.pdp-product__attributes{
  margin-top:var(--spacing-xsmall);
}
.pdp-product__short_description p,
.pdp-product__description p,
.pdp-product__attributes li p{
  margin:0;
}
.pdp-product__short_description figure,
.pdp-product__description figure{
  margin:0;
}
.pdp-product__short_description img,
.pdp-product__description img{
  max-width:100%;
}
.pdp-product__images--carousel{
  max-height:60vh;
}

.pdp-product__images--carousel--thumbnails{
  max-height:90vh;
}

.pdp-product__images__placeholder{
  background-color:var(--color-neutral-200);
}
.pdp-product__buttons{
  display:grid;
  grid-auto-rows:max-content;
  grid-gap:var(--grid-1-gutters);
}
.pdp-product__buttons a{
  text-align:center;
}
.pdp-product__buttons a:hover{
  text-decoration:none;
}
.pdp-product__overlay .pdp-overlay__content{
  width:100%;
  height:100%;
}
.pdp-product__overlay__carousel{
  width:100%;
  height:100%;
  box-sizing:border-box;
}
.pdp-product__overlay__carousel img{
  width:100%;
  height:100%;
  object-fit:contain;

}
.pdp-carousel__controls__container--thumbnailsRow img,
.pdp-carousel__controls__container--thumbnailsColumn img{
  object-fit:cover;
}
.pdp-product__quantity{
  grid-column:1 / span 4;
}
.pdp-product__buttons{
  grid-column:1 / span 4;
}
@media only screen and (min-width: 1024px){
  .pdp-product__breadcrumbs{
    grid-column:2 / -2;
  }
  .pdp-product{
    grid-template-columns:repeat(var(--grid-3-columns), 1fr);
    grid-column-gap:var(--grid-3-gutters);
    margin:0 var(--grid-3-margins);
    position:relative;
  }
  .pdp-product__column-container{
    position:relative;
    display:flex;
    flex-direction:column;
  }
  .pdp-product__column-body{
    position:sticky;
    bottom:30%;
    align-self:flex-end;
  }
  .pdp-product__gallery-column{
    display:block;
    grid-column:2 / span 6;
  }
  .pdp-product__content-column{
    grid-column:8 / span 4;
    padding-top:var(--spacing-medium);
  }
  .pdp-product__images--carousel{
    display:none;
  }
  .pdp-product__header{
    margin-bottom:var(--spacing-small);
  }
  .pdp-product__actions{
    grid-template-columns:repeat(var(--grid-1-columns), 1fr);
    grid-column-gap:var(--grid-1-gutters);
    grid-row-gap:var(--spacing-xxbig);
    margin-top:var(--spacing-xxbig);
  }
  .pdp-product__quantity{
    grid-column:1 / span 2;
  }
  .pdp-product__actions--out-of-stock{
    grid-template-columns:repeat(var(--grid-1-columns), 1fr);
    grid-column-gap:var(--grid-1-gutters);
    grid-row-gap:var(--spacing-xxbig);
    margin-top:var(--spacing-small);
  }
  .pdp-product__buttons{
    grid-column:1 / span 4;
  }
  .pdp-product__out-of-stock__text{
    grid-column:1 / span 2;
  }
  .pdp-product__gallery-content,
  .pdp-product__product-content{
    grid-column:2 / span 6;
  }
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 696:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(933);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(476);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.pdp-swatches{
  display:grid;
  grid-auto-flow:row;
  grid-gap:var(--grid-1-gutters);
  grid-auto-rows:max-content;
}

.pdp-swatches__field{
  display:grid;
  font:var(--type-body-2-strong-font);
  grid-auto-rows:max-content;
  gap:var(--spacing-xsmall);
}

.pdp-swatches__field__label{
  font:var(--type-details-caption-1-font);
  letter-spacing:var(--type-details-caption-1-letter-spacing);
  color:var(--color-neutral-800);
}

.pdp-swatches__options{
  display:flex;
  flex-wrap:wrap;
  gap:var(--spacing-xsmall);
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 214:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
module.exports = x({ ["events"]: () => __WEBPACK_EXTERNAL_MODULE__dropins_tools_event_bus_js_9bef1f3f__.events });

/***/ }),

/***/ 752:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
module.exports = x({ ["FetchGraphQL"]: () => __WEBPACK_EXTERNAL_MODULE__dropins_tools_fetch_graphql_js_fa439c6b__.FetchGraphQL });

/***/ }),

/***/ 419:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
module.exports = x({ ["Children"]: () => __WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_compat_js_873595ef__.Children, ["createContext"]: () => __WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_compat_js_873595ef__.createContext, ["useCallback"]: () => __WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_compat_js_873595ef__.useCallback, ["useEffect"]: () => __WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_compat_js_873595ef__.useEffect, ["useMemo"]: () => __WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_compat_js_873595ef__.useMemo, ["useRef"]: () => __WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_compat_js_873595ef__.useRef, ["useState"]: () => __WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_compat_js_873595ef__.useState });

/***/ }),

/***/ 454:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
module.exports = x({ ["useCallback"]: () => __WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_hooks_js_08969fb2__.useCallback, ["useContext"]: () => __WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_hooks_js_08969fb2__.useContext, ["useDebugValue"]: () => __WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_hooks_js_08969fb2__.useDebugValue, ["useEffect"]: () => __WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_hooks_js_08969fb2__.useEffect, ["useId"]: () => __WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_hooks_js_08969fb2__.useId, ["useImperativeHandle"]: () => __WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_hooks_js_08969fb2__.useImperativeHandle, ["useLayoutEffect"]: () => __WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_hooks_js_08969fb2__.useLayoutEffect, ["useMemo"]: () => __WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_hooks_js_08969fb2__.useMemo, ["useReducer"]: () => __WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_hooks_js_08969fb2__.useReducer, ["useRef"]: () => __WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_hooks_js_08969fb2__.useRef, ["useState"]: () => __WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_hooks_js_08969fb2__.useState });

/***/ }),

/***/ 174:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
module.exports = x({ ["Fragment"]: () => __WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_jsx_runtime_js_61a4be9f__.Fragment, ["jsx"]: () => __WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_jsx_runtime_js_61a4be9f__.jsx, ["jsxs"]: () => __WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_jsx_runtime_js_61a4be9f__.jsxs });

/***/ }),

/***/ 770:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
module.exports = x({ ["Component"]: () => __WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_js_29681626__.Component, ["Fragment"]: () => __WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_js_29681626__.Fragment, ["cloneElement"]: () => __WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_js_29681626__.cloneElement, ["createContext"]: () => __WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_js_29681626__.createContext, ["createElement"]: () => __WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_js_29681626__.createElement, ["createRef"]: () => __WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_js_29681626__.createRef, ["h"]: () => __WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_js_29681626__.h, ["hydrate"]: () => __WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_js_29681626__.hydrate, ["options"]: () => __WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_js_29681626__.options, ["render"]: () => __WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_js_29681626__.render, ["toChildArray"]: () => __WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_js_29681626__.toChildArray });

/***/ })

};
;

// load runtime
import __webpack_require__ from "../runtime.js";
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
import * as __webpack_chunk_0__ from "../432.js";
__webpack_require__.C(__webpack_chunk_0__);
import * as __webpack_chunk_1__ from "../18.js";
__webpack_require__.C(__webpack_chunk_1__);
import * as __webpack_chunk_2__ from "../713.js";
__webpack_require__.C(__webpack_chunk_2__);
import * as __webpack_chunk_3__ from "./ProductDetails.js";
__webpack_require__.C(__webpack_chunk_3__);
var __webpack_exports__ = __webpack_exec__(159);
var __webpack_exports__ProductDetails = __webpack_exports__.f;
var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__ProductDetails as ProductDetails, __webpack_exports__default as default };
