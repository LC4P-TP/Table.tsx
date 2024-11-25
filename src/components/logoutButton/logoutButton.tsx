import { useAppDispatch } from "../../redux/store";
import { logout } from "../../redux/slices/UserSlice/userSlice";
import styles from "./logoutButton.module.scss";
import logoutIMG from "../../assets/logout.png";

function LogoutButton() {
  const dispatch = useAppDispatch();

  const handleLoout = () => {
    dispatch(logout());
  };

  return (
    <button type="submit" className={styles.logoutButton} onClick={handleLoout}>
      <div className={styles.imgBox}>
        <img src={logoutIMG} alt="logout" />
      </div>
      <div className={styles.title}>Logout</div>
    </button>
  );
}

export default LogoutButton;
