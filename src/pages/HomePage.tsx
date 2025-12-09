import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import {
  LuShieldCheck,
  LuRocket,
  LuSparkles,
  LuUser,
  LuBriefcase,
  LuSearch,
  LuSend,
} from "react-icons/lu";
import { motion } from "framer-motion";

type UserType = "talents" | "companies";

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const stepsData: Record<UserType, Step[]> = {
  talents: [
    {
      icon: <LuUser className="w-8 h-8 text-[#0058A3]" />,
      title: "Crea tu perfil",
      description:
        "Registrate y completá tu perfil para mostrar tus habilidades y experiencia.",
    },
    {
      icon: <LuSearch className="w-8 h-8 text-[#0058A3]" />,
      title: "Explorá oportunidades",
      description:
        "Descubrí empleos, pasantías y programas trainee pensados para talento junior.",
    },
    {
      icon: <LuSend className="w-8 h-8 text-[#0058A3]" />,
      title: "Postulate fácilmente",
      description:
        "Aplicá con un clic a las posiciones que te interesen usando tu perfil.",
    },
  ],
  companies: [
    {
      icon: <LuBriefcase className="w-8 h-8 text-[#0058A3]" />,
      title: "Crea tu cuenta empresa",
      description:
        "Registrá tu organización y configurá tu perfil corporativo.",
    },
    {
      icon: <LuSearch className="w-8 h-8 text-[#0058A3]" />,
      title: "Publicá tus ofertas",
      description:
        "Creá empleos, pasantías y programas para atraer talento emergente.",
    },
    {
      icon: <LuUser className="w-8 h-8 text-[#0058A3]" />,
      title: "Conectá con talento",
      description:
        "Revisá postulaciones y encontrá los perfiles que mejor se adapten a tu equipo.",
    },
  ],
};

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<UserType>("talents");
  const navigate = useNavigate();

  const handleSearchSubmit = () => {
    const params = new URLSearchParams();

    if (searchTerm.trim()) params.set("q", searchTerm.trim());
    if (selectedLocation) params.set("loc", selectedLocation);

    navigate(`/oportunidades?${params.toString()}`);
  };

  const buttonClass =
    "flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all focus:outline-none focus-visible:ring";
  const activeButtonClass = "bg-[#0058A3] text-white shadow-md";
  const inactiveButtonClass = "text-gray-600 hover:text-gray-900";

  return (
    <div className="w-full overflow-hidden">
      <Navbar />

      {/* HERO */}
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

      {/* HOW IT WORKS */}
      <section className="w-full py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center text-[#0F172A]">
            ¿Cómo funciona ImpulsaTech?
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto text-sm md:text-base">
            En pocos pasos podés comenzar a usar la plataforma.
          </p>

          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-white rounded-full p-1.5 shadow-lg ring-1 ring-black/5">
              <button
                onClick={() => setActiveTab("talents")}
                className={`${buttonClass} ${
                  activeTab === "talents"
                    ? activeButtonClass
                    : inactiveButtonClass
                }`}
              >
                <LuUser className="w-5 h-5" />
                Para talentos
              </button>

              <button
                onClick={() => setActiveTab("companies")}
                className={`${buttonClass} ${
                  activeTab === "companies"
                    ? activeButtonClass
                    : inactiveButtonClass
                }`}
              >
                <LuBriefcase className="w-5 h-5" />
                Para empresas
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stepsData[activeTab].map((step, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="
                  flex flex-col items-center text-center
                  bg-white rounded-[28px] p-10
                  shadow-sm border border-[#E3E8FF]
                  hover:shadow-lg hover:-translate-y-1
                  transition-all
                "
              >
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#E7F0FF] mb-6">
                  {step.icon}
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-[#0F172A] mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="w-full bg-white py-20 px-6 lg:px-32">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-[#0F172A]">
            Contactá con <span className="text-[#0058A3]">ImpulsaTech</span>
          </h1>

          <p className="text-gray-600 mb-10 max-w-md mx-auto">
            ¿Querés colaborar o tenés dudas? ¡Estamos para escucharte!
          </p>

          <form className="max-w-2xl mx-auto text-gray-600">
            <div className="flex flex-wrap gap-6">
              <div className="w-full md:flex-1 text-left">
                <label className="block mb-1 font-medium">Nombre completo</label>
                <input
                  type="text"
                  placeholder="Ej: Ana Pérez"
                  required
                  className="
                    w-full rounded-xl py-3 px-4 mt-1
                    border border-gray-300 
                    focus:ring-2 focus:ring-[#84B3FF] focus:outline-none
                  "
                />
              </div>

              <div className="w-full md:flex-1 text-left">
                <label className="block mb-1 font-medium">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  placeholder="Ej: ana.perez@correo.com"
                  required
                  className="
                    w-full rounded-xl py-3 px-4 mt-1
                    border border-gray-300 
                    focus:ring-2 focus:ring-[#84B3FF] focus:outline-none
                  "
                />
              </div>
            </div>

            <div className="my-6 text-left">
              <label className="block mb-1 font-medium">Mensaje</label>
              <textarea
                required
                placeholder="Escribí tu mensaje..."
                className="
                  w-full h-48 rounded-xl py-3 px-4 mt-1 resize-none
                  border border-gray-300 
                  focus:ring-2 focus:ring-[#84B3FF] focus:outline-none
                "
              ></textarea>
            </div>

            <button
              className="
                bg-[#0058A3] text-white py-3 px-12 rounded-full 
                font-medium shadow-md
                hover:bg-[#003B80] transition-colors
              "
            >
              Enviar mensaje
            </button>
          </form>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;