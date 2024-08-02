import { FunctionComponent, VNode } from 'preact';
import { HTMLAttributes } from 'preact/compat';

export interface CartProps extends HTMLAttributes<HTMLDivElement> {
    emptyCart: VNode;
    heading?: VNode;
    products?: VNode;
    orderSummary?: VNode<HTMLAttributes<HTMLElement>>;
    outOfStockMessage?: VNode;
}
export declare const Cart: FunctionComponent<CartProps>;
//# sourceMappingURL=Cart.d.ts.map