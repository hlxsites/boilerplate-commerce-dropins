/* eslint-disable import/no-unresolved */
// Drop-in Tools
import { events } from '@dropins/tools/event-bus.js';
import { setEndpoint } from '@dropins/tools/fetch-graphql.js';
import { initializers } from '@dropins/tools/initializer.js';

// Drop-ins
import * as cart from '@dropins/storefront-cart/api.js';

// Libs
import { getConfigValue } from './configs.js';
import { loadCSS } from './aem.js';

export default async function initializeDropins({ current }) {
  // Load CSS
  const styles = {
    Product: '/scripts/__dropins__/storefront-pdp/containers/ProductDetails.css',
    Cart: '/scripts/__dropins__/storefront-cart/containers/Cart.css',
    Checkout: '/scripts/__dropins__/storefront-checkout/containers/Checkout.css',
    OrderConfirmation: '/scripts/__dropins__/storefront-order-confirmation/containers/OrderConfirmation.css',
  };

  if (styles[current]) {
    loadCSS(`${window.hlx.codeBasePath}${styles[current]}`);
  }

  // Set Fetch Endpoint (Global)
  setEndpoint(await getConfigValue('commerce-core-endpoint'));

  // Initializers (Global)
  initializers.register(cart.initialize, {});

  // Cache cartId in session storage
  events.on('cart/data', (data) => {
    if (data?.id) {
      sessionStorage.setItem('DROPINS_CART_ID', data.id);
    } else {
      sessionStorage.removeItem('DROPINS_CART_ID');
    }
  });

  // Mount all registered drop-ins
  if (document.readyState === 'complete') {
    initializers.mount();
  } else {
    window.addEventListener('load', initializers.mount);
  }

  events.enableLogger(true);
}
