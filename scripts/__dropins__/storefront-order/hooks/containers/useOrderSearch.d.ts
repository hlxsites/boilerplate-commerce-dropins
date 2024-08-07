import { FieldEnumList, inLineAlertProps } from '../../types';

export declare const useOrderSearch: () => {
    onSubmit: (event: Event, valid: boolean) => Promise<null | undefined>;
    inLineAlert: inLineAlertProps;
    loading: boolean;
    normalizeFieldsConfig: {
        entity_type: string;
        is_unique: boolean;
        label: string;
        options: never[];
        defaultValue: string;
        fieldType: FieldEnumList;
        className: string;
        required: boolean;
        orderNumber: number;
        name: string;
        id: string;
        code: string;
    }[];
};
//# sourceMappingURL=useOrderSearch.d.ts.map