import { useRoutes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import OpportunitiesPage from "../pages/OpportunitiesPage";
import CompanyProfilePage from '../pages/CompanyProfilePage';
import JobOfferFormPage from '../pages/JobOfferFormPage';
import JobOffersTablePage from '../pages/JobOffersTablePage';
import PostulantesTablePage from '../pages/PostulantesTablePage';

const Rutas = () => {
  const routes = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: "/oportunidades", element: <OpportunitiesPage /> },
    { path: '/empresa', element: <CompanyProfilePage /> },
    { path: '/oferta', element: <JobOfferFormPage /> },
    { path: '/ofertas', element: <JobOffersTablePage /> },
    { path: '/postulantes', element: <PostulantesTablePage /> },
    { path: '*', element: <div style={{ padding: '4rem', textAlign: 'center' }}>Página no encontrada</div> }
  ]);
  return routes;
};

export default Rutas;
