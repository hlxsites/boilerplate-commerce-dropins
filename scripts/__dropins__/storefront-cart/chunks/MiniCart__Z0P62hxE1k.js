import { Card, Icon, Button } from "@dropins/tools/components/index.js";
import { jsx, jsxs } from "@dropins/tools/preact-jsx-runtime.js";
import * as React from "@dropins/tools/preact-compat.js";
import { useText } from "@dropins/tools/i18n.js";
import { c as classes } from "./vcomponent__DzjhryT0dc.js";
const SvgCart = (props) => /* @__PURE__ */ React.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("g", { clipPath: "url(#clip0_102_196)" }, /* @__PURE__ */ React.createElement("path", { vectorEffect: "non-scaling-stroke", d: "M18.3601 18.16H6.5601L4.8801 3H2.3501M19.6701 19.59C19.6701 20.3687 19.0388 21 18.2601 21C17.4814 21 16.8501 20.3687 16.8501 19.59C16.8501 18.8113 17.4814 18.18 18.2601 18.18C19.0388 18.18 19.6701 18.8113 19.6701 19.59ZM7.42986 19.59C7.42986 20.3687 6.79858 21 6.01986 21C5.24114 21 4.60986 20.3687 4.60986 19.59C4.60986 18.8113 5.24114 18.18 6.01986 18.18C6.79858 18.18 7.42986 18.8113 7.42986 19.59Z", stroke: "currentColor", strokeLinejoin: "round" }), /* @__PURE__ */ React.createElement("path", { vectorEffect: "non-scaling-stroke", d: "M5.25 6.37L20.89 8.06L20.14 14.8H6.19", stroke: "currentColor", strokeLinejoin: "round" })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "clip0_102_196" }, /* @__PURE__ */ React.createElement("rect", { vectorEffect: "non-scaling-stroke", width: 19.29, height: 19.5, fill: "white", transform: "translate(2.3501 2.25)" }))));
const EmptyCart = ({
  className,
  children,
  ctaLinkURL,
  ...props
}) => {
  const labels = useText({
    emptyCart: "Cart.EmptyCart.heading",
    cta: "Cart.EmptyCart.cta"
  });
  return jsx("div", {
    ...props,
    className: classes(["cart-empty-cart", className]),
    children: jsxs(Card, {
      variant: "secondary",
      className: "cart-empty-cart__wrapper",
      children: [jsx("div", {
        className: "cart-empty-cart__icon",
        children: jsx(Icon, {
          source: SvgCart,
          size: "64"
        })
      }), jsx("div", {
        className: "cart-empty-cart__heading",
        children: labels.emptyCart
      }), ctaLinkURL && jsx("div", {
        className: "cart-empty-cart__actions",
        children: jsx(Button, {
          href: ctaLinkURL,
          children: labels.cta
        })
      })]
    })
  });
};
export {
  EmptyCart as E
};
//# sourceMappingURL=MiniCart__Z0P62hxE1k.js.map
