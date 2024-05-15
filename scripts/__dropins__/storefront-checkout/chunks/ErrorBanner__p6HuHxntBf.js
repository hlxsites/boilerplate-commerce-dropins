import * as React from "@dropins/tools/preact-compat.js";
import { useState, useEffect } from "@dropins/tools/preact-compat.js";
import { events } from "@dropins/tools/event-bus.js";
import { AlertBanner, Icon } from "@dropins/tools/components/index.js";
import { jsx } from "@dropins/tools/preact-jsx-runtime.js";
import { useText } from "@dropins/tools/i18n.js";
const SvgWarningFilled = (props) => /* @__PURE__ */ React.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("path", { vectorEffect: "non-scaling-stroke", fillRule: "evenodd", clipRule: "evenodd", d: "M1 20.8953L12.1922 1.5L23.395 20.8953H1ZM13.0278 13.9638L13.25 10.0377V9H11.25V10.0377L11.4722 13.9638H13.0278ZM11.2994 16V17.7509H13.2253V16H11.2994Z", fill: "currentColor" }));
const ErrorBanner = (props) => {
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    const subscription = events.on("error", (data) => {
      if ((data == null ? void 0 : data.source) === "checkout" && (data == null ? void 0 : data.type) === "network") {
        setHasError(true);
      }
    });
    return () => {
      subscription == null ? void 0 : subscription.off();
    };
  }, []);
  const onDismiss = () => {
    setHasError(false);
  };
  const translations = useText({
    message: "Checkout.ErrorBanner.genericMessage",
    label: "Checkout.ErrorBanner.dismissLabel"
  });
  if (!hasError)
    return null;
  return jsx(AlertBanner, {
    ...props,
    "data-testid": "error-banner",
    icon: jsx(Icon, {
      source: SvgWarningFilled
    }),
    message: jsx("span", {
      children: translations.message
    }),
    onDismiss,
    variant: "warning"
  });
};
export {
  ErrorBanner as E
};
