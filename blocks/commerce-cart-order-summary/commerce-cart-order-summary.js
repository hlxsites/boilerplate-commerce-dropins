import { render as provider } from '@dropins/storefront-cart/render.js';
import OrderSummary from '@dropins/storefront-cart/containers/OrderSummary.js';
import EstimateShipping from '@dropins/storefront-cart/containers/EstimateShipping.js';
import { Button, Icon, provider as UI } from '@dropins/tools/components.js';
import { createModal } from '../modal/modal.js';
import { readBlockConfig } from '../../scripts/aem.js';

export default async function decorate(block) {
  const {
    'checkout-url': checkoutURL = '',
    'enable-estimate-shipping': enableEstimateShipping = 'false', // true | false | modal
  } = readBlockConfig(block);

  block.innerHTML = '';

  return provider.render(OrderSummary, {
    routeProduct: (product) => `/products/${product.url.urlKey}/${product.sku}`,
    routeCheckout: checkoutURL ? () => checkoutURL : undefined,
    slots: {
      EstimateShipping: async (ctx) => {
        if (enableEstimateShipping === 'true') {
          const wrapper = document.createElement('div');
          await provider.render(EstimateShipping, {})(wrapper);
          ctx.replaceWith(wrapper);
        }

        if (enableEstimateShipping === 'modal') {
          const wrapper = document.createElement('div');
          wrapper.classList.add('estimate-shipping-wrapper');

          await UI.render(Button, {
            children: 'Estimate Shipping',
            variant: 'secondary',
            icon: Icon({
              source: 'Delivery',
            }),
            onClick: async () => {
              // Create new Modal
              const estimateShippingModal = document.createElement('div');
              estimateShippingModal.classList.add('estimate-shipping-modal');

              // Modal Content
              await provider.render(EstimateShipping, {})(estimateShippingModal);

              // Show Modal
              const modal = await createModal([estimateShippingModal]);
              modal.showModal();
            },
          })(wrapper);

          ctx.replaceWith(wrapper);
        }
      },
    },
  })(block);
}
