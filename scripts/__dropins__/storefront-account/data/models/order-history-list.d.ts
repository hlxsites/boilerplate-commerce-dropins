import { OrderProps, PageInfoProps } from '../../types';

type TransformOrderKeys = {
    billing_address: 'defaultBulling';
    shipping_address: 'defaultShipping';
    shipping_method: 'shippingMethod';
    payment_methods: 'paymentMethods';
    order_date: 'orderDate';
};
type TransformOrder<T> = {
    [K in keyof T as K extends keyof TransformOrderKeys ? TransformOrderKeys[K] : K]: T[K];
};
export type TransformItems = TransformOrder<OrderProps>;
export interface TransformOrderHistoryList {
    items: TransformItems[];
    pageInfo: PageInfoProps;
    totalCount: number;
}
export {};
//# sourceMappingURL=order-history-list.d.ts.map