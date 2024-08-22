/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */

// Dropin Tools
import { events } from '@dropins/tools/event-bus.js';
import { initializers } from '@dropins/tools/initializer.js';

// Cart Dropin Modules
// import * as cartApi from '@dropins/storefront-cart/api.js';
import CartSummaryList from '@dropins/storefront-cart/containers/CartSummaryList.js';
import { OrderSummary } from '@dropins/storefront-cart/containers/OrderSummary.js';
import { render as cartProvider } from '@dropins/storefront-cart/render.js';

// Checkout Dropin Modules
import * as checkoutApi from '@dropins/storefront-checkout/api.js';
import LoginForm from '@dropins/storefront-checkout/containers/LoginForm.js';
import ShippingForm from '@dropins/storefront-checkout/containers/ShippingForm.js';
import BillToShippingAddress from '@dropins/storefront-checkout/containers/BillToShippingAddress.js';
import BillingForm from '@dropins/storefront-checkout/containers/BillingForm.js';
import ShippingMethods from '@dropins/storefront-checkout/containers/ShippingMethods.js';
import PaymentMethods from '@dropins/storefront-checkout/containers/PaymentMethods.js';
import PlaceOrder from '@dropins/storefront-checkout/containers/PlaceOrder.js';
import EstimateShipping from '@dropins/storefront-checkout/containers/EstimateShipping.js';
import { render as checkoutProvider } from '@dropins/storefront-checkout/render.js';

// Order Confirmation Dropin Modules
// import * as orderConfirmationApi from '@dropins/storefront-order-confirmation/api.js';
// import OrderConfirmation from '@dropins/storefront-order-confirmation/containers/OrderConfirmation.js';
// import { render as orderConfirmationProvider } from '@dropins/storefront-order-confirmation/render.js';

// Auth Dropin Modules
import * as authApi from '@dropins/storefront-auth/api.js';
import AuthCombine from '@dropins/storefront-auth/containers/AuthCombine.js';
// import SignUp from '@dropins/storefront-auth/containers/SignUp.js';
import { render as authProvider } from '@dropins/storefront-auth/render.js';

// import { getUserTokenCookie } from '../../scripts/dropins.js';
import { createModal } from '../modal/modal.js';

const root = document.createElement('div');

root.classList.add('checkout__content');

const heading = document.createElement('h1');
const main = document.createElement('div');
const aside = document.createElement('div');
const placeOrder = document.createElement('div');

heading.classList.add('checkout__heading');
heading.textContent = 'One Page Checkout';
main.classList.add('checkout__main');
aside.classList.add('checkout__aside');
placeOrder.classList.add('commerce-one-page-checkout__place-order');

const login = document.createElement('div');
const shippingForm = document.createElement('div');
const billToShippingAddress = document.createElement('div');
const billingForm = document.createElement('div');
const shippingMethods = document.createElement('div');
const paymentMethods = document.createElement('div');

login.classList.add('commerce-one-page-checkout__login');
shippingForm.classList.add('commerce-one-page-checkout__shipping-form');
billToShippingAddress.classList.add(
  'commerce-one-page-checkout__bill-to-shipping-address',
);
billingForm.classList.add('commerce-one-page-checkout__billing-form');
shippingMethods.classList.add('commerce-one-page-checkout__shipping-methods');
paymentMethods.classList.add('commerce-one-page-checkout__payment-methods');

const orderSummary = document.createElement('div');
const cartSummaryList = document.createElement('div');

orderSummary.classList.add('commerce-one-page-checkout__order-summary');
cartSummaryList.classList.add('cart-summary-list');

function renderMobileLayout(block) {
  root.appendChild(heading);
  root.appendChild(cartSummaryList);
  root.appendChild(login);
  root.appendChild(shippingForm);
  root.appendChild(billToShippingAddress);
  root.appendChild(billingForm);
  root.appendChild(shippingMethods);
  root.appendChild(paymentMethods);
  root.appendChild(orderSummary);
  root.appendChild(placeOrder);

  main.remove();
  aside.remove();

  block.appendChild(root);
}

function renderDesktopLayout(block) {
  main.appendChild(login);
  main.appendChild(shippingForm);
  main.appendChild(billToShippingAddress);
  main.appendChild(billingForm);
  main.appendChild(shippingMethods);
  main.appendChild(paymentMethods);

  aside.appendChild(orderSummary);
  aside.appendChild(cartSummaryList);

  root.appendChild(heading);
  root.appendChild(main);
  root.appendChild(aside);
  root.appendChild(placeOrder);

  block.appendChild(root);
}

export default async function decorate(block) {
  let modal = null;

  // initialize dropin
  initializers.register(checkoutApi.initialize, {});

  events.on(
    'authenticated',
    (isAuthenticated) => {
      if (isAuthenticated && modal) {
        modal.removeModal();
        modal = null;
      }
    },
    { eager: true },
  );

  // render containers

  checkoutProvider.render(LoginForm, {
    onSignInClick: async (initialEmailValue) => {
      const signInForm = document.createElement('div');

      authProvider.render(AuthCombine, {
        signInFormConfig: { renderSignUpLink: true, initialEmailValue },
        signUpFormConfig: {},
        resetPasswordFormConfig: {},
      })(signInForm);

      modal = await createModal([signInForm]);
      modal.showModal();
    },
    onSignOutClick: () => {
      authApi.revokeCustomerToken();
    },
  })(login);
  checkoutProvider.render(ShippingForm)(shippingForm);
  checkoutProvider.render(BillToShippingAddress)(billToShippingAddress);
  checkoutProvider.render(BillingForm)(billingForm);
  checkoutProvider.render(ShippingMethods)(shippingMethods);
  checkoutProvider.render(PaymentMethods)(paymentMethods);
  cartProvider.render(OrderSummary, {
    slots: {
      EstimateShipping: (esCtx) => {
        const estimateShippingForm = document.createElement('div');

        checkoutProvider.render(EstimateShipping)(estimateShippingForm);

        esCtx.appendChild(estimateShippingForm);
      },
    },
  })(orderSummary);
  cartProvider.render(CartSummaryList)(cartSummaryList);
  checkoutProvider.render(PlaceOrder)(placeOrder);

  // handle responsive layout

  function handleScreenChange(e) {
    if (e.matches) {
      renderMobileLayout(block);
    } else {
      renderDesktopLayout(block);
    }
  }

  const mediaQuery = matchMedia('(max-width: 768px)');
  mediaQuery.addEventListener('change', handleScreenChange);

  handleScreenChange(mediaQuery);
}
