import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InboundSupplies, getData } from "../mockAPI/InboundSuppliesAPI";
import { error, GeneralReponse } from "./GeneralSliceTypes/generalSliceTypes";

export interface TableDataInboundSupplies {
  id: number;
  articleNumber: string;
  materialName: string;
  receiveDate: string;
  quantity: string;
  backlog: number;
  hasSample: boolean;
  orderNumber: string;
  orderIndex: number;
  cmrId: number;
  warehouse: string;
}

interface InboundSuppliesState {
  loading: boolean;
  data: TableDataInboundSupplies[];
  pagination: object;
  error: error | null;
}

const initialState: InboundSuppliesState = {
  loading: false,
  data: [],
  pagination: {},
  error: { status: 0, message: "" },
};

export const fetchData = createAsyncThunk("testData/fetchData", async () => getData());

const generateState = (testData: GeneralReponse<InboundSupplies>): InboundSuppliesState => ({
  loading: false,
  data: testData.response.array.map((obj) => ({
    id: obj.id,
    articleNumber: obj.articleNumber,
    materialName: obj.materialName,
    receiveDate: obj.receiveDate,
    quantity: `${obj.quantity} ${obj.unit}`,
    backlog: obj.backlog,
    hasSample: obj.hasSample,
    orderNumber: obj.orderNumber,
    orderIndex: obj.orderIndex,
    cmrId: obj.cmrId,
    warehouse: obj.warehouse,
  })),
  pagination: {
    currentPage: testData.response.currentPage,
    pageCount: testData.response.pageCount,
  },
  error: !testData.isSuccess
    ? {
      status: testData.statusCode,
      message: testData.error || "Unknown error",
    }
    : null,
});

export const InboundSuppliesSlice = createSlice({
  name: "InboundSuppliesSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchData.pending, (state: InboundSuppliesState) => ({ ...state, loading: true }))
      .addCase(fetchData.fulfilled, (state, action: PayloadAction<GeneralReponse<InboundSupplies>>) => {
        const newState = generateState(action.payload);
        Object.assign(state, newState);
      })
      .addCase(fetchData.rejected, (state: InboundSuppliesState) => ({ ...state, loading: false }));
  },
});

export default InboundSuppliesSlice.reducer;
