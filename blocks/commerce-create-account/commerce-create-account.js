/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { SignUp } from '@dropins/storefront-auth/containers/SignUp.js';
import { SuccessNotification } from '@dropins/storefront-auth/containers/SuccessNotification.js';
import { authLogoutService } from '@dropins/storefront-auth/service/authLogoutService.js';
import { render as authRenderer } from '@dropins/storefront-auth/render.js';
import { getCookie } from '../../scripts/configs.js';
import { h } from '../../scripts/preact.js';

export default function decorate(block) {
  const isAuthenticated = !!getCookie('auth_dropin_user_token');

  if (isAuthenticated) {
    window.location.href = '/customer/account';
  } else {
    authRenderer.render(SignUp, {
      apiVersion2: true,
      fieldsConfigForApiVersion1: [],
      inputsDefaultValueSet: [
        { code: 'firstname', default_value: 'Initial value from props' },
      ],
      formSize: 'default',
      onSignInRedirectUrl: '/customer/account',
      signInPageRedirectUrl: '/customer/login',
      successNotificationForm: (userName) => h(SuccessNotification, {
        formSize: 'default',
        headingText: `Welcome ${userName}!`,
        messageText: 'Your account has been successfully created.',
        primaryButtonText: 'My Account',
        secondaryButtonText: 'Logout',
        onPrimaryButtonClick: () => {
          window.location.href = '/customer/account';
        },
        onSecondaryButtonClick: async () => {
          await authLogoutService();
          window.location.href = '/';
        },
      }),
    })(block);
  }
}
