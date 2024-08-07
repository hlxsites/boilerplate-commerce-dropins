export type regionProps = {
    region?: string;
    region_code?: string;
    region_id?: string | number;
};
export interface CustomerAddressesModel {
    firstname?: string;
    lastname?: string;
    city?: string;
    company?: string;
    country_code?: string;
    region?: regionProps;
    telephone?: string;
    id?: string;
    vat_id?: string;
    postcode?: string;
    street?: string[] | [];
    default_shipping?: boolean;
    default_billing?: boolean;
}
//# sourceMappingURL=customer-address.d.ts.map