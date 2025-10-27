import React from 'react';
import classNames from 'classnames';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    className?: string;
    children: React.ReactNode;
}

const Select: React.FC<SelectProps> = ({ className, children, ...props }) => (
    <select
        className={classNames(
            'border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500',
            className
        )}
        {...props}
    >
        {children}
    </select>
);

export default Select;
