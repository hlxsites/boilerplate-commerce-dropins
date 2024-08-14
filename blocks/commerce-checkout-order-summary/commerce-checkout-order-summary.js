import { render as provider } from "@dropins/storefront-cart/render.js";
import OrderSummary from "@dropins/storefront-cart/containers/OrderSummary.js";

import EstimateShipping from "@dropins/storefront-checkout/containers/EstimateShipping.js";
import { render as checkoutProvider } from "@dropins/storefront-checkout/render.js";

export default async function decorate(block) {
  block.innerHTML = "";

  return provider.render(OrderSummary, {
    slots: {
      EstimateShipping: (esCtx) => {
        const estimateShippingForm = document.createElement("div");

        checkoutProvider.render(EstimateShipping)(estimateShippingForm);

        esCtx.appendChild(estimateShippingForm);
      },
    },
  })(block);
}
