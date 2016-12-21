import { ToastConfig } from './toast-config.class';
export interface Toast {
    title: string;
    body: string;
    timeout: number;
    type: string;
}
export declare class ToastMan {
    toasts: Toast[];
    private config;
    constructor(config: ToastConfig);
    success(title: any, body: any, time?: any): void;
    error(title: any, body: any, time?: any): void;
    close(item: Toast): void;
    show(title: any, body: any, timealive?: any, type?: string): void;
}
