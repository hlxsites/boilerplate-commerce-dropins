import { useOrdersListProps } from '../../types';

export declare const useOrdersList: ({ ordersInMinifiedView, minifiedView, pageSize, }: useOrdersListProps) => {
    loading: boolean;
    orderHistoryListItems: {
        email: string;
        shippingMethod: string;
        defaultShipping: import('../../types').AddressForm;
        defaultBulling: import('../../types').AddressForm;
        paymentMethods: import('../../types').PaymentMethodProps[];
        number: string;
        string: string;
        orderDate: string;
        carrier: string;
        items: import('../../types').OrderItemProps[];
        total: import('../../types').TotalProps;
        status: string;
        id: string;
    }[];
    pageInfo: {};
    selectedId: string;
    handleSelectId: (id: string) => void;
};
//# sourceMappingURL=useOrdersList.d.ts.map