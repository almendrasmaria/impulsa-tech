import React, { useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import styles from '../../styles/CompanyProfilePage.module.css';

interface MiInformacionEmpresaProps {
    savedProfile: {
        nombre: string;
        industria: string;
        sitioWeb: string;
        correo: string;
        descripcion: string;
    };
    setSavedProfile: (profile: any) => void;
    avatar?: string;
    setAvatar?: (avatar: string | undefined) => void;
}

const defaultForm = {
    nombre: '',
    industria: '',
    sitioWeb: '',
    correo: '',
    descripcion: '',
};

const MiInformacionEmpresa: React.FC<MiInformacionEmpresaProps> = ({ savedProfile, setSavedProfile, avatar, setAvatar }) => {
    const [form, setForm] = useState(savedProfile);
    const [isEditing, setIsEditing] = useState(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <form className="flex flex-col gap-8" onSubmit={(e) => { e.preventDefault(); setSavedProfile(form); setIsEditing(false); }}>
            {/* Avatar edit button removed, now only in EmpresaHeader */}
            <div className={styles.formGrid}>
                <div>
                    <Input placeholder="Nombre de la empresa" label="Nombre" name="nombre" value={form.nombre} onChange={handleChange} required disabled={!isEditing} />
                </div>
                <div>
                    <Input placeholder="https://www.ejemplo.com" label="Sitio web" name="sitioWeb" value={form.sitioWeb} onChange={handleChange} disabled={!isEditing} />
                </div>
                <div>
                    <Input placeholder="Tecnología / Salud / Educación" label="Industria" name="industria" value={form.industria} onChange={handleChange} required disabled={!isEditing} />
                </div>
                <div>
                    <Input placeholder="ejemplo@empresa.com" label="Correo electrónico" name="correo" type="email" value={form.correo} onChange={handleChange} required disabled={!isEditing} />
                </div>
            </div>
            <div className={styles.descripcionSeparada}>
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
    );
};

export default MiInformacionEmpresa;
