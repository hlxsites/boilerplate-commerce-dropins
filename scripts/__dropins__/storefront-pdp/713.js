export const id = 713;
export const ids = [713];
export const modules = {

/***/ 500:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ setImageParamsKeyMap),
/* harmony export */   b: () => (/* binding */ getImageParamsKeyMap)
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

var {
  setEndpoint,
  setFetchGraphQlHeader,
  removeFetchGraphQlHeader,
  setFetchGraphQlHeaders,
  fetchGraphQl,
  getConfig
} = new _adobe_fetch_graphql__WEBPACK_IMPORTED_MODULE_0__.FetchGraphQL().getMethods();

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
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var getProductData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (sku) {
    var _config$getConfig, _config$getConfig$mod, _config$getConfig$mod2, _data$products;
    var initialData = initialize/* config */.v === null || initialize/* config */.v === void 0 ? void 0 : (_config$getConfig = initialize/* config */.v.getConfig()) === null || _config$getConfig === void 0 ? void 0 : (_config$getConfig$mod = _config$getConfig.models) === null || _config$getConfig$mod === void 0 ? void 0 : (_config$getConfig$mod2 = _config$getConfig$mod.ProductDetails) === null || _config$getConfig$mod2 === void 0 ? void 0 : _config$getConfig$mod2.initialData;
    if (initialData) {
      return (0,product_transform/* transformProductData */.t)(initialData);
    }
    var {
      data
    } = yield (0,fetch_graphql/* fetchGraphQl */.gX)(GET_PRODUCT_DATA, {
      method: 'GET',
      variables: {
        skus: [sku]
      }
    });
    var product = data === null || data === void 0 ? void 0 : (_data$products = data.products) === null || _data$products === void 0 ? void 0 : _data$products[0];
    return (0,product_transform/* transformProductData */.t)(product);
  });
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
var _excluded = ["products", "refineProduct"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



function getProductData(_x, _x2) {
  return _getProductData.apply(this, arguments);
}
function _getProductData() {
  _getProductData = _asyncToGenerator(function* (sku, optionUIDs) {
    var optionPairCombinations = getPairCombination(optionUIDs);
    var optionQueries = getProductOptionQuery(optionPairCombinations, sku);
    var mergedQueries = REFINE_PRODUCT_QUERY.replace('# %extendedPlaceholder%', optionQueries);
    var {
      data
    } = yield (0,fetch_graphql/* fetchGraphQl */.gX)(mergedQueries, {
      method: 'GET',
      variables: {
        optionIds: optionUIDs,
        sku
      }
    });
    return data;
  });
  return _getProductData.apply(this, arguments);
}
var getRefinedProduct = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (sku, optionUIDs, anchorOptions) {
    var _config$getConfig, _config$getConfig$mod, _config$getConfig$mod2;
    var data = yield getProductData(sku, optionUIDs);
    if (!data) return null;
    var {
        products,
        refineProduct
      } = data,
      refinedOptions = _objectWithoutProperties(data, _excluded);
    var parent = products === null || products === void 0 ? void 0 : products[0];
    var options = mergeRefinedOptions(Object.values(refinedOptions), parent.options, anchorOptions);

    // needed when anchor options exist
    if (anchorOptions !== null && anchorOptions !== void 0 && anchorOptions.length && refineProduct === null) {
      optionUIDs = updateSelections(options, optionUIDs, anchorOptions);
      var updatedRefinedData = yield getProductData(sku, optionUIDs);
      refineProduct = updatedRefinedData === null || updatedRefinedData === void 0 ? void 0 : updatedRefinedData.refineProduct;
    }
    var refinedData = (0,product_transform/* transformProductData */.t)(_objectSpread(_objectSpread({}, refineProduct || parent), {}, {
      sku: parent.sku,
      name: parent.name,
      options,
      optionUIDs
    }));
    var fallback = initialize/* config */.v === null || initialize/* config */.v === void 0 ? void 0 : (_config$getConfig = initialize/* config */.v.getConfig()) === null || _config$getConfig === void 0 ? void 0 : (_config$getConfig$mod = _config$getConfig.models) === null || _config$getConfig$mod === void 0 ? void 0 : (_config$getConfig$mod2 = _config$getConfig$mod.ProductDetails) === null || _config$getConfig$mod2 === void 0 ? void 0 : _config$getConfig$mod2.fallbackData;
    if (fallback) {
      refinedData = fallback(parent, refinedData);
    }
    return refinedData;
  });
  return function getRefinedProduct(_x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();
function getPairCombination(arr) {
  if (arr.length < 2) {
    return [arr];
  }
  var result = [];
  arr.forEach(item => {
    var temp = [];
    arr.forEach(item2 => {
      if (item !== item2) {
        temp.push(item2);
      }
    });
    result.push(temp);
  });
  return result;
}
function getProductOptionQuery(optionUIDs, sku) {
  return optionUIDs.map((ids, i) => {
    return "\n          ProductOption".concat(i, ": refineProduct(\n            optionIds: [\n              ").concat(ids.map(id => "\"".concat(id, "\"")).join(', '), "\n            ]\n            sku: \"").concat(sku, "\"\n          ) {\n            ... on ComplexProductView {\n              options {\n                ...ProductOptionFragment\n              }\n            }\n          }\n        ");
  }).join('');
}
function mergeRefinedOptions(options, parent, anchorOptions) {
  // flat _refined[].options[] to _refinedOptions[]
  var refinedOptions = Object.values(options).filter(x => !!x).reduce((acc, curr) => {
    if (!curr.options) return [...acc];
    return [...acc, ...curr.options];
  }, []);

  // Create a map to store items by their id from original
  var map = new Map(parent.map(item => [item.id, item]));

  // Iterate through refinedOptions and merge items
  refinedOptions.forEach(current => {
    // anchor options should display all values, so no merge is performed
    if (anchorOptions !== null && anchorOptions !== void 0 && anchorOptions.includes(current.id)) {
      return;
    }
    map.set(current.id, current);
  });
  return [...map.values()];
}
function updateSelections(options, optionsUIDs, anchorOptions) {
  var updatedOptionsUIDs = [];
  var optionValue;
  options.forEach(option => {
    if (anchorOptions.includes(option.id)) {
      var _option$values, _option$values$find, _option$values$;
      optionValue = ((_option$values = option.values) === null || _option$values === void 0 ? void 0 : (_option$values$find = _option$values.find(value => optionsUIDs.includes(value === null || value === void 0 ? void 0 : value.id))) === null || _option$values$find === void 0 ? void 0 : _option$values$find.id) || ((_option$values$ = option.values[0]) === null || _option$values$ === void 0 ? void 0 : _option$values$.id);
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

/***/ 18:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  v: () => (/* binding */ config),
  j: () => (/* binding */ initialize)
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
var image_params_keymap = __webpack_require__(500);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/lib/initializer.ts
var _excluded = ["imageParamsKeyMap"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

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
      (0,image_params_keymap/* setImageParamsKeyMap */.J)(imageParamsKeyMap);
      return init(options);
    };
  }
}
class initializers {
  static register(initializer, options) {
    if (initializers._mounted) {
      var _initializer$listener, _initializer$init;
      (_initializer$listener = initializer.listeners) === null || _initializer$listener === void 0 ? void 0 : _initializer$listener.call(initializer, options);
      (_initializer$init = initializer.init) === null || _initializer$init === void 0 ? void 0 : _initializer$init.call(initializer, options);
    }
    initializers._initializers.push([initializer, options]);
  }
  static mount() {
    var _initializers$_initia, _initializers$_initia2;
    initializers._mounted = true;
    // In this specific order
    // 1. Bind events
    (_initializers$_initia = initializers._initializers) === null || _initializers$_initia === void 0 ? void 0 : _initializers$_initia.forEach(_ref3 => {
      var _initializer$listener2;
      var [initializer, options] = _ref3;
      (_initializer$listener2 = initializer.listeners) === null || _initializer$listener2 === void 0 ? void 0 : _initializer$listener2.call(initializer, options);
    });

    // 2. Initialize APIs
    (_initializers$_initia2 = initializers._initializers) === null || _initializers$_initia2 === void 0 ? void 0 : _initializers$_initia2.forEach(_ref4 => {
      var _initializer$init2;
      var [initializer, options] = _ref4;
      (_initializer$init2 = initializer.init) === null || _initializer$init2 === void 0 ? void 0 : _initializer$init2.call(initializer, _objectSpread({
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
;// CONCATENATED MODULE: ./api/initialize/initialize.ts
function initialize_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function initialize_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? initialize_ownKeys(Object(source), !0).forEach(function (key) { initialize_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : initialize_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function initialize_defineProperty(obj, key, value) { key = initialize_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function initialize_toPropertyKey(arg) { var key = initialize_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function initialize_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var initialize = new Initializer({
  init: function () {
    var _init = _asyncToGenerator(function* (config) {
      var defaultConfig = {};
      initialize.config.setConfig(initialize_objectSpread(initialize_objectSpread({}, defaultConfig), config));
    });
    function init(_x) {
      return _init.apply(this, arguments);
    }
    return init;
  }(),
  listeners: () => []
});
var config = initialize.config;

/***/ }),

/***/ 264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ transformProductData)
/* harmony export */ });
/* harmony import */ var _api_index_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

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
  return (_data$images = data.images) === null || _data$images === void 0 ? void 0 : _data$images.map(image => {
    // Remove protocol from image URL
    image.url = image.url.replace(/^https?:/, '');
    return image;
  });
}
function transformAttributes(data) {
  var _data$attributes, _data$attributes$filt;
  return (_data$attributes = data.attributes
  // only show attributes that are visible in PDP
  ) === null || _data$attributes === void 0 ? void 0 : (_data$attributes$filt = _data$attributes.filter(_ref => {
    var {
      roles
    } = _ref;
    return (roles === null || roles === void 0 ? void 0 : roles.indexOf('visible_in_pdp')) !== -1;
  })
  // transform attribute values
  ) === null || _data$attributes$filt === void 0 ? void 0 : _data$attributes$filt.map(_ref2 => {
    var {
      label,
      value,
      name
    } = _ref2;
    return {
      id: name,
      label,
      value: value.toString().split(',').join(', ')
    };
  });
}
function transformOptions(data) {
  var {
    options,
    optionUIDs
  } = data;
  return options === null || options === void 0 ? void 0 : options.map(_ref3 => {
    var _values$, _values$2;
    var {
      id,
      title,
      required,
      multi,
      values
    } = _ref3;
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
      id,
      type,
      typename,
      label: title,
      required,
      multiple: multi,
      items: values === null || values === void 0 ? void 0 : values.map(_ref4 => {
        var _type;
        var {
          id,
          title,
          inStock,
          value
        } = _ref4;
        return {
          id,
          label: title,
          inStock,
          value: ((_type = type) === null || _type === void 0 ? void 0 : _type.toLowerCase()) === 'dropdown' ? id : value === null || value === void 0 ? void 0 : value.replace(/^https?:/, ''),
          selected: (optionUIDs === null || optionUIDs === void 0 ? void 0 : optionUIDs.indexOf(id)) > -1
        };
      })
    };
  });
}
function transformPrices(data) {
  var _price$roles, _priceRange$maximum, _priceRange$maximum$r, _priceRange$minimum, _priceRange$minimum$r, _price$final, _price$final2, _price$final2$amount, _price$final3, _price$final3$amount, _priceRange$minimum2, _priceRange$minimum2$, _priceRange$minimum3, _priceRange$minimum3$, _priceRange$minimum4, _priceRange$maximum2;
  var {
    price,
    priceRange,
    __typename: type
  } = data;
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
    visible
  });
}

/***/ })

};
