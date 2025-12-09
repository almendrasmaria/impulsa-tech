import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ToastProvider } from "./components/ToastProvider";
import { CookieProvider } from './context/CookiePreferenceContext';

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

createRoot(rootElement).render(
  <React.StrictMode>
    <CookieProvider>
    <ToastProvider>
      <App />
    </ToastProvider>
    </CookieProvider>
  </React.StrictMode>
);

/*
En el caso de que se no se aplique Cookie Alert (Mensaje de aceptar, rechazar o personalizar las cookies) 
por x motivo, se puede eliminar CookieProvider. No se está llamando al componente en ninguna página. 
*/
