import { useRoutes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import OpportunitiesPage from "../pages/OpportunitiesPage";
import CompanyProfilePage from '../pages/CompanyProfilePage';
import CompanyDashboardPage from '../pages/CompanyDashboardPage';
import PublicCompanyProfilePage from '../pages/PublicCompanyProfilePage';
import JobOfferFormPage from '../pages/JobOfferFormPage';
import JobOffersTablePage from '../pages/JobOffersTablePage';
import PostulantesTablePage from '../pages/PostulantesTablePage';
import ProfilePage from '../pages/ProfilePage';  
import EditProfilePage from '../pages/EditProfilePage';  
import Terminoscondiciones from "../pages/Terminoscondiciones";  
import Cookie from "../pages/Cookie";  

const Rutas = () => {
  const routes = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: "/oportunidades", element: <OpportunitiesPage /> },
    { path: '/perfil-empresa', element: <CompanyProfilePage /> },
    { path: '/empresa/:id', element: <PublicCompanyProfilePage /> },
    { path: '/panel-empresa', element: <CompanyDashboardPage /> },
    { path: '/crear-oferta', element: <JobOfferFormPage /> },
    { path: '/mis-ofertas', element: <JobOffersTablePage /> },
    { path: '/postulantes', element: <PostulantesTablePage /> },
    { path: '/perfil', element: <ProfilePage /> }, 
    { path: '/perfil/editar', element: <EditProfilePage /> },
    { path: "/cookie", element: <Cookie /> },  
    { path: "/Terminos", element: <Terminoscondiciones /> }, 
    { path: '*', element: <div style={{ padding: '4rem', textAlign: 'center' }}>Página no encontrada</div> }
  ]);

  return routes;
};

export default Rutas;
