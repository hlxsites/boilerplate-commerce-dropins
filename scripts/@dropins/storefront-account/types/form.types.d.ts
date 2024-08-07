import { AttributesFormItemsProps, Country, FieldEnumList } from '../data/models';

export interface FieldsProps extends Omit<AttributesFormItemsProps, 'options'> {
    className: string;
    fieldType: FieldEnumList;
    id: string;
    options: Country[];
}
export interface FormProps {
    fieldsConfig?: FieldsProps[] | [];
    name?: string;
    className?: string;
    children?: any;
    loading?: boolean;
    onSubmit?: (event: SubmitEvent, isValid: boolean) => Promise<void | null | undefined>;
    handleSetCountryCode: (value: string) => void;
}
export interface useFormProps extends Omit<FormProps, 'children' | 'className' | 'name'> {
}
export interface FormInputsProps {
    className?: string;
    errors?: Record<string, string>;
    values?: Record<string, string | number | boolean>;
    fields?: any;
    loading?: boolean;
    onChange?: (event: Event) => void;
    onBlur?: (event: Event) => void;
}
//# sourceMappingURL=form.types.d.ts.map