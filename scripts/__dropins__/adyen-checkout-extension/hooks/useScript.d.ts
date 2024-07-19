/**
 * Dynamically load an external script and know when its loaded
 * @see https://usehooks.com/useScript/.
 */
export interface useScriptProps {
    src: string;
    crossorigin?: string;
    integrity?: string;
}
export declare enum scriptStatus {
    idle = "idle",
    loading = "loading",
    ready = "ready",
    error = "error"
}
export declare const useScript: (props: useScriptProps) => scriptStatus;
//# sourceMappingURL=useScript.d.ts.map