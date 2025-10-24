import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => { 
    const [showMobileMenu, setShowMobileMenu] = useState(false); 

    useEffect (() => {
        if(showMobileMenu){
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showMobileMenu])

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
                    <a href="#" className="cursor-pointer hover:text-[#84B3FF] transition-colors whitespace-nowrap">Soy Empresa</a>
                </ul>
                <button className="hidden md:block bg-white px-8 py-2 rounded-full">Ingresar</button>
                <FiMenu onClick={() => setShowMobileMenu(true)} className="md:hidden w-7.5 h-auto text-white cursor-pointer" />
            </div>
            {/* ------- mobile-menu ------- */}
            <div className={`md:hidden ${showMobileMenu ? "fixed w-full" : "h-0 w-0"} fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
                <div className="flex justify-end p-6 cursor-pointer">
                    <FiX onClick={() => setShowMobileMenu(false)}  className="w-7 h-auto" />
                </div>
                <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
                    <a href="#Header" className="px-4 py-2 rounded-full inline-block">Inicio</a>
                    <a href="#Header" className="px-4 py-2 rounded-full inline-block">Oportunidades</a>
                    <a href="#Header" className="px-4 py-2 rounded-full inline-block">Soy Empresa</a>
                </ul>
                <button className="block md:hidden mt-4 bg-[#2957FF] text-white px-10 py-2 rounded-full font-semibold hover:bg-[#1e46d9] transition mx-auto">
                    Ingresar
                </button>
            </div>
        </div>
    )
}

export default Navbar