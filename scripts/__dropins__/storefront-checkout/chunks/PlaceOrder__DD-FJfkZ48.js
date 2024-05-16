import "./CartSummaryItem__iGzWaHX3tp.js";
import { Button } from "@dropins/tools/components/index.js";
import { jsx } from "@dropins/tools/preact-jsx-runtime.js";
import { c as classes } from "./classes__Bsz9GBN04n.js";
import { Text } from "@dropins/tools/i18n.js";
import "@dropins/tools/event-bus.js";
import { e as cartSignal } from "./transform-shipping-methods__Jr5_k8qEf1.js";
import "./countries__BI6v0R6zIv.js";
import "@dropins/tools/preact-hooks.js";
/* empty css                                  */
import "@dropins/tools/preact-compat.js";
import { L as LOGIN_FORM_NAME } from "./constants__Bjtfl8EOca.js";
import { S as SHIPPING_FORM_NAME } from "./constants__DMF04Yfz9Q.js";
import { B as BILLING_FORM_NAME } from "./constants__BdEsiyu87r.js";
const PlaceOrder$1 = ({
  className,
  children,
  ...props
}) => {
  const {
    onClick = () => {
    },
    isLoading
  } = props;
  return jsx("div", {
    className: classes(["checkout-place-order", className]),
    children: jsx(Button, {
      className: classes(["checkout-place-order__button", className]),
      size: "medium",
      variant: "primary",
      type: "submit",
      onClick,
      disabled: isLoading,
      children: jsx(Text, {
        id: "Checkout.PlaceOrder.button"
      })
    }, "placeOrder")
  });
};
const CHECKOUT_FORMS = [LOGIN_FORM_NAME, SHIPPING_FORM_NAME, BILLING_FORM_NAME];
const scrollToFirstInvalidField = (form) => {
  const firstInvalidField = form.querySelector(":invalid");
  if (firstInvalidField) {
    firstInvalidField.scrollIntoView({
      behavior: "smooth"
    });
    firstInvalidField.focus();
  }
};
const canPlaceOrder = () => {
  const formCollection = Array.from(document.forms) || [];
  const invalidForms = formCollection.filter((form) => {
    return CHECKOUT_FORMS.includes(form.name);
  }).filter((form) => {
    return form.offsetParent !== null;
  }).filter((form) => {
    return !form.checkValidity();
  });
  const canPlaceOrder2 = invalidForms.length === 0;
  if (!canPlaceOrder2) {
    const firstInvalidForm = invalidForms[0];
    scrollToFirstInvalidField(firstInvalidForm);
  }
  return canPlaceOrder2;
};
const PlaceOrder = (props) => {
  const {
    onClick,
    handleServerError
  } = props;
  const handleOrderPlace = async () => {
    if (!canPlaceOrder())
      return;
    try {
      await onClick();
    } catch (err) {
      handleServerError(err);
    }
  };
  return jsx(PlaceOrder$1, {
    onClick: handleOrderPlace,
    isLoading: cartSignal.value.pending
  });
};
export {
  PlaceOrder as P
};
//# sourceMappingURL=PlaceOrder__DD-FJfkZ48.js.map
