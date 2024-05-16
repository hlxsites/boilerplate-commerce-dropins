import { useState, useCallback, useEffect } from "@dropins/tools/preact-compat.js";
import { events } from "@dropins/tools/event-bus.js";
import { Divider, PriceSummary, Price, Picker, Input, Button, CartList, CartItem, Image } from "@dropins/tools/components/index.js";
import { E as EmptyCart } from "../chunks/MiniCart__Z0P62hxE1k.js";
import { jsx, jsxs, Fragment } from "@dropins/tools/preact-jsx-runtime.js";
import { c as classes, V as VComponent } from "../chunks/vcomponent__DzjhryT0dc.js";
import { s as state, n as getPersistedData } from "../chunks/getStoreConfig__D5TZNZKL7r.js";
import { b as publishShoppingCartViewEvent, u as updateProductsFromCart } from "../chunks/updateProductsFromCart__BgOPk2gVgl.js";
import { g as getEstimateShipping, a as getCountries, b as getRegions } from "../chunks/getEstimateShipping__Bin9bPsMEq.js";
import { useText } from "@dropins/tools/i18n.js";
import "@dropins/tools/fetch-graphql.js";
const Cart$1 = ({
  className,
  children,
  emptyCart,
  heading,
  products,
  priceSummary,
  ...props
}) => {
  return jsx("div", {
    ...props,
    className: classes(["cart-cart", className]),
    children: jsxs("div", {
      className: classes(["cart-cart__wrapper"]),
      children: [heading && jsxs("div", {
        className: classes(["cart-cart__heading", ["cart-cart__heading--full-width", !products || !priceSummary]]),
        children: [jsx(VComponent, {
          node: heading,
          className: "cart-cart__heading-text"
        }), jsx(Divider, {
          variant: "primary",
          className: classes(["cart-cart__heading-divider"])
        })]
      }), jsx("div", {
        className: classes(["cart-cart__content", ["cart-cart__content--empty", !products], ["cart-cart__content--full-width", !priceSummary]]),
        children: products || jsx(VComponent, {
          node: emptyCart,
          className: "cart-cart__empty-cart"
        })
      }), products && priceSummary && jsx(VComponent, {
        node: priceSummary,
        className: classes(["cart-cart__price-summary"])
      })]
    })
  });
};
const useEstimatedShipping = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("US");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedZip, setSelectedZip] = useState("");
  const [regions, setRegions] = useState([]);
  const [regionsLoading, setRegionsLoading] = useState(false);
  const [estimatedShippingPrice, setEstimatedShippingPrice] = useState();
  const [estimatedDestinationText, setEstimatedDestinationText] = useState("");
  const [priceSummaryLoading, setPriceSummaryLoading] = useState(false);
  const handleEstimateShipping = useCallback((formValues) => {
    const {
      shippingCountry,
      shippingState = "",
      shippingZip = ""
    } = formValues;
    const addressData = {
      countryCode: shippingCountry,
      postcode: shippingZip,
      region: {
        code: shippingState
      }
    };
    setPriceSummaryLoading(true);
    getEstimateShipping(addressData).then((data) => {
      if (data) {
        setEstimatedShippingPrice({
          amount: data.amount.value,
          currency: data.amount.currency
        });
        setSelectedCountry(shippingCountry);
        setSelectedRegion(shippingState);
        setSelectedZip(shippingZip);
        setEstimatedDestinationText(shippingState || shippingZip || shippingCountry);
      }
    }).finally(() => {
      setPriceSummaryLoading(false);
    });
  }, []);
  const handleCountrySelected = (event) => {
    event.preventDefault();
    setSelectedRegion("");
    setSelectedZip("");
    const value = event.target.value;
    setSelectedCountry(value);
  };
  useEffect(() => {
    getCountries().then((countries2) => {
      let defaultCountry = "US";
      const transformedCountries = countries2.map((country) => {
        if (country.isDefaultCountry) {
          defaultCountry = country.id;
        }
        return {
          text: country.label,
          value: country.id
        };
      });
      setCountries(transformedCountries);
      setSelectedCountry(defaultCountry);
    });
  }, []);
  useEffect(() => {
    setRegionsLoading(true);
    getRegions(selectedCountry).then((regions2) => {
      const transformedRegions = regions2.map((region) => {
        return {
          text: region.name,
          value: region.code
        };
      });
      setRegions(transformedRegions);
    }).finally(() => {
      setRegionsLoading(false);
    });
  }, [selectedCountry, setRegionsLoading]);
  return {
    loading: priceSummaryLoading,
    regionsLoading,
    estimatedDestinationText,
    countries,
    selectedCountry,
    selectedRegion,
    selectedZip,
    regions,
    estimatedShippingPrice,
    handleEstimateShipping,
    handleCountrySelected
  };
};
const Cart = ({
  children,
  initialData = null,
  routeProduct,
  routeEmptyCartCTA,
  routeCheckout,
  ...props
}) => {
  var _a, _b, _c, _d;
  const [data, setData] = useState(initialData);
  const [itemsLoading, setItemLoading] = useState(/* @__PURE__ */ new Set());
  const {
    loading: priceSummaryLoading,
    regionsLoading,
    countries,
    regions,
    selectedCountry,
    selectedRegion,
    selectedZip,
    estimatedDestinationText,
    estimatedShippingPrice,
    handleCountrySelected,
    handleEstimateShipping
  } = useEstimatedShipping();
  const handleItemsLoading = (state2, uid) => {
    setItemLoading((prev) => {
      state2 ? prev.add(uid) : prev.delete(uid);
      return new Set(prev);
    });
  };
  const handleItemQuantityUpdate = (uid, quantity) => {
    handleItemsLoading(true, uid);
    updateProductsFromCart([{
      uid,
      quantity
    }]).finally(() => {
      handleItemsLoading(false, uid);
    });
  };
  const dictionary = useText({
    applyButton: "Cart.PriceSummary.estimatedShippingForm.apply.label",
    checkout: "Cart.PriceSummary.checkout",
    countryField: "Cart.PriceSummary.estimatedShippingForm.country.placeholder",
    discountedPrice: "Cart.CartItem.discountedPrice",
    download: "Cart.CartItem.download",
    freeShipping: "Cart.PriceSummary.freeShipping",
    heading: "Cart.Cart.heading",
    message: "Cart.CartItem.message",
    regularPrice: "Cart.CartItem.regularPrice",
    recipient: "Cart.CartItem.recipient",
    sender: "Cart.CartItem.sender",
    stateField: "Cart.PriceSummary.estimatedShippingForm.state.placeholder",
    taxToBeDetermined: "Cart.PriceSummary.taxToBeDetermined",
    zipField: "Cart.PriceSummary.estimatedShippingForm.zip.placeholder",
    file: "Cart.CartItem.file",
    files: "Cart.CartItem.files"
  });
  useEffect(() => {
    const event = events.on("cart/data", (payload) => {
      var _a2, _b2;
      setData(payload);
      const shippingAddress = (_b2 = (_a2 = payload == null ? void 0 : payload.addresses) == null ? void 0 : _a2.shipping) == null ? void 0 : _b2[0];
      if (shippingAddress) {
        const {
          countryCode,
          regionCode,
          zipCode
        } = shippingAddress;
        handleEstimateShipping({
          shippingCountry: countryCode,
          shippingState: regionCode,
          shippingZip: zipCode
        });
      }
    }, {
      eager: true
    });
    return () => {
      event == null ? void 0 : event.off();
    };
  }, [handleEstimateShipping]);
  useEffect(() => {
    if (initialData && Object.keys(initialData).length > 0) {
      publishShoppingCartViewEvent(initialData, state.locale || "en-US");
    }
  }, [initialData]);
  const priceSummary = (data == null ? void 0 : data.totalQuantity) ?? 0 ? jsx(PriceSummary, {
    "data-testid": "price-summary",
    loading: priceSummaryLoading,
    heading: "Order Summary",
    total: {
      price: jsx(Price, {
        amount: data == null ? void 0 : data.total.value,
        currency: data == null ? void 0 : data.total.currency
      }),
      estimated: true
    },
    subTotal: {
      price: jsx(Price, {
        "data-testid": "subtotal",
        amount: (_a = data == null ? void 0 : data.subtotal.excludingTax) == null ? void 0 : _a.value,
        currency: (_b = data == null ? void 0 : data.subtotal.excludingTax) == null ? void 0 : _b.currency
      })
    },
    shipping: (data == null ? void 0 : data.isVirtual) ? void 0 : {
      price: (estimatedShippingPrice == null ? void 0 : estimatedShippingPrice.amount) == 0 ? jsx("span", {
        "data-testId": "free-shipping",
        children: dictionary.freeShipping
      }) : estimatedShippingPrice ? jsx(Price, {
        ...estimatedShippingPrice
      }) : jsx("span", {
        children: dictionary.taxToBeDetermined
      }),
      estimated: true,
      countryField: jsx(Picker, {
        name: "shippingCountry",
        placeholder: dictionary.countryField,
        value: selectedCountry,
        variant: "primary",
        options: countries,
        handleSelect: handleCountrySelected,
        "data-testid": "estimate-shipping-country-selector"
      }),
      stateField: regions.length > 0 ? jsx(Picker, {
        name: "shippingState",
        placeholder: dictionary.stateField,
        variant: "primary",
        options: regions,
        value: selectedRegion,
        "data-testid": "estimate-shipping-state-selector",
        disabled: regionsLoading
      }) : jsx(Input, {
        "aria-label": dictionary.stateField,
        name: "shippingState",
        placeholder: dictionary.stateField,
        variant: "primary",
        value: selectedRegion,
        disabled: regionsLoading,
        "data-testid": "estimate-shipping-state-input",
        maxLength: 50
      }),
      zipField: jsx(Input, {
        "aria-label": dictionary.zipField,
        name: "shippingZip",
        placeholder: dictionary.zipField,
        variant: "primary",
        "data-testid": "estimate-shipping-zip-input",
        value: selectedZip,
        maxLength: 12
      }),
      estimateButton: jsx(Button, {
        variant: "secondary",
        "data-testid": "estimate-shipping-apply-button",
        "aria-label": dictionary.applyButton,
        children: dictionary.applyButton
      }),
      destinationText: estimatedDestinationText || dictionary.taxToBeDetermined,
      onEstimate: handleEstimateShipping
    },
    taxTotal: {
      price: (data == null ? void 0 : data.totalTax) ? jsx(Price, {
        "data-testid": "tax-total",
        amount: (_c = data == null ? void 0 : data.totalTax) == null ? void 0 : _c.value,
        currency: (_d = data == null ? void 0 : data.totalTax) == null ? void 0 : _d.currency
      }) : jsx("span", {
        "data-testid": "tax-total",
        children: dictionary.taxToBeDetermined
      }),
      estimated: true
    },
    primaryAction: routeCheckout ? jsx(Button, {
      "data-testid": "checkout-button",
      variant: "primary",
      href: routeCheckout({
        cartId: data.id
      }),
      children: dictionary.checkout
    }) : void 0,
    discounts: data == null ? void 0 : data.appliedDiscounts.map((discount) => {
      return {
        label: discount.label,
        price: jsx(Price, {
          "data-testid": "summary-discount-total",
          amount: -discount.amount.value,
          currency: discount.amount.currency,
          sale: true
        })
      };
    })
  }) : void 0;
  return jsx(Cart$1, {
    ...props,
    heading: jsx("div", {
      children: dictionary.heading
    }),
    emptyCart: jsx(EmptyCart, {
      ctaLinkURL: routeEmptyCartCTA == null ? void 0 : routeEmptyCartCTA()
    }),
    priceSummary,
    products: (data == null ? void 0 : data.totalQuantity) ?? 0 ? jsx(CartList, {
      children: data == null ? void 0 : data.items.map((item, index) => {
        var _a2, _b2, _c2, _d2;
        const isLoading = itemsLoading.has(item.uid);
        const configurations = {
          ...item.selectedOptions ?? {},
          ...item.recipient ? {
            [dictionary.recipient]: item.recipient
          } : {},
          ...item.recipientEmail && item.recipient ? {
            [dictionary.recipient]: `${item.recipient} (${item.recipientEmail})`
          } : {},
          ...item.sender ? {
            [dictionary.sender]: item.sender
          } : {},
          ...item.senderEmail && item.sender ? {
            [dictionary.sender]: `${item.sender} (${item.senderEmail})`
          } : {},
          ...item.message ? {
            [dictionary.message]: item.message
          } : {},
          ...item.links && item.links.count ? item.links.count > 1 ? {
            [dictionary.files.replace("{count}", item.links.count.toString())]: item.links.result
          } : {
            [dictionary.file.replace("{count}", item.links.count.toString())]: item.links.result
          } : {}
        };
        return jsx(CartItem, {
          "data-testid": "cart-item",
          ariaLabel: item.name,
          updating: isLoading,
          image: routeProduct ? jsx("a", {
            href: routeProduct(item),
            children: jsx(Image, {
              loading: index < 4 ? "eager" : "lazy",
              src: item.image.src,
              alt: item.image.alt,
              width: "300",
              height: "300",
              params: {
                width: 300
              }
            })
          }) : jsx(Image, {
            loading: index < 4 ? "eager" : "lazy",
            src: item.image.src,
            alt: item.image.alt,
            width: "300",
            height: "300",
            params: {
              width: 300
            }
          }),
          title: jsx("span", {
            children: routeProduct ? jsx("a", {
              href: routeProduct(item),
              children: item.name
            }) : jsx(Fragment, {
              children: item.name
            })
          }),
          sku: jsx("span", {
            children: item.sku
          }),
          configurations: Object.keys(configurations).length > 0 ? configurations : void 0,
          quantity: item.quantity,
          price: jsx(Price, {
            amount: (_a2 = item.regularPrice) == null ? void 0 : _a2.value,
            currency: (_b2 = item.regularPrice) == null ? void 0 : _b2.currency,
            style: {
              font: "inherit"
            }
          }),
          total: jsxs(Fragment, {
            children: [jsx(Price, {
              amount: item.total.value,
              currency: item.total.currency,
              variant: item.discounted ? "strikethrough" : "default",
              "data-testid": "regular-total",
              "aria-label": dictionary.regularPrice
            }), item.discounted && jsx(Price, {
              amount: (_c2 = item.discountedTotal) == null ? void 0 : _c2.value,
              currency: (_d2 = item.discountedTotal) == null ? void 0 : _d2.currency,
              sale: item.discounted,
              "data-testid": "discount-total",
              "aria-label": dictionary.discountedPrice
            })]
          }),
          onQuantity: (value) => {
            handleItemQuantityUpdate(item.uid, value);
          },
          onRemove: () => {
            handleItemQuantityUpdate(item.uid, 0);
          }
        }, item.uid);
      })
    }) : void 0
  });
};
Cart.getInitialData = async function() {
  return getPersistedData();
};
export {
  Cart,
  Cart as default
};
//# sourceMappingURL=Cart.js.map
