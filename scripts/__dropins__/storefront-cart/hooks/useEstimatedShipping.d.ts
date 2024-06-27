export declare const useEstimatedShipping: () => {
    loading: boolean;
    regionsLoading: boolean;
    estimatedDestinationText: string;
    countries: {
        text: string;
        value: string;
    }[];
    selectedCountry: string;
    selectedRegion: string;
    selectedZip: string;
    regions: {
        text: string;
        value: string;
    }[];
    estimatedShippingPrice: any;
    estimatedShippingMethod: any;
    shippingEstimated: boolean;
    handleEstimateShipping: (formValues: {
        shippingCountry: string;
        shippingState?: string;
        shippingZip?: string;
    }) => Promise<any>;
    handleCountrySelected: (event: Event) => void;
    resetValues: () => void;
    setPriceSummaryLoading: import('preact/hooks').Dispatch<import('preact/hooks').StateUpdater<boolean>>;
};
//# sourceMappingURL=useEstimatedShipping.d.ts.map