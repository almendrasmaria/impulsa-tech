import Navbar from "./Navbar";
import { LuSearch, LuMapPin } from "react-icons/lu";

const Header = () => {
  return (
    <div
      id="Header"
      className="min-h-screen mb-4 bg-cover bg-center bg-no-repeat flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/images/banner.png')" }}
    >
      <Navbar />
      <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
        <p className="uppercase font-semibold tracking-wide text-sm md:text-base animate-fade-in">
          ÚNETE A <span className="text-[#84B3FF]">IMPULSATECH</span>
        </p>
        <h1 className="text-3xl sm:text-5xl font-bold mt-2 mb-6 leading-tight animate-fade-in">
          Encuentra tu primer <span className="text-[#84B3FF]">oportunidad</span>
        </h1>
        <div className="w-full max-w-4xl mx-auto rounded-xl p-6 bg-white/10 backdrop-blur-md ring-1 ring-white/20 text-white shadow-lg">
          <form className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative flex-1">
              <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70 pointer-events-none" />
              <input
                type="text"
                placeholder="Puesto, empresa o palabra clave"
                className="w-full h-12 rounded-lg pl-10 pr-3 bg-white/10 text-white placeholder:text-white/70 ring-1 ring-white/30 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <div className="relative flex-1 md:max-w-xs">
              <LuMapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70 pointer-events-none" />
              <input
                type="text"
                placeholder="Ubicación"
                className="w-full h-12 rounded-lg pl-10 pr-3 bg-white/10 text-white placeholder:text-white/70 ring-1 ring-white/30 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <button className="h-12 rounded-lg bg-[#2957FF] text-white font-semibold hover:bg-[#1e46d9] transition w-full md:w-auto md:px-8 md:shrink-0">
              Buscar ahora
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;

