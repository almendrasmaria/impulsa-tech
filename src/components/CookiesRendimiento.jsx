import Switch from './SwitchCookie';

const CookiesRendimiento = () => {
  return (
    <>
      <div className="w-[60vw] rounded-[10px] p-2 bg-white">
        <div className="flex justify-between items-center font-bold m-2">
          <p>Cookies de Rendimiento</p>
          <Switch />
        </div>
      </div>

      <div className="bg-gray-100 w-[60vw] mb-8 p-8 rounded-t-xs rounded-b-xl">
        <p>
          Recopilan datos anónimos sobre cómo usás la plataforma (páginas
          visitadas, tiempo de navegación, errores). Nos permiten mejorar la
          usabilidad y el rendimiento de nuestro servicio.
        </p>
      </div>
    </>
  );
}

export default CookiesRendimiento