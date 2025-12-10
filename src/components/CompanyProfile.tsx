import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from './ToastProvider';
import Card from './Card';
import Button from './Button';
import Input from './Input';
import Textarea from './Textarea';
import Label from './Label';
import { LuUser, LuGlobe, LuMail, LuBuilding2, LuFileText } from 'react-icons/lu';

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
        showToast('¡Perfil actualizado exitosamente!');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#E8F0FF] via-[#FAFDFF] to-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <form>
                            {/* Header Section */}
                            <motion.div
                                className="px-8 pt-8 pb-6 border-b border-gray-200"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h1 className="text-3xl font-bold text-gray-800 mb-2">Mi Perfil Empresarial</h1>
                                <p className="text-gray-600">Gestiona la información de tu empresa</p>
                            </motion.div>

                            <div className="p-8">
                                {/* Avatar y Botones de Edición */}
                                <div className="flex flex-col md:flex-row gap-8 mb-8">
                                    {/* Avatar Section */}
                                    <motion.div
                                        className="flex flex-col items-center md:items-start"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="relative w-32 h-32 mb-4">
                                            {avatarPreview ? (
                                                <img
                                                    src={avatarPreview}
                                                    alt="Avatar de empresa"
                                                    className="w-full h-full object-cover rounded-full border-4 border-[#0058A3] shadow-lg"
                                                />
                                            ) : (
                                                <div className="w-full h-full rounded-full border-4 border-gray-300 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center shadow-md">
                                                    <LuBuilding2 className="w-16 h-16 text-gray-400" />
                                                </div>
                                            )}
                                        </div>
                                        {editMode && (
                                            <div className="flex flex-col gap-2 w-full max-w-xs">
                                                <label className="cursor-pointer">
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={handleAvatarChange}
                                                        className="hidden"
                                                    />
                                                    <motion.span
                                                        className="block bg-[#003B80] text-white py-2 px-4 rounded-full hover:bg-[#002a5c] transition-colors text-sm text-center shadow-md"
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        {avatarPreview ? 'Cambiar Imagen' : 'Subir Imagen'}
                                                    </motion.span>
                                                </label>
                                                {avatarPreview && (
                                                    <motion.button
                                                        type="button"
                                                        onClick={handleRemoveAvatar}
                                                        className="bg-white border-2 border-[#003B80] text-[#003B80] py-2 px-4 rounded-full hover:bg-[#003B80] hover:text-white transition-colors text-sm shadow-md font-medium"
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        Eliminar Imagen
                                                    </motion.button>
                                                )}
                                            </div>
                                        )}
                                    </motion.div>

                                    {/* Company Info Grid */}
                                    <div className="flex-1">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Nombre */}
                                            <motion.div
                                                className="text-left"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.4, delay: 0.2 }}
                                            >
                                                <Label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                                                    <LuBuilding2 className="w-4 h-4 text-[#0058A3]" />
                                                    Nombre de la Empresa
                                                </Label>
                                                <Input
                                                    className={`w-full border rounded-lg py-3 px-4 transition-all ${editMode
                                                        ? 'border-gray-300 focus:border-[#0058A3] focus:ring-2 focus:ring-[#0058A3]/20'
                                                        : 'border-gray-200 bg-gray-50'
                                                        }`}
                                                    type="text"
                                                    name="name"
                                                    value={data.name}
                                                    onChange={handleChange}
                                                    placeholder="Ej: Empresa Ejemplo"
                                                    required
                                                    disabled={!editMode}
                                                />
                                            </motion.div>

                                            {/* Sitio Web */}
                                            <motion.div
                                                className="text-left"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.4, delay: 0.3 }}
                                            >
                                                <Label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                                                    <LuGlobe className="w-4 h-4 text-[#0058A3]" />
                                                    Sitio Web
                                                </Label>
                                                <Input
                                                    className={`w-full border rounded-lg py-3 px-4 transition-all ${editMode
                                                        ? 'border-gray-300 focus:border-[#0058A3] focus:ring-2 focus:ring-[#0058A3]/20'
                                                        : 'border-gray-200 bg-gray-50'
                                                        }`}
                                                    type="text"
                                                    name="website"
                                                    value={data.website}
                                                    onChange={handleChange}
                                                    placeholder="Ej: https://ejemplo.com"
                                                    required
                                                    disabled={!editMode}
                                                />
                                            </motion.div>

                                            {/* Industria */}
                                            <motion.div
                                                className="text-left"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.4, delay: 0.4 }}
                                            >
                                                <Label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                                                    <LuUser className="w-4 h-4 text-[#0058A3]" />
                                                    Industria
                                                </Label>
                                                <Input
                                                    className={`w-full border rounded-lg py-3 px-4 transition-all ${editMode
                                                        ? 'border-gray-300 focus:border-[#0058A3] focus:ring-2 focus:ring-[#0058A3]/20'
                                                        : 'border-gray-200 bg-gray-50'
                                                        }`}
                                                    type="text"
                                                    name="industry"
                                                    value={data.industry}
                                                    onChange={handleChange}
                                                    placeholder="Ej: Tecnología"
                                                    required
                                                    disabled={!editMode}
                                                />
                                            </motion.div>

                                            {/* Email */}
                                            <motion.div
                                                className="text-left"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.4, delay: 0.5 }}
                                            >
                                                <Label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                                                    <LuMail className="w-4 h-4 text-[#0058A3]" />
                                                    Correo Electrónico
                                                </Label>
                                                <Input
                                                    className={`w-full border rounded-lg py-3 px-4 transition-all ${editMode
                                                        ? 'border-gray-300 focus:border-[#0058A3] focus:ring-2 focus:ring-[#0058A3]/20'
                                                        : 'border-gray-200 bg-gray-50'
                                                        }`}
                                                    type="email"
                                                    name="email"
                                                    value={data.email}
                                                    onChange={handleChange}
                                                    placeholder="Ej: contacto@ejemplo.com"
                                                    required
                                                    disabled={!editMode}
                                                />
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>

                                {/* Descripción Section */}
                                <motion.div
                                    className="mb-8 text-left"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.6 }}
                                >
                                    <Label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                                        <LuFileText className="w-4 h-4 text-[#0058A3]" />
                                        Descripción de la Empresa
                                    </Label>
                                    <Textarea
                                        className={`w-full border rounded-lg py-3 px-4 h-40 resize-none transition-all ${editMode
                                            ? 'border-gray-300 focus:border-[#0058A3] focus:ring-2 focus:ring-[#0058A3]/20'
                                            : 'border-gray-200 bg-gray-50'
                                            }`}
                                        name="description"
                                        value={data.description}
                                        onChange={handleChange}
                                        placeholder="Escribí una descripción detallada de tu empresa, su misión y valores..."
                                        required
                                        disabled={!editMode}
                                    />
                                </motion.div>

                                {/* Action Buttons */}
                                <motion.div
                                    className="flex justify-end gap-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.4, delay: 0.7 }}
                                >
                                    {editMode ? (
                                        <>
                                            <Button
                                                type="button"
                                                onClick={() => setEditMode(false)}
                                                variant="secondary"
                                            >
                                                Cancelar
                                            </Button>
                                            <Button
                                                type="button"
                                                onClick={handleSave}
                                                variant="primary"
                                            >
                                                Guardar Cambios
                                            </Button>
                                        </>
                                    ) : (
                                        <Button
                                            type="button"
                                            onClick={handleEdit}
                                            variant="primary"
                                        >
                                            Editar Perfil
                                        </Button>
                                    )}
                                </motion.div>
                            </div>
                        </form>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
};

export default CompanyProfile;
