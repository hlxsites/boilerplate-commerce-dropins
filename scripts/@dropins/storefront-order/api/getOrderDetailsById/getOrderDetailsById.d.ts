import { QueryType } from '../../types';
import { TransformedData } from '../../data/models';

export declare const getOrderDetailsById: <T extends QueryType>(orderId?: string, queryType?: T | undefined) => Promise<TransformedData<T>>;
//# sourceMappingURL=getOrderDetailsById.d.ts.map