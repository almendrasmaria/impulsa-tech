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
      icon: <LuUser className="w-8 h-8" />,
      title: "Crea tu Perfil",
      description:
        "Registrate y completa tus datos y sube tu CV para mostrar tu talento.",
    },
    {
      icon: <LuSearch className="w-8 h-8" />,
      title: "Explorá empleos",
      description:
        "Explorá empleos, pasantías y programas de formación pensados para vos.",
    },
    {
      icon: <LuSend className="w-8 h-8" />,
      title: "Postúlate y Crecé",
      description:
        "Aplicá con un clic y comenzá a acercarte a tu futuro profesional sumando experiencia.",
    },
  ],
  companies: [
    {
      icon: <LuBriefcase className="w-8 h-8" />,
      title: "Crea tu Cuenta",
      description:
        "Registrá tu empresa y completá el perfil con información sobre tu organización.",
    },
    {
      icon: <LuSearch className="w-8 h-8" />,
      title: "Publicá ofertas",
      description:
        "Creá y publicá ofertas de empleo, pasantías o programas para atraer talento joven.",
    },
    {
      icon: <LuUser className="w-8 h-8" />,
      title: "Conectá con talento",
      description:
        "Revisá postulaciones, contactá candidatos y encontrá el talento ideal para tu empresa.",
    },
  ],
};

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState<UserType>("talents");

  const buttonClass =
    "flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all focus:outline-none focus-visible:ring";
  const activeButtonClass =
    "bg-blue-600 text-white shadow-md";
  const inactiveButtonClass =
    "text-gray-600 hover:text-gray-900";

  return (
    <motion.div 
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Cómo <span className="underline underline-offset-4 decoration-1 font-light">Funciona</span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Descubrí cómo funciona nuestra plataforma de empleo.
      </p>

      <div className="flex justify-center mb-10">
        <div className="inline-flex bg-white rounded-full p-1.5 shadow-lg ring-1 ring-black/5">
          <button
            onClick={() => setActiveTab("talents")}
            className={`${buttonClass} ${activeTab === "talents" ? activeButtonClass : inactiveButtonClass}`}
          >
            <LuUser className="w-5 h-5" />
            Para talentos
          </button>

          <button
            onClick={() => setActiveTab("companies")}
            className={`${buttonClass} ${activeTab === "companies" ? activeButtonClass : inactiveButtonClass}`}
          >
            <LuBriefcase className="w-5 h-5" />
            Para empresas
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 2xl:mx-16">
        {stepsData[activeTab].map((step, index) => (
          <article
            key={index}
            className="flex flex-col bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md hover:border-gray-300 transition-all"
          >
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white mb-6 mx-auto flex-shrink-0">
              {step.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{step.title}</h3>
            <p className="text-gray-600 text-center leading-relaxed text-base">{step.description}</p>
          </article>
        ))}
      </div>
    </motion.div>
  );
}

export default HowItWorks;
