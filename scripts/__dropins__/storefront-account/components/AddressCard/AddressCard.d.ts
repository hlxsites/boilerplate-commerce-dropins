import { FunctionComponent } from 'preact';
import { UserAddressesProps } from '../../types';

export interface AddressCardProps {
    addressData?: UserAddressesProps;
    loading?: boolean;
    setAddressId?: (id: string) => void;
    renderModal?: () => void | undefined;
    renderForm?: () => void | undefined;
}
export declare const AddressCard: FunctionComponent<AddressCardProps>;
//# sourceMappingURL=AddressCard.d.ts.map