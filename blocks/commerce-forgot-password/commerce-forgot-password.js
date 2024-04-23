/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { ResetPassword } from '@dropins/storefront-auth/containers/ResetPassword.js';
import { render as authRenderer } from '@dropins/storefront-auth/render.js';
import { getCookie } from '../../scripts/configs.js';

export default function decorate(block) {
  const isAuthenticated = !!getCookie('auth_dropin_user_token');

  if (isAuthenticated) {
    window.location.href = '/customer/account';
  } else {
    authRenderer.render(ResetPassword, {
      routeSignIn: () => '/customer/login',
    })(block);
  }
}
