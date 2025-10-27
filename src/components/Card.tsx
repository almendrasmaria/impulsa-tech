import React from 'react';
import classNames from 'classnames';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    header?: React.ReactNode;
    headerClassName?: string;
}

const Card: React.FC<CardProps> = ({ children, className, header, ...props }) => (
    <div
        className={classNames(
            'bg-white rounded-xl shadow-md p-6',
            className
        )}
        {...props}
    >
        {header && (
            <div className={classNames("mb-4 border-b pb-2 font-semibold text-lg text-gray-800", props.headerClassName)}>
                {header}
            </div>
        )}
        {children}
    </div>
);

export default Card;
