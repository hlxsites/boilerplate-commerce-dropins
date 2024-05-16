var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { events } from "@dropins/tools/event-bus.js";
import { FetchGraphQL } from "@dropins/tools/fetch-graphql.js";
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
function getCookie(cookieName) {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.indexOf(`${cookieName}=`) === 0) {
      return cookie.substring(cookieName.length + 1);
    }
  }
  return null;
}
const _state = /* @__PURE__ */ (() => ({
  cartId: null,
  authenticated: false
}))();
const state = new Proxy(_state, {
  set(target, key, value) {
    var _a;
    target[key] = value;
    if (key === "cartId") {
      if (value === state.cartId)
        return true;
      if (value === null) {
        document.cookie = `DROPIN__CART__CART-ID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
        return true;
      }
      const expiresInDays = (_a = state.config) == null ? void 0 : _a.cartExpiresInDays;
      if (!expiresInDays) {
        console.warn('Missing "expiresInDays" config. Cookie expiration will default to 30 days.');
      }
      const expires = /* @__PURE__ */ new Date();
      expires.setDate(expires.getDate() + (expiresInDays ?? 30));
      document.cookie = `DROPIN__CART__CART-ID=${value}; expires=${expires.toUTCString()}; path=/`;
    }
    return true;
  },
  get(target, key) {
    if (key === "cartId") {
      return getCookie("DROPIN__CART__CART-ID");
    }
    return target[key];
  }
});
function setPersistedData(data) {
  if (data) {
    sessionStorage.setItem("DROPIN__CART__CART__DATA", JSON.stringify(data));
  } else {
    sessionStorage.removeItem("DROPIN__CART__CART__DATA");
  }
}
function getPersistedData() {
  const data = sessionStorage.getItem("DROPIN__CART__CART__DATA");
  if (data)
    return JSON.parse(data);
  return null;
}
const initialize = new Initializer({
  init: async (_config) => {
    const config2 = {
      disableGuestCart: false,
      ..._config
    };
    initialize.config.setConfig(config2);
    initializeCart();
  },
  listeners: () => [events.on("authenticated", async (authenticated) => {
    if (authenticated !== state.authenticated) {
      state.authenticated = authenticated;
      initializeCart().catch(console.error);
    }
  }), events.on("locale", async (locale) => {
    if (locale !== state.locale) {
      state.locale = locale;
      initializeCart().catch(console.error);
    }
  }), events.on("cart/reset", () => {
    resetCart().catch(console.error);
  }), events.on("cart/data", (payload) => {
    setPersistedData(payload);
  })]
});
const config = initialize.config;
const {
  setEndpoint,
  setFetchGraphQlHeader,
  removeFetchGraphQlHeader,
  setFetchGraphQlHeaders,
  fetchGraphQl,
  getConfig
} = new FetchGraphQL().getMethods();
function transformCart(data) {
  var _a, _b, _c, _d, _e, _f, _g;
  if (!data)
    return null;
  return {
    id: data.id,
    totalQuantity: transformQuantity(data),
    errors: transformErrors(data == null ? void 0 : data.itemsV2),
    items: transformItems(data == null ? void 0 : data.itemsV2),
    miniCartMaxItems: transformItems(data == null ? void 0 : data.itemsV2).slice(0, ((_a = state.config) == null ? void 0 : _a.miniCartMaxItemsDisplay) ?? 10),
    total: {
      value: data.prices.grand_total.value,
      currency: data.prices.grand_total.currency
    },
    subtotal: {
      excludingTax: {
        value: (_b = data.prices.subtotal_excluding_tax) == null ? void 0 : _b.value,
        currency: (_c = data.prices.subtotal_excluding_tax) == null ? void 0 : _c.currency
      },
      includingTax: {
        value: (_d = data.prices.subtotal_including_tax) == null ? void 0 : _d.value,
        currency: (_e = data.prices.subtotal_including_tax) == null ? void 0 : _e.currency
      },
      includingDiscountOnly: {
        value: (_f = data.prices.subtotal_with_discount_excluding_tax) == null ? void 0 : _f.value,
        currency: (_g = data.prices.subtotal_with_discount_excluding_tax) == null ? void 0 : _g.currency
      }
    },
    appliedTaxes: transformTotalPriceModifiers(data.prices.applied_taxes),
    totalTax: calculateTotalTax(data.prices.applied_taxes),
    appliedDiscounts: transformTotalPriceModifiers(data.prices.discounts),
    isVirtual: data.is_virtual,
    addresses: {
      shipping: data.shipping_addresses && transformAddresses(data.shipping_addresses)
    }
  };
}
function calculateTotalTax(data) {
  if (!(data == null ? void 0 : data.length))
    return null;
  return data.reduce((acc, item) => {
    return {
      value: acc.value + item.amount.value,
      currency: item.amount.currency
    };
  }, {
    value: 0,
    currency: ""
  });
}
function transformItems(data) {
  var _a;
  if (!((_a = data == null ? void 0 : data.items) == null ? void 0 : _a.length))
    return [];
  return data.items.map((item) => {
    var _a2, _b, _c, _d, _e;
    return {
      itemType: item.__typename,
      uid: item.uid,
      url: {
        urlKey: item.product.url_key,
        categories: item.product.categories.map((category) => category.url_key)
      },
      quantity: item.quantity,
      sku: item.product.sku,
      name: item.product.name,
      image: {
        src: item.product.thumbnail.url,
        alt: item.product.thumbnail.label
      },
      price: {
        value: item.prices.price.value,
        currency: item.prices.price.currency
      },
      links: transformLinks(item.links),
      total: item.configurable_options || item.__typename === "GiftCardCartItem" ? {
        value: item.prices.row_total.value,
        currency: item.prices.row_total.currency
      } : {
        value: ((_a2 = item.product.price_range) == null ? void 0 : _a2.maximum_price.regular_price.value) * item.quantity,
        currency: (_b = item.product.price_range) == null ? void 0 : _b.maximum_price.regular_price.currency
      },
      discount: {
        value: item.prices.total_item_discount.value,
        currency: item.prices.total_item_discount.currency
      },
      regularPrice: item.configurable_options || item.__typename === "GiftCardCartItem" ? {
        value: item.prices.price.value,
        currency: item.prices.price.currency
      } : {
        value: (_c = item.product.price_range) == null ? void 0 : _c.maximum_price.regular_price.value,
        currency: (_d = item.product.price_range) == null ? void 0 : _d.maximum_price.regular_price.currency
      },
      // Retrieve data from API when LYNX-387 is completed
      discounted: !item.configurable_options && item.__typename !== "GiftCardCartItem" && Number(((_e = item.product.price_range) == null ? void 0 : _e.maximum_price.regular_price.value) * item.quantity).toFixed(2) !== Number(item.prices.row_total.value).toFixed(2),
      selectedOptions: transformSelectedOptions(item.configurable_options),
      sender: item.__typename === "GiftCardCartItem" ? item.sender_name : null,
      senderEmail: item.__typename === "GiftCardCartItem" ? item.sender_email : null,
      recipient: item.__typename === "GiftCardCartItem" ? item.recipient_name : null,
      recipientEmail: item.__typename === "GiftCardCartItem" ? item.recipient_email : null,
      message: item.__typename === "GiftCardCartItem" ? item.message : null,
      discountedTotal: !item.configurable_options && item.__typename !== "GiftCardCartItem" && {
        value: item.prices.row_total.value,
        currency: item.prices.row_total.currency
      }
    };
  });
}
function transformErrors(data) {
  var _a;
  const result = (_a = data == null ? void 0 : data.items) == null ? void 0 : _a.reduce((acc, item) => {
    var _a2;
    (_a2 = item.errors) == null ? void 0 : _a2.forEach((error) => {
      acc.push({
        uid: item.uid,
        text: error.message
      });
    });
    return acc;
  }, []);
  return (result == null ? void 0 : result.length) ? result : null;
}
function transformTotalPriceModifiers(data) {
  if (!(data == null ? void 0 : data.length))
    return [];
  return data.map((item) => ({
    amount: {
      value: item.amount.value,
      currency: item.amount.currency
    },
    label: item.label
  }));
}
function transformSelectedOptions(data) {
  const selected = data == null ? void 0 : data.map((option) => ({
    uid: option.configurable_product_option_uid,
    label: option.option_label,
    value: option.value_label
  }));
  const selectedOptions = {};
  selected == null ? void 0 : selected.forEach((option) => {
    selectedOptions[option.label] = option.value;
  });
  return Object.keys(selectedOptions).length > 0 ? selectedOptions : null;
}
function transformQuantity(data) {
  var _a, _b;
  if (((_a = state.config) == null ? void 0 : _a.cartSummaryDisplayTotal) === 0)
    return data.itemsV2.items.length;
  if (((_b = state.config) == null ? void 0 : _b.cartSummaryDisplayTotal) === 1)
    return data.total_quantity;
  return data.itemsV2.items.length;
}
function transformLinks(links) {
  return (links == null ? void 0 : links.length) > 0 ? {
    count: links.length,
    result: links.map((link) => link.title).join(", ")
  } : null;
}
function transformAddresses(data) {
  if (!(data == null ? void 0 : data.length))
    return null;
  return data.map((address) => {
    var _a, _b;
    return {
      countryCode: (_a = address.country) == null ? void 0 : _a.code,
      zipCode: address.postcode,
      regionCode: (_b = address.region) == null ? void 0 : _b.code
    };
  });
}
function transformStoreConfig(data) {
  if (!data)
    return null;
  return {
    displayMiniCart: data.minicart_display,
    miniCartMaxItemsDisplay: data.minicart_max_items,
    cartExpiresInDays: data.cart_expires_in_days,
    cartSummaryDisplayTotal: data.cart_summary_display_quantity,
    defaultCountry: data.default_country,
    categoryFixedProductTaxDisplaySetting: data.category_fixed_product_tax_display_setting,
    productFixedProductTaxDisplaySetting: data.product_fixed_product_tax_display_setting,
    salesFixedProductTaxDisplaySetting: data.sales_fixed_product_tax_display_setting,
    shoppingCartDisplayZeroTax: data.shopping_cart_display_zero_tax
  };
}
const handleFetchError = (errors) => {
  const unauthorized = errors.findIndex(({
    extensions
  }) => (extensions == null ? void 0 : extensions.category) === "graphql-authorization") > -1;
  const missingCart = errors.findIndex(({
    extensions
  }) => (extensions == null ? void 0 : extensions.category) === "graphql-no-such-entity") > -1;
  const errorMessage = errors.map((e) => e.message).join(" ");
  if (unauthorized || missingCart) {
    resetCart();
    console.error(errorMessage);
    return null;
  }
  throw Error(errorMessage);
};
const CART_FRAGMENT = `
fragment CartFragment on Cart {
  id
  total_quantity
  is_virtual
  prices {
    subtotal_with_discount_excluding_tax {
      currency
      value
    }
    subtotal_including_tax {
      currency
      value
    }
    subtotal_excluding_tax {
      currency
      value
    }
    grand_total {
      currency
      value
    }
    applied_taxes {
      label,
      amount {
        value
        currency
      }
    }
    discounts {
      amount {
        value
        currency
      }
      label
    }
  }
  itemsV2 (
      pageSize:$pageSize,
      currentPage:$currentPage,
      sort: $itemsSortInput
    ) {
    items {
      __typename
      uid
      quantity
    
      errors {
        code
        message
      }
      
      prices {
        price {
          value
          currency
        }
        total_item_discount {
          value
          currency
        }
        row_total {
          value
          currency
        }
      }
  
      product {
        name
        sku
        thumbnail {
          url
          label
        }
        url_key
        url_suffix
        categories {
          url_path
          url_key
        }
        price_range {
          maximum_price {
            regular_price {
              value
              currency
            }
          }
        }
      }
      ...on SimpleCartItem {
        customizable_options {
          customizable_option_uid
          label
          values {
            label
          }
        }
      }
      ... on ConfigurableCartItem {
        configurable_options {
          configurable_product_option_uid
          option_label
          value_label
        }
        configured_variant {
          uid
          thumbnail {
            label
            url
          }
        }
      }
      ... on DownloadableCartItem {
        links {
          sort_order
          title
        }
      }
      ... on BundleCartItem {
        bundle_options {
          uid
          label
          values {
            uid
            label
            quantity
            price
          }
        }
      }
      ... on GiftCardCartItem {
        message
        recipient_name
        sender_name
      }
    }
  }
  shipping_addresses {
    country {
      code
    }
    region {
      code
    }
    postcode
  }
}
`;
const CART_ITEMS_PAGINATION_ARGUMENTS = `
  $pageSize: Int! = 100,
  $currentPage: Int! = 1,
  $itemsSortInput: QuoteItemsSortInput! = {field: CREATED_AT, order: DESC}
`;
const GUEST_CART_QUERY = `
  query GUEST_CART_QUERY(
      $cartId: String!,
      ${CART_ITEMS_PAGINATION_ARGUMENTS}
    ) {

    cart(cart_id: $cartId){
      ...CartFragment
    }
  }

  ${CART_FRAGMENT}
`;
const CUSTOMER_CART_QUERY = `
  query CUSTOMER_CART_QUERY(
      ${CART_ITEMS_PAGINATION_ARGUMENTS}
    ) {

    cart: customerCart {
      ...CartFragment
    }
  }

  ${CART_FRAGMENT}
`;
const getCartData = async () => {
  const authenticated = state.authenticated;
  const cartId = state.cartId;
  if (authenticated) {
    return fetchGraphQl(CUSTOMER_CART_QUERY, {
      method: "GET"
    }).then(({
      errors,
      data
    }) => {
      if (errors)
        return handleFetchError(errors);
      return transformCart(data.cart);
    });
  }
  if (!cartId)
    throw new Error("No cart ID found");
  return fetchGraphQl(GUEST_CART_QUERY, {
    method: "GET",
    cache: "no-cache",
    variables: {
      cartId
    }
  }).then(({
    errors,
    data
  }) => {
    if (errors)
      return handleFetchError(errors);
    return transformCart(data.cart);
  });
};
const MERGE_CARTS_MUTATION = `
  mutation MERGE_CARTS_MUTATION(
      $guestCartId: String!, 
      $customerCartId: String!,
      ${CART_ITEMS_PAGINATION_ARGUMENTS}
    ) {
    mergeCarts(
      source_cart_id: $guestCartId,
      destination_cart_id: $customerCartId
    ) {
      ...CartFragment 
    }
  }

  ${CART_FRAGMENT}
`;
const initializeCart = async () => {
  state.config = await getStoreConfig();
  const payload = state.authenticated ? await getCustomerCartPayload() : await getGuestCartPayload();
  events.emit("cart/initialized", payload);
  events.emit("cart/data", payload);
  return payload;
};
async function getCustomerCartPayload() {
  const existingCartId = state.cartId;
  const cart = await getCartData();
  if (!cart)
    return null;
  state.cartId = cart.id;
  if (!existingCartId || cart.id === existingCartId)
    return cart;
  return await fetchGraphQl(MERGE_CARTS_MUTATION, {
    variables: {
      guestCartId: existingCartId,
      customerCartId: cart.id
    }
  }).then(({
    data
  }) => {
    return transformCart(data.mergeCarts);
  }).catch(() => {
    console.error("Could not merge carts");
    return cart;
  });
}
async function getGuestCartPayload() {
  if (config.getConfig().disableGuestCart === true) {
    return null;
  }
  if (!state.cartId) {
    return null;
  }
  try {
    return await getCartData();
  } catch (error) {
    console.error(error);
    return null;
  }
}
const resetCart = () => {
  state.cartId = null;
  state.authenticated = false;
  return initializeCart();
};
const STORE_CONFIG_QUERY = `
query STORE_CONFIG_QUERY {
  storeConfig {
    minicart_display 
    minicart_max_items
    cart_expires_in_days 
    cart_summary_display_quantity
    default_country
    category_fixed_product_tax_display_setting
    product_fixed_product_tax_display_setting
    sales_fixed_product_tax_display_setting
    shopping_cart_display_zero_tax
  }
}
`;
const getStoreConfig = async () => {
  return fetchGraphQl(STORE_CONFIG_QUERY, {
    method: "GET",
    cache: "force-cache"
  }).then(({
    errors,
    data
  }) => {
    if (errors)
      return handleFetchError(errors);
    return transformStoreConfig(data.storeConfig);
  });
};
export {
  CART_ITEMS_PAGINATION_ARGUMENTS as C,
  CART_FRAGMENT as a,
  setEndpoint as b,
  config as c,
  setFetchGraphQlHeader as d,
  setFetchGraphQlHeaders as e,
  fetchGraphQl as f,
  getConfig as g,
  handleFetchError as h,
  initialize as i,
  getCartData as j,
  initializeCart as k,
  resetCart as l,
  getStoreConfig as m,
  getPersistedData as n,
  removeFetchGraphQlHeader as r,
  state as s,
  transformCart as t
};
//# sourceMappingURL=getStoreConfig__D5TZNZKL7r.js.map
