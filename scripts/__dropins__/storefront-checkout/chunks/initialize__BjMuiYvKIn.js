var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class Initializer {
  constructor({
    init,
    listeners
  }) {
    __publicField(this, "_listeners", []);
    __publicField(this, "listeners");
    __publicField(this, "init");
    __publicField(this, "config", new Config({}));
    this.listeners = (config2) => {
      this._listeners.forEach((listener) => listener.off());
      return this._listeners = listeners(config2);
    };
    this.init = (options) => {
      const {
        imageParamsKeyMap,
        ...rest
      } = options;
      this.config.setConfig({
        ...this.config.getConfig(),
        ...rest
      });
      setImageParamsKeyMap(imageParamsKeyMap);
      return init(options);
    };
  }
}
class Config {
  constructor(initialConfig) {
    __publicField(this, "config");
    this.config = initialConfig;
  }
  getConfig() {
    return this.config;
  }
  setConfig(newConfig) {
    this.config = newConfig;
  }
}
class ImageParamsKeyMap {
  constructor() {
    __publicField(this, "_map");
  }
  get map() {
    return this._map;
  }
  set map(value) {
    this._map = value;
  }
  getMethods() {
    return {
      setMap: (value) => {
        this.map = value;
      },
      getMap: () => this.map
    };
  }
}
const keyMap = new ImageParamsKeyMap();
const {
  setMap: setImageParamsKeyMap,
  getMap: getImageParamsKeyMap
} = keyMap.getMethods();
const initialize = new Initializer({
  init: async (_config) => {
    const config2 = {
      guestViewCookieExpirationDays: 30,
      ..._config
    };
    initialize.config.setConfig(config2);
  },
  listeners: () => []
});
const config = initialize.config;
export {
  config as c,
  initialize as i
};
