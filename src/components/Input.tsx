import React from 'react'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string
    error?: string
    multiline?: boolean
    rows?: number
    textSize?: 'sm' | 'base'
    className?: string
}

export default function Input({ label, error, multiline = false, rows = 4, textSize = 'sm', className = '', ...props }: InputProps) {
    const baseClasses = `bg-[#F8F9FC] rounded-lg px-4 py-2 pl-5 pr-5 focus:ring-[#1829DB] focus:ring-2 outline-none w-full font-normal border border-gray-100 text-[14px] transition-colors duration-150 ${className}`
    return (
        <div>
            {label && (
                <label
                    className="block text-gray-700 mb-1 label-light-16"
                >
                    {label}
                </label>
            )}
            {multiline ? (
                <textarea rows={rows} className={`${baseClasses} input-content-16`} style={{ borderRadius: 10, minHeight: 36, border: '1px solid #3A416F' }} {...(props as any)} />
            ) : (
                <input className={`${baseClasses} input-content-16`} style={{ borderRadius: 10, minHeight: 36 }} {...props} />
            )}
            {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
        </div>
    )
}
