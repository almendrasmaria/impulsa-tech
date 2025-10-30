

import React, { createContext, useState, useContext, ReactNode } from "react";

interface CookieContextType {
  personalizacion: boolean;
  rendimiento: boolean;
  
  

  togglePersonalizacion: () => void;
  toggleRendimiento: () => void;
  
  
  aceptarTodas: () => void;
  rechazarNoEsenciales: () => void;
}

const CookieContext = createContext<CookieContextType | undefined>(undefined);

interface CookieProviderProps {
  children: ReactNode;
}

export const CookieProvider: React.FC<CookieProviderProps> = ({ children }) => {
  const [personalizacion, setPersonalizacion] = useState(false);
  const [rendimiento, setRendimiento] = useState(false);

  
  const togglePersonalizacion = () => setPersonalizacion(!personalizacion);
  const toggleRendimiento = () => setRendimiento(!rendimiento);

  
  const aceptarTodas = () => {
    setPersonalizacion(true);
    setRendimiento(true);
  };

  const rechazarNoEsenciales = () => {
    setPersonalizacion(false);
    setRendimiento(false);
  };

  const contextValue: CookieContextType = {
    personalizacion,
    rendimiento,
    togglePersonalizacion, 
    toggleRendimiento, 
    aceptarTodas,
    rechazarNoEsenciales,
  };

  return (
    <CookieContext.Provider value={contextValue}>
      {children}
    </CookieContext.Provider>
  );
};

export const useCookiePreferences = () => {
  const context = useContext(CookieContext);
  if (context === undefined) {
    throw new Error(
      "useCookiePreferences must be used within a CookieProvider"
    );
  }
  return context;
};
