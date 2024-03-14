export const id = 248;
export const ids = [248];
export const modules = {

/***/ 846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ events)
/* harmony export */ });
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var hash = Date.now().toString(36).substring(2);
class events {
  static on(event, handler, options) {
    if (typeof BroadcastChannel === 'undefined') {
      return;
    }
    var subscriber = new BroadcastChannel('ElsieSDK/EventBus');
    if (options !== null && options !== void 0 && options.eager) {
      var lastEvent = this._lastEvent[event];
      if (lastEvent) {
        handler(lastEvent.payload);
      }
    }
    subscriber.addEventListener('message', _ref => {
      var {
        data
      } = _ref;
      // ignore events from other instances (only if identifier is set)
      if (this._identifier && this._identifier !== data.identifier) return;
      if (data.event === event) {
        handler(data.payload);
      }
    });
    return {
      off() {
        subscriber.close();
      }
    };
  }
  static emit(event, payload) {
    if (typeof BroadcastChannel === 'undefined') {
      return;
    }
    var publisher = new BroadcastChannel('ElsieSDK/EventBus');
    publisher.postMessage({
      event,
      identifier: this._identifier,
      payload
    });
    this._lastEvent[event] = {
      payload
    };
    publisher.close();
  }
  static enableLogger(enabled) {
    var _this$_logger;
    if (typeof BroadcastChannel === 'undefined') {
      return;
    }

    // reset logger
    (_this$_logger = this._logger) === null || _this$_logger === void 0 || _this$_logger.close();
    this._logger = null;
    if (enabled === false) return;

    // create new logger
    this._logger = new BroadcastChannel('ElsieSDK/EventBus');
    this._logger.addEventListener('message', _ref2 => {
      var {
        data
      } = _ref2;
      if (this._identifier && this._identifier !== data.identifier) return;
      console.group("\uD83D\uDCE1 Event (".concat(data.identifier, ") \u27A1 ").concat(data.event));
      console.log(data.payload);
      console.groupEnd();
    });
  }
}
_defineProperty(events, "_identifier", hash);
_defineProperty(events, "_logger", null);
_defineProperty(events, "_lastEvent", {});

/***/ })

};
;

// load runtime
import __webpack_require__ from "./runtime.js";
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
import * as __webpack_chunk_0__ from "./event-bus.js";
__webpack_require__.C(__webpack_chunk_0__);
var __webpack_exports__ = __webpack_exec__(846);
var __webpack_exports__events = __webpack_exports__.A;
export { __webpack_exports__events as events };
