/* eslint-disable import/no-unresolved */
// Drop-in Tools
import { events } from '@dropins/tools/event-bus.js';
import { setEndpoint } from '@dropins/tools/fetch-graphql.js';
import { initializers } from '@dropins/tools/initializer.js';

// Drop-ins
import * as cart from '@dropins/storefront-cart/api.js';

// Libs
// import { getConfigValue } from './configs.js';

export default async function initializeDropins() {
  // Set Fetch Endpoint (Global)
  // setEndpoint(await getConfigValue('commerce-core-endpoint'));
  // TODO: change environment for test
  setEndpoint('https://graph.adobe.io/api/4c021fa7-5e16-476e-9af8-882b1bd8dba6/graphql?api_key=d600834d8a6c4b9782d4147933f61298');

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
