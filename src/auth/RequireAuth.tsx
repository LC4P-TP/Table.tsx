import React, { ComponentType } from "react";
import { useAppSelector } from "../redux/hooks";
import { Navigate, useLocation } from "react-router-dom";

import "../Pages/main.scss";

function RequireAuth<P extends object>(Component: ComponentType<P>) {
  const AuthComponent: React.FC<P> = (props) => {
    const location = useLocation();
    const path = useLocation().pathname;

    const { success } = useAppSelector((state) => state.userReducer);

    if (!success) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <Component {...props} />;
  };

  return AuthComponent;
}

export default RequireAuth;
