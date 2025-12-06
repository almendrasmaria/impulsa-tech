// Archivo: Header.tsx (Reemplaza el antiguo Header.jsx)
import React, { useState } from 'react';
// Asumimos que ButtonHeader es el componente con la lógica del botón de hamburguesa
import ButtonHeader from "./ButtonHeader"; 

const Header: React.FC = () => {
  // Se añade el estado para controlar el menú en móvil, necesario para el ButtonHeader y la navegación
  const [menuActivo, setMenuActivo] = useState(false); 

  const toggleMenu = () => {
    setMenuActivo(!menuActivo);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <header className="flex justify-between items-center bg-white px-4 py-4 md:py-4 shadow-md mb-0">
        
        {/* Lado Izquierdo: Logo y Botón de Hamburguesa */}
        <div className="flex items-center gap-4">
            {/* El componente ButtonHeader debe ser visible SOLO en móvil (md:hidden) */}
            {/* Si no tienes el archivo ButtonHeader.tsx con la lógica de toggle, este código no funcionará */}
            {/* Se asume que lo tienes y maneja la visibilidad en mobile */}
            <ButtonHeader 
                menuActivo={menuActivo} 
                toggleMenu={toggleMenu} 
            /> 
            
            {/* Logo */}
            <div className="logo">
                <img src="imgs/Logo.png" alt="Impulsa Tech Logo" className="md:h-15" /> 
            </div>
        </div>
        
        {/* Navegación y Botón de Ingresar (Contenedor para Desktop) */}
        <div className="hidden md:flex items-center gap-8">
            
            {/* Navegación Desktop */}
            <nav className="flex gap-8">
                <a href="#" className="px-1 py-2 text-base text-gray-700 font-medium hover:text-blue-700 transition-colors">
                    Inicio
                </a>
                <a href="#" className="px-1 py-2 text-base text-gray-700 font-medium hover:text-blue-700 transition-colors">
                    Oportunidades
                </a>
                <a href="#" className="px-1 py-2 text-base text-gray-700 font-medium hover:text-blue-700 transition-colors">
                    Soy empresa
                </a>
            </nav>
            
            {/* Botón Ingresar Desktop */}
            <button className="border-2 border-blue-600 text-blue-600 px-6 py-2 text-base font-semibold rounded-lg cursor-pointer transition-colors hover:bg-blue-600 hover:text-white">
                Ingresar
            </button>
        </div>

        {/* Menú Desplegable (SOLO MOBILE - control de visibilidad por CSS) */}
        <nav 
            id="nav-menu"
            className={`
                hidden md:hidden transition-all duration-300 
                ${menuActivo ? 'active-menu' : ''}
            `}
        >
             {/* ... contenido de enlaces para móvil ... */}
        </nav>

      </header>
    </div>
  );
}

export default Header;

