/* eslint-disable import/no-unresolved */
// Drop-in Tools
import { events } from '@dropins/tools/event-bus.js';
import { setEndpoint, setFetchGraphQlHeaders } from '@dropins/tools/fetch-graphql.js';
import { initializers } from '@dropins/tools/initializer.js';

// Drop-ins
import * as cart from '@dropins/storefront-cart/api.js';

// Libs
import { getConfigValue } from './configs.js';
import getCookie from './cookie.js';

export default async function initializeDropins() {
  // Set Fetch Endpoint (Global)
  setEndpoint(await getConfigValue('commerce-core-endpoint'));

  // TODO: Do we need to apply this in other dropin blocks such as minicart/cart or checkout?
  const aepCookie = getCookie('aep-segments-membership');
  if (aepCookie) {
    setFetchGraphQlHeaders({
      'aep-segments-membership': aepCookie,
    });
  }

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
