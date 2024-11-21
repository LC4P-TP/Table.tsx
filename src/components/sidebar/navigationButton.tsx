import { useNavigate } from "react-router-dom";
import buttonsMap from "./buttonsMap";
import styles from "./sidebar.module.scss";

function NavigationButton({ name, customStyle }: { name: string; customStyle: string }) {
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
}

export default NavigationButton;
