import { createContext, useContext, useState, ReactNode } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface Toast {
    id: number;
    message: string;
    type?: 'success' | 'error' | 'info';
}

interface ToastContextType {
    showToast: (message: string, type?: Toast['type']) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
    const ctx = useContext(ToastContext);
    if (!ctx) throw new Error('useToast must be used within ToastProvider');
    return ctx;
};

export const ToastProvider = ({ children }: { children: ReactNode }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);


    const showToast = (message: string, type: Toast['type'] = 'info') => {
        const id = Date.now();
        setToasts(prev => [...prev, { id, message, type }]);
        setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== id));
        }, 3000);
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-2 items-center">
                {toasts.map(toast => (
                    <div
                        key={toast.id}
                        className="bg-[#003B80] text-white px-4 py-2 rounded-full shadow-2xl flex items-center space-x-2 border border-blue-400 animate-bounce-in"
                    >
                        <CheckCircle2 className="w-4 h-4 text-blue-200" />
                        <span className="font-semibold text-sm">{toast.message}</span>
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
};
