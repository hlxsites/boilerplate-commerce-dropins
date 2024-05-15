import { P as ProductStockStatus } from "./countries__BNdKWz0f2q.js";
import { t as transformShippingMethods, h as transformSelectedShippingMethod } from "./transform-shipping-methods__Csm-KieitR.js";
import { S as StockStatus, I as ItemKind } from "./cart-item__DckGDB9umt.js";
const CHECKOUT_DATA_FRAGMENT = (
  /* GraphQL */
  `
  fragment CheckoutData on Cart {
    is_virtual
    email
    billing_address {
      city
      country {
        code
        label
      }
      firstname
      lastname
      company
      postcode
      vat_id
      region {
        region_id
        code
        label
      }
      street
      telephone
      custom_attributes {
        ... on AttributeValue {
          code
          value
        }
      }
    }
    shipping_addresses {
      firstname
      lastname
      company
      street
      city
      postcode
      vat_id
      region {
        region_id
        code
        label
      }
      country {
        code
        label
      }
      telephone
      custom_attributes {
        ... on AttributeValue {
          code
          value
        }
      }
      available_shipping_methods {
        amount {
          currency
          value
        }
        available
        carrier_code
        carrier_title
        error_message
        method_code
        method_title
        price_excl_tax {
          value
          currency
        }
        price_incl_tax {
          value
          currency
        }
      }
      selected_shipping_method {
        amount {
          value
          currency
        }
        carrier_code
        carrier_title
        method_code
        method_title
      }
    }
    available_payment_methods {
      code
      title
    }
    selected_payment_method {
      code
      title
    }
    applied_coupons {
      code
    }
    prices {
      grand_total {
        value
        currency
      }
      subtotal_excluding_tax {
        value
        currency
      }
      subtotal_including_tax {
        value
        currency
      }
      applied_taxes {
        label
        amount {
          currency
          value
        }
      }
    }
  }
`
);
const CART_SUMMARY_FRAGMENT = (
  /* GraphQL */
  `
  fragment CartSummaryItems on Cart {
    total_quantity
    itemsV2(sort: { field: CREATED_AT, order: DESC }) {
      total_count
      items {
        __typename
        uid
        product {
          __typename
          uid
          name
          sku
          url_key
          thumbnail {
            url
            label
          }
          small_image {
            url
          }
          price_range {
            maximum_price {
              regular_price {
                currency
                value
              }
            }
          }
          stock_status
          only_x_left_in_stock
        }
        prices {
          fixed_product_taxes {
            amount {
              currency
              value
            }
            label
          }
          price {
            currency
            value
          }
          price_including_tax {
            currency
            value
          }
          row_total {
            value
            currency
          }
          row_total_including_tax {
            value
            currency
          }
          total_item_discount {
            value
            currency
          }
        }
        quantity
        errors {
          code
          message
        }
        ... on SimpleCartItem {
          customizable_options {
            label
            values {
              label
              value
            }
          }
        }
        ... on VirtualCartItem {
          customizable_options {
            label
            values {
              label
              value
            }
          }
        }
        ... on ConfigurableCartItem {
          customizable_options {
            label
            values {
              label
              value
            }
          }
          configurable_options {
            id
            configurable_product_option_uid
            option_label
            configurable_product_option_value_uid
            value_label
            value_id
          }
          configured_variant {
            thumbnail {
              label
              url
            }
          }
        }
        ... on GiftCardCartItem {
          sender_name
          sender_email
          recipient_name
          recipient_email
          message
          customizable_options {
            label
            values {
              label
              value
            }
          }
        }
        ... on DownloadableCartItem {
          links {
            title
          }
          customizable_options {
            label
            values {
              label
              value
            }
          }
        }
      }
    }
  }
`
);
const getCheckoutDataQuery = (
  /* GraphQL */
  `
  query getCheckoutData($cartId: String!) {
    cart(cart_id: $cartId) {
      id
      ...CheckoutData
      ...CartSummaryItems
    }
  }
  ${CHECKOUT_DATA_FRAGMENT}
  ${CART_SUMMARY_FRAGMENT}
`
);
function transformType(typename) {
  switch (typename) {
    case "SimpleCartItem":
      return ItemKind.Simple;
    case "ConfigurableCartItem":
      return ItemKind.Configurable;
    case "DownloadableCartItem":
      return ItemKind.Downloadable;
    case "GiftCardCartItem":
      return ItemKind.GiftCard;
    case "VirtualCartItem":
      return ItemKind.Virtual;
    case "BundleCartItem":
      return ItemKind.Bundle;
    default:
      throw new Error(`Unknown item kind: ${typename}`);
  }
}
function transformConfigurableOptions(item) {
  if (item.__typename !== "ConfigurableCartItem")
    return;
  const configurableOptions = {};
  for (const option of item.configurable_options) {
    configurableOptions[option.option_label] = option.value_label;
  }
  return configurableOptions;
}
function transformCustomizableOptions(item) {
  if (!("customizable_options" in item))
    return;
  const customizableOptions = {};
  for (const option of item.customizable_options) {
    customizableOptions[option.label] = option.values.map((optionValue) => optionValue.label || optionValue.value).join(", ");
  }
  return customizableOptions;
}
function transformImage(item) {
  var _a, _b;
  const isConfigurable = item.__typename === "ConfigurableCartItem";
  const thumbnail = isConfigurable ? (_a = item.configured_variant) == null ? void 0 : _a.thumbnail : (_b = item.product) == null ? void 0 : _b.thumbnail;
  if (!thumbnail || !thumbnail.url)
    return;
  const image = {
    src: thumbnail.url
  };
  const alt = String(thumbnail.label || item.product.name);
  if (alt !== "")
    image.alt = alt;
  return image;
}
function transformCartItem(item) {
  var _a, _b;
  return {
    kind: transformType(item.__typename),
    name: item.product.name,
    quantity: item.quantity,
    sku: item.product.sku,
    uid: item.uid,
    url: (_a = item.product) == null ? void 0 : _a.url_key,
    image: transformImage(item),
    price: {
      value: item.prices.price.value,
      currency: item.prices.price.currency
    },
    priceInclTax: {
      value: item.prices.price_including_tax.value,
      currency: item.prices.price_including_tax.currency
    },
    total: {
      value: item.prices.row_total.value,
      currency: item.prices.row_total.currency
    },
    totalInclTax: {
      value: item.prices.row_total_including_tax.value,
      currency: item.prices.row_total_including_tax.currency
    },
    discount: {
      value: item.prices.total_item_discount.value,
      currency: item.prices.total_item_discount.currency
    },
    regularPrice: {
      value: item.product.price_range.maximum_price.regular_price.value,
      currency: item.product.price_range.maximum_price.regular_price.currency
    },
    discounted: item.product.price_range.maximum_price.regular_price.value * item.quantity !== item.prices.row_total.value,
    stockStatus: item.product.stock_status === ProductStockStatus.OutOfStock ? StockStatus.OutOfStock : StockStatus.InStock,
    configurableOptions: transformConfigurableOptions(item),
    customizableOptions: transformCustomizableOptions(item),
    links: item.__typename === "DownloadableCartItem" ? (_b = item.links) == null ? void 0 : _b.map((option) => option == null ? void 0 : option.title) : void 0,
    onlyXLeftInStock: item.product.only_x_left_in_stock,
    senderName: item.__typename === "GiftCardCartItem" ? item.sender_name : void 0,
    senderEmail: item.__typename === "GiftCardCartItem" ? item.sender_email : void 0,
    recipientEmail: item.__typename === "GiftCardCartItem" ? item.recipient_email : void 0,
    recipientName: item.__typename === "GiftCardCartItem" ? item.recipient_name : void 0,
    message: item.__typename === "GiftCardCartItem" ? item.message : void 0
  };
}
function transformCartItems(items) {
  return items.filter(Boolean).map((item) => transformCartItem(item));
}
function transformCartItemsV2(itemsV2) {
  if (!itemsV2)
    return [];
  return transformCartItems(itemsV2.items);
}
const transformSelectedPaymentMethod = (data) => {
  if (!data)
    return;
  return {
    code: data.code,
    title: data.title
  };
};
const transformAvailablePaymentMethods = (data) => {
  if (!data)
    return;
  return data.filter((method) => !!method).map((method) => {
    const {
      code,
      title
    } = method;
    return {
      code,
      title
    };
  });
};
const isValidAddressRegion = (region) => {
  if (!region)
    return false;
  return !!region.code && !!region.label;
};
const transformAddressRegion = (data) => {
  if (!isValidAddressRegion(data))
    return;
  const {
    code,
    label,
    region_id
  } = data;
  if (!region_id)
    return {
      code,
      name: label
    };
  return {
    code,
    name: label,
    id: region_id
  };
};
const transformAddressCountry = (data) => {
  const {
    code,
    label
  } = data;
  return {
    value: code,
    label
  };
};
const isValidCustomAttribute = (attribute) => {
  if (!attribute)
    return false;
  return "code" in attribute && "value" in attribute;
};
const transformCustomAttributes = (data) => {
  return data.filter(isValidCustomAttribute).map((attribute) => {
    const {
      code,
      value
    } = attribute;
    return {
      code,
      value
    };
  });
};
const buildBaseAddress = (data) => {
  const street = data.street.filter(Boolean);
  return {
    firstName: data.firstname,
    lastName: data.lastname,
    company: data.company || void 0,
    city: data.city,
    street,
    postCode: data.postcode || void 0,
    vatId: data.vat_id || void 0,
    telephone: data.telephone || void 0,
    region: transformAddressRegion(data.region),
    country: transformAddressCountry(data.country),
    customAttributes: transformCustomAttributes(data.custom_attributes)
  };
};
const transformBillingAddress = (data) => {
  if (!data)
    return;
  return buildBaseAddress(data);
};
const transformShippingAddresses = (data) => {
  return data.filter((address) => !!address).map((address) => {
    const {
      available_shipping_methods,
      selected_shipping_method,
      ...baseData
    } = address;
    return {
      ...buildBaseAddress(baseData),
      availableShippingMethods: transformShippingMethods(available_shipping_methods),
      selectedShippingMethod: transformSelectedShippingMethod(selected_shipping_method)
    };
  });
};
const transformCoupons = (coupons) => {
  if (!coupons)
    return [];
  return coupons.filter(Boolean).map((coupon) => {
    const {
      code
    } = coupon;
    return {
      code
    };
  });
};
const transformCart = (cart) => {
  return {
    coupons: transformCoupons(cart.applied_coupons),
    availablePaymentMethods: transformAvailablePaymentMethods(cart.available_payment_methods),
    billingAddress: transformBillingAddress(cart.billing_address),
    email: cart.email ?? void 0,
    id: cart.id,
    virtual: cart.is_virtual,
    items: transformCartItemsV2(cart.itemsV2),
    prices: cart.prices,
    selectedPaymentMethod: transformSelectedPaymentMethod(cart.selected_payment_method),
    shippingAddresses: transformShippingAddresses(cart.shipping_addresses),
    totalQty: cart.total_quantity
  };
};
export {
  CHECKOUT_DATA_FRAGMENT as C,
  CART_SUMMARY_FRAGMENT as a,
  getCheckoutDataQuery as g,
  transformCart as t
};
