import { FunctionComponent } from 'preact';
import { HTMLAttributes } from 'preact/compat';

export interface AddressActionsProps extends HTMLAttributes<HTMLButtonElement> {
    minifiedView: boolean;
    addNewAddress: boolean;
    viewAllAddressesText?: string;
    routeAddressesPage: () => void;
}
export declare const AddressActions: FunctionComponent<AddressActionsProps>;
//# sourceMappingURL=AddressActions.d.ts.map