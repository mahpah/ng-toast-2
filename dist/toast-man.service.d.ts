export interface Toast {
    title: string;
    body: string;
    timeout: number;
    type: string;
}
export declare class ToastMan {
    toasts: Toast[];
    success(title: any, body: any, time?: number): void;
    error(title: any, body: any, time?: number): void;
    close(item: Toast): void;
    show(title: any, body: any, timealive: any, type?: string): void;
}
