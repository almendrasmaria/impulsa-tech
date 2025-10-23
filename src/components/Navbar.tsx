const Navbar = () => { 
    return (
        <div className="absolute top-0 left-0 w-full z-10">
            <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
                <img 
                    src="images/logo.png" 
                    alt="Impulsa Tech"
                    className="object-contain w-[150px] h-[70px] md:w-[180px] md:h-[100px]" 
                />
                <ul className="hidden md:flex gap-7 text-white ml-auto mr-6">
                    <a href="#Header" className="cursor-pointer hover:text-[#84B3FF] transition-colors">Inicio</a>
                    <a href="#" className="cursor-pointer hover:text-[#84B3FF] transition-colors">Oportunidades</a>
                    <a href="#" className="cursor-pointer hover:text-[#84B3FF] transition-colors">Publicar</a>
                </ul>
                <button className="hidden md:block bg-white px-8 py-2 rounded-full">Ingresar</button>
            </div>
        </div>
    )
}

export default Navbar