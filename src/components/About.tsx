const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Sobre <span className="underline underline-offset-4 decoration-1 font-light"> ImpulsaTech</span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Impulsando tu primer paso en tecnología
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img src="images/about-section.png" alt="" className="w-full sm:w-1/2 max-w-lg rounded-t-full shadow-md" />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">+200</p>
              <p>Talentos registrados</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">+30</p>
              <p>Empresas aliadas</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">+15</p>
              <p>Programas de formación</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">+10</p>
              <p>Proyectos activos</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            Plataforma diseñada para conectar a nuevos talentos con su primera experiencia laboral en tecnología.
            Facilita el acceso a empleos, pasantías y programas formativos que potencian el desarrollo profesional.
          </p>
          <button className="bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700 transition-colors">Ver oportunidades</button>
        </div>
      </div>
    </div>
  );
};

export default About;
