import { testData } from "../testData/testData";

export type TestData = {
  id: number;
  row1: string;
  row2: string;
  row3: boolean;
  row4: string;
  row5: number;
};

const _getData = () => {
  return testData;
};

export function getData() {
  return new Promise<TestData[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(_getData());
    }, 1000);
  });
}
