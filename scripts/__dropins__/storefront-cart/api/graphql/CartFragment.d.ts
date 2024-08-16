export declare const CART_FRAGMENT: string;
export declare const CART_ITEMS_PAGINATION_ARGUMENTS = "\n  $pageSize: Int! = 100,\n  $currentPage: Int! = 1,\n  $itemsSortInput: QuoteItemsSortInput! = {field: CREATED_AT, order: DESC}\n";
export declare const CUSTOMER_ACCOUNT_FRAGMENT = "\ncustomer {\n  addresses {\n    default_shipping\n    country_id\n    postcode\n    region {\n      region\n      region_code\n      region_id\n    }\n  }\n}";
//# sourceMappingURL=CartFragment.d.ts.map