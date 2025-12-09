import React from 'react';
import { LuMapPin, LuGlobe, LuMail, LuBuilding2, LuClock } from 'react-icons/lu';
import { motion } from 'framer-motion';
import { opportunities } from '../data/opportunities';

// Datos de ejemplo - en producción vendrían de una API basados en CompanyProfile
const companyData = {
    name: 'Corteva Agriscience',
    avatar: 'images/logo-corteva.png',
    industry: 'Agrociencia',
    website: 'https://corteva.com.ar',
    email: 'contacto@corteva.com',
    description: 'Somos una empresa líder en soluciones agrícolas innovadoras. Nos especializamos en desarrollo de productos y servicios para el campo. Nuestro equipo está formado por profesionales apasionados por la agricultura y comprometidos con la excelencia.',
};

const PublicCompanyProfilePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#FAFDFF]">
            {/* Cover Image */}
            <div className="w-full h-64 bg-gradient-to-r from-[#003B80] to-[#0058A3] relative">
                <div className="absolute inset-0 bg-black opacity-10"></div>
            </div>

            {/* Profile Header */}
            <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-10">
                <motion.div 
                    className="bg-white rounded-2xl shadow-lg p-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        {/* Avatar */}
                        <div className="w-32 h-32 bg-white rounded-full shadow-md flex items-center justify-center border-4 border-white overflow-hidden flex-shrink-0">
                            {companyData.avatar ? (
                                <img
                                    src={companyData.avatar}
                                    alt={companyData.name}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                                    <svg
                                        className="w-16 h-16 text-gray-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                                    </svg>
                                </div>
                            )}
                        </div>

                        {/* Company Info */}
                        <div className="flex-1">
                            <h1 className="text-3xl font-bold text-gray-800 mb-2">{companyData.name}</h1>
                            <p className="text-lg text-gray-600 mb-4">{companyData.industry}</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                <div className="flex items-center gap-2 text-gray-600">
                                    <LuGlobe className="w-4 h-4 text-[#003B80]" />
                                    <a href={companyData.website} target="_blank" rel="noopener noreferrer" className="text-[#003B80] hover:underline">
                                        {companyData.website}
                                    </a>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <LuMail className="w-4 h-4 text-[#003B80]" />
                                    <a href={`mailto:${companyData.email}`} className="text-[#003B80] hover:underline">
                                        {companyData.email}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 py-8">
                <div className="space-y-6">
                    {/* About */}
                    <motion.div 
                        className="bg-white rounded-2xl shadow-sm p-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <LuBuilding2 className="w-6 h-6 text-[#003B80]" />
                            Sobre la Empresa
                        </h2>
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">{companyData.description}</p>
                    </motion.div>

                    {/* Active Positions */}
                    <motion.div 
                        className="bg-white rounded-2xl shadow-sm p-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Ofertas Laborales Activas</h2>
                        <div className="space-y-4">
                            {opportunities.map((position, index) => (
                                <motion.div 
                                    key={position.id} 
                                    className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.01 }}
                                >
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-xl font-semibold text-gray-800">{position.position}</h3>
                                    </div>

                                    <div className="flex flex-wrap gap-3 mb-4">
                                        <span className="flex items-center gap-1 text-sm text-gray-600">
                                            <LuMapPin className="w-4 h-4" />
                                            {position.location}
                                        </span>
                                        <span className="px-3 py-1 bg-blue-50 text-[#003B80] rounded-full text-sm font-medium">
                                            {position.modality}
                                        </span>
                                        <span className="flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                                            <LuClock className="w-4 h-4" />
                                            {position.schedule}
                                        </span>
                                    </div>

                                    <p className="text-gray-700 leading-relaxed mb-4">{position.description}</p>

                                    <motion.button 
                                        className="px-6 py-2 bg-[#003B80] text-white rounded-full hover:bg-[#002A5C] transition-colors font-medium"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Ver detalles
                                    </motion.button>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
};

export default PublicCompanyProfilePage;
