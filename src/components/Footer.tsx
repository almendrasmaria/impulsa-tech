const Footer = () => {
    return (
        <div className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
                <div className="w-full md:w-1/3 mb-8 md:mb-0">
                    <img 
                        src="images/logo-light.png" 
                        alt="Impulsa Tech"
                        className="h-10 md:h-12 object-contain mb-4" 
                    />
                    <p className="text-gray-400">Es una plataforma dedicada a conectar a personas sin experiencia con su primera oportunidad en el mundo tecnológico.</p>
                </div>
                <div>
                    <h3 className="text-white text-lg font-bold mb-4 mt-3">Nosotros</h3>
                    <ul className="flex flex-col gap-2 text-gray-400">
                        <a href="#" className="hover:text-white">Inicio</a>
                        <a href="#" className="hover:text-white">Oportunidades</a>
                        <a href="#" className="hover:text-white">FAQs</a> 
                        <a href="#" className="hover:text-white">Política de privacidad</a>
                    </ul>
                </div>
                <div className="w-full md:w-1/3">
                    <h3 className="text-white text-lg font-bold mb-4 mt-3">Suscríbete a nuestro boletín</h3>
                    <p className="text-gray-400 mb-4 max-w-80">Recibe las últimas oportunidades laborales en tu correo.</p>
                    <div className="flex gap-2">
                        <input 
                            type="email" 
                            placeholder="Ingrese su email" 
                            className="p-2 rounded bg-gray-800 text-gray-400 broder border-gray-700 focus:outline-none w-full md:w-auto"
                        />
                        <button className="bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700 transition-colors">Suscribirse</button>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
                Copyright 2025 © ImpulsaTech. Todos los derechos reservados. 
            </div>
        </div>
    )
}

export default Footer;