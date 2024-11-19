import React, { ComponentType, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Navigate, useLocation } from "react-router-dom";
import "../Pages/main.scss";
import { logout } from "../redux/slices/UserSlice/userSlice";

function RequireAuth<P extends object>(Component: ComponentType<P>) {
  const AuthComponent = (props: P): React.ReactElement | null => {
    const dispatch = useAppDispatch();
    const location = useLocation();

    const { success } = useAppSelector((state) => state.userReducer);

    const timerDuration = 30 * 60 * 1000;

    useEffect(() => {
      if (success) {
        const timer = setTimeout(() => {
          dispatch(logout());
        }, timerDuration);

        return () => clearTimeout(timer);
      }
    }, [success]);

    if (!success) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <Component {...props} />;
  };

  return AuthComponent;
}

export default RequireAuth;
