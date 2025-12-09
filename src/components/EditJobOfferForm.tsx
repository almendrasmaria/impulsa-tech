import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from './ToastProvider';
import Input from './Input';
import Select from './Select';
import Textarea from './Textarea';
import Button from './Button';
import Label from './Label';
import { LuBriefcase, LuClock, LuMonitor, LuMapPin, LuFileText, LuToggleLeft } from 'react-icons/lu';

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

const estados = ['Activa', 'Inactiva'];

interface JobOffer {
    id: number;
    title: string;
    date: string;
    status: 'Activa' | 'Inactiva';
    jornada?: string;
    modalidad?: string;
    location?: string;
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
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Título */}
                <motion.div
                    className="text-left"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                >
                    <Label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                        <LuBriefcase className="w-4 h-4 text-[#003B80]" />
                        Título del Puesto
                    </Label>
                    <Input
                        name="title"
                        value={data.title}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg py-3 px-4 transition-all focus:border-[#003B80] focus:ring-2 focus:ring-[#003B80]/20"
                        placeholder="Ej: Desarrollador Frontend"
                        required
                    />
                </motion.div>

                {/* Estado */}
                <motion.div
                    className="text-left"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                >
                    <Label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                        <LuToggleLeft className="w-4 h-4 text-[#003B80]" />
                        Estado
                    </Label>
                    <Select
                        name="status"
                        value={data.status}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg py-3 px-4 transition-all focus:border-[#003B80] focus:ring-2 focus:ring-[#003B80]/20"
                    >
                        {estados.map(e => <option key={e} value={e}>{e}</option>)}
                    </Select>
                </motion.div>

                {/* Jornada */}
                <motion.div
                    className="text-left"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                >
                    <Label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                        <LuClock className="w-4 h-4 text-[#003B80]" />
                        Jornada
                    </Label>
                    <Select
                        name="jornada"
                        value={data.jornada || ''}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg py-3 px-4 transition-all focus:border-[#003B80] focus:ring-2 focus:ring-[#003B80]/20"
                    >
                        {jornadas.map((j, i) => (
                            <option key={i} value={j}>{j || 'Selecciona jornada'}</option>
                        ))}
                    </Select>
                </motion.div>

                {/* Modalidad */}
                <motion.div
                    className="text-left"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                >
                    <Label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                        <LuMonitor className="w-4 h-4 text-[#003B80]" />
                        Modalidad
                    </Label>
                    <Select
                        name="modalidad"
                        value={data.modalidad || ''}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg py-3 px-4 transition-all focus:border-[#003B80] focus:ring-2 focus:ring-[#003B80]/20"
                    >
                        {modalidades.map((m, i) => (
                            <option key={i} value={m}>{m || 'Selecciona modalidad'}</option>
                        ))}
                    </Select>
                </motion.div>
            </div>

            {/* Ubicación - ancho completo */}
            <motion.div
                className="text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
            >
                <Label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                    <LuMapPin className="w-4 h-4 text-[#003B80]" />
                    Ubicación
                </Label>
                <Input
                    name="location"
                    value={data.location || ''}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg py-3 px-4 transition-all focus:border-[#003B80] focus:ring-2 focus:ring-[#003B80]/20"
                    placeholder="Ej: Buenos Aires, Argentina"
                />
            </motion.div>

            {/* Descripción */}
            <motion.div
                className="text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
            >
                <Label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                    <LuFileText className="w-4 h-4 text-[#003B80]" />
                    Descripción
                </Label>
                <Textarea
                    name="description"
                    value={data.description || ''}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg py-3 px-4 h-32 resize-none transition-all focus:border-[#003B80] focus:ring-2 focus:ring-[#003B80]/20"
                    placeholder="Escribí la descripción del puesto, requisitos, responsabilidades..."
                    required
                />
            </motion.div>

            {/* Botones */}
            <motion.div
                className="flex justify-end gap-3 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.7 }}
            >
                <Button
                    type="button"
                    onClick={handleDelete}
                    variant="secondary"
                >
                    Eliminar
                </Button>
                <Button type="submit" variant="primary">
                    Guardar Cambios
                </Button>
            </motion.div>
        </form>
    );
};

export default EditJobOfferForm;
