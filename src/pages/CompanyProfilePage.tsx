import React, { useState } from 'react'
import { Button, CompanyContainer } from '../components'
import MiInformacionEmpresa from '../components/pages/MiInformacionEmpresa'
import EmpresaHeader from '../components/pages/EmpresaHeader'
import CrearOferta from '../components/pages/CrearOferta'
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
    const [avatar, setAvatar] = useState<string | undefined>(undefined);

    return (
        <CompanyContainer variant="spacious">
            <div>
                <h1 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-900">Mi perfil</h1>
                <div className={styles.companyProfileCard}>
                    <div className={styles.companyProfileCardInner}>
                        {/* Header general: avatar, nombre, industria */}
                        <EmpresaHeader
                            nombre={savedProfile.nombre}
                            industria={savedProfile.industria}
                            avatar={avatar}
                            setAvatar={setAvatar}
                        />
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
                        {/* Contenido de la tab */}
                        {activeTab === 0 && (
                            <MiInformacionEmpresa
                                savedProfile={savedProfile}
                                setSavedProfile={setSavedProfile}
                                avatar={avatar}
                                setAvatar={setAvatar}
                            />
                        )}
                        {activeTab === 1 && (
                            <CrearOferta />
                        )}

                    </div>
                </div>
            </div>
        </CompanyContainer>
    )
}
