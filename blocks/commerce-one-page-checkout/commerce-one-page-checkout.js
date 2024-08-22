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

  const root = document.createElement('div');
  root.classList.add('checkout__content');

  const main = document.createElement('div');
  main.classList.add('checkout__main');

  const aside = document.createElement('div');
  aside.classList.add('checkout__aside');

  // heading

  const heading = document.createElement('h1');
  heading.classList.add('checkout__heading');
  heading.textContent = 'One Page Checkout';

  root.appendChild(heading);

  // main

  const login = document.createElement('div');
  login.classList.add('commerce-one-page-checkout__login');

  const shippingForm = document.createElement('div');
  shippingForm.classList.add('commerce-one-page-checkout__shipping-form');

  const billToShippingAddress = document.createElement('div');
  billToShippingAddress.classList.add(
    'commerce-one-page-checkout__bill-to-shipping-address',
  );

  const billingForm = document.createElement('div');
  billingForm.classList.add('commerce-one-page-checkout__billing-form');

  const shippingMethods = document.createElement('div');
  shippingMethods.classList.add(
    'commerce-one-page-checkout__shipping-methods',
  );

  const paymentMethods = document.createElement('div');
  paymentMethods.classList.add('commerce-one-page-checkout__payment-methods');

  main.appendChild(login);
  main.appendChild(shippingForm);
  main.appendChild(billToShippingAddress);
  main.appendChild(billingForm);
  main.appendChild(shippingMethods);
  main.appendChild(paymentMethods);

  root.appendChild(main);

  // aside

  const orderSummary = document.createElement('div');
  orderSummary.classList.add('commerce-one-page-checkout__order-summary');

  const cartSummaryList = document.createElement('div');
  cartSummaryList.classList.add('cart-summary-list');

  aside.appendChild(orderSummary);
  aside.appendChild(cartSummaryList);

  root.appendChild(aside);

  // root

  const placeOrder = document.createElement('div');
  placeOrder.classList.add('commerce-one-page-checkout__place-order');

  root.appendChild(placeOrder);

  block.appendChild(root);

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

  // Display order confirmation
  // events.on('checkout/order', (orderData) => {
  //   const token = getUserTokenCookie();
  //   const orderRef = token ? orderData.number : orderData.token;
  //   const encodedOrderRef = encodeURIComponent(orderRef);

  //   window.history.pushState(
  //     {},
  //     '',
  //     `/order-confirmation?orderRef=${encodedOrderRef}`,
  //   );

  //   checkoutProvider.unmount(block);

  //   initializers.register(orderConfirmationApi.initialize, {});

  //   const onSignUpClick = async ({
  //     inputsDefaultValueSet,
  //     addressesData,
  //   }) => {
  //     const signUpForm = document.createElement('div');

  //     authProvider.render(SignUp, {
  //       routeSignIn: () => '/customer/login',
  //       routeRedirectOnEmailConfirmationClose: () => '/customer/account',
  //       inputsDefaultValueSet,
  //       addressesData,
  //     })(signUpForm);

  //     modal = await createModal([signUpForm]);
  //     modal.showModal();
  //   };

  //   orderConfirmationProvider.render(OrderConfirmation, {
  //     orderRef,
  //     orderData,
  //     onSignUpClick,
  //     routeHome: () => '/',
  //     routeSupport: () => '/support',
  //   })(block);
  // });

  // return checkoutProvider.render(Checkout, {
  //   onSignInClick: async () => onSignInClick(),
  //   onSignOutClick: () => {
  //     authApi.revokeCustomerToken();
  //   },
  //   onCheckoutDataUpdate: () => {
  //     cartApi.refreshCart().catch(console.error);
  //   },
  //   routeHome: () => '/',
  //   routeCart: () => '/cart',
  //   slots: {
  //     OrderSummary: (ctx) => {
  //       const orderSummary = document.createElement('div');

  //       cartProvider.render(OrderSummary, {
  //         slots: {
  //           EstimateShipping: (esCtx) => {
  //             const estimateShippingForm = document.createElement('div');

  //             checkoutProvider.render(EstimateShipping)(
  //               estimateShippingForm,
  //             );

  //             esCtx.appendChild(estimateShippingForm);
  //           },
  //         },
  //       })(orderSummary);

  //       ctx.appendChild(orderSummary);
  //     },
  //     CartSummaryList: (checkoutCtx) => {
  //       const cartSummaryList = document.createElement('div');
  //       cartSummaryList.classList.add('cart-summary-list');

  //       cartProvider.render(CartSummaryList, {
  //         slots: {
  //           Heading: (headingCtx) => {
  //             const { dictionary } = checkoutCtx;
  //             const { title, editLink } = dictionary.Checkout.Slots.CartSummaryList
  //               .Heading;

  //             const cartSummaryListHeading = document.createElement('div');
  //             cartSummaryListHeading.classList.add(
  //               'cart-summary-list__heading',
  //             );

  //             const cartSummaryListHeadingText = document.createElement('div');
  //             cartSummaryListHeadingText.classList.add(
  //               'cart-summary-list__heading-text',
  //             );

  //             cartSummaryListHeadingText.innerText = title.replace('{count}', headingCtx.count);
  //             const editCartLink = document.createElement('a');
  //             editCartLink.classList.add(
  //               'cart-summary-list__edit',
  //             );
  //             editCartLink.href = '/cart';
  //             editCartLink.rel = 'noreferrer';
  //             editCartLink.innerText = editLink;

  //             cartSummaryListHeading.appendChild(
  //               cartSummaryListHeadingText,
  //             );
  //             cartSummaryListHeading.appendChild(editCartLink);
  //             headingCtx.appendChild(cartSummaryListHeading);

  //             headingCtx.onChange((nextHeadingCtx) => {
  //               cartSummaryListHeadingText.innerText = title.replace(
  //                 '{count}',
  //                 nextHeadingCtx.count,
  //               );
  //             });
  //           },
  //         },
  //       })(cartSummaryList);

  //       checkoutCtx.appendChild(cartSummaryList);
  //     },
  //     PaymentMethods: async (context) => {
  //       context.addPaymentMethodHandler('checkmo', {
  //         render: (ctx, element) => {
  //           if (element) {
  //             // clear the element first
  //             element.innerHTML = '';
  //           }

  //           // Optionally, create and render some custom content here.
  //           // const $content = document.createElement('div');
  //           // $content.innerText = 'Custom Check / Money order handler';
  //           // ctx.appendHTMLElement($content);
  //         },
  //       });
  //     },
  //   },
  // })(block);
}
