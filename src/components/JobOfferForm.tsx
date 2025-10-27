import React, { useState } from 'react';
import { useToast } from './ToastProvider';
import Card from './Card';
import Button from './Button';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';
import Label from './Label';

const defaultData = {
    title: '',
    jornada: '',
    modalidad: '',
    seniority: '',
    description: '',
};

const jornadas = [
    '',
    'Full Time',
    'Part Time',
    'Por Proyecto',
];
const modalidades = [
    '',
    'Presencial',
    'Remoto',
    'Híbrido',
];
const seniorities = [
    '',
    'Junior',
    'Semi Senior',
    'Senior',
];

const JobOfferForm: React.FC = () => {
        const [data, setData] = useState(defaultData);

        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
            setData({ ...data, [e.target.name]: e.target.value });
        };

        const { showToast } = useToast();
        const handlePublish = () => {
            showToast('Oferta publicada exitosamente', 'success');
        };

        return (
            <div className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden bg-gray-100 min-h-screen flex items-center justify-center">
                <Card className="w-full max-w-2xl rounded-2xl shadow-sm p-6 gap-4" header="Crear oferta" headerClassName="text-left">
                    <form className="max-w-2xl mx-auto text-gray-600 pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <Label htmlFor="title" className="text-left">Título del puesto</Label>
                                            <Input
                                                className="w-full border border-gray-300 rounded py-3 px-4 mt-1"
                                                name="title"
                                                value={data.title}
                                                onChange={handleChange}
                                                placeholder="Ej: Desarrollador Frontend"
                                                required
                                            />
                            <Label htmlFor="jornada" className="mt-4 text-left">Jornada</Label>
                                            <Select
                                                className="w-full border border-gray-300 rounded py-3 px-4 mt-1"
                                                name="jornada"
                                                value={data.jornada}
                                                onChange={handleChange}
                                            >
                                {jornadas.map((j, i) => (
                                    <option key={i} value={j}>{j || 'Selecciona jornada'}</option>
                                ))}
                            </Select>
                        </div>
                        <div>
                            <Label htmlFor="modalidad" className="text-left">Modalidad</Label>
                                            <Select
                                                className="w-full border border-gray-300 rounded py-3 px-4 mt-1"
                                                name="modalidad"
                                                value={data.modalidad}
                                                onChange={handleChange}
                                            >
                                {modalidades.map((m, i) => (
                                    <option key={i} value={m}>{m || 'Selecciona modalidad'}</option>
                                ))}
                            </Select>
                            <Label htmlFor="seniority" className="mt-4 text-left">Seniority</Label>
                                            <Select
                                                className="w-full border border-gray-300 rounded py-3 px-4 mt-1"
                                                name="seniority"
                                                value={data.seniority}
                                                onChange={handleChange}
                                            >
                                {seniorities.map((s, i) => (
                                    <option key={i} value={s}>{s || 'Selecciona seniority'}</option>
                                ))}
                            </Select>
                        </div>
                    </div>
                                <div className="my-6 text-left">
                                    <Label htmlFor="description" className="text-left">Descripción</Label>
                                    <Textarea
                                        className="w-full border border-gray-300 rounded py-3 px-4 mt-1 h-48 resize-none"
                                        name="description"
                                        value={data.description}
                                        onChange={handleChange}
                                        placeholder="Escribí la descripción del puesto..."
                                        required
                                    />
                                </div>
                                <div className="flex justify-end mb-4">
                                    <Button type="button" onClick={handlePublish} className="bg-blue-600 text-white py-2 px-12 mb-10 rounded hover:bg-blue-700 transition-colors">
                                        Publicar
                                    </Button>
                                </div>
                            </form>
                        </Card>
                    </div>
                );
};

export default JobOfferForm;
