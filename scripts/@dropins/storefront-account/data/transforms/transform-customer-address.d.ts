import { CustomerAddressesModel } from '../models';
import { AddressResponse, UserAddressesProps } from '../../types';

export declare const expandArraysInObject: (inputObject: UserAddressesProps) => Record<string, unknown>;
export declare const transformCustomerAddress: (response: AddressResponse) => CustomerAddressesModel[] | [
];
//# sourceMappingURL=transform-customer-address.d.ts.map