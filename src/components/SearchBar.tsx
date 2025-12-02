import { LuSearch, LuMapPin, LuChevronDown, LuBriefcase } from "react-icons/lu";

const SearchBar = () => {
  return (
    <form className="w-full">
      <div className="w-full flex items-center bg-white rounded-full shadow-sm ring-1 ring-gray-200 overflow-hidden">
        <div className="flex flex-1 items-center gap-2 px-4 py-2">
          <LuBriefcase className="h-5 w-5 text-[#0058A3]" />
          <input
            type="text"
            placeholder="Cargo o categoría"
            className="w-full bg-transparent border-none focus:outline-none text-sm text-gray-800 placeholder:text-gray-500"
          />
        </div>
        <div className="h-8 w-px bg-gray-200 self-center" />
        <div className="flex items-center gap-2 px-4 py-2">
          <LuMapPin className="h-5 w-5 text-[#0058A3]" />
          <button
            type="button"
            className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900"
          >
            <span>Capital Federal</span>
            <LuChevronDown className="h-4 w-4 text-gray-500" />
          </button>
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