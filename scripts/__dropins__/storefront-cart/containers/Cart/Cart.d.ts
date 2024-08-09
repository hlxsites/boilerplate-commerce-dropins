import { HTMLAttributes } from 'preact/compat';
import { Container, SlotProps } from '@dropins/tools/types/elsie/src/lib';
import { CartModel } from '../../data/models';

export interface CartProps extends HTMLAttributes<HTMLDivElement> {
    routeEmptyCartCTA?: () => string;
    routeProduct?: (item: CartModel['items'][0]) => string;
    slots?: {
        OrderSummary?: SlotProps;
        ProductList?: SlotProps;
    };
}
export declare const Cart: Container<CartProps, CartModel | null>;
//# sourceMappingURL=Cart.d.ts.map