import { Access, AccessType } from "../redux/mockAPI/loginUserAPI";

export const accessToWrite = (accesName: AccessType, access: Access) => access[accesName] === 15;

export const accessToShow = (accesName: AccessType, access: Access) => access[accesName] === 15 || access[accesName] === 4;
