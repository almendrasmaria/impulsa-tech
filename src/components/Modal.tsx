import React from 'react';
import Card from './Card';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="w-full max-w-4xl mx-4 md:mx-8 lg:mx-0 my-8 md:my-16 overflow-y-auto max-h-[calc(100vh-4rem)] custom-scrollbar"
                    >
                        <Card className="relative p-6" header={title} headerClassName="text-left">
                            <button
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
                                onClick={onClose}
                                aria-label="Cerrar"
                            >
                                &times;
                            </button>
                            {children}
                        </Card>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
