export const id = 865;
export const ids = [865];
export const modules = {

/***/ 173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  H: () => (/* binding */ Initializer),
  W: () => (/* binding */ initializers)
});

;// CONCATENATED MODULE: ./lib/config.ts
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
;// CONCATENATED MODULE: ./lib/image-params-keymap.ts
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
;// CONCATENATED MODULE: ./lib/initializer.ts
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
      setImageParamsKeyMap(imageParamsKeyMap);
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

/***/ })

};
;

// load runtime
import __webpack_require__ from "./runtime.js";
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
import * as __webpack_chunk_0__ from "./initializer.js";
__webpack_require__.C(__webpack_chunk_0__);
var __webpack_exports__ = __webpack_exec__(173);
var __webpack_exports__Initializer = __webpack_exports__.H;
var __webpack_exports__initializers = __webpack_exports__.W;
export { __webpack_exports__Initializer as Initializer, __webpack_exports__initializers as initializers };
