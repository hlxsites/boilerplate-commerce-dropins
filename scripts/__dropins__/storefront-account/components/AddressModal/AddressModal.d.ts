import { FunctionComponent } from 'preact';
import { CustomerAddressesModel } from '../../data/models';

export interface AddressModalProps {
    addressData?: CustomerAddressesModel;
    open: boolean;
    submitLoading: boolean;
    onRemoveAddress: () => void;
    closeModal: () => void;
}
export declare const AddressModal: FunctionComponent<AddressModalProps>;
//# sourceMappingURL=AddressModal.d.ts.map