import React, { ComponentType, useMemo, JSX } from "react";
import { useAppSelector } from "../redux/store";
import "../Pages/main.scss";
import { Access } from "../redux/mockAPI/loginUserAPI";

interface RequireaccessToShowProps<P extends object> {
  accesName: keyof Access;
  Component: ComponentType<P & React.HTMLProps<HTMLElement>>;
}

function RequireaccessToShow<P extends JSX.IntrinsicAttributes>({
  accesName,
  Component,
}: RequireaccessToShowProps<P>): React.ReactElement | null {
  const { access } = useAppSelector((state) => state.user);

  const hasAccess = useMemo(() => {
    const key: keyof Access = accesName;
    return access[key] === 15 || access[key] === 4;
  }, [accesName, access]);

  if (hasAccess) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...({} as P)} />;
  }

  return null;
}

export default RequireaccessToShow;
