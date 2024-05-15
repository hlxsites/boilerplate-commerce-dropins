import "@dropins/tools/event-bus.js";
import { e as cartSignal } from "./transform-shipping-methods__Csm-KieitR.js";
import { u as useAddressFormFields } from "./countries__BNdKWz0f2q.js";
import { i as isBillToShippingSignal } from "./IsBillToShippingSignal__Dm6xiHlOoA.js";
import { s as setBillingAddress } from "./setBillingAddress__BSXMLhOouL.js";
import { Checkbox, Skeleton, SkeletonRow } from "@dropins/tools/components/index.js";
/* empty css                                  */
import { jsx } from "@dropins/tools/preact-jsx-runtime.js";
import { useText } from "@dropins/tools/i18n.js";
import { c as classes } from "./classes__Bsz9GBN04n.js";
import { useState, useEffect } from "@dropins/tools/preact-compat.js";
const BillToShippingAddress$1 = ({
  className,
  isInitialized = true,
  checked = true,
  ...props
}) => {
  const translations = useText({
    title: "Checkout.BillToShippingAddress.title"
  });
  if (!isInitialized)
    return jsx(BillToShippingAddressSkeleton, {});
  return jsx("div", {
    className: classes(["checkout-bill-to-shipping-address", className]),
    children: jsx(Checkbox, {
      "data-testid": "bill-to-shipping-checkbox",
      className: "checkout-bill-to-shipping-address__checkbox",
      checked,
      name: "checkout-bill-to-shipping-address__checkbox",
      label: translations.title,
      ...props
    })
  });
};
const BillToShippingAddressSkeleton = () => {
  return jsx(Skeleton, {
    className: "bill-to-shipping-address__skeleton",
    children: jsx(SkeletonRow, {
      variant: "row",
      size: "small"
    })
  });
};
const BILL_TO_SHIPPING_KEY = "is_bill_to_shipping_address";
function compareFields(first, second, field) {
  const firstValue = first[field];
  const secondValue = second[field];
  if (firstValue === void 0 && secondValue === void 0)
    return true;
  if (firstValue === null && secondValue === null)
    return true;
  if (typeof firstValue === "object" && typeof secondValue === "object") {
    return JSON.stringify(firstValue) === JSON.stringify(secondValue);
  }
  return firstValue === secondValue;
}
function compareAddresses(addressFormFields, first, second) {
  if (!first && !second)
    return true;
  if (!first || !second)
    return false;
  return addressFormFields.every((field) => {
    const fieldCode = field.code;
    return compareFields(first, second, fieldCode);
  });
}
const useInitialState = ({
  isBillToShipping
}) => {
  var _a;
  const [isInitialized, setIsInitialized] = useState(false);
  const {
    fields
  } = useAddressFormFields();
  const cartData = cartSignal.value.data;
  const hasCartData = !!cartData;
  const billingAddress = cartData == null ? void 0 : cartData.billingAddress;
  const shippingAddress = (_a = cartData == null ? void 0 : cartData.shippingAddresses) == null ? void 0 : _a[0];
  useEffect(() => {
    if (!fields)
      return;
    const localIsBillToShipping = localStorage.getItem(BILL_TO_SHIPPING_KEY);
    if (!isInitialized && localIsBillToShipping) {
      setIsInitialized(true);
      isBillToShipping.value = {
        checked: localIsBillToShipping === "true",
        setByUser: false
      };
      return;
    }
    if (!isInitialized && hasCartData) {
      setIsInitialized(true);
      const isSameShippingAndBilling = compareAddresses(fields, billingAddress, shippingAddress);
      isBillToShipping.value = {
        checked: (cartData == null ? void 0 : cartData.billingAddress) ? isSameShippingAndBilling : isBillToShipping.value.checked,
        setByUser: false
      };
    }
  }, [billingAddress, cartData == null ? void 0 : cartData.billingAddress, fields, hasCartData, isBillToShipping, isInitialized, shippingAddress]);
  return {
    isInitialized
  };
};
const BillToShippingAddress = ({
  children,
  ...props
}) => {
  const {
    data: cartData
  } = cartSignal.value;
  const cartId = (cartData == null ? void 0 : cartData.id) || "";
  const isBillToShipping = isBillToShippingSignal.value.checked;
  const {
    isInitialized
  } = useInitialState({
    isBillToShipping: isBillToShippingSignal
  });
  const onChangeHandler = (event) => {
    var _a;
    const checkbox = event.target;
    const isChecked = checkbox.checked;
    const cartData2 = cartSignal.value.data;
    const hasShippingAddress = Boolean((_a = cartData2 == null ? void 0 : cartData2.shippingAddresses) == null ? void 0 : _a[0]);
    isBillToShippingSignal.value = {
      checked: isChecked,
      setByUser: true
    };
    localStorage.setItem(BILL_TO_SHIPPING_KEY, isChecked.toString());
    if (isInitialized && isChecked && hasShippingAddress) {
      const controller = new AbortController();
      setBillingAddress({
        signal: controller.signal,
        cartId,
        input: {
          same_as_shipping: true
        }
      }).catch((error) => {
        console.error(error);
      });
      return () => {
        controller.abort();
      };
    }
  };
  return jsx(BillToShippingAddress$1, {
    ...props,
    checked: isBillToShipping,
    isInitialized,
    onChange: onChangeHandler,
    disabled: cartSignal.value.pending
  });
};
export {
  BillToShippingAddress as B,
  BILL_TO_SHIPPING_KEY as a,
  compareAddresses as c
};
