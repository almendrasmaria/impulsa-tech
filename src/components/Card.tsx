import React from 'react'

interface CardProps {
    children: React.ReactNode
    title?: string
    style?: React.CSSProperties
}

const Card: React.FC<CardProps> = ({ children, title, style }) => {
    return (
        <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)',
            padding: '32px',
            marginBottom: '24px',
            border: '1px solid #e5e7eb',
            width: '100%',
            ...style
        }}>
            {title && (
                <h2 style={{
                    fontSize: '24px',
                    fontWeight: '600',
                    color: '#1829DB',
                    marginBottom: '24px',
                    fontFamily: 'Poppins, sans-serif'
                }}>
                    {title}
                </h2>
            )}
            {children}
        </div>
    )
}

export default Card