import { AddressForm } from '../../types';

type ExtendedAddressFormProps = AddressForm & {
    addressId?: string;
};
export declare const updateCustomerAddress: (forms: ExtendedAddressFormProps) => Promise<string>;
export {};
//# sourceMappingURL=updateCustomerAddress.d.ts.map