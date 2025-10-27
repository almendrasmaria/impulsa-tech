import React from 'react'
import { ToastProvider } from './components/ToastProvider';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import CompanyProfilePage from './pages/CompanyProfilePage';
import JobOfferFormPage from './pages/JobOfferFormPage';
import JobOffersTablePage from './pages/JobOffersTablePage';
import PostulantesTablePage from './pages/PostulantesTablePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element not found')

createRoot(rootElement).render(
    <React.StrictMode>
        <ToastProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/perfil-empresa" element={<CompanyProfilePage />} />
                    <Route path="/crear-oferta" element={<JobOfferFormPage />} />
                    <Route path="/mis-ofertas" element={<JobOffersTablePage />} />
                    <Route path="/postulantes-table" element={<PostulantesTablePage />} />
                </Routes>
            </BrowserRouter>
        </ToastProvider>
    </React.StrictMode>
)