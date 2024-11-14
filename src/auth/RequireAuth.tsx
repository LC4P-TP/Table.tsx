import React, { ComponentType, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { loginUser } from "../redux/slices/UserSlice/userSlice";

import "../Pages/main.scss";

function RequireAuth<P extends object>(WrappedComponent: ComponentType<P>) {
  const AuthComponent: React.FC<P> = (props) => {
    const dispatch = useAppDispatch();
    const { success, loading } = useAppSelector((state) => state.userReducer);

    useEffect(() => {
      dispatch(loginUser());
    }, [dispatch]);

    if (loading) {
      return (
        <div className="main">
          <h2>Loading...</h2>
        </div>
      );
    }

    if (!success) {
      return (
        <div className="main">
          <h2>Please login</h2>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
}

export default RequireAuth;
