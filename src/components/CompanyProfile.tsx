import React, { useState } from 'react';
import { useToast } from './ToastProvider';
import Card from './Card';
import Button from './Button';
import Input from './Input';
import Textarea from './Textarea';
import Label from './Label';

interface CompanyProfileProps {
    initialData?: {
        name: string;
        website: string;
        industry: string;
        email: string;
        description: string;
        avatar?: string;
    };
}

const defaultData = {
    name: '',
    website: '',
    industry: '',
    email: '',
    description: '',
    avatar: '',
};

const CompanyProfile: React.FC<CompanyProfileProps> = ({ initialData }) => {
    const [editMode, setEditMode] = useState(false);
    const [data, setData] = useState(initialData || defaultData);
    const [avatarPreview, setAvatarPreview] = useState<string>(initialData?.avatar || '');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const result = reader.result as string;
                setAvatarPreview(result);
                setData({ ...data, avatar: result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveAvatar = () => {
        setAvatarPreview('');
        setData({ ...data, avatar: '' });
    };



    const { showToast } = useToast();
    const handleEdit = () => setEditMode(true);
    const handleSave = () => {
        setEditMode(false);
        showToast('Perfil actualizado exitosamente', 'success');
    };

    return (
        <div className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden min-h-screen flex items-center justify-center">
            <Card className="w-full max-w-4xl mx-auto" header="Mi perfil" headerClassName="text-left">
                <form className="max-w-4xl mx-auto text-gray-600 pt-8">
                    <div className="flex flex-wrap gap-8">
                        {/* Columna del Avatar */}
                        <div className="w-full md:w-1/4 text-center flex flex-col items-center">
                            <div className="relative w-40 h-40 mb-4">
                                {avatarPreview ? (
                                    <img
                                        src={avatarPreview}
                                        alt="Avatar de empresa"
                                        className="w-full h-full object-cover rounded-full border-4 border-gray-200"
                                    />
                                ) : (
                                    <div className="w-full h-full rounded-full border-4 border-gray-200 bg-gray-100 flex items-center justify-center">
                                        <svg
                                            className="w-16 h-16 text-gray-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                            {editMode && (
                                <div className="flex flex-col gap-2 w-full">
                                    <label className="cursor-pointer">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleAvatarChange}
                                            className="hidden"
                                        />
                                        <span className="block bg-[#0058A3] text-white py-2 px-4 rounded-full hover:bg-[#003B80] transition-colors text-sm">
                                            {avatarPreview ? 'Cambiar' : 'Subir'}
                                        </span>
                                    </label>
                                    {avatarPreview && (
                                        <Button
                                            type="button"
                                            onClick={handleRemoveAvatar}
                                            className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition-colors text-sm"
                                        >
                                            Eliminar
                                        </Button>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Columna de Información */}
                        <div className="flex-1">
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-1/2 text-left">
                                    <Label>Nombre</Label>
                                    <Input
                                        className="w-full border border-gray-300 rounded py-3 px-4 mt-1"
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        onChange={handleChange}
                                        placeholder="Ej: Empresa Ejemplo"
                                        required
                                        disabled={!editMode}
                                    />
                                </div>
                                <div className="w-full md:w-1/2 text-left md:pl-4">
                                    <Label>Sitio web</Label>
                                    <Input
                                        className="w-full border border-gray-300 rounded py-3 px-4 mt-1"
                                        type="text"
                                        name="website"
                                        value={data.website}
                                        onChange={handleChange}
                                        placeholder="Ej: https://ejemplo.com"
                                        required
                                        disabled={!editMode}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap mt-6">
                                <div className="w-full md:w-1/2 text-left">
                                    <Label>Industria</Label>
                                    <Input
                                        className="w-full border border-gray-300 rounded py-3 px-4 mt-1"
                                        type="text"
                                        name="industry"
                                        value={data.industry}
                                        onChange={handleChange}
                                        placeholder="Ej: Tecnología"
                                        required
                                        disabled={!editMode}
                                    />
                                </div>
                                <div className="w-full md:w-1/2 text-left md:pl-4">
                                    <Label>Correo electrónico</Label>
                                    <Input
                                        className="w-full border border-gray-300 rounded py-3 px-4 mt-1"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        onChange={handleChange}
                                        placeholder="Ej: contacto@ejemplo.com"
                                        required
                                        disabled={!editMode}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Descripción en ancho completo */}
                    <div className="my-6 text-left">
                        <Label>Descripción de la empresa</Label>
                        <Textarea
                            className="w-full border border-gray-300 rounded py-3 px-4 mt-1 h-48 resize-none"
                            name="description"
                            value={data.description}
                            onChange={handleChange}
                            placeholder="Escribí la descripción de la empresa..."
                            required
                            disabled={!editMode}
                        />
                    </div>

                    <div className="flex justify-end mb-4">
                        {editMode ? (
                            <Button type="button" onClick={handleSave} className="bg-[#0058A3] text-white py-2 px-12 mb-10 rounded-full hover:bg-[#003B80] transition-colors">
                                Guardar cambios
                            </Button>
                        ) : (
                            <Button type="button" onClick={handleEdit} className="bg-[#0058A3] text-white py-2 px-12 mb-10 rounded-full hover:bg-[#003B80] transition-colors">
                                Editar
                            </Button>
                        )}
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default CompanyProfile;
