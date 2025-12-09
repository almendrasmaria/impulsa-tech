import React from 'react';
import Card from '../components/Card';
import PostulantesTable from '../components/PostulantesTable';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const CompanyDashboardPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#FAFDFF]">
            <main className="max-w-7xl mx-auto px-4 py-8">
                {/* Header Section */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Panel de Empresa</h1>
                    <p className="text-gray-600">Gestiona tus ofertas laborales y postulantes</p>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <Card className="p-6 hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Publicar Oferta</h3>
                        <p className="text-gray-600 text-sm mb-4">Crea una nueva oferta laboral</p>
                        <Button variant="primary" onClick={() => navigate('/crear-oferta')}>
                            Nueva Oferta
                        </Button>
                    </Card>

                    <Card className="p-6 hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Mis Ofertas</h3>
                        <p className="text-gray-600 text-sm mb-4">Ver todas las ofertas publicadas</p>
                        <Button variant="primary" onClick={() => navigate('/mis-ofertas')}>
                            Ver Ofertas
                        </Button>
                    </Card>

                    <Card className="p-6 hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Perfil Empresa</h3>
                        <p className="text-gray-600 text-sm mb-4">Edita tu información corporativa</p>
                        <Button variant="primary" onClick={() => navigate('/perfil-empresa')}>
                            Editar Perfil
                        </Button>
                    </Card>
                </div>

                {/* Postulantes Section */}
                <Card className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800">Postulantes Recientes</h2>
                            <p className="text-gray-600 text-sm mt-1">Gestiona los candidatos a tus ofertas</p>
                        </div>
                    </div>
                    <PostulantesTable />
                </Card>
            </main>
        </div>
    );
};

export default CompanyDashboardPage;
