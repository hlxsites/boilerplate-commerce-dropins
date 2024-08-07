import { QueryType, ResponseData } from '../../types';
import { TransformedData } from '../models';

export declare const transformOrderDetails: <T extends QueryType>(queryType: QueryType, response: ResponseData<T>) => TransformedData<T>;
//# sourceMappingURL=transform-order-details.d.ts.map