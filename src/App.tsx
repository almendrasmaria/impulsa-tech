import { BrowserRouter } from "react-router-dom";
import Rutas from "./routes/Rutas.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <Rutas />
    </BrowserRouter>
  );
};

export default App;


/*import { BrowserRouter, Routes, Route } from "react-router-dom";


import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import RecoverySent from "./pages/RecoverySent";
import VerifyEmail from "./pages/VerifyEmail";
import ContactSupport from "./pages/ContactSupport";
import SupportSent from "./pages/SupportSent";

import "./styles.css";
import LoginUsorCom from "./pages/LoginUsorCom";
import LoginCompany from "./pages/LoginCompany";
import SignupCompany from "./pages/SignupCompany";

export default function App() {
  return (
    <BrowserRouter>
   

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

     
    </BrowserRouter>
  );
}
*/