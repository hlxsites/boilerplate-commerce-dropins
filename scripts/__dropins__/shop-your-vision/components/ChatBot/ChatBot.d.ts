import { FunctionComponent, VNode } from 'preact';
import { HTMLAttributes } from 'preact/compat';

export interface ChatBotProps extends HTMLAttributes<HTMLDivElement> {
    onDismiss?: () => void;
    chatContent?: VNode;
    heading?: VNode | null;
}
export declare const ChatBot: FunctionComponent<ChatBotProps>;
//# sourceMappingURL=ChatBot.d.ts.map