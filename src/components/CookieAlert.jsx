import ButtonAlert from './ButtonAlert';
import ButtonPersonalizar from './ButtonPersonalizar';
import ButtonX from './ButtonX';
import { useState } from "react";


const CookieAlert = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null; 
  return (
    <div class="w-screen justify-start items-center bg-white border border-gray-300 bottom-0 fixed font-light p-5">
      <div className="flex justify-end">
        <ButtonX onClick={() => setVisible(false)} />
      </div>
      <p className="pt-1 pb-1 m-2">
        Impulsa Tech utiliza cookies para mejorar tu experiencia, analizar el
        uso del sitio y mostrarte contenido personalizado. Podés aceptar todas,
        rechazar o personalizar tus preferencias en cualquier momento.
      </p>
      <div class="flex justify-start gap-1 ml-2 flex-wrap md:flex">
        <ButtonAlert>Aceptar</ButtonAlert>
        <ButtonAlert>Rechazar</ButtonAlert>
        <ButtonPersonalizar />
      </div>
    </div>
  );
}

export default CookieAlert