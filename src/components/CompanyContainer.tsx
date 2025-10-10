import React from 'react'

type Props = {
  children: React.ReactNode
  className?: string
  spacingClass?: string
  variant?: 'compact' | 'spacious'
}

export default function CompanyContainer({
  children,
  className = '',
  spacingClass,
  variant = 'spacious',
}: Props) {
  const presets: Record<string, string> = {
    compact: 'min-h-screen bg-gray-50 font-[Poppins] flex flex-col items-center py-8 px-4 md:py-12 md:px-8 mb-8',
    spacious: 'min-h-screen bg-gray-50 font-[Poppins] flex flex-col items-center py-32 px-8 md:py-48 md:px-24 mb-32',
  }

  const base = spacingClass ?? presets[variant]
  const classNames = `${base} ${className}`.trim()

  return <div className={classNames}>{children}</div>
}
