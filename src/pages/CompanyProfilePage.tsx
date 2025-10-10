import React, { useState } from 'react'
import { Button, CompanyContainer, Input, Avatar } from '../components'
import styles from '../styles/CompanyProfilePage.module.css'

const TABS = [
    { label: 'Mi información' },
    { label: 'Crear ofertas' },
    { label: 'Mis ofertas' },
]

export default function CompanyProfilePage() {
    const [activeTab, setActiveTab] = useState(0)
    const defaultForm = {
        nombre: '',
        industria: '',
        sitioWeb: '',
        correo: '',
        descripcion: '',
    }
    const [savedProfile, setSavedProfile] = useState(defaultForm)
    const [form, setForm] = useState(savedProfile)
    const [isEditing, setIsEditing] = useState(false)
    const [avatar, setAvatar] = useState<string | undefined>(undefined)

    const fileInputRef = React.useRef<HTMLInputElement | null>(null)

    const handleAvatarEdit = () => {
        if (!isEditing) return
        fileInputRef.current?.click()
    }
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0]
        if (!file) return
        const url = URL.createObjectURL(file)
        setAvatar(url)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const headerNameRaw = (isEditing ? form.nombre : savedProfile.nombre) || ''
    const headerIndustryRaw = (isEditing ? form.industria : savedProfile.industria) || ''
    const headerName = headerNameRaw.trim() || 'Nombre'
    const headerIndustry = headerIndustryRaw.trim() || 'Industria'
    const nameForInitials = (isEditing ? form.nombre : savedProfile.nombre) || ''
    const avatarInitials = (() => {
        const n = nameForInitials.trim()
        if (!n) return undefined
        const parts = n.split(/\s+/).filter(Boolean)
        if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
        return (parts[0][0] + (parts[1][0] || '')).toUpperCase()
    })()

    return (
        <CompanyContainer variant="spacious">
            <div>
                <h1 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-900">Mi perfil</h1>
                <div className={styles.companyProfileCard}>
                    <div className={styles.companyProfileCardInner}>
                        {/* Header */}
                        <div className="flex items-center mb-6 gap-6">
                            <div className="flex flex-col items-center">
                                <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                                {/* Click the avatar to change image while editing */}
                                <Avatar src={avatar} alt="Avatar empresa" size="xl" initials={avatarInitials} className={`${styles.avatarCustom} mb-4`} onClick={isEditing ? handleAvatarEdit : undefined} title={isEditing ? 'Cambiar imagen' : undefined} />
                            </div>
                            <div className="flex flex-col">
                                <span className={`${styles.companyName} text-gray-900`}>{headerName}</span>
                                <span className={styles.companyIndustry}>{headerIndustry}</span>
                            </div>
                        </div>
                        {/* Tabs */}
                        <div className={`mt-8 py-4 ${styles.tabsDebug}`}>
                            <div className={`w-full ${styles.companyTabs}`}>
                                <div className={`flex items-center py-2 w-full ${styles.tabsInner}`}>
                                    {TABS.map((tab, idx) => (
                                        <button
                                            key={tab.label}
                                            onClick={() => setActiveTab(idx)}
                                            className={`${styles.companyTab} flex-1 px-6 py-2 text-center font-medium transition-colors duration-150 ${activeTab === idx ? styles.companyTabActive : styles.companyTabInactive}`}
                                        >
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        {activeTab === 0 && (
                            <form className="flex flex-col gap-8" onSubmit={(e) => { e.preventDefault(); /* save changes */ setSavedProfile(form); setIsEditing(false); }}>
                                {/* Use a simple vertical stack to ensure fields appear one below the other */}
                                <div className="flex flex-col gap-8">
                                    <div>
                                        <Input placeholder="Nombre de la empresa" label="Nombre" name="nombre" value={form.nombre} onChange={handleChange} required disabled={!isEditing} />
                                    </div>
                                    <div>
                                        <Input placeholder="Tecnología / Salud / Educación" label="Industria" name="industria" value={form.industria} onChange={handleChange} required disabled={!isEditing} />
                                    </div>
                                    <div>
                                        <Input placeholder="https://www.ejemplo.com" label="Sitio web" name="sitioWeb" value={form.sitioWeb} onChange={handleChange} disabled={!isEditing} />
                                    </div>
                                    <div>
                                        <Input placeholder="ejemplo@empresa.com" label="Correo electrónico" name="correo" type="email" value={form.correo} onChange={handleChange} required disabled={!isEditing} />
                                    </div>
                                </div>
                                <div className="mt-8">
                                        <Input placeholder="Describe brevemente la empresa, misión y qué hacen" label="Descripción" name="descripcion" multiline rows={4} value={form.descripcion} onChange={handleChange} className="font-poppins" />
                                </div>
                                <div className="flex justify-end gap-3 mt-4">
                                    {!isEditing ? (
                                        <Button variant="primary" type="button" onClick={() => { setIsEditing(true); setForm(savedProfile); }}>Editar perfil</Button>
                                    ) : (
                                        <Button variant="secondary" type="submit">Guardar cambios</Button>
                                    )}
                                </div>
                            </form>
                        )}

                    </div>
                </div>
            </div>
        </CompanyContainer>
    )
}
