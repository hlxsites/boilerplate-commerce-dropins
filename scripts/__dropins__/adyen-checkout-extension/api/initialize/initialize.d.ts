import { Initializer } from '@dropins/tools/types/elsie/src/lib';

export declare enum EnvironmentType {
    test = "test",
    live = "live",
    europe = "live",
    australia = "live-au",
    unitedStates = "live-us",
    asiaPacificSouthEast = "live-apse"
}
type ConfigProps = {
    environment: EnvironmentType;
};
export declare const initialize: Initializer<ConfigProps>;
export declare const config: import('@dropins/tools/types/elsie/src/lib').Config<ConfigProps>;
export {};
//# sourceMappingURL=initialize.d.ts.map