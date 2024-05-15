import "@dropins/tools/event-bus.js";
import { e as cartSignal, g as estimateShippingMethodsSignal, r as regionsSignal } from "./transform-shipping-methods__Csm-KieitR.js";
import { i as useStore } from "./countries__BNdKWz0f2q.js";
import { s as selectedShippingMethodSignal } from "./SelectedShippingMethodSignal__CAgSNCk6GG.js";
import { s as setShippingMethodsOnCart } from "./setShippingMethods__BH6s0k15gL.js";
import { e as estimateShippingMethods } from "./estimateShippingMethods__BQV8ZoVRnA.js";
import { H as Heading } from "./usePreselectedFields__yoBeivzMB8.js";
import { IllustratedMessage, Icon, ProgressSpinner, RadioButton, Price, Skeleton, SkeletonRow } from "@dropins/tools/components/index.js";
import "@dropins/tools/preact-hooks.js";
/* empty css                                  */
import { jsx, jsxs, Fragment } from "@dropins/tools/preact-jsx-runtime.js";
import "@adobe/elsie/components/CartItem/CartItemSkeleton";
import * as React from "@dropins/tools/preact-compat.js";
import { useCallback, useMemo, useEffect } from "@dropins/tools/preact-compat.js";
import { useText } from "@dropins/tools/i18n.js";
import { c as classes } from "./classes__Bsz9GBN04n.js";
const SvgDelivery = (props) => /* @__PURE__ */ React.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("path", { vectorEffect: "non-scaling-stroke", d: "M2.47266 4.90002H15.1851V10.9645H21.2495L23 12.715V17.6124H20.073", stroke: "currentColor", strokeWidth: 1, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React.createElement("path", { vectorEffect: "non-scaling-stroke", d: "M15.1758 5.87573H19.0019L21.0394 10.7636", stroke: "currentColor", strokeWidth: 1, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React.createElement("path", { vectorEffect: "non-scaling-stroke", d: "M9.76151 16.7898C9.76151 18.0525 8.72845 19.076 7.46582 19.076C6.20318 19.076 5.17969 18.0429 5.17969 16.7803C5.17969 15.5176 6.20318 14.4941 7.46582 14.4941C8.72845 14.4941 9.75195 15.5176 9.76151 16.7803C9.76151 16.7803 9.76151 16.7803 9.76151 16.7898Z", stroke: "currentColor", strokeWidth: 1, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React.createElement("path", { vectorEffect: "non-scaling-stroke", d: "M19.8726 16.7898C19.8726 18.062 18.8491 19.0855 17.5769 19.0855C16.3047 19.0855 15.2812 18.062 15.2812 16.7898C15.2812 15.5176 16.3047 14.4941 17.5769 14.4941C18.8491 14.4941 19.8726 15.5176 19.8726 16.7898Z", stroke: "currentColor", strokeWidth: 1, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React.createElement("path", { vectorEffect: "non-scaling-stroke", d: "M8.08792 7.63574H1.69824", stroke: "currentColor", strokeWidth: 1, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React.createElement("path", { vectorEffect: "non-scaling-stroke", d: "M7.11229 10.3619H1", stroke: "currentColor", strokeWidth: 1, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React.createElement("path", { vectorEffect: "non-scaling-stroke", d: "M5.16084 13.0402H1.92773", stroke: "currentColor", strokeWidth: 1, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React.createElement("path", { vectorEffect: "non-scaling-stroke", d: "M9.76172 16.7611H15.2809", stroke: "currentColor", strokeWidth: 1, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React.createElement("path", { vectorEffect: "non-scaling-stroke", d: "M2.38672 16.7611H5.17025", stroke: "currentColor", strokeWidth: 1, strokeLinecap: "round", strokeLinejoin: "round" }));
const ShippingMethods$1 = ({
  className,
  isLoading = false,
  onSelectionChange = () => {
  },
  options,
  selection,
  ...props
}) => {
  const dictionary = useText({
    Title: "Checkout.ShippingMethods.title",
    EmptyState: "Checkout.ShippingMethods.emptyState"
  });
  if (options === void 0)
    return jsx(ShippingMethodsSkeleton, {});
  return jsxs("div", {
    ...props,
    className: classes(["checkout-shipping-methods", className]),
    children: [jsx(Heading, {
      level: 3,
      className: "checkout-shipping-methods__title",
      children: dictionary.Title
    }), !isLoading && options.length === 0 && jsx(IllustratedMessage, {
      icon: jsx(Icon, {
        source: SvgDelivery
      }),
      message: jsx("p", {
        children: dictionary.EmptyState
      })
    }), jsxs("div", {
      className: classes(["checkout-shipping-methods__content"]),
      children: [isLoading && jsx(ProgressSpinner, {
        className: "checkout-shipping-methods__spinner"
      }), jsx("div", {
        className: classes(["checkout-shipping-methods__options", ["checkout-shipping-methods__options--loading", isLoading]]),
        children: options.map((method) => {
          return jsx(RadioButton, {
            "data-testid": "shipping-method-radiobutton",
            "aria-busy": isLoading,
            id: method.value,
            name: "shipping-method",
            className: "checkout-shipping-methods__method",
            label: jsxs(Fragment, {
              children: [jsx(Price, {
                amount: method.amount.value,
                currency: method.amount.currency
              }), " ", jsx("span", {
                children: method.carrier.title
              })]
            }),
            description: method.title,
            value: method.value,
            checked: (selection == null ? void 0 : selection.value) === method.value,
            onChange: () => onSelectionChange(method)
          }, method.value);
        })
      })]
    })]
  });
};
const ShippingMethodsSkeleton = () => {
  return jsxs(Skeleton, {
    "data-testid": "shipping-methods-skeleton",
    children: [jsx(SkeletonRow, {
      variant: "heading",
      size: "small"
    }), jsx(SkeletonRow, {
      variant: "empty",
      size: "small"
    }), jsx(SkeletonRow, {
      size: "medium",
      fullWidth: true
    }), jsx(SkeletonRow, {
      size: "medium",
      fullWidth: true
    })]
  });
};
const isEqual = (a, b) => {
  return a.code === b.code && a.carrier.code === b.carrier.code;
};
function useShippingMethods(preselectedMethod) {
  const store = useStore();
  const config = store.config;
  const isLoadingConfig = !config;
  const cart = cartSignal.value.data;
  const isLoadingCart = cartSignal.value.pending;
  const estimationShippingMethods = estimateShippingMethodsSignal.value.data;
  const isLoadingEstimation = estimateShippingMethodsSignal.value.pending;
  const localShippingSelection = selectedShippingMethodSignal.value;
  const cartId = cart == null ? void 0 : cart.id;
  const cartShippingAddresses = cart == null ? void 0 : cart.shippingAddresses;
  const primaryAddress = cartShippingAddresses == null ? void 0 : cartShippingAddresses[0];
  const isAbleToSetShippingMethod = !!primaryAddress;
  const cartShippingMethods = primaryAddress == null ? void 0 : primaryAddress.availableShippingMethods;
  const cartShippingSelection = primaryAddress == null ? void 0 : primaryAddress.selectedShippingMethod;
  const shippingOptions = cartShippingMethods || estimationShippingMethods;
  const setShippingMethodOnCart = useCallback((method) => {
    if (!cartId || !isAbleToSetShippingMethod)
      return;
    const partialMethod = {
      method_code: method.code,
      carrier_code: method.carrier.code
    };
    setShippingMethodsOnCart({
      cartId,
      shippingMethods: [partialMethod]
    }).catch((error) => {
      console.error("setting shipping methods on cart failed:", error);
    });
  }, [cartId, isAbleToSetShippingMethod]);
  const onSelectionChange = (method) => {
    selectedShippingMethodSignal.value = method;
  };
  const selectedShippingOption = useMemo(() => {
    if (!(shippingOptions == null ? void 0 : shippingOptions.length))
      return;
    const fallbackShippingOption = shippingOptions[0];
    const selection = localShippingSelection || cartShippingSelection;
    if (!selection) {
      const preselection = shippingOptions.find((method) => {
        return method.carrier.code === (preselectedMethod == null ? void 0 : preselectedMethod.carrierCode) && method.code === (preselectedMethod == null ? void 0 : preselectedMethod.methodCode);
      });
      return preselection || fallbackShippingOption;
    }
    const isAvailable = shippingOptions.some((method) => isEqual(method, selection));
    return isAvailable ? selection : fallbackShippingOption;
  }, [localShippingSelection, cartShippingSelection, shippingOptions, preselectedMethod]);
  useEffect(() => {
    if (!selectedShippingOption)
      return;
    if (!localShippingSelection || !isEqual(selectedShippingOption, localShippingSelection)) {
      selectedShippingMethodSignal.value = selectedShippingOption;
    }
    if (!cartShippingSelection || !isEqual(selectedShippingOption, cartShippingSelection)) {
      setShippingMethodOnCart(selectedShippingOption);
    }
  }, [selectedShippingOption, localShippingSelection, cartShippingSelection, setShippingMethodOnCart]);
  useEffect(() => {
    if (!cartId || cartShippingMethods)
      return;
    const {
      country: regionCountry,
      selectedRegion,
      selectedRegionId
    } = regionsSignal.value;
    const country = regionCountry || (config == null ? void 0 : config.defaultCountry);
    if (country) {
      const criteria = {
        country_code: country,
        region_name: selectedRegion,
        region_id: selectedRegionId
      };
      estimateShippingMethods({
        cartId,
        criteria
      }).catch((error) => {
        estimateShippingMethodsSignal.value = {
          pending: false,
          data: []
        };
        console.error("shipping methods estimation failed:", error);
      });
    }
  }, [cartId, cartShippingMethods, config]);
  return {
    isLoading: isLoadingCart || isLoadingConfig || isLoadingEstimation,
    options: shippingOptions,
    selection: selectedShippingOption,
    onSelectionChange
  };
}
const ShippingMethods = ({
  preSelectedMethod,
  ...props
}) => {
  const {
    isLoading,
    options,
    selection,
    onSelectionChange
  } = useShippingMethods(preSelectedMethod);
  return jsx(ShippingMethods$1, {
    ...props,
    className: "checkout-shipping-methods",
    isLoading,
    onSelectionChange,
    options,
    selection
  });
};
export {
  ShippingMethods as S
};
