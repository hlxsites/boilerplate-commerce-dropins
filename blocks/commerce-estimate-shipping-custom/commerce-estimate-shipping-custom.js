import { Button, Icon } from '@dropins/tools/components.js';
import { render as provider } from '@dropins/storefront-cart/render.js';
import EstimateShipping from '@dropins/storefront-cart/containers/EstimateShipping.js';
import { createModal } from '../modal/modal.js';

export default async function decorate(block) {
  block.innerHTML = '';

  // Create new Button
  const cta = document.createElement('div');

  await provider.render(Button, {
    children: 'Estimate Shipping',
    variant: 'tertiary',
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
  })(cta);

  block.appendChild(cta);
}
