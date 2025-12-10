
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from './ToastProvider';
import Select from './Select';
import Card from './Card';
import { LuUsers, LuFileText, LuUser } from 'react-icons/lu';

const estados = ['En revisión', 'Entrevistado', 'Descartado', 'Seleccionado'];

const initialPostulantes = [
    {
        id: 1,
        nombre: 'Juan',
        apellido: 'Pérez',
        curriculum: 'https://ejemplo.com/cv-juan.pdf',
        estado: 'En revisión',
    },
    {
        id: 2,
        nombre: 'María',
        apellido: 'Gómez',
        curriculum: 'https://ejemplo.com/cv-maria.pdf',
        estado: 'Entrevistado',
    },
    {
        id: 3,
        nombre: 'Carlos',
        apellido: 'López',
        curriculum: 'https://ejemplo.com/cv-carlos.pdf',
        estado: 'Descartado',
    },
];

const Table = ({ children }: { children: React.ReactNode }) => (
    <table className="w-full text-left border-separate border-spacing-y-2">{children}</table>
);
const TableRow = ({ children, ...props }: { children: React.ReactNode } & React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className="bg-white flex flex-col min-w-0 flex-grow break-words md:table-row max-w-full" {...props}>{children}</tr>
);
const TableCell = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <td className={`py-3 px-4 align-middle max-w-full break-words ${className || ''}`}>{children}</td>
);
const TableHeaderCell = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <th className={`py-3 px-4 align-middle font-semibold text-gray-700 text-sm max-w-full break-words ${className || ''}`}>{children}</th>
);

interface PostulantesTableProps {
    showBackground?: boolean;
}

const PostulantesTable: React.FC<PostulantesTableProps> = ({ showBackground = true }) => {
    const [postulantes, setPostulantes] = useState(initialPostulantes);
    const { showToast } = useToast();

    const handleEstadoChange = (id: number, nuevoEstado: string) => {
        setPostulantes(postulantes.map(p => p.id === id ? { ...p, estado: nuevoEstado } : p));
        showToast(`Estado actualizado a "${nuevoEstado}"`);
    };

    return (
        <div className={showBackground ? "min-h-screen bg-gradient-to-br from-[#E8F0FF] via-[#FAFDFF] to-white py-12 px-4 sm:px-6 lg:px-12" : "py-6"}>
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        {/* Header Section */}
                        <motion.div
                            className="px-8 pt-8 pb-6 border-b border-gray-200"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex items-center gap-3">
                                <LuUsers className="w-8 h-8 text-[#003B80]" />
                                <div>
                                    <h1 className="text-3xl font-bold text-gray-800">Postulantes</h1>
                                    <p className="text-gray-600 text-sm mt-1">Gestiona los candidatos a tus ofertas</p>
                                </div>
                            </div>
                        </motion.div>

                        <div className="p-8">
                            <div className="overflow-x-auto max-h-[600px] overflow-y-auto custom-scrollbar">
                                <Table>
                                    <thead className="hidden md:table-header-group">
                                        <TableRow>
                                            <TableHeaderCell className="max-w-full break-words">Nombre y Apellido</TableHeaderCell>
                                            <TableHeaderCell className="max-w-full break-words">Curriculum</TableHeaderCell>
                                            <TableHeaderCell className="max-w-full break-words">Estado</TableHeaderCell>
                                            <TableHeaderCell className="max-w-full break-words">Acción</TableHeaderCell>
                                        </TableRow>
                                    </thead>
                                    <tbody>
                                        {postulantes.map((postulante, index) => (
                                            <motion.tr
                                                key={postulante.id}
                                                className="bg-white rounded-xl shadow-sm flex flex-col md:table-row mb-4 md:mb-0 max-w-full hover:shadow-md transition-shadow"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                            >
                                                <TableCell className="md:table-cell flex flex-col md:flex-row md:items-center max-w-full break-words text-gray-700 font-medium">
                                                    <span className="block md:hidden text-xs text-gray-500 mb-1">Nombre y Apellido</span>
                                                    <div className="flex items-center gap-2">
                                                        <LuUser className="w-4 h-4 text-[#003B80]" />
                                                        {postulante.nombre} {postulante.apellido}
                                                    </div>
                                                </TableCell>
                                                <TableCell className="md:table-cell flex flex-col md:flex-row md:items-center max-w-full break-words">
                                                    <span className="block md:hidden text-xs text-gray-500 mb-1">Curriculum</span>
                                                    <a 
                                                        href={postulante.curriculum} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer" 
                                                        className="text-[#003B80] underline text-sm hover:text-[#002A5C] flex items-center gap-2"
                                                    >
                                                        <LuFileText className="w-4 h-4" />
                                                        Ver curriculum
                                                    </a>
                                                </TableCell>
                                                <TableCell className="md:table-cell flex flex-col md:flex-row md:items-center max-w-full break-words">
                                                    <span className="block md:hidden text-xs text-gray-500 mb-1">Estado</span>
                                                    <Select
                                                        value={postulante.estado}
                                                        onChange={(value) => handleEstadoChange(postulante.id, value)}
                                                        options={estados.map(e => ({ value: e, label: e }))}
                                                    />
                                                </TableCell>
                                                <TableCell className="md:table-cell flex flex-col md:flex-row md:items-center max-w-full break-words">
                                                    <span className="block md:hidden text-xs text-gray-500 mb-1">Acción</span>
                                                    <div className="w-full md:w-auto">
                                                        <button className="w-full md:w-auto bg-white border-2 border-[#003B80] text-[#003B80] py-2 px-6 rounded-full hover:bg-[#003B80] hover:text-white transition-colors text-sm font-medium shadow-sm">
                                                            Ver perfil
                                                        </button>
                                                    </div>
                                                </TableCell>
                                            </motion.tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
};

export default PostulantesTable;
