import { useEffect, useState } from "react";
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
  const [locations, setLocations] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchLocations = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://apis.datos.gob.ar/georef/api/v2.0/provincias"
        );
        const data = await response.json();
        setLocations(
          data.provincias.map((provincia: { nombre: string }) => provincia.nombre)
        );
      } catch (error) {
        console.error("Error fetching locations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

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

          {loading ? (
            <div className="animate-spin h-4 w-4 border-2 border-gray-300 border-t-[#0058A3] rounded-full"></div>
          ) : (
            <select
              value={selectedLocation || ""}
              onChange={(e) => handleLocationChange(e.target.value || null)}
              className="bg-transparent border-none text-sm text-gray-700 focus:outline-none"
            >
              <option value="">Seleccionar ubicación</option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          )}
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
