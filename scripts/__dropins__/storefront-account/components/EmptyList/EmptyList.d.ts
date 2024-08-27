import { FunctionComponent } from 'preact';
import { HTMLAttributes } from 'preact/compat';

export interface EmptyListProps extends HTMLAttributes<HTMLDivElement> {
    isEmpty: boolean;
    typeList: 'address' | 'orders';
}
export declare const EmptyList: FunctionComponent<EmptyListProps>;
//# sourceMappingURL=EmptyList.d.ts.map