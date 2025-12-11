import React, { useState } from 'react';
import { motion } from 'framer-motion';

import {
  FaShareAlt,
  FaLink,
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaCalendarAlt,
  FaClock,
  FaBriefcase,
  FaUsers
} from "react-icons/fa";

import { useToast } from './ToastProvider';
import Card from './Card';
import Button from './Button';

interface Oferta {
    titulo: string;
    empresa: string;
    logoUrl: string;
    tags: string[];
    modalidad: string;
    nivel: string;
    publicado: string;
    jornada: string;
    inicio: string;
    duracion: string;
    horasSemana: string;
    descripcion: string;
    responsabilidades: string[];
    requisitos: string[];
    beneficios: string[];
}

const ofertaData: Oferta = {
    titulo: 'Desarrollador Frontend',
    empresa: 'Empresa X',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/L%27Or%C3%A9al_logo.svg/1200px-L%27Or%C3%A9al_logo.svg.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    modalidad: 'Híbrido',
    nivel: 'Junior',
    publicado: '1 oct 2025',
    jornada: 'Part-time',
    inicio: '10 oct 2025',
    duracion: '1 mes',
    horasSemana: '20-30 hrs/sem',
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi autem dolore, unde officiis, hic. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi autem dolore, unde officiis, hic. Lorem ipsum dolor sit amet, consectetur sunt nemo tenetur consequatu Lorem ipsum dolor sit amet, consectetur sunt nemo tenetur consequatu',
    responsabilidades: [
        'Lorem ipsum dolor sit amet, consectetur sunt nemo tenetur consequatu',
        'Lorem ipsum dolor sit amet, consectetur sunt nemo tenetur consequatu',
        'Lorem ipsum dolor sit amet, consectetur sunt nemo tenetur consequatu',
    ],
    requisitos: [
        'Lorem ipsum dolor sit amet, consectetur sunt nemo tenetur consequatu',
        'Lorem ipsum dolor sit amet, consectetur sunt nemo tenetur consequatu',
        'Lorem ipsum dolor sit amet, consectetur sunt nemo tenetur consequatu',
    ],
    beneficios: [
        'Lorem ipsum dolor sit amet, consectetur sunt nemo tenetur consequatu',
        'Lorem ipsum dolor sit amet, consectetur sunt nemo tenetur consequatu',
        'Lorem ipsum dolor sit amet, consectetur sunt nemo tenetur consequatu',
    ],
};

const Tag: React.FC<{ children: React.ReactNode, type?: 'skill' | 'level' | 'modality' | 'jornada' }> = ({ children, type = 'skill' }) => {
    let baseStyles = 'px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200';

    switch (type) {
        case 'skill':
            baseStyles += ' bg-[#E8F0FF] text-[#003B80] border border-[#003B80]/20';
            break;
        case 'modality':
            baseStyles += ' bg-blue-50 text-blue-700 border border-blue-200';
            break;
        case 'level':
            baseStyles += ' bg-indigo-50 text-indigo-700 border border-indigo-200';
            break;
        case 'jornada':
            baseStyles += ' bg-gray-100 text-gray-700 border border-gray-300';
            break;
        default:
            baseStyles += ' bg-[#E8F0FF] text-[#003B80] border border-[#003B80]/20';
    }

    return <span className={baseStyles}>{children}</span>;
};

const CollapsibleSection: React.FC<{
    titulo: string;
    contenido: React.ReactNode;
    isOpen: boolean;
    onToggle: () => void;
}> = ({ titulo, contenido, isOpen, onToggle }) => {
    return (
        <div className="border-b border-gray-200 last:border-b-0">
            <button
                onClick={onToggle}
                className="w-full flex justify-between items-center py-4 text-left font-semibold text-gray-800 hover:text-[#003B80] transition-colors focus:outline-none"
                aria-expanded={isOpen}
            >
                <span className="text-base md:text-lg text-[#003B80]">{titulo}</span>
                <motion.svg
                    className="w-5 h-5 text-[#003B80]"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    ></path>
                </motion.svg>
            </button>

            <motion.div
                initial={false}
                animate={{
                    height: isOpen ? 'auto' : 0,
                    opacity: isOpen ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
            >
                <div className="pb-4">
                    {contenido}
                </div>
            </motion.div>
        </div>
    );
};

const DetalleOferta: React.FC = () => {
    const [openSection, setOpenSection] = useState<string | null>(null);
    const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);
    const { showToast } = useToast();

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    const toggleShareMenu = () => {
        setIsShareMenuOpen(!isShareMenuOpen);
    };

    const handleShareAction = (platform: string) => {
        if (platform === 'enlace') {
            navigator.clipboard.writeText(window.location.href);
            showToast('¡Enlace copiado correctamente!');
        }
        setIsShareMenuOpen(false);
    };

    const offerUrl = "https://www.impulsatech.com/oferta/123";
    const offerTitle = "Desarrollador Frontend - Empresa X";

    const shareOptions = [
        { name: 'Copiar Enlace', icon: FaLink, action: () => handleShareAction('enlace') },
        { name: 'WhatsApp', icon: FaWhatsapp, action: () => window.open(`https://wa.me/?text=${encodeURIComponent(`${offerTitle} - ${offerUrl}`)}`, '_blank') },
        { name: 'Mail', icon: FaEnvelope, action: () => window.open(`mailto:?subject=${encodeURIComponent(offerTitle)}&body=${encodeURIComponent(`Mira esta oferta: ${offerUrl}`)}`) },
        { name: 'LinkedIn', icon: FaLinkedin, action: () => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(offerUrl)}`, '_blank') },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#E8F0FF] via-[#FAFDFF] to-white py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                    <div className="lg:col-span-2 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="hover:shadow-xl transition-shadow duration-300">
                                <div className="flex items-start gap-4 mb-6">
                                    <img
                                        src={ofertaData.logoUrl}
                                        alt="Logo de la Empresa"
                                        className="w-16 h-16 object-contain rounded-full border border-gray-200"
                                    />
                                    <div className="flex-1">
                                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{ofertaData.titulo}</h1>
                                        <p className="text-[#003B80] font-semibold hover:underline cursor-pointer">{ofertaData.empresa}</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {ofertaData.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
                                    <Tag type="modality">{ofertaData.modalidad}</Tag>
                                    <Tag type="level">{ofertaData.nivel}</Tag>
                                    <Tag type="jornada">{ofertaData.jornada}</Tag>
                                </div>

                                <div className="flex items-center text-sm text-gray-600 pt-4 border-t border-gray-200">
                                    <FaCalendarAlt className="w-4 h-4 mr-2 text-[#003B80]" />
                                    <span>Publicado: {ofertaData.publicado}</span>
                                </div>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <Card className="hover:shadow-xl transition-shadow duration-300">
                                <div className="space-y-1">
                                    <CollapsibleSection
                                        titulo="Descripcion breve"
                                        isOpen={openSection === 'descripcion'}
                                        onToggle={() => toggleSection('descripcion')}
                                        contenido={
                                            <p className="text-sm text-gray-600 leading-relaxed">
                                                {ofertaData.descripcion}
                                            </p>
                                        }
                                    />

                                    <CollapsibleSection
                                        titulo="Responsabilidades"
                                        isOpen={openSection === 'responsabilidades'}
                                        onToggle={() => toggleSection('responsabilidades')}
                                        contenido={
                                            <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                                                {ofertaData.responsabilidades.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        }
                                    />

                                    <CollapsibleSection
                                        titulo="Requisitos"
                                        isOpen={openSection === 'requisitos'}
                                        onToggle={() => toggleSection('requisitos')}
                                        contenido={
                                            <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                                                {ofertaData.requisitos.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        }
                                    />

                                    <CollapsibleSection
                                        titulo="Beneficios"
                                        isOpen={openSection === 'beneficios'}
                                        onToggle={() => toggleSection('beneficios')}
                                        contenido={
                                            <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                                                {ofertaData.beneficios.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        }
                                    />
                                </div>
                            </Card>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="sticky top-4"
                        >
                            <Card className="hover:shadow-xl transition-shadow duration-300">
                                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <FaBriefcase className="w-5 h-5 text-[#003B80]" />
                                    Información del Puesto
                                </h3>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center justify-between text-gray-700 py-2 border-b border-gray-100">
                                        <span className="flex items-center gap-2 font-medium text-sm">
                                            <FaCalendarAlt className="w-4 h-4 text-[#003B80]" />
                                            Inicio
                                        </span>
                                        <span className="text-sm">{ofertaData.inicio}</span>
                                    </div>

                                    <div className="flex items-center justify-between text-gray-700 py-2 border-b border-gray-100">
                                        <span className="flex items-center gap-2 font-medium text-sm">
                                            <FaClock className="w-4 h-4 text-[#003B80]" />
                                            Duración
                                        </span>
                                        <span className="text-sm">{ofertaData.duracion}</span>
                                    </div>

                                    <div className="flex items-center justify-between text-gray-700 py-2">
                                        <span className="flex items-center gap-2 font-medium text-sm">
                                            <FaUsers className="w-4 h-4 text-[#003B80]" />
                                            Horas/sem
                                        </span>
                                        <span className="text-sm">{ofertaData.horasSemana}</span>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <Button
                                        variant="primary"
                                        className="w-full"
                                        onClick={() => showToast('¡Te has postulado con éxito!')}
                                    >
                                        Postularme ahora
                                    </Button>

                                    <div className="relative">
                                        <Button
                                            variant="secondary"
                                            className="w-full flex items-center justify-center gap-2"
                                            onClick={toggleShareMenu}
                                        >
                                            <FaShareAlt className="w-4 h-4" />
                                            Compartir
                                        </Button>

                                        {isShareMenuOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="absolute right-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-xl z-10"
                                            >
                                                <div className="py-1">
                                                    {shareOptions.map((option) => (
                                                        <button
                                                            key={option.name}
                                                            onClick={option.action}
                                                            className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-[#E8F0FF] hover:text-[#003B80] flex items-center transition-colors"
                                                        >
                                                            <option.icon className="w-4 h-4 mr-3 text-[#003B80]" />
                                                            {option.name}
                                                        </button>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetalleOferta;