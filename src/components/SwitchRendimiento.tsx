/* 
/*
En caso de que tire error styled componentes, las dependencias debe tener: 

        "dependencies": {
            "styled-components": "^6.1.19"
          },
*/

import styled from "styled-components";
import { useCookiePreferences } from "../context/CookiePreferenceContext";



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

const SwitchRendimiento: React.FC = () => {
  
  const { rendimiento, toggleRendimiento } = useCookiePreferences();

  return (
    <label>
      <HiddenCheckbox
        id="toggle-rendimiento"
        checked={rendimiento}
        onChange={toggleRendimiento}
      />
      <Slider aria-hidden="true" />
    </label>
  );
};

export default SwitchRendimiento;
