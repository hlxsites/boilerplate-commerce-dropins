const __vite__fileDeps=["debugger.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import "@dropins/tools/event-bus.js";
import { e as cartSignal } from "./transform-shipping-methods__Csm-KieitR.js";
import "./countries__BNdKWz0f2q.js";
import { s as setPaymentMethod } from "./setPaymentMethod__B9JymqP6zd.js";
import { H as Heading } from "./usePreselectedFields__yoBeivzMB8.js";
import { useEffect, useRef, useState, useMemo, useContext, useCallback } from "@dropins/tools/preact-hooks.js";
import { IllustratedMessage, Icon, ProgressSpinner, Skeleton, SkeletonRow, RadioButton } from "@dropins/tools/components/index.js";
/* empty css                                  */
import { jsx, jsxs, Fragment } from "@dropins/tools/preact-jsx-runtime.js";
import { c as classes } from "./classes__Bsz9GBN04n.js";
import "@adobe/elsie/components/CartItem/CartItemSkeleton";
import * as React from "@dropins/tools/preact-compat.js";
import { useRef as useRef$1, useState as useState$1, useCallback as useCallback$1, useEffect as useEffect$1 } from "@dropins/tools/preact-compat.js";
import { IntlContext, useText } from "@dropins/tools/i18n.js";
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
    const cspNonce = (cspNonceMeta == null ? void 0 : cspNonceMeta.nonce) || (cspNonceMeta == null ? void 0 : cspNonceMeta.getAttribute("nonce"));
    promise = Promise.all(deps.map((dep) => {
      dep = assetsURL(dep);
      if (dep in seen)
        return;
      seen[dep] = true;
      const isCss = dep.endsWith(".css");
      const cssSelector = isCss ? '[rel="stylesheet"]' : "";
      if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
        return;
      }
      const link = document.createElement("link");
      link.rel = isCss ? "stylesheet" : scriptRel;
      if (!isCss) {
        link.as = "script";
        link.crossOrigin = "";
      }
      link.href = dep;
      if (cspNonce) {
        link.setAttribute("nonce", cspNonce);
      }
      document.head.appendChild(link);
      if (isCss) {
        return new Promise((res, rej) => {
          link.addEventListener("load", res);
          link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
        });
      }
    }));
  }
  return promise.then(() => baseModule()).catch((err) => {
    const e = new Event("vite:preloadError", { cancelable: true });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  });
};
function useSlot(context = {}, callback, render) {
  const elementRef = useRef(null);
  const loadedRef = useRef(false);
  const methodsRef = useRef([]);
  const [props, _setProps] = useState({
    children: [render == null ? void 0 : render({})]
  });
  const [_state, setState] = useState({});
  const state = useMemo(() => ({
    get: (key) => _state[key],
    set: (key, value) => {
      setState({
        ...state,
        [key]: value
      });
    }
  }), [_state]);
  const {
    intl
  } = useContext(IntlContext);
  context.dictionary = intl.dictionary;
  context._setProps = _setProps;
  const _registerMethod = useCallback((callback2) => {
    if (typeof callback2 === "function") {
      methodsRef.current.push(callback2);
    } else {
      console.warn("Skipped: Invalid _registerMethod", callback2);
    }
  }, []);
  context._registerMethod = _registerMethod;
  const _htmlElementToVNode = useCallback((elem) => {
    return jsx("div", {
      "data-slot-html-element": elem.tagName.toLowerCase(),
      ref: (refElem) => {
        refElem == null ? void 0 : refElem.appendChild(elem);
      }
    });
  }, []);
  context._htmlElementToVNode = _htmlElementToVNode;
  context.getSlotElement = useCallback((key) => {
    const element = document.querySelector(`[data-slot-key="${key}"]`);
    if (!element)
      return;
    return {
      appendChild: (elem) => {
        element.appendChild(elem);
      },
      prependChild: (elem) => {
        element.insertBefore(elem, element.firstChild);
      },
      appendSibling: (elem) => {
        const parent = element.parentNode;
        parent == null ? void 0 : parent.insertBefore(elem, element.nextSibling);
      },
      prependSibling: (elem) => {
        const parent = element.parentNode;
        parent == null ? void 0 : parent.insertBefore(elem, element);
      }
    };
  }, []);
  context.onChange = useCallback((callback2) => {
    methodsRef.current.push(callback2);
  }, []);
  context.replaceWith = useCallback((elem) => {
    _registerMethod((next) => {
      const children = _htmlElementToVNode(elem);
      next._setProps({
        children: [children]
      });
    });
  }, [_htmlElementToVNode, _registerMethod]);
  context.appendChild = useCallback((elem) => {
    _registerMethod((next) => {
      const vnode = _htmlElementToVNode(elem);
      next._setProps((prev) => {
        return {
          ...prev,
          children: [...prev.children, vnode]
        };
      });
    });
  }, [_htmlElementToVNode, _registerMethod]);
  context.prependChild = useCallback((elem) => {
    _registerMethod((next) => {
      const vnode = _htmlElementToVNode(elem);
      next._setProps((prev) => {
        return {
          ...prev,
          children: [vnode, ...prev.children]
        };
      });
    });
  }, [_htmlElementToVNode, _registerMethod]);
  context.appendSibling = useCallback((elem) => {
    _registerMethod(() => {
      var _a, _b;
      const parent = (_a = elementRef.current) == null ? void 0 : _a.parentNode;
      parent == null ? void 0 : parent.insertBefore(elem, ((_b = elementRef.current) == null ? void 0 : _b.nextSibling) ?? null);
    });
  }, [_registerMethod]);
  context.prependSibling = useCallback((elem) => {
    _registerMethod(() => {
      var _a;
      const parent = (_a = elementRef.current) == null ? void 0 : _a.parentNode;
      parent == null ? void 0 : parent.insertBefore(elem, elementRef.current);
    });
  }, [_registerMethod]);
  useEffect(() => {
    const element = elementRef.current;
    if (!callback || !element)
      return;
    try {
      callback(context, element);
    } catch (error) {
      console.error(`Error in "${callback.name}" Slot callback`, error);
    }
  }, []);
  useEffect(() => {
    _setProps({
      children: [render == null ? void 0 : render(props)]
    });
    methodsRef.current.forEach((method) => {
      method(context, state);
    });
    if ((render == null ? void 0 : render.name) === "render" && loadedRef.current === false) {
      loadedRef.current = true;
    }
  }, [JSON.stringify(context), JSON.stringify(_state), loadedRef.current]);
  return [elementRef, props];
}
function Slot({
  name,
  slot,
  context,
  children,
  render,
  ...props
}) {
  const [elementRef, slotProps] = useSlot(context, slot, render ?? (() => children));
  useEffect(() => {
    if (!name)
      console.warn('Slot "name" is required');
  }, [name]);
  return jsx("div", {
    ...props,
    ref: elementRef,
    "data-slot": name,
    children: slotProps.children
  });
}
window.DROPINS = window.DROPINS || {};
window.DROPINS.showSlots = async (state) => {
  window.sessionStorage.setItem("dropin-debugger--show-slots", state.toString());
  document.body.classList.toggle("dropin-debugger--show-slots", state);
  if (state) {
    try {
      await __vitePreload(() => Promise.resolve({}), true ? __vite__mapDeps([0]) : void 0);
    } catch (error) {
    }
  }
};
window.DROPINS.showSlots(window.sessionStorage.getItem("dropin-debugger--show-slots") === "true");
const SvgWallet = (props) => /* @__PURE__ */ React.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("path", { vectorEffect: "non-scaling-stroke", d: "M17.93 14.8V18.75H5.97C4.75 18.75 3.75 17.97 3.75 17V6.5M3.75 6.5C3.75 5.53 4.74 4.75 5.97 4.75H15.94V8.25H5.97C4.75 8.25 3.75 7.47 3.75 6.5Z", stroke: "currentColor", strokeWidth: 1, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React.createElement("path", { vectorEffect: "non-scaling-stroke", d: "M19.35 11.64H14.04V14.81H19.35V11.64Z", stroke: "currentColor", strokeWidth: 1, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React.createElement("path", { vectorEffect: "non-scaling-stroke", d: "M17.9304 11.64V8.25H15.1504", stroke: "currentColor", strokeWidth: 1, strokeLinecap: "round", strokeLinejoin: "round" }));
const PaymentOption = ({
  code,
  isLoading,
  isSelected,
  onChange,
  title
}) => {
  return jsx(ToggleButton, {
    className: "checkout-payment-methods__method",
    label: title,
    name: "payment-method",
    value: code,
    selected: isSelected,
    onChange,
    radioButtonProps: {
      "aria-busy": isLoading
    }
    // TODO: Add icon
  });
};
const PaymentMethods$1 = ({
  className,
  paymentMethodContent,
  isLoading,
  onChange = () => {
  },
  options,
  selection
}) => {
  const dictionary = useText({
    Title: "Checkout.PaymentMethods.title",
    EmptyState: "Checkout.PaymentMethods.emptyState"
  });
  if (options === void 0)
    return jsx(PaymentMethodsSkeleton, {});
  return jsxs("div", {
    className: classes(["checkout-payment-methods", className]),
    children: [jsx(Heading, {
      level: 2,
      className: "checkout-payment-methods__title",
      children: dictionary.Title
    }), !isLoading && options.length === 0 && jsx(IllustratedMessage, {
      icon: jsx(Icon, {
        source: SvgWallet
      }),
      message: jsx("p", {
        children: dictionary.EmptyState
      })
    }), jsxs("div", {
      className: classes(["checkout-payment-methods__wrapper"]),
      children: [isLoading && jsx(ProgressSpinner, {
        className: "checkout-payment-methods__spinner"
      }), jsx("div", {
        className: classes(["checkout-payment-methods__methods", ["checkout-payment-methods--loading", isLoading], ["checkout-payment-methods--full-width", options.length % 2 !== 0]]),
        children: options == null ? void 0 : options.map((method) => jsx(PaymentOption, {
          code: method.code,
          onChange,
          isSelected: method.code === selection,
          title: method.title
        }, method.code))
      }), paymentMethodContent && jsx("div", {
        className: "checkout-payment-methods__content",
        children: paymentMethodContent
      })]
    })]
  });
};
const PaymentMethodsSkeleton = () => {
  return jsxs(Skeleton, {
    "data-testid": "payment-methods-skeleton",
    children: [jsx(SkeletonRow, {
      variant: "heading",
      size: "medium"
    }), jsx(SkeletonRow, {
      variant: "empty",
      size: "medium"
    }), jsx(SkeletonRow, {
      size: "xlarge",
      fullWidth: true
    }), jsx(SkeletonRow, {
      size: "xlarge",
      fullWidth: true
    })]
  });
};
const ToggleButton = ({
  label,
  name,
  value,
  icon,
  selected,
  onChange,
  className,
  children,
  radioButtonProps,
  ...props
}) => {
  return jsx("div", {
    className: classes(["checkout-toggle-button", className, ["checkout-toggle-button__selected", selected]]),
    ...props,
    children: jsxs("label", {
      className: "checkout-toggle-button__actionButton",
      children: [jsx(RadioButton, {
        ...radioButtonProps,
        label: "",
        name,
        value,
        checked: selected,
        onChange: () => onChange(value),
        "aria-label": label,
        className: classes([className, "checkout-toggle-button__radioButton"])
      }), jsxs("div", {
        className: "checkout-toggle-button__content",
        children: [icon && jsx(icon.type, {
          ...icon == null ? void 0 : icon.props,
          className: "checkout-toggle-button__icon"
        }), label]
      })]
    })
  });
};
const defaultHandlers = {
  free: {
    render: (context) => {
      const $content = document.createElement("div");
      $content.innerText = "";
      context.replaceHTML($content);
    }
  },
  checkmo: {
    render: (context) => {
      const $content = document.createElement("div");
      $content.innerText = "";
      context.replaceHTML($content);
    }
  }
};
function usePaymentMethods(props) {
  var _a;
  const {
    onPlaceOrder,
    handleServerError,
    paymentMethodsSlot,
    isShippingInfoRequired
  } = props;
  const prevPaymentMethodSent = useRef$1();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState$1();
  const [temporarySelectedPaymentMethod, setTemporarySelectedPaymentMethod] = useState$1();
  const [paymentMethodHandlers, setPaymentMethodHandlers] = useState$1(defaultHandlers);
  const [isDefaultContentUsed, setIsDefaultContentUsed] = useState$1(true);
  const {
    data: cartData
  } = cartSignal.value;
  const cartId = (cartData == null ? void 0 : cartData.id) ?? "";
  const hasCartData = !!cartData;
  const hasAddress = !!((_a = cartData == null ? void 0 : cartData.shippingAddresses) == null ? void 0 : _a[0]);
  const availablePaymentMethods = cartData == null ? void 0 : cartData.availablePaymentMethods;
  const cartSelectedPaymentMethod = cartData == null ? void 0 : cartData.selectedPaymentMethod;
  const setAndSelectPaymentMethod = useCallback$1(async (paymentMethod) => {
    try {
      setSelectedPaymentMethod(paymentMethod);
      if (!hasAddress && isShippingInfoRequired)
        return;
      const paymentMethodToSend = paymentMethod;
      if (paymentMethodToSend === prevPaymentMethodSent.current)
        return;
      prevPaymentMethodSent.current = paymentMethodToSend;
      await setPaymentMethod({
        cartId,
        paymentMethod
      });
    } catch (error) {
      console.error("setting payment method failed:", error);
    }
  }, [cartId, hasAddress, isShippingInfoRequired]);
  useEffect$1(() => {
    if (!hasCartData)
      return;
    if (cartSelectedPaymentMethod == null ? void 0 : cartSelectedPaymentMethod.code) {
      const selectedPaymentMethodIsAvailable = availablePaymentMethods == null ? void 0 : availablePaymentMethods.some((method) => method.code === cartSelectedPaymentMethod.code);
      if (selectedPaymentMethodIsAvailable) {
        setSelectedPaymentMethod(cartSelectedPaymentMethod.code);
      } else if (availablePaymentMethods == null ? void 0 : availablePaymentMethods.length) {
        setAndSelectPaymentMethod(availablePaymentMethods[0].code);
      } else {
        setSelectedPaymentMethod(void 0);
      }
    } else {
      availablePaymentMethods[0] && setAndSelectPaymentMethod(temporarySelectedPaymentMethod || availablePaymentMethods[0].code);
    }
  }, [availablePaymentMethods, hasCartData, cartSelectedPaymentMethod, setAndSelectPaymentMethod, temporarySelectedPaymentMethod]);
  const onPaymentMethodChange = async (value) => {
    await setAndSelectPaymentMethod(value);
    if (!(cartSelectedPaymentMethod == null ? void 0 : cartSelectedPaymentMethod.code)) {
      setTemporarySelectedPaymentMethod(value);
    }
  };
  const addPaymentMethodHandler = useCallback$1((code, handler) => {
    if (!code) {
      console.warn("Payment method handler is ignored because it has no code");
      return;
    }
    if (!handler) {
      console.warn("Payment method handler is ignored because it is empty");
      return;
    }
    setPaymentMethodHandlers((prevHandlers) => ({
      ...prevHandlers,
      [code]: handler
    }));
  }, []);
  const mainSlotContent = paymentMethodsSlot ? jsx(Slot, {
    name: "PaymentMethods",
    slot: paymentMethodsSlot,
    context: {
      addPaymentMethodHandler,
      replaceHTML(domElement) {
        this.replaceWith(domElement);
        setIsDefaultContentUsed(false);
      }
    }
  }) : null;
  const selectedPaymentMethodHandler = selectedPaymentMethod ? paymentMethodHandlers[selectedPaymentMethod] : null;
  const paymentMethodContent = selectedPaymentMethodHandler ? jsx(Slot, {
    name: "PaymentMethodContent",
    slot: selectedPaymentMethodHandler.render,
    context: {
      cartId,
      onPlaceOrder,
      handleServerError,
      replaceHTML(domElement) {
        this.replaceWith(domElement);
      }
    }
  }, selectedPaymentMethodHandler) : void 0;
  useEffect$1(() => {
    if (!isDefaultContentUsed && paymentMethodHandlers != defaultHandlers) {
      console.warn("Payment method handlers you have added are ignored because the default content has been replaced");
    }
  }, [isDefaultContentUsed, paymentMethodHandlers]);
  return {
    availablePaymentMethods,
    selectedPaymentMethod,
    onPaymentMethodChange,
    paymentMethodContent,
    mainSlotContent,
    isDefaultContentUsed
  };
}
const PaymentMethods = (props) => {
  const {
    onPlaceOrder,
    handleServerError,
    paymentMethodsSlot,
    isShippingInfoRequired = true
  } = props;
  const {
    availablePaymentMethods,
    selectedPaymentMethod,
    onPaymentMethodChange,
    paymentMethodContent,
    mainSlotContent,
    isDefaultContentUsed
  } = usePaymentMethods({
    onPlaceOrder,
    handleServerError,
    paymentMethodsSlot,
    isShippingInfoRequired
  });
  return jsxs(Fragment, {
    children: [mainSlotContent && // @ts-ignore
    jsx(mainSlotContent.type, {
      ref: mainSlotContent.ref,
      ...mainSlotContent.props
    }), isDefaultContentUsed && jsx(PaymentMethods$1, {
      options: availablePaymentMethods,
      selection: selectedPaymentMethod,
      onChange: onPaymentMethodChange,
      paymentMethodContent,
      isLoading: cartSignal.value.pending
    })]
  });
};
export {
  PaymentMethods as P,
  Slot as S
};
