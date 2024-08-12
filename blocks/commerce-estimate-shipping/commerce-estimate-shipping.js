import { render as provider } from '@dropins/storefront-cart/render.js';
import EstimateShipping from '@dropins/storefront-cart/containers/EstimateShipping.js';
// import { readBlockConfig } from '../../scripts/aem.js';

export default async function decorate(block) {
// const {  } = readBlockConfig(block);

  block.innerHTML = '';

  return provider.render(EstimateShipping, { })(block);
}
