import { render as provider } from '@dropins/storefront-cart/render.js';
import MiniCart from '@dropins/storefront-cart/containers/MiniCart.js';
import { readBlockConfig } from '../../scripts/aem.js';

export default async function decorate(block) {
  const {
    'empty-cart-url': emptyCartURL = '',
    'cart-url': cartURL = '',
    'checkout-url': checkoutURL = '',
  } = readBlockConfig(block);

  block.innerHTML = '';

  return provider.render(MiniCart, {
    routeEmptyCartCTA: emptyCartURL ? () => emptyCartURL : undefined,
    routeCart: cartURL ? () => cartURL : undefined,
    routeCheckout: checkoutURL ? () => checkoutURL : undefined,
    routeProduct: (product) => `/products/${product.url.urlKey}/${product.sku}`,
  })(block);
}
