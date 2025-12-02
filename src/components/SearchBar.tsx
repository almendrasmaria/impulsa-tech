import { LuSearch, LuMapPin, LuBriefcase } from "react-icons/lu";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onSearchSubmit: () => void;
  selectedLocation: string | null;
  onLocationChange: (value: string | null) => void;
}

const SearchBar = ({
  searchTerm,
  onSearchChange,
  onSearchSubmit,
  selectedLocation,
  onLocationChange,
}: SearchBarProps) => {
  const handleLocationChange = (location: string | null) => {
    onLocationChange(location);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearchSubmit(); 
      }}
      className="w-full"
    >
      <div className="w-full flex items-center bg-white rounded-full shadow-sm ring-1 ring-gray-200 overflow-hidden">
        <div className="flex flex-1 items-center gap-2 px-4 py-2">
          <LuBriefcase className="h-5 w-5 text-[#0058A3]" />
          <input
            type="text"
            placeholder="Cargo o categoría"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-transparent border-none focus:outline-none text-sm text-gray-800 placeholder:text-gray-500"
          />
        </div>

        <div className="h-8 w-px bg-gray-200 self-center" />

        <div className="flex items-center gap-2 px-4 py-2">
          <LuMapPin className="h-5 w-5 text-[#0058A3]" />
          <select
            value={selectedLocation || ""}
            onChange={(e) => handleLocationChange(e.target.value || null)}
            className="bg-transparent border-none text-sm text-gray-700 focus:outline-none"
          >
            <option value="">Seleccionar ubicación</option>
            <option value="Capital Federal">Capital Federal</option>
            <option value="Buenos Aires-GBA">Buenos Aires-GBA</option>
            <option value="Catamarca">Catamarca</option>
            <option value="Chaco">Chaco</option>
            <option value="Chubut">Chubut</option>
            <option value="Córdoba">Córdoba</option>
            <option value="Corrientes">Corrientes</option>
            <option value="Entre Ríos">Entre Ríos</option>
            <option value="Formosa">Formosa</option>
            <option value="Jujuy">Jujuy</option>
            <option value="La Pampa">La Pampa</option>
            <option value="La Rioja">La Rioja</option>
            <option value="Mendoza">Mendoza</option>
            <option value="Misiones">Misiones</option>
            <option value="Neuquén">Neuquén</option>
            <option value="Río Negro">Río Negro</option>
            <option value="Salta">Salta</option>
            <option value="San Juan">San Juan</option>
            <option value="San Luis">San Luis</option>
            <option value="Santa Cruz">Santa Cruz</option>
            <option value="Santa Fe">Santa Fe</option>
            <option value="Santiago del Estero">Santiago del Estero</option>
            <option value="Tierra del Fuego">Tierra del Fuego</option>
            <option value="Tucumán">Tucumán</option>
          </select>
        </div>

        <button
          type="submit"
          className="mr-2 my-[6px] flex items-center justify-center w-10 h-10 rounded-full bg-[#003B80] hover:bg-[#002a5c] text-white shadow-sm transition-colors"
        >
          <LuSearch className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;

