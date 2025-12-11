import React from "react";
import { motion } from "framer-motion";
import {
  FaCookie,
  FaArrowLeft,
  FaShieldAlt,
  FaSlidersH,
  FaChartBar
} from "react-icons/fa"; 
import { useNavigate } from "react-router-dom";
import SwitchPersonalizacion from "../components/SwitchPersonalizacion";
import SwitchRendimiento from "../components/SwitchRendimiento";
import Card from "../components/Card";
import Button from "../components/Button";

const Cookie: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8F0FF] via-[#FAFDFF] to-white font-Poppins py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#003B80] to-[#0058A3] text-white p-8">
              <div className="flex items-center gap-3 mb-4">
                <FaCookie className="w-10 h-10" />
                <h1 className="font-bold text-3xl">Políticas de Cookies</h1>
              </div>
            </div>

            <div className="p-8">
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                En Impulsa Tech utilizamos cookies para brindarte una mejor
                experiencia de navegación, optimizar el funcionamiento de nuestra
                plataforma y ofrecerte contenido adaptado a tus intereses. Las
                cookies son pequeños archivos que se almacenan en tu dispositivo al
                visitar un sitio web. A través de ellas, podemos recordar tus
                preferencias, analizar el uso del sitio y mostrarte información
                personalizada. También puedes leer nuestros{" "}
                <a
                  href="/terminos"
                  className="text-[#003B80] hover:text-[#0058A3] font-semibold underline"
                >
                  Términos y Condiciones
                </a>
                .
              </p>

              <h2 className="font-bold text-2xl text-[#003B80] text-center mt-8 mb-8">
                Tipos de Cookies que utilizamos
              </h2>

              <div className="space-y-6">
                {/* Essential Cookies */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="border-2 border-[#E8F0FF] rounded-xl overflow-hidden hover:border-[#003B80] transition-colors"
                >
                  <div className="bg-gradient-to-r from-[#E8F0FF] to-white p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <FaShieldAlt className="w-6 h-6 text-[#003B80]" />
                        <p className="font-bold text-[#003B80]">Cookies Esenciales</p>
                      </div>
                      <button className="bg-[#003B80] text-white flex justify-center items-center font-semibold rounded-full h-10 px-6 text-sm">
                        Activas Siempre
                      </button>
                    </div>
                  </div>
                  <div className="bg-white p-6">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Son necesarias para el funcionamiento básico de la plataforma ya
                      que permiten iniciar sesión, mantener la seguridad de la cuenta
                      y recordar tus postulaciones.{" "}
                      <b>
                        Estas cookies se instalan de manera automática y no pueden
                        desactivarse.
                      </b>
                    </p>
                  </div>
                </motion.div>

                {/* Personalization Cookies */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="border-2 border-[#E8F0FF] rounded-xl overflow-hidden hover:border-[#003B80] transition-colors"
                >
                  <div className="bg-gradient-to-r from-[#E8F0FF] to-white p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <FaSlidersH className="w-6 h-6 text-[#003B80]" />
                        <p className="font-bold text-[#003B80]">Cookies de Personalización</p>
                      </div>
                      <SwitchPersonalizacion />
                    </div>
                  </div>
                  <div className="bg-white p-6">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Guardan tus elecciones, como idioma, región o configuraciones de
                      accesibilidad. Mejoran tu experiencia adaptando el sitio a tus
                      necesidades.
                    </p>
                  </div>
                </motion.div>

                {/* Performance Cookies */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="border-2 border-[#E8F0FF] rounded-xl overflow-hidden hover:border-[#003B80] transition-colors"
                >
                  <div className="bg-gradient-to-r from-[#E8F0FF] to-white p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <FaChartBar className="w-6 h-6 text-[#003B80]" />
                        <p className="font-bold text-[#003B80]">Cookies de Rendimiento</p>
                      </div>
                      <SwitchRendimiento />
                    </div>
                  </div>
                  <div className="bg-white p-6">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Recopilan datos anónimos sobre cómo usás la plataforma (páginas
                      visitadas, tiempo de navegación, errores). Nos permiten mejorar
                      la usabilidad y el rendimiento de nuestro servicio.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Back Button */}
              <div className="flex justify-center mt-8">
                <Button
                  onClick={() => navigate("/")}
                  className="bg-[#003B80] hover:bg-[#0058A3] text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 transition-colors"
                >
                  <FaArrowLeft className="w-5 h-5" />
                  Volver al Inicio
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Cookie;