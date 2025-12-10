import React from 'react';
import { motion } from 'framer-motion';
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
                <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Panel de Empresa</h1>
                    <p className="text-gray-600">Gestiona tus ofertas laborales y postulantes</p>
                </motion.div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        whileHover={{ y: -5 }}
                    >
                        <Card className="p-6 hover:shadow-md transition-shadow h-full">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Publicar Oferta</h3>
                            <p className="text-gray-600 text-sm mb-4">Crea una nueva oferta laboral</p>
                            <Button variant="primary" onClick={() => navigate('/crear-oferta')}>
                                Nueva Oferta
                            </Button>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        whileHover={{ y: -5 }}
                    >
                        <Card className="p-6 hover:shadow-md transition-shadow h-full">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Mis Ofertas</h3>
                            <p className="text-gray-600 text-sm mb-4">Ver todas las ofertas publicadas</p>
                            <Button variant="primary" onClick={() => navigate('/mis-ofertas')}>
                                Ver Ofertas
                            </Button>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        whileHover={{ y: -5 }}
                    >
                        <Card className="p-6 hover:shadow-md transition-shadow h-full">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Perfil Empresa</h3>
                            <p className="text-gray-600 text-sm mb-4">Edita tu información corporativa</p>
                            <Button variant="primary" onClick={() => navigate('/perfil-empresa')}>
                                Editar Perfil
                            </Button>
                        </Card>
                    </motion.div>
                </div>

                {/* Postulantes Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Card className="p-6 bg-white">
                        <div className="bg-white">
                            <PostulantesTable showBackground={false} />
                        </div>
                    </Card>
                </motion.div>
            </main>
        </div>
    );
};

export default CompanyDashboardPage;
