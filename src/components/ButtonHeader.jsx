import React from 'react'

const ButtonHeader = () => {
  return (
    <div>
      <button
        // CORRECCIÓN DE CLASES: Reemplazadas por sintaxis estándar de Tailwind
        className="menu-toggle md:hidden w-6 h-6 relative flex flex-col justify-around cursor-pointer bg-transparent border-none p-0"
        aria-expanded="false"
        aria-controls="nav-menu"
      >
        {/* Ajuste de altura y fondo de las barras */}
        <span className="block w-full h-0.5 bg-blue-950 rounded-sm"></span>
        <span className="block w-full h-0.5 bg-gray-800 rounded-sm"></span>
        <span className="block w-full h-0.5 bg-gray-800 rounded-sm"></span>
      </button>
    </div>
  );
}

export default ButtonHeader