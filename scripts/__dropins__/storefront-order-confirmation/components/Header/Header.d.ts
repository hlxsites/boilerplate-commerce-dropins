import { FunctionComponent } from 'preact';
import { InputsDefaultValueSetProps } from '../../containers';

export interface HeaderProps {
    isLoading: boolean;
    customerName?: string;
    customerLastName?: string;
    orderNumber?: string;
    orderStatus?: string;
    orderEmail?: string;
    onSignUpClick?: (inputsDefaultValueSetProps: InputsDefaultValueSetProps[]) => void;
}
export declare const Header: FunctionComponent<HeaderProps>;
//# sourceMappingURL=Header.d.ts.map