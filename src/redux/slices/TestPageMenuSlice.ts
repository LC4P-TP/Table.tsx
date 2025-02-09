import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TestPageMenu, getData } from "../../services/mockAPI/TestPageMenuAPI";
import { error, GeneralReponse } from "./GeneralSliceTypes/generalSliceTypes";
import { IdData } from "../../components/table/types";

interface TableDataTestPageMenu extends IdData {
  id: number;
  column_1: string;
  column_2: string;
  column_3: string;
  column_4: string;
  column_5: number;
  column_6: boolean;
  column_7: string;
  column_8: number;
  column_9: number;
  column_10: string;
}

interface TestPageMenuState {
  loading: boolean;
  data: TableDataTestPageMenu[];
  pagination: object;
  error: error | null;
}

const initialState: TestPageMenuState = {
  loading: false,
  data: [],
  pagination: {},
  error: { status: 0, message: "" },
};

export const fetchTestPageMenuData = createAsyncThunk("testData/fetchTestPageMenuData", async () => getData());

const generateState = (testData: GeneralReponse<TestPageMenu>): TestPageMenuState => ({
  loading: false,
  data: testData.response.array.map((obj) => ({
    id: obj.id,
    column_1: obj.column_1,
    column_2: obj.column_2,
    column_3: obj.column_3,
    column_4: `${obj.column_4} ${obj.unit}`,
    column_5: obj.column_5,
    column_6: obj.column_6,
    column_7: obj.column_7,
    column_8: obj.column_8,
    column_9: obj.column_9,
    column_10: obj.column_10,
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

export const TestPageMenuSlice = createSlice({
  name: "TestPageMenuSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTestPageMenuData.pending, (state: TestPageMenuState) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchTestPageMenuData.fulfilled, (state, action: PayloadAction<GeneralReponse<TestPageMenu>>) => {
        const newState = generateState(action.payload);
        Object.assign(state, newState);
      })
      .addCase(fetchTestPageMenuData.rejected, (state: TestPageMenuState) => ({
        ...state,
        loading: false,
      }));
  },
});

export default TestPageMenuSlice.reducer;
