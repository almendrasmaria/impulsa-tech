import React from "react";
import SwitchPersonalizacion from "../src/components/SwitchPersonalizacion";
import SwitchRendimiento from "../src/components/SwitchRendimiento";
import { Link } from "react-router-dom";




const Cookie: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50 font-Poppins grid justify-center align-center ">
        <h1 className="font-semibold grid justify-center mt-3 text-2xl">
          Políticas de Cookies
        </h1>
        <div className=' bg-white w-[80vw] rounded-[10px] p-7 mt-4 ml-3 mr-2 gap-9"'>
          <p>
            En Impulsa Tech utilizamos cookies para brindarte una mejor
            experiencia de navegación, optimizar el funcionamiento de nuestra
            plataforma y ofrecerte contenido adaptado a tus intereses. Las
            cookies son pequeños archivos que se almacenan en tu dispositivo al
            visitar un sitio web. A través de ellas, podemos recordar tus
            preferencias, analizar el uso del sitio y mostrarte información
            personalizada. También puedes leer nuestros{" "}
            <Link
              to="#" //Agregar para redirigir a Términos y Condiciones
              className="text-blue-700"
            >
              Términos y Condiciones
            </Link>
            .
          </p>
        </div>

        <h2 className="font-semibold grid justify-center mt-4 text-2xl mb-4">
          Tipos de Cookies que utilizamos
        </h2>

        <div className="grid-cols-1 place-items-center">
          <div className="w-[60vw] rounded-[10px] p-2 bg-white">
            <div className="flex justify-between items-center font-bold m-2 ml-3">
              <p>Cookies Esenciales</p>
              <button className="bg-blue-700 text-white flex justify-center items-center font-semibold rounded-full h-10 w-[150px]">
                Activas Siempre
              </button>
            </div>
          </div>
          <div className="bg-gray-100 w-[60vw] mb-8 p-8 rounded-t-xs rounded-b-xl">
            <p>
              Son necesarias para el funcionamiento básico de la plataforma ya
              que permiten iniciar sesión, mantener la seguridad de la cuenta y
              recordar tus postulaciones.{" "}
              <b>
                Estas cookies se instalan de manera automática y no pueden
                desactivarse.
              </b>
            </p>
          </div>

          <div className="w-[60vw] rounded-[10px] p-2 bg-white">
            <div className="flex justify-between items-center font-bold m-3">
              <p>Cookies de Personalización</p>
              <SwitchPersonalizacion />
            </div>
          </div>
          <div className="bg-gray-100 w-[60vw] mb-8 p-8 rounded-t-xs rounded-b-xl">
            <p>
              Guardan tus elecciones, como idioma, región o configuraciones de
              accesibilidad. Mejoran tu experiencia adaptando el sitio a tus
              necesidades.
            </p>
          </div>

          <div className="w-[60vw] rounded-[10px] p-2 bg-white">
            <div className="flex justify-between items-center font-bold m-2">
              <p>Cookies de Rendimiento</p>
              <SwitchRendimiento />
            </div>
          </div>
          <div className="bg-gray-100 w-[60vw] mb-8 p-8 rounded-t-xs rounded-b-xl">
            <p>
              Recopilan datos anónimos sobre cómo usás la plataforma (páginas
              visitadas, tiempo de navegación, errores). Nos permiten mejorar la
              usabilidad y el rendimiento de nuestro servicio.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cookie;
