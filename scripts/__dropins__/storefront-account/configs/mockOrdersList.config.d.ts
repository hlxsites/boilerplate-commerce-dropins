export declare const mockOrdersListResponse: {
    customer: {
        orders: {
            page_info: {
                page_size: number;
                total_pages: number;
                current_page: number;
            };
            total_count: number;
            items: {
                email: string;
                shipping_method: string;
                shipping_address: {
                    firstname: string;
                    lastname: string;
                    postcode: string;
                    street: string[];
                    region: string;
                    city: string;
                    country_code: string;
                    region_id: string;
                };
                billing_address: {
                    firstname: string;
                    lastname: string;
                    postcode: string;
                    street: string[];
                    region: string;
                    city: string;
                    country_code: string;
                    region_id: string;
                };
                payment_methods: {
                    name: string;
                }[];
                number: string;
                id: string;
                order_date: string;
                carrier: string;
                status: string;
                items: {
                    status: string;
                    product_name: string;
                    id: string;
                    product: {
                        small_image: {
                            url: string;
                        };
                    };
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
//# sourceMappingURL=mockOrdersList.config.d.ts.map