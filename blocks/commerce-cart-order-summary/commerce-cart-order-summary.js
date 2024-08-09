import { render as provider } from '@dropins/storefront-cart/render.js';
import OrderSummary from '@dropins/storefront-cart/containers/OrderSummary.js';
import { readBlockConfig } from '../../scripts/aem.js';

export default async function decorate(block) {
  const {
    'checkout-url': checkoutURL = '',
  } = readBlockConfig(block);

  block.innerHTML = '';

  return provider.render(OrderSummary, {
    routeProduct: (product) => `/products/${product.url.urlKey}/${product.sku}`,
    routeCheckout: checkoutURL ? () => checkoutURL : undefined,
  })(block);
}
