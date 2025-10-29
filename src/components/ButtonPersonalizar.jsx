import { Link } from "react-router";

const ButtonPersonalizar = () => {
  
  return (
    <Link to="/cookie"
      className="flex justify-center items-center text-white bg-gray-500 button rounded-[10px] cursor-pointer p-2"
    >
      Personalizar
    </Link>
  );
};

export default ButtonPersonalizar;
