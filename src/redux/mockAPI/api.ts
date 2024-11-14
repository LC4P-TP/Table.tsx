import { testData } from "../../../tests/testData/testData";

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
  return new Promise<TestData[]>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve(_getData());
      } else {
        reject(new Error("somehting went wrong"));
      }
    }, 50);
  });
}
