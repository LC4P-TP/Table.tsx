import { testData } from "../../../tests/testData/testData";
import { GeneralReponse } from "../slices/GeneralSliceTypes/generalSliceTypes";

export interface TestData {
  id: number;
  row1: string;
  row2: string;
  row3: boolean;
  row4: string;
  row5: number;
}

const _getData = () => {
  return testData;
};

export function getData() {
  return new Promise<GeneralReponse<TestData>>((resolve, reject) => {
    setTimeout(() => {
      const testData = _getData();
      if (testData.statusCode === 200) {
        resolve(testData);
      } else {
        reject(new Error("somehting went wrong"));
      }
    }, 50);
  });
}
