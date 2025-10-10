import React from 'react'

type AvatarProps = {
    src?: string
    alt?: string
    size?: 'sm' | 'md' | 'lg' | 'xl'
    initials?: string
    onEdit?: () => void
    onDelete?: () => void
    editable?: boolean
    className?: string
    style?: React.CSSProperties
    onClick?: () => void
    title?: string
}

const sizeMap: Record<NonNullable<AvatarProps['size']>, string> = {
    sm: 'w-12 h-12 md:w-14 md:h-14',
    md: 'w-16 h-16 md:w-20 md:h-20',
    lg: 'w-20 h-20 md:w-24 md:h-24',
    xl: 'w-24 h-24 md:w-28 md:h-28',
}

export default function Avatar({ src, alt = 'Avatar', size = 'md', initials, onEdit, onDelete, editable = false, className = '', style, onClick, title }: AvatarProps) {
    const sizeClass = sizeMap[size]

    const clickableClass = onClick ? 'cursor-pointer' : ''

    return (
        <div style={style} onClick={onClick} title={title} className={`relative ${sizeClass} ${clickableClass} ${className}`.trim()}>
            {src ? (
                <img
                    src={src}
                    alt={alt}
                    className={`w-full h-full rounded-full object-cover`}
                    style={{ border: '1px solid #D1D5DB' }} 
                />
            ) : (
                <div className="w-full h-full rounded-full bg-[#F8F9FC] flex items-center justify-center text-gray-500 font-medium text-lg" style={{ border: '1px solid #D1D5DB' }}>
                    {initials ?? '?'}
                </div>
            )}
            {editable && (
                <>
                    {onEdit && (
                        <button
                            type="button"
                            onClick={onEdit}
                            title="Editar avatar"
                            className="pencilContainer"
                            style={{ background: '#fff', border: '2px solid #1829DB', borderRadius: '50%' }}
                        >
                            <span className="text-[#1829DB] text-xs md:text-sm">✎</span>
                        </button>
                    )}
                    {onDelete && (
                        <button
                            type="button"
                            onClick={onDelete}
                            title="Eliminar avatar"
                            className="pencilContainer"
                        >
                            <span className="text-red-500 text-xs md:text-sm">✕</span>
                        </button>
                    )}
                </>
            )}
        </div>
    )
}
