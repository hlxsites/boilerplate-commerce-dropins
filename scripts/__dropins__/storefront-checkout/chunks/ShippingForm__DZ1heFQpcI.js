import "@dropins/tools/event-bus.js";
import { e as cartSignal } from "./transform-shipping-methods__Jr5_k8qEf1.js";
import "./countries__BI6v0R6zIv.js";
import { i as isBillToShippingSignal } from "./IsBillToShippingSignal__er1uPEzHkR.js";
import { A as AddressFormTypes } from "./estimateShippingMethods__DtFfjChDpY.js";
import { s as setBillingAddress } from "./setBillingAddress__YjJxZ6C51q.js";
import { s as setShippingAddress, p as prepareAddress } from "./setShippingAddress__CdHM-xbfLj.js";
import { A as AddressForm } from "./CartSummaryItem__iGzWaHX3tp.js";
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
//# sourceMappingURL=ShippingForm__DZ1heFQpcI.js.map
