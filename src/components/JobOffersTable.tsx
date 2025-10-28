import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import Button from './Button';
import Modal from './Modal';
import EditJobOfferForm from './EditJobOfferForm';

const Badge = ({ status }: { status: 'Activa' | 'Inactiva' }) => {
    const base = 'px-3 py-1 rounded-full text-xs font-semibold';
    const active = 'bg-green-50 text-green-700';
    const inactive = 'bg-red-50 text-red-700';
    return (
        <span className={`${base} ${status === 'Activa' ? active : inactive}`}>{status}</span>
    );
};

const Table: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <table className="w-full text-left border-separate border-spacing-y-2">
        {children}
    </table>
);
const TableRow: React.FC<{ children: React.ReactNode } & React.HTMLAttributes<HTMLTableRowElement>> = ({ children, ...props }) => (
    <tr className="bg-white flex flex-col min-w-0 flex-grow break-words md:table-row" {...props}>{children}</tr>
);
const TableCell: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <td className={`py-3 px-4 align-middle ${className || ''}`}>{children}</td>
);
const TableHeaderCell: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <th className={`py-3 px-4 align-middle font-semibold text-gray-700 text-sm ${className || ''}`}>{children}</th>
);

// Demo data
const initialJobOffers = [
    {
        id: 1,
        title: 'Desarrollador Frontend',
        date: '20 de Octubre, 2025',
        status: 'Activa',
        jornada: 'Full Time',
        modalidad: 'Remoto',
        seniority: 'Semi Senior',
        description: 'Desarrolla interfaces modernas en React.'
    },
    {
        id: 2,
        title: 'QA Manual',
        date: '18 de Octubre, 2025',
        status: 'Inactiva',
        jornada: 'Part Time',
        modalidad: 'Presencial',
        seniority: 'Junior',
        description: 'Pruebas manuales y reporte de bugs.'
    },
    {
        id: 3,
        title: 'UX Designer',
        date: '15 de Octubre, 2025',
        status: 'Activa',
        jornada: 'Por Proyecto',
        modalidad: 'Híbrido',
        seniority: 'Senior',
        description: 'Diseño de experiencia de usuario.'
    },
];


const JobOffersTable: React.FC = () => {
    const [jobOffers, setJobOffers] = useState(initialJobOffers);
    const [editingOffer, setEditingOffer] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleEditClick = (offer: any) => {
        setEditingOffer(offer);
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
        setEditingOffer(null);
    };

    const handleSave = (updatedOffer: any) => {
        setJobOffers(jobOffers.map(o => o.id === updatedOffer.id ? updatedOffer : o));
        handleModalClose();
    };

    const handleDelete = (id: number) => {
        setJobOffers(jobOffers.filter(o => o.id !== id));
        handleModalClose();
    };

    return (
    <Card className="w-full max-w-3xl mx-auto rounded-2xl shadow-sm p-6 md:p-6 p-2" header="Ofertas laborales" headerClassName="text-left font-semibold text-gray-700 text-lg">
            <div className="w-full">
                <Table>
                    <thead className="hidden md:table-header-group">
                        <TableRow>
                            <TableHeaderCell className="max-w-full break-words">Título</TableHeaderCell>
                            <TableHeaderCell className="max-w-full break-words">Estado</TableHeaderCell>
                            <TableHeaderCell className="max-w-full break-words">Acción</TableHeaderCell>
                            <TableHeaderCell className="max-w-full break-words">Postulantes</TableHeaderCell>
                        </TableRow>
                    </thead>
                    <tbody>
                        {jobOffers.map((offer) => (
                            <TableRow key={offer.id} className="bg-white rounded-xl shadow-sm flex flex-col md:table-row mb-4 md:mb-0 max-w-full">
                                <TableCell className="md:table-cell flex flex-col md:flex-row md:items-center max-w-full break-words text-gray-700">
                                    <span className="block md:hidden text-xs text-gray-500 mb-1">Título</span>
                                    {offer.title}
                                </TableCell>
                                <TableCell className="md:table-cell flex flex-col md:flex-row md:items-center md:justify-start text-left max-w-full break-words">
                                    <span className="block md:hidden text-xs text-gray-500 mb-1 text-left">Estado</span>
                                    <div className="w-full flex md:block justify-start md:justify-start">
                                        <Badge status={offer.status as 'Activa' | 'Inactiva'} />
                                    </div>
                                </TableCell>
                                <TableCell className="md:table-cell flex flex-col md:flex-row md:items-center max-w-full break-words">
                                    <span className="block md:hidden text-xs text-gray-500 mb-1">Acción</span>
                                    <Button variant="primary" onClick={() => handleEditClick(offer)}>Editar</Button>
                                </TableCell>
                                <TableCell className="md:table-cell flex flex-col md:flex-row md:items-center max-w-full break-words">
                                    <span className="block md:hidden text-xs text-gray-500 mb-1">Postulantes</span>
                                    <motion.div whileTap={{ scale: 0.92 }} transition={{ type: 'spring', stiffness: 300 }}>
                                        <Button variant="secondary" onClick={() => navigate('/postulantes-table')}>Ver postulantes</Button>
                                    </motion.div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </tbody>
                </Table>
            </div>
            <Modal isOpen={modalOpen} onClose={handleModalClose} title="Editar oferta">
                {editingOffer && (
                    <EditJobOfferForm offer={editingOffer} onSave={handleSave} onDelete={handleDelete} />
                )}
            </Modal>
        </Card>
    );
}

export default JobOffersTable;
