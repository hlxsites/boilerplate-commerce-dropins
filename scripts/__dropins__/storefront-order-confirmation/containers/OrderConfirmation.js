import { c as guestOrder, d as guestOrderByToken } from "../chunks/guestOrderByToken__BHggZXExSv.js";
import { useState, useEffect } from "@dropins/tools/preact-hooks.js";
import { jsx, jsxs, Fragment } from "@dropins/tools/preact-jsx-runtime.js";
import { Icon, Skeleton, SkeletonRow, Button, Card, Field, Input, Price, Divider, CartItem, Image } from "@dropins/tools/components/index.js";
import * as React from "@dropins/tools/preact-compat.js";
import { useReducer, useCallback, useEffect as useEffect$1 } from "@dropins/tools/preact-compat.js";
import { Text, useText } from "@dropins/tools/i18n.js";
import { c as classes } from "../chunks/classes__Bsz9GBN04n.js";
import "@dropins/tools/fetch-graphql.js";
const getFormValues = (form) => {
  const formData = new FormData(form);
  const result = Object.fromEntries(formData);
  return result;
};
var Actions = /* @__PURE__ */ ((Actions2) => {
  Actions2["ADD_ORDER_REFERENCE"] = "ADD_ORDER_REFERENCE";
  Actions2["LOADING"] = "LOADING";
  Actions2["SET_DETAILS"] = "SET_DETAILS";
  Actions2["ALERT"] = "ALERT";
  Actions2["DISMISS_ALERT"] = "DISMISS_ALERT";
  return Actions2;
})(Actions || {});
var AlertType = /* @__PURE__ */ ((AlertType2) => {
  AlertType2["ERROR"] = "error";
  AlertType2["WARNING"] = "warning";
  AlertType2["SUCCESS"] = "success";
  return AlertType2;
})(AlertType || {});
var AlertCode = /* @__PURE__ */ ((AlertCode2) => {
  AlertCode2["INVALID_ORDER"] = "invalid_order";
  AlertCode2["INVALID_SEARCH"] = "invalid_search";
  AlertCode2["UNKNOWN"] = "unknown_error";
  return AlertCode2;
})(AlertCode || {});
function orderConfirmationReducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: true
      };
    case "SET_DETAILS":
      return {
        ...state,
        isLoading: false,
        details: action.details,
        alert: action.alert
      };
    case "ALERT":
      return {
        ...state,
        isLoading: false,
        alert: action.alert
      };
    case "DISMISS_ALERT":
      return {
        ...state,
        alert: void 0
      };
    default:
      return state;
  }
}
const useBreakpoint = () => {
  const getBreakpoint = () => {
    if (window.innerWidth >= 1920)
      return "xxlarge";
    if (window.innerWidth >= 1366)
      return "xlarge";
    if (window.innerWidth >= 1024)
      return "large";
    if (window.innerWidth >= 768)
      return "medium";
    return "small";
  };
  const [breakpoint, setBreakpoint] = useState(getBreakpoint());
  useEffect(() => {
    let timeoutId;
    const handleResize = () => {
      if (timeoutId)
        clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setBreakpoint(getBreakpoint()), 50);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (timeoutId)
        clearTimeout(timeoutId);
    };
  }, []);
  return breakpoint;
};
const ConditionalWrapper = ({
  children,
  className
}) => {
  const breakpoint = useBreakpoint();
  return breakpoint !== "small" ? jsx("div", {
    className,
    children
  }) : jsx(Fragment, {
    children
  });
};
function mapDetailsToSummary(orderDetails) {
  const total = orderDetails == null ? void 0 : orderDetails.total;
  if (!total) {
    return void 0;
  }
  const grandTotal = total == null ? void 0 : total.grand_total;
  const subtotal = total == null ? void 0 : total.subtotal;
  const shipping = total == null ? void 0 : total.total_shipping;
  const tax = total == null ? void 0 : total.total_tax;
  return {
    total: {
      inclTax: {
        amount: (grandTotal == null ? void 0 : grandTotal.value) || 0,
        currency: (grandTotal == null ? void 0 : grandTotal.currency) || ""
      }
    },
    subtotal: {
      amount: (subtotal == null ? void 0 : subtotal.value) || 0,
      currency: (subtotal == null ? void 0 : subtotal.currency) || "",
      isTaxIncl: false
    },
    shipping: {
      amount: (shipping == null ? void 0 : shipping.value) || 0,
      currency: (shipping == null ? void 0 : shipping.currency) || ""
    },
    tax: {
      amount: (tax == null ? void 0 : tax.value) || 0,
      currency: (tax == null ? void 0 : tax.currency) || ""
    }
  };
}
const Aside = ({
  state
}) => {
  const {
    isLoading,
    details
  } = state;
  const summary = mapDetailsToSummary(details);
  return jsxs(Fragment, {
    children: [jsx(OrderSummary, {
      isLoading,
      summary
    }), jsx(CartSummary, {
      isLoading,
      details
    })]
  });
};
const AsideElement = ({
  state
}) => {
  return jsx(ConditionalWrapper, {
    className: "order-confirmation__aside",
    children: jsx(Aside, {
      state
    })
  });
};
const Main = ({
  state,
  routeHome,
  routeSupport
}) => {
  const {
    details,
    isLoading
  } = state;
  const billingAddress = details == null ? void 0 : details.billing_address;
  const customerName = (billingAddress == null ? void 0 : billingAddress.firstname) || "";
  const orderNumber = (details == null ? void 0 : details.number) || "";
  const orderStatus = (details == null ? void 0 : details.status) || "";
  const showCustomerHeader = !!customerName && !!orderNumber;
  return jsxs(Fragment, {
    children: [(isLoading || !isLoading && showCustomerHeader) && jsx(Header, {
      isLoading,
      customerName,
      orderNumber,
      orderStatus
    }), jsx(Details, {
      isLoading,
      orderDetails: details
    }), jsx(Footer, {
      isLoading,
      routeHome,
      routeSupport
    })]
  });
};
const MainElement = ({
  state,
  routeHome,
  routeSupport,
  dismissAlert,
  onOrderSearch
}) => {
  return jsx(ConditionalWrapper, {
    className: "order-confirmation__main",
    children: jsx(Main, {
      state,
      routeHome,
      routeSupport,
      dismissAlert,
      onOrderSearch
    })
  });
};
const OrderConfirmation$1 = ({
  className,
  state,
  dismissAlert,
  routeHome,
  routeSupport,
  onOrderSearch
}) => {
  const {
    details,
    alert,
    isLoading
  } = state;
  const hasOrderDetails = !!(details == null ? void 0 : details.number);
  const isInvalidOrder = alert && alert.code === AlertCode.INVALID_ORDER;
  const isInvalidSearch = alert && alert.code === AlertCode.INVALID_SEARCH;
  if (!isLoading && !hasOrderDetails) {
    return jsx("div", {
      className: classes(["order-confirmation", className]),
      children: jsx(OrderSearchForm, {
        alert: isInvalidOrder || isInvalidSearch ? {
          heading: alert.message,
          description: "",
          type: alert.type,
          onDismiss: dismissAlert
        } : void 0,
        onOrderSearch
      })
    });
  }
  return jsxs("div", {
    className: classes(["order-confirmation", className]),
    children: [jsx(MainElement, {
      state,
      dismissAlert,
      routeHome,
      routeSupport,
      onOrderSearch
    }), jsx(AsideElement, {
      state
    })]
  });
};
const SvgClose = (props) => /* @__PURE__ */ React.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("path", { vectorEffect: "non-scaling-stroke", d: "M18.3599 5.64001L5.62988 18.37", stroke: "currentColor" }), /* @__PURE__ */ React.createElement("path", { vectorEffect: "non-scaling-stroke", d: "M18.3599 18.37L5.62988 5.64001", stroke: "currentColor" }));
const SvgOrderSuccess = (props) => /* @__PURE__ */ React.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("g", { clipPath: "url(#clip0_4797_15077)" }, /* @__PURE__ */ React.createElement("path", { vectorEffect: "non-scaling-stroke", d: "M10.15 20.85L1.5 17.53V6.63L10.15 10V20.85Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React.createElement("path", { vectorEffect: "non-scaling-stroke", d: "M1.5 6.63001L10.15 3.20001L18.8 6.63001L10.15 10L1.5 6.63001Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React.createElement("path", { vectorEffect: "non-scaling-stroke", d: "M6.17969 4.77002L14.8297 8.15002V11.47", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React.createElement("path", { vectorEffect: "non-scaling-stroke", d: "M18.7896 12.64V6.63L10.1396 10V20.85L14.8296 19.05", stroke: "currentColor", strokeLinejoin: "round" }), /* @__PURE__ */ React.createElement("path", { className: "success-icon", vectorEffect: "non-scaling-stroke", d: "M15.71 17.26C15.71 15.38 17.23 13.86 19.11 13.86C20.99 13.86 22.51 15.38 22.51 17.26C22.51 19.14 20.99 20.66 19.11 20.66C17.23 20.66 15.71 19.14 15.71 17.26Z", stroke: "currentColor" }), /* @__PURE__ */ React.createElement("path", { className: "success-icon", vectorEffect: "non-scaling-stroke", d: "M17.4805 17.49L18.5605 18.41L20.7205 16.33", stroke: "currentColor", strokeLinecap: "square", strokeLinejoin: "round" })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "clip0_4797_15077" }, /* @__PURE__ */ React.createElement("rect", { width: 22, height: 18.65, fill: "white", transform: "translate(1 2.70001)" }))));
const SvgCheckWithCircle = (props) => /* @__PURE__ */ React.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("path", { vectorEffect: "non-scaling-stroke", d: "M0.75 12C0.75 5.78421 5.78421 0.75 12 0.75C18.2158 0.75 23.25 5.78421 23.25 12C23.25 18.2158 18.2158 23.25 12 23.25C5.78421 23.25 0.75 18.2158 0.75 12Z", stroke: "currentColor" }), /* @__PURE__ */ React.createElement("path", { vectorEffect: "non-scaling-stroke", d: "M6.75 12.762L10.2385 15.75L17.25 9", stroke: "currentColor" }));
const SvgWarningFilled = (props) => /* @__PURE__ */ React.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("path", { vectorEffect: "non-scaling-stroke", fillRule: "evenodd", clipRule: "evenodd", d: "M1 20.8953L12.1922 1.5L23.395 20.8953H1ZM13.0278 13.9638L13.25 10.0377V9H11.25V10.0377L11.4722 13.9638H13.0278ZM11.2994 16V17.7509H13.2253V16H11.2994Z", fill: "currentColor" }));
const Header = ({
  isLoading,
  customerName,
  orderNumber,
  orderStatus
}) => {
  if (isLoading) {
    return jsx(HeaderSkeleton, {});
  }
  return jsxs("div", {
    className: "order-confirmation-header order-confirmation__card",
    children: [jsx(Icon, {
      source: SvgOrderSuccess,
      size: "64",
      className: "order-confirmation-header__icon"
    }), jsx("h1", {
      className: "order-confirmation-header__title",
      children: customerName ? jsx(Text, {
        id: "OrderConfirmation.Header.title",
        fields: {
          name: customerName
        }
      }) : jsx(Text, {
        id: "OrderConfirmation.Header.defaultTitle"
      })
    }), orderNumber && jsxs("p", {
      children: [jsx(Text, {
        id: "OrderConfirmation.Header.order",
        fields: {
          order: orderNumber
        }
      }), orderStatus !== void 0 && orderStatus !== "" && jsxs("span", {
        className: "order-confirmation-header__status",
        children: [" ", "(", orderStatus, ")"]
      })]
    })]
  });
};
const HeaderSkeleton = () => {
  return jsxs(Skeleton, {
    "data-testid": "order-confirmation-header-skeleton",
    className: "order-confirmation-header",
    children: [jsx(SkeletonRow, {
      variant: "empty",
      size: "xlarge",
      fullWidth: true
    }), jsx(SkeletonRow, {
      variant: "empty",
      size: "medium"
    }), jsx(SkeletonRow, {
      variant: "empty",
      size: "medium"
    }), jsx(SkeletonRow, {
      variant: "empty",
      size: "medium"
    }), jsx(SkeletonRow, {
      variant: "empty",
      size: "medium"
    }), jsx(SkeletonRow, {
      variant: "empty",
      size: "medium"
    }), jsx(SkeletonRow, {
      size: "small",
      fullWidth: true
    }), jsx(SkeletonRow, {
      variant: "heading",
      size: "xsmall",
      fullWidth: true
    })]
  });
};
const VARIANT_TO_ICON_MAP = {
  error: SvgWarningFilled,
  success: SvgCheckWithCircle,
  warning: SvgWarningFilled
};
const InLineAlert = ({
  className,
  type = "warning",
  additionalActions,
  onDismiss,
  heading,
  description,
  ...props
}) => {
  var _a, _b, _c;
  const icon = VARIANT_TO_ICON_MAP[type];
  const translations = {
    dismiss: "OrderConfirmation.InlineAlert.Dismiss"
  };
  return jsxs("div", {
    ...props,
    className: classes(["dropin-in-line-alert", `dropin-in-line-alert--${type}`, className]),
    children: [jsxs("div", {
      className: "dropin-in-line-alert__heading",
      children: [jsxs("div", {
        className: "dropin-in-line-alert__title-container",
        children: [icon && jsx(Icon, {
          source: icon,
          className: "dropin-in-line-alert__icon"
        }), jsx("span", {
          className: "dropin-in-line-alert__title",
          children: heading
        })]
      }), jsxs("div", {
        className: "dropin-in-line-alert__actions-container",
        children: [(additionalActions == null ? void 0 : additionalActions.length) == 1 && jsx(Button, {
          variant: "tertiary",
          className: "dropin-in-line-alert__additional-action",
          onClick: (_a = additionalActions[0]) == null ? void 0 : _a.onClick,
          "aria-label": (_b = additionalActions[0]) == null ? void 0 : _b.label,
          children: (_c = additionalActions[0]) == null ? void 0 : _c.label
        }), onDismiss && jsx(Button, {
          icon: jsx(Icon, {
            source: SvgClose,
            size: "24",
            stroke: "2"
          }),
          className: "dropin-in-line-alert__dismiss-button",
          variant: "tertiary",
          onClick: onDismiss,
          "aria-label": translations.dismiss
        })]
      })]
    }), description && jsx("p", {
      className: "dropin-in-line-alert__description",
      children: description
    }), additionalActions && (additionalActions == null ? void 0 : additionalActions.length) > 1 && jsx("div", {
      className: "dropin-in-line-alert__additional-actions-container",
      children: additionalActions.map((action) => jsx(Button, {
        variant: "tertiary",
        className: "dropin-in-line-alert__additional-action",
        onClick: action.onClick,
        children: action.label
      }, action.label))
    })]
  });
};
const OrderSearchForm = ({
  alert,
  onOrderSearch
}) => {
  const translations = useText({
    email: "OrderConfirmation.OrderSearchForm.email",
    postcode: "OrderConfirmation.OrderSearchForm.postcode",
    number: "OrderConfirmation.OrderSearchForm.orderNumber"
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const formValues = getFormValues(event.target);
    onOrderSearch == null ? void 0 : onOrderSearch(formValues);
  };
  return jsxs(Card, {
    variant: "secondary",
    className: "order-confirmation-order-search-form order-confirmation__card",
    children: [jsx("h2", {
      className: "order-confirmation-order-search-form__title",
      children: jsx(Text, {
        id: "OrderConfirmation.OrderSearchForm.title"
      })
    }), jsx("p", {
      children: jsx(Text, {
        id: "OrderConfirmation.OrderSearchForm.description"
      })
    }), alert && jsx(InLineAlert, {
      className: "order-confirmation-order-search-form__alert",
      "data-testid": "order-confirmation-alert",
      ...alert
    }), jsxs("form", {
      className: "order-confirmation-order-search-form__fields",
      onSubmit: handleSubmit,
      children: [jsxs("div", {
        className: "order-confirmation-order-search-form__fields-columns",
        children: [jsx(Field, {
          children: jsx(Input, {
            id: "order-email",
            name: "email",
            type: "email",
            autocomplete: "email",
            placeholder: translations.email,
            floatingLabel: translations.email,
            required: true,
            "aria-label": translations.email,
            "aria-required": true
          })
        }), jsx(Field, {
          children: jsx(Input, {
            id: "postcode",
            name: "postcode",
            type: "text",
            autocomplete: "postal-code",
            placeholder: translations.postcode,
            floatingLabel: translations.postcode,
            required: false,
            "aria-label": translations.postcode,
            "aria-required": true
          })
        })]
      }), jsx(Field, {
        children: jsx(Input, {
          id: "order-number",
          name: "number",
          type: "text",
          placeholder: translations.number,
          floatingLabel: translations.number,
          required: true,
          "aria-label": translations.number,
          "aria-required": true
        })
      }), jsx(Button, {
        className: "order-confirmation-order-search-form__button",
        size: "medium",
        variant: "primary",
        type: "submit",
        children: jsx(Text, {
          id: "OrderConfirmation.OrderSearchForm.button"
        })
      }, "logIn")]
    })]
  });
};
const Details = ({
  isLoading,
  orderDetails
}) => {
  var _a, _b, _c, _d, _e;
  if (isLoading) {
    return jsx(DetailsSkeleton, {});
  }
  const hasOrderDetails = orderDetails && (orderDetails == null ? void 0 : orderDetails.number);
  const contactDetails = (orderDetails == null ? void 0 : orderDetails.email) || "";
  const hasToDisplayContactDetails = orderDetails && contactDetails !== "";
  const shippingAddress = orderDetails == null ? void 0 : orderDetails.shipping_address;
  const hasToDisplayShippingAddress = orderDetails && shippingAddress !== null;
  const billingAddress = orderDetails == null ? void 0 : orderDetails.billing_address;
  const hasToDisplayBillingAddress = orderDetails && billingAddress !== null;
  const shippingMethod = orderDetails == null ? void 0 : orderDetails.shipping_method;
  const shippingCost = (_b = (_a = orderDetails == null ? void 0 : orderDetails.total) == null ? void 0 : _a.total_shipping) == null ? void 0 : _b.value;
  const shippingCurrency = (_d = (_c = orderDetails == null ? void 0 : orderDetails.total) == null ? void 0 : _c.total_shipping) == null ? void 0 : _d.currency;
  const hasToDisplayShippingMethod = orderDetails && shippingMethod && shippingCurrency && shippingCost != null;
  const paymentMethods = orderDetails == null ? void 0 : orderDetails.payment_methods;
  const hasPaymentMethod = paymentMethods && paymentMethods.length > 0;
  const selectedPaymentMethod = hasPaymentMethod ? (_e = paymentMethods[0]) == null ? void 0 : _e.name : "";
  const hasToDisplayPaymentMethod = orderDetails && hasPaymentMethod && selectedPaymentMethod !== "";
  return jsxs(Card, {
    variant: "secondary",
    className: "order-confirmation-details order-confirmation__card",
    children: [jsx("div", {
      className: "order-confirmation-details__header",
      children: jsx("h2", {
        className: "order-confirmation-details__title",
        children: jsx(Text, {
          id: "OrderConfirmation.Details.title"
        })
      })
    }), jsxs("div", {
      className: "order-confirmation-details__contact",
      children: [(!orderDetails || hasToDisplayContactDetails) && jsx("h3", {
        children: jsx(Text, {
          id: "OrderConfirmation.Details.contact"
        })
      }), hasToDisplayContactDetails && jsx("p", {
        children: contactDetails
      }), !hasOrderDetails && jsx(StaticSkeleton, {
        rows: 1,
        "data-testid": "order-confirmation-details-contact-skeleton"
      })]
    }), jsxs("div", {
      className: "order-confirmation-details__information",
      children: [jsxs("div", {
        className: "order-confirmation-details__shipping_address",
        children: [(!hasOrderDetails || hasToDisplayShippingAddress) && jsx("h3", {
          children: jsx(Text, {
            id: "OrderConfirmation.Details.shippingAddress"
          })
        }), hasToDisplayShippingAddress && jsxs(Fragment, {
          children: [jsxs("p", {
            children: [shippingAddress == null ? void 0 : shippingAddress.firstname, " ", shippingAddress == null ? void 0 : shippingAddress.lastname]
          }), shippingAddress == null ? void 0 : shippingAddress.street.map((street, index) => jsx("p", {
            children: street
          }, index)), jsxs("p", {
            children: [shippingAddress == null ? void 0 : shippingAddress.city, " ", shippingAddress == null ? void 0 : shippingAddress.region, " ", shippingAddress == null ? void 0 : shippingAddress.postcode, ", ", shippingAddress == null ? void 0 : shippingAddress.country_code]
          })]
        }), !hasOrderDetails && jsx(StaticSkeleton, {
          rows: 3,
          "data-testid": "order-confirmation-shipping-address-skeleton"
        })]
      }), jsxs("div", {
        className: "order-confirmation-details__billing_address",
        children: [(!hasOrderDetails || hasToDisplayBillingAddress) && jsx("h3", {
          children: jsx(Text, {
            id: "OrderConfirmation.Details.billingAddress"
          })
        }), hasToDisplayBillingAddress && jsxs(Fragment, {
          children: [jsxs("p", {
            children: [billingAddress == null ? void 0 : billingAddress.firstname, " ", billingAddress == null ? void 0 : billingAddress.lastname]
          }), billingAddress == null ? void 0 : billingAddress.street.map((street, index) => jsx("p", {
            children: street
          }, index)), jsxs("p", {
            children: [billingAddress == null ? void 0 : billingAddress.city, " ", billingAddress == null ? void 0 : billingAddress.region, " ", billingAddress == null ? void 0 : billingAddress.postcode, ", ", billingAddress == null ? void 0 : billingAddress.country_code]
          })]
        }), !hasOrderDetails && jsx(StaticSkeleton, {
          rows: 3,
          "data-testid": "order-confirmation-billing-address-skeleton"
        })]
      }), jsxs("div", {
        className: "order-confirmation-details__shipping-method",
        children: [(!hasOrderDetails || hasToDisplayShippingMethod) && jsx("h3", {
          children: jsx(Text, {
            id: "OrderConfirmation.Details.shippingMethod"
          })
        }), hasToDisplayShippingMethod && jsx(Fragment, {
          children: shippingCost === 0 ? jsx("p", {
            className: "order-confirmation-order-summary__price",
            children: jsx(Text, {
              id: "OrderConfirmation.Details.freeShipping"
            })
          }) : jsxs("p", {
            children: [jsx(Price, {
              amount: shippingCost,
              currency: shippingCurrency
            }), " ", shippingMethod]
          })
        }), !hasOrderDetails && jsx(StaticSkeleton, {
          rows: 1,
          "data-testid": "order-confirmation-details-shipping-method-skeleton"
        })]
      }), jsxs("div", {
        className: "order-confirmation-details__payment-method",
        children: [(!hasOrderDetails || hasToDisplayPaymentMethod) && jsx("h3", {
          children: jsx(Text, {
            id: "OrderConfirmation.Details.paymentMethod"
          })
        }), hasToDisplayPaymentMethod && jsx("p", {
          children: selectedPaymentMethod
        }), !hasOrderDetails && jsx(StaticSkeleton, {
          rows: 1,
          "data-testid": "order-confirmation-details-payment-method-skeleton"
        })]
      })]
    })]
  });
};
const DetailsSkeleton = () => {
  return jsx(Card, {
    variant: "secondary",
    className: "order-confirmation-details",
    children: jsxs(Skeleton, {
      "data-testid": "order-confirmation-details-skeleton",
      children: [jsx(SkeletonRow, {
        variant: "heading",
        size: "medium",
        fullWidth: true
      }), jsx(SkeletonRow, {
        size: "medium"
      }), jsx(SkeletonRow, {
        variant: "empty",
        size: "medium"
      }), jsx(SkeletonRow, {
        size: "xlarge"
      }), jsx(SkeletonRow, {
        size: "xlarge"
      }), jsx(SkeletonRow, {
        size: "xlarge"
      }), jsx(SkeletonRow, {
        size: "xlarge"
      })]
    })
  });
};
const Footer = ({
  isLoading,
  className,
  routeHome,
  routeSupport,
  ...props
}) => {
  if (isLoading) {
    return jsx(FooterSkeleton, {});
  }
  return jsxs("div", {
    className: classes(["order-confirmation-footer", className]),
    ...props,
    children: [(routeHome == null ? void 0 : routeHome()) && jsx(Button, {
      "data-testid": "order-confirmation-footer__continue-button",
      className: "order-confirmation-footer__continue-button",
      size: "medium",
      variant: "primary",
      type: "submit",
      href: routeHome == null ? void 0 : routeHome(),
      children: jsx(Text, {
        id: "OrderConfirmation.Footer.continueShopping"
      })
    }, "continueShopping"), jsxs("p", {
      className: "order-confirmation-footer__contact-support",
      children: [jsx(Text, {
        id: "OrderConfirmation.Footer.help"
      }), " ", (routeSupport == null ? void 0 : routeSupport()) && jsx("a", {
        href: routeSupport == null ? void 0 : routeSupport(),
        rel: "noreferrer",
        className: "order-confirmation-footer__contact-support-link",
        "data-testid": "order-confirmation-footer__contact-support-link",
        children: jsx(Text, {
          id: "OrderConfirmation.Footer.contactSupport"
        })
      })]
    })]
  });
};
const FooterSkeleton = () => {
  return jsxs(Skeleton, {
    className: "order-confirmation-footer",
    children: [jsx(SkeletonRow, {
      size: "small",
      fullWidth: true
    }), jsx(SkeletonRow, {
      variant: "heading",
      size: "xsmall",
      fullWidth: true
    })]
  });
};
const StaticSkeleton = ({
  rows,
  size = "xsmall",
  ...props
}) => {
  return jsx(Skeleton, {
    className: "static-skeleton",
    ...props,
    children: Array.from(Array(rows).keys()).map((i) => jsx(SkeletonRow, {
      variant: "heading",
      size,
      fullWidth: true
    }, i))
  });
};
const OrderSummary = ({
  className,
  isLoading,
  summary,
  variant = "secondary"
}) => {
  if (isLoading) {
    return jsx(OrderSummarySkeleton, {});
  }
  const {
    total,
    subtotal,
    shipping,
    tax
  } = summary ?? {};
  return jsxs(Card, {
    className: classes(["order-confirmation-order-summary", className]),
    variant,
    children: [jsx("h2", {
      className: "order-confirmation-order-summary__title",
      children: jsx(Text, {
        id: "OrderConfirmation.OrderSummary.title"
      })
    }), jsx(Divider, {
      variant: "primary"
    }), subtotal != void 0 ? jsxs("div", {
      "data-testid": "order-summary-subtotal",
      className: "order-confirmation-order-summary__row",
      children: [jsx("p", {
        children: jsx(Text, {
          id: "OrderConfirmation.OrderSummary.subtotal"
        })
      }), jsx(Price, {
        amount: subtotal == null ? void 0 : subtotal.amount,
        currency: subtotal == null ? void 0 : subtotal.currency,
        className: classes(["order-confirmation-order-summary__price", className])
      })]
    }) : jsx(StaticSkeleton, {
      rows: 1,
      "data-testid": "order-confirmation-order-summary-subtotal-skeleton"
    }), (subtotal == null ? void 0 : subtotal.isTaxIncl) && jsx("div", {
      "data-testid": "order-summary-subtotal-incl-tax",
      className: "order-confirmation-order-summary__row order-confirmation-order-summary__row--muted",
      children: jsx("p", {
        children: jsx(Text, {
          id: "OrderConfirmation.OrderSummary.includingTaxes"
        })
      })
    }), shipping != void 0 ? jsxs("div", {
      "data-testid": "order-summary-shipping",
      className: "order-confirmation-order-summary__row",
      children: [jsx("p", {
        children: jsx(Text, {
          id: "OrderConfirmation.OrderSummary.shipping"
        })
      }), shipping.amount === 0 ? jsx("p", {
        className: "order-confirmation-order-summary__price",
        children: jsx(Text, {
          id: "OrderConfirmation.OrderSummary.freeShipping"
        })
      }) : jsx(Price, {
        amount: shipping.amount,
        currency: shipping.currency,
        className: classes(["order-confirmation-order-summary__price", className])
      })]
    }) : jsx(StaticSkeleton, {
      rows: 1,
      "data-testid": "order-confirmation-order-summary-shipping-skeleton"
    }), tax != void 0 && !tax.breakdown && jsxs("div", {
      "data-testid": "order-summary-tax",
      className: "order-confirmation-order-summary__row",
      children: [jsx("p", {
        children: jsx(Text, {
          id: "OrderConfirmation.OrderSummary.tax"
        })
      }), jsx(Price, {
        amount: tax.amount,
        currency: tax.currency,
        className: classes(["order-confirmation-order-summary__price", className])
      })]
    }), tax != void 0 && tax.breakdown && jsxs(Fragment, {
      children: [jsx(Divider, {
        variant: "secondary"
      }), jsx("div", {
        className: "order-confirmation-order-summary__row order-confirmation-order-summary__row--margin-bottom",
        children: jsx("p", {
          children: jsx(Text, {
            id: "OrderConfirmation.OrderSummary.taxBreakdown"
          })
        })
      }), tax.breakdown.map((tax2) => jsxs("div", {
        "data-testid": "order-summary-tax-breakdown",
        className: "order-confirmation-order-summary__row order-confirmation-order-summary__row--muted",
        children: [jsx("p", {
          children: tax2.label
        }), jsx(Price, {
          amount: tax2.amount.value,
          currency: tax2.amount.currency,
          className: classes(["order-confirmation-order-summary__price", className])
        })]
      }, tax2.label)), jsxs("div", {
        "data-testid": "order-summary-tax-breakdown-total",
        className: "order-confirmation-order-summary__row order-confirmation-order-summary__row--strong order-confirmation-order-summary__row--margin-top",
        children: [jsx("p", {
          children: jsx(Text, {
            id: "OrderConfirmation.OrderSummary.taxTotal"
          })
        }), jsx(Price, {
          amount: tax.amount,
          currency: tax.currency,
          className: classes(["order-confirmation-order-summary__price", className])
        })]
      }), jsx(Divider, {
        variant: "secondary"
      })]
    }), total != void 0 ? jsxs("div", {
      "data-testid": "order-summary-total-incl-tax",
      className: "order-confirmation-order-summary__row order-confirmation-order-summary__row--emphasized",
      children: [jsx("p", {
        children: jsx(Text, {
          id: "OrderConfirmation.OrderSummary.total"
        })
      }), jsx(Price, {
        amount: total == null ? void 0 : total.inclTax.amount,
        currency: total == null ? void 0 : total.inclTax.currency,
        className: classes(["order-confirmation-order-summary__price", className])
      })]
    }) : jsx(StaticSkeleton, {
      rows: 1,
      "data-testid": "order-confirmation-order-summary-total-skeleton"
    }), (total == null ? void 0 : total.exclTax) != void 0 && jsxs("div", {
      "data-testid": "order-summary-total-excl-tax",
      className: "order-confirmation-order-summary__row order-confirmation-order-summary__row--muted",
      children: [jsx("p", {
        children: jsx(Text, {
          id: "OrderConfirmation.OrderSummary.totalExclTax"
        })
      }), jsx(Price, {
        amount: total.exclTax.amount,
        currency: total.exclTax.currency,
        className: classes(["order-confirmation-order-summary__price", className])
      })]
    })]
  });
};
const OrderSummarySkeleton = () => {
  return jsxs(Skeleton, {
    "data-testid": "order-confirmation-order-summary-skeleton",
    className: "order-confirmation-order-summary",
    children: [jsx(SkeletonRow, {
      variant: "heading",
      size: "small"
    }), jsx(SkeletonRow, {
      variant: "empty",
      size: "small"
    }), jsx(SkeletonRow, {
      variant: "empty",
      size: "small"
    }), jsx(SkeletonRow, {
      variant: "empty",
      size: "small"
    }), jsx(SkeletonRow, {
      variant: "heading",
      size: "small",
      fullWidth: true,
      lines: 3
    })]
  });
};
const CartSummaryItem = ({
  className,
  item,
  taxIncluded = false
}) => {
  const translations = useText({
    Sender: "OrderConfirmation.CartSummary.GiftCard.sender",
    Recipient: "OrderConfirmation.CartSummary.GiftCard.recipient"
  });
  let price = item.regularPrice;
  let total = item.total;
  if (taxIncluded) {
    price = item.priceInclTax;
    total = item.totalInclTax;
  }
  const configurations = {
    ..."configurableOptions" in item ? item.configurableOptions : {},
    ..."senderName" in item && item.senderName ? {
      [translations.Sender]: item.senderName
    } : {},
    ..."senderEmail" in item && item.senderEmail ? {
      [translations.Sender]: item.senderEmail
    } : {},
    ..."recipientName" in item && item.recipientName ? {
      [translations.Recipient]: item.recipientName
    } : {},
    ..."recipientEmail" in item && item.recipientEmail ? {
      [translations.Recipient]: item.recipientEmail
    } : {}
  };
  return jsx("div", {
    className: classes(["order-confirmation-cart-summary-item", className]),
    children: jsx(CartItem, {
      "data-testid": "cart-summary-item",
      taxIncluded,
      title: jsx("div", {
        "data-testid": "product-name",
        children: item.name
      }),
      sku: jsx("div", {
        children: item.sku
      }),
      quantity: item.quantity,
      image: jsx(Image, {
        src: item.image.src,
        alt: item.image.alt,
        loading: "lazy",
        width: "80",
        height: "80",
        params: {
          width: 80
        }
      }),
      configurations,
      price: jsx(Price, {
        amount: item.regularPrice.value,
        currency: price.currency,
        weight: "normal"
      }),
      total: jsxs(Fragment, {
        children: [jsx(Price, {
          amount: item.regularPrice.value * item.quantity,
          currency: price.currency,
          variant: item.discounted ? "strikethrough" : "default"
        }), item.discounted && jsx(Price, {
          amount: total.value,
          currency: total.currency,
          sale: true
        })]
      })
    }, item.uid)
  });
};
function transformItems(item) {
  return {
    uid: item.id,
    quantity: item.quantity_ordered,
    sku: item.product.sku,
    name: item.product.name,
    image: {
      src: item.product.thumbnail.url,
      alt: item.product.thumbnail.label
    },
    price: {
      value: item.product_sale_price.value,
      currency: item.product_sale_price.currency
    },
    priceInclTax: {
      value: item.product_sale_price.value,
      currency: item.product_sale_price.currency
    },
    total: {
      value: item.product_sale_price.value * item.quantity_ordered,
      currency: item.product_sale_price.currency
    },
    totalInclTax: {
      value: item.product_sale_price.value * item.quantity_ordered,
      currency: item.product_sale_price.currency
    },
    discount: {
      value: 0,
      currency: item.product_sale_price.currency
    },
    regularPrice: {
      value: item.product.price_range.maximum_price.regular_price.value,
      currency: item.product.price_range.maximum_price.regular_price.currency
    },
    discounted: item.product.price_range.maximum_price.regular_price.value * item.quantity_ordered !== item.product_sale_price.value * item.quantity_ordered,
    configurableOptions: transformConfigurableOptions(item),
    senderName: item.__typename === "GiftCardOrderItem" ? item.gift_card.sender_name : void 0,
    senderEmail: item.__typename === "GiftCardOrderItem" ? item.gift_card.sender_email : void 0,
    recipientEmail: item.__typename === "GiftCardOrderItem" ? item.gift_card.recipient_email : void 0,
    recipientName: item.__typename === "GiftCardOrderItem" ? item.gift_card.recipient_name : void 0
  };
}
function transformConfigurableOptions(item) {
  if (!("selected_options" in item))
    return;
  const configurableOptions = {};
  for (const option of item.selected_options) {
    configurableOptions[option.label] = option.value;
  }
  return configurableOptions;
}
const CartSummary = ({
  isLoading,
  details
}) => {
  if (isLoading) {
    return jsx(CartSummarySkeleton, {});
  }
  const taxIncluded = false;
  const items = details.items;
  const totalQuantity = items.length;
  return jsx("div", {
    className: "order-confirmation-cart-summary",
    children: jsxs(Card, {
      variant: "secondary",
      children: [jsx("div", {
        className: "order-confirmation-cart-summary__heading",
        children: jsxs("h2", {
          className: "order-confirmation-cart-summary__title",
          children: [jsx(Text, {
            id: "OrderConfirmation.CartSummary.title"
          }), " (", totalQuantity, ")"]
        })
      }), jsx(Divider, {
        className: "order-confirmation-cart-summary__divider-top",
        variant: "primary"
      }), jsx("div", {
        className: "order-confirmation-cart-summary__items",
        children: items == null ? void 0 : items.map((item) => {
          const cartItem = transformItems(item);
          return jsx(CartSummaryItem, {
            item: cartItem,
            taxIncluded
          }, cartItem == null ? void 0 : cartItem.uid);
        })
      })]
    })
  });
};
const CartItemSkeleton = () => {
  return jsx("div", {
    className: "dropin-cart-item dropin-cart-item-skeleton",
    children: jsxs(Skeleton, {
      className: "dropin-cart-item__skeleton dropin-cart-item__wrapper",
      children: [jsx("div", {
        className: "dropin-cart-item__image",
        children: jsx(SkeletonRow, {
          className: "dropin-cart-item__skeleton__item"
        })
      }), jsx("div", {
        className: "dropin-cart-item__title",
        children: jsx(SkeletonRow, {
          className: "dropin-cart-item__skeleton__item"
        })
      }), jsx("div", {
        className: "dropin-cart-item__sku",
        children: jsx(SkeletonRow, {
          className: "dropin-cart-item__skeleton__item"
        })
      }), jsx("div", {
        className: "dropin-cart-item__price",
        children: jsx(SkeletonRow, {
          className: "dropin-cart-item__skeleton__item"
        })
      }), jsx("div", {
        className: "dropin-cart-item__quantity",
        children: jsx(SkeletonRow, {
          className: "dropin-cart-item__skeleton__item"
        })
      }), jsx("div", {
        className: "dropin-cart-item__total",
        children: jsx(SkeletonRow, {
          className: "dropin-cart-item__skeleton__item"
        })
      })]
    })
  });
};
const CartSummarySkeleton = () => {
  return jsxs(Skeleton, {
    "data-testid": "cart-summary-skeleton",
    className: "order-confirmation-cart-summary",
    style: {
      gridTemplateColumns: "1fr"
    },
    children: [jsx(SkeletonRow, {
      variant: "heading",
      fullWidth: true,
      size: "medium"
    }), jsx(CartItemSkeleton, {}), jsx(CartItemSkeleton, {}), jsx(CartItemSkeleton, {}), jsx(CartItemSkeleton, {}), jsx(CartItemSkeleton, {})]
  });
};
function useOrderConfirmation(token) {
  const [state, dispatch] = useReducer(orderConfirmationReducer, {
    isLoading: false,
    token,
    details: null
  });
  const translations = useText({
    invalidOrder: "OrderConfirmation.Errors.invalidOrder",
    invalidSearch: "OrderConfirmation.Errors.invalidSearch",
    pageNotFound: "OrderConfirmation.Errors.pageNotFound",
    unknown: "OrderConfirmation.Errors.unknown"
  });
  const buildAlert = useCallback((message) => {
    switch (message) {
      case "Invalid order":
      case "We couldn't locate an order with the information provided.":
        return {
          type: AlertType.WARNING,
          code: AlertCode.INVALID_ORDER,
          message: translations.invalidOrder
        };
      case "Invalid search":
        return {
          type: AlertType.WARNING,
          code: AlertCode.INVALID_SEARCH,
          message: translations.invalidSearch
        };
    }
  }, [translations.invalidOrder, translations.invalidSearch]);
  const fetchOrderDetails = useCallback((fields) => {
    guestOrder(fields).then((details) => {
      const hasOrderDetails = !!(details == null ? void 0 : details.number);
      const alert = hasOrderDetails ? void 0 : buildAlert("Invalid search");
      dispatch({
        type: Actions.SET_DETAILS,
        details,
        alert
      });
    }).catch(() => {
      const alert = buildAlert("Invalid search");
      dispatch({
        type: Actions.SET_DETAILS,
        details: null,
        alert
      });
    });
  }, [buildAlert]);
  const fetchOrderDetailsByToken = useCallback((token2) => {
    guestOrderByToken(token2).then((details) => {
      const hasOrderDetails = !!(details == null ? void 0 : details.number);
      const alert = hasOrderDetails ? void 0 : buildAlert("Invalid order");
      dispatch({
        type: Actions.SET_DETAILS,
        details,
        alert
      });
    }).catch((error) => {
      const knownAlert = buildAlert(error.message);
      if (!knownAlert) {
        console.error(error);
        return;
      }
      dispatch({
        type: Actions.ALERT,
        alert: knownAlert
      });
    });
  }, [buildAlert]);
  const dismissAlert = () => {
    dispatch({
      type: Actions.DISMISS_ALERT
    });
  };
  const handleOrderSearch = function(fields) {
    fetchOrderDetails(fields);
  };
  useEffect$1(() => {
    if (!state.token)
      return;
    dispatch({
      type: Actions.LOADING
    });
    fetchOrderDetailsByToken(state.token);
  }, [state.token, fetchOrderDetailsByToken]);
  return {
    state,
    handleOrderSearch,
    dismissAlert
  };
}
const OrderConfirmation = ({
  token,
  routeHome,
  routeSupport
}) => {
  const {
    state,
    handleOrderSearch,
    dismissAlert
  } = useOrderConfirmation(token);
  return jsx(OrderConfirmation$1, {
    state,
    dismissAlert,
    onOrderSearch: handleOrderSearch,
    routeHome,
    routeSupport
  });
};
export {
  OrderConfirmation,
  OrderConfirmation as default
};
//# sourceMappingURL=OrderConfirmation.js.map
