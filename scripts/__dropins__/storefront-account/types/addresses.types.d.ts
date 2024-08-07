import { FieldsProps } from './form.types';

export interface DefaultCheckBox extends Omit<FieldsProps, 'options'> {
}
export interface AddressesProps {
    minifiedView: boolean;
    className?: string;
    newAddressesFormTitle?: string;
    editAddressesFormTitle?: string;
    viewAllAddressesText?: string;
    inputsDefaultValueSet?: any;
    addressesFormTitle?: string;
    showShippingCheckBox?: boolean;
    showBillingCheckBox?: boolean;
    shippingCheckBoxValue?: boolean;
    billingCheckBoxValue?: boolean;
    onSuccess?: () => void;
    onError?: (error: string) => void;
    routeAddressesPage: () => string;
}
export interface useAddressesProps extends Omit<AddressesProps, 'className' | 'inputsDefaultValueSet' | 'addressesFormTitle' | 'shippingCheckBoxValue' | 'billingCheckBoxValue'> {
}
//# sourceMappingURL=addresses.types.d.ts.map