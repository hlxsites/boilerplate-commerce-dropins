/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */

// Dropin Tools
import { initializers } from '@dropins/tools/initializer.js';
import { events } from '@dropins/tools/event-bus.js';

// Dropin APIs
import * as checkout from '@dropins/storefront-checkout/api.js';

// Dropin Providers
import { render as provider } from '@dropins/storefront-checkout/render.js';

// Dropin Containers
import Checkout from '@dropins/storefront-checkout/containers/Checkout.js';

export default async function decorate(block) {
  // If cartId is cached in session storage, use
  // otherwise, checkout dropin will look for one in the event-bus
  const cartId = sessionStorage.getItem('DROPINS_CART_ID') || '';

  // Initialize Dropins
  initializers.register(checkout.initialize, {});

  // Listen for order confirmation and redirect to order confirmation page
  events.on('checkout/order', (data) => {
    const orderRef = encodeURIComponent(data.token);
    window.location.replace(`/order-confirmation?orderRef=${orderRef}`);
  });

  return provider.render(Checkout, {
    cartId,
    routeHome: () => '/',
    routeCart: () => '/cart',
    slots: {
      PaymentMethods: async (context) => {
        context.addPaymentMethodHandler('checkmo', {
          render: (ctx, element) => {
            if (element) {
              // clear the element first
              element.innerHTML = '';
            }

            // Optionally, create and render some custom content here.
            // const $content = document.createElement('div');
            // $content.innerText = 'Custom Check / Money order handler';
            // ctx.appendHTMLElement($content);
          },
        });
      },
    },
  })(block);
}
