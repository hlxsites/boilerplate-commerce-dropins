import { FieldsProps } from '.';

export interface inLineAlertProps {
    text: string;
    type: 'success' | 'warning' | 'error';
}
export interface OrderSearchProps {
    className?: string;
}
export interface OrderSearchFormProps extends Omit<OrderSearchProps, 'className'> {
    onSubmit?: (event: SubmitEvent, isValid: boolean) => Promise<void | null | undefined>;
    loading: boolean;
    inLineAlert: inLineAlertProps;
    fieldsConfig: FieldsProps[];
}
export interface useOrderSearch extends Omit<OrderSearchProps, 'className'> {
}
//# sourceMappingURL=orderSearch.types.d.ts.map