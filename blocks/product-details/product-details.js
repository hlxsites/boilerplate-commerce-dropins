/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */

// Drop-in Tools
import { initializers } from '@dropins/tools/initializer.js';

// Drop-in APIs
import { addProductsToCart } from '@dropins/storefront-cart/api.js';
import * as product from '@dropins/storefront-pdp/api.js';

// Drop-in Providers
import { render as productRenderer } from '@dropins/storefront-pdp/render.js';

// Drop-in Containers
import ProductDetails from '@dropins/storefront-pdp/containers/ProductDetails.js';

// Libs
import { getSkuFromUrl } from '../../scripts/commerce.js';
import { getConfigValue } from '../../scripts/configs.js';

export default async function decorate(block) {
  // Initialize Drop-ins
  initializers.register(product.initialize, {});

  // Set Fetch Endpoint (Service)
  product.setEndpoint(await getConfigValue('commerce-endpoint'));

  // Set Fetch Headers (Service)
  product.setFetchGraphQlHeaders({
    'Content-Type': 'application/json',
    'Magento-Environment-Id': await getConfigValue('commerce-environment-id'),
    'Magento-Website-Code': await getConfigValue('commerce-website-code'),
    'Magento-Store-View-Code': await getConfigValue('commerce-store-view-code'),
    'Magento-Store-Code': await getConfigValue('commerce-store-code'),
    'Magento-Customer-Group': await getConfigValue('commerce-customer-group'),
    'x-api-key': await getConfigValue('commerce-x-api-key'),
  });

  // Render Containers

  return productRenderer.render(ProductDetails, {
    sku: getSkuFromUrl(),
    carousel: {
      controls: 'dots', // 'thumbnailsColumn', 'thumbnailsRow', 'dots'
      mobile: true,
    },
    slots: {
      Actions: (ctx) => {
        // Add to Cart Button
        ctx.appendButton((next, state) => {
          const adding = state.get('adding');
          return {
            text: adding ? 'Adding to Cart' : 'Add to Cart',
            icon: 'Cart',
            variant: 'primary',
            disabled: adding || !next.data.inStock,
            onClick: async () => {
              try {
                state.set('adding', true);

                if (!next.valid) {
                  // eslint-disable-next-line no-console
                  console.warn('Invalid product', next.values);
                  return;
                }

                await addProductsToCart([{ ...next.values }]);
              } catch (error) {
                // eslint-disable-next-line no-console
                console.warn('Error adding product to cart', error);
              } finally {
                state.set('adding', false);
              }
            },
          };
        });

        // Add to Wishlist Button
        // ctx.appendButton(() => ({
        //   icon: 'Heart',
        //   variant: 'secondary',
        //   text: 'Add to Wishlist',
        //   onClick: () => console.debug('Add to Wishlist', ctx.data),
        // }));
      },
    },
  })(block);
}
