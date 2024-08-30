/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */

// Dropin Tools
import { events } from '@dropins/tools/event-bus.js';
import { initializers } from '@dropins/tools/initializer.js';
import { ProgressSpinner } from '@dropins/tools/components.js';

// Cart Dropin Modules
import * as cartApi from '@dropins/storefront-cart/api.js';
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
import EmptyCart from '@dropins/storefront-checkout/containers/EmptyCart.js';
import { MergedCartBanner } from '@dropins/storefront-checkout/containers/MergedCartBanner.js';
import { render as checkoutProvider } from '@dropins/storefront-checkout/render.js';

// Order Confirmation Dropin Modules
import * as orderConfirmationApi from '@dropins/storefront-order-confirmation/api.js';
import OrderConfirmation from '@dropins/storefront-order-confirmation/containers/OrderConfirmation.js';
import { render as orderConfirmationProvider } from '@dropins/storefront-order-confirmation/render.js';

// Auth Dropin Modules
import * as authApi from '@dropins/storefront-auth/api.js';
import AuthCombine from '@dropins/storefront-auth/containers/AuthCombine.js';
import SignUp from '@dropins/storefront-auth/containers/SignUp.js';
import { render as authProvider } from '@dropins/storefront-auth/render.js';
import { getUserTokenCookie } from '../../scripts/dropins.js';
import { createModal } from '../modal/modal.js';

function createElementWithClass(tag, className) {
  const element = document.createElement(tag);
  element.classList.add(className);
  return element;
}

/*
 * Layout DOM elements
 */

const root = createElementWithClass('div', 'checkout__content');
const heading = createElementWithClass('h1', 'checkout__heading');
const main = createElementWithClass('div', 'checkout__main');
const aside = createElementWithClass('div', 'checkout__aside');
const placeOrder = createElementWithClass('div', 'commerce-one-page-checkout__place-order');
const emptyCart = createElementWithClass('div', 'commerce-one-page-checkout__empty-cart');
const mergedCartBanner = createElementWithClass('div', 'commerce-one-page-checkout__merged-cart-banner');
const overlaySpinner = createElementWithClass('div', 'commerce-one-page-checkout__overlay-spinner');
const login = createElementWithClass('div', 'commerce-one-page-checkout__login');
const shippingForm = createElementWithClass('div', 'commerce-one-page-checkout__shipping-form');
const billToShippingAddress = createElementWithClass('div', 'commerce-one-page-checkout__bill-to-shipping-address');
const billingForm = createElementWithClass('div', 'commerce-one-page-checkout__billing-form');
const shippingMethods = createElementWithClass('div', 'commerce-one-page-checkout__shipping-methods');
const paymentMethods = createElementWithClass('div', 'commerce-one-page-checkout__payment-methods');
const orderSummary = createElementWithClass('div', 'commerce-one-page-checkout__order-summary');
const cartSummaryList = createElementWithClass('div', 'cart-summary-list');

heading.textContent = 'One Page Checkout Block';

/*
 * Layout responsive handling
 */

const mediaQuery = matchMedia('(max-width: 768px)');

function renderMobileLayout(block) {
  root.replaceChildren(
    heading,
    mergedCartBanner,
    cartSummaryList,
    login,
    shippingForm,
    billToShippingAddress,
    billingForm,
    shippingMethods,
    paymentMethods,
    orderSummary,
    placeOrder,
    overlaySpinner,
  );

  block.replaceChildren(root);
}

function renderDesktopLayout(block) {
  main.replaceChildren(
    login,
    shippingForm,
    billToShippingAddress,
    billingForm,
    shippingMethods,
    paymentMethods,
  );

  aside.replaceChildren(orderSummary, cartSummaryList);

  root.replaceChildren(
    heading,
    mergedCartBanner,
    main,
    aside,
    placeOrder,
    overlaySpinner,
  );

  block.replaceChildren(root);
}

/*
 * Event handlers
 */

let modal = null;
function handleAuthenticated(isAuthenticated) {
  if (isAuthenticated && modal) {
    modal.removeModal();
    modal = null;
  }

  if (isAuthenticated) {
    overlaySpinner.classList.add(
      'commerce-one-page-checkout__overlay-spinner--shown',
    );
  }
}

let currentCheckoutData;
function handleCheckoutData(nextCheckoutData) {
  if (currentCheckoutData !== undefined) {
    // on sign out
    if (!nextCheckoutData) {
      root.classList.add('checkout-empty-cart');
      root.replaceChildren(emptyCart);
      mediaQuery.removeEventListener('change', handleScreenChange);
      return;
    }

    // on empty state
    if (nextCheckoutData.isEmpty) {
      root.classList.add('checkout-empty-cart');
      root.replaceChildren(emptyCart);
      mediaQuery.removeEventListener('change', handleScreenChange);
      return;
    }
  }

  currentCheckoutData = nextCheckoutData;
}

function handleCustomerData(nextCustomerData) {
  if (nextCustomerData) {
    overlaySpinner.classList.remove(
      'commerce-one-page-checkout__overlay-spinner--shown',
    );
  }
}

function handleScreenChange(e, block) {
  if (e.matches) {
    renderMobileLayout(block);
  } else {
    renderDesktopLayout(block);
  }
}

function handleCheckoutOrder(orderData, block) {
  const token = getUserTokenCookie();
  const orderRef = token ? orderData.number : orderData.token;
  const encodedOrderRef = encodeURIComponent(orderRef);

  window.history.pushState(
    {},
    '',
    `/order-confirmation?orderRef=${encodedOrderRef}`,
  );

  initializers.register(orderConfirmationApi.initialize, {});

  const onSignUpClick = async ({ inputsDefaultValueSet, addressesData }) => {
    const signUpForm = document.createElement('div');

    authProvider.render(SignUp, {
      routeSignIn: () => '/customer/login',
      routeRedirectOnEmailConfirmationClose: () => '/customer/account',
      inputsDefaultValueSet,
      addressesData,
    })(signUpForm);

    modal = await createModal([signUpForm]);
    modal.showModal();
  };

  orderConfirmationProvider.render(OrderConfirmation, {
    orderRef,
    orderData,
    onSignUpClick,
    routeHome: () => '/',
    routeSupport: () => '/support',
  })(block);
}

export default async function decorate(block) {
  /*
   * Initialize Dropin
   */

  initializers.register(checkoutApi.initialize, {});

  /*
   * Render Containers
   */

  checkoutProvider.render(ProgressSpinner)(overlaySpinner);
  checkoutProvider.render(EmptyCart)(emptyCart);
  checkoutProvider.render(MergedCartBanner)(mergedCartBanner);

  checkoutProvider.render(LoginForm, {
    onSignInClick: async (initialEmailValue) => {
      const signInForm = document.createElement('div');

      authProvider.render(AuthCombine, {
        signInFormConfig: {
          renderSignUpLink: true,
          initialEmailValue,
          onSuccessCallback: () => {
            overlaySpinner.classList.add(
              'commerce-one-page-checkout__overlay-spinner--shown',
            );
          },
        },
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

  checkoutProvider.render(ShippingMethods, {
    onCheckoutDataUpdate: () => {
      cartApi.refreshCart().catch(console.error);
    },
  })(shippingMethods);

  checkoutProvider.render(PaymentMethods, {
    onPlaceOrder: async () => {},
    handleServerError: (error) => {
      console.error(error);
    },
    paymentMethodsSlot: (ctx) => {
      ctx.addPaymentMethodHandler('checkmo', {
        render: (_ctx) => {
          const $content = document.createElement('div');
          $content.innerHTML = '<b>Check / Money order</b> selected';
          _ctx.replaceHTML($content);
        },
      });
    },
  })(paymentMethods);

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
  checkoutProvider.render(PlaceOrder, {
    onClick: async () => {
      overlaySpinner.classList.add(
        'commerce-one-page-checkout__overlay-spinner--shown',
      );

      try {
        await checkoutApi.placeOrder();
      } catch (error) {
        console.error(error);
      } finally {
        overlaySpinner.classList.remove(
          'commerce-one-page-checkout__overlay-spinner--shown',
        );
      }
    },
  })(placeOrder);

  /*
   * Render initial layout and setup event handlers
   */

  mediaQuery.addEventListener('change', (e) => handleScreenChange(e, block));
  handleScreenChange(mediaQuery, block);

  events.on('authenticated', handleAuthenticated, { eager: true });
  events.on('checkout/data', handleCheckoutData, { eager: true });
  events.on('checkout/customer', handleCustomerData, { eager: true });
  events.on('checkout/order', (e) => handleCheckoutOrder(e, block));
}
