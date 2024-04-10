import GqlClient from '../shared/GqlClient.js';

const getCustomerCart = async (token) => {
  const query = `
    {
      customerCart {
        id
        items {
          id
          product {
            name
            sku
          }
          quantity
        }
      }
    }
`;

  const data = await GqlClient().fetchData(query, token);

  return data;
};

export default getCustomerCart;
