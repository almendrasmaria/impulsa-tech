// src/components/CookieAlert.tsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCookiePreferences } from "../context/CookiePreferenceContext";



const CookieAlert: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(true);

  // Obtener las funciones de acción del Contexto
  const { aceptarTodas, rechazarNoEsenciales } = useCookiePreferences();

  // Función para Aceptar TODAS y cerrar
  const handleAcceptAll = () => {
    aceptarTodas(); // Activa los switches en el Contexto
    setVisible(false);
  };

  // Función para RECHAZAR y cerrar
  const handleReject = () => {
    rechazarNoEsenciales(); // Desactiva los switches en el Contexto
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="w-screen justify-start items-center bg-white border border-gray-300 bottom-0 fixed font-light p-5">
      <div className="flex justify-end">
        <button
          onClick={() => setVisible(false)} // Solo cierra la alerta, sin cambiar preferencias
          className=" text-black bg-white button p-1 cursor-pointer"
        >
          X
        </button>
      </div>
      <p className="pt-1 pb-1 m-2">
        Impulsa Tech utiliza cookies para mejorar tu experiencia, analizar el
        uso del sitio y mostrarte contenido personalizado. Podés aceptar todas,
        rechazar o personalizar tus preferencias en cualquier momento.
      </p>
      <div className="flex justify-start gap-1 ml-2 flex-wrap md:flex">
        <button
          onClick={handleAcceptAll} // Usa la función conectada al Contexto
          className="flex justify-center items-center text-white bg-blue-700 button rounded-[10px] cursor-pointer p-2"
        >
          Aceptar
        </button>
        <button
          onClick={handleReject} // Usa la función conectada al Contexto
          className="flex justify-center items-center text-white bg-blue-700 button rounded-[10px] cursor-pointer p-2"
        >
          Rechazar
        </button>
        <Link
          to="/cookie"
          className="flex justify-center items-center text-white bg-gray-500 button rounded-[10px] cursor-pointer p-2"
        >
          Personalizar
        </Link>
      </div>
    </div>
  );
};

export default CookieAlert;
