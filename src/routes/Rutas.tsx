import { useRoutes } from "react-router-dom";
import LoginUsorCom from "../pages/LoginUsorCom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ForgotPassword from "../pages/ForgotPassword";
import RecoverySent from "../pages/RecoverySent";
import VerifyEmail from "../pages/VerifyEmail";
import Contactsupport from "../pages/ContactSupport";
import SupportSent from "../pages/SupportSent";
import LoginCompany from "../pages/LoginCompany";
import SignupCompany from "../pages/SignupCompany";



const Rutas = () => {
  const routes = useRoutes([
    { path: "/LoginUsorCom", element: <LoginUsorCom /> },
    { path: "/Login", element: <Login /> },
    { path: "/Signup", element: <Signup /> },
    { path: "/forgot-password", element: <ForgotPassword /> },
    { path: "/recovery-sent", element: <RecoverySent /> },
    { path: "/verify-email", element: <VerifyEmail /> },
    { path: "/contact-support", element: <Contactsupport /> },
    { path: "/support-sent", element: <SupportSent /> },
    { path: "/LoginCompany", element: <LoginCompany /> },
    { path: "/SignupCompany", element: <SignupCompany /> },

    /*
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/recovery-sent" element={<RecoverySent />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/contact-support" element={<ContactSupport />} />
        <Route path="/support-sent" element={<SupportSent />} />
        <Route path="/LoginUsorCom" element={<LoginUsorCom />} />
        <Route path="/LoginCompany" element={<LoginCompany />} />
        <Route path="/SignupCompany" element={<SignupCompany />} />
      </Routes>
*/

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
