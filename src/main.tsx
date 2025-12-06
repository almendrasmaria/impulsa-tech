
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CookieProvider } from './context/CookiePreferenceContext';

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element not found')

createRoot(rootElement).render(
    <React.StrictMode>
        
        <CookieProvider>
            <App />
        
        </CookieProvider>
    </React.StrictMode>
)