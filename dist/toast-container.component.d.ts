import { ToastMan, Toast } from './toast-man.service';
export declare class ToastContainer {
    private toastMan;
    constructor(toastMan: ToastMan);
    readonly toasts: Toast[];
    close(toast: any): void;
}
