
const ButtonAlert = ({children}) => {
  return (
    <button className="flex justify-center items-center text-white bg-blue-700 button rounded-[10px] cursor-pointer p-2">
      {children}
    </button>
  );
}

export default ButtonAlert