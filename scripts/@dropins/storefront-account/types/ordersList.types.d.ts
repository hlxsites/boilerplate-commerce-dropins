import { SlotProps } from '@dropins/tools/types/elsie/src/lib';
import { HTMLAttributes } from 'preact/compat';
import { TransformItems } from '../data/models';

export interface OrdersListActionContext {
    orderHistoryListItem: TransformItems;
    handleSelectId: (id: string) => void;
}
export interface OrdersListCardContext {
    orderHistoryListItem: TransformItems;
}
export interface OrdersListProps extends HTMLAttributes<HTMLDivElement> {
    minifiedView?: boolean;
    withThumbnails?: boolean;
    slots?: {
        OrdersListAction?: SlotProps<OrdersListActionContext>;
        OrdersListCard?: SlotProps<OrdersListCardContext>;
    };
    routeOrdersList?: () => string;
    withFilter?: boolean;
    redirectButtonText?: string;
    ordersInMinifiedView?: 1 | 2 | 3;
    pageSize: number;
}
export interface OrdersListCardProps extends HTMLAttributes<HTMLDivElement> {
    item: TransformItems;
    withThumbnails: boolean;
    slots?: {
        OrdersListCard?: SlotProps<OrdersListCardContext>;
    };
}
export interface OrdersListActionProps {
    minifiedView?: boolean;
    routeOrdersList?: () => string;
    onSelectId?: (id: string) => void;
    selectedId?: string;
    redirectButtonText?: string;
}
export interface useOrdersListProps {
    minifiedView?: boolean;
    pageSize: number;
    ordersInMinifiedView: number;
}
//# sourceMappingURL=ordersList.types.d.ts.map