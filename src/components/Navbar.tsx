import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  const goToLogin = () => navigate("/LoginUsorCom");

  return (
    <nav className="sticky top-0 left-0 w-full z-20 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 md:px-6">
        <img
          src="images/logo-dark.png"
          alt="ImpulsaTech"
          className="h-10 md:h-12 object-contain"
        />

        {/* Links desktop */}
        <ul className="hidden md:flex gap-6 text-gray-800 ml-auto mr-6">
          <li>
            <a
              href="/"
              className="cursor-pointer hover:text-[#003B80] transition-colors text-sm"
            >
              Inicio
            </a>
          </li>

          <li>
            <a
              href="/oportunidades"
              className="cursor-pointer hover:text-[#003B80] transition-colors text-sm whitespace-nowrap"
            >
              Ver Oportunidades
            </a>
          </li>
        </ul>

        {/* Botones desktop */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={goToLogin}
            className="px-5 py-2 rounded-full font-semibold text-sm
                       border border-[#003B80] text-[#003B80] bg-transparent
                       hover:bg-[#003B80] hover:text-white transition"
          >
            Crear cuenta
          </button>

          <button
            onClick={goToLogin}
            className="px-5 py-2 rounded-full font-semibold text-sm
                       bg-[#003B80] text-white hover:bg-[#002a5c] transition"
          >
            Ingresar
          </button>
        </div>

        <button
          onClick={() => setShowMobileMenu(true)}
          className="md:hidden text-gray-800"
        >
          <FiMenu className="w-7 h-7" />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 z-30 transition duration-300 ${
          showMobileMenu ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            showMobileMenu ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setShowMobileMenu(false)}
        />

        <div
          className={`ml-auto h-full w-3/4 max-w-xs bg-white shadow-xl 
                      transform transition-transform duration-300
                      ${showMobileMenu ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex justify-end p-6">
            <button onClick={() => setShowMobileMenu(false)}>
              <FiX className="w-7 h-7 text-gray-800" />
            </button>
          </div>

          <ul className="flex flex-col gap-3 mt-2 px-8 text-lg font-medium text-gray-800">
            <li>
              <a href="/" className="block py-1">
                Inicio
              </a>
            </li>
            <li>
              <a href="/oportunidades" className="block py-1">
                Ver Oportunidades
              </a>
            </li>
          </ul>

          {/* Botones mobile */}
          <div className="mt-6 flex flex-col gap-3 px-8 pb-8">
            <button
              onClick={goToLogin}
              className="w-full border border-[#003B80] text-[#003B80] px-8 py-2 rounded-full font-semibold text-sm hover:bg-[#003B80] hover:text-white transition"
            >
              Crear cuenta
            </button>

            <button
              onClick={goToLogin}
              className="w-full bg-[#003B80] text-white px-8 py-2 rounded-full font-semibold text-sm hover:bg-[#002a5c] transition"
            >
              Ingresar
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
