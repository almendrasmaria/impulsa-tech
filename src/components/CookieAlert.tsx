/*
Componente que alerta a los usuarios sobre el uso de las cookies. Sería lo apropiado creo que se presente en el HomePage o en un Layout.
*/
import React, { useState } from "react";
import { useCookiePreferences } from "../context/CookiePreferenceContext";

const COOKIE_ALERT_KEY = "cookieAlertShown";

const CookieAlert: React.FC = () => {
  
  const [visible, setVisible] = useState<boolean>(() => {
    const alertShown = localStorage.getItem(COOKIE_ALERT_KEY);
    return alertShown === null; 
  });

  const { aceptarTodas, rechazarNoEsenciales } = useCookiePreferences();

  const handleAcceptAll = () => {
    aceptarTodas();
    localStorage.setItem(COOKIE_ALERT_KEY, "true");
    setVisible(false);
  };

  const handleReject = () => {
    rechazarNoEsenciales();
    localStorage.setItem(COOKIE_ALERT_KEY, "true"); 
    setVisible(false);
  };

  const handleClose = () => {
    localStorage.setItem(COOKIE_ALERT_KEY, "true"); 
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="w-screen justify-start items-center bg-white border border-gray-300 bottom-0 fixed font-light p-5">
      <div className="flex justify-end">
        <button
          onClick={handleClose}
          className="text-black bg-white button p-1 cursor-pointer"
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
          onClick={handleAcceptAll}
          className="flex justify-center items-center text-white bg-blue-700 button rounded-[10px] cursor-pointer p-2"
        >
          Aceptar
        </button>
        <button
          onClick={handleReject}
          className="flex justify-center items-center text-white bg-blue-700 button rounded-[10px] cursor-pointer p-2"
        >
          Rechazar
        </button>
        <a
          href="/cookie"
          className="flex justify-center items-center text-white bg-gray-500 button rounded-[10px] cursor-pointer p-2"
        >
          Personalizar
        </a>
      </div>
    </div>
  );
};

export default CookieAlert;