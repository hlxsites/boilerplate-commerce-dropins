(function injectCodeCustomRunTimeFunction(cssCode, options) {
  try {
    if (typeof document != "undefined") {
      const elem = document.createElement("style");
      const name = options.styleId;
      for (const attribute in options.attributes) {
        elem.setAttribute(attribute, options.attributes[attribute]);
      }
      elem.setAttribute("data-dropin", name);
      elem.appendChild(document.createTextNode(cssCode));
      document.head.appendChild(elem);
    }
  } catch (e) {
    console.error("dropin-styles (injectCodeFunction)", e);
  }
})("/* https://cssguidelin.es/#bem-like-naming */\n\n.cart-empty-cart {\n  container-type: inline-size;\n  container-name: cart;\n}\n\n.cart-empty-cart__wrapper {\n  display: grid;\n  grid-auto-rows: min-content;\n  justify-content: center;\n  text-align: center;\n}\n\n.cart-empty-cart__icon {\n  margin-bottom: var(--spacing-small);\n  color: var(--color-neutral-500);\n}\n\n.cart-empty-cart__icon svg {\n  color: var(--color-);\n}\n\n.cart-empty-cart__heading {\n  font: var(--type-headline-1-font);\n  letter-spacing: var(--type-headline-1-letter-spacing);\n}\n\n.cart-empty-cart__actions {\n  display: grid;\n  grid-auto-rows: min-content;\n  gap: var(--spacing-small);\n  margin-top: var(--spacing-medium);\n  justify-content: center;\n}\n\n@container cart (width < 737px) {\n  .cart-empty-cart__wrapper {\n    border: unset;\n  }\n}\n\n/* Medium (portrait tablets and large phones, 768px and up) */\n/* @media only screen and (min-width: 768px) { } */\n\n/* Large (landscape tablets, 1024px and up) */\n/* @media only screen and (min-width: 1024px) { } */\n\n/* XLarge (laptops/desktops, 1366px and up) */\n/* @media only screen and (min-width: 1366px) { } */\n\n/* XXlarge (large laptops and desktops, 1920px and up) */\n/* @media only screen and (min-width: 1920px) { } */\n/* https://cssguidelin.es/#bem-like-naming */\n\n.cart-cart {\n  container-type: inline-size;\n  container-name: cart;\n}\n\n.cart-cart__wrapper {\n  display: grid;\n  grid-template-rows: auto 1fr;\n  grid-gap: var(--spacing-medium);\n}\n\n.cart-cart__heading {\n  display: grid;\n  row-gap: var(--spacing-xsmall);\n  padding: var(--spacing-medium);\n  padding-bottom: 0px;\n  font: var(--type-headline-1-font);\n  letter-spacing: var(--type-headline-1-letter-spacing);\n}\n\n.cart-cart__heading-divider {\n  width: 100%;\n  margin: var(--spacing-xxsmall) 0 0 0;\n}\n\n.cart-cart__content {\n  display: grid;\n  grid-template-columns: 1fr;\n  padding: 0 var(--spacing-medium);\n}\n\n.cart-cart__empty-cart {\n  justify-self: center;\n  align-self: center;\n  width: 100%;\n  max-width: 800px;\n}\n\n.cart-cart__price-summary {\n  padding: var(--spacing-small) var(--spacing-medium);\n  background-color: var(--color-neutral-200);\n}\n\n.dropin-price-summary__shipping--zip,\n.dropin-price-summary__shipping--state {\n  background-color: var(--color-neutral-50);\n}\n\n\n@container cart (width >= 1024px) {\n  .cart-cart__wrapper {\n    grid-template-columns: repeat(var(--grid-3-columns), 1fr);\n    grid-column-gap: var(--grid-3-gutters);\n    margin: 0 var(--grid-3-margins);\n  }\n\n  .cart-cart__heading {\n    padding: var(--spacing-medium) 0 0 0;\n  }\n\n  .cart-cart__content {\n    padding: 0px;\n  }\n\n  .cart-cart__heading,\n  .cart-cart__content {\n    grid-column: 1 / span 8;\n  }\n\n  .cart-cart__price-summary {\n    grid-row: 1 / span 3;\n    grid-column: 9 / span 4;\n    padding: var(--spacing-medium);\n    height: min-content;\n  }\n\n  .cart-cart__heading--full-width,\n  .cart-cart__content--empty,\n  .cart-cart__content--full-width {\n    grid-column: 1 / span 12;\n  }\n}\n\n/* Medium (portrait tablets and large phones, 768px and up) */\n/* @media only screen and (min-width: 768px) { } */\n\n/* Large (landscape tablets, 1024px and up) */\n/* @media only screen and (min-width: 1024px) { } */\n\n/* XLarge (laptops/desktops, 1366px and up) */\n/* @media only screen and (min-width: 1366px) { } */\n\n/* XXlarge (large laptops and desktops, 1920px and up) */\n/* @media only screen and (min-width: 1920px) { } */\n/* https://cssguidelin.es/#bem-like-naming */\n\n.cart-mini-cart {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding: var(--spacing-small) var(--spacing-small) var(--spacing-medium);\n  box-sizing: border-box;\n}\n\n.cart-mini-cart__empty-cart {\n  width: 100%;\n  max-width: 800px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: center;\n}\n\n.cart-mini-cart__heading {\n  display: grid;\n  row-gap: var(--spacing-xsmall);\n  font: var(--type-headline-2-default-font);\n  letter-spacing: var(--type-headline-2-default-letter-spacing);\n}\n\n.cart-mini-cart__heading-divider {\n  width: 100%;\n  margin: var(--spacing-xxsmall) 0 0 0;\n}\n\n.cart-mini-cart__products {\n  flex: 1;\n  overflow-y: auto;\n  max-height: 100%;\n  padding-top: var(--spacing-medium);\n  padding-bottom: var(--spacing-medium);\n}\n\n.cart-mini-cart__products .dropin-cart-item__configurations li {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.cart-mini-cart__footer {\n  display: grid;\n  grid-auto-flow: row;\n  gap: var(--spacing-small);\n  padding-top: var(--spacing-small);\n}\n\n.cart-mini-cart__footer__estimated-total {\n  font: var(--type-body-1-emphasized-font);\n  letter-spacing: var(--type-body-1-emphasized-letter-spacing);\n  display: grid;\n  grid-template: max-content / 1fr auto;\n  gap: var(--spacing-xsmall);\n}\n\n.cart-mini-cart__footer__ctas {\n  display: grid;\n  grid-auto-flow: row;\n  gap: var(--spacing-xsmall);\n}\n\n/* Medium (portrait tablets and large phones, 768px and up) */\n/* @media only screen and (min-width: 768px) { } */\n\n/* Large (landscape tablets, 1024px and up) */\n/* @media only screen and (min-width: 1024px) { } */\n\n/* XLarge (laptops/desktops, 1366px and up) */\n/* @media only screen and (min-width: 1366px) { } */\n\n/* XXlarge (large laptops and desktops, 1920px and up) */\n/* @media only screen and (min-width: 1920px) { } */", { "styleId": "Cart" });
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { useState, useEffect } from "@dropins/tools/preact-hooks.js";
import { UIProvider } from "@dropins/tools/components/index.js";
import { events } from "@dropins/tools/event-bus.js";
import { c as config } from "./chunks/getStoreConfig__D5TZNZKL7r.js";
import { jsx } from "@dropins/tools/preact-jsx-runtime.js";
import { options, h as h$1, Fragment, render as render$1 } from "@dropins/tools/preact.js";
import { V as VComponent } from "./chunks/vcomponent__DzjhryT0dc.js";
import "@dropins/tools/fetch-graphql.js";
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var isMergeableObject = function isMergeableObject2(value) {
  return isNonNullObject(value) && !isSpecial(value);
};
function isNonNullObject(value) {
  return !!value && typeof value === "object";
}
function isSpecial(value) {
  var stringValue = Object.prototype.toString.call(value);
  return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
}
var canUseSymbol = typeof Symbol === "function" && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
function isReactElement(value) {
  return value.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(val) {
  return Array.isArray(val) ? [] : {};
}
function cloneUnlessOtherwiseSpecified(value, options2) {
  return options2.clone !== false && options2.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options2) : value;
}
function defaultArrayMerge(target, source, options2) {
  return target.concat(source).map(function(element) {
    return cloneUnlessOtherwiseSpecified(element, options2);
  });
}
function getMergeFunction(key, options2) {
  if (!options2.customMerge) {
    return deepmerge;
  }
  var customMerge = options2.customMerge(key);
  return typeof customMerge === "function" ? customMerge : deepmerge;
}
function getEnumerableOwnPropertySymbols(target) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
    return Object.propertyIsEnumerable.call(target, symbol);
  }) : [];
}
function getKeys(target) {
  return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
}
function propertyIsOnObject(object, property) {
  try {
    return property in object;
  } catch (_2) {
    return false;
  }
}
function propertyIsUnsafe(target, key) {
  return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
}
function mergeObject(target, source, options2) {
  var destination = {};
  if (options2.isMergeableObject(target)) {
    getKeys(target).forEach(function(key) {
      destination[key] = cloneUnlessOtherwiseSpecified(target[key], options2);
    });
  }
  getKeys(source).forEach(function(key) {
    if (propertyIsUnsafe(target, key)) {
      return;
    }
    if (propertyIsOnObject(target, key) && options2.isMergeableObject(source[key])) {
      destination[key] = getMergeFunction(key, options2)(target[key], source[key], options2);
    } else {
      destination[key] = cloneUnlessOtherwiseSpecified(source[key], options2);
    }
  });
  return destination;
}
function deepmerge(target, source, options2) {
  options2 = options2 || {};
  options2.arrayMerge = options2.arrayMerge || defaultArrayMerge;
  options2.isMergeableObject = options2.isMergeableObject || isMergeableObject;
  options2.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
  var sourceIsArray = Array.isArray(source);
  var targetIsArray = Array.isArray(target);
  var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
  if (!sourceAndTargetTypesMatch) {
    return cloneUnlessOtherwiseSpecified(source, options2);
  } else if (sourceIsArray) {
    return options2.arrayMerge(target, source, options2);
  } else {
    return mergeObject(target, source, options2);
  }
}
deepmerge.all = function deepmergeAll(array, options2) {
  if (!Array.isArray(array)) {
    throw new Error("first argument should be an array");
  }
  return array.reduce(function(prev, next) {
    return deepmerge(prev, next, options2);
  }, {});
};
var deepmerge_1 = deepmerge;
var cjs = deepmerge_1;
const deepmerge$1 = /* @__PURE__ */ getDefaultExportFromCjs(cjs);
var n = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i, o = /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/, i = /[\s\n\\/='"\0<>]/, l = /^xlink:?./, a = /["&<]/;
function s(e) {
  if (false === a.test(e += ""))
    return e;
  for (var t = 0, r = 0, n2 = "", o2 = ""; r < e.length; r++) {
    switch (e.charCodeAt(r)) {
      case 34:
        o2 = "&quot;";
        break;
      case 38:
        o2 = "&amp;";
        break;
      case 60:
        o2 = "&lt;";
        break;
      default:
        continue;
    }
    r !== t && (n2 += e.slice(t, r)), n2 += o2, t = r + 1;
  }
  return r !== t && (n2 += e.slice(t, r)), n2;
}
var f = function(e, t) {
  return String(e).replace(/(\n+)/g, "$1" + (t || "	"));
}, u = function(e, t, r) {
  return String(e).length > 40 || -1 !== String(e).indexOf("\n") || -1 !== String(e).indexOf("<");
}, c = {}, _ = /([A-Z])/g;
function p(e) {
  var t = "";
  for (var r in e) {
    var o2 = e[r];
    null != o2 && "" !== o2 && (t && (t += " "), t += "-" == r[0] ? r : c[r] || (c[r] = r.replace(_, "-$1").toLowerCase()), t = "number" == typeof o2 && false === n.test(r) ? t + ": " + o2 + "px;" : t + ": " + o2 + ";");
  }
  return t || void 0;
}
function d(e, t) {
  return Array.isArray(t) ? t.reduce(d, e) : null != t && false !== t && e.push(t), e;
}
function v() {
  this.__d = true;
}
function h(e, t) {
  return { __v: e, context: t, props: e.props, setState: v, forceUpdate: v, __d: true, __h: [] };
}
function g(e, t) {
  var r = e.contextType, n2 = r && t[r.__c];
  return null != r ? n2 ? n2.props.value : r.__ : t;
}
var y = [];
function m(r, n2, a2, c2, _2, v2) {
  if (null == r || "boolean" == typeof r)
    return "";
  if ("object" != typeof r)
    return "function" == typeof r ? "" : s(r);
  var b2 = a2.pretty, x2 = b2 && "string" == typeof b2 ? b2 : "	";
  if (Array.isArray(r)) {
    for (var k2 = "", S2 = 0; S2 < r.length; S2++)
      b2 && S2 > 0 && (k2 += "\n"), k2 += m(r[S2], n2, a2, c2, _2, v2);
    return k2;
  }
  if (void 0 !== r.constructor)
    return "";
  var w2, C2 = r.type, O2 = r.props, j2 = false;
  if ("function" == typeof C2) {
    if (j2 = true, !a2.shallow || !c2 && false !== a2.renderRootComponent) {
      if (C2 === Fragment) {
        var A2 = [];
        return d(A2, r.props.children), m(A2, n2, a2, false !== a2.shallowHighOrder, _2, v2);
      }
      var F2, H = r.__c = h(r, n2);
      options.__b && options.__b(r);
      var M = options.__r;
      if (C2.prototype && "function" == typeof C2.prototype.render) {
        var L = g(C2, n2);
        (H = r.__c = new C2(O2, L)).__v = r, H._dirty = H.__d = true, H.props = O2, null == H.state && (H.state = {}), null == H._nextState && null == H.__s && (H._nextState = H.__s = H.state), H.context = L, C2.getDerivedStateFromProps ? H.state = Object.assign({}, H.state, C2.getDerivedStateFromProps(H.props, H.state)) : H.componentWillMount && (H.componentWillMount(), H.state = H._nextState !== H.state ? H._nextState : H.__s !== H.state ? H.__s : H.state), M && M(r), F2 = H.render(H.props, H.state, H.context);
      } else
        for (var T = g(C2, n2), E = 0; H.__d && E++ < 25; )
          H.__d = false, M && M(r), F2 = C2.call(r.__c, O2, T);
      return H.getChildContext && (n2 = Object.assign({}, n2, H.getChildContext())), options.diffed && options.diffed(r), m(F2, n2, a2, false !== a2.shallowHighOrder, _2, v2);
    }
    C2 = (w2 = C2).displayName || w2 !== Function && w2.name || function(e) {
      var t = (Function.prototype.toString.call(e).match(/^\s*function\s+([^( ]+)/) || "")[1];
      if (!t) {
        for (var r2 = -1, n3 = y.length; n3--; )
          if (y[n3] === e) {
            r2 = n3;
            break;
          }
        r2 < 0 && (r2 = y.push(e) - 1), t = "UnnamedComponent" + r2;
      }
      return t;
    }(w2);
  }
  var $, D, N = "<" + C2;
  if (O2) {
    var P = Object.keys(O2);
    a2 && true === a2.sortAttributes && P.sort();
    for (var W = 0; W < P.length; W++) {
      var I = P[W], R = O2[I];
      if ("children" !== I) {
        if (!i.test(I) && (a2 && a2.allAttributes || "key" !== I && "ref" !== I && "__self" !== I && "__source" !== I)) {
          if ("defaultValue" === I)
            I = "value";
          else if ("defaultChecked" === I)
            I = "checked";
          else if ("defaultSelected" === I)
            I = "selected";
          else if ("className" === I) {
            if (void 0 !== O2.class)
              continue;
            I = "class";
          } else
            _2 && l.test(I) && (I = I.toLowerCase().replace(/^xlink:?/, "xlink:"));
          if ("htmlFor" === I) {
            if (O2.for)
              continue;
            I = "for";
          }
          "style" === I && R && "object" == typeof R && (R = p(R)), "a" === I[0] && "r" === I[1] && "boolean" == typeof R && (R = String(R));
          var U = a2.attributeHook && a2.attributeHook(I, R, n2, a2, j2);
          if (U || "" === U)
            N += U;
          else if ("dangerouslySetInnerHTML" === I)
            D = R && R.__html;
          else if ("textarea" === C2 && "value" === I)
            $ = R;
          else if ((R || 0 === R || "" === R) && "function" != typeof R) {
            if (!(true !== R && "" !== R || (R = I, a2 && a2.xml))) {
              N = N + " " + I;
              continue;
            }
            if ("value" === I) {
              if ("select" === C2) {
                v2 = R;
                continue;
              }
              "option" === C2 && v2 == R && void 0 === O2.selected && (N += " selected");
            }
            N = N + " " + I + '="' + s(R) + '"';
          }
        }
      } else
        $ = R;
    }
  }
  if (b2) {
    var V = N.replace(/\n\s*/, " ");
    V === N || ~V.indexOf("\n") ? b2 && ~N.indexOf("\n") && (N += "\n") : N = V;
  }
  if (N += ">", i.test(C2))
    throw new Error(C2 + " is not a valid HTML tag name in " + N);
  var q, z = o.test(C2) || a2.voidElements && a2.voidElements.test(C2), Z = [];
  if (D)
    b2 && u(D) && (D = "\n" + x2 + f(D, x2)), N += D;
  else if (null != $ && d(q = [], $).length) {
    for (var B = b2 && ~N.indexOf("\n"), G = false, J = 0; J < q.length; J++) {
      var K = q[J];
      if (null != K && false !== K) {
        var Q = m(K, n2, a2, true, "svg" === C2 || "foreignObject" !== C2 && _2, v2);
        if (b2 && !B && u(Q) && (B = true), Q)
          if (b2) {
            var X = Q.length > 0 && "<" != Q[0];
            G && X ? Z[Z.length - 1] += Q : Z.push(Q), G = X;
          } else
            Z.push(Q);
      }
    }
    if (b2 && B)
      for (var Y = Z.length; Y--; )
        Z[Y] = "\n" + x2 + f(Z[Y], x2);
  }
  if (Z.length || D)
    N += Z.join("");
  else if (a2 && a2.xml)
    return N.substring(0, N.length - 1) + " />";
  return !z || q || D ? (b2 && ~N.indexOf("\n") && (N += "\n"), N = N + "</" + C2 + ">") : N = N.replace(/>$/, " />"), N;
}
var b = { shallow: true };
S.render = S;
var x = function(e, t) {
  return S(e, t, b);
}, k = [];
function S(n2, o2, i2) {
  o2 = o2 || {};
  var l2 = options.__s;
  options.__s = true;
  var a2, s2 = h$1(Fragment, null);
  return s2.__k = [n2], a2 = i2 && (i2.pretty || i2.voidElements || i2.sortAttributes || i2.shallow || i2.allAttributes || i2.xml || i2.attributeHook) ? m(n2, o2, i2) : F(n2, o2, false, void 0, s2), options.__c && options.__c(n2, k), options.__s = l2, k.length = 0, a2;
}
function w(e) {
  return null == e || "boolean" == typeof e ? null : "string" == typeof e || "number" == typeof e || "bigint" == typeof e ? h$1(null, null, e) : e;
}
function C(e, t) {
  return "className" === e ? "class" : "htmlFor" === e ? "for" : "defaultValue" === e ? "value" : "defaultChecked" === e ? "checked" : "defaultSelected" === e ? "selected" : t && l.test(e) ? e.toLowerCase().replace(/^xlink:?/, "xlink:") : e;
}
function O(e, t) {
  return "style" === e && null != t && "object" == typeof t ? p(t) : "a" === e[0] && "r" === e[1] && "boolean" == typeof t ? String(t) : t;
}
var j = Array.isArray, A = Object.assign;
function F(r, n2, l2, a2, f2) {
  if (null == r || true === r || false === r || "" === r)
    return "";
  if ("object" != typeof r)
    return "function" == typeof r ? "" : s(r);
  if (j(r)) {
    var u2 = "";
    f2.__k = r;
    for (var c2 = 0; c2 < r.length; c2++)
      u2 += F(r[c2], n2, l2, a2, f2), r[c2] = w(r[c2]);
    return u2;
  }
  if (void 0 !== r.constructor)
    return "";
  r.__ = f2, options.__b && options.__b(r);
  var _2 = r.type, p2 = r.props;
  if ("function" == typeof _2) {
    var d2;
    if (_2 === Fragment)
      d2 = p2.children;
    else {
      d2 = _2.prototype && "function" == typeof _2.prototype.render ? function(e, r2) {
        var n3 = e.type, o2 = g(n3, r2), i2 = new n3(e.props, o2);
        e.__c = i2, i2.__v = e, i2.__d = true, i2.props = e.props, null == i2.state && (i2.state = {}), null == i2.__s && (i2.__s = i2.state), i2.context = o2, n3.getDerivedStateFromProps ? i2.state = A({}, i2.state, n3.getDerivedStateFromProps(i2.props, i2.state)) : i2.componentWillMount && (i2.componentWillMount(), i2.state = i2.__s !== i2.state ? i2.__s : i2.state);
        var l3 = options.__r;
        return l3 && l3(e), i2.render(i2.props, i2.state, i2.context);
      }(r, n2) : function(e, r2) {
        var n3, o2 = h(e, r2), i2 = g(e.type, r2);
        e.__c = o2;
        for (var l3 = options.__r, a3 = 0; o2.__d && a3++ < 25; )
          o2.__d = false, l3 && l3(e), n3 = e.type.call(o2, e.props, i2);
        return n3;
      }(r, n2);
      var v2 = r.__c;
      v2.getChildContext && (n2 = A({}, n2, v2.getChildContext()));
    }
    var y2 = F(d2 = null != d2 && d2.type === Fragment && null == d2.key ? d2.props.children : d2, n2, l2, a2, r);
    return options.diffed && options.diffed(r), r.__ = void 0, options.unmount && options.unmount(r), y2;
  }
  var m2, b2, x2 = "<";
  if (x2 += _2, p2)
    for (var k2 in m2 = p2.children, p2) {
      var S2 = p2[k2];
      if (!("key" === k2 || "ref" === k2 || "__self" === k2 || "__source" === k2 || "children" === k2 || "className" === k2 && "class" in p2 || "htmlFor" === k2 && "for" in p2 || i.test(k2))) {
        if (S2 = O(k2 = C(k2, l2), S2), "dangerouslySetInnerHTML" === k2)
          b2 = S2 && S2.__html;
        else if ("textarea" === _2 && "value" === k2)
          m2 = S2;
        else if ((S2 || 0 === S2 || "" === S2) && "function" != typeof S2) {
          if (true === S2 || "" === S2) {
            S2 = k2, x2 = x2 + " " + k2;
            continue;
          }
          if ("value" === k2) {
            if ("select" === _2) {
              a2 = S2;
              continue;
            }
            "option" !== _2 || a2 != S2 || "selected" in p2 || (x2 += " selected");
          }
          x2 = x2 + " " + k2 + '="' + s(S2) + '"';
        }
      }
    }
  var H = x2;
  if (x2 += ">", i.test(_2))
    throw new Error(_2 + " is not a valid HTML tag name in " + x2);
  var M = "", L = false;
  if (b2)
    M += b2, L = true;
  else if ("string" == typeof m2)
    M += s(m2), L = true;
  else if (j(m2)) {
    r.__k = m2;
    for (var T = 0; T < m2.length; T++) {
      var E = m2[T];
      if (m2[T] = w(E), null != E && false !== E) {
        var $ = F(E, n2, "svg" === _2 || "foreignObject" !== _2 && l2, a2, r);
        $ && (M += $, L = true);
      }
    }
  } else if (null != m2 && false !== m2 && true !== m2) {
    r.__k = [w(m2)];
    var D = F(m2, n2, "svg" === _2 || "foreignObject" !== _2 && l2, a2, r);
    D && (M += D, L = true);
  }
  if (options.diffed && options.diffed(r), r.__ = void 0, options.unmount && options.unmount(r), L)
    x2 += M;
  else if (o.test(_2))
    return H + " />";
  return x2 + "</" + _2 + ">";
}
S.shallowRender = x;
class Render {
  constructor(provider) {
    __publicField(this, "_provider");
    this._provider = provider;
  }
  render(Component, props) {
    return async (rootElement) => {
      var _a;
      if (!Component)
        throw new Error("Component is not defined");
      if (!rootElement)
        throw new Error("Root element is not defined");
      const initialData = await ((_a = Component.getInitialData) == null ? void 0 : _a.call(Component, props)) ?? {};
      render$1(jsx(VComponent, {
        node: this._provider,
        ...this._provider.props,
        children: jsx(Component, {
          ...props,
          initialData
        })
      }), rootElement);
    };
  }
  unmount(rootElement) {
    if (!rootElement)
      throw new Error("Root element is not defined");
    render$1(null, rootElement);
  }
  async toString(Component, props, options2) {
    var _a;
    if (!Component)
      throw new Error("Component is not defined");
    const initialData = await ((_a = Component.getInitialData) == null ? void 0 : _a.call(Component, props)) ?? {};
    return S(jsx(VComponent, {
      node: this._provider,
      ...this._provider.props,
      children: jsx(Component, {
        ...props,
        initialData
      })
    }), {}, {
      ...options2
    });
  }
}
const Cart = {
  Cart: {
    heading: "Shopping Cart"
  },
  MiniCart: {
    heading: "Shopping Cart ({count})",
    estimatedTotal: "Estimated Total",
    cartLink: "View Cart",
    checkoutLink: "Checkout"
  },
  EmptyCart: {
    heading: "Your cart is empty",
    cta: "Continue Shopping"
  },
  PriceSummary: {
    taxToBeDetermined: "TBD",
    checkout: "Checkout",
    estimatedShippingForm: {
      country: {
        placeholder: "Country"
      },
      state: {
        placeholder: "State"
      },
      zip: {
        placeholder: "Zip Code"
      },
      apply: {
        label: "Apply"
      }
    },
    freeShipping: "Free"
  },
  CartItem: {
    discountedPrice: "Discounted Price",
    download: "file",
    message: "Note",
    recipient: "To",
    regularPrice: "Regular Price",
    sender: "From",
    file: "{count} file",
    files: "{count} files"
  }
};
const en_US = {
  Cart
};
const langDefinitions = {
  default: en_US
};
const Provider = ({
  children
}) => {
  var _a;
  const [locale, setLang] = useState();
  const userLangDefinitions = (_a = config.getConfig()) == null ? void 0 : _a.langDefinitions;
  useEffect(() => {
    const localeEvent = events.on("locale", (payload) => {
      if (payload !== locale)
        setLang(payload);
    }, {
      eager: true
    });
    return () => {
      localeEvent == null ? void 0 : localeEvent.off();
    };
  }, [locale]);
  const definitions = deepmerge$1(langDefinitions, userLangDefinitions ?? {});
  return jsx(UIProvider, {
    lang: locale,
    langDefinitions: definitions,
    children
  });
};
const render = new Render(jsx(Provider, {}));
export {
  render
};
