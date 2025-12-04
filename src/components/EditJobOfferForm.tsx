import React, { useState } from 'react';
import { useToast } from './ToastProvider';
import Input from './Input';
import Select from './Select';
import Textarea from './Textarea';
import Button from './Button';
import Label from './Label';

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
const estados = ['Activa', 'Inactiva'];

interface JobOffer {
    id: number;
    title: string;
    date: string;
    status: 'Activa' | 'Inactiva';
    jornada?: string;
    modalidad?: string;
    seniority?: string;
    description?: string;
}

interface EditJobOfferFormProps {
    offer: JobOffer;
    onSave: (data: JobOffer) => void;
    onDelete: (id: number) => void;
}

const EditJobOfferForm: React.FC<EditJobOfferFormProps> = ({ offer, onSave, onDelete }) => {
    const [data, setData] = useState<JobOffer>({ ...offer });
    const { showToast } = useToast();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(data);
        showToast('Oferta guardada exitosamente', 'success');
    };

    const handleDelete = () => {
        onDelete(offer.id);
        showToast('Oferta eliminada', 'info');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 text-gray-600">
            <Label htmlFor="title" className="text-left text-gray-600">Título del puesto</Label>
            <Input
                name="title"
                value={data.title}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded py-3 px-4 mt-1"
                placeholder="Ej: Desarrollador Frontend"
                required
            />
            <Label htmlFor="jornada" className="mt-4 text-left text-gray-600">Jornada</Label>
            <Select
                name="jornada"
                value={data.jornada || ''}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded py-3 px-4 mt-1"
            >
                {jornadas.map((j, i) => (
                    <option key={i} value={j}>{j || 'Selecciona jornada'}</option>
                ))}
            </Select>
            <Label htmlFor="modalidad" className="text-left text-gray-600">Modalidad</Label>
            <Select
                name="modalidad"
                value={data.modalidad || ''}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded py-3 px-4 mt-1"
            >
                {modalidades.map((m, i) => (
                    <option key={i} value={m}>{m || 'Selecciona modalidad'}</option>
                ))}
            </Select>
            <Label htmlFor="seniority" className="mt-4 text-left text-gray-600">Seniority</Label>
            <Select
                name="seniority"
                value={data.seniority || ''}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded py-3 px-4 mt-1"
            >
                {seniorities.map((s, i) => (
                    <option key={i} value={s}>{s || 'Selecciona seniority'}</option>
                ))}
            </Select>
            <Label htmlFor="description" className="text-left text-gray-600">Descripción</Label>
            <Textarea
                name="description"
                value={data.description || ''}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded py-3 px-4 mt-1 h-48 resize-none"
                placeholder="Escribí la descripción del puesto..."
                required
            />
            <Label htmlFor="status" className="text-left text-gray-600">Estado</Label>
            <Select
                name="status"
                value={data.status}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded py-3 px-4 mt-1"
            >
                {estados.map(e => <option key={e} value={e}>{e}</option>)}
            </Select>
            <div className="flex justify-end gap-2 mt-6">
                <Button type="button" onClick={handleDelete} className="bg-red-100 text-red-700 hover:bg-red-200">Eliminar</Button>
                <Button type="submit" className="bg-[#0058A3] text-white hover:bg-[#003B80]">Guardar</Button>
            </div>
        </form>
    );
};

export default EditJobOfferForm;
