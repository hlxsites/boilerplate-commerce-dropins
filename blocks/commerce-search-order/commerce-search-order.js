/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { SignIn } from '@dropins/storefront-auth/containers/SignIn.js';
import { OrderSearch } from '@dropins/storefront-order/containers/OrderSearch.js';
import { render as authRenderer } from '@dropins/storefront-auth/render.js';
import { render as orderRenderer } from '@dropins/storefront-order/render.js';
import * as orderApi from '@dropins/storefront-order/api.js';
import * as authApi from '@dropins/storefront-auth/api.js';
import { events } from '@dropins/tools/event-bus.js';
import { initializers } from '@dropins/tools/initializer.js';
import { getCookie } from '../../scripts/configs.js';

const checkIsOrderBelongsToCustomer = async (orderEmail) => {
  try {
    const customerData = await authApi.getCustomerData();
    return customerData.email === orderEmail;
  } catch {
    return false;
  }
};

const renderSignIn = async (element, email, orderNumber) => authRenderer.render(SignIn, {
  initialEmailValue: email,
  renderSignUpLink: false,
  labels: {
    formTitleText: 'Enter your password to view order details',
    primaryButtonText: 'View order',
  },
  routeForgotPassword: () => 'reset-password.html',
  routeRedirectOnSignIn: () => `/customer/order?orderRef=${orderNumber}`,
})(element);

export default async function decorate(block) {
  const isAuthenticated = !!getCookie('auth_dropin_user_token');

  const currentUrl = new URL(window.location.href);
  const orderRef = currentUrl.searchParams.get('orderRef');
  const orderToken = orderRef && orderRef.length > 20 ? orderRef : null;
  const orderNumber = orderRef && orderRef.length < 20 ? orderRef : null;

  events.on('order/data', async (orderData) => {
    const isAuthenticatedOnDataEvent = !!getCookie('auth_dropin_user_token');

    if (isAuthenticatedOnDataEvent) {
      const isOrderBelongsToCustomer = await checkIsOrderBelongsToCustomer(orderData.email);

      if (isOrderBelongsToCustomer) {
        window.location.href = `/customer/order?orderRef=${orderData.number}`;
      } else {
        window.location.href = `/order-status?orderRef=${orderData.token}`;
      }
    } else {
      window.location.href = `/order-status?orderRef=${orderData.token}`;
    }
  });

  if (orderToken) {
    events.on('order/error', () => {
      const isAuthenticatedOnErrorEvent = !!getCookie('auth_dropin_user_token');

      if (isAuthenticatedOnErrorEvent) {
        window.location.href = '/customer/orders';
      } else {
        window.location.href = '/order-status/search';
      }
    });

    // Initialize order data if token provided
    initializers.register(orderApi.initialize, {
      orderToken,
    });
  } else if (orderNumber) {
    if (isAuthenticated) {
      window.location.href = `/customer/order?orderRef=${orderNumber}`;
    } else {
      await renderSignIn(block, '', orderNumber);
    }
  } else {
    await orderRenderer.render(OrderSearch, {
      onError: async (errorInformation) => {
        const { error, formValues } = errorInformation;

        if (error === 'Please login to view the order.') {
          const { email, number } = formValues;

          const isOrderBelongsToCustomer = await checkIsOrderBelongsToCustomer(email);

          if (isOrderBelongsToCustomer) {
            window.location.href = `/customer/order?orderRef=${number}`;
          } else {
            await renderSignIn(block, email, number);
          }

          // Hide error message
          return false;
        }
      },
    })(block);
  }
}
