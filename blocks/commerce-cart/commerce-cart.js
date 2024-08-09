import { render as provider } from '@dropins/storefront-cart/render.js';
import Cart from '@dropins/storefront-cart/containers/Cart.js';
import { readBlockConfig } from '../../scripts/aem.js';

export default async function decorate(block) {
  const {
    'empty-cart-url': emptyCartURL = '',
  } = readBlockConfig(block);

  return provider.render(Cart, {
    routeEmptyCartCTA: emptyCartURL ? () => emptyCartURL : undefined,
    routeProduct: (product) => `/products/${product.url.urlKey}/${product.sku}`,
  })(block);
}
