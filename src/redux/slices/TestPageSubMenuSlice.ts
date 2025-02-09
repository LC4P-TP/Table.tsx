import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TestPageSubMenu, getData } from "../../services/mockAPI/TestPageSubMenuAPI";
import { error, GeneralReponse } from "./GeneralSliceTypes/generalSliceTypes";
import { IdData } from "../../components/table/types";

interface TableDataTestPageSubMenu extends IdData {
  id: number;
  column_1: string;
  column_2: string;
  column_3: number;
}

interface TestPageMenuState {
  loading: boolean;
  data: TableDataTestPageSubMenu[];
  pagination: object;
  error: error | null;
}

const initialState: TestPageMenuState = {
  loading: false,
  data: [],
  pagination: {},
  error: { status: 0, message: "" },
};

export const fetchTestPageSubMenu = createAsyncThunk("testData/fetchTestPageSubMenu", async () => getData());

const generateState = (testData: GeneralReponse<TestPageSubMenu>): TestPageMenuState => ({
  loading: false,
  data: testData.response.array.map((obj) => ({
    id: obj.id,
    column_1: obj.column_1,
    column_2: obj.column_2,
    column_3: obj.column_3,
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
      .addCase(fetchTestPageSubMenu.pending, (state: TestPageMenuState) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchTestPageSubMenu.fulfilled, (state, action: PayloadAction<GeneralReponse<TestPageSubMenu>>) => {
        const newState = generateState(action.payload);
        Object.assign(state, newState);
      })
      .addCase(fetchTestPageSubMenu.rejected, (state: TestPageMenuState) => ({
        ...state,
        loading: false,
      }));
  },
});

export default TestPageMenuSlice.reducer;
