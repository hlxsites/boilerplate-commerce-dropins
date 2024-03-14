export const id = 85;
export const ids = [85];
export const modules = {

/***/ 597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AZ: () => (/* binding */ fetchGraphQl),
/* harmony export */   Cz: () => (/* binding */ setEndpoint),
/* harmony export */   MR: () => (/* binding */ setFetchGraphQlHeaders),
/* harmony export */   Np: () => (/* binding */ setFetchGraphQlHeader),
/* harmony export */   WI: () => (/* binding */ FetchGraphQL),
/* harmony export */   Xx: () => (/* binding */ removeFetchGraphQlHeader),
/* harmony export */   zj: () => (/* binding */ getConfig)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var defaultHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
};
class FetchGraphQLMesh {
  get endpoint() {
    return this._endpoint;
  }
  get fetchGraphQlHeaders() {
    return this._fetchGraphQlHeaders;
  }
  setEndpoint(endpoint) {
    this._endpoint = endpoint;
  }
  setFetchGraphQlHeader(key, value) {
    this._fetchGraphQlHeaders = _objectSpread(_objectSpread({}, this.fetchGraphQlHeaders), {}, {
      [key]: value
    });
  }
  removeFetchGraphQlHeader(key) {
    var _this$_fetchGraphQlHe;
    (_this$_fetchGraphQlHe = this._fetchGraphQlHeaders) === null || _this$_fetchGraphQlHe === void 0 || delete _this$_fetchGraphQlHe[key];
  }
  setFetchGraphQlHeaders(header) {
    this._fetchGraphQlHeaders = _objectSpread({}, header);
  }
  fetchGraphQl(query, options) {
    var _this = this;
    return _asyncToGenerator(function* () {
      var endpoint = _this.endpoint;
      var fetchGraphQlHeaders = _this.fetchGraphQlHeaders;
      if (!endpoint) throw Error('Missing "url"');
      var method = (options === null || options === void 0 ? void 0 : options.method) || 'POST';
      var cache = options === null || options === void 0 ? void 0 : options.cache;
      var signal = options === null || options === void 0 ? void 0 : options.signal;
      var body;
      var url = new URL(endpoint);
      var headers = _objectSpread(_objectSpread({}, defaultHeaders), fetchGraphQlHeaders);
      if (method === 'POST') {
        body = JSON.stringify({
          query,
          variables: options === null || options === void 0 ? void 0 : options.variables
        });
      }
      if (method === 'GET') {
        url.searchParams.append('query', query.trim());
        if (options !== null && options !== void 0 && options.variables) url.searchParams.append('variables', JSON.stringify(options.variables));
      }
      return yield fetch(url, {
        method,
        headers,
        body,
        cache,
        signal
      }).then(r => r.json());
    })();
  }
  getConfig() {
    return {
      endpoint: this.endpoint,
      fetchGraphQlHeaders: this.fetchGraphQlHeaders
    };
  }
  getMethods() {
    return {
      setEndpoint: this.setEndpoint.bind(this),
      setFetchGraphQlHeader: this.setFetchGraphQlHeader.bind(this),
      removeFetchGraphQlHeader: this.removeFetchGraphQlHeader.bind(this),
      setFetchGraphQlHeaders: this.setFetchGraphQlHeaders.bind(this),
      fetchGraphQl: this.fetchGraphQl.bind(this),
      getConfig: this.getConfig.bind(this)
    };
  }
}
var mesh = new FetchGraphQLMesh();
class FetchGraphQL extends FetchGraphQLMesh {
  get endpoint() {
    var _this$_endpoint;
    return (_this$_endpoint = this._endpoint) !== null && _this$_endpoint !== void 0 ? _this$_endpoint : mesh.endpoint;
  }
  get fetchGraphQlHeaders() {
    return (this._endpoint ? this._fetchGraphQlHeaders : _objectSpread(_objectSpread({}, this._fetchGraphQlHeaders), mesh.fetchGraphQlHeaders)) || {};
  }
}

// Global Mesh instance
var {
  setEndpoint,
  setFetchGraphQlHeaders,
  setFetchGraphQlHeader,
  removeFetchGraphQlHeader,
  fetchGraphQl,
  getConfig
} = mesh.getMethods();

/***/ })

};
;

// load runtime
import __webpack_require__ from "./runtime.js";
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
import * as __webpack_chunk_0__ from "./fetch-graphql.js";
__webpack_require__.C(__webpack_chunk_0__);
var __webpack_exports__ = __webpack_exec__(597);
var __webpack_exports__FetchGraphQL = __webpack_exports__.WI;
var __webpack_exports__fetchGraphQl = __webpack_exports__.AZ;
var __webpack_exports__getConfig = __webpack_exports__.zj;
var __webpack_exports__removeFetchGraphQlHeader = __webpack_exports__.Xx;
var __webpack_exports__setEndpoint = __webpack_exports__.Cz;
var __webpack_exports__setFetchGraphQlHeader = __webpack_exports__.Np;
var __webpack_exports__setFetchGraphQlHeaders = __webpack_exports__.MR;
export { __webpack_exports__FetchGraphQL as FetchGraphQL, __webpack_exports__fetchGraphQl as fetchGraphQl, __webpack_exports__getConfig as getConfig, __webpack_exports__removeFetchGraphQlHeader as removeFetchGraphQlHeader, __webpack_exports__setEndpoint as setEndpoint, __webpack_exports__setFetchGraphQlHeader as setFetchGraphQlHeader, __webpack_exports__setFetchGraphQlHeaders as setFetchGraphQlHeaders };
