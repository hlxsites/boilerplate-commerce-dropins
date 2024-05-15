import { createContext, Component, options, isValidElement } from "@dropins/tools/preact.js";
import { useContext, useMemo, useState, useEffect } from "@dropins/tools/preact-hooks.js";
import { events } from "@dropins/tools/event-bus.js";
import { jsx } from "@dropins/tools/preact-jsx-runtime.js";
import { FetchGraphQL } from "@dropins/tools/fetch-graphql.js";
const ServicesContext = createContext({});
function ServicesProvider({
  children,
  services
}) {
  return jsx(ServicesContext.Provider, {
    value: services,
    children
  });
}
function useServices() {
  const context = useContext(ServicesContext);
  if (context !== void 0)
    return context;
  throw new Error("useServices must be used within a ServicesProvider");
}
const {
  setEndpoint,
  setFetchGraphQlHeader,
  removeFetchGraphQlHeader,
  setFetchGraphQlHeaders,
  fetchGraphQl,
  getConfig
} = new FetchGraphQL().getMethods();
const handleNetworkError = (error) => {
  const isAbortError = error instanceof DOMException && error.name === "AbortError";
  if (!isAbortError) {
    events.emit("error", {
      source: "checkout",
      type: "network",
      error
    });
  }
  throw error;
};
const fetchAddressFormFieldsQuery = (
  /* GraphQL */
  `
  query fetchAddressFormFields {
    attributesForm(formCode: "customer_register_address") {
      items {
        frontend_input
        code
        label
        default_value
        is_required
        options {
          label
          value
          is_default
        }
        ... on CustomerAttributeMetadata {
          multiline_count
          sort_order
          validate_rules {
            name
            value
          }
        }
      }
      errors {
        message
        type
      }
    }
  }
`
);
const fetchAddressFormFields = async () => {
  var _a;
  const {
    data,
    errors
  } = await fetchGraphQl(fetchAddressFormFieldsQuery, {
    method: "GET",
    cache: "no-cache"
  }).catch(handleNetworkError);
  if (errors)
    throw Error(errors.map((e2) => e2.message).join(" "));
  return ((_a = data == null ? void 0 : data.attributesForm) == null ? void 0 : _a.items) || [];
};
function i() {
  throw new Error("Cycle detected");
}
var t = Symbol.for("preact-signals");
function r() {
  if (!(v > 1)) {
    var i2, t2 = false;
    while (void 0 !== f) {
      var r2 = f;
      f = void 0;
      e++;
      while (void 0 !== r2) {
        var n = r2.o;
        r2.o = void 0;
        r2.f &= -3;
        if (!(8 & r2.f) && l$1(r2))
          try {
            r2.c();
          } catch (r3) {
            if (!t2) {
              i2 = r3;
              t2 = true;
            }
          }
        r2 = n;
      }
    }
    e = 0;
    v--;
    if (t2)
      throw i2;
  } else
    v--;
}
var o = void 0;
var f = void 0, v = 0, e = 0, u = 0;
function c(i2) {
  if (void 0 !== o) {
    var t2 = i2.n;
    if (void 0 === t2 || t2.t !== o) {
      t2 = { i: 0, S: i2, p: o.s, n: void 0, t: o, e: void 0, x: void 0, r: t2 };
      if (void 0 !== o.s)
        o.s.n = t2;
      o.s = t2;
      i2.n = t2;
      if (32 & o.f)
        i2.S(t2);
      return t2;
    } else if (-1 === t2.i) {
      t2.i = 0;
      if (void 0 !== t2.n) {
        t2.n.p = t2.p;
        if (void 0 !== t2.p)
          t2.p.n = t2.n;
        t2.p = o.s;
        t2.n = void 0;
        o.s.n = t2;
        o.s = t2;
      }
      return t2;
    }
  }
}
function d$1(i2) {
  this.v = i2;
  this.i = 0;
  this.n = void 0;
  this.t = void 0;
}
d$1.prototype.brand = t;
d$1.prototype.h = function() {
  return true;
};
d$1.prototype.S = function(i2) {
  if (this.t !== i2 && void 0 === i2.e) {
    i2.x = this.t;
    if (void 0 !== this.t)
      this.t.e = i2;
    this.t = i2;
  }
};
d$1.prototype.U = function(i2) {
  if (void 0 !== this.t) {
    var t2 = i2.e, r2 = i2.x;
    if (void 0 !== t2) {
      t2.x = r2;
      i2.e = void 0;
    }
    if (void 0 !== r2) {
      r2.e = t2;
      i2.x = void 0;
    }
    if (i2 === this.t)
      this.t = r2;
  }
};
d$1.prototype.subscribe = function(i2) {
  var t2 = this;
  return O(function() {
    var r2 = t2.value, n = 32 & this.f;
    this.f &= -33;
    try {
      i2(r2);
    } finally {
      this.f |= n;
    }
  });
};
d$1.prototype.valueOf = function() {
  return this.value;
};
d$1.prototype.toString = function() {
  return this.value + "";
};
d$1.prototype.toJSON = function() {
  return this.value;
};
d$1.prototype.peek = function() {
  return this.v;
};
Object.defineProperty(d$1.prototype, "value", { get: function() {
  var i2 = c(this);
  if (void 0 !== i2)
    i2.i = this.i;
  return this.v;
}, set: function(t2) {
  if (o instanceof _$1)
    !function() {
      throw new Error("Computed cannot have side-effects");
    }();
  if (t2 !== this.v) {
    if (e > 100)
      i();
    this.v = t2;
    this.i++;
    u++;
    v++;
    try {
      for (var n = this.t; void 0 !== n; n = n.x)
        n.t.N();
    } finally {
      r();
    }
  }
} });
function a(i2) {
  return new d$1(i2);
}
function l$1(i2) {
  for (var t2 = i2.s; void 0 !== t2; t2 = t2.n)
    if (t2.S.i !== t2.i || !t2.S.h() || t2.S.i !== t2.i)
      return true;
  return false;
}
function y(i2) {
  for (var t2 = i2.s; void 0 !== t2; t2 = t2.n) {
    var r2 = t2.S.n;
    if (void 0 !== r2)
      t2.r = r2;
    t2.S.n = t2;
    t2.i = -1;
    if (void 0 === t2.n) {
      i2.s = t2;
      break;
    }
  }
}
function w(i2) {
  var t2 = i2.s, r2 = void 0;
  while (void 0 !== t2) {
    var n = t2.p;
    if (-1 === t2.i) {
      t2.S.U(t2);
      if (void 0 !== n)
        n.n = t2.n;
      if (void 0 !== t2.n)
        t2.n.p = n;
    } else
      r2 = t2;
    t2.S.n = t2.r;
    if (void 0 !== t2.r)
      t2.r = void 0;
    t2 = n;
  }
  i2.s = r2;
}
function _$1(i2) {
  d$1.call(this, void 0);
  this.x = i2;
  this.s = void 0;
  this.g = u - 1;
  this.f = 4;
}
(_$1.prototype = new d$1()).h = function() {
  this.f &= -3;
  if (1 & this.f)
    return false;
  if (32 == (36 & this.f))
    return true;
  this.f &= -5;
  if (this.g === u)
    return true;
  this.g = u;
  this.f |= 1;
  if (this.i > 0 && !l$1(this)) {
    this.f &= -2;
    return true;
  }
  var i2 = o;
  try {
    y(this);
    o = this;
    var t2 = this.x();
    if (16 & this.f || this.v !== t2 || 0 === this.i) {
      this.v = t2;
      this.f &= -17;
      this.i++;
    }
  } catch (i3) {
    this.v = i3;
    this.f |= 16;
    this.i++;
  }
  o = i2;
  w(this);
  this.f &= -2;
  return true;
};
_$1.prototype.S = function(i2) {
  if (void 0 === this.t) {
    this.f |= 36;
    for (var t2 = this.s; void 0 !== t2; t2 = t2.n)
      t2.S.S(t2);
  }
  d$1.prototype.S.call(this, i2);
};
_$1.prototype.U = function(i2) {
  if (void 0 !== this.t) {
    d$1.prototype.U.call(this, i2);
    if (void 0 === this.t) {
      this.f &= -33;
      for (var t2 = this.s; void 0 !== t2; t2 = t2.n)
        t2.S.U(t2);
    }
  }
};
_$1.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (var i2 = this.t; void 0 !== i2; i2 = i2.x)
      i2.t.N();
  }
};
_$1.prototype.peek = function() {
  if (!this.h())
    i();
  if (16 & this.f)
    throw this.v;
  return this.v;
};
Object.defineProperty(_$1.prototype, "value", { get: function() {
  if (1 & this.f)
    i();
  var t2 = c(this);
  this.h();
  if (void 0 !== t2)
    t2.i = this.i;
  if (16 & this.f)
    throw this.v;
  return this.v;
} });
function p$1(i2) {
  return new _$1(i2);
}
function g(i2) {
  var t2 = i2.u;
  i2.u = void 0;
  if ("function" == typeof t2) {
    v++;
    var n = o;
    o = void 0;
    try {
      t2();
    } catch (t3) {
      i2.f &= -2;
      i2.f |= 8;
      b(i2);
      throw t3;
    } finally {
      o = n;
      r();
    }
  }
}
function b(i2) {
  for (var t2 = i2.s; void 0 !== t2; t2 = t2.n)
    t2.S.U(t2);
  i2.x = void 0;
  i2.s = void 0;
  g(i2);
}
function x(i2) {
  if (o !== this)
    throw new Error("Out-of-order effect");
  w(this);
  o = i2;
  this.f &= -2;
  if (8 & this.f)
    b(this);
  r();
}
function E(i2) {
  this.x = i2;
  this.u = void 0;
  this.s = void 0;
  this.o = void 0;
  this.f = 32;
}
E.prototype.c = function() {
  var i2 = this.S();
  try {
    if (8 & this.f)
      return;
    if (void 0 === this.x)
      return;
    var t2 = this.x();
    if ("function" == typeof t2)
      this.u = t2;
  } finally {
    i2();
  }
};
E.prototype.S = function() {
  if (1 & this.f)
    i();
  this.f |= 1;
  this.f &= -9;
  g(this);
  y(this);
  v++;
  var t2 = o;
  o = this;
  return x.bind(this, t2);
};
E.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 2;
    this.o = f;
    f = this;
  }
};
E.prototype.d = function() {
  this.f |= 8;
  if (!(1 & this.f))
    b(this);
};
function O(i2) {
  var t2 = new E(i2);
  try {
    t2.c();
  } catch (i3) {
    t2.d();
    throw i3;
  }
  return t2.d.bind(t2);
}
var s;
function l(n, i2) {
  options[n] = i2.bind(null, options[n] || function() {
  });
}
function d(n) {
  if (s)
    s();
  s = n && n.S();
}
function p(n) {
  var r2 = this, f2 = n.data, o2 = useSignal(f2);
  o2.value = f2;
  var e2 = useMemo(function() {
    var n2 = r2.__v;
    while (n2 = n2.__)
      if (n2.__c) {
        n2.__c.__$f |= 4;
        break;
      }
    r2.__$u.c = function() {
      var n3;
      if (!isValidElement(e2.peek()) && 3 === (null == (n3 = r2.base) ? void 0 : n3.nodeType))
        r2.base.data = e2.peek();
      else {
        r2.__$f |= 1;
        r2.setState({});
      }
    };
    return p$1(function() {
      var n3 = o2.value.value;
      return 0 === n3 ? 0 : true === n3 ? "" : n3 || "";
    });
  }, []);
  return e2.value;
}
p.displayName = "_st";
Object.defineProperties(d$1.prototype, { constructor: { configurable: true, value: void 0 }, type: { configurable: true, value: p }, props: { configurable: true, get: function() {
  return { data: this };
} }, __b: { configurable: true, value: 1 } });
l("__b", function(n, r2) {
  if ("string" == typeof r2.type) {
    var i2, t2 = r2.props;
    for (var f2 in t2)
      if ("children" !== f2) {
        var o2 = t2[f2];
        if (o2 instanceof d$1) {
          if (!i2)
            r2.__np = i2 = {};
          i2[f2] = o2;
          t2[f2] = o2.peek();
        }
      }
  }
  n(r2);
});
l("__r", function(n, r2) {
  d();
  var i2, t2 = r2.__c;
  if (t2) {
    t2.__$f &= -2;
    if (void 0 === (i2 = t2.__$u))
      t2.__$u = i2 = function(n2) {
        var r3;
        O(function() {
          r3 = this;
        });
        r3.c = function() {
          t2.__$f |= 1;
          t2.setState({});
        };
        return r3;
      }();
  }
  d(i2);
  n(r2);
});
l("__e", function(n, r2, i2, t2) {
  d();
  n(r2, i2, t2);
});
l("diffed", function(n, r2) {
  d();
  var i2;
  if ("string" == typeof r2.type && (i2 = r2.__e)) {
    var t2 = r2.__np, f2 = r2.props;
    if (t2) {
      var o2 = i2.U;
      if (o2)
        for (var e2 in o2) {
          var u2 = o2[e2];
          if (void 0 !== u2 && !(e2 in t2)) {
            u2.d();
            o2[e2] = void 0;
          }
        }
      else
        i2.U = o2 = {};
      for (var a2 in t2) {
        var c2 = o2[a2], s2 = t2[a2];
        if (void 0 === c2) {
          c2 = _(i2, a2, s2, f2);
          o2[a2] = c2;
        } else
          c2.o(s2, f2);
      }
    }
  }
  n(r2);
});
function _(n, r2, i2, t2) {
  var f2 = r2 in n && void 0 === n.ownerSVGElement, o2 = a(i2);
  return { o: function(n2, r3) {
    o2.value = n2;
    t2 = r3;
  }, d: O(function() {
    var i3 = o2.value.value;
    if (t2[r2] !== i3) {
      t2[r2] = i3;
      if (f2)
        n[r2] = i3;
      else if (i3)
        n.setAttribute(r2, i3);
      else
        n.removeAttribute(r2);
    }
  }) };
}
l("unmount", function(n, r2) {
  if ("string" == typeof r2.type) {
    var i2 = r2.__e;
    if (i2) {
      var t2 = i2.U;
      if (t2) {
        i2.U = void 0;
        for (var f2 in t2) {
          var o2 = t2[f2];
          if (o2)
            o2.d();
        }
      }
    }
  } else {
    var e2 = r2.__c;
    if (e2) {
      var u2 = e2.__$u;
      if (u2) {
        e2.__$u = void 0;
        u2.d();
      }
    }
  }
  n(r2);
});
l("__h", function(n, r2, i2, t2) {
  if (t2 < 3 || 9 === t2)
    r2.__$f |= 2;
  n(r2, i2, t2);
});
Component.prototype.shouldComponentUpdate = function(n, r2) {
  var i2 = this.__$u;
  if (!(i2 && void 0 !== i2.s || 4 & this.__$f))
    return true;
  if (3 & this.__$f)
    return true;
  for (var t2 in r2)
    return true;
  for (var f2 in n)
    if ("__source" !== f2 && n[f2] !== this.props[f2])
      return true;
  for (var o2 in this.props)
    if (!(o2 in n))
      return true;
  return false;
};
function useSignal(n) {
  return useMemo(function() {
    return a(n);
  }, []);
}
var AttributeFrontendInputEnum = /* @__PURE__ */ ((AttributeFrontendInputEnum2) => {
  AttributeFrontendInputEnum2["Boolean"] = "BOOLEAN";
  AttributeFrontendInputEnum2["Date"] = "DATE";
  AttributeFrontendInputEnum2["Datetime"] = "DATETIME";
  AttributeFrontendInputEnum2["File"] = "FILE";
  AttributeFrontendInputEnum2["Gallery"] = "GALLERY";
  AttributeFrontendInputEnum2["Hidden"] = "HIDDEN";
  AttributeFrontendInputEnum2["Image"] = "IMAGE";
  AttributeFrontendInputEnum2["MediaImage"] = "MEDIA_IMAGE";
  AttributeFrontendInputEnum2["Multiline"] = "MULTILINE";
  AttributeFrontendInputEnum2["Multiselect"] = "MULTISELECT";
  AttributeFrontendInputEnum2["Price"] = "PRICE";
  AttributeFrontendInputEnum2["Select"] = "SELECT";
  AttributeFrontendInputEnum2["Text"] = "TEXT";
  AttributeFrontendInputEnum2["Textarea"] = "TEXTAREA";
  AttributeFrontendInputEnum2["Undefined"] = "UNDEFINED";
  AttributeFrontendInputEnum2["Weight"] = "WEIGHT";
  return AttributeFrontendInputEnum2;
})(AttributeFrontendInputEnum || {});
var ProductStockStatus = /* @__PURE__ */ ((ProductStockStatus2) => {
  ProductStockStatus2["InStock"] = "IN_STOCK";
  ProductStockStatus2["OutOfStock"] = "OUT_OF_STOCK";
  return ProductStockStatus2;
})(ProductStockStatus || {});
var TaxWrappingEnum = /* @__PURE__ */ ((TaxWrappingEnum2) => {
  TaxWrappingEnum2["DisplayExcludingTax"] = "DISPLAY_EXCLUDING_TAX";
  TaxWrappingEnum2["DisplayIncludingTax"] = "DISPLAY_INCLUDING_TAX";
  TaxWrappingEnum2["DisplayTypeBoth"] = "DISPLAY_TYPE_BOTH";
  return TaxWrappingEnum2;
})(TaxWrappingEnum || {});
var ValidationRuleEnum = /* @__PURE__ */ ((ValidationRuleEnum2) => {
  ValidationRuleEnum2["DateRangeMax"] = "DATE_RANGE_MAX";
  ValidationRuleEnum2["DateRangeMin"] = "DATE_RANGE_MIN";
  ValidationRuleEnum2["FileExtensions"] = "FILE_EXTENSIONS";
  ValidationRuleEnum2["InputValidation"] = "INPUT_VALIDATION";
  ValidationRuleEnum2["MaxFileSize"] = "MAX_FILE_SIZE";
  ValidationRuleEnum2["MaxImageHeight"] = "MAX_IMAGE_HEIGHT";
  ValidationRuleEnum2["MaxImageWidth"] = "MAX_IMAGE_WIDTH";
  ValidationRuleEnum2["MaxTextLength"] = "MAX_TEXT_LENGTH";
  ValidationRuleEnum2["MinTextLength"] = "MIN_TEXT_LENGTH";
  return ValidationRuleEnum2;
})(ValidationRuleEnum || {});
var PriceDisplay = /* @__PURE__ */ ((PriceDisplay2) => {
  PriceDisplay2[PriceDisplay2["ExcludingTax"] = 1] = "ExcludingTax";
  PriceDisplay2[PriceDisplay2["IncludingTax"] = 2] = "IncludingTax";
  PriceDisplay2[PriceDisplay2["IncludingAndExcludingTax"] = 3] = "IncludingAndExcludingTax";
  return PriceDisplay2;
})(PriceDisplay || {});
var TotalDisplay = /* @__PURE__ */ ((TotalDisplay2) => {
  TotalDisplay2[TotalDisplay2["Rows"] = 0] = "Rows";
  TotalDisplay2[TotalDisplay2["Quantity"] = 1] = "Quantity";
  return TotalDisplay2;
})(TotalDisplay || {});
const isNullish = (value) => value === null || value === void 0;
function transformTotalDisplay(totalDisplay) {
  if (totalDisplay === 0)
    return TotalDisplay.Rows;
  if (totalDisplay === 1)
    return TotalDisplay.Quantity;
  return TotalDisplay.Quantity;
}
function transformPriceDisplay(taxDisplay) {
  if (taxDisplay === 1)
    return PriceDisplay.ExcludingTax;
  if (taxDisplay === 2)
    return PriceDisplay.IncludingTax;
  if (taxDisplay === 3)
    return PriceDisplay.IncludingAndExcludingTax;
  return PriceDisplay.ExcludingTax;
}
function transformPriceDisplayGiftWrapping(taxDisplay) {
  switch (taxDisplay) {
    case TaxWrappingEnum.DisplayExcludingTax:
      return PriceDisplay.ExcludingTax;
    case TaxWrappingEnum.DisplayIncludingTax:
      return PriceDisplay.IncludingTax;
    case TaxWrappingEnum.DisplayTypeBoth:
      return PriceDisplay.IncludingAndExcludingTax;
  }
}
function transformStoreConfig(data) {
  if (!data)
    return STORE_CONFIG_DEFAULTS;
  const {
    default_country,
    countries_with_required_region,
    display_state_if_optional,
    optional_zip_countries,
    is_guest_checkout_enabled,
    is_one_page_checkout_enabled,
    shopping_cart_display_price,
    shopping_cart_display_shipping,
    shopping_cart_display_subtotal,
    shopping_cart_display_tax_gift_wrapping,
    shopping_cart_display_grand_total,
    shopping_cart_display_full_summary,
    shopping_cart_display_zero_tax,
    max_items_in_order_summary,
    cart_summary_display_quantity
  } = data;
  return {
    defaultCountry: default_country || STORE_CONFIG_DEFAULTS.defaultCountry,
    countriesWithRequiredRegion: (countries_with_required_region == null ? void 0 : countries_with_required_region.split(",")) || STORE_CONFIG_DEFAULTS.countriesWithRequiredRegion,
    displayStateIfOptional: display_state_if_optional || STORE_CONFIG_DEFAULTS.displayStateIfOptional,
    countriesWithOptionalZipCode: (optional_zip_countries == null ? void 0 : optional_zip_countries.split(",")) || STORE_CONFIG_DEFAULTS.countriesWithOptionalZipCode,
    isGuestCheckoutEnabled: is_guest_checkout_enabled || STORE_CONFIG_DEFAULTS.isGuestCheckoutEnabled,
    isOnePageCheckoutEnabled: is_one_page_checkout_enabled || STORE_CONFIG_DEFAULTS.isOnePageCheckoutEnabled,
    taxCartDisplay: {
      shoppingCartDisplayPrice: shopping_cart_display_price ? transformPriceDisplay(shopping_cart_display_price) : STORE_CONFIG_DEFAULTS.taxCartDisplay.shoppingCartDisplayPrice,
      shoppingCartDisplayShipping: shopping_cart_display_shipping ? transformPriceDisplay(shopping_cart_display_shipping) : STORE_CONFIG_DEFAULTS.taxCartDisplay.shoppingCartDisplayShipping,
      shoppingCartDisplaySubtotal: shopping_cart_display_subtotal ? transformPriceDisplay(shopping_cart_display_subtotal) : STORE_CONFIG_DEFAULTS.taxCartDisplay.shoppingCartDisplaySubtotal,
      shoppingCartDisplayGiftWrapping: shopping_cart_display_tax_gift_wrapping ? transformPriceDisplayGiftWrapping(shopping_cart_display_tax_gift_wrapping) : STORE_CONFIG_DEFAULTS.taxCartDisplay.shoppingCartDisplayGiftWrapping,
      shoppingCartDisplayGrandTotal: shopping_cart_display_grand_total || STORE_CONFIG_DEFAULTS.taxCartDisplay.shoppingCartDisplayGrandTotal,
      shoppingCartDisplayFullSummary: shopping_cart_display_full_summary || STORE_CONFIG_DEFAULTS.taxCartDisplay.shoppingCartDisplayFullSummary,
      shoppingCartDisplayZeroTax: shopping_cart_display_zero_tax || STORE_CONFIG_DEFAULTS.taxCartDisplay.shoppingCartDisplayZeroTax
    },
    cartSummaryMaxItems: max_items_in_order_summary || STORE_CONFIG_DEFAULTS.cartSummaryMaxItems,
    cartSummaryTotalDisplay: !isNullish(cart_summary_display_quantity) ? transformTotalDisplay(cart_summary_display_quantity) : STORE_CONFIG_DEFAULTS.cartSummaryTotalDisplay
  };
}
const transformCountries = (data) => {
  if (!data)
    return;
  return data.filter((country) => !!country).filter((country) => {
    const {
      two_letter_abbreviation,
      full_name_locale
    } = country;
    return !!two_letter_abbreviation && !!full_name_locale;
  }).map((country) => {
    const {
      two_letter_abbreviation,
      full_name_locale
    } = country;
    return {
      value: two_letter_abbreviation,
      label: full_name_locale
    };
  });
};
const handleFetchErrors = (errors) => {
  if (!errors)
    return;
  throw Error(errors.map((e2) => e2.message).join(" "));
};
const getStoreConfigQuery = (
  /* GraphQL */
  `
  query getStoreConfig {
    storeConfig {
      cart_summary_display_quantity
      countries_with_required_region
      default_country
      display_state_if_optional
      is_guest_checkout_enabled
      is_one_page_checkout_enabled
      locale
      max_items_in_order_summary
      optional_zip_countries
      shopping_cart_display_full_summary
      shopping_cart_display_grand_total
      shopping_cart_display_price
      shopping_cart_display_shipping
      shopping_cart_display_subtotal
      shopping_cart_display_tax_gift_wrapping
      shopping_cart_display_zero_tax
      store_code
    }
  }
`
);
const getStoreConfig = async () => {
  return fetchGraphQl(getStoreConfigQuery, {
    method: "GET",
    cache: "no-cache"
  }).then(({
    data,
    errors
  }) => {
    handleFetchErrors(errors);
    return transformStoreConfig(data == null ? void 0 : data.storeConfig);
  }).catch(handleNetworkError);
};
const getCountriesQuery = (
  /* GraphQL */
  `
query getCountries {
    countries {
      two_letter_abbreviation
      full_name_locale
    }
}`
);
const getCountries = async () => {
  return fetchGraphQl(getCountriesQuery, {
    method: "GET",
    cache: "no-cache"
  }).then(({
    data,
    errors
  }) => {
    if (errors)
      handleFetchErrors(errors);
    return transformCountries(data.countries);
  }).catch(handleNetworkError);
};
const DEFAULT_COUNTRY = "US";
const DEFAULT_NUMBER_OF_ITEMS = 10;
const STORE_CONFIG_DEFAULTS = {
  defaultCountry: DEFAULT_COUNTRY,
  countriesWithRequiredRegion: [],
  displayStateIfOptional: false,
  countriesWithOptionalZipCode: [],
  isGuestCheckoutEnabled: false,
  isOnePageCheckoutEnabled: false,
  taxCartDisplay: {
    shoppingCartDisplayPrice: PriceDisplay.ExcludingTax,
    shoppingCartDisplayShipping: PriceDisplay.ExcludingTax,
    shoppingCartDisplaySubtotal: PriceDisplay.ExcludingTax,
    shoppingCartDisplayGiftWrapping: PriceDisplay.ExcludingTax,
    shoppingCartDisplayGrandTotal: false,
    shoppingCartDisplayFullSummary: false,
    shoppingCartDisplayZeroTax: false
  },
  cartSummaryMaxItems: DEFAULT_NUMBER_OF_ITEMS,
  cartSummaryTotalDisplay: TotalDisplay.Quantity
};
const StoreContext = createContext(void 0);
const StoreProvider = ({
  children
}) => {
  const [config, setConfig] = useState();
  useEffect(() => {
    getStoreConfig().then((data) => {
      setConfig(data);
    }).catch(() => {
      console.error("Failed to fetch store config");
      setConfig(STORE_CONFIG_DEFAULTS);
    });
  }, []);
  return jsx(StoreContext.Provider, {
    value: {
      config
    },
    children
  });
};
function useStore() {
  const context = useContext(StoreContext);
  if (context !== void 0)
    return context;
  throw new Error("useStore must be used within a StoreProvider");
}
const AddressFormFieldsContext = createContext(void 0);
function AddressFormFieldsProvider({
  children
}) {
  const [state, setState] = useState({});
  useEffect(() => {
    fetchAddressFormFields().then((addressFormFields) => setState({
      fields: addressFormFields
    }));
  }, []);
  return jsx(AddressFormFieldsContext.Provider, {
    value: state,
    children
  });
}
function useAddressFormFields() {
  const context = useContext(AddressFormFieldsContext);
  if (context !== void 0)
    return context;
  throw new Error("useAddressFormFields must be used within an AddressFormFieldsProvider");
}
const CountriesContext = createContext(void 0);
function CountriesProvider({
  children
}) {
  const [state, setState] = useState({});
  useEffect(() => {
    getCountries().then((countries) => setState({
      countries
    }));
  }, []);
  return jsx(CountriesContext.Provider, {
    value: state,
    children
  });
}
function useCountries() {
  const context = useContext(CountriesContext);
  if (context !== void 0)
    return context;
  throw new Error("useCountries must be used within a CountriesProvider");
}
export {
  AddressFormFieldsProvider as A,
  CountriesProvider as C,
  ProductStockStatus as P,
  ServicesProvider as S,
  TotalDisplay as T,
  ValidationRuleEnum as V,
  setFetchGraphQlHeader as a,
  setFetchGraphQlHeaders as b,
  fetchAddressFormFields as c,
  getStoreConfig as d,
  getCountries as e,
  fetchGraphQl as f,
  getConfig as g,
  a as h,
  useStore as i,
  handleNetworkError as j,
  handleFetchErrors as k,
  PriceDisplay as l,
  isNullish as m,
  StoreProvider as n,
  AttributeFrontendInputEnum as o,
  useCountries as p,
  useServices as q,
  removeFetchGraphQlHeader as r,
  setEndpoint as s,
  useAddressFormFields as u
};
