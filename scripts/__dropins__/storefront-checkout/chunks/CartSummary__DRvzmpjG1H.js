import { u as useBreakpoint, H as Heading } from "./CartSummaryItem__iGzWaHX3tp.js";
import { Skeleton, SkeletonRow, Card, Divider, Accordion, AccordionSection, Icon, CartItem, Image, Price } from "@dropins/tools/components/index.js";
import "@dropins/tools/preact-hooks.js";
import { i as useStore, T as TotalDisplay, n as PriceDisplay } from "./countries__BI6v0R6zIv.js";
import "@dropins/tools/event-bus.js";
/* empty css                                  */
import { jsx, jsxs, Fragment } from "@dropins/tools/preact-jsx-runtime.js";
import { S as StockStatus } from "./cart-item__DckGDB9umt.js";
import * as React from "@dropins/tools/preact-compat.js";
import { useState, useCallback, useMemo } from "@dropins/tools/preact-compat.js";
import { useText, Text } from "@dropins/tools/i18n.js";
import { c as classes } from "./classes__Bsz9GBN04n.js";
import { e as cartSignal } from "./transform-shipping-methods__Jr5_k8qEf1.js";
function redirect(location) {
  window.location.href = location;
}
const SvgWarningWithCircle = (props) => /* @__PURE__ */ React.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("path", { vectorEffect: "non-scaling-stroke", d: "M0.75 12C0.75 5.78421 5.78421 0.75 12 0.75C18.2158 0.75 23.25 5.78421 23.25 12C23.25 18.2158 18.2158 23.25 12 23.25C5.78421 23.25 0.75 18.2158 0.75 12Z", stroke: "currentColor" }), /* @__PURE__ */ React.createElement("path", { vectorEffect: "non-scaling-stroke", d: "M11.75 5.88423V4.75H12.25V5.88423L12.0485 13.0713H11.9515L11.75 5.88423ZM11.7994 18.25V16.9868H12.2253V18.25H11.7994Z", stroke: "currentColor" }));
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
  return jsx(Card, {
    children: jsxs(Skeleton, {
      "data-testid": "cart-summary-skeleton",
      className: "checkout-cart-summary-skeleton",
      style: {
        gridTemplateColumns: "1fr"
      },
      children: [jsx(SkeletonRow, {
        variant: "heading",
        fullWidth: true,
        size: "medium"
      }), jsx(CartItemSkeleton, {}), jsx(CartItemSkeleton, {}), jsx(CartItemSkeleton, {}), jsx(CartItemSkeleton, {}), jsx(CartItemSkeleton, {}), jsx(SkeletonRow, {
        size: "medium",
        fullWidth: true
      })]
    })
  });
};
const MobileCartSummarySkeleton = () => {
  return jsx(Skeleton, {
    "data-testid": "cart-summary-skeleton",
    className: "checkout-mobile-cart-summary-skeleton",
    style: {
      gridTemplateColumns: "1fr"
    },
    children: jsx(SkeletonRow, {
      fullWidth: true,
      size: "xlarge"
    })
  });
};
const CartSummaryAction = ({
  type,
  onClick,
  children
}) => {
  return jsxs(Fragment, {
    children: [jsx(Divider, {
      className: "checkout-cart-summary__divider-bottom",
      variant: "primary"
    }), jsx("button", {
      "data-testid": `action-${type}`,
      className: "checkout-cart-summary__action",
      onClick,
      children
    })]
  });
};
const Mobile = ({
  title,
  isLoading,
  totalQuantity,
  routeCart,
  items,
  taxIncluded,
  action
}) => {
  return jsx(Fragment, {
    children: isLoading ? jsx(MobileCartSummarySkeleton, {}) : jsx(Accordion, {
      actionIconPosition: "left",
      children: jsxs(AccordionSection, {
        title: `${title} (${totalQuantity})`,
        secondaryText: (routeCart == null ? void 0 : routeCart()) && jsx("a", {
          href: routeCart == null ? void 0 : routeCart(),
          rel: "noreferrer",
          children: jsx(Text, {
            id: "Checkout.CartSummary.editCart"
          })
        }),
        children: [items == null ? void 0 : items.map((item) => jsx(CartSummaryItem, {
          item,
          taxIncluded
        }, item == null ? void 0 : item.uid)), action]
      })
    })
  });
};
const Desktop = ({
  title,
  isLoading,
  totalQuantity,
  routeCart,
  items,
  action,
  taxIncluded
}) => {
  return jsx(Fragment, {
    children: isLoading ? jsx(CartSummarySkeleton, {}) : jsxs(Card, {
      children: [jsxs("div", {
        className: "checkout-cart-summary__heading",
        children: [jsxs(Heading, {
          level: 2,
          className: "checkout-cart-summary__title",
          children: [title, " (", totalQuantity, ")"]
        }), (routeCart == null ? void 0 : routeCart()) && jsx("a", {
          className: "checkout-cart-summary__edit",
          href: routeCart == null ? void 0 : routeCart(),
          rel: "noreferrer",
          children: jsx(Text, {
            id: "Checkout.CartSummary.editCart"
          })
        })]
      }), jsx(Divider, {
        className: "checkout-cart-summary__divider-top",
        variant: "primary"
      }), jsx("div", {
        className: "checkout-cart-summary__items",
        children: items == null ? void 0 : items.map((item) => jsx(CartSummaryItem, {
          item,
          taxIncluded
        }, item == null ? void 0 : item.uid))
      }), action]
    })
  });
};
const CartSummary$1 = ({
  className,
  ...props
}) => {
  const title = useText("Checkout.CartSummary.title").title;
  const breakpoint = useBreakpoint();
  return jsx("div", {
    className: classes(["checkout-cart-summary", className]),
    children: breakpoint === "small" ? jsx(Mobile, {
      title,
      ...props
    }) : jsx(Desktop, {
      title,
      ...props
    })
  });
};
const CartSummaryItem = ({
  className,
  item,
  taxIncluded = false
}) => {
  var _a, _b;
  const translations = useText({
    Sender: "Checkout.CartSummary.GiftCard.sender",
    Recipient: "Checkout.CartSummary.GiftCard.recipient",
    Message: "Checkout.CartSummary.GiftCard.message",
    Download: "Checkout.CartSummary.Downloadable.download",
    OutOfStockAlert: "Checkout.OutOfStock.alert",
    ..."links" in item && item.links ? {
      Files: jsx(Text, {
        id: "Checkout.CartSummary.Downloadable.files",
        plural: item.links.length,
        fields: {
          count: item.links.length
        }
      })
    } : {}
  });
  let price = item.regularPrice;
  let total = item.total;
  if (taxIncluded) {
    price = item.priceInclTax;
    total = item.totalInclTax;
  }
  const configurations = {
    ..."customizableOptions" in item ? item.customizableOptions : {},
    ..."configurableOptions" in item ? item.configurableOptions : {},
    ..."links" in item && item.links ? {
      [translations.Files]: item.links.join(", ")
    } : {},
    ..."senderName" in item && item.senderName ? {
      [translations.Sender]: item.senderName
    } : {},
    ..."recipientName" in item && item.recipientName ? {
      [translations.Recipient]: item.recipientName
    } : {},
    ..."senderEmail" in item && "senderName" in item && item.senderName && item.senderEmail ? {
      [translations.Sender]: `${item.senderName} (${item.senderEmail})`
    } : {},
    ..."recipientEmail" in item && "recipientName" in item && item.recipientName && item.recipientEmail ? {
      [translations.Recipient]: `${item.recipientName} (${item.recipientEmail})`
    } : {},
    ..."message" in item && item.message && item.message != "" ? {
      [translations.Message]: truncateMessage(item.message, 60)
    } : {}
  };
  function truncateMessage(message, limit) {
    if (message.length > limit) {
      return `${message.slice(0, limit)}...`;
    }
    return message;
  }
  const alert = item.stockStatus === StockStatus.OutOfStock ? jsxs("span", {
    "data-testid": "checkout-cart-item-alert",
    children: [jsx(Icon, {
      source: SvgWarningWithCircle,
      size: "16"
    }), translations.OutOfStockAlert]
  }) : void 0;
  const lowInventory = !alert && item.onlyXLeftInStock ? jsxs("span", {
    "data-testid": "checkout-cart-item-low-inventory",
    children: [jsx(Icon, {
      source: SvgWarningWithCircle,
      size: "16"
    }), jsx(Text, {
      id: "Checkout.OutOfStock.lowInventory",
      plural: item.onlyXLeftInStock,
      fields: {
        count: item.onlyXLeftInStock
      }
    })]
  }) : void 0;
  return jsx("div", {
    className: classes(["checkout-cart-summary-item", className]),
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
        src: ((_a = item.image) == null ? void 0 : _a.src) ?? "",
        alt: (_b = item.image) == null ? void 0 : _b.alt,
        loading: "lazy",
        width: "80",
        height: "80",
        params: {
          width: 80
        }
      }),
      warning: lowInventory,
      alert,
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
const DEFAULT_VISIBLE_ITEMS = 5;
const initialState = {
  canDisplayMoreItems: false,
  hasHiddenItems: false,
  isLoading: true,
  isTaxIncluded: false,
  totalQuantity: 0,
  visibleItems: []
};
function useCartSummary(displayMaxItems) {
  const {
    config
  } = useStore();
  const isLoadingStoreConfig = config === void 0;
  const cartData = cartSignal.value.data;
  const isLoadingCartData = cartData === void 0;
  if (isLoadingStoreConfig || isLoadingCartData)
    return initialState;
  const {
    cartSummaryMaxItems,
    cartSummaryTotalDisplay,
    taxCartDisplay
  } = config;
  const useQtys = cartSummaryTotalDisplay === TotalDisplay.Quantity;
  const isTaxIncluded = taxCartDisplay.shoppingCartDisplayPrice === PriceDisplay.IncludingTax;
  const {
    items,
    totalQty
  } = cartData;
  const totalQuantity = useQtys ? totalQty : items.length;
  const numOfVisibleItems = displayMaxItems ? cartSummaryMaxItems : Math.min(cartSummaryMaxItems, DEFAULT_VISIBLE_ITEMS);
  const hasHiddenItems = items.length > numOfVisibleItems;
  const visibleItems = items.slice(0, numOfVisibleItems);
  const canDisplayMoreItems = hasHiddenItems && !displayMaxItems && numOfVisibleItems != cartSummaryMaxItems;
  return {
    canDisplayMoreItems,
    hasHiddenItems,
    isLoading: false,
    isTaxIncluded,
    totalQuantity,
    visibleItems
  };
}
const CartSummary = ({
  routeCart,
  ...props
}) => {
  const [displayMaxItems, setDisplayMaxItems] = useState(false);
  const translations = useText({
    ViewAll: "Checkout.CartSummary.viewAll",
    ViewMore: "Checkout.CartSummary.viewMore"
  });
  const {
    canDisplayMoreItems,
    hasHiddenItems,
    isLoading,
    isTaxIncluded,
    visibleItems,
    totalQuantity
  } = useCartSummary(displayMaxItems);
  const viewMaxItems = useCallback(() => {
    setDisplayMaxItems(true);
  }, []);
  const viewAllItems = useCallback(() => {
    if (!routeCart)
      return;
    redirect(routeCart());
  }, [routeCart]);
  const action = useMemo(() => {
    if (!hasHiddenItems)
      return;
    if (canDisplayMoreItems) {
      return jsx(CartSummaryAction, {
        type: "view-more",
        onClick: viewMaxItems,
        children: translations.ViewMore
      });
    }
    if (routeCart) {
      return jsx(CartSummaryAction, {
        type: "view-all",
        onClick: viewAllItems,
        children: translations.ViewAll
      });
    }
  }, [hasHiddenItems, canDisplayMoreItems, viewMaxItems, translations.ViewMore, translations.ViewAll, viewAllItems, routeCart]);
  return jsx(CartSummary$1, {
    ...props,
    action,
    taxIncluded: isTaxIncluded,
    isLoading,
    items: visibleItems,
    routeCart,
    totalQuantity
  });
};
export {
  CartSummary as C,
  useCartSummary as u
};
//# sourceMappingURL=CartSummary__DRvzmpjG1H.js.map
