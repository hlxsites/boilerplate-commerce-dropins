/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */

// Drop-in Tools
import { initializers } from '@dropins/tools/initializer.js';

// Drop-in APIs
import * as orderConfirmation from '@dropins/storefront-order-confirmation/api.js';

// Drop-in Providers
import { render as provider } from '@dropins/storefront-order-confirmation/render.js';

// Drop-in Containers
import OrderConfirmation from '@dropins/storefront-order-confirmation/containers/OrderConfirmation.js';

import { getConfigValue } from '../../scripts/configs.js';

export default async function decorate(block) {
  // Initialize Drop-ins
  initializers.register(orderConfirmation.initialize, {});

  // Set Fetch Endpoint (Service) if not yet set
  const gqlConfig = orderConfirmation.getConfig();
  if (!gqlConfig.endpoint) {
    orderConfirmation.setEndpoint(await getConfigValue('commerce-core-endpoint'));
  }

  const params = new URLSearchParams(window.location.search);
  const token = params.get('orderRef');

  return provider.render(OrderConfirmation, {
    token,
    routeHome: () => '/',
    routeSupport: () => '/support',
  })(block);
}
