
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

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

const STORAGE_KEY = "cookiePreferences";

export const CookieProvider: React.FC<CookieProviderProps> = ({ children }) => {
  const [personalizacion, setPersonalizacion] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const preferences = JSON.parse(saved);
      return preferences.personalizacion || false;
    }
    return false;
  });

  const [rendimiento, setRendimiento] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const preferences = JSON.parse(saved);
      return preferences.rendimiento || false;
    }
    return false;
  });

  
  useEffect(() => {
    const preferences = {
      personalizacion,
      rendimiento,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  }, [personalizacion, rendimiento]);

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