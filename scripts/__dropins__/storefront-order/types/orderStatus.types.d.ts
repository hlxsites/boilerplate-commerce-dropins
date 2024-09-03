import { HTMLAttributes } from 'preact/compat';
import { OrderDataModel } from '../data/models';
import { SlotProps } from '@dropins/tools/types/elsie/src/lib';

export interface OrderStatusProps extends HTMLAttributes<HTMLDivElement> {
    orderData?: OrderDataModel;
    statusTitle?: string;
    status: 1 | 2 | 3 | 4 | 5 | 6;
    slots: {
        OrderCanceledActions: SlotProps;
        OrderOnHoldActions: SlotProps;
        OrderCompletedActions: SlotProps;
        OrderReceivedActions: SlotProps;
        OrderShippedActions: SlotProps;
    };
}
export interface OrderStatusContentProps extends Omit<OrderStatusProps, 'statusTitle' | 'orderData' | 'status'> {
    title?: string;
    status?: number;
}
export declare enum StatusEnumProps {
    PENDING = "Pending",
    SHIPPING = "Shiping",
    COMPLETE = "Complete",
    PROCESSING = "Processing",
    HOLD = "On Hold",
    CANCELED = "Canceled",
    SUSPECTED_FRAUD = "Suspected fraud",
    PAYMENT_REVIEW = "Payment Review"
}
export interface UseOrderStatusProps {
    orderData?: OrderDataModel;
}
//# sourceMappingURL=orderStatus.types.d.ts.map