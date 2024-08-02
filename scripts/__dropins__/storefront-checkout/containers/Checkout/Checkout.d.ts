import { PaymentMethodSlotContext } from '../PaymentMethods';
import { SlotProps } from '@dropins/tools/types/elsie/src/lib';
import { HTMLAttributes } from 'preact/compat';

export type PreselectedAddressFields = {
    countryCode?: string;
    region?: string;
    postCode?: string;
};
export type PreselectedShippingMethod = {
    carrierCode: string;
    methodCode: string;
};
export type PreselectedCartData = {
    address?: PreselectedAddressFields;
    shippingMethod?: PreselectedShippingMethod;
};
export interface CheckoutProps extends HTMLAttributes<HTMLDivElement> {
    routeHome?: () => string;
    routeCart?: () => string;
    slots?: {
        BillingForm?: SlotProps;
        BillToShipping?: SlotProps;
        Login?: SlotProps;
        PaymentMethods?: SlotProps<PaymentMethodSlotContext>;
        PlaceOrder?: SlotProps;
        ShippingForm?: SlotProps;
        ShippingMethods?: SlotProps;
        OrderSummary?: SlotProps;
    };
    preselectedCartData?: PreselectedCartData;
    onSignInClick?: () => void;
    onSignOutClick?: () => void;
}
export declare const Checkout: (props: CheckoutProps) => import("preact/compat").JSX.Element | null;
//# sourceMappingURL=Checkout.d.ts.map