import { P as ProductStockStatus } from "../chunks/countries__BNdKWz0f2q.js";
import { e as cartSignal, U as UnexpectedError } from "../chunks/transform-shipping-methods__Csm-KieitR.js";
import { events } from "@dropins/tools/event-bus.js";
import { p as placeOrder, g as getCheckoutData, a as getStockStatus } from "../chunks/placeOrder__DQsglKr0x8.js";
import { i as isBillToShippingSignal } from "../chunks/IsBillToShippingSignal__Dm6xiHlOoA.js";
import { C as Checkout$1 } from "../chunks/usePreselectedFields__yoBeivzMB8.js";
import "@dropins/tools/preact-hooks.js";
import { IllustratedMessage, Icon, Button } from "@dropins/tools/components/index.js";
/* empty css                                          */
import { jsx, jsxs } from "@dropins/tools/preact-jsx-runtime.js";
import * as React from "@dropins/tools/preact-compat.js";
import { useState, useCallback, useEffect } from "@dropins/tools/preact-compat.js";
import { useText, Text, MarkupText } from "@dropins/tools/i18n.js";
import { c as classes } from "../chunks/classes__Bsz9GBN04n.js";
import "@adobe/elsie/components/CartItem/CartItemSkeleton";
import { S as ShippingMethods } from "../chunks/ShippingMethods__Bk9N5uLBCD.js";
import { L as LoginForm } from "../chunks/LoginForm__DTswZFhGJu.js";
import { S as ShippingForm } from "../chunks/ShippingForm__B2UcamJQdL.js";
import { B as BillToShippingAddress } from "../chunks/BillToShippingAddress__DWPy9d4eNp.js";
import { O as OrderSummary } from "../chunks/OrderSummary__CLb9HDj90W.js";
import { S as Slot, P as PaymentMethods } from "../chunks/PaymentMethods__7hSjzAV9Mj.js";
import { B as BillingForm } from "../chunks/BillingForm__DYCpXtqpvi.js";
import { P as PlaceOrder } from "../chunks/PlaceOrder__nL1XixS_R3.js";
import { E as ErrorBanner } from "../chunks/ErrorBanner__p6HuHxntBf.js";
import { C as CartSummary } from "../chunks/CartSummary__msfL1izb6P.js";
import "@dropins/tools/preact.js";
import "@dropins/tools/fetch-graphql.js";
import "../chunks/transform-cart__DmkjTHv6RB.js";
import "../chunks/cart-item__DckGDB9umt.js";
import "../chunks/estimateShippingMethods__BQV8ZoVRnA.js";
import "../chunks/vcomponent__Bib-9V9Azd.js";
import "../chunks/SelectedShippingMethodSignal__CAgSNCk6GG.js";
import "../chunks/setShippingMethods__BH6s0k15gL.js";
import "../chunks/setGuestEmailOnCart__Cz0-Ak45kk.js";
import "../chunks/constants__Bjtfl8EOca.js";
import "../chunks/setBillingAddress__BSXMLhOouL.js";
import "../chunks/setShippingAddress__DBroFE3q4I.js";
import "../chunks/constants__DMF04Yfz9Q.js";
import "../chunks/setPaymentMethod__B9JymqP6zd.js";
import "../chunks/constants__BdEsiyu87r.js";
const SvgCart = (props) => /* @__PURE__ */ React.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("g", { clipPath: "url(#clip0_102_196)" }, /* @__PURE__ */ React.createElement("path", { vectorEffect: "non-scaling-stroke", d: "M18.3601 18.16H6.5601L4.8801 3H2.3501M19.6701 19.59C19.6701 20.3687 19.0388 21 18.2601 21C17.4814 21 16.8501 20.3687 16.8501 19.59C16.8501 18.8113 17.4814 18.18 18.2601 18.18C19.0388 18.18 19.6701 18.8113 19.6701 19.59ZM7.42986 19.59C7.42986 20.3687 6.79858 21 6.01986 21C5.24114 21 4.60986 20.3687 4.60986 19.59C4.60986 18.8113 5.24114 18.18 6.01986 18.18C6.79858 18.18 7.42986 18.8113 7.42986 19.59Z", stroke: "currentColor", strokeLinejoin: "round" }), /* @__PURE__ */ React.createElement("path", { vectorEffect: "non-scaling-stroke", d: "M5.25 6.37L20.89 8.06L20.14 14.8H6.19", stroke: "currentColor", strokeLinejoin: "round" })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "clip0_102_196" }, /* @__PURE__ */ React.createElement("rect", { vectorEffect: "non-scaling-stroke", width: 19.29, height: 19.5, fill: "white", transform: "translate(2.3501 2.25)" }))));
const SvgOrderError = (props) => /* @__PURE__ */ React.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("g", { clipPath: "url(#clip0_4797_15331)" }, /* @__PURE__ */ React.createElement("path", { vectorEffect: "non-scaling-stroke", d: "M10.25 20.91L1.5 17.55V6.51996L10.25 9.92996V20.91Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React.createElement("path", { vectorEffect: "non-scaling-stroke", d: "M6.24023 4.64001L14.9902 8.06001V11.42", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React.createElement("path", { className: "error-icon", vectorEffect: "non-scaling-stroke", d: "M19 13.31L15.5 19.37H22.5L19 13.31Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React.createElement("path", { className: "error-icon", vectorEffect: "non-scaling-stroke", d: "M19.0202 17.11H18.9802L18.9502 15.56H19.0502L19.0202 17.11ZM18.9602 18.29V18.06H19.0502V18.29H18.9602Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React.createElement("path", { vectorEffect: "non-scaling-stroke", d: "M19 12.16V6.51996L10.25 9.92996V20.91L14.27 19.37L14.4 19.32", stroke: "currentColor", strokeLinejoin: "round" }), /* @__PURE__ */ React.createElement("path", { vectorEffect: "non-scaling-stroke", d: "M1.5 6.51999L10.25 3.04999L19 6.51999L10.25 9.92999L1.5 6.51999Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "clip0_4797_15331" }, /* @__PURE__ */ React.createElement("rect", { width: 22, height: 18.86, fill: "white", transform: "translate(1 2.54999)" }))));
const EmptyCart = ({
  className,
  title,
  routeHome,
  ...props
}) => {
  const translations = useText({
    Title: "Checkout.EmptyCart.title",
    Button: "Checkout.EmptyCart.button"
  });
  return jsx(IllustratedMessage, {
    ...props,
    "data-testid": "checkout-empty-cart",
    className: classes(["checkout-empty-cart", className]),
    heading: title ?? translations.Title,
    icon: jsx(Icon, {
      className: classes(["checkout-empty-cart__icon"]),
      source: SvgCart
    }),
    action: (routeHome == null ? void 0 : routeHome()) ? jsx(Button, {
      className: "checkout-empty-cart__button",
      size: "medium",
      variant: "primary",
      type: "submit",
      href: routeHome == null ? void 0 : routeHome(),
      children: translations.Button
    }, "routeHome") : void 0
  });
};
const OutOfStock = ({
  className,
  icon,
  routeCart,
  ...props
}) => {
  const translations = useText({
    Title: "Checkout.OutOfStock.title",
    Message: "Checkout.OutOfStock.message"
  });
  return jsxs("div", {
    ...props,
    className: classes(["checkout-out-of-stock", className]),
    "data-testid": "checkout-out-of-stock",
    children: [jsx(IllustratedMessage, {
      heading: translations.Title,
      message: jsx("p", {
        children: translations.Message
      }),
      icon: jsx(Icon, {
        source: icon ?? SvgOrderError,
        className: classes(["checkout-out-of-stock__icon"])
      })
    }), (routeCart == null ? void 0 : routeCart()) && jsx(Button, {
      className: "checkout-out-of-stock__button",
      size: "medium",
      variant: "primary",
      type: "submit",
      href: routeCart == null ? void 0 : routeCart(),
      children: jsx(Text, {
        id: "Checkout.OutOfStock.button"
      })
    }, "routeCart")]
  });
};
const ServerError = ({
  className,
  errorMessage,
  contactSupport,
  ...props
}) => {
  const {
    onClick
  } = props;
  const translations = useText({
    Title: "Checkout.ServerError.title",
    Message: "Checkout.ServerError.message",
    ContactSupport: "Checkout.ServerError.contactSupport",
    Button: "Checkout.ServerError.button"
  });
  return jsx(IllustratedMessage, {
    "aria-invalid": "true",
    "aria-describedby": "checkout-server-error__message",
    "aria-live": "polite",
    className: classes(["checkout-server-error", className]),
    "data-testid": "checkout-server-error",
    heading: errorMessage ?? translations.Title,
    message: jsxs("p", {
      id: classes(["checkout-server-error__message"]),
      children: [translations.Message, jsx("br", {}), jsx(MarkupText, {
        id: "",
        children: contactSupport ?? translations.ContactSupport
      })]
    }),
    icon: jsx(Icon, {
      className: classes(["checkout-server-error__icon"]),
      source: SvgOrderError
    }),
    action: jsx(Button, {
      className: classes(["checkout-server-error__button"]),
      onClick,
      children: translations.Button
    })
  });
};
const OUT_OF_STOCK = "OUT_OF_STOCK";
const Checkout = (props) => {
  const {
    className,
    cartId,
    slots,
    routeHome,
    routeCart,
    preselectedCartData,
    ...restProps
  } = props;
  const [serverError, setServerError] = useState("");
  const [handlePlaceOrder, setHandlePlaceOrder] = useState();
  const [isComplete, setIsComplete] = useState(false);
  const [hasOutOfStock, setHasOutOfStock] = useState(false);
  const hasProvidedCartId = Boolean(cartId);
  const {
    data: cartData
  } = cartSignal.value;
  const isInitialized = cartData !== void 0;
  const isVirtual = (cartData == null ? void 0 : cartData.virtual) || false;
  const isPending = hasProvidedCartId && !isInitialized;
  const hasErrors = serverError !== "";
  const cartItems = cartData == null ? void 0 : cartData.items;
  const hasCartItems = cartItems !== void 0 && cartItems.length > 0;
  const isEmptyCart = !isPending && !hasCartItems;
  const translations = useText({
    CheckoutUnexpectedError: "Checkout.ServerError.unexpected"
  });
  const defaultPlaceOrderHandler = useCallback(async () => {
    if (!cartData)
      return;
    await placeOrder(cartData.id);
    cartSignal.value = {
      pending: false
    };
    setIsComplete(true);
  }, [cartData]);
  const onPlaceOrder = (fn) => {
    setHandlePlaceOrder(() => fn);
  };
  const dismissError = async () => {
    setServerError("");
    if (!cartData)
      return;
    await loadCheckoutData(cartData.id);
  };
  const handleServerError = (error) => {
    setServerError(error instanceof TypeError || error instanceof UnexpectedError ? translations.CheckoutUnexpectedError : error.message);
  };
  const loadCheckoutData = async (cartId2) => {
    const data = await getCheckoutData(cartId2);
    if (data == null ? void 0 : data.virtual) {
      isBillToShippingSignal.value = {
        checked: false,
        setByUser: false
      };
    }
  };
  const checkStockStatus = async (cartId2) => {
    const result = await getStockStatus(cartId2);
    setHasOutOfStock(result === ProductStockStatus.OutOfStock);
  };
  useEffect(() => {
    if (!cartId || isComplete)
      return;
    loadCheckoutData(cartId);
    checkStockStatus(cartId);
  }, [cartId, isComplete]);
  useEffect(() => {
    const onCartData = events.on("cart/data", (cart) => {
      if (!cartId && cart) {
        loadCheckoutData(cart.id);
        checkStockStatus(cart.id);
      }
    }, {
      eager: true
    });
    return () => {
      onCartData == null ? void 0 : onCartData.off();
    };
  }, [cartId]);
  if (isComplete) {
    return null;
  }
  if (isEmptyCart) {
    return jsx(EmptyCart, {
      routeHome
    });
  }
  if (hasErrors) {
    return jsx(ServerError, {
      errorMessage: serverError,
      onClick: dismissError
    });
  }
  const renderMain = () => {
    if (hasOutOfStock) {
      return jsx(Checkout$1.Main, {
        outOfStock: jsx(OutOfStock, {
          routeCart
        })
      });
    }
    return jsx(Checkout$1.Main, {
      sections: {
        billingAddress: jsx(Slot, {
          name: "BillingForm",
          slot: slots == null ? void 0 : slots.BillingForm,
          children: jsx(BillingForm, {})
        }),
        billToShippingAddress: isVirtual ? void 0 : jsx(Slot, {
          name: "BillToShipping",
          slot: slots == null ? void 0 : slots.BillToShipping,
          children: jsx(BillToShippingAddress, {})
        }),
        login: jsx(Slot, {
          name: "Login",
          slot: slots == null ? void 0 : slots.Login,
          children: jsx(LoginForm, {})
        }),
        paymentMethods: jsx(PaymentMethods, {
          isShippingInfoRequired: !isVirtual,
          onPlaceOrder,
          handleServerError,
          paymentMethodsSlot: slots == null ? void 0 : slots.PaymentMethods
        }),
        placeOrder: jsx(PlaceOrder, {
          onClick: handlePlaceOrder ?? defaultPlaceOrderHandler,
          handleServerError
        }),
        shippingAddress: isVirtual ? void 0 : jsx(Slot, {
          name: "ShippingForm",
          slot: slots == null ? void 0 : slots.ShippingForm,
          children: jsx(ShippingForm, {
            preselectedFields: preselectedCartData == null ? void 0 : preselectedCartData.address
          })
        }),
        shippingMethods: isVirtual ? void 0 : jsx(Slot, {
          name: "ShippingMethods",
          slot: slots == null ? void 0 : slots.ShippingMethods,
          children: jsx(ShippingMethods, {
            preSelectedMethod: preselectedCartData == null ? void 0 : preselectedCartData.shippingMethod
          })
        })
      }
    });
  };
  const renderAside = () => {
    return jsx(Checkout$1.Aside, {
      sections: {
        cartSummary: jsx(Slot, {
          name: "CartSummary",
          slot: slots == null ? void 0 : slots.CartSummary,
          children: jsx(CartSummary, {
            routeCart
          })
        }),
        orderSummary: jsx(Slot, {
          name: "OrderSummary",
          slot: slots == null ? void 0 : slots.OrderSummary,
          children: jsx(OrderSummary, {})
        })
      }
    });
  };
  return jsxs(Checkout$1, {
    className,
    banner: jsx(ErrorBanner, {}),
    ...restProps,
    children: [renderAside(), renderMain()]
  });
};
export {
  Checkout,
  OUT_OF_STOCK,
  Checkout as default
};
