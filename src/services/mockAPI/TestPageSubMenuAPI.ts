import { TestPageSubMenuData } from "../../../tests/testData/testData";
import { GeneralReponse } from "../../redux/slices/GeneralSliceTypes/generalSliceTypes";

export interface TestPageSubMenu {
  id: number;
  column_1: string;
  column_2: string;
  column_3: number;
}

const testPageSubMenuGetData = () => TestPageSubMenuData;

export function getData() {
  return new Promise<GeneralReponse<TestPageSubMenu>>((resolve, reject) => {
    setTimeout(() => {
      const TestPageSubMenuDataToCheck = testPageSubMenuGetData();
      if (TestPageSubMenuDataToCheck.statusCode === 200) {
        resolve(TestPageSubMenuDataToCheck);
      } else {
        reject(new Error("somehting went wrong"));
      }
    }, 50);
  });
}
