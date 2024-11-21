import { useAppSelector } from "../../redux/store";
import Sidebar from "../../components/sidebar/sidebar";
import styles from "./header.module.scss";

function Header() {
  const { success } = useAppSelector((state) => state.user);

  return (
    <div className={styles.header}>
      <div className={styles.left}>{success ? <Sidebar /> : null}</div>
      <div className={styles.middle}>
        <h3>T i t l e</h3>
      </div>
      <div className={styles.right}>Setings</div>
    </div>
  );
}

export default Header;
