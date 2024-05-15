import "@dropins/tools/event-bus.js";
import { e as cartSignal } from "./transform-shipping-methods__Csm-KieitR.js";
import "./countries__BNdKWz0f2q.js";
import { i as isBillToShippingSignal } from "./IsBillToShippingSignal__Dm6xiHlOoA.js";
import { A as AddressFormTypes } from "./estimateShippingMethods__BQV8ZoVRnA.js";
import { s as setBillingAddress } from "./setBillingAddress__BSXMLhOouL.js";
import { s as setShippingAddress, p as prepareAddress } from "./setShippingAddress__DBroFE3q4I.js";
import { A as AddressForm } from "./usePreselectedFields__yoBeivzMB8.js";
import "@dropins/tools/preact-hooks.js";
import { useCallback } from "@dropins/tools/preact-compat.js";
import { jsx } from "@dropins/tools/preact-jsx-runtime.js";
import { S as SHIPPING_FORM_NAME } from "./constants__DMF04Yfz9Q.js";
const ShippingForm = ({
  preselectedFields,
  ...props
}) => {
  const {
    data: CartData
  } = cartSignal.value;
  const cartId = (CartData == null ? void 0 : CartData.id) || "";
  const isBillToShipping = isBillToShippingSignal.value.checked;
  const saveAddressHandler = useCallback((command) => {
    return setShippingAddress({
      signal: command.signal,
      cartId,
      address: prepareAddress(command.address)
    }).then(() => {
      if (isBillToShipping) {
        return setBillingAddress({
          cartId,
          input: {
            same_as_shipping: true
          }
        });
      }
    });
  }, [cartId, isBillToShipping]);
  return jsx(AddressForm, {
    ...props,
    addressType: AddressFormTypes.SHIPPING,
    headingId: "Checkout.ShippingAddress.title",
    name: SHIPPING_FORM_NAME,
    preselectedFields,
    saveAddressHandler
  });
};
export {
  ShippingForm as S
};
