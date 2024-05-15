import "@dropins/tools/event-bus.js";
import { e as cartSignal } from "./transform-shipping-methods__Csm-KieitR.js";
import { u as useAddressFormFields } from "./countries__BNdKWz0f2q.js";
import { i as isBillToShippingSignal } from "./IsBillToShippingSignal__Dm6xiHlOoA.js";
import { A as AddressFormTypes } from "./estimateShippingMethods__BQV8ZoVRnA.js";
import { s as setBillingAddress } from "./setBillingAddress__BSXMLhOouL.js";
import { p as prepareAddress } from "./setShippingAddress__DBroFE3q4I.js";
import { A as AddressForm } from "./usePreselectedFields__yoBeivzMB8.js";
import "@dropins/tools/preact-hooks.js";
import { c as compareAddresses } from "./BillToShippingAddress__DWPy9d4eNp.js";
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
