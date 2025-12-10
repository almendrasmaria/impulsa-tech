import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from './ToastProvider';
import Card from './Card';
import Button from './Button';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';
import Label from './Label';
import { LuBriefcase, LuClock, LuMapPin, LuMonitor, LuFileText } from 'react-icons/lu';

const defaultData = {
    title: '',
    jornada: '',
    modalidad: '',
    location: '',
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


const JobOfferForm: React.FC = () => {
    const [data, setData] = useState(defaultData);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSelectChange = (name: string) => (value: string) => {
        setData({ ...data, [name]: value });
    };

    const { showToast } = useToast();
    const handlePublish = () => {
        showToast('Oferta publicada exitosamente', 'success');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#E8F0FF] via-[#FAFDFF] to-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
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
                                <h1 className="text-3xl font-bold text-gray-800 mb-2">Crear Nueva Oferta</h1>
                                <p className="text-gray-600">Completa la información de la oferta laboral</p>
                            </motion.div>

                            <div className="p-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                    {/* Título */}
                                    <motion.div
                                        className="text-left"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: 0.2 }}
                                    >
                                        <Label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                                            <LuBriefcase className="w-4 h-4 text-[#003B80]" />
                                            Título del Puesto
                                        </Label>
                                        <Input
                                            className="w-full border border-gray-300 rounded-lg py-3 px-4 transition-all focus:border-[#003B80] focus:ring-2 focus:ring-[#003B80]/20"
                                            name="title"
                                            value={data.title}
                                            onChange={handleChange}
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
                                            value={data.jornada}
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
                                        transition={{ duration: 0.4, delay: 0.4 }}
                                    >
                                        <Label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                                            <LuMonitor className="w-4 h-4 text-[#003B80]" />
                                            Modalidad
                                        </Label>
                                        <Select
                                            value={data.modalidad}
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
                                        transition={{ duration: 0.4, delay: 0.5 }}
                                    >
                                        <Label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                                            <LuMapPin className="w-4 h-4 text-[#003B80]" />
                                            Ubicación
                                        </Label>
                                        <Input
                                            className="w-full border border-gray-300 rounded-lg py-3 px-4 transition-all focus:border-[#003B80] focus:ring-2 focus:ring-[#003B80]/20"
                                            name="location"
                                            value={data.location}
                                            onChange={handleChange}
                                            placeholder="Ej: Buenos Aires, Argentina"
                                        />
                                    </motion.div>
                                </div>

                                {/* Descripción */}
                                <motion.div
                                    className="mb-8 text-left"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.6 }}
                                >
                                    <Label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                                        <LuFileText className="w-4 h-4 text-[#003B80]" />
                                        Descripción
                                    </Label>
                                    <Textarea
                                        className="w-full border border-gray-300 rounded-lg py-3 px-4 h-40 resize-none transition-all focus:border-[#003B80] focus:ring-2 focus:ring-[#003B80]/20"
                                        name="description"
                                        value={data.description}
                                        onChange={handleChange}
                                        placeholder="Escribí la descripción del puesto, requisitos, responsabilidades..."
                                        required
                                    />
                                </motion.div>

                                {/* Botones */}
                                <motion.div
                                    className="flex justify-end gap-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.4, delay: 0.7 }}
                                >
                                    <Button
                                        type="button"
                                        variant="secondary"
                                    >
                                        Cancelar
                                    </Button>
                                    <Button
                                        type="button"
                                        onClick={handlePublish}
                                        variant="primary"
                                    >
                                        Publicar Oferta
                                    </Button>
                                </motion.div>
                            </div>
                        </form>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
};

export default JobOfferForm;
