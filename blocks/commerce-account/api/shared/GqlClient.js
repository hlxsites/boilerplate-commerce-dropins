/* eslint-disable class-methods-use-this */
import { getCookie, getConfigValue } from '../../../../scripts/configs.js';

class GqlClient {
  constructor(backendUrl) {
    this.backendUrl = backendUrl;
  }

  async fetchData(query) {
    const token = getCookie('auth_dropin_user_token');

    try {
      const response = await fetch(await getConfigValue('commerce-core-endpoint'), {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      const data = await response.json();

      return data;
    } catch (error) {
      console.error(error);

      return null;
    }
  }
}

export default new GqlClient();
