/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { OrdersList } from '@dropins/storefront-account/containers/OrdersList.js';
import { render as accountRendered } from '@dropins/storefront-account/render.js';
import { getCookie } from '../../scripts/configs.js';

export default function decorate(block) {
  const isAuthenticated = !!getCookie('auth_dropin_user_token');

  if (!isAuthenticated) {
    window.location.href = '/customer/login';
  } else {
    accountRendered.render(OrdersList, {
      minifiedView: false,
      withThumbnails: true,
    })(block);
  }
}
