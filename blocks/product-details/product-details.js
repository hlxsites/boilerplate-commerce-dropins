/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */

// Drop-in Tools
import { initializers } from '@dropins/tools/initializer.js';

// Drop-in APIs
import * as product from '@dropins/storefront-pdp/api.js';
// import { addProductsToCart } from '@dropins/storefront-cart/api.js';

// Drop-in Providers
import { render as productRenderer } from '@dropins/storefront-pdp/render.js';

// Drop-in Containers
// import ProductDetails from '@dropins/storefront-pdp/containers/ProductDetails.js';

// Libs
import { getConfigValue } from '../../scripts/configs.js';
// import { getSkuFromUrl } from '../../scripts/commerce.js';

export default async function decorate(block) {
  // const sku = getSkuFromUrl();

  const title = document.createElement('h1');
  title.innerHTML = "I'm here";
  block.appendChild(title);

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
  // return productRenderer.render(ProductDetails, {
  //   sku,
  //   // carousel: {
  //   //   controls: 'dots', // 'thumbnailsColumn', 'thumbnailsRow', 'dots'
  //   //   // mobile: true,
  //   // },
  //   slots: {
  //     Title: (ctx) => {
  //       // Title Decoration
  //       const decoration = document.createElement('div');
  //       decoration.classList.add('title-decoration');
  //       decoration.innerHTML = 'WKND Essentials';

  //       ctx.prependSibling(decoration);

  //       // Rating
  //       const ratings = document.createElement('div');
  //       ratings.classList.add('ratings');
  //       ratings.innerHTML = '⭐️⭐️⭐️⭐️';

  //       ctx.appendSibling(ratings);
  //     },
  //     Quantity: (ctx) => {
  //       const label = document.createElement('div');
  //       label.classList.add('quantity-label');
  //       label.innerHTML = 'Quantity';

  //       ctx.prependChild(label);

  //       const promo = document.createElement('div');
  //       promo.classList.add('quantity-promo');
  //       promo.innerHTML = 'Buy 3 or more to get a free month of WKND+';

  //       ctx.appendChild(promo);
  //     },
  //     Actions: (ctx) => {
  //       // Add to Cart Button
  //       ctx.appendButton((next, state) => {
  //         const adding = state.get('adding');
  //         return {
  //           text: adding ? 'Adding to Cart' : 'Add to Cart',
  //           icon: 'Cart',
  //           variant: 'primary',
  //           disabled: adding || !next.data.inStock,
  //           onClick: async () => {
  //             try {
  //               state.set('adding', true);

  //               if (!next.valid) {
  //                 // eslint-disable-next-line no-console
  //                 console.warn('Invalid product', next.values);
  //                 return;
  //               }

  //               await addProductsToCart([{ ...next.values }]);
  //             } catch (error) {
  //               // eslint-disable-next-line no-console
  //               console.warn('Error adding product to cart', error);
  //             } finally {
  //               state.set('adding', false);
  //             }
  //           },
  //         };
  //       });

  //       ctx.appendButton(() => ({
  //         text: 'Like',
  //         icon: 'Heart',
  //         variant: 'secondary',
  //         disabled: true,
  //       }));

  //       // Promo Link
  //       const promoLink = document.createElement('a');
  //       promoLink.classList.add('quantity-banner');
  //       promoLink.innerHTML = 'Get Free Month Subscription';
  //       promoLink.setAttribute('href', '#');

  //       ctx.appendChild(promoLink);

  //       ctx.onChange((next) => {
  //         const valid = next.values.quantity >= 3;

  //         if (valid) {
  //           promoLink.style.display = 'block';
  //         } else {
  //           promoLink.style.display = 'none';
  //         }
  //       });
  //     },
  //   },
  // })(block);
}
