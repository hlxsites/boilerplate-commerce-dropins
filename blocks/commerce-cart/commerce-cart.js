import { render as provider } from '@dropins/storefront-cart/render.js';
import Cart from '@dropins/storefront-cart/containers/Cart.js';
import OrderSummary from '@dropins/storefront-cart/containers/OrderSummary.js';
import EstimateShipping from '@dropins/storefront-cart/containers/EstimateShipping.js';
import { readBlockConfig } from '../../scripts/aem.js';

export default async function decorate(block) {
  const {
    'empty-cart-url': emptyCartURL = '',
    'checkout-url': checkoutURL = '',
  } = readBlockConfig(block);

  return provider.render(Cart, {
    routeEmptyCartCTA: emptyCartURL ? () => emptyCartURL : undefined,
    routeProduct: (product) => `/products/${product.url.urlKey}/${product.sku}`,

    slots: {
      OrderSummary: (OrderSummaryContext) => {
        const orderSummary = document.createElement('div');

        provider.render(OrderSummary, {
          routeCheckout: checkoutURL ? () => checkoutURL : undefined,
          slots: {
            EstimateShipping: (estimateShippingContext) => {
              const estimateShippingForm = document.createElement('div');

              provider.render(EstimateShipping)(estimateShippingForm);

              estimateShippingContext.appendChild(estimateShippingForm);
            },
          },
        })(orderSummary);

        OrderSummaryContext.appendChild(orderSummary);
      },
    },
  })(block);
}
