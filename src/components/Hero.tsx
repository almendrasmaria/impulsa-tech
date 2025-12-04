import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { LuShieldCheck, LuRocket, LuSparkles } from "react-icons/lu";
import { motion } from "framer-motion";

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSearchSubmit = () => {
    const params = new URLSearchParams();

    if (searchTerm.trim()) params.set("q", searchTerm.trim());
    if (selectedLocation) params.set("loc", selectedLocation);

    navigate(`/oportunidades?${params.toString()}`);
  };

  return (
    <section
      className="
        relative flex flex-col justify-center w-full overflow-hidden 
        min-h-[70vh]
        bg-gradient-to-r from-[#E8F0FF] to-white
      "
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-4xl mx-auto text-center px-6 md:px-10 lg:px-20 text-gray-800"
      >
        <p className="uppercase font-semibold tracking-wide text-xs sm:text-sm md:text-base text-[#003B80]">
          ÚNETE A <span className="text-[#0058A3]">IMPULSATECH</span>
        </p>

        <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold mt-3 leading-tight">
          Impulsa tu carrera en{" "}
          <span className="text-[#0058A3]">tecnología</span>
        </h1>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Encontrá empleos junior, programas trainee, internships, academias y
          bootcamps, todo en un solo portal.
        </p>

        <div className="mt-8 max-w-3xl mx-auto w-full">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            onSearchSubmit={handleSearchSubmit}
            selectedLocation={selectedLocation}
            onLocationChange={setSelectedLocation}
          />
        </div>

        <div className="mt-10 flex items-center justify-center gap-10 flex-wrap">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.4 }}
            whileHover={{ scale: 1.05, y: -4 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#E7F0FF] text-[#0058A3]">
              <LuShieldCheck className="w-8 h-8" />
            </div>
            <p className="text-sm font-medium text-gray-700">Seguridad</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.8 }}
            whileHover={{ scale: 1.05, y: -4 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#E7F0FF] text-[#0058A3]">
              <LuRocket className="w-8 h-8" />
            </div>
            <p className="text-sm font-medium text-gray-700">Crecimiento</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 1.2 }}
            whileHover={{ scale: 1.05, y: -4 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#E7F0FF] text-[#0058A3]">
              <LuSparkles className="w-8 h-8" />
            </div>
            <p className="text-sm font-medium text-gray-700">Oportunidades</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
