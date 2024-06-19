import { Container } from '@dropins/tools/types/elsie/src/lib';
import { HTMLAttributes } from 'preact/compat';

export interface InputsDefaultValueSetProps {
    code: string;
    defaultValue: string;
}
export interface OrderConfirmationProps extends HTMLAttributes<HTMLDivElement> {
    orderRef?: string;
    routeHome?: () => string;
    routeSupport?: () => string;
    onSignUpClick?: (inputsDefaultValueSetProps: InputsDefaultValueSetProps[]) => void;
}
export declare const OrderConfirmation: Container<OrderConfirmationProps>;
//# sourceMappingURL=OrderConfirmation.d.ts.map