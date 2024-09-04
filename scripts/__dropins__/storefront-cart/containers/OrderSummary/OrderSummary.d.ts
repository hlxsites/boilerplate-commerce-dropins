import { CartModel } from '../../data/models';
import { Container, SlotProps } from '@dropins/tools/types/elsie/src/lib';
import { HTMLAttributes } from 'preact/compat';

interface CheckoutRouteContext {
    cartId: string;
}
export interface OrderSummaryProps extends HTMLAttributes<HTMLDivElement> {
    routeCheckout?: (context: CheckoutRouteContext) => string;
    slots?: {
        EstimateShipping?: SlotProps;
    };
    errors: boolean;
}
export declare const OrderSummary: Container<OrderSummaryProps, CartModel | null>;
export {};
//# sourceMappingURL=OrderSummary.d.ts.map