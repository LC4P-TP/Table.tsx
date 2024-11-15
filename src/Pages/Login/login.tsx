import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loginUser } from "../../redux/slices/UserSlice/userSlice";
import "../main.scss";
import styles from "./login.module.scss";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { success } = useAppSelector((state) => state.userReducer);

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
        <input type="text" name="login" />

        <input type="password" name="password" />

        <button type="submit" onClick={login}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Login;
