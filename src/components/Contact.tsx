import { motion } from "framer-motion";

const Contact = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
        >
            <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
            Contactá <span className="underline underline-offset-4 decoration-1 font-light">con ImpulsaTech</span>
            </h1>
            <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
                ¿Querés colaborar o tenés dudas? Estamos para escucharte.
            </p>
            <form className="max-w-2xl mx-auto text-gray-600 pt-8">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 text-left">
                    <label className="block mb-1 font-medium">Nombre completo</label>
                    <input
                        className="w-full border border-gray-300 rounded py-3 px-4 mt-1"
                        type="text"
                        name="Name"
                        placeholder="Ej: Ana Pérez"
                        required
                    />
                    </div>

                    <div className="w-full md:w-1/2 text-left md:pl-4">
                    <label className="block mb-1 font-medium">Correo electrónico</label>
                    <input
                        className="w-full border border-gray-300 rounded py-3 px-4 mt-1"
                        type="email"
                        name="Email"
                        placeholder="Ej: ana.perez@correo.com"
                        required
                    />
                    </div>
                </div>

                <div className="my-6 text-left">
                    <label className="block mb-1 font-medium">Mensaje</label>
                    <textarea
                    className="w-full border border-gray-300 rounded py-3 px-4 mt-1 h-48 resize-none"
                    name="Message"
                    placeholder="Escribí tu mensaje..."
                    required
                    ></textarea>
                </div>

                <button className="bg-blue-600 text-white py-2 px-12 mb-10 rounded hover:bg-blue-700 transition-colors">
                    Enviar mensaje
                </button>
            </form>
        </motion.div>

    )
}

export default Contact