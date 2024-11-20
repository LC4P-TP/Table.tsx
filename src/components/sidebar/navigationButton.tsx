import React from "react";
import { useNavigate } from "react-router-dom";
import buttonsMap from "./buttonsMap";
import styles from "./sidebar.module.scss";

const NavigationButton: React.FC<{ name: string; customStyle: string }> = ({ name, customStyle }) => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className={`mainButtonStyles ${styles[customStyle]}`}
      onClick={() => navigate(buttonsMap[name])}
    >
      {name}
    </button>
  );
};

export default NavigationButton;
