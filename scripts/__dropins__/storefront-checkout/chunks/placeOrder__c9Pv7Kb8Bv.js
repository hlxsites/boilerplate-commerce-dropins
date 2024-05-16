import { M as MissingCart, f as dispatchApiCall, F as FetchError, e as cartSignal, U as UnexpectedError } from "./transform-shipping-methods__Jr5_k8qEf1.js";
import { g as getCheckoutDataQuery, t as transformCart } from "./transform-cart__7m47FkHC4Y.js";
import { f as fetchGraphQl, j as handleNetworkError, P as ProductStockStatus } from "./countries__BI6v0R6zIv.js";
import { events } from "@dropins/tools/event-bus.js";
import { I as ItemKind } from "./cart-item__DckGDB9umt.js";
const getCheckoutData = async (cartId) => {
  if (!cartId)
    throw new MissingCart();
  return await dispatchApiCall({
    type: "query",
    query: getCheckoutDataQuery,
    options: {
      method: "POST",
      cache: "no-cache",
      variables: {
        cartId
      }
    },
    path: "cart",
    signalType: "cart",
    transformer: transformCart
  });
};
const getStockStatusQuery = (
  /* GraphQL */
  `
  query getStockStatus($cartId: String!) {
    cart(cart_id: $cartId) {
      id
      items {
        __typename
        uid
        product {
          uid
          name
          sku
          stock_status
          only_x_left_in_stock
          ... on ConfigurableProduct {
            variants {
              attributes {
                uid
              }
              product {
                uid
                stock_status
              }
            }
          }
          ... on BundleProduct {
            items {
              uid
              options {
                uid
                product {
                  uid
                }
              }
            }
          }
        }
        quantity
        ... on ConfigurableCartItem {
          configurable_options {
            configurable_product_option_uid
            option_label
            configurable_product_option_value_uid
            value_label
          }
        }
        ... on BundleCartItem {
          bundle_options {
            uid
            values {
              uid
            }
          }
        }
      }
    }
  }
`
);
const isProductInStock = (product) => {
  return product.stock_status === ProductStockStatus.InStock;
};
const simpleStockChecker = (item) => {
  return isProductInStock(item.product);
};
const configStockChecker = (item) => {
  const {
    configurable_options: options
  } = item;
  const {
    variants
  } = item.product;
  if (!variants || !options)
    return false;
  const selectedOptions = options.map((option) => option == null ? void 0 : option.configurable_product_option_value_uid);
  const selectedVariant = variants.find((variant) => {
    if (!variant || !variant.attributes)
      return false;
    return variant.attributes.every((attribute) => attribute && selectedOptions.includes(attribute.uid));
  });
  if (!selectedVariant)
    return false;
  const {
    product: variantProduct
  } = selectedVariant;
  if (!variantProduct)
    return false;
  return isProductInStock(variantProduct);
};
const bundleStockChecker = (item) => {
  const {
    product
  } = item;
  if (!isProductInStock(product))
    return false;
  const {
    bundle_options: options
  } = item;
  const {
    items: bundle
  } = product;
  return (bundle == null ? void 0 : bundle.length) === (options == null ? void 0 : options.length);
};
const getStockChecker = (type) => {
  switch (type) {
    case "ConfigurableCartItem":
      return configStockChecker;
    case "BundleCartItem":
      return bundleStockChecker;
    default:
      return simpleStockChecker;
  }
};
const isOutOfStock = (item) => {
  const checker = getStockChecker(item.__typename);
  return checker(item) === false;
};
const getStockStatus = async (cartId) => {
  var _a;
  if (!cartId)
    throw new MissingCart();
  const {
    data,
    errors
  } = await fetchGraphQl(getStockStatusQuery, {
    method: "GET",
    cache: "no-cache",
    variables: {
      cartId
    }
  }).catch(handleNetworkError);
  if (errors)
    throw new FetchError(errors);
  const cartItems = (_a = data == null ? void 0 : data.cart) == null ? void 0 : _a.items;
  if (!cartItems || !cartItems.length)
    return ProductStockStatus.InStock;
  const outOfStock = cartItems.filter((item) => {
    if (!item)
      return false;
    return isOutOfStock(item);
  });
  return outOfStock.length > 0 ? ProductStockStatus.OutOfStock : ProductStockStatus.InStock;
};
const placeOrderMutation = (
  /* GraphQL */
  `
  mutation placeOrder($cartId: String!) {
    placeOrder(input: { cart_id: $cartId }) {
      orderV2 {
        number
        token
      }
    }
  }
`
);
function mapConfigurableOptions(options) {
  const result = [];
  for (const key in options) {
    if (options[key] === null)
      continue;
    result.push({
      optionLabel: key,
      valueLabel: options[key]
    });
  }
  return result;
}
function mapCartItems(items) {
  return items.map((item) => {
    var _a;
    const {
      uid,
      name,
      sku,
      price,
      quantity
    } = item;
    let cartItem = {
      /* We don't know if Checkout drop-in can apply Manufacturer’s Suggested Retail Price */
      canApplyMsrp: true,
      formattedPrice: "",
      id: uid,
      prices: {
        price: {
          value: price.value ?? 0,
          currency: price.currency ?? ""
        }
      },
      product: {
        /* productId not exposed by core GraphQL as number (uid is string) */
        productId: 0,
        name,
        sku,
        productType: item.kind,
        canonicalUrl: item.url || "",
        mainImageUrl: ((_a = item == null ? void 0 : item.image) == null ? void 0 : _a.src) || ""
      },
      quantity
    };
    if (item.kind === ItemKind.Configurable) {
      cartItem.configurableOptions = // @ts-ignore
      mapConfigurableOptions(item.configurableOptions);
    }
    return cartItem;
  }, []);
}
function buildShoppingCartContext(cart) {
  var _a, _b, _c, _d;
  const {
    id,
    items,
    prices,
    totalQty
  } = cart;
  const hasItems = !!(items == null ? void 0 : items.length);
  let shoppingCartContext = {
    id,
    prices: {
      subtotalExcludingTax: {
        value: ((_a = prices == null ? void 0 : prices.subtotal_excluding_tax) == null ? void 0 : _a.value) ?? 0,
        currency: ((_b = prices == null ? void 0 : prices.subtotal_excluding_tax) == null ? void 0 : _b.currency) ?? ""
      },
      subtotalIncludingTax: {
        value: ((_c = prices == null ? void 0 : prices.subtotal_including_tax) == null ? void 0 : _c.value) ?? 0,
        currency: ((_d = prices == null ? void 0 : prices.subtotal_including_tax) == null ? void 0 : _d.currency) ?? ""
      }
    },
    totalQuantity: totalQty,
    possibleOnepageCheckout: true
  };
  if (hasItems) {
    shoppingCartContext.items = mapCartItems(items);
  }
  return shoppingCartContext;
}
function calculateTaxes(taxes) {
  const totalTaxAmount = taxes.reduce((total, tax) => total + tax.amount.value, 0);
  return totalTaxAmount;
}
function buildShippingMethod(method) {
  return {
    shippingMethod: `${method.carrier.code}_${method.code}`,
    shippingAmount: method.amount.value ?? 0
  };
}
function buildOrderContext(orderId, cart) {
  var _a, _b, _c, _d, _e;
  const {
    coupons,
    email,
    prices,
    selectedPaymentMethod,
    shippingAddresses
  } = cart;
  const hasAddresses = !!(shippingAddresses == null ? void 0 : shippingAddresses.length);
  let orderContext = {
    appliedCouponCode: ((_a = coupons[0]) == null ? void 0 : _a.code) ?? "",
    email: email ?? "",
    grandTotal: ((_b = prices == null ? void 0 : prices.grand_total) == null ? void 0 : _b.value) ?? 0,
    orderId,
    orderType: "checkout",
    otherTax: 0,
    paymentMethodCode: (selectedPaymentMethod == null ? void 0 : selectedPaymentMethod.code) ?? "",
    paymentMethodName: (selectedPaymentMethod == null ? void 0 : selectedPaymentMethod.title) ?? "",
    payments: [
      /* By now the Checkout drop-in is only supporting one payment method */
      {
        paymentMethodCode: (selectedPaymentMethod == null ? void 0 : selectedPaymentMethod.code) ?? "",
        paymentMethodName: (selectedPaymentMethod == null ? void 0 : selectedPaymentMethod.title) ?? "",
        total: ((_c = prices == null ? void 0 : prices.grand_total) == null ? void 0 : _c.value) ?? 0
      }
    ],
    salesTax: calculateTaxes((prices == null ? void 0 : prices.applied_taxes) ?? []),
    subtotalExcludingTax: ((_d = prices == null ? void 0 : prices.subtotal_excluding_tax) == null ? void 0 : _d.value) ?? 0,
    subtotalIncludingTax: ((_e = prices == null ? void 0 : prices.subtotal_including_tax) == null ? void 0 : _e.value) ?? 0
  };
  if (hasAddresses) {
    const firstAddress = shippingAddresses[0];
    const selectedShippingMethod = firstAddress == null ? void 0 : firstAddress.selectedShippingMethod;
    if (selectedShippingMethod) {
      orderContext.shipping = buildShippingMethod(selectedShippingMethod);
    }
  }
  return orderContext;
}
function setContext(orderId) {
  const {
    data
  } = cartSignal.value;
  const shoppingCartContext = buildShoppingCartContext(data);
  const orderContext = buildOrderContext(orderId, data);
  window.adobeDataLayer = window.adobeDataLayer || [];
  window.adobeDataLayer.push({
    shoppingCartContext: null
  }, {
    orderContext: null
  });
  window.adobeDataLayer.push({
    shoppingCartContext
  }, {
    orderContext
  });
}
function publishPlaceOrderEvent() {
  window.adobeDataLayer = window.adobeDataLayer || [];
  window.adobeDataLayer.push((acdl) => {
    const state = acdl.getState() || {};
    acdl.push({
      event: "place-order",
      eventInfo: {
        ...state
      }
    });
  });
}
function completeCheckout(orderId) {
  setContext(orderId);
  publishPlaceOrderEvent();
}
function handleErrors(errors) {
  const isFetchError = errors.every((error) => {
    var _a;
    return (_a = error.extensions) == null ? void 0 : _a.category;
  });
  if (isFetchError)
    throw new FetchError(errors);
  throw new UnexpectedError(errors[0].message);
}
const placeOrder = async (cartId) => {
  if (!cartId)
    throw new MissingCart();
  const {
    data,
    errors
  } = await fetchGraphQl(placeOrderMutation, {
    variables: {
      cartId
    }
  }).catch(handleNetworkError);
  if (errors)
    handleErrors(errors);
  const order = data.placeOrder.orderV2;
  completeCheckout(order.number);
  events.emit("cart/reset", void 0);
  events.emit("checkout/order", order);
};
export {
  getStockStatus as a,
  getCheckoutData as g,
  placeOrder as p
};
//# sourceMappingURL=placeOrder__c9Pv7Kb8Bv.js.map
