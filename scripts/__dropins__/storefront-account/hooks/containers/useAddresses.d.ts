import { CustomerAddressesModel } from '../../data/models';
import { useAddressesProps } from '../../types';

export declare const useAddresses: ({ minifiedView, routeAddressesPage, onSuccess, }: useAddressesProps) => {
    submitLoading: boolean;
    isModalRendered: boolean;
    isFormRendered: boolean;
    loading: boolean;
    addNewAddress: boolean;
    addressesList: CustomerAddressesModel[];
    addressId: string;
    renderForm: () => void;
    renderModal: () => void;
    removeAddress: () => Promise<void>;
    closeForm: () => void;
    setEditingAddressId: (id: string) => void;
    closeNewAddressForm: () => void;
    redirectToAddressesRoute: () => void;
    handleOnSuccess: () => Promise<void>;
};
//# sourceMappingURL=useAddresses.d.ts.map