import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import styles from "./login.module.scss";
import { loginUser } from "../../redux/slices/UserSlice/userSlice";
import loginIMG from "../../assets/log-in.png";

function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { success } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (success) {
      navigate(from, { replace: true });
    }
  }, [navigate, success, from]);

  const login = () => {
    dispatch(loginUser());
  };

  return (
    <div className="main">
      <div className={styles.loginBox}>
        <h5 className={styles.text}>Login</h5>
        <input type="text" name="login" />

        <h5 className={styles.text}>Password</h5>
        <input type="password" name="password" />

        <button type="submit" className={styles.loginButton} onClick={login}>
          <img src={loginIMG} alt="login" />
        </button>
      </div>
    </div>
  );
}

export default Login;
