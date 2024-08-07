import { AttributesFormModel } from '../data/models';

export declare const getFieldsConfig: (itemValues: Record<string, any>, attributesFormList: AttributesFormModel[]) => {
    code: string;
    name: string;
    id: string;
    defaultValue: string | number | boolean;
    entity_type: string;
    className: string;
    fieldType: import('../data/models').FieldEnumList;
    required: boolean;
    is_unique: boolean;
    label: string;
    orderNumber: number;
    options: {
        is_default: boolean;
        label: string;
        value: string;
    }[];
    is_hidden?: boolean | undefined;
}[];
//# sourceMappingURL=getFieldsConfig.d.ts.map