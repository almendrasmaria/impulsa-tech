import React from 'react';
import classNames from 'classnames';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
}

const Textarea: React.FC<TextareaProps> = ({ className, ...props }) => (
    <textarea
        className={classNames(
            'border border-gray-300 rounded px-3 py-2 w-full min-h-[80px] focus:outline-none focus:ring-2 focus:ring-blue-500',
            className
        )}
        {...props}
    />
);

export default Textarea;
