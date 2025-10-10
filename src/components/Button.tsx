import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    variant?: 'primary' | 'secondary' | 'full-width-primary' | 'full-width-secondary'
    size?: 'xs' | 'sm' | 'md'
    className?: string
    noBorder?: boolean
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    noBorder = false,
    onClick,
    ...props
}) => {
    const baseStyles: React.CSSProperties = {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 500,
        borderRadius: '10px',
        transition: 'all 0.2s ease-in-out',
        cursor: 'pointer',
        border: 'none',
        outline: 'none',
        minWidth: '96px',
        height: '35px',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        whiteSpace: 'nowrap',
        fontSize: '14px',
    }

    // size adjustments
    const sizeStyles: Record<string, React.CSSProperties> = {
        md: {},
        sm: {
            minWidth: '72px',
            height: '28px',
            padding: '0 12px',
            fontSize: '12px',
            borderRadius: '8px',
        },
        xs: {
            minWidth: '56px',
            height: '24px',
            padding: '0 8px',
            fontSize: '11px',
            borderRadius: '6px',
        }
    }

    const variantStyles: Record<string, React.CSSProperties> = {
        'primary': {
            color: '#FFFFFF',
            backgroundColor: '#1829DB',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        'secondary': {
            color: '#1829DB',
            backgroundColor: '#FFFFFF',
            border: noBorder ? 'none' : '2px solid #1829DB',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        },
        'full-width-primary': {
            color: '#FFFFFF',
            backgroundColor: '#1829DB',
            width: '100%',
            minWidth: 'auto',
            height: '48px',
            padding: '0 24px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        'full-width-secondary': {
            color: '#1829DB',
            backgroundColor: '#FFFFFF',
            border: noBorder ? 'none' : '2px solid #1829DB',
            width: '100%',
            minWidth: 'auto',
            height: '48px',
            padding: '0 24px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        }
    }

    const buttonStyles: React.CSSProperties = {
        ...baseStyles,
        ...sizeStyles[size],
        ...(variantStyles[variant] || variantStyles['primary'])
        ,pointerEvents: 'auto'
    }

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
        const button = e.currentTarget
        if (variant === 'secondary' || variant === 'full-width-secondary') {
            button.style.backgroundColor = '#1829DB'
            button.style.color = '#FFFFFF'
            button.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.15)'
        } else {
            button.style.backgroundColor = '#1423C4'
            button.style.color = '#FFFFFF'
            button.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)'
        }
    }

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
        const button = e.currentTarget
        if (variant === 'secondary' || variant === 'full-width-secondary') {
            button.style.backgroundColor = '#FFFFFF'
            button.style.color = '#1829DB'
            button.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)'
        } else {
            button.style.backgroundColor = '#1829DB'
            button.style.color = '#FFFFFF'
            button.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)'
        }
    }

    return (
        <button 
            style={buttonStyles}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button