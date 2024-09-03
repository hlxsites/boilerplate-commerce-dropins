/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { getCookie } from '../../scripts/configs.js';
import { initializers } from '@dropins/tools/initializer.js';
import * as orderApi from '@dropins/storefront-order/api.js';
import { events } from '@dropins/tools/event-bus.js';

export default async function decorate(block) {
  const currentUrl = new URL(window.location.href);
  const orderToken = currentUrl.searchParams.get('orderToken');
  const orderNumber = currentUrl.searchParams.get('orderNumber');

  if (orderToken) {
    initializers.register(orderApi.initialize, {
      orderToken,
    });
  } else if (orderNumber) {
    initializers.register(orderApi.initialize, {
      orderId: orderNumber,
    });
  } else {
    const isAuthenticated = !!getCookie('auth_dropin_user_token');

    if (isAuthenticated) {
      window.location.href = '/customer/orders';
    } else {
      window.location.href = '/orderstatus';
    }
  }

  // events.on('order/error', () => {
  //   const isAuthenticated = !!getCookie('auth_dropin_user_token');
  //
  //   if (isAuthenticated) {
  //     window.location.href = '/customer/orders';
  //   } else {
  //     window.location.href = '/orderstatus';
  //   }
  // });
}
