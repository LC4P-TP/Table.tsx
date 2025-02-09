import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/store";
import styles from "./navigationButton.module.scss";
import { buttonsAccessMap, buttonsPathMap } from "../../sidebar/buttonsMaps";
import { Access } from "../../../services/mockAPI/loginUserAPI";

export function NavigationButton({ name, customStyle }: { name: string; customStyle: string }) {
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

export function PermissionToNavigationButton({ name, access }: { name: string; access: Access }) {
  return access[buttonsAccessMap[name]] ? (
    <NavigationButton key={name} name={name} customStyle="navigationButton" />
  ) : null;
}
