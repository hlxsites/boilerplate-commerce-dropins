import { OrderDetails } from '../../data/models';
import { useOrdersListProps } from '../../types';

export declare const useOrdersList: ({ ordersInMinifiedView, minifiedView, pageSize, }: useOrdersListProps) => {
    loading: boolean;
    orderHistoryListItems: OrderDetails[];
    pageInfo: {};
    selectedId: string;
    handleSelectId: (id: string) => void;
};
//# sourceMappingURL=useOrdersList.d.ts.map