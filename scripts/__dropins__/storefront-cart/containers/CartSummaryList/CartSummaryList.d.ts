import { HTMLAttributes } from 'preact/compat';
import { Container, SlotProps } from '@dropins/tools/types/elsie/src/lib';
import { CartModel } from '../../data/models/cart-model';

export interface CartSummaryListProps extends HTMLAttributes<HTMLDivElement> {
    hideHeading?: boolean;
    routeProduct?: (item: CartModel['items'][0]) => string;
    routeEmptyCartCTA?: () => string;
    onItemUpdate?: ({ uid, quantity }: {
        uid: string;
        quantity: number;
    }) => void;
    onItemRemove?: ({ uid }: {
        uid: string;
    }) => void;
    maxItems?: number;
    attributesToHide?: SwitchableAttributes[];
    slots?: {
        Heading?: SlotProps;
        EmptyCart?: SlotProps;
    };
    enableRemoveItem?: boolean;
    enableUpdateItemQuantity?: boolean;
    onItemsErrorsChange?: (errors: Map<string, string>) => void;
}
export type SwitchableAttributes = 'name' | 'image' | 'configurations' | 'warning' | 'alert';
export declare const CartSummaryList: Container<CartSummaryListProps, CartModel | null>;
//# sourceMappingURL=CartSummaryList.d.ts.map