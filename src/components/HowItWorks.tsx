import { useState } from "react";
import { LuUser, LuBriefcase, LuSearch, LuSend } from "react-icons/lu";
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

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState<UserType>("talents");

  const buttonClass =
    "flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all focus:outline-none focus-visible:ring";
  const activeButtonClass = "bg-[#0058A3] text-white shadow-md";
  const inactiveButtonClass = "text-gray-600 hover:text-gray-900";

  return (
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
  );
};

export default HowItWorks;
