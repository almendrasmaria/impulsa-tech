import React, { useState, useMemo } from 'react';

// Definición de la estructura de una pregunta
interface FAQ {
    id: number;
    pregunta: string;
    respuesta: string;
}

// Datos de las Preguntas Frecuentes
const faqs: FAQ[] = [
    {
        id: 1,
        pregunta: '¿Cómo creo una cuenta en ImpulsaTech?',
        respuesta: 'Puedes crearte una cuenta en la opción "Crear Cuenta", escribiendo un nombre, apellido, contraseña y email.',
    },
    {
        id: 2,
        pregunta: 'Olvidé mi contraseña ¿Qué debo hacer?',
        respuesta: 'Puedes seleccionar la opción olvidé mi contraseña, en la parte inferior del campo donde ingresar tu contraseña.',
    },
    {
        id: 3,
        pregunta: '¿Cómo cambio mi contraseña?',
        respuesta: 'Puedes seleccionar la opción olvidé mi contraseña, en la parte inferior del campo donde dice “ingresar tu contraseña”.',
    },
    {
        id: 4,
        pregunta: '¿Cómo me postulo a una oferta?',
        respuesta: 'Debes iniciar sesión con tu cuenta, navegar a la sección de Oportunidades, seleccionar la oferta de tu interés y hacer clic en "Postularme".',
    },
    {
        id: 5,
        pregunta: '¿Puedo eliminar una postulación?',
        respuesta: 'Sí, puedes eliminar o cancelar una postulación accediendo a la sección "Mis Postulaciones" en tu perfil y seleccionando la opción correspondiente.',
    },
    {
        id: 6,
        pregunta: '¿Cómo puedo contactarme con soporte?',
        respuesta: 'Puedes contactarte por mail con nosotros o por medio de nuestras redes sociales, tanto como LinkedIn, Instagram.',
    },
];

const Cuerpo: React.FC = () => {
    // Estado para controlar qué pregunta está abierta.
    const [openId, setOpenId] = useState<number | null>(faqs[0].id);

    const [searchTerm, setSearchTerm] = useState<string>('');

    // Handler para actualizar el término de búsqueda
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredFaqs = useMemo(() => {
        if (!searchTerm) {
            return faqs; // Si no hay búsqueda, devuelve todas
        }

        const lowerCaseSearchTerm = searchTerm.toLowerCase();

        return faqs.filter(faq =>
            // Busca coincidencias en la pregunta o la respuesta
            faq.pregunta.toLowerCase().includes(lowerCaseSearchTerm) ||
            faq.respuesta.toLowerCase().includes(lowerCaseSearchTerm)
        );
    }, [searchTerm]);

    // Lógica para abrir/cerrar un FAQ
    const toggleFAQ = (id: number) => {
        setOpenId(openId === id ? null : id);
    };


    React.useEffect(() => {
        if (searchTerm) {
            // Si la pregunta abierta ya no está en la lista filtrada
            const currentOpenStillExists = filteredFaqs.some(faq => faq.id === openId);
            
            if (!currentOpenStillExists && filteredFaqs.length > 0) {
                // Abrir la primera pregunta de la lista filtrada
                setOpenId(filteredFaqs[0].id);
            } else if (filteredFaqs.length === 0) {
                 // Si no hay resultados, cerrar todo
                setOpenId(null);
            }
            // Si la pregunta abierta sigue en la lista, no hacemos nada (mantenemos el estado)

        } else if (filteredFaqs.length > 0) {
            // Si el campo de búsqueda se limpia, abrir la primera por defecto
            setOpenId(faqs[0].id);
        }
    }, [searchTerm, filteredFaqs]);


    return (
        <main className="flex justify-center p-4 md:p-8">
            <div className="max-w-4xl w-full">
                {/* Título y Subtítulo */}
                <h1 className="text-2xl md:text-3xl font-bold text-center mt-8 mb-4 text-blue-950">
                    Preguntas Frecuentes
                </h1>
                <p className="text-base md:text-lg text-gray-700 text-center mb-10 px-4">
                    A continuación podrás buscar información por preguntas o por palabra clave
                </p>

                {/* Búsqueda */}
                <div className="flex justify-center mb-10">
                    <input 
                        type="text" 
                        placeholder="Buscar por palabra clave..." 
                        className="w-full max-w-lg p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>

                {/* Contenedor de Acordeones */}
                <div className="faqs-acordeon space-y-4">
                    {/* Iteramos sobre la lista filtrada */}
                    {filteredFaqs.map((faq) => (
                        <div 
                            key={faq.id} 
                            className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg"
                        >
                            {/* Encabezado/Pregunta */}
                            <button
                                onClick={() => toggleFAQ(faq.id)}
                                className="w-full flex justify-between items-center p-4 md:p-5 text-left font-semibold text-gray-800 focus:outline-none"
                                aria-expanded={openId === faq.id}
                            >
                                <span className="text-base md:text-lg">{faq.pregunta}</span>
                                {/* Icono de flecha */}
                                <svg 
                                    className={`w-6 h-6 text-blue-600 transition-transform duration-300 ${openId === faq.id ? 'transform rotate-180' : ''}`} 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24" 
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth="2" 
                                        d="M19 9l-7 7-7-7"
                                    ></path>
                                </svg>
                            </button>

                            {/* Contenido/Respuesta */}
                            <div 
                                className={`faq-respuesta transition-all duration-500 ease-in-out ${openId === faq.id ? 'max-h-screen opacity-100 p-4 pt-0 md:p-5 md:pt-0' : 'max-h-0 opacity-0 p-0'}`} 
                            >
                                <div className="border-t border-gray-100 pt-4">
                                    <p className="text-sm md:text-base text-gray-600">
                                        {faq.respuesta}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Mensaje de No Resultados */}
                    {filteredFaqs.length === 0 && (
                        <div className="text-center p-10 bg-white rounded-lg shadow-md">
                            <p className="text-lg text-gray-500">
                                😔 No se encontraron preguntas frecuentes que coincidan con "**{searchTerm}**".
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Cuerpo;