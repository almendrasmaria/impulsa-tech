
import React, { useState } from 'react';
import { useToast } from './ToastProvider';
import Button from './Button';
import Select from './Select';

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

const PostulantesTable: React.FC = () => {
    const [postulantes, setPostulantes] = useState(initialPostulantes);
    const { showToast } = useToast();

    const handleEstadoChange = (id: number, nuevoEstado: string) => {
        setPostulantes(postulantes.map(p => p.id === id ? { ...p, estado: nuevoEstado } : p));
        showToast(`Estado actualizado a "${nuevoEstado}"`, 'success');
    };

    return (
        <div className="w-full">
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
                    {postulantes.map(postulante => (
                        <TableRow key={postulante.id} className="bg-white rounded-xl shadow-sm flex flex-col md:table-row mb-4 md:mb-0 max-w-full">
                            <TableCell className="md:table-cell flex flex-col md:flex-row md:items-center max-w-full break-words text-gray-700">
                                <span className="block md:hidden text-xs text-gray-500 mb-1">Nombre y Apellido</span>
                                {postulante.nombre} {postulante.apellido}
                            </TableCell>
                            <TableCell className="md:table-cell flex flex-col md:flex-row md:items-center max-w-full break-words">
                                <span className="block md:hidden text-xs text-gray-500 mb-1">Curriculum</span>
                                <a href={postulante.curriculum} target="_blank" rel="noopener noreferrer" className="text-[#0058A3] underline text-sm hover:text-[#003B80]">Ver curriculum</a>
                            </TableCell>
                            <TableCell className="md:table-cell flex flex-col md:flex-row md:items-center max-w-full break-words">
                                <span className="block md:hidden text-xs text-gray-500 mb-1">Estado</span>
                                <Select
                                    value={postulante.estado}
                                    onChange={e => handleEstadoChange(postulante.id, e.target.value)}
                                    className="border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0058A3] w-full"
                                    name="estado"
                                >
                                    {estados.map(e => (
                                        <option key={e} value={e}>{e}</option>
                                    ))}
                                </Select>
                            </TableCell>
                            <TableCell className="md:table-cell flex flex-col md:flex-row md:items-center max-w-full break-words">
                                <span className="block md:hidden text-xs text-gray-500 mb-1">Acción</span>
                                <Button variant="secondary">Ver perfil</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default PostulantesTable;
