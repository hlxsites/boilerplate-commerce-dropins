import { HTMLAttributes } from 'preact/compat';
import { Container, SlotProps } from '@dropins/tools/types/elsie/src/lib';

export interface ChatBotProps extends HTMLAttributes<HTMLDivElement> {
    slots?: {
        ChatBox?: SlotProps;
    };
    hideDismissButton?: boolean;
    handleDismiss?: () => void;
}
export declare const ChatBot: Container<ChatBotProps>;
//# sourceMappingURL=ChatBot.d.ts.map