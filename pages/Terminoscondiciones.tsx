
const Terminoscondiciones = () => {
  return (
    <div className="bg-gradient-to-r from-[#f7faff] to-[#f7faff] py-10 flex justify-center">
      <div className="bg-white p-10 rounded-2xl max-w-7xl text-blue-950">
        <h1 className="text-center text-2xl mb-8 font-bold">
          Términos y Condiciones de Uso
        </h1>

        <div className="border border-gray-200 rounded-lg p-5 max-h-96 overflow-y-auto mb-8">
          <section className="mb-6">
            <h2 className="text-xl mt-0 mb-2.5 font-bold">
              1. Identificación de la Empresa
            </h2>
            <p className="text-xs text-gray-600 leading-relaxed mb-2 pl-1.5">
              1.1 ImpulsaTech es una plataforma digital orientada a conectar
              postulantes juniors de IT con empresas que buscan talento en el
              área tecnológica.
            </p>
            <p className="text-xs text-gray-600 leading-relaxed mb-2 pl-1.5">
              1.2 Datos de identificación y domicilio legal de la empresa.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl mt-0 mb-2.5 font-bold">
              2. Aceptación de los Términos
            </h2>
            <p className="text-xs text-gray-600 leading-relaxed mb-2 pl-1.5">
              2.1 El acceso y uso de la plataforma implican la aceptación plena
              y sin reservas de estos Términos y Condiciones.
            </p>
            <p className="text-xs text-gray-600 leading-relaxed mb-2 pl-1.5">
              2.2 Si el usuario no está de acuerdo con alguno de los puntos,
              deberá abstenerse de utilizar el servicio.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl mt-0 mb-2.5 font-bold">
              3. Capacidad Legal para Contratar
            </h2>
            <p className="text-xs text-gray-600 leading-relaxed mb-2 pl-1.5">
              3.1 Conforme al Código Civil y Comercial de la Nación Argentina,
              pueden usar la plataforma personas mayores de 18 años con plena
              capacidad para contratar.
            </p>
            <p className="text-xs text-gray-600 leading-relaxed mb-2 pl-1.5">
              3.2 Los menores de edad sólo podrán registrarse con consentimiento
              de sus padres o tutores legales, quienes serán responsables de sus
              actos dentro de la plataforma.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl mt-0 mb-2.5 font-bold">
              4. Objeto del Servicio
            </h2>
            <p className="text-xs text-gray-600 leading-relaxed mb-2 pl-1.5">
              4.1 La plataforma facilita el encuentro entre postulantes y
              empresas, pero no garantiza la contratación ni los resultados de
              los procesos de selección.
            </p>
            <p className="text-xs text-gray-600 leading-relaxed mb-2 pl-1.5">
              4.2 ImpulsaTech actúa como intermediario tecnológico, no como
              empleador ni agente de las partes.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl mt-0 mb-2.5 font-bold">
              5. Registro y Cuenta de Usuario
            </h2>
            <p className="text-xs text-gray-600 leading-relaxed mb-2 pl-1.5">
              5.1 El usuario es responsable de mantener la confidencialidad de
              su contraseña y de todas las actividades que ocurran bajo su
              cuenta.
            </p>
            <p className="text-xs text-gray-600 leading-relaxed mb-2 pl-1.5">
              5.2 El uso indebido o fraudulento de la cuenta resultará en la
              baja inmediata del servicio.
            </p>
            <p className="text-xs text-gray-600 leading-relaxed mb-2 pl-1.5">
              5.3 Es fundamental que el correo electrónico registrado esté
              activo y sea monitoreado por el usuario.
            </p>
            <p className="text-xs text-gray-600 leading-relaxed mb-2 pl-1.5">
              5.4 Al aceptar estos términos, el usuario autoriza el tratamiento
              de sus datos conforme a la Política de Privacidad.
            </p>
            <p className="text-xs text-gray-600 leading-relaxed mb-2 pl-1.5">
              5.5 El usuario puede solicitar la baja de su cuenta en cualquier
              momento a través de las opciones de configuración.
            </p>
            <p className="text-xs text-gray-600 leading-relaxed mb-2 pl-1.5">
              5.6 Cualquier cambio en la información personal debe ser
              actualizado a la brevedad en la plataforma.
            </p>
          </section>
        </div>

        <div className="flex justify-center mt-4">
          <button
            className="text-lg px-6 py-4 font-bold cursor-pointer border-none rounded-2xl text-white w-full sm:w-1/2 max-w-sm bg-blue-700 hover:bg-blue-900 transition-colors"
            onClick={() => {
              /* Volver a Inicio Iria Aqui */
            }}
          >
            Volver al Inicio
          </button>
        </div>
      </div>
    </div>
  );
};

export default Terminoscondiciones;