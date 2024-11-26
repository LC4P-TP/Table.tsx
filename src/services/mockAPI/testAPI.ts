import { testData } from "../../../tests/testData/testData";
import { GeneralReponse } from "../../redux/slices/GeneralSliceTypes/generalSliceTypes";

export interface TestData {
  id: number;
  row1: string;
  row2: string;
  row3: boolean;
  row4: string;
  row5: number;
}

const testGetData = () => testData;

export function getData() {
  return new Promise<GeneralReponse<TestData>>((resolve, reject) => {
    setTimeout(() => {
      const testDataToCheck = testGetData();
      if (testDataToCheck.statusCode === 200) {
        resolve(testDataToCheck);
      } else {
        reject(new Error("somehting went wrong"));
      }
    }, 50);
  });
}
