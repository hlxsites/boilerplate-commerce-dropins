import Cart from '@dropins/storefront-cart/containers/Cart.js';
import { readBlockConfig } from '../../scripts/aem.js';

export default function decorate(block) {
  const config = readBlockConfig(block);

  const content = document.createRange().createContextualFragment(`<div>
    Commerce Cart drop-in
    <pre>${JSON.stringify(config, null, 2)}</pre>
  </div>`);

  block.textContent = '';
  block.append(content);
}
