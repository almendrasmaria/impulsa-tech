import { motion } from "framer-motion";

const Contact = () => {
  return (
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
              <label className="block mb-1 font-medium">Correo electrónico</label>
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
  );
};

export default Contact;
