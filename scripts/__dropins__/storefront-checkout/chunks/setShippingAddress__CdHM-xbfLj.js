import { a as AddressFormFields, b as getMultilineValues, M as MULTILINE_SUFFIX, c as MULTILINE_CUSTOM_ATTR_SPLIT } from "./estimateShippingMethods__DtFfjChDpY.js";
import "./countries__BI6v0R6zIv.js";
import "@dropins/tools/event-bus.js";
import { f as dispatchApiCall } from "./transform-shipping-methods__Jr5_k8qEf1.js";
import { C as CHECKOUT_DATA_FRAGMENT, a as CART_SUMMARY_FRAGMENT, t as transformCart } from "./transform-cart__7m47FkHC4Y.js";
const NUMERIC_ID_REGEX = /^\d+$/;
const parseRegionId = (regionId) => {
  const isId = NUMERIC_ID_REGEX.test(regionId);
  if (!isId)
    return;
  return parseInt(regionId, 10);
};
const setShippingAddressMutation = (
  /* GraphQL */
  `
  mutation setShippingAddress($cartId: String!, $address: CartAddressInput!) {
    setShippingAddressesOnCart(
      input: { cart_id: $cartId, shipping_addresses: [{ address: $address }] }
    ) {
      cart {
        id
        ...CheckoutData
        ...CartSummaryItems
      }
    }
  }
  ${CHECKOUT_DATA_FRAGMENT}
  ${CART_SUMMARY_FRAGMENT}
`
);
const STANDARD_ATTRIBUTES = ["city", "company", "country_code", "firstname", "lastname", "postcode", "region", "region_id", "save_in_address_book", "street", "telephone", "vat_id"];
const prepareAddress = (formFields) => {
  const address = {
    city: formFields[AddressFormFields.City],
    company: formFields[AddressFormFields.Company],
    country_code: formFields[AddressFormFields.Country],
    firstname: formFields[AddressFormFields.FirstName],
    lastname: formFields[AddressFormFields.LastName],
    postcode: formFields[AddressFormFields.PostCode],
    save_in_address_book: !formFields[AddressFormFields.SaveInAddressBook],
    street: getMultilineValues(AddressFormFields.Street, formFields),
    telephone: formFields[AddressFormFields.Telephone],
    vat_id: formFields[AddressFormFields.Vat]
  };
  const region = formFields[AddressFormFields.Region];
  const regionId = parseRegionId(region);
  if (!regionId) {
    address.region = region;
  } else {
    address.region_id = regionId;
  }
  const custom_attributes = Object.keys(formFields).filter((key) => !key.startsWith("street")).filter((key) => !STANDARD_ATTRIBUTES.includes(key)).filter((key) => key !== "country_id").map((key) => {
    const [code, multiline] = key.split(MULTILINE_SUFFIX);
    if (!multiline)
      return {
        attribute_code: code,
        value: formFields[key]
      };
    const value = getMultilineValues(code, formFields).join(MULTILINE_CUSTOM_ATTR_SPLIT);
    return {
      attribute_code: code,
      value
    };
  });
  const without_duplicates = custom_attributes.filter((item, index, self) => index === self.findIndex((t) => t.attribute_code === item.attribute_code));
  if (without_duplicates.length > 0) {
    address.custom_attributes = without_duplicates;
  }
  return address;
};
const setShippingAddress = async ({
  signal,
  cartId,
  address
}) => {
  return await dispatchApiCall({
    type: "mutation",
    query: setShippingAddressMutation,
    options: {
      signal,
      variables: {
        cartId,
        address
      }
    },
    path: "setShippingAddressesOnCart.cart",
    signalType: "cart",
    transformer: transformCart
  });
};
export {
  STANDARD_ATTRIBUTES as S,
  prepareAddress as p,
  setShippingAddress as s
};
//# sourceMappingURL=setShippingAddress__CdHM-xbfLj.js.map
