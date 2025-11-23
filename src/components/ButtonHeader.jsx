import React from 'react'

const ButtonHeader = () => {
  return (
    <div>
      <button
        className="menu-toggle w-30px h-24px relative flex-direction-column justify-between cursor-pointer display-none bg-none borrder-none"
        aria-expanded="false"
        aria-controls="nav-menu"
      >
        <span className="block w-full h-3px bg-blue-950 border-radius-2px  "></span>
        <span className="bg-gray-800"></span>
        <span className="bg-gray-800"></span>
      </button>
    </div>
  );
}

export default ButtonHeader