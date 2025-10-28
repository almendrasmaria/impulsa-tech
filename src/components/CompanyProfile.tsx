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
    };
}

const defaultData = {
    name: '',
    website: '',
    industry: '',
    email: '',
    description: '',
};

const CompanyProfile: React.FC<CompanyProfileProps> = ({ initialData }) => {
    const [editMode, setEditMode] = useState(false);
    const [data, setData] = useState(initialData || defaultData);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };



    const { showToast } = useToast();
    const handleEdit = () => setEditMode(true);
    const handleSave = () => {
        setEditMode(false);
        showToast('Perfil actualizado exitosamente', 'success');
    };

    return (
        <div className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden bg-gray-100 min-h-screen flex items-center justify-center">
            <Card className="w-full max-w-2xl mx-auto" header="Mi perfil" headerClassName="text-left">
                <form className="max-w-2xl mx-auto text-gray-600 pt-8">
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
                            <Button type="button" onClick={handleSave} className="bg-blue-600 text-white py-2 px-12 mb-10 rounded hover:bg-blue-700 transition-colors">
                                Guardar cambios
                            </Button>
                        ) : (
                            <Button type="button" onClick={handleEdit} className="bg-blue-600 text-white py-2 px-12 mb-10 rounded hover:bg-blue-700 transition-colors">
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
