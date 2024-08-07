import { DiscountProps, GuestOrderProps, MoneyProps, paymentMethodsProps, UserAddressesProps } from '../../types';

export interface GuestOrderModel extends Omit<GuestOrderProps, 'shipping_address' | 'billing_address' | 'payment_methods' | 'gift_receipt_included' | 'order_date' | 'printed_card_included' | 'shipping_method' | 'total'> {
    defaultShipping: UserAddressesProps;
    defaultBulling: UserAddressesProps;
    paymentMethods: paymentMethodsProps[];
    giftReceiptIncluded: boolean;
    orderDate: string;
    printedCardIncluded: boolean;
    shippingMethod: string;
    total: {
        discounts: DiscountProps[] | null;
        subtotal: MoneyProps | null;
        totalTax: MoneyProps | null;
        totalShipping: MoneyProps | null;
        grandTotal: MoneyProps | null;
    };
    token: string;
}
export type GuestOrderModelResponse = GuestOrderModel | null;
//# sourceMappingURL=guest-order.d.ts.map