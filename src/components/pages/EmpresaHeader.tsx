import React from 'react';
import Avatar from '../Avatar';
import styles from '../styles/CompanyProfilePage.module.css';

interface EmpresaHeaderProps {
    nombre: string;
    industria: string;
    avatar: string | undefined;
    setAvatar: (avatar: string | undefined) => void;
}

const EmpresaHeader: React.FC<EmpresaHeaderProps> = ({ nombre, industria, avatar, setAvatar }) => {
    const fileInputRef = React.useRef<HTMLInputElement | null>(null);
    const nameForInitials = nombre || '';
    const avatarInitials = (() => {
        const n = nameForInitials.trim();
        if (!n) return undefined;
        const parts = n.split(/\s+/).filter(Boolean);
        if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
        return (parts[0][0] + (parts[1][0] || '')).toUpperCase();
    })();
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        const url = URL.createObjectURL(file);
        setAvatar(url);
    };
    return (
    <div className={styles.empresaHeaderRow}>
            <div className="flex flex-col items-center relative">
                <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                <Avatar
                    src={avatar}
                    alt="Avatar empresa"
                    size="xl"
                    initials={avatarInitials}
                    className={styles.avatarCustom}
                    editable
                    onEdit={() => fileInputRef.current?.click()}
                />
            </div>
            <div className="flex flex-col items-start">
                <span className={`${styles.companyName} text-gray-900`}>{nombre || 'Nombre'}</span>
                <span className={styles.companyIndustry}>{industria || 'Industria'}</span>
            </div>
        </div>
    );
};

export default EmpresaHeader;