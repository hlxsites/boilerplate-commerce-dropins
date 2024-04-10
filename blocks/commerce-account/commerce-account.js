/* eslint-disable */
import { getCookie } from '../../scripts/configs.js';
import getCustomer from './api/customer/getCustomer.js';
import { authLogoutService } from '@dropins/storefront-auth/service/authLogoutService.js';

import convertDateFormat from './helpers/convertDateFormat.js';
import validateOrdersStatus from './helpers/validateOrdersStatus.js';

export default async function decorate(block) {
  block.innerHTML = '';

  const token = getCookie('auth_dropin_user_token');

  if (!token) {
    window.location.href = '/customer/login';
  }

  getCustomer(token).then((response) => {
    if (!response?.data?.customer) {
      window.location.href = '/';
    }

    const {
      data: { customer },
    } = response;

    const { addresses, orders } = customer;

    const items = orders?.items.length ? orders.items : [];

    const userAddresses = addresses.reduce((acc, el) => {
      if (!el.default_shipping) {
        return acc;
      }
      const addressHTML = `<div>
        <h4>Default Shipping Address</h4>
        <address>
          ${el?.street[0]}<br>
          ${el?.city}, ${el?.region?.region}, ${el?.postcode}<br>
          ${el?.country_code}<br>
          T: ${el?.telephone}
        </address>
        <a href="#">Edit Address</a>
      </div>`;
      return acc + addressHTML;
    }, '');

    const userBillAddresses = addresses.reduce((acc, el) => {
      if (!el.default_billing) {
        return acc;
      }
      const addressHTML = `<div>
      <h4>Default Billing Address</h4>
        <address>
          ${el?.street[0]}<br>
          ${el?.city}, ${el?.region?.region}, ${el?.postcode}<br>
          ${el?.country_code}<br>
          T: ${el?.telephone}
        </address>
        <a href="#">Edit Address</a>
      </div>`;
      return acc + addressHTML;
    }, '');

    const renderOrdersList = items.reduce((acc, el, i) => {
      const orderHTML = `
        <li class="mb-4">
          <div>${i + 1}.</div>
          <div>Order ${el.order_number || el.number}</div>
          <div class="is-size-6">${convertDateFormat(el.created_at || el.order_date)}</div>
          <span class="tag ${validateOrdersStatus(el.status)}">${el.status}</span>
        </li>`;
      return acc + orderHTML;
    }, items.length ? '' : '<div></div>');

    block.insertAdjacentHTML(
      'afterbegin',
      `<div class="admin-panel">
  <aside class="sidebar">
    <div class="logo">
    </div>
    <nav class="menu">
      <ul>
        <li><a href="#">My Account</a></li>
        <li><a href="#">My Orders</a></li>
        <li><a href="#">My Downloadable Products</a></li>
        <li><a href="#">My Wish List</a></li>
      </ul>
      <ul>
      <li><a href="#">Address Book</a></li>
      <li><a href="#">Account Information</a></li>
      <li><a href="#">Stored Payment Methods</a></li>
    </ul>
    <ul>
    <li><a href="#">My Product Reviews</a></li>
    <li><a href="#">Newsletter Subscriptions</a></li>
  </ul>
    <ul>
    <li><a href="#" class="logoutDashboard">Logout</a></li>
    </ul>
    </nav>
  </aside>
  <main class="content">
    <h2>My Account</h2>
    <section class="account-info">
      <div class="contact-info">
        <h4>Contact Information</h4>
        <p>${customer.firstname} ${customer.lastname}</p>
        <p>${customer.email}</p>
        <a href="#">Edit</a> | <a href="#">Change Password</a>
      </div>
      <div class="address-info">
      ${userAddresses}
        <div>
      ${userBillAddresses}
        </div>
      </div>
      <div>
      <h4>Orders List</h4>
      <ul class="orders_list">
      ${renderOrdersList}
      </ul>
    </div>
  </div>
    </section>
  </main>
  </div>`,
    );

    const logoutDashboard = document.querySelector('.logoutDashboard');

    logoutDashboard.addEventListener('click', async () => {
      await authLogoutService();
      window.location.href = '/customer/login';
    });
  });
}
