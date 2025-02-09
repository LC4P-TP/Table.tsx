import { TestPageMenuData } from "../../../tests/testData/testData";
import { GeneralReponse } from "../../redux/slices/GeneralSliceTypes/generalSliceTypes";

export interface TestPageMenu {
  id: number;
  column_1: string;
  column_2: string;
  column_3: string;
  column_4: number;
  unit: string;
  column_5: number;
  column_6: boolean;
  column_7: string;
  column_8: number;
  column_9: number;
  column_10: string;
}

const testPageMenuGetData = () => TestPageMenuData;

export function getData() {
  return new Promise<GeneralReponse<TestPageMenu>>((resolve, reject) => {
    setTimeout(() => {
      const TestPageMenuDataToCheck = testPageMenuGetData();
      if (TestPageMenuDataToCheck.statusCode === 200) {
        resolve(TestPageMenuDataToCheck);
      } else {
        reject(new Error("somehting went wrong"));
      }
    }, 50);
  });
}
