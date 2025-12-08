import React from 'react'

const LoginUsorCom = () => {
  return (
    <div className="bg-gradient-to-r from-[#f7faff] to-[#f7faff] py-10 flex justify-center">
      <div className="bg-white p-10 rounded-2xl max-w-7xl ">
        <h1 className="text-2xl flex justify-center text-center font-semibold p-5">
          Iniciar Sesión
        </h1>
        <div className="w-[80vw] rounded-[10px]">
          <div className="border w-3/4 border-gray-100 h-full p-10 mb-10 rounded-[10px] flex items-center gap-4">
            <svg
              width="72"
              height="78"
              viewBox="0 0 72 78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M57 68.25V61.75C57 58.3022 55.7357 54.9956 53.4853 52.5576C51.2348 50.1196 48.1826 48.75 45 48.75H27C23.8174 48.75 20.7652 50.1196 18.5147 52.5576C16.2643 54.9956 15 58.3022 15 61.75V68.25M48 22.75C48 29.9297 42.6274 35.75 36 35.75C29.3726 35.75 24 29.9297 24 22.75C24 15.5703 29.3726 9.75 36 9.75C42.6274 9.75 48 15.5703 48 22.75Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="p-10 text-blue-950">
              <a href="/login" target="/_self" className=" text-2xl">
                Postulantes
              </a>
              <p className="text-xs py-1.5">
                Encontrá tu primer oportunidad laboral
              </p>
            </div>
          </div>

          <div className="border border-gray-100 h-full w-3/4 p-10 mb-10 rounded-[10px] flex items-center gap-4">
            <svg
              width="77"
              height="87"
              viewBox="0 0 77 87"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.0837 43.5H44.917M32.0837 29H44.917M44.917 76.125V65.25C44.917 63.3272 44.241 61.4831 44.0376 60.1235C41.8342 58.7638 40.2021 58 38.5003 58C36.7985 58 35.1664 58.7638 33.9631 60.1235C32.7597 61.4831 32.0837 63.3272 32.0837 65.25V76.125M19.2503 36.25H12.8337C11.1319 36.25 9.49975 37.0138 8.29639 38.3735C7.09303 39.7331 6.41699 41.5772 6.41699 43.5V68.875C6.41699 70.7978 7.09303 72.6419 8.29639 74.0015C9.49975 75.3612 11.1319 76.125 12.8337 76.125H64.167C65.8688 76.125 67.5009 75.3612 68.7043 74.0015C69.9076 72.6419 70.5837 70.7978 70.5837 68.875V32.625C70.5837 30.7022 69.9076 28.8581 68.7043 27.4985C67.5009 26.1388 65.8688 25.375 64.167 25.375H57.7503M19.2503 76.125V18.125C19.2503 16.2022 19.9264 14.3581 21.1297 12.9985C22.3331 11.6388 23.9652 10.875 25.667 10.875H51.3337C53.0355 10.875 54.6676 11.6388 55.8709 12.9985C57.0743 14.3581 57.7503 16.2022 57.7503 18.125V76.125"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="p-10 text-blue-950">
              <a href="/LoginCompany" target="/_self" className=" text-2xl">
                Empresas
              </a>
              <p className="text-xs py-1.5">
                Publica ofertas laborales, pasantías y encontrá talento
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginUsorCom