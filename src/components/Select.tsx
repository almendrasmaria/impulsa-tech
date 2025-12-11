import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa'; 
import classNames from 'classnames';

interface SelectProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    options: { value: string; label: string }[];
    disabled?: boolean;
}

const Select: React.FC<SelectProps> = ({ 
    className, 
    value, 
    onChange, 
    placeholder = 'Seleccionar...', 
    options,
    disabled = false
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (optionValue: string) => {
        onChange?.(optionValue);
        setIsOpen(false);
    };

    const selectedOption = options.find(opt => opt.value === value);

    return (
        <div ref={selectRef} className={classNames('relative', className)}>
            <button
                type="button"
                onClick={() => !disabled && setIsOpen(!isOpen)}
                disabled={disabled}
                className={classNames(
                    'border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#003B80]/20 focus:border-[#003B80] flex items-center justify-between transition-all',
                    !value ? 'text-gray-400' : 'text-gray-700',
                    disabled && 'opacity-50 cursor-not-allowed'
                )}
            >
                <span>{selectedOption ? selectedOption.label : placeholder}</span>
                <FaChevronDown className={classNames(
                    'w-4 h-4 text-gray-500 transition-transform',
                    isOpen && 'rotate-180'
                )} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-50 max-h-60 overflow-y-auto custom-scrollbar"
                    >
                        <div className="py-1">
                            {options.map((option) => (
                                <button
                                    key={option.value}
                                    type="button"
                                    onClick={() => handleSelect(option.value)}
                                    className={classNames(
                                        'w-full text-left px-4 py-3 text-sm transition-colors',
                                        value === option.value
                                            ? 'bg-[#E8F0FF] text-[#003B80] font-medium'
                                            : 'text-gray-700 hover:bg-[#E8F0FF] hover:text-[#003B80]'
                                    )}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Select;