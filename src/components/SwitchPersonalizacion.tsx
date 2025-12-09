
import React from "react";
import { useCookiePreferences } from "../context/CookiePreferenceContext";

const SwitchPersonalizacion: React.FC = () => {
  const { personalizacion, togglePersonalizacion } = useCookiePreferences();

  return (
    <label className="inline-block cursor-pointer">
      <input
        type="checkbox"
        id="toggle-personalizacion"
        checked={personalizacion}
        onChange={togglePersonalizacion}
        className="hidden peer"
      />
      <span
        aria-hidden="true"
        className="flex items-center w-[60px] h-[30px] bg-gray-300 rounded-[20px] overflow-hidden border-4 border-transparent transition-all duration-300 peer-checked:bg-[#1829db] before:content-[''] before:block before:w-full before:h-full before:bg-white before:rounded-[20px] before:-translate-x-[30px] before:transition-all before:duration-300 peer-checked:before:translate-x-[30px]"
      />
    </label>
  );
};

export default SwitchPersonalizacion;