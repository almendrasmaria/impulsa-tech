import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

type Variant = "dark" | "light";

interface NavbarProps {
  variant?: Variant;
  logoDarkSrc?: string;
  logoLightSrc?: string;
}

const Navbar = ({
  variant = "dark",
  logoDarkSrc = "images/logo-light.png",
  logoLightSrc = "images/logo-dark.png",
}: NavbarProps) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const isLight = variant === "light";
  const linkBase = "cursor-pointer hover:text-[#84B3FF] transition-colors";
  const linkColorDesktop = isLight ? "text-gray-800" : "text-white";
  const menuIconColor = isLight ? "text-gray-800" : "text-white";

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <nav
      className={
        isLight
          ? "sticky top-0 left-0 w-full z-20 bg-white shadow-sm"
          : "sticky top-0 left-0 w-full z-20 bg-transparent" // CORRECCIÓN CLAVE: De 'absolute' a 'sticky'
      }
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32">
        <img
          src={isLight ? logoLightSrc : logoDarkSrc}
          alt="ImpulsaTech"
          className="object-contain w-[150px] h-[60px] md:w-[180px] md:h-[80px]"
        />

        <ul className={`hidden md:flex gap-7 ${linkColorDesktop} ml-auto mr-6`}>
          <li><a href="/" className={linkBase}>Inicio</a></li>
          <li><a href="/oportunidades" className={linkBase}>Oportunidades</a></li>
          <li><a href="#" className={`${linkBase} whitespace-nowrap`}>Soy Empresa</a></li>
        </ul>

        <button
          className={`hidden md:block px-8 py-2 rounded-full font-semibold transition
            ${
              isLight
                ? "border border-[#2957FF] text-[#2957FF] bg-transparent hover:bg-[#2957FF] hover:text-white"
                : "bg-white text-gray-900 hover:bg-gray-100"
            }`}
        >
          Ingresar
        </button>

        <button onClick={() => setShowMobileMenu(true)} className={`md:hidden ${menuIconColor}`}>
          <FiMenu className="w-7 h-7" />
        </button>
      </div>

      {/* ------- mobile-menu ------- */}
      <div
        className={`md:hidden fixed inset-0 z-30 bg-white transition-transform duration-300 ${
          showMobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6">
          <button onClick={() => setShowMobileMenu(false)}>
            <FiX className="w-7 h-7" />
          </button>
        </div>

        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium text-gray-800">
          <li><a href="/" className="px-4 py-2 rounded-full inline-block">Inicio</a></li>
          <li><a href="/oportunidades" className="px-4 py-2 rounded-full inline-block">Oportunidades</a></li>
          <li><a href="#" className="px-4 py-2 rounded-full inline-block">Soy Empresa</a></li>
        </ul>

        <button className="block md:hidden mt-4 bg-[#2957FF] text-white px-10 py-2 rounded-full font-semibold hover:bg-[#1e46d9] transition mx-auto">
          Ingresar
        </button>
      </div>
    </nav>
  );
};

export default Navbar;