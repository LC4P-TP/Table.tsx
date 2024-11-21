import { useMemo } from "react";
import { useAppSelector } from "../redux/store";
import { Access } from "../redux/mockAPI/loginUserAPI";

const useAccessToWrite = (accesName: keyof Access) => {
  const { access } = useAppSelector((state) => state.user);

  return useMemo(() => access[accesName] === 15, [access, accesName]);
};

export default useAccessToWrite;
