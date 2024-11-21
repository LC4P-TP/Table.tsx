import React, { ComponentType, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { logout } from "../redux/slices/UserSlice/userSlice";

function RequireAuth({ Component }: { Component: ComponentType }): React.ReactElement | null {
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

  return <Component />;
}

export default RequireAuth;
