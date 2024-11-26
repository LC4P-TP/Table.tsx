import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/store";
import styles from "./pedsonalAccountButtton.module.scss";

function PedsonalAccountButtton() {
  const navigate = useNavigate();

  const { success } = useAppSelector((state) => state.user);

  return (
    <button
      type="button"
      className={styles.pedsonalAccountButtton}
      onClick={() => navigate("/UsersPersonalAccount")}
      disabled={!success}
    >
      <div className={styles.imgBox}>
        <div className={styles.personIcon} />
      </div>
      <div className={styles.title}>Personal account</div>
    </button>
  );
}

export default PedsonalAccountButtton;
