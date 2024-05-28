// TODO - This module supposed to add link to authCombine container for demo purposes
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { render as authRenderer } from '@dropins/storefront-auth/render.js';
import { AuthCombine } from '@dropins/storefront-auth/containers/AuthCombine.js';
import { SuccessNotification } from '@dropins/storefront-auth/containers/SuccessNotification.js';
import * as authApi from '@dropins/storefront-auth/api.js';
import { h } from '../../scripts/preact.js';

const signInFormConfig = {
  renderSignUpLink: true,
  routeForgotPassword: () => '/customer/forgotpassword',
  successNotificationForm: (userName) => h(SuccessNotification, {
    headingText: `Welcome ${userName}`,
    messageText: 'You have successfully logged in.',
    primaryButtonText: 'My Account',
    secondaryButtonText: 'Logout',
    onPrimaryButtonClick: () => {
      window.location.href = '/customer/account';
    },
    onSecondaryButtonClick: async () => {
      await authApi.revokeCustomerToken();
      window.location.href = '/';
    },
  }),
};

const signUpFormConfig = {
  routeSignIn: () => '/customer/login',
  routeRedirectOnSignIn: () => '/customer/account',
  successNotificationForm: (userName) => h(SuccessNotification, {
    headingText: `Welcome ${userName}!`,
    messageText: 'Your account has been successfully created.',
    primaryButtonText: 'My Account',
    secondaryButtonText: 'Logout',
    onPrimaryButtonClick: () => {
      window.location.href = '/customer/account';
    },
    onSecondaryButtonClick: async () => {
      await authApi.revokeCustomerToken();
      window.location.href = '/';
    },
  }),
};

const resetPasswordFormConfig = {
  routeSignIn: () => '/customer/login',
};

const onHeaderLinkClick = () => {
  const signInModal = document.createElement('div');
  signInModal.setAttribute('id', 'auth-combine-modal');
  signInModal.onclick = () => {
    signInModal.remove();
  };

  const signInForm = document.createElement('div');
  signInForm.setAttribute('id', 'auth-combine-wrapper');
  signInForm.onclick = (event) => {
    event.stopPropagation();
  };

  signInModal.appendChild(signInForm);
  document.body.appendChild(signInModal);

  authRenderer.render(AuthCombine, {
    signInFormConfig,
    signUpFormConfig,
    resetPasswordFormConfig,
  })(signInForm);
};

const renderAuthCombine = (navSections) => {
  const navListEl = navSections.querySelector('.default-content-wrapper > ul');

  const test = document.createElement('li');
  test.innerText = 'Combined Auth';
  test.addEventListener('click', () => {
    onHeaderLinkClick();
  });

  navListEl.appendChild(test);
};

export default renderAuthCombine;
