import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/store";
import { buttonsPathMap } from "./buttonsMaps";
import styles from "./sidebar.module.scss";

function NavigationButton({ name, customStyle }: { name: string; customStyle: string }) {
  const navigate = useNavigate();

  const { success } = useAppSelector((state) => state.user);

  return (
    <button
      type="button"
      className={`mainButtonStyles ${styles[customStyle]}`}
      onClick={() => navigate(buttonsPathMap[name])}
      disabled={!success}
    >
      {name}
    </button>
  );
}

export default NavigationButton;
