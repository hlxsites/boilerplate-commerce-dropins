import { PreselectedShippingMethod } from '../Checkout';
import { HTMLAttributes } from 'preact/compat';

export interface ShippingMethodsProps extends HTMLAttributes<HTMLDivElement> {
    onCheckoutDataUpdate?: () => Promise<void>;
    preSelectedMethod?: PreselectedShippingMethod;
}
export declare const ShippingMethods: {
    ({ hideOnEmptyCart, hideOnVirtualCart, ...props }: import('../../hocs/withConditionalRendering').ConditionalProps & ShippingMethodsProps): import("preact/compat").JSX.Element | null;
    displayName: string;
};
//# sourceMappingURL=ShippingMethods.d.ts.map