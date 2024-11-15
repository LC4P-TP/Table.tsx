import { InboundSuppliesData } from "../../../tests/testData/testData";
import { GeneralReponse } from "../slices/GeneralSliceTypes/generalSliceTypes";

export interface InboundSupplies {
  articleNumber: string;
  materialName: string;
  orderNumber: string;
  quantity: number;
  receiveDate: string;
  orderIndex: number;
  hasSample: boolean;
  cmrId: number;
  unit: string;
  backlog: number;
  supplier: string;
  warehouse: string;
  id: number;
  isArchived: boolean;
  created: string;
  createdBy: string | null;
  lastUpdateBy: string | null;
  lastUpdate: string | null;
  updatedQuantity: number;
}

const _getData = () => {
  return InboundSuppliesData;
};

export function getData() {
  return new Promise<GeneralReponse<InboundSupplies>>((resolve, reject) => {
    setTimeout(() => {
      const InboundSuppliesData = _getData();
      if (InboundSuppliesData.statusCode === 200) {
        resolve(InboundSuppliesData);
      } else {
        reject(new Error("somehting went wrong"));
      }
    }, 50);
  });
}
