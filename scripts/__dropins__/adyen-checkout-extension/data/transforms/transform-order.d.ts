import { Order as OrderModel } from '../models/order';
import { Set_Payment_Method_And_Place_OrderMutation } from '../../__generated__/types';

type Order = NonNullable<NonNullable<Set_Payment_Method_And_Place_OrderMutation['placeOrder']>['orderV2']>;
export declare const transformOrder: (order: Order) => OrderModel;
export {};
//# sourceMappingURL=transform-order.d.ts.map