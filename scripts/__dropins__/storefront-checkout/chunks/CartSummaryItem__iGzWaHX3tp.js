import { events } from "@dropins/tools/event-bus.js";
import { r as regionsSignal, e as cartSignal } from "./transform-shipping-methods__Jr5_k8qEf1.js";
import { o as AttributeFrontendInputEnum, V as ValidationRuleEnum, u as useAddressFormFields, p as useCountries, i as useStore, q as useServices } from "./countries__BI6v0R6zIv.js";
import { b as getMultilineValues, a as AddressFormFields, A as AddressFormTypes, e as estimateShippingMethods, D as DEBOUNCE_TIME, g as getRegions, M as MULTILINE_SUFFIX, c as MULTILINE_CUSTOM_ATTR_SPLIT } from "./estimateShippingMethods__DtFfjChDpY.js";
import { useState as useState$1, useEffect as useEffect$1, useCallback, useRef as useRef$1, useMemo } from "@dropins/tools/preact-hooks.js";
import { Text, useText } from "@dropins/tools/i18n.js";
import { Skeleton, SkeletonRow, Field, Input, Picker } from "@dropins/tools/components/index.js";
/* empty css                                  */
import { jsxs, jsx, Fragment } from "@dropins/tools/preact-jsx-runtime.js";
import { c as classes } from "./classes__Bsz9GBN04n.js";
import { V as VComponent } from "./vcomponent__Bib-9V9Azd.js";
import { forwardRef, useRef, useImperativeHandle, useState, useEffect } from "@dropins/tools/preact-compat.js";
const getFormErrors = (form) => {
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  const result = Object.entries(data).reduce((result2, [key]) => {
    const field = form.elements[key];
    return (field == null ? void 0 : field.validationMessage) ? {
      ...result2,
      [key]: field.validationMessage
    } : {
      ...result2
    };
  }, {});
  return result;
};
const autocompleteFieldCodes = {
  firstname: "given-name",
  lastname: "family-name",
  company: "organization",
  country: "country",
  region: "address-level1",
  city: "address-level2",
  postcode: "postal-code",
  telephone: "tel",
  street: "address-line1",
  email: "email",
  middlename: "additional-name",
  prefix: "honorific-prefix",
  suffix: "honorific-suffix"
};
function isEmpty(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}
const isValidOption = (option) => {
  return (option == null ? void 0 : option.label) && (option == null ? void 0 : option.value);
};
const transformFormFieldOptions = (data) => {
  if (!data)
    return [];
  return data.filter(isValidOption).map((option) => ({
    text: option.label,
    value: option.value
  }));
};
const transformRegionOptions = (regions) => {
  return regions.map((region) => {
    var _a;
    const value = ((_a = region == null ? void 0 : region.id) == null ? void 0 : _a.toString()) || region.code;
    return {
      text: region.name,
      value
    };
  });
};
const transformCountryOptions = (countries) => {
  if (!countries)
    return [];
  return countries.map((country) => ({
    text: country.label,
    value: country.value
  }));
};
function processFormFields({
  fields,
  address,
  setAddress,
  addressType,
  errors,
  config,
  availableCountries,
  availableRegions,
  onSelection,
  onChange,
  onBlur,
  onInvalid
}) {
  const resetRegion = () => {
    setAddress((address2) => ({
      ...address2,
      [AddressFormFields.Region]: "",
      [AddressFormFields.RegionId]: ""
    }));
  };
  const syncRegionId = (regionId) => {
    setAddress((address2) => ({
      ...address2,
      [AddressFormFields.RegionId]: regionId
    }));
  };
  return fields.map((field) => {
    var _a;
    let is_required = field.is_required;
    let value;
    let inputType = field.frontend_input;
    let options = [];
    let error;
    let handleSelect;
    let disabled = false;
    if (inputType === "MULTILINE") {
      value = getMultilineValues(field.code, address);
      error = getMultilineValues(field.code, errors);
    } else {
      value = address[field.code];
      error = errors[field.code] || "";
    }
    if (field.code !== AddressFormFields.Region && field.code !== AddressFormFields.Country) {
      options = transformFormFieldOptions(field.options);
    }
    if (field.code === AddressFormFields.Country) {
      options = transformCountryOptions(availableCountries);
      if (addressType === AddressFormTypes.SHIPPING) {
        regionsSignal.value.country = value;
        handleSelect = (event) => {
          const target = event.target;
          const {
            value: value2
          } = target;
          if (value2) {
            refetchEstimatedShippingMethods({
              country_code: value2
            });
          }
          onSelection(event);
          resetRegion();
        };
      } else {
        handleSelect = onSelection;
      }
    }
    if (field.code === AddressFormFields.RegionId) {
      if (addressType === AddressFormTypes.SHIPPING) {
        regionsSignal.value.selectedRegionId = value;
      }
    }
    if (field.code === AddressFormFields.Region) {
      if (addressType === regionsSignal.value.addressType) {
        disabled = regionsSignal.value.pending;
      }
      is_required = config.countriesWithRequiredRegion.includes(address == null ? void 0 : address.country_id);
      options = transformRegionOptions(availableRegions);
      if (!is_required && !config.displayStateIfOptional) {
        inputType = AttributeFrontendInputEnum.Undefined;
      }
      inputType = options.length > 0 ? AttributeFrontendInputEnum.Select : AttributeFrontendInputEnum.Text;
      if (inputType === "SELECT") {
        if (addressType === AddressFormTypes.SHIPPING) {
          regionsSignal.value.selectedRegion = value;
          handleSelect = (event) => {
            const target = event.target;
            const selectedRegion = target.value;
            refetchEstimatedShippingMethods({
              country_code: regionsSignal.value.country,
              region_id: selectedRegion
            });
            onSelection(event);
            syncRegionId(selectedRegion);
          };
        } else {
          handleSelect = (event) => {
            onSelection(event);
            const target = event.target;
            const selectedRegion = target.value;
            syncRegionId(selectedRegion);
          };
        }
      } else if (inputType === "TEXT") {
        if (addressType === AddressFormTypes.SHIPPING) {
          regionsSignal.value.selectedRegion = value;
          const defaultOnChange = onChange;
          onChange = (event) => {
            const target = event.target;
            const {
              value: value2
            } = target;
            if (regionsSignal.value.country) {
              refetchEstimatedShippingMethods({
                country_code: regionsSignal.value.country,
                region_name: value2
              });
            }
            defaultOnChange(event);
          };
        }
      }
      value = options.length > 0 ? ((_a = options.find((regionOption) => regionOption.value === value)) == null ? void 0 : _a.value) || "" : value;
    }
    if (field.code === AddressFormFields.PostCode) {
      is_required = !config.countriesWithOptionalZipCode.includes(address == null ? void 0 : address.country_id);
    }
    return {
      ...field,
      is_required,
      frontend_input: inputType,
      addressType,
      className: `checkout-address-form__${field.code}`,
      value,
      options,
      error,
      onChange,
      onBlur,
      onInvalid,
      handleSelect,
      disabled
    };
  });
}
let estimateShipppingTimer;
function refetchEstimatedShippingMethods(criteria) {
  var _a;
  const cartData = cartSignal.value.data;
  const hasCartData = !!cartData;
  const firstAddress = (_a = cartData == null ? void 0 : cartData.shippingAddresses) == null ? void 0 : _a[0];
  const availableShippingMethods = firstAddress == null ? void 0 : firstAddress.availableShippingMethods;
  if (hasCartData && !availableShippingMethods) {
    clearTimeout(estimateShipppingTimer);
    estimateShipppingTimer = setTimeout(() => {
      estimateShippingMethods({
        cartId: cartData.id,
        criteria
      });
    }, DEBOUNCE_TIME);
  }
}
const validityProps = (rules) => rules.reduce((props, rule) => {
  switch (rule.name) {
    case ValidationRuleEnum.DateRangeMax:
      return {
        ...props,
        max: rule.value
      };
    case ValidationRuleEnum.DateRangeMin:
      return {
        ...props,
        min: rule.value
      };
    case ValidationRuleEnum.FileExtensions:
      return {
        ...props,
        accept: rule.value
      };
    case ValidationRuleEnum.InputValidation:
      return {
        ...props,
        pattern: patternFor(rule.value)
      };
    case ValidationRuleEnum.MaxFileSize:
    case ValidationRuleEnum.MaxImageHeight:
    case ValidationRuleEnum.MaxImageWidth:
      return props;
    case ValidationRuleEnum.MaxTextLength:
      return {
        ...props,
        maxLength: rule.value
      };
    case ValidationRuleEnum.MinTextLength:
      return {
        ...props,
        minLength: rule.value
      };
    default:
      throw new Error(`Unknown rule: ${rule.name}`);
  }
}, {});
const patterns = {
  alpha: /^[a-zA-Z]+$/,
  alphanumeric: /^[a-zA-Z0-9]+$/,
  "alphanumeric-w-space": /^[a-zA-Z0-9 ]+$/,
  "alphanum-with-spaces": /^[a-zA-Z0-9 ]+$/,
  email: /^([a-z0-9,!#$%&'*+/=?^_`{|}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9,!#$%&'*+/=?^_`{|}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*@([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*\.(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]){2,})$/i,
  numeric: /^[0-9]+$/,
  url: /^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w\-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/
};
const patternFor = (type) => {
  switch (type) {
    case "alpha":
      return patterns.alpha.source;
    case "alphanumeric":
      return patterns.alphanumeric.source;
    case "alphanumeric-w-space":
      return patterns["alphanumeric-w-space"].source;
    case "alphanum-with-spaces":
      return patterns["alphanum-with-spaces"].source;
    case "url":
      return patterns.url.source;
    case "numeric":
      return patterns.numeric.source;
    case "email":
      return patterns.email.source;
    default:
      throw new Error(`Unknown validation type: ${type}`);
  }
};
const FieldsFormSkeleton = (props) => {
  return jsxs(Skeleton, {
    ...props,
    children: [jsx(SkeletonRow, {
      variant: "heading",
      size: "medium"
    }), jsx(SkeletonRow, {
      variant: "empty",
      size: "medium"
    }), jsx(SkeletonRow, {
      size: "large"
    }), jsx(SkeletonRow, {
      size: "large"
    }), jsx(SkeletonRow, {
      size: "large",
      fullWidth: true
    }), jsx(SkeletonRow, {
      size: "large",
      fullWidth: true,
      lines: 3
    }), jsx(SkeletonRow, {
      size: "large"
    }), jsx(SkeletonRow, {
      size: "large"
    }), jsx(SkeletonRow, {
      size: "large"
    }), jsx(SkeletonRow, {
      size: "large"
    }), jsx(SkeletonRow, {
      size: "large"
    }), jsx(SkeletonRow, {
      size: "large"
    }), jsx(SkeletonRow, {
      size: "large"
    })]
  });
};
const hiddenField = (field) => {
  const {
    id,
    addressType,
    className,
    code,
    value,
    default_value
  } = field;
  const fieldID = id || code;
  return jsx("input", {
    className,
    id: `${addressType}-${fieldID}`,
    name: code,
    type: "hidden",
    value: value ?? default_value
  }, code);
};
const textField = (field) => {
  const {
    addressType,
    className,
    code,
    error,
    id,
    onBlur,
    onChange,
    onInvalid,
    validate_rules,
    value
  } = field;
  const validity = validityProps(validate_rules);
  const fieldID = id || code;
  return jsx(Field, {
    disabled: field.disabled,
    error,
    children: jsx(Input, {
      "aria-label": field.label,
      autocomplete: autocompleteFieldCodes[code] || "off",
      className,
      floatingLabel: `${field.label} ${field.is_required ? "*" : ""}`,
      id: `${addressType}-${fieldID}`,
      onBlur,
      onChange,
      onInvalid,
      placeholder: field.label,
      required: field.is_required || false,
      type: "text",
      name: code,
      value: value ?? void 0,
      ...validity
    })
  });
};
const multilineField = (field) => {
  const {
    addressType,
    className,
    code,
    disabled,
    error,
    id,
    is_required,
    label,
    multiline_count,
    onBlur,
    onChange,
    onInvalid,
    validate_rules,
    value
  } = field;
  const numOfFields = multiline_count ?? 0;
  const fieldID = id || code;
  const validity = validityProps(validate_rules);
  return jsx(Fragment, {
    children: Array.from(Array(numOfFields).keys()).map((i) => jsx(Field, {
      disabled,
      error: (error == null ? void 0 : error[i]) || "",
      className: "dropin-field--multiline",
      children: jsx(Input, {
        id: `${addressType}-${fieldID}-${i}`,
        className,
        floatingLabel: `${label} ${i != 0 ? i : ""} ${is_required && i === 0 ? "*" : ""}`,
        autocomplete: i === 0 ? autocompleteFieldCodes[code] : "off",
        "aria-label": label,
        placeholder: `${label} ${i != 0 ? i : ""}`,
        type: "text",
        required: is_required && i === 0,
        onChange,
        onBlur,
        onInvalid,
        name: `${code}-${i}`,
        value: (value == null ? void 0 : value[i]) || void 0,
        ...validity
      })
    }, `${code}-${i}`))
  });
};
const selectField = (field) => {
  const {
    addressType,
    className,
    code,
    disabled,
    error,
    handleSelect,
    id,
    is_required,
    label,
    onBlur,
    onInvalid,
    options,
    value
  } = field;
  const fieldID = id || code;
  const handleSelectAttribute = handleSelect ? {
    handleSelect
  } : {};
  return jsx(Field, {
    disabled,
    error,
    children: jsx(Picker, {
      id: `${addressType}-${fieldID}`,
      className,
      name: code,
      floatingLabel: `${label} ${is_required ? "*" : ""}`,
      required: is_required,
      placeholder: label,
      "aria-label": label,
      options,
      value,
      autocomplete: autocompleteFieldCodes[code] || "off",
      onBlur,
      onInvalid,
      ...handleSelectAttribute
    }, code)
  });
};
const createField = (field) => {
  switch (field.frontend_input) {
    case "BOOLEAN":
    case "DATE":
    case "DATETIME":
    case "FILE":
    case "GALLERY":
    case "IMAGE":
    case "MEDIA_IMAGE":
    case "MULTISELECT":
    case "PRICE":
    case "TEXTAREA":
    case "UNDEFINED":
    case "WEIGHT":
      return null;
    case "HIDDEN":
      return hiddenField(field);
    case "TEXT":
      return textField(field);
    case "MULTILINE":
      return multilineField(field);
    case "SELECT":
      return selectField(field);
    default:
      throw new Error(`Unknown field type: ${field.frontend_input}`);
  }
};
const FieldsForm = ({
  className,
  name,
  headingId,
  formRef,
  fields,
  ...props
}) => {
  return jsxs("div", {
    ...props,
    className: classes(["checkout-fields-form", className]),
    children: [jsx(Heading, {
      level: 2,
      children: jsx(Text, {
        id: headingId
      }),
      className: "checkout-fields-form__title"
    }), jsx("form", {
      name,
      ref: formRef,
      className: classes(["checkout-fields-form__form", className]),
      noValidate: true,
      children: fields.sort((a, b) => {
        return a.sort_order - b.sort_order;
      }).map(createField)
    })]
  });
};
function useDefaultValues(defaultCountry) {
  const [defaultValues, setDefaultValues] = useState({});
  useEffect(() => {
    if (!defaultCountry)
      return;
    setDefaultValues((defaultValues2) => ({
      ...defaultValues2,
      country_id: defaultCountry
    }));
  }, [defaultCountry]);
  return {
    defaultValues
  };
}
function useRegions({
  country,
  addressType
}) {
  const [availableRegions, setAvailableRegions] = useState([]);
  useEffect(() => {
    if (!country) {
      setAvailableRegions([]);
      return;
    }
    getRegions(country, addressType).then((data) => {
      setAvailableRegions(data || []);
    }).catch((error) => {
      console.error(error);
    });
  }, [setAvailableRegions, country, addressType]);
  return {
    availableRegions
  };
}
function useFormFill({
  shouldAutoFillForm,
  addressType,
  setAddress,
  fields
}) {
  const [hasFormFillCompleted, setHasFormFillCompleted] = useState(false);
  const cartData = cartSignal.value.data;
  useEffect(() => {
    var _a;
    if (hasFormFillCompleted)
      return;
    const isReadyToProcess = cartData && fields;
    if (!isReadyToProcess)
      return;
    setHasFormFillCompleted(true);
    const addressData = addressType === AddressFormTypes.SHIPPING ? cartData == null ? void 0 : cartData.shippingAddresses : cartData == null ? void 0 : cartData.billingAddress;
    const isAnAddressList = Array.isArray(addressData);
    const hasAddressData = isAnAddressList ? addressData.length > 0 : !!addressData;
    if (!hasAddressData)
      return;
    if (shouldAutoFillForm && !shouldAutoFillForm())
      return;
    const isMultiline = (code) => {
      if (!fields)
        return false;
      const field = fields.find((field2) => field2.code === code);
      if (!field)
        return false;
      return field.frontend_input === "MULTILINE";
    };
    const firstAddress = Array.isArray(addressData) ? addressData[0] : addressData;
    if (!firstAddress)
      return;
    const addressFormValues = {
      [AddressFormFields.City]: firstAddress.city,
      [AddressFormFields.Company]: firstAddress.company || "",
      [AddressFormFields.Country]: firstAddress.country.value,
      [AddressFormFields.FirstName]: firstAddress.firstName,
      [AddressFormFields.LastName]: firstAddress.lastName,
      [AddressFormFields.PostCode]: firstAddress.postCode || "",
      [AddressFormFields.Telephone]: firstAddress.telephone || "",
      [AddressFormFields.Vat]: firstAddress.vatId || ""
    };
    const region = firstAddress.region;
    if (region) {
      const regionId = (_a = region == null ? void 0 : region.id) == null ? void 0 : _a.toString();
      if (regionId) {
        addressFormValues[AddressFormFields.Region] = regionId;
        addressFormValues[AddressFormFields.RegionId] = regionId;
      } else {
        addressFormValues[AddressFormFields.Region] = region.code;
      }
    }
    if ((firstAddress == null ? void 0 : firstAddress.street) && firstAddress.street.length > 0) {
      firstAddress.street.forEach((street, index) => {
        addressFormValues[`${AddressFormFields.Street}${MULTILINE_SUFFIX}${index}`] = street;
      });
    }
    const customAttributes = (firstAddress == null ? void 0 : firstAddress.customAttributes) || [];
    customAttributes.forEach((attribute) => {
      if (!isMultiline(attribute.code)) {
        addressFormValues[attribute.code] = attribute.value;
      } else {
        const values = attribute.value.split(MULTILINE_CUSTOM_ATTR_SPLIT);
        values.forEach((value, index) => {
          addressFormValues[`${attribute.code}${MULTILINE_SUFFIX}${index}`] = value;
        });
      }
    });
    setAddress(addressFormValues);
  }, [setAddress, shouldAutoFillForm, addressType, cartData, fields, hasFormFillCompleted]);
}
const AddressForm = forwardRef(({
  name,
  preselectedFields,
  addressType,
  headingId,
  saveAddressHandler,
  children,
  shouldAutoFillForm,
  ...props
}, ref) => {
  const {
    fields
  } = useAddressFormFields();
  const {
    countries: availableCountries
  } = useCountries();
  const isLoadingCountries = availableCountries === void 0;
  const isLoadingFormFields = fields === void 0;
  const {
    config
  } = useStore();
  const isLoadingStoreConfig = config === void 0;
  const {
    defaultValues
  } = useDefaultValues(config == null ? void 0 : config.defaultCountry);
  const {
    preselection
  } = usePreselectedFields({
    fields,
    preselectedFields
  });
  const formRef = useRef(null);
  const {
    address,
    setAddress,
    onSelection,
    errors,
    onChange,
    onInvalid,
    onBlur
  } = useAddressForm({
    formRef,
    type: addressType,
    defaultValues,
    preselection,
    saveAddressHandler
  });
  const {
    availableRegions
  } = useRegions({
    country: address.country_id,
    addressType
  });
  useImperativeHandle(ref, () => ({
    triggerSaveAddress: (signal) => {
      if (!formRef.current)
        return;
      const errors2 = getFormErrors(formRef.current);
      if (!isEmpty(errors2))
        return;
      return saveAddressHandler({
        signal,
        address
      });
    }
  }));
  useFormFill({
    shouldAutoFillForm,
    addressType,
    setAddress,
    fields
  });
  const isLoading = isLoadingFormFields || isLoadingCountries || isLoadingStoreConfig;
  if (isLoading) {
    return jsx(FieldsFormSkeleton, {
      "data-testid": `${addressType}-skeleton`
    });
  }
  const transformedFields = processFormFields({
    fields,
    address,
    setAddress,
    addressType,
    errors,
    config,
    availableCountries,
    availableRegions,
    onSelection,
    onChange,
    onBlur,
    onInvalid
  });
  const typeMapping = {
    [AddressFormTypes.SHIPPING]: "shipping",
    [AddressFormTypes.BILLING]: "billing"
  };
  return jsx(FieldsForm, {
    ...props,
    "data-testid": `${typeMapping[addressType]}-form`,
    name,
    className: `checkout-${typeMapping[addressType]}-form`,
    headingId,
    formRef,
    fields: transformedFields
  });
});
function useAddressBackup(addressType) {
  const {
    backupService
  } = useServices();
  const [addressBackup, setAddressBackup] = useState$1(null);
  useEffect$1(() => {
    const backup2 = backupService.restore(addressType);
    if (!backup2)
      return;
    setAddressBackup(backup2);
  }, [addressType, backupService]);
  useEffect$1(() => {
    const onOrder = events.on("checkout/order", () => {
      backupService.remove(addressType);
    });
    return () => {
      onOrder == null ? void 0 : onOrder.off();
    };
  }, [addressType, backupService]);
  const backup = useCallback((address) => {
    return setTimeout(() => {
      backupService.backup(addressType, address);
    }, DEBOUNCE_TIME);
  }, [addressType, backupService]);
  const removeBackup = useCallback(() => {
    backupService.remove(addressType);
  }, [addressType, backupService]);
  return {
    addressBackup,
    backup,
    removeBackup
  };
}
const attributesMapping = {
  badInput: "aria-label",
  patternMismatch: "aria-label",
  rangeOverflow: "max",
  rangeUnderflow: "min",
  tooLong: "maxlength",
  tooShort: "minlength",
  typeMismatch: "aria-label",
  valueMissing: "aria-label"
};
const constraints = ["badInput", "patternMismatch", "rangeOverflow", "rangeUnderflow", "tooLong", "tooShort", "typeMismatch", "valueMissing"];
const useValidity = (translations) => {
  const [errors, setErrors] = useState$1({});
  const validateFormElement = useCallback((formElement) => {
    const {
      name,
      validity,
      validationMessage
    } = formElement;
    let error = validity.valid ? "" : validationMessage;
    constraints.forEach((constraint) => {
      if (!validity[constraint])
        return;
      const translation = translations[constraint];
      if (!translation)
        return;
      const attribute = attributesMapping[constraint];
      error = translation.replace("{field}", formElement.getAttribute(attribute) || "");
    });
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error
    }));
  }, [translations]);
  return {
    errors,
    validateFormElement
  };
};
const isFormValid = (formRef) => {
  const form = formRef.current;
  if (!form)
    return false;
  const errors = getFormErrors(form);
  return isEmpty(errors);
};
const useAddressForm = ({
  formRef,
  type,
  defaultValues = {},
  preselection = {},
  saveAddressHandler
}) => {
  const translations = useText({
    badInput: "Checkout.AddressForm.Validity.badInput",
    patternMismatch: "Checkout.AddressForm.Validity.patternMismatch",
    rangeUnderflow: "Checkout.AddressForm.Validity.rangeUnderflow",
    tooLong: "Checkout.AddressForm.Validity.tooLong",
    tooShort: "Checkout.AddressForm.Validity.tooShort",
    typeMismatch: "Checkout.AddressForm.Validity.typeMismatch",
    valueMissing: "Checkout.AddressForm.Validity.valueMissing"
  });
  const hasUnsavedChanges = useRef$1(false);
  const [address, setAddress] = useState$1({});
  const {
    addressBackup,
    backup,
    removeBackup
  } = useAddressBackup(type);
  const {
    errors,
    validateFormElement
  } = useValidity(translations);
  const saveAddressForm = useCallback((command) => {
    hasUnsavedChanges.current = false;
    saveAddressHandler(command).then(() => {
      removeBackup();
    }).catch((error) => {
      hasUnsavedChanges.current = true;
      console.error("Saving address form failed:", error);
    });
  }, [removeBackup, saveAddressHandler]);
  const updateField = (code, value) => {
    setAddress((prevAddress) => ({
      ...prevAddress,
      [code]: value
    }));
    hasUnsavedChanges.current = true;
  };
  const onChange = (event) => {
    const target = event.target;
    const {
      name,
      value
    } = target;
    updateField(name, value);
    validateFormElement(target);
  };
  const onInvalid = (event) => {
    const target = event.target;
    validateFormElement(target);
  };
  const onSelection = (event) => {
    const target = event.target;
    const {
      name,
      value
    } = target;
    updateField(name, value);
    validateFormElement(target);
  };
  const onBlur = (event) => {
    const target = event.target;
    target.checkValidity();
  };
  useEffect$1(() => {
    setAddress((prevAddress) => {
      return {
        ...defaultValues,
        ...preselection,
        ...addressBackup,
        ...prevAddress
      };
    });
  }, [defaultValues, preselection, addressBackup]);
  useEffect$1(() => {
    if (!hasUnsavedChanges.current)
      return;
    const timerId = backup(address);
    return () => {
      clearTimeout(timerId);
    };
  }, [address, backup]);
  useEffect$1(() => {
    if (!hasUnsavedChanges.current || !isFormValid(formRef))
      return;
    const controller = new AbortController();
    const signal = controller.signal;
    const timer = setTimeout(() => {
      saveAddressForm({
        signal,
        address
      });
    }, DEBOUNCE_TIME);
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [address, formRef, saveAddressForm]);
  return {
    address,
    setAddress,
    errors,
    onChange,
    onSelection,
    onBlur,
    onInvalid
  };
};
const FIELD_CODE_MAPPING = {
  countryCode: "country_id",
  region: "region",
  postCode: "postcode"
};
function usePreselectedFields({
  fields,
  preselectedFields
}) {
  const preselection = useMemo(() => {
    const hasFields = !!fields && fields.length > 0;
    const hasPreselectedFields = !!preselectedFields;
    if (!hasFields || !hasPreselectedFields)
      return null;
    return Object.keys(preselectedFields).reduce((acc, code) => {
      const formCode = FIELD_CODE_MAPPING[code];
      if (!formCode)
        return acc;
      const formField = fields.some((field) => field.code === formCode);
      if (!formField)
        return acc;
      return {
        ...acc,
        [formCode]: preselectedFields[code]
      };
    }, {});
  }, [fields, preselectedFields]);
  return {
    preselection
  };
}
const useBreakpoint = () => {
  const getBreakpoint = () => {
    if (window.innerWidth >= 1920)
      return "xxlarge";
    if (window.innerWidth >= 1366)
      return "xlarge";
    if (window.innerWidth >= 1024)
      return "large";
    if (window.innerWidth >= 768)
      return "medium";
    return "small";
  };
  const [breakpoint, setBreakpoint] = useState$1(getBreakpoint());
  useEffect$1(() => {
    let timeoutId;
    const handleResize = () => {
      if (timeoutId)
        clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setBreakpoint(getBreakpoint()), 50);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (timeoutId)
        clearTimeout(timeoutId);
    };
  }, []);
  return breakpoint;
};
const ConditionalWrapper = ({
  children,
  className
}) => {
  const breakpoint = useBreakpoint();
  if (breakpoint === "small")
    return jsx(Fragment, {
      children
    });
  return jsx("div", {
    className,
    children
  });
};
const Aside = ({
  sections
}) => {
  return jsx(ConditionalWrapper, {
    className: "checkout__aside",
    children: jsxs(Fragment, {
      children: [jsx(VComponent, {
        node: sections.orderSummary
      }), jsx(VComponent, {
        node: sections.cartSummary
      })]
    })
  });
};
const MainContent = ({
  billingAddress,
  billToShippingAddress,
  login,
  paymentMethods,
  placeOrder,
  shippingAddress,
  shippingMethods
}) => {
  return jsxs(Fragment, {
    children: [jsx(VComponent, {
      node: login
    }), shippingAddress && jsx(VComponent, {
      node: shippingAddress
    }), billToShippingAddress && jsx(VComponent, {
      node: billToShippingAddress
    }), shippingMethods && jsx(VComponent, {
      node: shippingMethods
    }), jsx(VComponent, {
      node: paymentMethods
    }), jsx(VComponent, {
      node: billingAddress
    }), jsx(VComponent, {
      node: placeOrder
    })]
  });
};
const Main = ({
  outOfStock,
  sections
}) => {
  return jsx(ConditionalWrapper, {
    className: "checkout__main",
    children: jsxs(Fragment, {
      children: [jsx(Heading, {
        level: 1,
        className: "checkout-title",
        children: jsx(Text, {
          id: "Checkout.title"
        })
      }), outOfStock && jsx(VComponent, {
        className: "checkout-outOfStock",
        node: outOfStock
      }), sections && jsx(MainContent, {
        ...sections
      })]
    })
  });
};
const Checkout = (props) => {
  const {
    banner,
    className,
    children,
    ...restProps
  } = props;
  return jsxs("div", {
    className: classes(["checkout", className]),
    ...restProps,
    children: [banner && jsx(VComponent, {
      className: "checkout__banner",
      node: banner
    }), jsx("div", {
      className: "checkout__content",
      children
    })]
  });
};
Checkout.Main = Main;
Checkout.Aside = Aside;
const Heading = ({
  className,
  children,
  level = 2
}) => {
  const Heading2 = level >= 1 && level <= 6 ? `h${level}` : "h2";
  return jsx(Heading2, {
    className,
    children
  });
};
export {
  AddressForm as A,
  Checkout as C,
  Heading as H,
  useBreakpoint as u
};
//# sourceMappingURL=CartSummaryItem__iGzWaHX3tp.js.map
