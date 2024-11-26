import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TestData, getData } from "../../../services/mockAPI/testAPI";
import { error, GeneralReponse } from "../GeneralSliceTypes/generalSliceTypes";

interface TestState {
  loading: boolean;
  data: TestData[];
  pagination: object;
  error: error | null;
}

const initialState: TestState = {
  loading: false,
  data: [],
  pagination: {},
  error: { status: 0, message: "" },
};

export const fetchTestData = createAsyncThunk("testData/fetchTestData", async () => getData());

const generateState = (testData: GeneralReponse<TestData>): TestState => ({
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
});

export const testSlice = createSlice({
  name: "testSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTestData.pending, (state: TestState) => ({ ...state, loading: true }))
      .addCase(fetchTestData.fulfilled, (state, action: PayloadAction<GeneralReponse<TestData>>) => {
        const newState = generateState(action.payload);
        Object.assign(state, newState);
      })
      .addCase(fetchTestData.rejected, (state: TestState) => ({ ...state, loading: false }));
  },
});

export default testSlice.reducer;
