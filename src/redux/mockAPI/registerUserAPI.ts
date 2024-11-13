import { userData } from "../../../tests/testData/testData";

interface Access {
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
  access: Access;
  id: string;
  notificationToken: string;
  departmentId: number;
  department: string;
}

export interface UserApiResponse {
  isSuccess: boolean;
  response: Response;
  error: string | null;
  statusCode: number;
}


const _getUserData = () => {
  return userData;
}

export function getUserData(){
  return new Promise<UserApiResponse>((resolve, reject) => {
    setTimeout(() => {
      if (userData.isSuccess) {
        resolve(_getUserData());
      } else {
        reject(new Error("somehting went wrong"));
      }
    }, 500);
  });
}