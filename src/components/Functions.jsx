
import{ useState } from 'react';

export default function MenuHamburguesa() {
  // Estado para controlar si el menú está abierto o cerrado
  const [menuActivo, setMenuActivo] = useState(false);

  // Función que se ejecuta al hacer clic en el botón
  const toggleMenu = () => {
    setMenuActivo(!menuActivo);
  }}