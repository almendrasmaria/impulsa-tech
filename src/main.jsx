import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Cookie from "./Cookie.jsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Cookie />
    </BrowserRouter>
  </StrictMode>
);
