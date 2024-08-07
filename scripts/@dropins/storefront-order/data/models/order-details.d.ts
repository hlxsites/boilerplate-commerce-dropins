import { DiscountProps, GiftMessageProps, GiftWrappingProps, MoneyProps, OrderItemProps, paymentMethodsProps, QueryType, TotalProps, UserAddressesProps } from '../../types';

export interface OrderData {
    giftWrapping: GiftWrappingProps;
    giftMessage: GiftMessageProps;
    defaultShipping: UserAddressesProps;
    defaultBulling: UserAddressesProps;
    paymentMethods: paymentMethodsProps[];
    giftReceiptIncluded: boolean;
    orderDate: string;
    shippingMethod: string;
    items: OrderItemProps[];
    total: {
        discount: DiscountProps[];
        subtotal: MoneyProps;
        totalTax: MoneyProps;
        totalShipping: MoneyProps;
        grandTotal: MoneyProps;
    };
}
export interface OrderSummary {
    orderSummary: TotalProps;
}
export interface OrderStatus {
    carrier: string;
    id: string;
    items: any;
    number: string;
    orderDate: string;
    paymentMethods: any;
    shippingMethod: string;
}
export interface OrderCustomerInformation {
    defaultShipping: UserAddressesProps;
    defaultBulling: UserAddressesProps;
}
export type TransformedData<T extends QueryType> = T extends 'orderData' ? OrderData : T extends 'orderSummary' ? OrderSummary : T extends 'orderStatus' ? OrderStatus : T extends 'orderCustomerInformation' ? OrderCustomerInformation : null;
//# sourceMappingURL=order-details.d.ts.map