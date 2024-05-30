// TODO - This module supposed to add link to trigger auth dropdown in header for demo purposes
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { SuccessNotification } from '@dropins/storefront-auth/containers/SuccessNotification.js';
import * as authApi from '@dropins/storefront-auth/api.js';
import { render as authRenderer } from '@dropins/storefront-auth/render.js';
import { SignIn } from '@dropins/storefront-auth/containers/SignIn.js';
import { events } from '@dropins/tools/event-bus.js';
import { getCookie } from '../../scripts/configs.js';
import { h } from '../../scripts/preact.js';

const resetForm = () => {
  document.querySelectorAll('form').forEach((el) => {
    if (el) el.reset();
  });
};

function checkAndRedirect(checkUrl, redirectUrl) {
  // If the user is on the dashboard page and initiates logout,
  // they will be redirected to the login page.
  const currentUrl = window.location.pathname;

  if (currentUrl.includes(checkUrl)) {
    window.location.href = `${window.location.origin}${redirectUrl}`;
  }
}

function renderSignIn(element) {
  const wrapperBlock = document.createElement('div');

  authRenderer.render(SignIn, {
    onSuccessCallback: () => {
      checkAndRedirect('/customer/login', '/customer/account');
      const updatedPopupElements = getPopupElements();

      renderPopupContent(true, updatedPopupElements);
    },
    formSize: 'small',
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
  })(wrapperBlock);

  element.appendChild(wrapperBlock);
}

function getPopupElements() {
  const headerBlock = document.querySelector('.header.block');
  const headerLoginButton = document.querySelector('#header-login-button');
  const popupElement = document.querySelector('#popup-menu');
  const popupMenuContainer = document.querySelector('.popupMenuContainer');

  return {
    headerBlock,
    headerLoginButton,
    popupElement,
    popupMenuContainer,
  };
}

function renderPopupContent(isAuthenticated, popupElements) {
  const { headerLoginButton, popupElement, popupMenuContainer } = popupElements;

  popupMenuContainer.innerHTML = '';

  if (isAuthenticated) {
    popupElement.style.minWidth = '250px';

    if (headerLoginButton) {
      headerLoginButton.textContent = `Hello, ${getCookie('auth_dropin_firstname')}`;
    }

    popupMenuContainer.insertAdjacentHTML(
      'afterend',
      `<ul class="popupMenuUrlList">
          <li><a href="/customer/account">My Account</a></li>
          <li><a href="/products/hollister-backyard-sweatshirt/MH05">Product page</a></li>
          <li><button class="logoutButton">Logout</button></li>
        </ul>`,
    );
  } else {
    renderSignIn(popupMenuContainer);
  }
}

const initPopupEventListeners = (popupElements) => {
  const { headerBlock, popupElement } = popupElements;

  document.addEventListener('click', async (event) => {
    const logoutButton = event.target.closest('.logoutButton');

    if (logoutButton) {
      await authApi.revokeCustomerToken();
      checkAndRedirect('/customer/account', '/customer/login');
    }
  });

  headerBlock.addEventListener('click', (event) => {
    const headerLoginButton = event.target.closest('#header-login-button');

    if (headerLoginButton) {
      headerLoginButton.classList.toggle('backgroundColor');
      popupElement.classList.toggle('showPopUp');
    }
  });

  popupElement.addEventListener('click', (event) => {
    const iconCloseModal = event.target.closest('.iconClosePopUp');

    if (iconCloseModal) {
      resetForm();
      popupElement.classList.toggle('showPopUp');
    }
  });

  document.addEventListener('keydown', (event) => {
    const headerLoginButton = document.querySelector('#header-login-button');

    if (event.key === 'Escape') {
      resetForm();
      popupElement.classList.remove('showPopUp');
      if (headerLoginButton) headerLoginButton.classList.remove('backgroundColor');
    }
  });
};

// eslint-disable-next-line import/prefer-default-export
export const renderAuthDropdown = (navSectionsEl) => {
  const isAuthenticated = !!getCookie('auth_dropin_user_token');

  navSectionsEl.insertAdjacentHTML(
    'afterend',
    `<div class="wrapperPopUpButton" id="wrapper-pop-up-button">
      <button type="button" id="header-login-button">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path vector-effect="non-scaling-stroke" d="M11.8052 14.4968C10.8552 14.4968 9.9752 14.0268 9.4452 13.2368L9.4152 13.1868L9.3852 13.1268C8.1352 11.2268 7.5352 8.96681 7.6852 6.68681C7.7552 4.42681 9.6052 2.61681 11.8652 2.60681H12.0052C14.2752 2.47681 16.2152 4.21681 16.3452 6.47681C16.3452 6.55681 16.3452 6.62681 16.3452 6.70681C16.4852 8.94681 15.9052 11.1768 14.6852 13.0568L14.6052 13.1768C14.0552 13.9868 13.1352 14.4668 12.1652 14.4768H12.0052C11.9352 14.4768 11.8652 14.4868 11.7952 14.4868L11.8052 14.4968Z" stroke="currentColor"/>
        <path vector-effect="non-scaling-stroke" d="M4.3252 21.5469C4.3552 20.4169 4.4752 19.2869 4.6752 18.1769C4.8952 17.1669 6.4752 16.0269 8.9052 15.1569C9.2352 15.0369 9.4852 14.7869 9.5952 14.4569L9.8052 14.0269" stroke="currentColor"/>
        <path vector-effect="non-scaling-stroke" d="M14.425 14.4069L14.165 14.1569C14.375 14.5969 14.725 14.9569 15.155 15.1869C16.945 15.7969 19.125 16.9569 19.375 18.2069C19.585 19.3069 19.685 20.4269 19.675 21.5369" stroke="currentColor"/>
        </svg>
      <span>Sign in</span>
      </button>
      <div id="modalHeaderContainer">
        <div class="popupMenu" id="popup-menu">
          <div class="popupMenuContent">
            <div class="popupMenuContainer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="iconClosePopUp ${
  isAuthenticated ? 'isHidden' : ''
}">
                <path vector-effect="non-scaling-stroke" d="M18.3599 5.64001L5.62988 18.37" stroke="currentColor"/>
                <path vector-effect="non-scaling-stroke" d="M18.3599 18.37L5.62988 5.64001" stroke="currentColor"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>`,
  );

  const popupElements = getPopupElements();

  const { popupMenuContainer } = popupElements;

  if (popupMenuContainer) {
    renderPopupContent(isAuthenticated, popupElements);
    initPopupEventListeners(popupElements);
  }
};

events.on(
  'authenticated',
  (isAuthenticated) => {
    if (!isAuthenticated) {
      const headerLoginButton = document.getElementById('header-login-button');
      const popupMenu = document.querySelector('.popupMenu');
      const popupMenuUrlList = document.querySelector('.popupMenuUrlList');
      const popupMenuContainer = document.querySelector(
        '.popupMenu > .popupMenuContent .popupMenuContainer',
      );

      popupMenuContainer.innerHTML = '';

      headerLoginButton.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path vector-effect="non-scaling-stroke" d="M11.8052 14.4968C10.8552 14.4968 9.9752 14.0268 9.4452 13.2368L9.4152 13.1868L9.3852 13.1268C8.1352 11.2268 7.5352 8.96681 7.6852 6.68681C7.7552 4.42681 9.6052 2.61681 11.8652 2.60681H12.0052C14.2752 2.47681 16.2152 4.21681 16.3452 6.47681C16.3452 6.55681 16.3452 6.62681 16.3452 6.70681C16.4852 8.94681 15.9052 11.1768 14.6852 13.0568L14.6052 13.1768C14.0552 13.9868 13.1352 14.4668 12.1652 14.4768H12.0052C11.9352 14.4768 11.8652 14.4868 11.7952 14.4868L11.8052 14.4968Z" stroke="currentColor"/>
            <path vector-effect="non-scaling-stroke" d="M4.3252 21.5469C4.3552 20.4169 4.4752 19.2869 4.6752 18.1769C4.8952 17.1669 6.4752 16.0269 8.9052 15.1569C9.2352 15.0369 9.4852 14.7869 9.5952 14.4569L9.8052 14.0269" stroke="currentColor"/>
            <path vector-effect="non-scaling-stroke" d="M14.425 14.4069L14.165 14.1569C14.375 14.5969 14.725 14.9569 15.155 15.1869C16.945 15.7969 19.125 16.9569 19.375 18.2069C19.585 19.3069 19.685 20.4269 19.675 21.5369" stroke="currentColor"/>
        </svg>
        <span>Sign In</span>
      `;

      popupMenuUrlList.remove();

      popupMenu.style.minWidth = '330px';

      renderSignIn(popupMenuContainer);
    }
  },
);
