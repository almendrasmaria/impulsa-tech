import React from 'react';
import { useToast } from './ToastProvider';
import Button from './Button';

const estados = ['En revisión', 'Entrevistado', 'Descartado', 'Seleccionado'];

export interface Postulante {
    id: number;
    nombre: string;
    apellido: string;
    curriculum: string;
    estado: string;
}

interface PostulantesTableProps {
    postulantes: Postulante[];
    onEstadoChange: (id: number, nuevoEstado: string) => void;
}

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


const PostulantesTable: React.FC<PostulantesTableProps> = ({ postulantes, onEstadoChange }) => {
    const { showToast } = useToast();
    const handleEstadoChange = (id: number, nuevoEstado: string) => {
        onEstadoChange(id, nuevoEstado);
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
                            <TableCell className="md:table-cell flex flex-col md:flex-row md:items-center max-w-full break-words">
                                <span className="block md:hidden text-xs text-gray-500 mb-1">Nombre y Apellido</span>
                                {postulante.nombre} {postulante.apellido}
                            </TableCell>
                            <TableCell className="md:table-cell flex flex-col md:flex-row md:items-center max-w-full break-words">
                                <span className="block md:hidden text-xs text-gray-500 mb-1">Curriculum</span>
                                <a href={postulante.curriculum} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline text-sm">Ver curriculum</a>
                            </TableCell>
                            <TableCell className="md:table-cell flex flex-col md:flex-row md:items-center max-w-full break-words">
                                <span className="block md:hidden text-xs text-gray-500 mb-1">Estado</span>
                                <select
                                    value={postulante.estado}
                                    onChange={e => handleEstadoChange(postulante.id, e.target.value)}
                                    className="border rounded px-2 py-1 text-sm"
                                >
                                    {estados.map(e => (
                                        <option key={e} value={e}>{e}</option>
                                    ))}
                                </select>
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
