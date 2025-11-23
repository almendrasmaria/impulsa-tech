import ButtonHeader from "./ButtonHeader"


const header = () => {
  return (
    <div>
      <header className="flex justify-between align-center bg-white mb-20px px-4 py-12 font-family: Arial, sans-serif; /* Fuente genérica similar */ box-shadow: 0 4px 8px rgba(0,0,0,0.05) mb-5">
        <ButtonHeader />
        <div class="logo">
          <img src="imgs/Logo.png" alt="Impulsa Tech Logo" className="h-17" />
        </div>
        <nav className="flex gap-30px">
          <a href="#" className="px-1 py-2 text-none color-gray text-2sl ">
            Inicio
          </a>
          <a
            href="#"
            className=" transition: color 0.2s; decoration-none hover:text-blue-700 text-gray-700 text-2xs px-1.5 py-2.5"
          >
            Oportunidades
          </a>
          <a href="#" className=" transition: color 0.2s; decoration-none hover:text-blue-700 text-gray-700 text-2xs px-1.5 py-2.5">
            Soy empresa
          </a>
        </nav>
        <div className="flex items-center gap-16px">
          <button className="border: 1.5px solid #0a3d91; bg-transparent text-blue-900 px-1.5 py-5 text-xs cursor-pointer  transition-1s hover:bg-blue-700 hover:text-white">
            {" "}
            Ingresar{" "}
          </button>
        </div>
      </header>
    </div>
  );
}

export default header