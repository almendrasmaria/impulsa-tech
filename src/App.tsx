
import React from "react";
import CookieAlert from "./components/CookieAlert";
import Cookie from "../pages/Cookie";

const App: React.FC = () => {
  return (
    <>
      <Cookie />
      <CookieAlert />
    </>
  );
};

export default App;
