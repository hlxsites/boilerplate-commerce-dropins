export type QueryType = 'orderData' | 'orderSummary' | 'orderStatus' | 'orderCustomerInformation';
export interface UserAddressesProps {
    city?: string;
    company?: string;
    country_code?: string;
    fax?: string;
    firstname?: string;
    lastname?: string;
    middlename?: string;
    postcode?: string;
    prefix?: string;
    region?: string;
    region_id?: number;
    street?: string[];
    suffix?: string;
    telephone?: string;
    vat_id?: string;
}
interface SmallImageProps {
    url?: string;
}
interface ProductProps {
    small_image?: SmallImageProps;
}
export interface OrderItemProps {
    status?: string;
    product_name?: string;
    id?: string;
    product?: ProductProps;
}
export interface MoneyProps {
    value?: number;
    currency?: string;
}
interface GrandTotalProps extends MoneyProps {
}
interface SubtotalProps extends MoneyProps {
}
interface TotalTaxProps extends MoneyProps {
}
interface TaxAmountProps extends MoneyProps {
}
interface TotalShippingProps extends MoneyProps {
}
interface TaxDetailProps {
    amount?: TaxAmountProps;
    rate?: number;
    title?: string;
}
export interface DiscountProps {
    amount?: MoneyProps;
    label?: string;
}
export interface TotalProps {
    grand_total?: GrandTotalProps;
    subtotal?: SubtotalProps;
    taxes?: TaxDetailProps[];
    total_tax?: TotalTaxProps;
    total_shipping?: TotalShippingProps;
    discounts?: DiscountProps[];
}
interface InvoiceItemInterface {
}
interface InvoiceProps {
    id?: string;
    number?: string;
    total?: TotalProps;
    items?: InvoiceItemInterface[];
    comments?: {
        message: string;
        timestamp: string;
    }[];
}
export interface GiftMessageProps {
    gift_message: {
        form: string;
        message: string;
        to: string;
    };
}
export interface GiftWrappingProps {
    gift_wrapping: {
        design: string;
        price: MoneyProps;
        uid: string;
        image: {
            url: string;
            label: string;
        };
    };
}
interface OrderItemInterface {
    discounts: DiscountProps[];
    eligible_for_return: boolean;
    entered_options: {
        label: string;
        value: string;
    }[];
    gift_message: GiftMessageProps;
    gift_wrapping: GiftWrappingProps;
    id: string;
    product: ProductProps;
    product_name: string;
    product_sale_price: MoneyProps;
    product_sku: string;
    product_type: string;
    product_url_key: string;
    quantity_canceled: number;
    quantity_invoiced: number;
    quantity_ordered: number;
    quantity_refunded: number;
    quantity_returned: number;
    quantity_shipped: number;
    selected_options: {
        label: string;
        value: string;
    }[];
    status: string;
}
export interface paymentMethodsProps {
    name: string;
    type: string;
    additional_data: {
        name: string;
        value: string;
    }[];
}
export interface OrderProps {
    shipping_method: string;
    status: string;
    token: string;
    carrier: string;
    email: string;
    gift_receipt_included: boolean;
    id: string;
    number: string;
    order_date: string;
    printed_card_included: boolean;
    applied_coupons: {
        code: string;
    }[];
    shipments: {
        id: string;
        number: string;
        tracking: {
            carrier: string;
            number: string;
            title: string;
        }[];
        comments: {
            message: string;
            timestamp: string;
        }[];
    }[];
    returns: {
        pageSize: number;
        currentPage: number;
    };
    items_eligible_for_return: OrderItemInterface[];
    gift_wrapping: GiftWrappingProps;
    gift_message: GiftMessageProps;
    payment_methods: paymentMethodsProps[];
    invoices: InvoiceProps[];
    items: OrderItemProps[];
    shipping_address: UserAddressesProps;
    billing_address: UserAddressesProps;
    total?: TotalProps;
}
export interface ErrorProps {
    errors?: {
        message?: string;
    }[];
}
export interface OrdersResponse extends ErrorProps {
    data?: {
        customer?: {
            orders?: {
                items?: OrderProps[];
            };
        };
    };
}
export interface OrderByNumberResponse extends OrdersResponse {
}
export type ResponseData<T extends QueryType> = T extends 'orderData' | 'orderSummary' | 'orderStatus' ? OrderByNumberResponse : never;
export {};
//# sourceMappingURL=getOrderDetails.types.d.ts.map