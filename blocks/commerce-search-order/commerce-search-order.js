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

// TODO
const renderOrderDetails = (orderData, block) => {
  const indentedOrderData = JSON.stringify(orderData, null, 4);
  block.innerHTML = `<pre>${indentedOrderData}</pre>`;
};

const setTokenInUrl = (token) => {
  const currentUrl = new URL(window.location.href);
  currentUrl.searchParams.set('token', token);
  window.history.pushState({}, '', currentUrl);
};

const renderSignIn = async (element, email, orderNumber) => authRenderer.render(SignIn, {
  initialEmailValue: email,
  renderSignUpLink: false,
  labels: {
    formTitleText: 'Enter your password to view order details',
    primaryButtonText: 'View order',
  },
  routeForgotPassword: () => 'reset-password.html',
  routeRedirectOnSignIn: () => `/customer/orders?orderNumber=${orderNumber}`,
})(element);

export default async function decorate(block) {
  const currentUrl = new URL(window.location.href);
  const orderToken = currentUrl.searchParams.get('token');

  events.on('order/data', async (orderData) => {
    const isAuthenticated = !!getCookie('auth_dropin_user_token');

    if (isAuthenticated) {
      const isOrderBelongsToCustomer = await checkIsOrderBelongsToCustomer(orderData.email);
      if (isOrderBelongsToCustomer) {
        window.location.href = `/customer/orders?orderNumber=${orderData.number}`;
      } else {
        setTokenInUrl(orderData.token);
        renderOrderDetails(orderData, block);
      }
    } else {
      setTokenInUrl(orderData.token);
      renderOrderDetails(orderData, block);
    }
  });

  if (orderToken) {
    // If error occurs during initialisation (e.g.: incorrect token) - redirect to /orderstatus
    events.on('order/error', () => {
      window.location.href = '/orderstatus';
    });

    // Initialize order data if token provided
    initializers.register(orderApi.initialize, {
      orderToken,
    });
  } else {
    await orderRenderer.render(OrderSearch, {
      onError: async (errorInformation) => {
        const { error, formValues } = errorInformation;

        if (error === 'Please login to view the order.') {
          const { email, number } = formValues;

          const isOrderBelongsToCustomer = await checkIsOrderBelongsToCustomer(email);

          if (isOrderBelongsToCustomer) {
            window.location.href = `/customer/orders?orderNumber=${number}`;
          } else {
            await renderSignIn(block, email, number);
          }
        }
      },
    })(block);
  }
}
