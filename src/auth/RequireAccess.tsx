import React, { ComponentType } from "react";
import { useAppSelector } from "../redux/hooks";
import "../Pages/main.scss";

function RequireAccess<P extends object>(accesName: string, Component: ComponentType<P>) {
  const AuthComponent = (props: P): React.ReactElement | null => {
    const { access } = useAppSelector((state) => state.userReducer);

    if (access[accesName] === 15 || access[accesName] === 4) {
      return <Component {...props} />;
    }

    return null;
  };

  return AuthComponent;
}

export default RequireAccess;
