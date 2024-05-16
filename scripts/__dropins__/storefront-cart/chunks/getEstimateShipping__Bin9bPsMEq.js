import { s as state, f as fetchGraphQl, h as handleFetchError } from "./getStoreConfig__D5TZNZKL7r.js";
import "@dropins/tools/event-bus.js";
const ESTIMATE_SHIPPING_METHODS_MUTATION = `
  mutation ESTIMATE_SHIPPING_METHODS_MUTATION(
    $cartId: String!
    $address: EstimateAddressInput!
  ) {
    estimateShippingMethods(
      input: {
        cart_id: $cartId
        address: $address
      }
    ) {
      amount {
        currency
        value
      }
      error_message
    }
  }
`;
const COUNTRIES_QUERY = `
query COUNTRIES_QUERY {
  countries {
    label: full_name_locale
    id
  }
  storeConfig {
    defaultCountry: default_country
  }
}
`;
const REGIONS_QUERY = `
query REGIONS_QUERY($id: String) {
  country(id: $id) {
    available_regions {
      code
			name
    }
  }
}
`;
const getEstimateShipping = async (address) => {
  const cartId = state.cartId;
  if (!cartId)
    throw new Error("No cart ID found");
  if (!address)
    throw new Error("No address parameter found");
  const {
    countryCode,
    postcode,
    region
  } = address;
  return fetchGraphQl(ESTIMATE_SHIPPING_METHODS_MUTATION, {
    variables: {
      cartId,
      address: {
        country_code: countryCode || "US",
        postcode: postcode || "",
        region: {
          region_code: (region == null ? void 0 : region.code) || ""
        }
      }
    }
  }).then(({
    errors,
    data
  }) => {
    if (errors)
      return handleFetchError(errors);
    const estimateShippingMethods = data.estimateShippingMethods;
    if (estimateShippingMethods.length === 0) {
      return null;
    }
    return estimateShippingMethods.find((method) => !method.error_message);
  });
};
const getCountries = async () => {
  return fetchGraphQl(COUNTRIES_QUERY, {}).then(({
    errors,
    data
  }) => {
    var _a, _b;
    if (errors)
      return handleFetchError(errors);
    const sortedCountries = ((_a = data == null ? void 0 : data.countries) == null ? void 0 : _a.sort((a, b) => a.label.localeCompare(b.label))) || [];
    const defaultCountry = ((_b = data == null ? void 0 : data.storeConfig) == null ? void 0 : _b.defaultCountry) || "US";
    sortedCountries.forEach((country) => {
      country.isDefaultCountry = country.id === defaultCountry;
    });
    return sortedCountries;
  });
};
const getRegions = async (countryId) => {
  return fetchGraphQl(REGIONS_QUERY, {
    variables: {
      id: countryId
    }
  }).then(({
    errors,
    data
  }) => {
    var _a;
    if (errors)
      return handleFetchError(errors);
    return ((_a = data == null ? void 0 : data.country) == null ? void 0 : _a.available_regions) || [];
  });
};
export {
  getCountries as a,
  getRegions as b,
  getEstimateShipping as g
};
//# sourceMappingURL=getEstimateShipping__Bin9bPsMEq.js.map
