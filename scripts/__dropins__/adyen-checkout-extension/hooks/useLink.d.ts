export interface useLinkProps {
    href: string;
    rel?: string;
    integrity?: string;
    crossorigin?: string;
}
export declare enum linkStatus {
    idle = "idle",
    loading = "loading",
    ready = "ready",
    error = "error"
}
export declare const useLink: (props: useLinkProps) => linkStatus;
//# sourceMappingURL=useLink.d.ts.map