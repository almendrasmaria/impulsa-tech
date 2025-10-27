import React from 'react';
import classNames from 'classnames';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

const Input: React.FC<InputProps> = ({ className, ...props }) => (
    <input
        className={classNames(
            'border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500',
            className
        )}
        {...props}
    />
);

export default Input;
