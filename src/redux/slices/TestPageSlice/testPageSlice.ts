import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TestData, getData } from "../../mockAPI/api";
import { error, GeneralReponse } from "../GeneralSliceTypes/generalSliceTypes";

interface TestState {
  loading: boolean;
  data: TestData[];
  pagination: {};
  error: error | null;
}

const initialState: TestState = {
  loading: false,
  data: [],
  pagination: {},
  error: { status: 0, message: "" },
};

export const fetchData = createAsyncThunk("testData/fetchData", async () => getData());

const generateState = (testData: GeneralReponse<TestData>): TestState => {
  return {
    loading: false,
    data: testData.response.array,
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
  };
};

export const testSlice = createSlice({
  name: "testSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action: PayloadAction<GeneralReponse<TestData>>) => {
        const newState = generateState(action.payload);
        Object.assign(state, newState);
      })
      .addCase(fetchData.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default testSlice.reducer;
