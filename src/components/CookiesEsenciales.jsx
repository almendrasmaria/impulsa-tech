
const CookiesEsenciales = () => {
  return (
    <>
      <div className="w-[60vw] rounded-[10px] p-2 bg-white">
        <div className="flex justify-between items-center font-bold m-2 ml-3">
          <p>Cookies Esenciales</p>
          <button class="bg-blue-700 text-white flex justify-center items-center font-semibold rounded-full h-10 w-[150px]">
            Activas Siempre
          </button>
        </div>
      </div>

      <div className="bg-gray-100 w-[60vw] mb-8 p-8 rounded-t-xs rounded-b-xl">
        <p>
          Son necesarias para el funcionamiento básico de la plataforma ya que
          permiten iniciar sesión, mantener la seguridad de la cuenta y recordar
          tus postulaciones.{" "}
          <b>
            Estas cookies se instalan de manera automática y no pueden
            desactivarse.
          </b>
        </p>
      </div>
    </>
  );
}

export default CookiesEsenciales