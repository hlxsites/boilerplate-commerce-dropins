/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { SignIn } from '@dropins/storefront-auth/containers/SignIn.js';
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
    authRenderer.render(SignIn, {
      formSize: 'default',
      forgotPasswordPageRedirectUrl: '/customer/forgotpassword',
      successNotificationForm: (userName) => h(SuccessNotification, {
        formSize: 'default',
        className: 'initClass',
        headingText: `Welcome ${userName}`,
        messageText: 'Your account has been successfully created.',
        primaryButtonText: 'My Account',
        secondaryButtonText: 'Logout',
        onPrimaryButtonClick: () => {
          window.location.href = '/customer/account';
        },
        onSecondaryButtonClick: async () => {
          await authLogoutService();
          window.location.href = '/customer/login';
        },
      }),
    })(block);
  }
}
