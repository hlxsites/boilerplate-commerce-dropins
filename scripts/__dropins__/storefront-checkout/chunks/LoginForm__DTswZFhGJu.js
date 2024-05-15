import "@dropins/tools/event-bus.js";
import { e as cartSignal } from "./transform-shipping-methods__Csm-KieitR.js";
import "./countries__BNdKWz0f2q.js";
import { i as isEmailAvailable, s as setGuestEmailOnCart } from "./setGuestEmailOnCart__Cz0-Ak45kk.js";
import { Field, Input } from "@dropins/tools/components/index.js";
import { jsx, jsxs } from "@dropins/tools/preact-jsx-runtime.js";
import { H as Heading } from "./usePreselectedFields__yoBeivzMB8.js";
import { useState, useEffect } from "@dropins/tools/preact-hooks.js";
/* empty css                                  */
import { useText, Text } from "@dropins/tools/i18n.js";
import "@adobe/elsie/components/CartItem/CartItemSkeleton";
import { c as classes } from "./classes__Bsz9GBN04n.js";
import { L as LOGIN_FORM_NAME } from "./constants__Bjtfl8EOca.js";
const Email = ({
  value,
  error,
  hint,
  onChange,
  onBlur,
  onInvalid
}) => {
  const translations = useText({
    LoginFormLabel: "Checkout.LoginForm.ariaLabel",
    LoginFormFloatingLabel: "Checkout.LoginForm.floatingLabel",
    LoginFormPlaceholder: "Checkout.LoginForm.placeholder"
  });
  return jsx(Field, {
    size: "medium",
    error,
    hint,
    children: jsx(Input, {
      id: "customer-email",
      name: "userName",
      type: "email",
      value,
      autocomplete: "email",
      placeholder: translations.LoginFormPlaceholder,
      floatingLabel: translations.LoginFormFloatingLabel,
      onChange,
      onBlur,
      onInvalid,
      required: true,
      "aria-label": translations.LoginFormLabel,
      "aria-required": true
    })
  });
};
const SignIn = () => {
  return jsxs("p", {
    className: "checkout-login-form__signIn",
    children: [jsx(Text, {
      id: "Checkout.LoginForm.account"
    }), jsx("a", {
      className: "checkout-login-form__link",
      href: "#",
      target: "_blank",
      rel: "noreferrer",
      children: jsx(Text, {
        id: "Checkout.LoginForm.signIn"
      })
    })]
  });
};
const LoginForm$1 = ({
  name,
  className,
  currentEmail,
  hint,
  error = null,
  onEmailChange,
  onEmailBlur,
  onEmailInvalid,
  ...props
}) => {
  const translations = useText({
    Title: "Checkout.LoginForm.title"
  });
  return jsxs("div", {
    ...props,
    className: classes(["checkout-login-form", className]),
    children: [jsxs("div", {
      className: "checkout-login-form__heading",
      children: [jsx(Heading, {
        level: 2,
        className: "checkout-login-form__title",
        children: translations.Title
      }), jsx(SignIn, {})]
    }), jsx("div", {
      className: "checkout-login-form__content",
      children: jsxs("form", {
        className: classes(["dropin-login-form__form", className]),
        name,
        noValidate: true,
        children: [jsx("button", {
          type: "submit",
          disabled: true,
          style: "display: none",
          "aria-hidden": "true"
        }), jsx(Email, {
          value: currentEmail || void 0,
          error: error || "",
          hint,
          onChange: onEmailChange,
          onBlur: onEmailBlur,
          onInvalid: onEmailInvalid
        })]
      })
    })]
  });
};
const DEBOUNCE_TIME = 1e3;
const LoginForm = ({
  className,
  email = null,
  ...props
}) => {
  const translations = useText({
    LoginFormInvalidEmailError: "Checkout.LoginForm.invalidEmailError",
    LoginFormMissingEmailError: "Checkout.LoginForm.missingEmailError",
    LoginFormEmailExists: "Checkout.LoginForm.emailExists"
  });
  const {
    data: cartData
  } = cartSignal.value;
  const cartId = (cartData == null ? void 0 : cartData.id) || "";
  const hasCartData = !!cartData;
  const [isInitialized, setIsInitialized] = useState(false);
  const [currentEmail, setCurrentEmail] = useState(email);
  const [error, setError] = useState();
  const [emailAvailability, setEmailAvailability] = useState(true);
  const errorMessage = (validity) => {
    if (validity.valid)
      return null;
    if (validity.valueMissing)
      return translations.LoginFormMissingEmailError;
    return translations.LoginFormInvalidEmailError;
  };
  const onEmailChange = (e) => {
    const {
      value
    } = e.target;
    setCurrentEmail(value);
    setError(null);
    setEmailAvailability(true);
  };
  const onEmailBlur = (e) => {
    const {
      validity
    } = e.target;
    setError(errorMessage(validity));
  };
  const onEmailInvalid = (e) => {
    const {
      validity
    } = e.target;
    setError(errorMessage(validity));
  };
  if (!isInitialized && hasCartData) {
    setIsInitialized(true);
    setCurrentEmail((cartData == null ? void 0 : cartData.email) || email);
  }
  useEffect(() => {
    if (!currentEmail || error || (cartData == null ? void 0 : cartData.email) === currentEmail)
      return;
    const timer = setTimeout(() => {
      isEmailAvailable(currentEmail).then((result) => {
        setEmailAvailability(result);
        setGuestEmailOnCart({
          cartId,
          email: currentEmail
        }).catch((e) => {
          console.log("set email failed", e);
        });
      }).catch((e) => {
        console.log(e);
        setError(translations.LoginFormInvalidEmailError);
        setEmailAvailability(true);
      });
    }, DEBOUNCE_TIME);
    return () => {
      timer && clearTimeout(timer);
    };
  }, [currentEmail, error, translations.LoginFormInvalidEmailError, cartData == null ? void 0 : cartData.email, cartId]);
  return jsx(LoginForm$1, {
    className,
    currentEmail,
    error,
    hint: emailAvailability ? "" : translations.LoginFormEmailExists,
    name: LOGIN_FORM_NAME,
    onEmailBlur,
    onEmailChange,
    onEmailInvalid,
    ...props
  });
};
export {
  LoginForm as L
};
