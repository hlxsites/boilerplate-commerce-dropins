export const id = 713;
export const ids = [713];
export const modules = {

/***/ 322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XV: () => (/* binding */ removeFetchGraphQlHeader),
/* harmony export */   gO: () => (/* binding */ setEndpoint),
/* harmony export */   gX: () => (/* binding */ fetchGraphQl),
/* harmony export */   iE: () => (/* binding */ getConfig),
/* harmony export */   mv: () => (/* binding */ setFetchGraphQlHeader),
/* harmony export */   yg: () => (/* binding */ setFetchGraphQlHeaders)
/* harmony export */ });
/* harmony import */ var _adobe_fetch_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(752);

var _FetchGraphQL$getMeth = new _adobe_fetch_graphql__WEBPACK_IMPORTED_MODULE_0__.FetchGraphQL().getMethods(),
  setEndpoint = _FetchGraphQL$getMeth.setEndpoint,
  setFetchGraphQlHeader = _FetchGraphQL$getMeth.setFetchGraphQlHeader,
  removeFetchGraphQlHeader = _FetchGraphQL$getMeth.removeFetchGraphQlHeader,
  setFetchGraphQlHeaders = _FetchGraphQL$getMeth.setFetchGraphQlHeaders,
  fetchGraphQl = _FetchGraphQL$getMeth.fetchGraphQl,
  getConfig = _FetchGraphQL$getMeth.getConfig;


/***/ }),

/***/ 675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  b: () => (/* binding */ getProductData)
});

// EXTERNAL MODULE: ./api/initialize/initialize.ts + 2 modules
var initialize = __webpack_require__(18);
// EXTERNAL MODULE: ./api/fetch-graphql/fetch-graphql.ts
var fetch_graphql = __webpack_require__(322);
// EXTERNAL MODULE: ./data/transforms/product-transform.ts
var product_transform = __webpack_require__(264);
// EXTERNAL MODULE: ./api/graphql/ProductFragment.graphql.ts + 1 modules
var ProductFragment_graphql = __webpack_require__(140);
;// CONCATENATED MODULE: ./api/getProductData/graphql/getProductData.graphql.ts

var GET_PRODUCT_DATA = "\nquery GET_PRODUCT_DATA($skus: [String]) {\n    products(skus: $skus) {\n        ...ProductFragment\n    }\n}\n\n".concat(ProductFragment_graphql/* ProductFragment */.K, "\n");
;// CONCATENATED MODULE: ./api/getProductData/getProductData.ts
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var getProductData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(sku) {
    var _config$getConfig, _config$getConfig$mod, _config$getConfig$mod2, _data$products;
    var initialData, _yield$fetchGraphQl, data, product;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          initialData = initialize/* config */.v === null || initialize/* config */.v === void 0 ? void 0 : (_config$getConfig = initialize/* config */.v.getConfig()) === null || _config$getConfig === void 0 ? void 0 : (_config$getConfig$mod = _config$getConfig.models) === null || _config$getConfig$mod === void 0 ? void 0 : (_config$getConfig$mod2 = _config$getConfig$mod.ProductDetails) === null || _config$getConfig$mod2 === void 0 ? void 0 : _config$getConfig$mod2.initialData;
          if (!initialData) {
            _context.next = 3;
            break;
          }
          return _context.abrupt("return", (0,product_transform/* transformProductData */.t)(initialData));
        case 3:
          _context.next = 5;
          return (0,fetch_graphql/* fetchGraphQl */.gX)(GET_PRODUCT_DATA, {
            method: 'GET',
            variables: {
              skus: [sku]
            }
          });
        case 5:
          _yield$fetchGraphQl = _context.sent;
          data = _yield$fetchGraphQl.data;
          product = data === null || data === void 0 ? void 0 : (_data$products = data.products) === null || _data$products === void 0 ? void 0 : _data$products[0];
          return _context.abrupt("return", (0,product_transform/* transformProductData */.t)(product));
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getProductData(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ 52:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  R: () => (/* binding */ getRefinedProduct)
});

// EXTERNAL MODULE: ./api/fetch-graphql/fetch-graphql.ts
var fetch_graphql = __webpack_require__(322);
// EXTERNAL MODULE: ./api/initialize/initialize.ts + 2 modules
var initialize = __webpack_require__(18);
// EXTERNAL MODULE: ./data/transforms/product-transform.ts
var product_transform = __webpack_require__(264);
// EXTERNAL MODULE: ./api/graphql/ProductFragment.graphql.ts + 1 modules
var ProductFragment_graphql = __webpack_require__(140);
;// CONCATENATED MODULE: ./api/getRefinedProduct/graphql/RefineProductQuery.graphql.ts

var REFINE_PRODUCT_QUERY = "\nquery REFINE_PRODUCT_QUERY(\n    $optionIds: [String!]!\n    $sku: String!\n) {\n    # Refined Product\n    refineProduct(\n        optionIds: $optionIds \n        sku: $sku\n    ) {\n        ...ProductFragment\n    }\n\n    # Parent Product\n    products(skus: [$sku]) {\n        ...ProductFragment\n    }\n\n    # %extendedPlaceholder%\n}\n\n".concat(ProductFragment_graphql/* ProductFragment */.K, "\n");
;// CONCATENATED MODULE: ./api/getRefinedProduct/getRefinedProduct.ts
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["products", "refineProduct"];
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



function getProductData(_x, _x2) {
  return _getProductData.apply(this, arguments);
}
function _getProductData() {
  _getProductData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(sku, optionUIDs) {
    var optionPairCombinations, optionQueries, mergedQueries, _yield$fetchGraphQl, data;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          optionPairCombinations = getPairCombination(optionUIDs);
          optionQueries = getProductOptionQuery(optionPairCombinations, sku);
          mergedQueries = REFINE_PRODUCT_QUERY.replace('# %extendedPlaceholder%', optionQueries);
          _context2.next = 5;
          return (0,fetch_graphql/* fetchGraphQl */.gX)(mergedQueries, {
            method: 'GET',
            variables: {
              optionIds: optionUIDs,
              sku: sku
            }
          });
        case 5:
          _yield$fetchGraphQl = _context2.sent;
          data = _yield$fetchGraphQl.data;
          return _context2.abrupt("return", data);
        case 8:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _getProductData.apply(this, arguments);
}
var getRefinedProduct = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(sku, optionUIDs, anchorOptions) {
    var _config$getConfig, _config$getConfig$mod, _config$getConfig$mod2;
    var data, products, refineProduct, refinedOptions, parent, options, updatedRefinedData, refinedData, fallback;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return getProductData(sku, optionUIDs);
        case 2:
          data = _context.sent;
          if (data) {
            _context.next = 5;
            break;
          }
          return _context.abrupt("return", null);
        case 5:
          products = data.products, refineProduct = data.refineProduct, refinedOptions = _objectWithoutProperties(data, _excluded);
          parent = products === null || products === void 0 ? void 0 : products[0];
          options = mergeRefinedOptions(Object.values(refinedOptions), parent.options, anchorOptions); // needed when anchor options exist
          if (!(anchorOptions !== null && anchorOptions !== void 0 && anchorOptions.length && refineProduct === null)) {
            _context.next = 14;
            break;
          }
          optionUIDs = updateSelections(options, optionUIDs, anchorOptions);
          _context.next = 12;
          return getProductData(sku, optionUIDs);
        case 12:
          updatedRefinedData = _context.sent;
          refineProduct = updatedRefinedData === null || updatedRefinedData === void 0 ? void 0 : updatedRefinedData.refineProduct;
        case 14:
          refinedData = (0,product_transform/* transformProductData */.t)(_objectSpread(_objectSpread({}, refineProduct || parent), {}, {
            sku: parent.sku,
            name: parent.name,
            options: options,
            optionUIDs: optionUIDs
          }));
          fallback = initialize/* config */.v === null || initialize/* config */.v === void 0 ? void 0 : (_config$getConfig = initialize/* config */.v.getConfig()) === null || _config$getConfig === void 0 ? void 0 : (_config$getConfig$mod = _config$getConfig.models) === null || _config$getConfig$mod === void 0 ? void 0 : (_config$getConfig$mod2 = _config$getConfig$mod.ProductDetails) === null || _config$getConfig$mod2 === void 0 ? void 0 : _config$getConfig$mod2.fallbackData;
          if (fallback) {
            refinedData = fallback(parent, refinedData);
          }
          return _context.abrupt("return", refinedData);
        case 18:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getRefinedProduct(_x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();
function getPairCombination(arr) {
  if (arr.length < 2) {
    return [arr];
  }
  var result = [];
  arr.forEach(function (item) {
    var temp = [];
    arr.forEach(function (item2) {
      if (item !== item2) {
        temp.push(item2);
      }
    });
    result.push(temp);
  });
  return result;
}
function getProductOptionQuery(optionUIDs, sku) {
  return optionUIDs.map(function (ids, i) {
    return "\n          ProductOption".concat(i, ": refineProduct(\n            optionIds: [\n              ").concat(ids.map(function (id) {
      return "\"".concat(id, "\"");
    }).join(', '), "\n            ]\n            sku: \"").concat(sku, "\"\n          ) {\n            ... on ComplexProductView {\n              options {\n                ...ProductOptionFragment\n              }\n            }\n          }\n        ");
  }).join('');
}
function mergeRefinedOptions(options, parent, anchorOptions) {
  // flat _refined[].options[] to _refinedOptions[]
  var refinedOptions = Object.values(options).filter(function (x) {
    return !!x;
  }).reduce(function (acc, curr) {
    if (!curr.options) return _toConsumableArray(acc);
    return [].concat(_toConsumableArray(acc), _toConsumableArray(curr.options));
  }, []);

  // Create a map to store items by their id from original
  var map = new Map(parent.map(function (item) {
    return [item.id, item];
  }));

  // Iterate through refinedOptions and merge items
  refinedOptions.forEach(function (current) {
    // anchor options should display all values, so no merge is performed
    if (anchorOptions !== null && anchorOptions !== void 0 && anchorOptions.includes(current.id)) {
      return;
    }
    map.set(current.id, current);
  });
  return _toConsumableArray(map.values());
}
function updateSelections(options, optionsUIDs, anchorOptions) {
  var updatedOptionsUIDs = [];
  var optionValue;
  options.forEach(function (option) {
    if (anchorOptions.includes(option.id)) {
      var _option$values, _option$values$find, _option$values$;
      optionValue = ((_option$values = option.values) === null || _option$values === void 0 ? void 0 : (_option$values$find = _option$values.find(function (value) {
        return optionsUIDs.includes(value === null || value === void 0 ? void 0 : value.id);
      })) === null || _option$values$find === void 0 ? void 0 : _option$values$find.id) || ((_option$values$ = option.values[0]) === null || _option$values$ === void 0 ? void 0 : _option$values$.id);
    } else {
      var _option$values$2;
      optionValue = (_option$values$2 = option.values[0]) === null || _option$values$2 === void 0 ? void 0 : _option$values$2.id; // TODO check if we should use default value instead
    }

    updatedOptionsUIDs.push(optionValue);
  });
  return updatedOptionsUIDs;
}

/***/ }),

/***/ 140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  K: () => (/* binding */ ProductFragment)
});

;// CONCATENATED MODULE: ./api/graphql/ProductOptionFragment.graphql.ts
var ProductOptionFragment = "\nfragment ProductOptionFragment on ProductViewOption {\n    id\n    title\n    required\n    multi\n    values {\n      id\n      title\n      inStock\n      __typename\n      ... on ProductViewOptionValueProduct {\n        title\n        quantity\n        isDefault\n        product {\n          sku\n          shortDescription\n          name\n          price {\n            final {\n              amount {\n                value\n                currency\n              }\n            }\n            regular {\n              amount {\n                value\n                currency\n              }\n            }\n            roles\n          }\n        }\n      }\n      ... on ProductViewOptionValueSwatch {\n        id\n        title\n        type\n        value\n        inStock\n      }\n    }\n  }\n";
;// CONCATENATED MODULE: ./api/graphql/ProductFragment.graphql.ts

var ProductFragment = "\nfragment ProductFragment on ProductView {\n  __typename\n  id\n  sku\n  name\n  shortDescription\n  description\n  inStock\n  addToCartAllowed\n  url\n  urlKey\n  externalId\n\n  images(roles: []) {\n    url\n    label\n    roles\n  }\n\n  attributes(roles: []) {\n    name\n    label\n    value\n    roles\n  }\n\n... on SimpleProductView {\n    price {\n        roles\n\n        regular {\n            amount {\n                value\n                currency\n            }\n        }\n\n        final {\n            amount {\n                value\n                currency\n            }\n        }\n    }\n}\n \n\n  ... on ComplexProductView {\n    options {\n      ...ProductOptionFragment\n    }\n    \n    priceRange {\n      maximum {\n        final {\n          amount {\n            value\n            currency\n          }\n        }\n        regular {\n          amount {\n            value\n            currency\n          }\n        }\n        roles\n      }\n      minimum {\n        final {\n          amount {\n            value\n            currency\n          }\n        }\n        regular {\n          amount {\n            value\n            currency\n          }\n        }\n        roles\n      }\n    }\n  }\n}\n\n".concat(ProductOptionFragment, "\n");

/***/ }),

/***/ 264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ transformProductData)
/* harmony export */ });
/* harmony import */ var _api_index_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function transformProductData(data) {
  var _config$getConfig, _config$getConfig$mod, _config$getConfig$mod2;
  var productData = data ? {
    name: data.name,
    sku: data.sku,
    addToCartAllowed: data.addToCartAllowed,
    inStock: data.inStock,
    shortDescription: data.shortDescription,
    description: data.description,
    images: transformImages(data),
    prices: transformPrices(data),
    attributes: transformAttributes(data),
    options: transformOptions(data),
    optionUIDs: data.optionUIDs,
    url: data.url,
    urlKey: data.urlKey,
    externalId: data.externalId
  } : null;
  var transform = (_config$getConfig = _api_index_ts__WEBPACK_IMPORTED_MODULE_0__/* .config */ .v.getConfig()) === null || _config$getConfig === void 0 ? void 0 : (_config$getConfig$mod = _config$getConfig.models) === null || _config$getConfig$mod === void 0 ? void 0 : (_config$getConfig$mod2 = _config$getConfig$mod.ProductDetails) === null || _config$getConfig$mod2 === void 0 ? void 0 : _config$getConfig$mod2.transform;
  if (transform && productData) {
    return transform(productData);
  }
  return productData;
}
function transformImages(data) {
  var _data$images;
  return (_data$images = data.images) === null || _data$images === void 0 ? void 0 : _data$images.map(function (image) {
    // Remove protocol from image URL
    image.url = image.url.replace(/^https?:/, '');
    return image;
  });
}
function transformAttributes(data) {
  var _data$attributes, _data$attributes$filt;
  return (_data$attributes = data.attributes
  // only show attributes that are visible in PDP
  ) === null || _data$attributes === void 0 ? void 0 : (_data$attributes$filt = _data$attributes.filter(function (_ref) {
    var roles = _ref.roles;
    return (roles === null || roles === void 0 ? void 0 : roles.indexOf('visible_in_pdp')) !== -1;
  })
  // transform attribute values
  ) === null || _data$attributes$filt === void 0 ? void 0 : _data$attributes$filt.map(function (_ref2) {
    var label = _ref2.label,
      value = _ref2.value,
      name = _ref2.name;
    return {
      id: name,
      label: label,
      value: value.toString().split(',').join(', ')
    };
  });
}
function transformOptions(data) {
  var options = data.options,
    optionUIDs = data.optionUIDs;
  return options === null || options === void 0 ? void 0 : options.map(function (_ref3) {
    var _values$, _values$2;
    var id = _ref3.id,
      title = _ref3.title,
      required = _ref3.required,
      multi = _ref3.multi,
      values = _ref3.values;
    var typename = values === null || values === void 0 ? void 0 : (_values$ = values[0]) === null || _values$ === void 0 ? void 0 : _values$.__typename;
    var type = values === null || values === void 0 ? void 0 : values[0].type;
    var isBundle = (values === null || values === void 0 ? void 0 : (_values$2 = values[0]) === null || _values$2 === void 0 ? void 0 : _values$2.__typename) === 'ProductViewOptionValueProduct';
    if (isBundle) {
      type = undefined;
    } else {
      if (type) {
        type = type.replace('COLOR_HEX', 'color').replace('TEXT', 'text').replace('IMAGE', 'image');
      } else {
        type = 'dropdown';
      }
    }
    return {
      id: id,
      type: type,
      typename: typename,
      label: title,
      required: required,
      multiple: multi,
      items: values === null || values === void 0 ? void 0 : values.map(function (_ref4) {
        var _type;
        var id = _ref4.id,
          title = _ref4.title,
          inStock = _ref4.inStock,
          value = _ref4.value;
        return {
          id: id,
          label: title,
          inStock: inStock,
          value: ((_type = type) === null || _type === void 0 ? void 0 : _type.toLowerCase()) === 'dropdown' ? id : value === null || value === void 0 ? void 0 : value.replace(/^https?:/, ''),
          selected: (optionUIDs === null || optionUIDs === void 0 ? void 0 : optionUIDs.indexOf(id)) > -1
        };
      })
    };
  });
}
function transformPrices(data) {
  var _price$roles, _priceRange$maximum, _priceRange$maximum$r, _priceRange$minimum, _priceRange$minimum$r, _price$final, _price$final2, _price$final2$amount, _price$final3, _price$final3$amount, _priceRange$minimum2, _priceRange$minimum2$, _priceRange$minimum3, _priceRange$minimum3$, _priceRange$minimum4, _priceRange$maximum2;
  var price = data.price,
    priceRange = data.priceRange,
    type = data.__typename;
  var regular = type === 'SimpleProductView' ? {
    regular: {
      amount: price.regular.amount.value,
      currency: price.final.amount.currency === 'NONE' //temporary fix if there is no currency
      ? 'USD' : price.final.amount.currency,
      variant: price.regular.amount.value === price.final.amount.value ? 'default' : 'strikethrough'
    }
  } : {};
  var visible = type === 'SimpleProductView' ? price === null || price === void 0 ? void 0 : (_price$roles = price.roles) === null || _price$roles === void 0 ? void 0 : _price$roles.includes('visible') : (priceRange === null || priceRange === void 0 ? void 0 : (_priceRange$maximum = priceRange.maximum) === null || _priceRange$maximum === void 0 ? void 0 : (_priceRange$maximum$r = _priceRange$maximum.roles) === null || _priceRange$maximum$r === void 0 ? void 0 : _priceRange$maximum$r.includes('visible')) && (priceRange === null || priceRange === void 0 ? void 0 : (_priceRange$minimum = priceRange.minimum) === null || _priceRange$minimum === void 0 ? void 0 : (_priceRange$minimum$r = _priceRange$minimum.roles) === null || _priceRange$minimum$r === void 0 ? void 0 : _priceRange$minimum$r.includes('visible'));
  var final = type === 'SimpleProductView' ? {
    final: {
      amount: price === null || price === void 0 ? void 0 : (_price$final = price.final) === null || _price$final === void 0 ? void 0 : _price$final.amount.value,
      currency: ((_price$final2 = price.final) === null || _price$final2 === void 0 ? void 0 : (_price$final2$amount = _price$final2.amount) === null || _price$final2$amount === void 0 ? void 0 : _price$final2$amount.currency) === 'NONE' //temporary fix if there is no currency
      ? 'USD' : price === null || price === void 0 ? void 0 : (_price$final3 = price.final) === null || _price$final3 === void 0 ? void 0 : (_price$final3$amount = _price$final3.amount) === null || _price$final3$amount === void 0 ? void 0 : _price$final3$amount.currency,
      variant: 'default'
    }
  } : {
    final: {
      currency: (priceRange === null || priceRange === void 0 ? void 0 : (_priceRange$minimum2 = priceRange.minimum) === null || _priceRange$minimum2 === void 0 ? void 0 : (_priceRange$minimum2$ = _priceRange$minimum2.final) === null || _priceRange$minimum2$ === void 0 ? void 0 : _priceRange$minimum2$.amount.currency) === 'NONE' ? 'USD' : priceRange === null || priceRange === void 0 ? void 0 : (_priceRange$minimum3 = priceRange.minimum) === null || _priceRange$minimum3 === void 0 ? void 0 : (_priceRange$minimum3$ = _priceRange$minimum3.final) === null || _priceRange$minimum3$ === void 0 ? void 0 : _priceRange$minimum3$.amount.currency,
      minimumAmount: priceRange === null || priceRange === void 0 ? void 0 : (_priceRange$minimum4 = priceRange.minimum) === null || _priceRange$minimum4 === void 0 ? void 0 : _priceRange$minimum4.final.amount.value,
      maximumAmount: priceRange === null || priceRange === void 0 ? void 0 : (_priceRange$maximum2 = priceRange.maximum) === null || _priceRange$maximum2 === void 0 ? void 0 : _priceRange$maximum2.final.amount.value
    }
  };
  return _objectSpread(_objectSpread(_objectSpread({}, regular), final), {}, {
    visible: visible
  });
}

/***/ })

};
