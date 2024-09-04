import { CartModel } from '../../data/models';
import { Container, SlotProps } from '@dropins/tools/types/elsie/src/lib';
import { HTMLAttributes } from 'preact/compat';

export interface MiniCartProps extends HTMLAttributes<HTMLDivElement> {
    routeProduct?: (item: CartModel['items'][0]) => string;
    routeCart?: () => string;
    routeCheckout?: () => string;
    routeEmptyCartCTA?: () => string;
    slots?: {
        ProductList?: SlotProps;
    };
}
export declare const MiniCart: Container<MiniCartProps, CartModel | null>;
//# sourceMappingURL=MiniCart.d.ts.map