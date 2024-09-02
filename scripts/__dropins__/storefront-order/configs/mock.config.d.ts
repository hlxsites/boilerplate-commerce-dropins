export declare const mockOrder: {
    data: {
        guestOrder: {
            gift_receipt_included: boolean;
            carrier: string;
            email: string;
            id: string;
            number: string;
            order_date: string;
            printed_card_included: boolean;
            shipping_method: string;
            status: string;
            token: string;
            payment_methods: {
                name: string;
                type: string;
            }[];
            total: {
                subtotal: {
                    currency: string;
                    value: number;
                };
                total_tax: {
                    currency: string;
                    value: number;
                };
                total_shipping: {
                    currency: string;
                    value: number;
                };
                grand_total: {
                    currency: string;
                    value: number;
                };
            };
            billing_address: {
                firstname: string;
                middlename: null;
                lastname: string;
                street: string[];
                city: string;
                postcode: string;
                telephone: string;
                country_code: string;
                region: string;
                region_id: string;
                company: string;
            };
            shipping_address: {
                firstname: string;
                middlename: null;
                lastname: string;
                street: string[];
                city: string;
                postcode: string;
                telephone: string;
                country_code: string;
                region: string;
                region_id: string;
                company: string;
            };
            items: {
                __typename: string;
                id: string;
                quantity_ordered: number;
                product_sale_price: {
                    value: number;
                    currency: string;
                };
                product: {
                    name: string;
                    sku: string;
                    thumbnail: {
                        label: string;
                        url: string;
                    };
                    price_range: {
                        maximum_price: {
                            regular_price: {
                                currency: string;
                                value: number;
                            };
                        };
                    };
                };
                selected_options: {
                    label: string;
                    value: string;
                }[];
            }[];
        };
    };
};
export declare const mockOrderDetailsResponse: {
    customer: {
        addresses: {
            firstname: string;
            lastname: string;
            city: string;
            company: string;
            country_code: string;
            region: {
                region: string;
                region_code: string;
                region_id: number;
            };
            custom_attributesV2: never[];
            telephone: string;
            id: number;
            vat_id: string;
            postcode: string;
            street: string[];
            default_shipping: boolean;
            default_billing: boolean;
        }[];
        orders: {
            page_info: {
                page_size: number;
                total_pages: number;
                current_page: number;
            };
            total_count: number;
            items: {
                shipping_method: string;
                payment_methods: {
                    name: string;
                }[];
                number: string;
                id: string;
                order_date: string;
                carrier: string;
                items: {
                    status: string;
                    product_name: string;
                    id: string;
                }[];
                total: {
                    grand_total: {
                        value: number;
                        currency: string;
                    };
                    subtotal: {
                        currency: string;
                        value: number;
                    };
                    taxes: never[];
                    total_tax: {
                        currency: string;
                        value: number;
                    };
                    total_shipping: {
                        currency: string;
                        value: number;
                    };
                    discounts: never[];
                };
            }[];
        };
    };
};
//# sourceMappingURL=mock.config.d.ts.map