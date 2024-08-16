/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */

// Drop-in Tools
import { events } from '@dropins/tools/event-bus.js';
import {
  removeFetchGraphQlHeader,
  setEndpoint,
  setFetchGraphQlHeader,
} from '@dropins/tools/fetch-graphql.js';
import { initializers } from '@dropins/tools/initializer.js';

// Drop-ins
import * as authApi from '@dropins/storefront-auth/api.js';
import * as cartApi from '@dropins/storefront-cart/api.js';

// Recaptcha
import * as recaptcha from '@dropins/tools/recaptcha.js';

// Libs
import { getConfigValue, getCookie } from './configs.js';

export const getUserTokenCookie = () => getCookie('auth_dropin_user_token');

// Update auth headers
const setAuthHeaders = (state) => {
  if (state) {
    const token = getUserTokenCookie();
    setFetchGraphQlHeader('Authorization', `Bearer ${token}`);
  } else {
    removeFetchGraphQlHeader('Authorization');
  }
};

const persistCartDataInSession = (data) => {
  if (data?.id) {
    sessionStorage.setItem('DROPINS_CART_ID', data.id);
  } else {
    sessionStorage.removeItem('DROPINS_CART_ID');
  }
};

export default async function initializeDropins() {
  // Mount all registered drop-ins
  const mount = async () => {
    events.enableLogger(true);

    // Set Fetch Endpoint (Global)
    setEndpoint(await getConfigValue('commerce-core-endpoint'));

    // Recaptcha
    recaptcha.setConfig();

    // Initializers (Global)
    initializers.register(authApi.initialize, {});
    initializers.register(cartApi.initialize, {});

    // Set auth headers on authenticated event
    events.on('authenticated', setAuthHeaders);

    // Cache cart data in session storage
    events.on('cart/data', persistCartDataInSession, { eager: true });

    // on page load, check if user is authenticated
    const token = getUserTokenCookie();
    // set auth headers
    setAuthHeaders(!!token);
    // emit authenticated event if token has changed
    events.emit('authenticated', !!token);

    // Mount all registered initial
    initializers.mount();
  };

  // Mount all registered drop-ins
  if (document.readyState === 'complete') {
    mount();
  } else {
    // Handle on prerendering document activated
    document.addEventListener('prerenderingchange', mount, { once: true });
    // Handle on page load
    window.addEventListener('load', mount, { once: true });
  }
}

export function getCartDataFromCache() {
  return cartApi.getCartDataFromCache();
}
