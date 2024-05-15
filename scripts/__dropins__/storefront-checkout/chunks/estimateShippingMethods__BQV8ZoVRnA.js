import "./countries__BNdKWz0f2q.js";
import { r as regionsSignal, f as dispatchApiCall, M as MissingCart, d as MissingCountry, t as transformShippingMethods } from "./transform-shipping-methods__Csm-KieitR.js";
import "@dropins/tools/event-bus.js";
var AddressFormTypes = /* @__PURE__ */ ((AddressFormTypes2) => {
  AddressFormTypes2["SHIPPING"] = "shipping_addresses";
  AddressFormTypes2["BILLING"] = "billing_address";
  return AddressFormTypes2;
})(AddressFormTypes || {});
var AddressFormFields = /* @__PURE__ */ ((AddressFormFields2) => {
  AddressFormFields2["City"] = "city";
  AddressFormFields2["Company"] = "company";
  AddressFormFields2["Country"] = "country_id";
  AddressFormFields2["FirstName"] = "firstname";
  AddressFormFields2["LastName"] = "lastname";
  AddressFormFields2["PostCode"] = "postcode";
  AddressFormFields2["Region"] = "region";
  AddressFormFields2["RegionId"] = "region_id";
  AddressFormFields2["SaveInAddressBook"] = "save_in_address_book";
  AddressFormFields2["Street"] = "street";
  AddressFormFields2["Telephone"] = "telephone";
  AddressFormFields2["Vat"] = "vat_id";
  return AddressFormFields2;
})(AddressFormFields || {});
const isValid = (region) => {
  if (!region)
    return false;
  return !!region.id && !!region.code && !!region.name;
};
const transformRegions = (data) => {
  if (!data)
    return;
  return data.filter(isValid).map((region) => {
    const {
      id,
      code,
      name
    } = region;
    return {
      id,
      code,
      name
    };
  });
};
const getRegionsQuery = (
  /* GraphQL */
  `
query getRegions($countryCode: String!) {
    country(id: $countryCode) {
        id
        available_regions {
            id
            code
            name
        }
    }
}`
);
const getRegions = async (countryCode, addressType) => {
  regionsSignal.value.addressType = addressType;
  return dispatchApiCall({
    type: "query",
    query: getRegionsQuery,
    options: {
      variables: {
        countryCode
      }
    },
    path: "country.available_regions",
    signalType: "regions",
    transformer: transformRegions
  });
};
const MULTILINE_SUFFIX = "-";
const MULTILINE_CUSTOM_ATTR_SPLIT = "\n";
const DEBOUNCE_TIME = 2e3;
const getMultilineValues = (code, records) => {
  return Object.keys(records).filter((key) => key.startsWith(code)).sort((a, b) => parseInt(a.replace(`${code}${MULTILINE_SUFFIX}`, ""), 10) - parseInt(b.replace(`${code}${MULTILINE_SUFFIX}`, ""), 10)).map((key) => records[key]);
};
const estimateShippingMethodsMutation = (
  /* GraphQL */
  `
mutation estimateShippingMethods(
	$cartId: String!
  $address: EstimateAddressInput!
) {
	estimateShippingMethods(
		input: {
			cart_id: $cartId
			address: $address
		}
	) {
		carrier_title
		carrier_code
		method_title
		method_code
		available
		amount {
			currency
			value
		}
		price_excl_tax {
			currency
			value
		}
		price_incl_tax {
			currency
			value
		}
		error_message
	}
}
`
);
const estimateShippingMethods = async (input) => {
  const {
    cartId,
    criteria
  } = input || {};
  const {
    country_code,
    region_id,
    region_name,
    zip
  } = criteria || {};
  if (!cartId)
    throw new MissingCart();
  if (!country_code)
    throw new MissingCountry();
  const regionId = typeof region_id === "string" ? parseInt(region_id, 10) : region_id;
  const region = region_id || region_name ? {
    ...regionId && {
      region_id: regionId
    },
    ...region_name && {
      region_code: region_name
    }
  } : void 0;
  const address = {
    country_code,
    ...zip && {
      postcode: zip
    },
    ...region && {
      region
    }
  };
  return await dispatchApiCall({
    type: "mutation",
    query: estimateShippingMethodsMutation,
    options: {
      variables: {
        cartId,
        address
      }
    },
    path: "estimateShippingMethods",
    signalType: "estimateShippingMethods",
    transformer: transformShippingMethods
  });
};
export {
  AddressFormTypes as A,
  DEBOUNCE_TIME as D,
  MULTILINE_SUFFIX as M,
  AddressFormFields as a,
  getMultilineValues as b,
  MULTILINE_CUSTOM_ATTR_SPLIT as c,
  estimateShippingMethods as e,
  getRegions as g
};
