import { H as Heading } from "./CartSummaryItem__iGzWaHX3tp.js";
import "@dropins/tools/preact-hooks.js";
import { i as useStore } from "./countries__BI6v0R6zIv.js";
import "@dropins/tools/event-bus.js";
import { e as cartSignal } from "./transform-shipping-methods__Jr5_k8qEf1.js";
import { s as selectedShippingMethodSignal } from "./SelectedShippingMethodSignal__BEfK8IR0ow.js";
import { Card, Divider, ProgressSpinner, Price, Skeleton, SkeletonRow } from "@dropins/tools/components/index.js";
/* empty css                                  */
import { jsxs, jsx, Fragment } from "@dropins/tools/preact-jsx-runtime.js";
import { c as classes } from "./classes__Bsz9GBN04n.js";
import { Text } from "@dropins/tools/i18n.js";
const OrderSummary$1 = ({
  className,
  summary,
  isLoading = false,
  ...props
}) => {
  const {
    total,
    subtotal,
    shipping,
    tax
  } = summary;
  return jsxs(Card, {
    ...props,
    className: classes(["checkout-order-summary", ["checkout-order-summary--loading", isLoading], className]),
    children: [jsx(Heading, {
      level: 2,
      className: "checkout-order-summary__title",
      children: jsx(Text, {
        id: "Checkout.OrderSummary.title"
      })
    }), jsx(Divider, {
      variant: "primary"
    }), isLoading && jsx(ProgressSpinner, {
      className: "checkout-order-summary__spinner"
    }), jsxs("div", {
      "data-testid": "order-summary-subtotal",
      className: "checkout-order-summary__row",
      children: [jsx("p", {
        children: jsx(Text, {
          id: "Checkout.OrderSummary.subtotal"
        })
      }), jsx(Price, {
        amount: subtotal.amount,
        currency: subtotal.currency,
        className: classes(["checkout-order-summary__price", className])
      })]
    }), subtotal.isTaxIncl && jsx("div", {
      "data-testid": "order-summary-subtotal-incl-tax",
      className: "checkout-order-summary__row checkout-order-summary__row--muted",
      children: jsx("p", {
        children: jsx(Text, {
          id: "Checkout.OrderSummary.includingTaxes"
        })
      })
    }), shipping != void 0 && jsxs("div", {
      "data-testid": "order-summary-shipping",
      className: "checkout-order-summary__row",
      children: [jsx("p", {
        "data-testid": "order-summary-shipping-label",
        children: shipping.isEstimated ? jsx(Text, {
          id: "Checkout.OrderSummary.estimatedShipping"
        }) : jsx(Text, {
          id: "Checkout.OrderSummary.shipping"
        })
      }), shipping.amount === 0 ? jsx("p", {
        "data-testid": "estimated-shipping",
        className: "checkout-order-summary__price",
        children: jsx(Text, {
          id: "Checkout.OrderSummary.freeShipping"
        })
      }) : jsx(Price, {
        "data-testid": "estimated-shipping",
        amount: shipping.amount,
        currency: shipping.currency,
        className: classes(["checkout-order-summary__price", className])
      })]
    }), tax != void 0 && !tax.breakdown && jsxs("div", {
      "data-testid": "order-summary-tax",
      className: "checkout-order-summary__row",
      children: [jsx("p", {
        children: jsx(Text, {
          id: "Checkout.OrderSummary.tax"
        })
      }), jsx(Price, {
        amount: tax.amount,
        currency: tax.currency,
        className: classes(["checkout-order-summary__price", className])
      })]
    }), tax != void 0 && tax.breakdown && jsxs(Fragment, {
      children: [jsx(Divider, {
        variant: "secondary"
      }), jsx("div", {
        className: "checkout-order-summary__row checkout-order-summary__row--margin-bottom",
        children: jsx("p", {
          children: jsx(Text, {
            id: "Checkout.OrderSummary.taxBreakdown"
          })
        })
      }), tax.breakdown.map((tax2) => jsxs("div", {
        "data-testid": "order-summary-tax-breakdown",
        className: "checkout-order-summary__row checkout-order-summary__row--muted",
        children: [jsx("p", {
          children: tax2.label
        }), jsx(Price, {
          amount: tax2.amount.value,
          currency: tax2.amount.currency,
          className: classes(["checkout-order-summary__price", className])
        })]
      }, tax2.label)), jsxs("div", {
        "data-testid": "order-summary-tax-breakdown-total",
        className: "checkout-order-summary__row checkout-order-summary__row--strong checkout-order-summary__row--margin-top",
        children: [jsx("p", {
          children: jsx(Text, {
            id: "Checkout.OrderSummary.taxTotal"
          })
        }), jsx(Price, {
          amount: tax.amount,
          currency: tax.currency,
          className: classes(["checkout-order-summary__price", className])
        })]
      }), jsx(Divider, {
        variant: "secondary"
      })]
    }), jsxs("div", {
      "data-testid": "order-summary-total-incl-tax",
      className: "checkout-order-summary__row checkout-order-summary__row--emphasized",
      children: [jsx("p", {
        children: jsx(Text, {
          id: "Checkout.OrderSummary.total"
        })
      }), jsx(Price, {
        amount: total.inclTax.amount,
        currency: total.inclTax.currency,
        className: classes(["checkout-order-summary__price", className])
      })]
    }), total.exclTax != void 0 && jsxs("div", {
      "data-testid": "order-summary-total-excl-tax",
      className: "checkout-order-summary__row checkout-order-summary__row--muted",
      children: [jsx("p", {
        children: jsx(Text, {
          id: "Checkout.OrderSummary.totalExclTax"
        })
      }), jsx(Price, {
        amount: total.exclTax.amount,
        currency: total.exclTax.currency,
        className: classes(["checkout-order-summary__price", className])
      })]
    })]
  });
};
const OrderSummarySkeleton = () => {
  return jsxs(Skeleton, {
    "data-testid": "order-summary-skeleton",
    className: "order-summary__skeleton",
    children: [jsx(SkeletonRow, {
      variant: "heading",
      size: "medium"
    }), jsx(SkeletonRow, {
      variant: "empty",
      size: "medium"
    }), jsx(SkeletonRow, {
      size: "large",
      fullWidth: true,
      lines: 3
    })]
  });
};
const ZERO_AMOUNT = 0;
const INCLUDE_TAX = 2;
const loadingState = {
  isLoading: true
};
function useOrderSummary() {
  const {
    config
  } = useStore();
  const isLoadingStoreConfig = config === void 0;
  const cartData = cartSignal.value.data;
  const isLoadingCartData = cartData === void 0;
  if (isLoadingStoreConfig || isLoadingCartData)
    return loadingState;
  const taxCartDisplay = config.taxCartDisplay;
  const inclTaxInSubtotal = taxCartDisplay.shoppingCartDisplaySubtotal === INCLUDE_TAX;
  const shippingAddresses = cartData == null ? void 0 : cartData.shippingAddresses;
  const hasAddresses = !!(shippingAddresses == null ? void 0 : shippingAddresses.length);
  const prices = cartData == null ? void 0 : cartData.prices;
  const grandTotal = prices == null ? void 0 : prices.grand_total;
  const hasGrandTotal = !!grandTotal;
  const subtotal = inclTaxInSubtotal ? prices == null ? void 0 : prices.subtotal_including_tax : prices == null ? void 0 : prices.subtotal_excluding_tax;
  const appliedTaxes = (prices == null ? void 0 : prices.applied_taxes) || [];
  const hasTaxesApplied = !!appliedTaxes.length;
  if (!hasGrandTotal)
    return {
      isLoading: false
    };
  const summary = {
    total: {
      inclTax: {
        amount: grandTotal.value,
        currency: grandTotal.currency
      }
    },
    subtotal: {
      amount: subtotal.value,
      currency: subtotal.currency,
      isTaxIncl: inclTaxInSubtotal
    }
  };
  if (hasTaxesApplied) {
    const totalTaxAmount = appliedTaxes.reduce((total, tax) => total + tax.amount.value, ZERO_AMOUNT);
    const firstTax = appliedTaxes[0];
    summary.tax = {
      amount: totalTaxAmount,
      currency: firstTax.amount.currency
    };
    if (taxCartDisplay.shoppingCartDisplayFullSummary) {
      summary.tax.breakdown = appliedTaxes;
    }
  }
  if (!hasTaxesApplied && taxCartDisplay.shoppingCartDisplayZeroTax) {
    summary.tax = {
      amount: ZERO_AMOUNT,
      currency: summary.total.inclTax.currency
    };
  }
  if (taxCartDisplay.shoppingCartDisplayGrandTotal) {
    const totalExclTax = summary.tax ? summary.total.inclTax.amount - summary.tax.amount : summary.total.inclTax.amount;
    summary.total.exclTax = {
      amount: totalExclTax,
      currency: summary.total.inclTax.currency
    };
  }
  if (hasAddresses) {
    const firstAddress = shippingAddresses[0];
    const shippingMethod = firstAddress == null ? void 0 : firstAddress.selectedShippingMethod;
    if (!shippingMethod)
      return {
        isLoading: false,
        summary
      };
    summary.shipping = {
      amount: shippingMethod == null ? void 0 : shippingMethod.amount.value,
      currency: shippingMethod == null ? void 0 : shippingMethod.amount.currency,
      isEstimated: false
    };
    return {
      isLoading: false,
      summary
    };
  }
  if (!selectedShippingMethodSignal.value)
    return {
      isLoading: false,
      summary
    };
  summary.shipping = {
    amount: selectedShippingMethodSignal.value.amount.value,
    currency: selectedShippingMethodSignal.value.amount.currency,
    isEstimated: true
  };
  summary.total.inclTax.amount += summary.shipping.amount;
  if (summary.total.exclTax) {
    summary.total.exclTax.amount += summary.shipping.amount;
  }
  return {
    isLoading: false,
    summary
  };
}
const OrderSummary = ({
  ...props
}) => {
  const {
    isLoading,
    summary
  } = useOrderSummary();
  return jsxs("div", {
    ...props,
    children: [!summary && jsx(OrderSummarySkeleton, {}), summary && jsx(OrderSummary$1, {
      isLoading,
      summary
    })]
  });
};
export {
  OrderSummary as O,
  useOrderSummary as u
};
//# sourceMappingURL=OrderSummary__j4R1aPPX7N.js.map
