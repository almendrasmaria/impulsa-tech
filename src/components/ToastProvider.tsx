import React, { createContext, useContext, useState, ReactNode } from 'react';

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

    const removeToast = (id: number) => {
        setToasts(prev => prev.filter(t => t.id !== id));
    };

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
            <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-2 items-end">
                {toasts.map(toast => (
                    <div
                        key={toast.id}
                        className={`px-4 py-2 rounded shadow font-medium transition-all bg-white relative flex items-center min-w-[220px]`}
                    >
                        <span className="text-gray-700 flex-1 pr-4">{toast.message}</span>
                        <button
                            aria-label="Cerrar"
                            onClick={() => removeToast(toast.id)}
                            className="ml-2 text-gray-400 hover:text-gray-700 text-lg font-bold focus:outline-none"
                            style={{ lineHeight: 1 }}
                        >
                            ×
                        </button>
                        <div
                            className={`absolute left-0 bottom-0 h-1 rounded-b ${toast.type === 'success' ? 'bg-green-600' : toast.type === 'error' ? 'bg-red-600' : 'bg-blue-600'}`}
                            style={{ width: '100%', animation: 'toast-progress 3s linear forwards' }}
                        />
                    </div>
                ))}
                <style>{`
                    @keyframes toast-progress {
                        from { width: 100%; }
                        to { width: 0%; }
                    }
                `}</style>
            </div>
        </ToastContext.Provider>
    );
};
