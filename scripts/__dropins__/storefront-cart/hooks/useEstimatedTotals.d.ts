export declare const useEstimatedTotals: () => {
    handleEstimateTotals: (formValues: {
        shippingCountry: string;
        shippingState?: string;
        shippingStateId?: number;
        shippingZip?: string;
    }, shippingMethods?: {
        carrier_code: string;
        method_code: string;
    }) => void;
    estimatedTotals: any;
    setEstimatedTotals: import('preact/hooks').Dispatch<any>;
    loading: boolean;
};
//# sourceMappingURL=useEstimatedTotals.d.ts.map