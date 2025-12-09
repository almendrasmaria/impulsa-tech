import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    variant?: 'primary' | 'secondary' | 'full-width-primary' | 'full-width-secondary'
    className?: string
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    className = '',
    ...props
}) => {
    const getButtonStyles = (variant: string) => {
        const baseStyles = {
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500,
            borderRadius: '9999px',
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

        const variantStyles = {
            'primary': {
                ...baseStyles,
                color: '#FFFFFF',
                backgroundColor: '#003B80',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            },
            'secondary': {
                ...baseStyles,
                color: '#003B80',
                backgroundColor: '#FFFFFF',
                border: '2px solid #003B80',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            },
            'full-width-primary': {
                ...baseStyles,
                color: '#FFFFFF',
                backgroundColor: '#003B80',
                width: '100%',
                minWidth: 'auto',
                height: '48px',
                padding: '0 24px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            },
            'full-width-secondary': {
                ...baseStyles,
                color: '#003B80',
                backgroundColor: '#FFFFFF',
                border: '2px solid #003B80',
                width: '100%',
                minWidth: 'auto',
                height: '48px',
                padding: '0 24px',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            }
        }

        return variantStyles[variant as keyof typeof variantStyles] || variantStyles.primary
    }

    const buttonStyles = getButtonStyles(variant)

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
        const button = e.currentTarget
        if (variant === 'secondary' || variant === 'full-width-secondary') {
            button.style.backgroundColor = '#003B80'
            button.style.color = '#FFFFFF'
            button.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.15)'
        } else {
            button.style.backgroundColor = '#002A5C'
            button.style.color = '#FFFFFF'
            button.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)'
        }
    }

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
        const button = e.currentTarget
        if (variant === 'secondary' || variant === 'full-width-secondary') {
            button.style.backgroundColor = '#FFFFFF'
            button.style.color = '#003B80'
            button.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)'
        } else {
            button.style.backgroundColor = '#003B80'
            button.style.color = '#FFFFFF'
            button.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)'
        }
    }

    return (
        <button 
            style={buttonStyles}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button