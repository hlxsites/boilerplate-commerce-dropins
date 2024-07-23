import { FunctionComponent } from 'preact';

export interface FormInputsProps {
    className?: string;
    errors?: Record<string, string>;
    values?: Record<string, unknown>;
    fields?: any;
    isLoading?: boolean;
    onChange?: (event: Event) => void;
    onBlur?: (event: Event) => void;
}
export declare const FormInputs: FunctionComponent<FormInputsProps>;
//# sourceMappingURL=FormInputs.d.ts.map