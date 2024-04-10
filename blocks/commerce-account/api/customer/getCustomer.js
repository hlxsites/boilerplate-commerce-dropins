import GqlClient from '../shared/GqlClient.js';
import customerAddressFragment from './fragments/customerAddressFragment.js';
import customerOrdersFragment from './fragments/customerOrdersFragment.js';
import customerWishlistFragment from './fragments/customerWishlistFragment.js';

const getCustomer = async (token) => {
  const query = `
    {
      customer {
        firstname
        lastname
        email
        is_subscribed
        ${customerWishlistFragment}
        addresses {
          ${customerAddressFragment}
        }
        orders {
          ${customerOrdersFragment}
        }
      }
    }
`;

  const data = await GqlClient.fetchData(query, token);

  return data;
};

export default getCustomer;
