

import styled from "styled-components";
import React from "react";
import { useCookiePreferences } from "../context/CookiePreferenceContext";
// [Importar styled-components y estilos]

// ... (El código de Styled-components: HiddenCheckbox y Slider se mantiene) ...

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

const Slider = styled.span`
  position: static;
  width: 60px;
  height: 30px;
  background-color: lightgray;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  border: 4px solid transparent;
  transition: 0.3s;
  cursor: pointer;

  ${HiddenCheckbox}:checked + & {
    background-color: #1829db;
  }

  // Pseudo-elemento ::before
  &::before {
    content: "";
    position: static;
    display: relative;
    width: 100%;
    height: 100%;
    background-color: #fff;
    transform: translateX(-30px);
    border-radius: 20px;
    transition: 0.3s;
  }

  ${HiddenCheckbox}:checked + &::before {
    transform: translateX(30px);
  }

  ${HiddenCheckbox}:active + &::before {
    /* ${HiddenCheckbox}:active + &::before {
        transform: translate(0);
    } */
  }
`;

const SwitchPersonalizacion: React.FC = () => {
  // Solo necesitamos el estado y la función de TOGGLE específica
  const { personalizacion, togglePersonalizacion } = useCookiePreferences();

  return (
    <label>
      <HiddenCheckbox
        id="toggle-personalizacion"
        checked={personalizacion}
        // Usamos la función de TOGGLE específica
        onChange={togglePersonalizacion} 
      />
      <Slider aria-hidden="true" />
    </label>
  );
};

export default SwitchPersonalizacion;