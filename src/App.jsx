import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import RecoverySent from "./pages/RecoverySent";
import VerifyEmail from "./pages/VerifyEmail";
import ContactSupport from "./pages/ContactSupport";
import SupportSent from "./pages/SupportSent";

import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/recovery-sent" element={<RecoverySent />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/contact-support" element={<ContactSupport />} />
        <Route path="/support-sent" element={<SupportSent />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
