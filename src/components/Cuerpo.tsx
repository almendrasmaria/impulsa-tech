import React, { useState } from 'react';
import { Share2, Link, Mail, MessageSquare, Linkedin, CheckCircle2 } from 'lucide-react';

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
    let baseStyles = 'px-3 py-1 rounded-lg text-sm font-semibold transition-colors duration-200';
    
    switch (type) {
        case 'skill':
        case 'modality':
            baseStyles += ' bg-blue-100 text-blue-800';
            break;
        case 'level':
            baseStyles += ' bg-indigo-100 text-indigo-800'; 
            break;
        case 'jornada':
            baseStyles += ' bg-gray-200 text-gray-700';
            break;
        default:
            baseStyles += ' bg-blue-100 text-blue-800';
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
        <div className="border-b border-gray-200 lg:border-none">
            <button
                onClick={onToggle}
                className="w-full flex justify-between items-center py-4 text-left font-bold text-gray-800 focus:outline-none lg:p-0 relative z-10" 
                aria-expanded={isOpen}
            >
                <span className="text-base md:text-lg text-blue-800">{titulo}</span>
                <svg 
                    className={`w-5 h-5 text-blue-600 transition-transform duration-300 lg:hidden ${isOpen ? 'transform rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M19 9l-7 7-7-7"
                    ></path>
                </svg>
            </button>

            <div 
                className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen opacity-100 pb-4 lg:pb-0' : 'max-h-0 opacity-0 p-0'}`} 
            >
                <div className="lg:block">
                    {contenido}
                </div>
            </div>
        </div>
    );
};

const DetalleOferta: React.FC = () => {
    const [openSection, setOpenSection] = useState<string | null>(null);
    const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);
    const [toast, setToast] = useState<{ message: string; visible: boolean }>({
        message: '',
        visible: false,
    });

    const showToast = (message: string) => {
        setToast({ message, visible: true });
        setTimeout(() => setToast({ message: '', visible: false }), 3000);
    };

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
        { name: 'Copiar Enlace', icon: Link, action: () => handleShareAction('enlace') },
        { name: 'WhatsApp', icon: MessageSquare, action: () => window.open(`https://wa.me/?text=${encodeURIComponent(`${offerTitle} - ${offerUrl}`)}`, '_blank') },
        { name: 'Mail', icon: Mail, action: () => window.open(`mailto:?subject=${encodeURIComponent(offerTitle)}&body=${encodeURIComponent(`Mira esta oferta: ${offerUrl}`)}`) },
        { name: 'LinkedIn', icon: Linkedin, action: () => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(offerUrl)}`, '_blank') },
    ];

    return (
        <main className="flex justify-center p-4 lg:p-10 bg-gray-50 min-h-screen relative">
            {toast.visible && (
                <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 animate-bounce-in">
                    <div className="bg-blue-800 text-white px-6 py-3 rounded-full shadow-2xl flex items-center space-x-2 border border-blue-400">
                        <CheckCircle2 className="w-5 h-5 text-blue-200" />
                        <span className="font-semibold">{toast.message}</span>
                    </div>
                </div>
            )}

            <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/3 space-y-6">
                    <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
                        <div className="flex items-start mb-4">
                            <img 
                                src={ofertaData.logoUrl} 
                                alt="Logo de la Empresa" 
                                className="w-12 h-12 object-contain mr-4 rounded-lg"
                            />
                            <div>
                                <h1 className="text-xl md:text-2xl font-bold text-gray-900">{ofertaData.titulo}</h1>
                                <p className="text-blue-700 font-medium hover:underline cursor-pointer">{ofertaData.empresa}</p>
                            </div>
                        </div>

                        <div className="hidden lg:flex justify-between items-center mb-4">
                            <div className="flex space-x-2">
                                {ofertaData.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
                                <Tag type="modality">{ofertaData.modalidad}</Tag>
                                <Tag type="level">{ofertaData.nivel}</Tag>
                            </div>
                            <div className="text-right flex items-center space-x-4">
                                <p className="text-sm text-gray-500">Publicado: {ofertaData.publicado}</p>
                                <Tag type="jornada">{ofertaData.jornada}</Tag>
                            </div>
                        </div>

                        <div className="flex lg:hidden flex-wrap gap-2 mb-4">
                            {ofertaData.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
                            <Tag type="modality">{ofertaData.modalidad}</Tag>
                            <Tag type="level">{ofertaData.nivel}</Tag>
                        </div>
                        
                         <div className="lg:hidden flex justify-between items-center text-sm text-gray-500 border-t pt-4">
                            <p>Publicado: {ofertaData.publicado}</p>
                            <Tag type="jornada">{ofertaData.jornada}</Tag>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
                        <div className="space-y-6 detalle-oferta-acordeon">
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
                    </div>
                </div>

                <div className="lg:w-1/3">
                    <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8 sticky top-4">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Información del Puesto</h3>
                        <div className="space-y-2 text-gray-700 mb-6">
                            <p className="flex justify-between">
                                <span className="font-semibold">Inicio:</span> 
                                <span>{ofertaData.inicio}</span>
                            </p>
                            <p className="flex justify-between">
                                <span className="font-semibold">Duración:</span> 
                                <span>{ofertaData.duracion}</span>
                            </p>
                            <p className="flex justify-between">
                                <span className="font-semibold">Horas/sem:</span> 
                                <span>{ofertaData.horasSemana}</span>
                            </p>
                        </div>

                        <button
                            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 rounded-xl transition duration-300 mb-3"
                            onClick={() => showToast('¡Te has postulado con éxito!')}
                        >
                            Postularme ahora
                        </button>
                        
                        <div className="relative">
                            <button
                                className="w-full bg-white border border-blue-700 text-blue-700 hover:bg-blue-50 font-bold py-3 rounded-xl transition duration-300 flex items-center justify-center"
                                onClick={toggleShareMenu}
                            >
                                <Share2 className="w-5 h-5 mr-2" />
                                Compartir
                            </button>

                            {isShareMenuOpen && (
                                <div className="absolute right-0 mt-2 w-full lg:w-64 bg-white border border-gray-200 rounded-lg shadow-xl z-10 origen-compartir">
                                    <div className="py-1">
                                        {shareOptions.map((option) => (
                                            <button
                                                key={option.name}
                                                onClick={option.action}
                                                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                                            >
                                                <option.icon className="w-4 h-4 mr-3 text-blue-600" />
                                                {option.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default DetalleOferta;