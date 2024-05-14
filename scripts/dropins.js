/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */

// Drop-in Tools
import { events } from '@dropins/tools/event-bus.js';
import { setEndpoint } from '@dropins/tools/fetch-graphql.js';
import { initializers } from '@dropins/tools/initializer.js';

// Drop-ins
import * as cartApi from '@dropins/storefront-cart/api.js';
import * as authApi from '@dropins/storefront-auth/api.js';
import * as checkoutApi from '@dropins/storefront-checkout/api.js';
import * as storefrontOrderConfirmation from '@dropins/storefront-order-confirmation/api.js';

// Libs
import { getConfigValue, getCookie } from './configs.js';

const setAuthHeader = (apiConfigs, token) => {
  apiConfigs.forEach(({ api, header, tokenPrefix }) => {
    api.setFetchGraphQlHeader(header, tokenPrefix ? `${tokenPrefix} ${token}` : token);
  });
};

const getUserTokenCookie = () => getCookie('auth_dropin_user_token');

export default async function initializeDropins() {
  events.enableLogger(true);

  // Set Fetch Endpoint (Global)
  setEndpoint(await getConfigValue('commerce-core-endpoint'));

  // Initializers (Global)
  initializers.register(authApi.initialize, {});
  initializers.register(cartApi.initialize, {});

  const apiConfigs = [
    { api: cartApi, header: 'Authorization', tokenPrefix: 'Bearer' },
    { api: authApi, header: 'Authorization', tokenPrefix: 'Bearer' },
    { api: checkoutApi, header: 'Authorization', tokenPrefix: 'Bearer' },
    { api: storefrontOrderConfirmation, header: 'Authorization', tokenPrefix: 'Bearer' },
  ];

  // After load or reload page we check token
  const token = getUserTokenCookie();

  setAuthHeader(apiConfigs, token);

  // Set auth headers
  events.on('authenticated', (isAuthenticated) => {
    if (isAuthenticated) {
      const updatedToken = getUserTokenCookie();

      setAuthHeader(apiConfigs, updatedToken);
    } else {
      setAuthHeader(apiConfigs, '');
    }
  });

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
    events.emit('authenticated', !!token);
  } else {
    window.addEventListener('load', () => {
      initializers.mount();
      events.emit('authenticated', !!token);
    });
  }
}
