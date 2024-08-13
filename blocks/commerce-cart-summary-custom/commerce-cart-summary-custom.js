import { render as provider } from '@dropins/storefront-cart/render.js';
import CartSummaryList from '@dropins/storefront-cart/containers/CartSummaryList.js';
import { InLineAlert, Icon } from '@dropins/tools/components.js';
import { readBlockConfig } from '../../scripts/aem.js';

export default async function decorate(block) {
  const {
    'hide-heading': hideHeading = 'false',
    'start-shopping-url': startShoppingURL = '',
    'max-items': maxItems,
    'hide-attributes': hideAttributes = '',
    'enable-item-quantity-update': enableUpdateItemQuantity = 'false',
    'enable-item-remove': enableRemoveItem = 'true',
  } = readBlockConfig(block);

  block.innerHTML = '';

  return provider.render(CartSummaryList, {
    hideHeading: hideHeading === 'true',
    routeProduct: (product) => `/products/${product.url.urlKey}/${product.sku}`,
    routeEmptyCartCTA: startShoppingURL ? () => startShoppingURL : undefined,
    maxItems: parseInt(maxItems, 10) || undefined,
    attributesToHide: hideAttributes.split(',').map((attr) => attr.trim().toLowerCase()),
    enableUpdateItemQuantity: enableUpdateItemQuantity === 'true',
    enableRemoveItem: enableRemoveItem === 'true',

    onItemRemove: (product) => {
      const alert = document.createElement('div');
      alert.classList.add('alert-banner');

      const name = product.name || 'item';

      provider.render(InLineAlert, {
        heading: `Do you want to move this "${name}" to favorite?`,
        variant: 'secondary',
        icon: Icon({ source: 'Heart' }),
        additionalActions: [{
          label: 'Yes',
          onClick: () => {
            console.log('Saved as Favorite', product);
          },
        },
        {
          label: 'No',
          onClick: () => {
            alert.remove();
          },
        }],
      })(alert);

      block.prepend(alert);
    },
  })(block);
}
