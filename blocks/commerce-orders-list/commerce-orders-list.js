/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { render as accountRenderer } from '@dropins/storefront-account/render.js';
import { events } from '@dropins/tools/event-bus.js';
import { initializers } from '@dropins/tools/initializer.js';
import * as orderApi from '@dropins/storefront-order/api.js';
import { OrdersList } from '../../scripts/__dropins__/storefront-account/containers/OrdersList.js';
import { getCookie } from '../../scripts/configs.js';
import { readBlockConfig } from '../../scripts/aem.js';

export default async function decorate(block) {
  const isAuthenticated = !!getCookie('auth_dropin_user_token');

  const {
    'minified-view': minifiedViewConfig = 'false',
  } = readBlockConfig(block);

  if (!isAuthenticated) {
    window.location.href = '/customer/login';
  } else {
    const currentUrl = new URL(window.location.href);
    const orderIdUrlParam = currentUrl.searchParams.get('id');

    if (orderIdUrlParam) {
      events.on('order/data', (orderData) => {
        const indentedOrderData = JSON.stringify(orderData, null, 4);
        block.innerHTML = `<pre>${indentedOrderData}</pre>`;
      });

      // Initialize order data if token provided
      initializers.register(orderApi.initialize, {
        orderIdUrlParam,
      });
    } else {
      await accountRenderer.render(OrdersList, {
        minifiedView: minifiedViewConfig === 'true',
        withThumbnails: true,
        routeOrdersList: () => '/customer/orders',
        routeOrderDetails: (orderId) => `/customer/orders?id=${orderId}`,
        slots: {
          // OrdersListCard: (ctx) => {
          //   console.log('OrdersListCard', ctx);
          // },
          // OrdersListAction: (ctx) => {
          //   console.log('OrdersListAction', ctx);
          // },
        },
      })(block);
    }
  }
}
