import { userData } from "../../../tests/testData/testData";

export type AccessType =
  | "material"
  | "specification"
  | "materialSettings"
  | "setupOrder"
  | "order"
  | "orderSettings"
  | "income"
  | "consumption"
  | "stock"
  | "logisticSettings"
  | "measurements"
  | "isManager"
  | "isHeadOfDepartment"
  | "isSupervisor";

export interface Access {
  id: number;
  name: string | null;
  material: number;
  specification: number;
  materialSettings: number;
  setupOrder: number;
  order: number;
  orderSettings: number;
  income: number;
  consumption: number;
  stock: number;
  logisticSettings: number;
  measurements: number;
  isHeadOfDepartment: boolean;
  isSupervisor: boolean;
  isManager: number;
}

interface Response {
  name: string;
  surname: string;
  isActivated: boolean;
  token: string;
  id: string;
  notificationToken: string;
  departmentId: number;
  department: string;
  access: Access;
}

export interface UserApiResponse {
  isSuccess: boolean;
  response: Response;
  error: string | null;
  statusCode: number;
}

const testGetUserData = (): UserApiResponse => userData;

export function getUserData() {
  return new Promise<UserApiResponse>((resolve, reject) => {
    setTimeout(() => {
      const userDataToCheck = testGetUserData();
      if (userDataToCheck.statusCode === 200) {
        resolve(userDataToCheck);
      } else {
        reject(new Error("somehting went wrong"));
      }
    }, 50);
  });
}
