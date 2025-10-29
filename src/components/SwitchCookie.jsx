import { useState } from "react";
import styled from "styled-components";


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

const Switch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <label>
      <HiddenCheckbox
        id="toggle-checkbox"
        checked={isOn}
        onChange={handleToggle}
      />
      <Slider aria-hidden="true" />
    </label>
  );
};

export default Switch;
