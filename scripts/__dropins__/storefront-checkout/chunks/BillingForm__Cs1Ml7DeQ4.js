import "@dropins/tools/event-bus.js";
import { e as cartSignal } from "./transform-shipping-methods__Jr5_k8qEf1.js";
import { u as useAddressFormFields } from "./countries__BI6v0R6zIv.js";
import { i as isBillToShippingSignal } from "./IsBillToShippingSignal__er1uPEzHkR.js";
import { A as AddressFormTypes } from "./estimateShippingMethods__DtFfjChDpY.js";
import { s as setBillingAddress } from "./setBillingAddress__YjJxZ6C51q.js";
import { p as prepareAddress } from "./setShippingAddress__CdHM-xbfLj.js";
import { A as AddressForm } from "./CartSummaryItem__iGzWaHX3tp.js";
import "@dropins/tools/preact-hooks.js";
import { c as compareAddresses } from "./BillToShippingAddress__FCUbfsa2Cu.js";
import { useRef, useCallback, useEffect } from "@dropins/tools/preact-compat.js";
import { jsx } from "@dropins/tools/preact-jsx-runtime.js";
import { B as BILLING_FORM_NAME } from "./constants__BdEsiyu87r.js";
const BillingForm = (props) => {
  const {
    fields
  } = useAddressFormFields();
  const addressFormRef = useRef(null);
  const {
    data: cartData
  } = cartSignal.value;
  const cartId = (cartData == null ? void 0 : cartData.id) || "";
  const {
    checked,
    setByUser
  } = isBillToShippingSignal.value;
  const isVisible = !checked;
  const saveAddressHandler = useCallback((command) => {
    return setBillingAddress({
      signal: command.signal,
      cartId,
      input: {
        address: checked ? void 0 : prepareAddress(command.address),
        same_as_shipping: checked
      }
    });
  }, [cartId, checked]);
  const shouldAutoFillFormHandler = useCallback(() => {
    var _a;
    const cartData2 = cartSignal.value.data;
    return !compareAddresses(fields, cartData2 == null ? void 0 : cartData2.billingAddress, (_a = cartData2 == null ? void 0 : cartData2.shippingAddresses) == null ? void 0 : _a[0]);
  }, [fields]);
  useEffect(() => {
    if (!setByUser)
      return;
    const controller = new AbortController();
    if (!checked) {
      addressFormRef.current.triggerSaveAddress(controller.signal);
    }
    return () => {
      controller.abort();
    };
  }, [checked, setByUser]);
  return jsx(AddressForm, {
    ...props,
    addressType: AddressFormTypes.BILLING,
    "data-testid": "billing-form",
    headingId: "Checkout.BillingAddress.title",
    name: BILLING_FORM_NAME,
    ref: addressFormRef,
    saveAddressHandler,
    shouldAutoFillForm: shouldAutoFillFormHandler,
    style: {
      display: isVisible ? "block" : "none"
    }
  });
};
export {
  BillingForm as B
};
//# sourceMappingURL=BillingForm__Cs1Ml7DeQ4.js.map
