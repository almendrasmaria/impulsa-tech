
import Switch from './SwitchCookie';

const CookiesPersonalizacion = () => {
  return (
    <>
      <div className="w-[60vw] rounded-[10px] p-2 bg-white">
        <div className="flex justify-between items-center font-bold m-3">
          <p>Cookies de Personalización</p>
          <Switch />
        </div>
      </div>
     <div className="bg-gray-100 w-[60vw] mb-8 p-8 rounded-t-xs rounded-b-xl">
        <p>
          Guardan tus elecciones, como idioma, región o configuraciones de
          accesibilidad. Mejoran tu experiencia adaptando el sitio a tus
          necesidades.
        </p>
      </div>
    </>
  );
}

export default CookiesPersonalizacion