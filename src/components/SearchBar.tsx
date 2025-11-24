import { LuSearch, LuMapPin } from "react-icons/lu";

type Variant = "dark" | "light";

interface Props {
  variant?: Variant;
}

const SearchBar = ({ variant = "dark" }: Props) => {
  const isDark = variant === "dark";
  
  return (
    <div
      className={
        isDark
          ? "w-full max-w-4xl mx-auto rounded-xl p-6 bg-white/10 backdrop-blur-md ring-1 ring-white/20 text-white shadow-lg"
          : "w-full max-w-4xl mx-auto rounded-xl p-6 bg-white ring-1 ring-gray-200 text-gray-800 shadow-lg"
      }
    >
      <form className="flex flex-col gap-4 md:flex-row md:items-center">
        
        <div className="relative flex-1">
          <LuSearch
            className={
              isDark
                ? "absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70 pointer-events-none"
                : "absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none"
            }
          />
          <input
            type="text"
            placeholder="Puesto, empresa o palabra clave"
            className={
              isDark
                ? "w-full h-12 rounded-lg pl-10 pr-3 bg-white/10 text-white placeholder:text-white/70 ring-1 ring-white/30 focus:outline-none focus:ring-2 focus:ring-white"
                : "w-full h-12 rounded-lg pl-10 pr-3 bg-gray-50 text-gray-900 placeholder:text-gray-500 ring-1 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2257FF] focus:bg-white transition-colors"
            }
          />
        </div>

        <div className="relative flex-1 md:max-w-xs">
          <LuMapPin
            className={
              isDark
                ? "absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70 pointer-events-none"
                : "absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none"
            }
          />
          <input
            type="text"
            placeholder="Ubicación"
            className={
              isDark
                ? "w-full h-12 rounded-lg pl-10 pr-3 bg-white/10 text-white placeholder:text-white/70 ring-1 ring-white/30 focus:outline-none focus:ring-2 focus:ring-white"
                : "w-full h-12 rounded-lg pl-10 pr-3 bg-gray-50 text-gray-900 placeholder:text-gray-500 ring-1 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2257FF] focus:bg-white transition-colors"
            }
          />
        </div>

        <button
          type="button"
          className="h-12 rounded-lg bg-[#2257FF] text-white font-semibold hover:bg-[#1e46d9] transition-colors w-full md:w-auto md:px-8 md:shrink-0"
        >
          Buscar ahora
        </button>
      </form>
    </div>
  );
};

export default SearchBar;