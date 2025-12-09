import React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    children: React.ReactNode;
    className?: string;
}

const Label: React.FC<LabelProps> = ({ children, className, ...props }) => (
    <label className={`block mb-1 font-medium ${className || ''}`} {...props}>
        {children}
    </label>
);

export default Label;
