/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { UpdatePassword } from '@dropins/storefront-auth/containers/UpdatePassword.js';
import { SuccessNotification } from '@dropins/storefront-auth/containers/SuccessNotification.js';
import { authLogoutService } from '@dropins/storefront-auth/service/authLogoutService.js';
import { render as authRenderer } from '../../scripts/__dropins__/storefront-auth/render.js';
import { getCookie } from '../../scripts/configs.js';
import { h } from '../../scripts/preact.js';

export default function decorate(block) {
  const isAuthenticated = !!getCookie('auth_dropin_user_token');

  if (isAuthenticated) {
    window.location.href = '/customer/account';
  } else {
    authRenderer.render(UpdatePassword, {
      formSize: 'default',
      wrongUrlParamsRedirectUrl: '/customer/login',
      successNotificationForm: (userName) => h(SuccessNotification, {
        formSize: 'default',
        headingText: `Welcome ${userName}!`,
        messageText: 'Your password has been successfully updated.',
        primaryButtonText: 'Sign In',
        secondaryButtonText: 'Logout',
        onPrimaryButtonClick: () => {
          window.location.href = '/customer/login';
        },
        onSecondaryButtonClick: async () => {
          await authLogoutService();
          window.location.href = '/';
        },
      }),
    })(block);
  }
}
