import { useState, useEffect } from "@dropins/tools/preact-compat.js";
import { s as state, n as getPersistedData } from "../chunks/getStoreConfig__D5TZNZKL7r.js";
import { events } from "@dropins/tools/event-bus.js";
import { E as EmptyCart } from "../chunks/MiniCart__Z0P62hxE1k.js";
import { Divider, Price, Button, CartList, CartItem, Image } from "@dropins/tools/components/index.js";
import { jsxs, jsx, Fragment } from "@dropins/tools/preact-jsx-runtime.js";
import { useText } from "@dropins/tools/i18n.js";
import { c as classes, V as VComponent } from "../chunks/vcomponent__DzjhryT0dc.js";
import { b as publishShoppingCartViewEvent, u as updateProductsFromCart } from "../chunks/updateProductsFromCart__BgOPk2gVgl.js";
import "@dropins/tools/fetch-graphql.js";
const MiniCart$1 = ({
  className,
  children,
  emptyCart,
  heading,
  products,
  estimatedTotal,
  ctas,
  ...props
}) => {
  const dictionary = useText({
    estimatedTotal: "Cart.MiniCart.estimatedTotal"
  });
  return jsxs("div", {
    ...props,
    className: classes(["cart-mini-cart", className]),
    children: [products && heading && jsxs("div", {
      className: "cart-mini-cart__heading",
      children: [jsx(VComponent, {
        node: heading,
        className: "cart-mini-cart__heading-text"
      }), jsx(Divider, {
        variant: "primary",
        className: "cart-mini-cart__heading-divider"
      })]
    }), products ? jsxs(Fragment, {
      children: [jsx("div", {
        className: "cart-mini-cart__products",
        children: products
      }), jsxs("div", {
        className: "cart-mini-cart__footer",
        children: [estimatedTotal && jsxs("div", {
          className: "cart-mini-cart__footer__estimated-total",
          children: [dictionary.estimatedTotal, jsx(VComponent, {
            node: estimatedTotal
          })]
        }), ctas && jsx(VComponent, {
          node: ctas,
          className: "cart-mini-cart__footer__ctas"
        })]
      })]
    }) : jsx(VComponent, {
      node: emptyCart,
      className: "cart-mini-cart__empty-cart"
    })]
  });
};
const MiniCart = ({
  children,
  initialData = null,
  routeProduct,
  routeCart,
  routeCheckout,
  routeEmptyCartCTA,
  ...props
}) => {
  var _a;
  const [data, setData] = useState(initialData);
  const [itemsLoading, setItemLoading] = useState(/* @__PURE__ */ new Set());
  const handleItemsLoading = (state2, uid) => {
    setItemLoading((prev) => {
      state2 ? prev.add(uid) : prev.delete(uid);
      return new Set(prev);
    });
  };
  useEffect(() => {
    const event = events.on("cart/data", (payload) => {
      setData(payload);
    }, {
      eager: true
    });
    return () => {
      event == null ? void 0 : event.off();
    };
  }, []);
  const dictionary = useText({
    cartLink: "Cart.MiniCart.cartLink",
    checkoutLink: "Cart.MiniCart.checkoutLink",
    discountedPrice: "Cart.CartItem.discountedPrice",
    heading: "Cart.MiniCart.heading",
    message: "Cart.CartItem.message",
    recipient: "Cart.CartItem.recipient",
    regularPrice: "Cart.CartItem.regularPrice",
    sender: "Cart.CartItem.sender",
    file: "Cart.CartItem.file",
    files: "Cart.CartItem.files"
  });
  const handleItemQuantityUpdate = (uid, quantity) => {
    handleItemsLoading(true, uid);
    updateProductsFromCart([{
      uid,
      quantity
    }]).finally(() => {
      handleItemsLoading(false, uid);
    });
  };
  useEffect(() => {
    if (initialData && Object.keys(initialData).length > 0) {
      publishShoppingCartViewEvent(initialData, state.locale || "en-US");
    }
  }, [initialData]);
  return jsx(MiniCart$1, {
    ...props,
    heading: jsx("div", {
      children: dictionary.heading.replace("{count}", ((data == null ? void 0 : data.totalQuantity) ?? 0).toString())
    }),
    emptyCart: jsx(EmptyCart, {
      ctaLinkURL: routeEmptyCartCTA == null ? void 0 : routeEmptyCartCTA()
    }),
    estimatedTotal: (data == null ? void 0 : data.total) && jsx(Price, {
      amount: data == null ? void 0 : data.total.value,
      currency: data == null ? void 0 : data.total.currency,
      style: {
        font: "inherit"
      }
    }),
    ctas: jsxs("div", {
      children: [routeCheckout && jsx(Button, {
        variant: "primary",
        href: routeCheckout(),
        children: dictionary.checkoutLink
      }), routeCart && jsx(Button, {
        variant: "tertiary",
        href: routeCart(),
        children: dictionary.cartLink
      })]
    }),
    products: (data == null ? void 0 : data.totalQuantity) ?? 0 ? jsx(CartList, {
      children: (_a = data == null ? void 0 : data.miniCartMaxItems) == null ? void 0 : _a.map((item, index) => {
        var _a2, _b, _c, _d;
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
            }) : item.name
          }),
          sku: jsx("span", {
            children: item.sku
          }),
          configurations: Object.keys(configurations).length > 0 ? configurations : void 0,
          quantity: item.quantity,
          price: jsx(Price, {
            amount: (_a2 = item.regularPrice) == null ? void 0 : _a2.value,
            currency: (_b = item.regularPrice) == null ? void 0 : _b.currency,
            weight: "normal"
          }),
          total: jsxs(Fragment, {
            children: [jsx(Price, {
              amount: item.total.value,
              currency: item.total.currency,
              variant: item.discounted ? "strikethrough" : "default",
              "data-testid": "regular-total",
              "aria-label": dictionary.regularPrice
            }), item.discounted && jsx(Price, {
              amount: (_c = item.discountedTotal) == null ? void 0 : _c.value,
              currency: (_d = item.discountedTotal) == null ? void 0 : _d.currency,
              sale: item.discounted,
              "data-testid": "discount-total",
              "aria-label": dictionary.discountedPrice
            })]
          }),
          onRemove: () => {
            handleItemQuantityUpdate(item.uid, 0);
          }
        }, item.uid);
      })
    }) : void 0
  });
};
MiniCart.getInitialData = async function() {
  return getPersistedData();
};
export {
  MiniCart,
  MiniCart as default
};
