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
  const linkBase =
    "cursor-pointer hover:text-[#003B80] transition-colors text-sm";
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
          : "absolute top-0 left-0 w-full z-20 bg-transparent"
      }
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 md:px-6 lg:px-6">
        <img
          src={isLight ? logoLightSrc : logoDarkSrc}
          alt="ImpulsaTech"
          className="h-10 md:h-12 object-contain"
        />

        <ul
          className={`hidden md:flex gap-6 ${linkColorDesktop} ml-auto mr-6`}
        >
          <li>
            <a href="/" className={linkBase}>
              Inicio
            </a>
          </li>
          <li>
            <a
              href="/oportunidades"
              className={`${linkBase} whitespace-nowrap`}
            >
              Ver Oportunidades
            </a>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button
            className={`px-5 py-2 rounded-full font-semibold text-sm transition
              ${
                isLight
                  ? "border border-[#003B80] text-[#003B80] bg-transparent hover:bg-[#003B80] hover:text-white"
                  : "border border-white/70 text-white bg-transparent hover:bg-white hover:text-[#003B80]"
              }`}
          >
            Crear cuenta
          </button>

          <button
            className={`px-5 py-2 rounded-full font-semibold text-sm transition
              ${
                isLight
                  ? "bg-[#003B80] text-white hover:bg-[#002a5c]"
                  : "bg-white text-[#003B80] hover:bg-gray-100"
              }`}
          >
            Ingresar
          </button>
        </div>

        <button
          onClick={() => setShowMobileMenu(true)}
          className={`md:hidden ${menuIconColor}`}
        >
          <FiMenu className="w-7 h-7" />
        </button>
      </div>

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

        <ul className="flex flex-col items-center gap-3 mt-5 px-5 text-lg font-medium text-gray-800">
          <li>
            <a href="/" className="px-4 py-2 rounded-full inline-block">
              Inicio
            </a>
          </li>
          <li>
            <a
              href="/oportunidades"
              className="px-4 py-2 rounded-full inline-block"
            >
              Ver Oportunidades
            </a>
          </li>
        </ul>

        <div className="mt-6 flex flex-col items-center gap-3 px-10">
          <button className="w-full border border-[#003B80] text-[#003B80] px-8 py-2 rounded-full font-semibold text-sm hover:bg-[#003B80] hover:text-white transition">
            Crear cuenta
          </button>

          <button className="w-full bg-[#003B80] text-white px-8 py-2 rounded-full font-semibold text-sm hover:bg-[#002a5c] transition">
            Ingresar
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
