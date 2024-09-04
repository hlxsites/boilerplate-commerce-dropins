/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { getCookie } from '../../scripts/configs.js';
import { initializers } from '@dropins/tools/initializer.js';
import * as orderApi from '@dropins/storefront-order/api.js';
import { events } from '@dropins/tools/event-bus.js';

export default async function decorate(block) {
  const isAuthenticated = !!getCookie('auth_dropin_user_token');

  const currentUrl = new URL(window.location.href);
  const orderRef = currentUrl.searchParams.get('orderRef');
  const orderToken = orderRef && orderRef.length > 20 ? orderRef : null;
  const orderNumber = orderRef && orderRef.length < 20 ? orderRef : null;

  if (orderToken) {
    initializers.register(orderApi.initialize, {
      orderToken,
    });
  } else if (orderNumber) {
    if (isAuthenticated) {
      initializers.register(orderApi.initialize, {
        orderId: orderNumber,
      });
    } else {
      window.location.href = `/order-status/search?orderRef=${orderNumber}`;
    }
  } else {
    if (isAuthenticated) {
      window.location.href = '/customer/orders';
    } else {
      window.location.href = '/order-status/search';
    }
  }

  events.on('order/error', () => {
    const isAuthenticatedOnErrorEvent = !!getCookie('auth_dropin_user_token');

    if (isAuthenticatedOnErrorEvent) {
      window.location.href = '/customer/orders';
    } else {
      // window.location.href = '/order-status/search';
    }
  });

  events.on('order/data', (orderData) => {
    if(!orderData) {
      const isAuthenticatedOnDataEvent = !!getCookie('auth_dropin_user_token');

      if (isAuthenticatedOnDataEvent) {
        window.location.href = '/customer/orders';
      } else {
        window.location.href = '/order-status/search';
      }
    }
  })
}
