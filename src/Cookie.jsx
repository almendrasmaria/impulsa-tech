import CookieAlert from "./components/CookieAlert";
import CookiesRendimiento from "./components/CookiesRendimiento";
import CookiesPersonalizacion from "./components/CookiesPersonalizacion";
import CookiesEsenciales from "./components/CookiesEsenciales";



const Cookie = () => {
  return (
    <>
      <div className="bg-gray-50 font-Poppins grid justify-center align-center ">
        <h1 class="font-semibold grid justify-center mt-3 text-2xl">
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
            personalizada. También puedes leer nuestros
            
            .
          </p>
        </div>
        <h2 class="font-semibold grid justify-center mt-4 text-2xl mb-4">
          Tipos de Cookies que utilizamos
        </h2>

        <div className="grid-cols-1 place-items-center">
          <CookiesEsenciales />
          <CookiesPersonalizacion />
          <CookiesRendimiento />
        </div>
      </div>
      <CookieAlert />
    </>
  );
};

export default Cookie;
