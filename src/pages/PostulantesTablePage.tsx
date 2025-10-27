import React, { useState } from 'react';
import Card from '../components/Card';
import PostulantesTable, { Postulante } from '../components/PostulantesTable';

const postulantesDemo = [
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

const estados = ['En revisión', 'Entrevistado', 'Descartado', 'Seleccionado'];


const PostulantesTablePage: React.FC = () => {
    const [postulantes, setPostulantes] = useState(postulantesDemo);

    const handleEstadoChange = (id: number, nuevoEstado: string) => {
        setPostulantes(postulantes.map(p => p.id === id ? { ...p, estado: nuevoEstado } : p));
    };

    return (
        <div className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden bg-gray-100 min-h-screen flex items-center justify-center">
            <Card className="w-full max-w-2xl rounded-2xl shadow-sm p-6 gap-4" header="Postulantes" headerClassName="text-left">
                <PostulantesTable postulantes={postulantes} onEstadoChange={handleEstadoChange} />
            </Card>
        </div>
    );
};

export default PostulantesTablePage;
