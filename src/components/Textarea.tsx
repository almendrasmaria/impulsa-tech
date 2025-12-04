import React from 'react';
import classNames from 'classnames';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
}

const Textarea: React.FC<TextareaProps> = ({ className, ...props }) => (
    <textarea
        className={classNames(
            'border border-gray-300 rounded-3xl px-4 py-3 w-full min-h-[80px] focus:outline-none focus:ring-2 focus:ring-[#0058A3]',
            className
        )}
        {...props}
    />
);

export default Textarea;
