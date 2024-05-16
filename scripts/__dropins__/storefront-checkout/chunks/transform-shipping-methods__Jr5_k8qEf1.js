import { h as a, f as fetchGraphQl, j as handleNetworkError, l as isNullish } from "./countries__BI6v0R6zIv.js";
import "@dropins/tools/event-bus.js";
class FetchError extends Error {
  constructor(reasons) {
    super(reasons.map((e) => e.message).join(" "));
    this.name = "FetchError";
  }
}
class InvalidArgument extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidArgument";
  }
}
class UnexpectedError extends Error {
  constructor(message) {
    super(message);
    this.name = "UnexpectedError";
  }
}
class MissingCart extends InvalidArgument {
  constructor() {
    super("Cart ID is required");
  }
}
class MissingEmail extends InvalidArgument {
  constructor() {
    super("Email is required");
  }
}
class MissingPaymentMethod extends InvalidArgument {
  constructor() {
    super("Payment method code is required");
  }
}
class MissingBillingAddress extends InvalidArgument {
  constructor() {
    super("Billing address is required");
  }
}
class MissingCountry extends InvalidArgument {
  constructor() {
    super("Country Code is required");
  }
}
const cartSignal = a({
  pending: false,
  data: void 0
});
const estimateShippingMethodsSignal = a({
  pending: false,
  data: void 0
});
const regionsSignal = a({
  pending: false,
  data: void 0
});
const requestsQueue = [];
function enqueueRequest(requestFn) {
  return new Promise((resolve, reject) => {
    requestsQueue.push(requestFn);
    const waitForTurnAndSendRequest = () => {
      if (requestsQueue[0] === requestFn) {
        requestFn().then(resolve).catch(reject).finally(() => requestsQueue.shift());
      } else {
        setTimeout(waitForTurnAndSendRequest, 100);
      }
    };
    waitForTurnAndSendRequest();
  });
}
const controlledErrorProps = ["sender_email", "recipient_email"];
function filterControlledErrors(errors) {
  return errors.filter((error) => !error.path || !controlledErrorProps.some((controlledErrorProp) => {
    var _a;
    return ((_a = error.path) == null ? void 0 : _a.at(-1)) === controlledErrorProp;
  }));
}
const signalTypes = {
  cart: cartSignal,
  regions: regionsSignal,
  estimateShippingMethods: estimateShippingMethodsSignal
};
function getValueAtPath(obj, path) {
  return path.split(".").reduce((acc, part) => acc && acc[part] !== void 0 ? acc[part] : void 0, obj);
}
const latestCall = {
  cart: null,
  regions: null,
  estimateShippingMethods: null
};
async function dispatchApiCall(params) {
  const {
    query,
    options,
    path,
    signalType,
    type,
    transformer
  } = params;
  const signal = signalTypes[signalType];
  const currentCall = Symbol();
  latestCall[signalType] = currentCall;
  signal.value = {
    ...signal.value,
    pending: true
  };
  try {
    const {
      data,
      errors
    } = await (type === "mutation" ? enqueueRequest(() => fetchGraphQl(query, options).catch(handleNetworkError)) : fetchGraphQl(query, {
      method: "GET",
      cache: "no-cache",
      ...options
    }).catch(handleNetworkError));
    if (errors) {
      const uncontrolledErrors = filterControlledErrors(errors);
      if (uncontrolledErrors.length > 0) {
        throw new FetchError(uncontrolledErrors);
      }
    }
    let result = getValueAtPath(data, path);
    if (result === void 0)
      throw new Error(`No data found at path: ${path}`);
    if (transformer)
      result = transformer(result);
    signal.value = {
      ...signal.value,
      data: result
    };
    setTimeout(() => {
      signal.value = {
        ...signal.value,
        pending: latestCall[signalType] === currentCall ? false : signal.value.pending
      };
    }, 0);
    return result;
  } catch (error) {
    if (error.name === "AbortError")
      return;
    signal.value = {
      ...signal.value,
      pending: false
    };
    throw error;
  }
}
const byPrice = (a2, b) => a2.amount.value - b.amount.value;
const isValid = (method) => {
  if (!method)
    return false;
  if (!method.method_code || !method.method_title)
    return false;
  if (isNullish(method.amount.value) || !method.amount.currency)
    return false;
  return true;
};
const buildShippingMethod = (data) => {
  return {
    amount: {
      value: data.amount.value,
      currency: data.amount.currency
    },
    title: data.method_title,
    code: data.method_code,
    carrier: {
      code: data.carrier_code,
      title: data.carrier_title
    },
    value: `${data.carrier_code} - ${data.method_code}`
  };
};
const transformSelectedShippingMethod = (data) => {
  if (!isValid(data))
    return;
  return buildShippingMethod(data);
};
const transformShippingMethods = (data) => {
  if (!data)
    return;
  return data.filter(isValid).map((method) => buildShippingMethod(method)).sort(byPrice);
};
export {
  FetchError as F,
  InvalidArgument as I,
  MissingCart as M,
  UnexpectedError as U,
  MissingEmail as a,
  MissingPaymentMethod as b,
  MissingBillingAddress as c,
  MissingCountry as d,
  cartSignal as e,
  dispatchApiCall as f,
  estimateShippingMethodsSignal as g,
  transformSelectedShippingMethod as h,
  regionsSignal as r,
  transformShippingMethods as t
};
//# sourceMappingURL=transform-shipping-methods__Jr5_k8qEf1.js.map
