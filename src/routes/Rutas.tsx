import { useRoutes } from "react-router-dom";

//  Rutas del sitio principal
import HomePage from "../pages/HomePage";
import OpportunitiesPage from "../pages/OpportunitiesPage";
import CompanyProfilePage from "../pages/CompanyProfilePage";
import CompanyDashboardPage from "../pages/CompanyDashboardPage";
import PublicCompanyProfilePage from "../pages/PublicCompanyProfilePage";
import JobOfferFormPage from "../pages/JobOfferFormPage";
import JobOffersTablePage from "../pages/JobOffersTablePage";
import PostulantesTablePage from "../pages/PostulantesTablePage";
import ProfilePage from "../pages/ProfilePage";
import EditProfilePage from "../pages/EditProfilePage";
import Terminoscondiciones from "../pages/Terminoscondiciones";
import Cookie from "../pages/Cookie";
import DetalleEmpleoPage from "../pages/DetalleEmpleoPage";

//  Rutas de autenticación  
import Loginusorcom from "../pages/Loginusorcom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ForgotPassword from "../pages/Forgotpassword";
import RecoverySent from "../pages/Recoverysent";
import VerifyEmail from "../pages/Verifyemail";
import LoginCompany from "../pages/LoginCompany";
import SignupCompany from "../pages/Signupcompany";

const Rutas = () => {
  const routes = useRoutes([

    //  Rutas principales
    { path: "/", element: <HomePage /> },
    { path: "/oportunidades", element: <OpportunitiesPage /> },
    { path: "/perfil-empresa", element: <CompanyProfilePage /> },
    { path: "/empresa/:id", element: <PublicCompanyProfilePage /> },
    { path: "/panel-empresa", element: <CompanyDashboardPage /> },
    { path: "/crear-oferta", element: <JobOfferFormPage /> },
    { path: "/mis-ofertas", element: <JobOffersTablePage /> },
    { path: "/postulantes", element: <PostulantesTablePage /> },
    { path: "/perfil", element: <ProfilePage /> },
    { path: "/perfil/editar", element: <EditProfilePage /> },
    { path: "/oferta/:id", element: <DetalleEmpleoPage /> },
    { path: "/cookie", element: <Cookie /> },
    { path: "/terminos", element: <Terminoscondiciones /> },

    //  Rutas de autenticación
    { path: "/LoginUsorCom", element: <Loginusorcom /> },
    { path: "/Login", element: <Login /> },
    { path: "/Signup", element: <Signup /> },
    { path: "/forgot-password", element: <ForgotPassword /> },
    { path: "/recovery-sent", element: <RecoverySent /> },
    { path: "/verify-email", element: <VerifyEmail /> },
    { path: "/LoginCompany", element: <LoginCompany /> },
    { path: "/SignupCompany", element: <SignupCompany /> },

    //  Ruta por defecto
    {
      path: "*",
      element: (
        <div style={{ padding: "4rem", textAlign: "center" }}>
          Página no encontrada
        </div>
      ),
    },
  ]);

  return routes;
};

export default Rutas;
