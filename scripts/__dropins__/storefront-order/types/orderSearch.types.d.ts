import { FieldsProps } from '.';

type errorInformationProps = {
    error: string;
    formValues: {
        email: string;
        postcode: string;
        number: string;
    };
};
export interface inLineAlertProps {
    text: string;
    type: 'success' | 'warning' | 'error';
}
export interface OrderSearchProps {
    className?: string;
    onError?: (errorInformation: errorInformationProps) => void;
}
export interface useOrderSearchProps {
    onError?: (errorInformation: errorInformationProps) => boolean | Promise<boolean> | undefined;
}
export interface OrderSearchFormProps extends Omit<OrderSearchProps, 'className' | 'onError'> {
    onSubmit?: (event: SubmitEvent, isValid: boolean) => Promise<void | null | undefined>;
    loading: boolean;
    inLineAlert: inLineAlertProps;
    fieldsConfig: FieldsProps[];
}
export interface useOrderSearch extends Omit<OrderSearchProps, 'className'> {
}
export {};
//# sourceMappingURL=orderSearch.types.d.ts.map