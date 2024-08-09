import { HTMLAttributes } from 'preact/compat';

export interface AdyenPaymentMethodProps extends HTMLAttributes<HTMLDivElement> {
    cartId?: string;
    onPlaceOrder?: (fn: () => void) => void;
    handleServerError: (error: any) => void;
}
interface AdyenPaymentMethodTranslations {
    LoadingString: string;
    NoClientKeyString: string;
    NoPaymenthMethodsResponseString: string;
    NoCartIdString: string;
}
export declare const AdyenPaymentMethod: new (props?: AdyenPaymentMethodProps | undefined, context?: AdyenPaymentMethodTranslations | undefined) => any;
export {};
//# sourceMappingURL=AdyenPaymentMethod.d.ts.map