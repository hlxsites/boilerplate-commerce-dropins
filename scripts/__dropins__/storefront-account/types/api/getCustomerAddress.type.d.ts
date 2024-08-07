type RegionProps = {
    region: string;
    region_code: string;
    region_id: string;
};
export interface UserAddressesProps {
    firstname?: string;
    lastname?: string;
    city?: string;
    company?: string;
    country_code?: string;
    region?: RegionProps;
    telephone?: string;
    id?: string;
    vat_id?: string;
    postcode?: string;
    street?: string[] | [];
    default_shipping?: boolean;
    default_billing?: boolean;
    custom_attributesV2?: {
        code: string;
        value: string;
    }[];
}
export interface AddressResponse {
    data: {
        customer?: {
            addresses: UserAddressesProps[];
        };
    };
    errors?: {
        message: string;
    }[];
}
export {};
//# sourceMappingURL=getCustomerAddress.type.d.ts.map