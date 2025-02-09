import { userData } from "../../../tests/testData/testData";

export type AccessType = "testPage" | "testPageMenu" | "testPageSubMenu";

export interface Access {
  id: number;
  name: string | null;
  testPage: boolean;
  testPageMenu: boolean;
  testPageSubMenu: boolean;
  supervisor: boolean;
}

interface Response {
  name: string;
  surname: string;
  token: string;
  id: string;
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
