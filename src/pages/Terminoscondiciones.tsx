import { motion } from "framer-motion";
import { FileText, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";

const Terminoscondiciones = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8F0FF] via-[#FAFDFF] to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Header */}
            <div className="px-8 pt-8 pb-6 border-b border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <FileText className="w-8 h-8 text-[#003B80]" />
                <h1 className="text-3xl font-bold text-gray-800">
                  Términos y Condiciones de Uso
                </h1>
              </div>
              <p className="text-gray-600">
                Última actualización: Diciembre 2025
              </p>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="max-h-[500px] overflow-y-auto pr-4 space-y-6 custom-scrollbar">
          <section className="mb-6">
            <h2 className="text-xl font-bold text-[#003B80] mb-3">
              1. Identificación de la Empresa
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              1.1 ImpulsaTech es una plataforma digital orientada a conectar
              postulantes juniors de IT con empresas que buscan talento en el
              área tecnológica.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              1.2 Datos de identificación y domicilio legal de la empresa.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-bold text-[#003B80] mb-3">
              2. Aceptación de los Términos
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              2.1 El acceso y uso de la plataforma implican la aceptación plena
              y sin reservas de estos Términos y Condiciones.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              2.2 Si el usuario no está de acuerdo con alguno de los puntos,
              deberá abstenerse de utilizar el servicio.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-bold text-[#003B80] mb-3">
              3. Capacidad Legal para Contratar
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              3.1 Conforme al Código Civil y Comercial de la Nación Argentina,
              pueden usar la plataforma personas mayores de 18 años con plena
              capacidad para contratar.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              3.2 Los menores de edad sólo podrán registrarse con consentimiento
              de sus padres o tutores legales, quienes serán responsables de sus
              actos dentro de la plataforma.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-bold text-[#003B80] mb-3">
              4. Objeto del Servicio
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              4.1 La plataforma facilita el encuentro entre postulantes y
              empresas, pero no garantiza la contratación ni los resultados de
              los procesos de selección.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              4.2 ImpulsaTech actúa como intermediario tecnológico, no como
              empleador ni agente de las partes.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-bold text-[#003B80] mb-3">
              5. Registro y Cuenta de Usuario
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              5.1 El usuario es responsable de mantener la confidencialidad de
              su contraseña y de todas las actividades que ocurran bajo su
              cuenta.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              5.2 El uso indebido o fraudulento de la cuenta resultará en la
              baja inmediata del servicio.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              5.3 Es fundamental que el correo electrónico registrado esté
              activo y sea monitoreado por el usuario.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              5.4 Al aceptar estos términos, el usuario autoriza el tratamiento
              de sus datos conforme a la Política de Privacidad.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              5.5 El usuario puede solicitar la baja de su cuenta en cualquier
              momento a través de las opciones de configuración.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              5.6 Cualquier cambio en la información personal debe ser
              actualizado a la brevedad en la plataforma.
            </p>
          </section>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <Button
            variant="primary"
            className="flex items-center gap-2"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al Inicio
          </Button>
        </div>
              </div>
          </Card>
        </motion.div>
      </div>

      {/* Scrollbar custom styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #003B80;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #002855;
        }
      `}</style>
    </div>
  );
};

export default Terminoscondiciones;