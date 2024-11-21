import React, { ComponentType, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/store";
import "../Pages/main.scss";
import { logout } from "../redux/slices/UserSlice/userSlice";

function RequireAuth<P extends object>(Component: ComponentType<P>) {
  function AuthComponent(props: P): React.ReactElement | null {
    const dispatch = useAppDispatch();
    const location = useLocation();

    const { success } = useAppSelector((state) => state.user);

    useEffect(() => {
      if (success) {
        const timerDuration = 30 * 60 * 1000;

        const timer = setTimeout(() => {
          dispatch(logout());
        }, timerDuration);

        return () => clearTimeout(timer);
      }

      return () => {};
    }, [success, dispatch]);

    if (!success) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...props} />;
  }

  return AuthComponent;
}

export default RequireAuth;
