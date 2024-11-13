import React, { ComponentType, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { registerUser } from "../redux/slices/UserSlice/userSlice";

import "../Pages/main.scss";


function RequireAuth<P extends object>(WrappedComponent: ComponentType<P>) {
  const AuthComponent: React.FC<P> = (props) => {
    const dispatch = useAppDispatch();
    const data = useAppSelector((state) => state.userReducer);

    useEffect(() => {
        dispatch(registerUser());
    }, [dispatch]);

    if (!data.isSuccess) {
      return (
        <div className="main">
          <h2>Please log in</h2>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
}

export default RequireAuth;
