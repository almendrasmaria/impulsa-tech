import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from './ToastProvider';
import Input from './Input';
import Select from './Select';
import Textarea from './Textarea';
import Button from './Button';
import Label from './Label';
import { LuBriefcase, LuClock, LuMonitor, LuMapPin, LuFileText } from 'react-icons/lu';

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSelectChange = (name: string) => (value: string) => {
        setData({ ...data, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        showToast('¡Oferta guardada exitosamente!');
        setTimeout(() => {
            onSave(data);
        }, 1000);
    };

    const handleDelete = () => {
        showToast('Oferta eliminada');
        setTimeout(() => {
            onDelete(offer.id);
        }, 1000);
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="space-y-6 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
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
                            value={data.jornada || ''}
                            onChange={handleSelectChange('jornada')}
                            placeholder="Selecciona jornada"
                            options={jornadas.filter(j => j).map(j => ({ value: j, label: j }))}
                        />
                    </motion.div>

                    {/* Modalidad */}
                    <motion.div
                        className="text-left"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                    >
                        <Label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                            <LuMonitor className="w-4 h-4 text-[#003B80]" />
                            Modalidad
                        </Label>
                        <Select
                            value={data.modalidad || ''}
                            onChange={handleSelectChange('modalidad')}
                            placeholder="Selecciona modalidad"
                            options={modalidades.filter(m => m).map(m => ({ value: m, label: m }))}
                        />
                    </motion.div>

                    {/* Ubicación */}
                    <motion.div
                        className="text-left"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
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
                </div>

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

                {/* Estado Toggle and Botones */}
                <motion.div
                    className="flex justify-between items-center pt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                >
                    {/* Estado Toggle */}
                    <div className="flex items-center gap-3">
                        <Label className="text-gray-700 font-medium mb-0">
                            Estado:
                        </Label>
                        <button
                            type="button"
                            onClick={() => setData({ ...data, status: data.status === 'Activa' ? 'Inactiva' : 'Activa' })}
                            className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors duration-300 ${data.status === 'Activa' ? 'bg-[#003B80]' : 'bg-gray-300'
                                }`}
                        >
                            <span
                                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 ${data.status === 'Activa' ? 'translate-x-9' : 'translate-x-1'
                                    }`}
                            />
                        </button>
                        <span className={`text-sm font-semibold ${data.status === 'Activa' ? 'text-[#003B80]' : 'text-gray-500'
                            }`}>
                            {data.status}
                        </span>
                    </div>

                    {/* Botones */}
                    <div className="flex gap-3">
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
                    </div>
                </motion.div>
            </form>

            {/* Scrollbar custom styles */}
            <style>{`
            .custom-scrollbar::-webkit-scrollbar {
                width: 8px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
                background: #f1f1f1;
                border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
                background: #003B80;
                border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: #002855;
            }
        `}</style>
        </>
    );
};

export default EditJobOfferForm;
