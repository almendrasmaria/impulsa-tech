import React from 'react';
import classNames from 'classnames';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    className?: string;
    children: React.ReactNode;
}

const Select: React.FC<SelectProps> = ({ className, children, value, ...props }) => (
    <select
        className={classNames(
            'border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0058A3]',
            !value ? 'text-gray-400' : 'text-gray-700',
            className
        )}
        value={value}
        {...props}
    >
        {children}
    </select>
);

export default Select;
